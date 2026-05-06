(function () {
  function safeString(v) {
    if (v === null || v === undefined) return "";
    return String(v);
  }

  function nowIso() {
    try {
      return new Date().toISOString();
    } catch (e) {
      return "";
    }
  }

  function getEmailFallback() {
    try {
      return (
        safeString(sessionStorage.getItem("auth0Email")) ||
        safeString(localStorage.getItem("loginEmail")) ||
        ""
      );
    } catch (e) {
      return "";
    }
  }

  function init() {
    if (!window.firebase || !window.firebase.initializeApp) return null;
    if (window.__firebaseApp) return window.__firebaseApp;

    var firebaseConfig = {
      apiKey: "AIzaSyAG3nKhIyqfTZb2ibahnvwkR0QC3wHkmZE",
      authDomain: "magatreasure.firebaseapp.com",
      projectId: "magatreasure",
      storageBucket: "magatreasure.firebasestorage.app",
      messagingSenderId: "635543945112",
      appId: "1:635543945112:web:975251faf18439980475ed",
      measurementId: "G-1D3BXQK8G8",
    };

    try {
      window.__firebaseApp = window.firebase.initializeApp(firebaseConfig);
      return window.__firebaseApp;
    } catch (e) {
      try {
        window.__firebaseApp =
          window.firebase.apps && window.firebase.apps.length
            ? window.firebase.app()
            : null;
      } catch (e2) {}
      return window.__firebaseApp || null;
    }
  }

  function decodeJwtPayload(token) {
    var raw = safeString(token).trim();
    if (!raw) return null;
    var parts = raw.split(".");
    if (parts.length < 2) return null;
    var b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    try {
      var pad = b64.length % 4;
      if (pad) b64 += new Array(5 - pad).join("=");
      var json = atob(b64);
      try {
        json = decodeURIComponent(
          json
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(""),
        );
      } catch (e) {}
      return JSON.parse(json);
    } catch (e2) {
      return null;
    }
  }

  function clamp(str, maxLen) {
    var s = safeString(str);
    if (!maxLen || maxLen <= 0) return s;
    return s.length > maxLen ? s.slice(0, maxLen) : s;
  }

  function normalizeEmail(email) {
    return safeString(email).trim().toLowerCase();
  }

  function saveUser(details) {
    init();

    var email = normalizeEmail(details && details.email);
    if (!email) email = normalizeEmail(getEmailFallback());
    if (!email) return Promise.resolve([]);

    var idToken = safeString(details && details.idToken).trim();
    var claims = decodeJwtPayload(idToken) || {};

    var payload = {
      email: clamp(email, 254),
      name: clamp(safeString(claims.name || claims.nickname || ""), 120),
      picture: clamp(safeString(claims.picture || ""), 400),
      auth0Sub: clamp(safeString(claims.sub || ""), 200),
      lastLoginAtIso: nowIso(),
      method: clamp(safeString((details && details.method) || ""), 80),
      userAgent: clamp(safeString(navigator.userAgent || ""), 512),
      origin: clamp(safeString(location.origin || ""), 200),
    };

    var tasks = [];

    try {
      if (window.firebase && window.firebase.firestore) {
        var db = window.firebase.firestore();
        tasks.push(
          db
            .collection("users")
            .doc(payload.email)
            .set(payload, { merge: true }),
        );
      }
    } catch (e) {}

    try {
      if (window.firebase && window.firebase.database) {
        var rtdb = window.firebase.database();
        tasks.push(
          rtdb
            .ref("users/" + encodeURIComponent(payload.email))
            .update(payload),
        );
      }
    } catch (e) {}

    return Promise.allSettled(tasks);
  }

  function logLogin(details) {
    init();
    var email =
      (details && safeString(details.email).trim()) || getEmailFallback();

    var payload = {
      email: clamp(email, 254),
      method: clamp(
        (details && safeString(details.method)) || "auth0_passwordless_email",
        80,
      ),
      createdAtIso: nowIso(),
      userAgent: clamp(safeString(navigator.userAgent || ""), 512),
      origin: clamp(safeString(location.origin || ""), 200),
    };

    var tasks = [];

    try {
      if (window.firebase && window.firebase.firestore) {
        var db = window.firebase.firestore();
        tasks.push(db.collection("logins").add(payload));
      }
    } catch (e) {}

    try {
      if (window.firebase && window.firebase.database) {
        var rtdb = window.firebase.database();
        tasks.push(rtdb.ref("logins").push(payload));
      }
    } catch (e) {}

    return Promise.allSettled(tasks);
  }

  window.FirebaseClient = {
    init: init,
    saveUser: saveUser,
    logLogin: logLogin,
  };
})();
