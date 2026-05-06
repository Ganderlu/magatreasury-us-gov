const path = require("path");
const express = require("express");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const jwksRsa = require("jwks-rsa");

require("dotenv").config();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));

const ROOT_DIR = __dirname;

function safeString(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

function normalizeEmail(email) {
  return safeString(email).trim().toLowerCase();
}

function isValidEmail(email) {
  const s = normalizeEmail(email);
  if (!s) return false;
  if (s.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

let mongoClientPromise = null;
async function getMongo() {
  if (mongoClientPromise) return mongoClientPromise;
  const uri = safeString(process.env.MONGODB_URI).trim();
  if (!uri) throw new Error("MONGODB_URI is required");
  const client = new MongoClient(uri);
  mongoClientPromise = client.connect().then(() => client);
  return mongoClientPromise;
}

let jwksClient = null;
function getJwksClient() {
  if (jwksClient) return jwksClient;
  const domain = safeString(process.env.AUTH0_DOMAIN).trim();
  if (!domain) throw new Error("AUTH0_DOMAIN is required");
  jwksClient = jwksRsa({
    cache: true,
    cacheMaxEntries: 10,
    cacheMaxAge: 60 * 60 * 1000,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  });
  return jwksClient;
}

function verifyAuth0IdToken(idToken) {
  return new Promise((resolve, reject) => {
    const domain = safeString(process.env.AUTH0_DOMAIN).trim();
    const clientId = safeString(process.env.AUTH0_CLIENT_ID).trim();
    if (!domain || !clientId) {
      reject(new Error("AUTH0_DOMAIN and AUTH0_CLIENT_ID are required"));
      return;
    }

    const getKey = (header, cb) => {
      try {
        getJwksClient().getSigningKey(header.kid, (err, key) => {
          if (err) return cb(err);
          const signingKey = key.getPublicKey();
          cb(null, signingKey);
        });
      } catch (e) {
        cb(e);
      }
    };

    jwt.verify(
      idToken,
      getKey,
      {
        audience: clientId,
        issuer: `https://${domain}/`,
        clockTolerance: 5,
      },
      (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded || {});
      },
    );
  });
}

app.post("/api/users/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body && req.body.email);
    const idToken = safeString(req.body && req.body.idToken).trim();
    const method = safeString(req.body && req.body.method).trim();

    if (!isValidEmail(email)) {
      res.status(400).json({ ok: false, error: "invalid_email" });
      return;
    }
    if (!idToken) {
      res.status(400).json({ ok: false, error: "missing_id_token" });
      return;
    }

    let claims;
    try {
      claims = await verifyAuth0IdToken(idToken);
    } catch (e) {
      res.status(401).json({ ok: false, error: "invalid_id_token" });
      return;
    }
    const claimEmail = normalizeEmail(claims && claims.email);
    if (!claimEmail || claimEmail !== email) {
      res.status(401).json({ ok: false, error: "email_mismatch" });
      return;
    }

    const dbName = safeString(process.env.MONGODB_DB).trim() || "official";
    const usersColName =
      safeString(process.env.MONGODB_USERS_COLLECTION).trim() || "users";
    const loginsColName =
      safeString(process.env.MONGODB_LOGINS_COLLECTION).trim() || "logins";

    let client;
    try {
      client = await getMongo();
    } catch (e) {
      res.status(500).json({ ok: false, error: "mongo_connect_failed" });
      return;
    }
    const db = client.db(dbName);
    const users = db.collection(usersColName);
    const logins = db.collection(loginsColName);

    const now = new Date();
    const payload = {
      email: email,
      auth0Sub: safeString(claims && claims.sub).trim(),
      name: safeString(claims && (claims.name || claims.nickname)).trim(),
      picture: safeString(claims && claims.picture).trim(),
      lastLoginAt: now,
      method: method || "auth0_passwordless_email",
      updatedAt: now,
    };

    try {
      await Promise.all([
        users.updateOne({ email: email }, { $set: payload }, { upsert: true }),
        logins.insertOne({
          email: email,
          method: payload.method,
          createdAt: now,
          userAgent: safeString(req.get("user-agent")).slice(0, 512),
          origin: safeString(req.get("origin")).slice(0, 200),
        }),
      ]);
    } catch (e) {
      res.status(500).json({ ok: false, error: "mongo_write_failed" });
      return;
    }

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: "server_error" });
  }
});

app.use(express.static(ROOT_DIR, { extensions: ["html", "htm"] }));

app.get("*", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.htm"));
});

const port = Number(process.env.PORT || 3000);
app.listen(port);
