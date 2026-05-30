const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const admin = require("firebase-admin");
const { body, query, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Resend } = require("resend");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10kb" }));
app.use(helmet({ contentSecurityPolicy: false }));

// FIX: Serve static files with 'html' and 'htm' extensions for clean URLs
app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html", "htm"],
  }),
);
app.use(
  express.static(__dirname, {
    index: "index.htm",
    extensions: ["html", "htm"],
    setHeaders: (res, path) => {
      // Block sensitive files from being served
      const sensitiveFiles = [
        ".env",
        "server.js",
        "package.json",
        "firebase-service-account.json",
        "FIXES.md",
      ];
      if (sensitiveFiles.some((file) => path.endsWith(file))) {
        res.status(403).end();
      }
    },
  }),
);

// Route for the root to explicitly serve index.htm
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.htm"));
});

const resend = new Resend("re_iZTQy4TE_JDvmn89butKcs7nZ9xcait1T");
const JWT_SECRET = "your-super-secret-jwt-key-2026";

// In-memory OTP store
const otpStore = new Map();

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ====================== Firebase Initialization ======================
/**
 * FIX: Using service account JSON file for reliable initialization.
 */
const serviceAccountPath = path.join(
  __dirname,
  "firebase-service-account.json",
);

if (admin.apps.length === 0) {
  try {
    const serviceAccount = require(serviceAccountPath);
    console.log(
      "Using project ID from service account:",
      serviceAccount.project_id,
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.project_id,
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });
    console.log(
      "Firebase Admin initialized successfully for project:",
      serviceAccount.project_id,
    );
  } catch (error) {
    console.error("Firebase initialization error:", error.message);
    try {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
      console.log(
        "Firebase Admin initialized successfully using applicationDefault",
      );
    } catch (fallbackError) {
      console.error(
        "Firebase fallback initialization error:",
        fallbackError.message,
      );
    }
  }
}

const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore(admin.app(), "default");
// Auth0 Config
const AUTH0_DOMAIN = "dev-v5jb4jp8jpd5zw86.us.auth0.com";
const AUTH0_CLIENT_ID = "mEjDdiRLe9FAU8LUgY351CGWlDb2Kc4G";
// Ensure Firestore uses the correct settings
try {
  db.settings({ ignoreUndefinedProperties: true });
} catch (error) {
  console.warn("Firestore settings warning:", error.message);
}

// Diagnostic test on startup
(async () => {
  console.log("--- Firestore Diagnostic ---");
  try {
    const testDoc = await db.collection("_diagnostic").doc("status").get();
    console.log("Firestore connection: SUCCESS");
  } catch (error) {
    console.error("Firestore Diagnostic FAILED:");
    if (error.code === 5 || error.message.includes("NOT_FOUND")) {
      console.error(
        "  ERROR: Database not found. Please double-check your Firebase Console.",
      );
      console.error("  Project ID:", admin.app().options.projectId);
      console.error(
        '  Make sure "Firestore Database" is created and named "(default)".',
      );
    } else {
      console.error("  ERROR:", error.message);
    }
  }
  console.log("---------------------------");
})();

