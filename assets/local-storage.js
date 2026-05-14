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
    return !s || s.startsWith("YOUR_");
  }

  const defaults = {};

  function init() {
    // Basic initialization if needed
  }

  // Expose to window
  window.AppLocalStorage = {
    init: init,
    get: tryGet,
    set: trySet,
    defaults: defaults,

    // Helper for debugging
    debug: function () {
      console.log("All keys:", Object.keys(localStorage));
    },
  };

  // Auto initialize when script loads
  init();

  // Optional: Run debug in development
  // window.AppLocalStorage.debug();
})();
