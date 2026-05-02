(function () {
  function readJson(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  function isNonEmptyString(v) {
    return typeof v === "string" && v.trim().length > 0;
  }

  function isConfigUsable(cfg) {
    if (!cfg) return false;
    var required = ["apiKey", "authDomain", "projectId", "appId"];
    for (var i = 0; i < required.length; i++) {
      if (!isNonEmptyString(cfg[required[i]])) return false;
    }
    return true;
  }

  if (!isConfigUsable(window.trackingFirebaseConfig)) {
    window.trackingFirebaseConfig = {
      apiKey: "AIzaSyAG3nKhIyqfTZb2ibahnvwkR0QC3wHkmZE",
      authDomain: "magatreasure.firebaseapp.com",
      projectId: "magatreasure",
      storageBucket: "magatreasure.firebasestorage.app",
      messagingSenderId: "635543945112",
      appId: "1:635543945112:web:975251faf18439980475ed",
      measurementId: "G-1D3BXQK8G8",
    };
  }

  function getConfig() {
    if (isConfigUsable(window.trackingFirebaseConfig))
      return window.trackingFirebaseConfig;
    var stored =
      readJson(localStorage.getItem("trackingFirebaseConfig")) ||
      readJson(localStorage.getItem("firebaseConfig")) ||
      null;
    if (isConfigUsable(stored)) return stored;
    return null;
  }

  function ensureScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (existing.getAttribute("data-loaded") === "true") return resolve();
        existing.addEventListener("load", function () {
          existing.setAttribute("data-loaded", "true");
          resolve();
        });
        existing.addEventListener("error", reject);
        return;
      }

      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.addEventListener("load", function () {
        s.setAttribute("data-loaded", "true");
        resolve();
      });
      s.addEventListener("error", reject);
      document.head.appendChild(s);
    });
  }

  function loadSdk(version) {
    var v = isNonEmptyString(version) ? version : "10.12.5";
    return ensureScript(
      "https://www.gstatic.com/firebasejs/" + v + "/firebase-app-compat.js",
    )
      .then(function () {
        return ensureScript(
          "https://www.gstatic.com/firebasejs/" +
            v +
            "/firebase-auth-compat.js",
        );
      })
      .then(function () {
        return ensureScript(
          "https://www.gstatic.com/firebasejs/" +
            v +
            "/firebase-firestore-compat.js",
        );
      });
  }

  function ensureInitialized() {
    if (!window.firebase || !firebase.initializeApp) {
      return { ok: false, reason: "sdk" };
    }
    var cfg = getConfig();
    if (!cfg) return { ok: false, reason: "config" };
    try {
      if (!firebase.apps || firebase.apps.length === 0) {
        firebase.initializeApp(cfg);
      }
      return { ok: true };
    } catch (e) {
      return { ok: false, reason: "init" };
    }
  }

  function serverTimestamp() {
    try {
      return firebase.firestore.FieldValue.serverTimestamp();
    } catch (e) {
      return null;
    }
  }

  function signInWithEmailAndPassword(email, password) {
    try {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function signInAnonymously() {
    try {
      return firebase.auth().signInAnonymously();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function sendSignInLinkToEmail(email, actionCodeSettings) {
    try {
      return firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function isSignInWithEmailLink(link) {
    try {
      return firebase.auth().isSignInWithEmailLink(link);
    } catch (e) {
      return false;
    }
  }

  function signInWithEmailLink(email, link) {
    try {
      return firebase.auth().signInWithEmailLink(email, link);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function signOut() {
    try {
      return firebase.auth().signOut();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function onAuthStateChanged(cb) {
    try {
      return firebase.auth().onAuthStateChanged(cb);
    } catch (e) {
      return function () {};
    }
  }

  function currentUser() {
    try {
      return firebase.auth().currentUser;
    } catch (e) {
      return null;
    }
  }

  function writeToFirestore(collectionName, data) {
    try {
      return firebase.firestore().collection(collectionName).add(data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function init(options) {
    var opts = options || {};
    return loadSdk(opts.sdkVersion).then(function () {
      var r = ensureInitialized();
      if (!r.ok) {
        var err = new Error(
          r.reason === "config"
            ? "Firebase config missing"
            : "Firebase init failed",
        );
        err.code = r.reason;
        throw err;
      }
      return true;
    });
  }

  window.FirebaseAuthHelper = {
    init: init,
    getConfig: getConfig,
    ensureInitialized: ensureInitialized,
    serverTimestamp: serverTimestamp,
    signInWithEmailAndPassword: signInWithEmailAndPassword,
    signInAnonymously: signInAnonymously,
    sendSignInLinkToEmail: sendSignInLinkToEmail,
    isSignInWithEmailLink: isSignInWithEmailLink,
    signInWithEmailLink: signInWithEmailLink,
    signOut: signOut,
    onAuthStateChanged: onAuthStateChanged,
    currentUser: currentUser,
    writeToFirestore: writeToFirestore,
  };
})();
