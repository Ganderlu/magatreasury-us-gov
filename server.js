const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.disable("x-powered-by");

const ROOT_DIR = __dirname;
const DB_FILE = path.join(ROOT_DIR, "db.json");

// Helper to read DB
const readDB = () => {
  if (!fs.existsSync(DB_FILE)) return { orders: [], products: [] };
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
};

// Helper to write DB
const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(ROOT_DIR, { extensions: ["html", "htm"] }));

// ====================== Auth0 Config ======================
const AUTH0_DOMAIN = "dev-v5jb4jp8jpd5zw86.us.auth0.com";
const AUTH0_CLIENT_ID = "mEjDdiRLe9FAU8LUgY351CGWlDb2Kc4G";

// ====================== Admin Routes ======================

// Get all orders
app.get("/api/admin/orders", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});

// Update order status
app.post("/api/admin/orders/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDB();
  const order = db.orders.find((o) => o.id === id);
  if (order) {
    order.status = status;
    writeDB(db);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

// Get dashboard stats
app.get("/api/admin/stats", (req, res) => {
  const db = readDB();
  const totalOrders = db.orders.length;
  const totalSales = db.orders.reduce((acc, curr) => acc + curr.total, 0);
  const pendingOrders = db.orders.filter((o) => o.status === "Pending").length;

  res.json({
    totalOrders,
    totalSales,
    pendingOrders,
    recentOrders: db.orders.slice(-5).reverse(),
  });
});

// Get all products
app.get("/api/admin/products", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

// Update product
app.post("/api/admin/products/:id", (req, res) => {
  const { id } = req.params;
  const { price, name } = req.body;
  const db = readDB();
  const product = db.products.find((p) => p.id === id);
  if (product) {
    if (price !== undefined) product.price = Number(price);
    if (name !== undefined) product.name = name;
    writeDB(db);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Create a new order (Public)
app.post("/api/orders", (req, res) => {
  const { customer, email, items, total } = req.body;
  if (!email || !items || !total) {
    return res.status(400).json({ error: "Missing order data" });
  }

  const db = readDB();
  const newOrder = {
    id: "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    customer: customer || "Guest",
    email,
    items,
    total: Number(total),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  db.orders.push(newOrder);
  writeDB(db);

  console.log("🛒 New order created:", newOrder.id);
  res.json({ success: true, orderId: newOrder.id });
});

// ====================== Public Routes ======================

app.post("/api/start-otp", async (req, res) => {
  const { email } = req.body;
  console.log("📧 OTP request for:", email);

  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const response = await fetch(`https://${AUTH0_DOMAIN}/passwordless/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: AUTH0_CLIENT_ID,
        email: email,
        connection: "email", // ← This was missing
        send: "code",
        authParams: { scope: "openid profile email" },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ OTP sent successfully to", email);
      res.json({ success: true, message: "OTP sent" });
    } else {
      console.error("Auth0 Error:", data);
      res
        .status(400)
        .json({ error: data.error_description || "Failed to send OTP" });
    }
  } catch (err) {
    console.error("Start OTP Error:", err);
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

app.post("/api/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).json({ error: "Email and OTP required" });

  try {
    const response = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
        client_id: AUTH0_CLIENT_ID,
        username: email,
        otp: otp,
        realm: "email",
        scope: "openid profile email",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Login successful for", email);
      res.json({ success: true, token: data.id_token });
    } else {
      console.error("Verify Error:", data);
      res.status(400).json({ error: "Invalid or expired code" });
    }
  } catch (err) {
    console.error("Verify OTP Error:", err);
    res.status(500).json({ error: "Verification failed" });
  }
});

// Get current user info
app.get("/api/me", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token" });

  try {
    // Decode ID token (simple base64 decode)
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString(),
    );

    res.json({
      success: true,
      user: {
        email: payload.email,
        userId:
          "USR-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
        name: payload.name || payload.email.split("@")[0],
        loggedInAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.htm"));
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