// ====================== SEND OTP ======================
app.post("/api/start-otp", async (req, res) => {
  const { email } = req.body;
  console.log("📧 OTP request for:", email);

  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000;

    // Save OTP
    otpStore.set(email, { otp, expiresAt });

    // Send Email with better sender
    const result = await resend.emails.send({
      from: "Maga Treasury <hello@magatreasury.com>", // Try this
      to: email,
      subject: "Your 6-Digit Login Code - Maga Treasury",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; background: #f9f9f9;">
          <h2 style="color: #111827;">Your Login Code</h2>
          <h1 style="color: #5a31f4; font-size: 48px; letter-spacing: 8px; margin: 20px 0;">${otp}</h1>
          <p style="font-size: 16px; color: #444;">This code will expire in 10 minutes.</p>
          <p style="font-size: 14px; color: #666; margin-top: 30px;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });

    console.log("✅ Email sent. Resend ID:", result.data?.id);
    res.json({ success: true, message: "OTP sent to your email" });
  } catch (err) {
    console.error("❌ Send OTP Error:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

const fs = require("fs");

/**
 * GET /api/search
 * Simple full-text search across HTML files
 */
app.get("/api/search", async (req, res) => {
  const query = (req.query.q || req.query.query || "").toLowerCase();
  if (!query || query.length < 2) {
    return res.json({ success: true, results: [] });
  }

  try {
    const results = [];
    const filesToSearch = [];

    // Recursively find all HTML files
    function walkDir(dir) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          // Skip node_modules and assets
          if (file !== "node_modules" && file !== "assets" && file !== ".git") {
            walkDir(filePath);
          }
        } else if (file.endsWith(".html") || file.endsWith(".htm")) {
          filesToSearch.push(filePath);
        }
      }
    }

    walkDir(__dirname);

    for (const filePath of filesToSearch) {
      const content = fs.readFileSync(filePath, "utf8");
      // Basic check if query exists in content (excluding tags)
      const textOnly = content.replace(/<[^>]*>?/gm, " ");
      if (textOnly.toLowerCase().includes(query)) {
        // Extract title
        let title = path.basename(filePath);
        const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
        if (titleMatch && titleMatch[1]) {
          title = titleMatch[1].trim();
        } else {
          const h1Match = content.match(/<h1>([^<]*)<\/h1>/i);
          if (h1Match && h1Match[1]) {
            title = h1Match[1].trim();
          }
        }

        // Get relative URL
        let url = path.relative(__dirname, filePath).replace(/\\/g, "/");
        if (!url.startsWith("/")) url = "/" + url;

        // Create a small snippet
        const index = textOnly.toLowerCase().indexOf(query);
        const start = Math.max(0, index - 60);
        const end = Math.min(textOnly.length, index + query.length + 60);
        let snippet = textOnly.substring(start, end).trim();
        if (start > 0) snippet = "..." + snippet;
        if (end < textOnly.length) snippet = snippet + "...";

        results.push({
          title,
          url,
          snippet,
        });

        if (results.length >= 20) break; // Limit results
      }
    }

    res.json({ success: true, results });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ success: false, message: "Search failed" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    firebase: admin.apps.length > 0 ? "initialized" : "failed",
    timestamp: new Date().toISOString(),
  });
});

// ====================== VERIFY OTP ======================
app.post("/api/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).json({ error: "Email and OTP required" });

  const stored = otpStore.get(email);

  if (!stored)
    return res
      .status(400)
      .json({ error: "No OTP request found. Request new code." });
  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return res
      .status(400)
      .json({ error: "OTP has expired. Request new code." });
  }
  if (stored.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });

  otpStore.delete(email);

  res.json({
    success: true,
    token,
    message: "Login successful",
  });
});

/**
 * GET /api/admin/users
 * Retrieve all users for admin dashboard (with addresses)
 */
app.get("/api/admin/users", async (req, res) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    const users = [];
    usersSnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching admin users:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/payment-verifications
 * Create a new payment verification
 */
app.post(
  "/api/payment-verifications",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email address"),
    body("usdAmount").notEmpty().withMessage("Amount is required"),
  ],
  async (req, res) => {
    try {
      const data = {
        ...req.body,
        timestamp: new Date().toISOString(),
      };
      await db.collection("payment_verifications").add(data);
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving verification:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
);

/**
 * GET /api/admin/data
 * Retrieve all data for admin dashboard
 */
app.get("/api/admin/data", async (req, res) => {
  try {
    const [verificationsSnapshot, ordersSnapshot] = await Promise.all([
      db.collection("payment_verifications").get(),
      db.collection("orders").get(),
    ]);

    const allItems = [];
    verificationsSnapshot.forEach((doc) => {
      const data = doc.data();
      allItems.push({
        id: doc.id,
        collection: "payment_verifications",
        ...data,
        type: "Crypto",
        timestamp: data.timestamp || new Date(0).toISOString(),
      });
    });

    ordersSnapshot.forEach((doc) => {
      const data = doc.data();
      allItems.push({
        id: doc.id,
        collection: "orders",
        ...data,
        type: "Standard",
        timestamp: data.createdAt
          ? data.createdAt.toDate
            ? data.createdAt.toDate().toISOString()
            : data.createdAt
          : data.deliveryDate || new Date(0).toISOString(),
      });
    });

    res.json({ success: true, data: allItems });
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/subscribe
 * Save email for newsletter subscription
 */
app.post("/api/subscribe", body("email").isEmail(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, error: "Invalid email" });
  }

  const { email } = req.body;

  try {
    const db = admin.firestore();
    await db.collection("subscribers").add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ success: false, error: "Failed to subscribe" });
  }
});

