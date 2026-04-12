(function () {
  function init() {
    var burger = document.querySelector("button.burger");
    var nav = document.querySelector("nav.mm.block-system-menublock");
    if (!burger || !nav) return;

    function setState(open) {
      document.documentElement.classList.toggle("treas-mobile-nav-open", open);
      document.body.classList.toggle("treas-mobile-nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function readOpen() {
      return (
        burger.classList.contains("is-expanded") || nav.classList.contains("open")
      );
    }

    function close() {
      burger.classList.remove("is-expanded");
      nav.classList.remove("open");
      setState(false);
    }

    burger.addEventListener("click", function () {
      window.setTimeout(function () {
        setState(readOpen());
      }, 0);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    nav.addEventListener("click", function (e) {
      var target = e.target;
      if (!target || !target.closest) return;
      var link = target.closest("a");
      if (!link) return;
      var href = link.getAttribute("href") || "";
      if (!href || href === "#" || href.indexOf("javascript:") === 0) return;
      close();
    });

    setState(readOpen());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
