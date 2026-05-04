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

  function logLogin(details) {
    init();
    var email =
      (details && safeString(details.email).trim()) || getEmailFallback();

    var payload = {
      email: email,
      method: (details && safeString(details.method)) || "auth0_passwordless_email",
      createdAtIso: nowIso(),
      userAgent: safeString(navigator.userAgent || ""),
      origin: safeString(location.origin || ""),
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
    logLogin: logLogin,
  };
})();
