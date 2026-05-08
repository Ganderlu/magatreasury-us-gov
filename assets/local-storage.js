(function () {
  function safeString(v) {
    if (v === null || v === undefined) return "";
    return String(v).trim();
  }

  function tryGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function trySet(key, value) {
    try {
      localStorage.setItem(key, String(value));
      return true;
    } catch (e) {
      console.warn(`Failed to save ${key} to localStorage`, e);
      return false;
    }
  }

  function isPlaceholder(v) {
    const s = safeString(v);
    return !s || s === "YOUR_AUTH0_DOMAIN" || s === "YOUR_AUTH0_CLIENT_ID";
  }

  // ←←← UPDATE THESE WITH YOUR REAL VALUES ←←←
  const defaults = {
    auth0Domain: "dev-v5jb4jp8jpd5zw86.us.auth0.com",
    auth0ClientId: "3BV691U5MLV7WS1YNG8565PP", // ← Use the one from your .env
  };

  function init() {
    // Only set defaults if they don't already exist
    if (!tryGet("auth0Domain") && !isPlaceholder(defaults.auth0Domain)) {
      trySet("auth0Domain", defaults.auth0Domain);
    }
    if (!tryGet("auth0ClientId") && !isPlaceholder(defaults.auth0ClientId)) {
      trySet("auth0ClientId", defaults.auth0ClientId);
    }
  }

  function getAuth0Config() {
    return {
      domain: safeString(tryGet("auth0Domain")),
      clientId: safeString(tryGet("auth0ClientId")),
    };
  }

  // Expose to window
  window.AppLocalStorage = {
    init: init,
    get: tryGet,
    set: trySet,
    getAuth0Config: getAuth0Config,
    defaults: defaults,

    // Helper for debugging
    debug: function () {
      console.log("Auth0 Config:", getAuth0Config());
      console.log("All keys:", Object.keys(localStorage));
    },
  };

  // Auto initialize when script loads
  init();

  // Optional: Run debug in development
  // window.AppLocalStorage.debug();
})();
