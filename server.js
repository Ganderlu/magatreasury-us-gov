const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.disable("x-powered-by");

const ROOT_DIR = __dirname;

// ====================== Middleware ======================
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(ROOT_DIR));

// ====================== Auth0 Config ======================
const AUTH0_DOMAIN = "dev-v5jb4jp8jpd5zw86.us.auth0.com";
const AUTH0_CLIENT_ID = "mEjDdiRLe9FAU8LUgY351CGWlDb2Kc4G";

// ====================== Routes ======================

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working successfully!" });
});

// Start OTP
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
        connection: "email",
        send: "code",
        authParams: { scope: "openid profile email" }
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ OTP sent to", email);
      res.json({ success: true, message: "OTP sent" });
    } else {
      console.error("Auth0 Start Error:", data);
      res.status(400).json({ error: data.error_description || "Failed to send OTP" });
    }
  } catch (err) {
    console.error("Start OTP Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Verify OTP
app.post("/api/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  console.log("🔑 Verifying OTP for:", email);

  if (!email || !otp) return res.status(400).json({ error: "Email and OTP required" });

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
        scope: "openid profile email"
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Login successful for", email);
      res.json({ success: true, token: data.id_token });
    } else {
      console.error("Auth0 Verify Error:", data);
      res.status(400).json({ error: data.error_description || "Invalid or expired code" });
    }
  } catch (err) {
    console.error("Verify OTP Error:", err);
    res.status(500).json({ error: "Verification failed. Please try again." });
  }
});

// Get User Info
app.get("/api/me", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    res.json({
      success: true,
      user: {
        email: payload.email,
        userId: "USR-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
        name: payload.name || payload.email.split("@")[0]
      }
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ====================== Static Files & Catch-all ======================
app.get("*", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.htm"));
});

module.exports = app;