/**
 * POST /api/admin/update-status
 * Update status of an order or verification and notify the user
 */
app.post(
  "/api/admin/update-status",
  [
    body("id").notEmpty().withMessage("ID is required"),
    body("collection")
      .isIn(["orders", "payment_verifications"])
      .withMessage("Invalid collection"),
    body("status").notEmpty().withMessage("Status is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { id, collection, status } = req.body;
      const docRef = db.collection(collection).doc(id);
      const docSnap = await docRef.get();

      if (!docSnap.exists) {
        return res
          .status(404)
          .json({ success: false, message: "Document not found" });
      }

      const data = docSnap.data();
      const userEmail = data.email;

      await docRef.update({ status });

      // Send notification email if status is 'verified' or 'rejected'
      if (userEmail && (status === "verified" || status === "rejected")) {
        try {
          const isVerified = status === "verified";
          const amount = data.usdAmount || data.total || "0.00";
          const subject = isVerified
            ? "Payment Verified - Order #" + id.substring(0, 8).toUpperCase()
            : "Payment Rejected - Order #" + id.substring(0, 8).toUpperCase();

          const emailHtml = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
              <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                <img src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/LIMITED_TIME_OFFER_3_x320.png?v=1772663214" alt="Maga Treasury" style="width: 150px;">
              </div>
              
              <div style="padding: 30px 0; text-align: center;">
                <h1 style="color: ${isVerified ? "#16a34a" : "#dc2626"}; font-size: 24px; margin-bottom: 10px;">
                  Payment ${isVerified ? "Verified Successfully" : "Rejected"}
                </h1>
                <p style="font-size: 16px; color: #666;">
                  ${isVerified ? "Great news! Your payment has been confirmed." : "Unfortunately, we could not verify your payment at this time."}
                </p>
              </div>

              <div style="background-color: #f9fafb; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h2 style="font-size: 18px; margin-top: 0; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Order Details</h2>
                <table style="width: 100%; font-size: 14px; margin-top: 10px;">
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Order Reference:</td>
                    <td style="padding: 5px 0; text-align: right; font-weight: 600;">${id.substring(0, 8).toUpperCase()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Amount Paid:</td>
                    <td style="padding: 5px 0; text-align: right; font-weight: 600;">$${parseFloat(amount).toFixed(2)} USD</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Status:</td>
                    <td style="padding: 5px 0; text-align: right;">
                      <span style="background-color: ${isVerified ? "#dcfce7" : "#fee2e2"}; color: ${isVerified ? "#166534" : "#991b1b"}; padding: 4px 12px; border-radius: 99px; font-weight: 700; font-size: 12px; text-transform: uppercase;">
                        ${status}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              ${
                isVerified
                  ? `
                <div style="margin-bottom: 30px;">
                  <h3 style="font-size: 16px; color: #111;">Next Steps:</h3>
                  <ul style="padding-left: 20px; color: #4b5563;">
                    <li>Your order is now being processed for shipment.</li>
                    <li>You will receive another update once your tracking number is available.</li>
                    <li>Estimated delivery time: 3-7 business days.</li>
                  </ul>
                </div>
              `
                  : `
                <div style="margin-bottom: 30px; border-left: 4px solid #dc2626; padding-left: 15px;">
                  <p style="color: #4b5563;">If you believe this was an error, please contact our support team immediately with your payment proof.</p>
                </div>
              `
              }

              <div style="text-align: center; margin-top: 40px;">
                <a href="https://magatreasury.com/orders.html" style="background-color: #111827; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">View Your Order</a>
              </div>

              <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #9ca3af; font-size: 12px;">
                <p>&copy; 2026 Maga Treasury. All rights reserved.</p>
                <p>This is an automated message, please do not reply to this email.</p>
              </div>
            </div>
          `;

          await resend.emails.send({
            from: "Maga Treasury <noreply@magatreasury.com>",
            to: userEmail,
            subject: subject,
            html: emailHtml,
          });

          console.log(
            `✅ Status update email sent to ${userEmail} for status ${status}`,
          );
        } catch (emailErr) {
          console.error("❌ Failed to send status update email:", emailErr);
          // Don't fail the whole request if email fails, but log it
        }
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
);

/**
 * GET /api/user/orders
 * Retrieve orders for a specific user
 */
app.get(
  "/api/user/orders",
  [query("email").isEmail().withMessage("Invalid email")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { email } = req.query;
      const [verificationsSnapshot, ordersSnapshot] = await Promise.all([
        db
          .collection("payment_verifications")
          .where("email", "==", email)
          .get(),
        db.collection("orders").where("email", "==", email).get(),
      ]);

      const items = [];
      verificationsSnapshot.forEach((doc) => {
        const data = doc.data();
        items.push({ id: doc.id, type: "Crypto", ...data });
      });

      ordersSnapshot.forEach((doc) => {
        const data = doc.data();
        // Convert Firestore timestamp to ISO string for consistency
        if (data.createdAt && typeof data.createdAt.toDate === "function") {
          data.createdAt = data.createdAt.toDate().toISOString();
        }
        items.push({ id: doc.id, type: "Standard", ...data });
      });

      res.json({ success: true, data: items });
    } catch (error) {
      console.error("Error fetching user orders:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
);

/**
 * GET /api/users
 * Retrieve a user profile
 */
app.get(
  "/api/users",
  [query("email").isEmail().withMessage("Invalid email")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { email } = req.query;
      const userDoc = await db.collection("users").doc(email).get();

      if (!userDoc.exists) {
        return res.json({ success: true, data: { email } });
      }

      res.json({ success: true, data: userDoc.data() });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
);

/**
 * POST /api/users
 * Create or update a user profile
 */
app.post(
  "/api/users",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email address"),
    body("firstName").optional().trim().escape(),
    body("lastName").optional().trim().escape(),
    body("newsletter").optional().isBoolean(),
    body("address").optional().isObject(),
  ],
  async (req, res) => {
    try {
      const { email, ...userData } = req.body;
      const userRef = db.collection("users").doc(email);

      await userRef.set(
        {
          ...userData,
          email: email,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving user profile:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
);

/**
 * POST /api/orders
 * Create a new order in Firestore
 */
app.post(
  "/api/orders",
  [
    // FIX: Added strict input validation and sanitization (fixes missing validation)
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email address"),
    body("deliveryDate")
      .optional()
      .isISO8601()
      .withMessage("Delivery date must be a valid ISO 8601 date"),
    body("countryRegion")
      .trim()
      .notEmpty()
      .withMessage("Country/Region is required")
      .escape(),
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .escape(),
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .escape(),
    body("address")
      .trim()
      .notEmpty()
      .withMessage("Address is required")
      .escape(),
    body("apartment").optional().trim().escape(),
    body("city").trim().notEmpty().withMessage("City is required").escape(),
    body("state").trim().notEmpty().withMessage("State is required").escape(),
    body("zipCode")
      .trim()
      .notEmpty()
      .withMessage("ZIP code is required")
      .escape(),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .escape(),
  ],
  async (req, res) => {
    console.log("Incoming order request:", JSON.stringify(req.body, null, 2));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.warn(
        "Validation errors:",
        JSON.stringify(errors.array(), null, 2),
      );
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const orderData = {
        ...req.body,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      console.log('Saving to Firestore collection "orders"...');
      const docRef = await db.collection("orders").add(orderData);
      console.log("Order saved successfully with ID:", docRef.id);

      res.status(201).json({
        success: true,
        id: docRef.id,
      });
    } catch (error) {
      console.error("CRITICAL: Error saving order to Firestore:", error);
      let errorDetail = error.message;

      // Check for common Firestore error codes
      if (error.code === 5 || error.message.includes("NOT_FOUND")) {
        errorDetail =
          `Firestore database not found for project "${admin.instanceId ? admin.app().options.projectId : "unknown"}". \n` +
          `1. Verify project ID in firebase-service-account.json matches your console.\n` +
          `2. Ensure "Firestore Database" (NOT Realtime Database) is created.\n` +
          `3. Check if the database ID is "(default)". If you named it something else, the SDK won't find it automatically.`;
      } else if (
        error.code === 7 ||
        error.message.includes("PERMISSION_DENIED")
      ) {
        errorDetail =
          "Database permission denied. Check your Firestore Security Rules.";
      }

      res.status(500).json({
        success: false,
        message: "Server error: " + errorDetail,
      });
    }
  },
);

/**
 * GET /api/orders
 * Retrieve orders with pagination and filtering
 */
app.get(
  "/api/orders",
  [
    query("limit").optional().isInt({ min: 1, max: 100 }).toInt(),
    query("pageToken").optional().isString(),
    query("sort").optional().isIn(["asc", "desc"]),
    query("fromDate").optional().isISO8601(),
    query("toDate").optional().isISO8601(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const {
        limit = 50,
        pageToken,
        sort = "desc",
        fromDate,
        toDate,
      } = req.query;

      let queryRef = db.collection("orders").orderBy("createdAt", sort);

      if (fromDate) {
        queryRef = queryRef.where("createdAt", ">=", new Date(fromDate));
      }
      if (toDate) {
        queryRef = queryRef.where("createdAt", "<=", new Date(toDate));
      }

      if (pageToken) {
        const lastDoc = await db.collection("orders").doc(pageToken).get();
        if (lastDoc.exists) {
          queryRef = queryRef.startAfter(lastDoc);
        }
      }

      const snapshot = await queryRef.limit(limit).get();

      const orders = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // FIX: Convert Firestore timestamps to ISO strings (as requested)
          createdAt: data.createdAt
            ? data.createdAt.toDate().toISOString()
            : null,
          deliveryDate: data.deliveryDate, // Already ISO string from validation
        };
      });

      const nextPageToken =
        snapshot.docs.length === limit
          ? snapshot.docs[snapshot.docs.length - 1].id
          : null;

      res.json({
        success: true,
        orders,
        nextPageToken,
      });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
);

// ====================== Rate Limiting Suggestion ======================
/**
 * NOTE: For production, enable express-rate-limit:
 * const rateLimit = require('express-rate-limit');
 * const limiter = rateLimit({
 *   windowMs: 15 * 60 * 1000, // 15 minutes
 *   max: 100 // limit each IP to 100 requests per windowMs
 * });
 * app.use('/api/', limiter);
 */

// Catch-all to serve index.htm for SPA behavior or clean URL routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.htm"));
});

// Catch-all for 404
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// ====================== Server Start & Graceful Shutdown ======================
const PORT = process.env.PORT || 3000;

function startServer(port) {
  const server = app
    .listen(port)
    .on("listening", () => {
      console.log(`Server running on port ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`Port ${port} is busy, trying ${parseInt(port) + 1}...`);
        startServer(parseInt(port) + 1);
      } else {
        console.error("Server error:", err);
      }
    });

  // FIX: Added graceful shutdown handlers (fixes missing signal handling)
  const shutdown = () => {
    console.log("Shutting down gracefully...");
    server.close(() => {
      console.log("Closed out remaining connections");
      process.exit(0);
    });
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);

  return server;
}

const server = startServer(PORT);

module.exports = server;
