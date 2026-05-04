(function () {
  function safeString(v) {
    if (v === null || v === undefined) return "";
    return String(v);
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
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function isPlaceholder(v) {
    var s = safeString(v).trim();
    if (!s) return true;
    if (s === "YOUR_AUTH0_DOMAIN") return true;
    if (s === "YOUR_AUTH0_CLIENT_ID") return true;
    return false;
  }

  var defaults = {
    auth0Domain: "dev-v5jb4jp8jpd5zw86.us.auth0.com",
    auth0ClientId: "mEjDdiRLe9FAU8LUgY351CGWlDb2Kc4G",
  };

  function init() {
    var domain = safeString(defaults.auth0Domain).trim();
    var clientId = safeString(defaults.auth0ClientId).trim();

    if (!isPlaceholder(domain) && !tryGet("auth0Domain")) {
      trySet("auth0Domain", domain);
    }
    if (!isPlaceholder(clientId) && !tryGet("auth0ClientId")) {
      trySet("auth0ClientId", clientId);
    }
  }

  function getAuth0Config() {
    var domain = safeString(tryGet("auth0Domain")).trim();
    var clientId = safeString(tryGet("auth0ClientId")).trim();
    return { domain: domain, clientId: clientId };
  }

  window.AppLocalStorage = {
    defaults: defaults,
    init: init,
    get: function (key) {
      return safeString(tryGet(key));
    },
    set: function (key, value) {
      return trySet(key, safeString(value));
    },
    getAuth0Config: getAuth0Config,
  };

  init();
})();
