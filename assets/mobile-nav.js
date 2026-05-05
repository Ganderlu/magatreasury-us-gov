(function () {
  function init() {
    var burger = document.querySelector("button.burger");
    var nav = document.querySelector("nav.mm.block-system-menublock.primary");
    if (!burger || !nav) return;

    burger.setAttribute("aria-expanded", "false");

    function getAssetsBase() {
      var scripts = document.getElementsByTagName("script");
      for (var i = scripts.length - 1; i >= 0; i--) {
        var src = scripts[i].getAttribute("src") || "";
        if (src.indexOf("assets/mobile-nav.js") === -1) continue;
        var base = src.replace(/mobile-nav\.js(\?.*)?$/, "");
        return base || "assets/";
      }
      return "assets/";
    }

    var assetsBase = getAssetsBase();

    function normalizeLabel(text) {
      return String(text || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
    }

    function toAbsoluteHref(href) {
      var raw = String(href || "").trim();
      if (!raw) return "#";
      if (/^(https?:|mailto:|tel:)/i.test(raw)) return raw;

      if (
        window.location &&
        window.location.protocol === "file:" &&
        raw.charAt(0) === "/"
      ) {
        raw = raw.slice(1);
      }

      try {
        return new URL(raw, document.baseURI).href;
      } catch (_) {
        return raw;
      }
    }

    function isOpen() {
      return (
        nav.classList.contains("open") ||
        burger.classList.contains("is-expanded")
      );
    }

    function setState(open) {
      document.documentElement.classList.toggle("treas-mobile-nav-open", open);
      document.body.classList.toggle("treas-mobile-nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function ensureOverlay() {
      if (nav.querySelector(".treas-mm")) return;

      var overlay = document.createElement("div");
      overlay.className = "treas-mm";
      overlay.setAttribute("id", "treas-mm-overlay");

      overlay.innerHTML =
        '<div class="treas-mm__gov">' +
        '  <div class="treas-mm__gov-row">' +
        '    <img class="treas-mm__flag-img" src="' +
        assetsBase +
        '98b638a5_us_flag_small.png" alt="U.S. flag" />' +
        '    <div class="treas-mm__gov-text">' +
        "      <div>An official website of the United States government</div>" +
        '      <button class="treas-mm__gov-link" type="button" data-action="treas-mm-how">Here&#39;s how you know</button>' +
        "    </div>" +
        "  </div>" +
        "</div>" +
        '<div class="treas-mm__header">' +
        '  <div class="treas-mm__brand">' +
        '    <img src="' +
        assetsBase +
        'mobile-logo.svg" alt="U.S. Department of the Treasury seal" />' +
        '    <div class="treas-mm__brand-text">U.S. DEPARTMENT OF THE TREASURY</div>' +
        "  </div>" +
        '  <button class="treas-mm__close" type="button" aria-label="Close menu" data-action="treas-mm-close"><span class="treas-mm__x" aria-hidden="true"></span></button>' +
        "</div>" +
        '<div class="treas-mm__search">' +
        '  <form action="https://search.usa.gov/search" method="get" accept-charset="UTF-8">' +
        '    <input type="hidden" name="affiliate" value="treas" />' +
        '    <input type="search" name="query" placeholder="Enter keywords" autocomplete="off" />' +
        "  </form>" +
        "</div>" +
        '<ul class="treas-mm__list" role="list"></ul>';

      nav.appendChild(overlay);

      overlay.addEventListener("click", function (e) {
        var target = e.target;
        if (!target || !target.closest) return;

        var closeBtn = target.closest('[data-action="treas-mm-close"]');
        if (closeBtn) {
          e.preventDefault();
          close();
          return;
        }

        var howBtn = target.closest('[data-action="treas-mm-how"]');
        if (howBtn) {
          e.preventDefault();
          return;
        }

        var link = target.closest("a.treas-mm__link");
        if (link) {
          close();
        }
      });
    }

    function resolveHref(label, originalHref) {
      var key = normalizeLabel(label);
      var routeMap = {
        "about treasury": "about/general-information.html",
        "policy issues": "https://home.treasury.gov/policy-issues",
        data: "https://home.treasury.gov/data",
        services: "https://home.treasury.gov/services",
        news: "https://home.treasury.gov/news",
      };

      if (routeMap[key]) return toAbsoluteHref(routeMap[key]);

      var href = String(originalHref || "").trim();
      if (!href || href === "#" || href.indexOf("javascript:") === 0)
        return "#";

      return toAbsoluteHref(href);
    }

    function buildList() {
      var list = nav.querySelector(".treas-mm__list");
      if (!list) return;

      list.innerHTML = "";

      var topLinks = nav.querySelectorAll("a.mm-top");
      for (var i = 0; i < topLinks.length; i++) {
        var src = topLinks[i];
        var label = (src.textContent || "").replace(/\s+/g, " ").trim();
        if (!label) continue;

        if (normalizeLabel(label) === "search") continue;

        var href = resolveHref(label, src.getAttribute("href"));

        var li = document.createElement("li");
        li.className = "treas-mm__item";

        var a = document.createElement("a");
        a.className = "treas-mm__link";
        if (normalizeLabel(label) === "news") a.classList.add("is-accent");
        a.textContent = label;
        a.setAttribute("href", href);

        li.appendChild(a);
        list.appendChild(li);
      }

      var extra = [
        {
          label: "Whistleblower Resources",
          selector: 'a[href*="whistleblowing-and-financial-integrity"]',
          fallbackHref: "services/whistleblowing-and-financial-integrity.html",
        },
        {
          label: "Working Families Tax Cuts",
          selector: 'a[href*="home.treasury.gov/wftc"]',
          fallbackHref: "https://home.treasury.gov/wftc",
        },
      ];

      for (var j = 0; j < extra.length; j++) {
        var item = extra[j];
        var found = nav.querySelector(item.selector);
        var extraHref =
          (found && found.getAttribute && found.getAttribute("href")) ||
          item.fallbackHref;
        if (!extraHref) continue;

        var li2 = document.createElement("li");
        li2.className = "treas-mm__item";

        var a2 = document.createElement("a");
        a2.className = "treas-mm__link";
        a2.textContent = item.label;
        a2.setAttribute("href", toAbsoluteHref(extraHref));

        li2.appendChild(a2);
        list.appendChild(li2);
      }
    }

    function open() {
      nav.classList.add("open");
      burger.classList.add("is-expanded");
      ensureOverlay();
      buildList();
      setState(true);
    }

    function close() {
      nav.classList.remove("open");
      burger.classList.remove("is-expanded");
      setState(false);
    }

    burger.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        if (e.stopPropagation) e.stopPropagation();

        if (isOpen()) close();
        else open();
      },
      true,
    );

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    if (isOpen()) {
      ensureOverlay();
      buildList();
      setState(true);
    } else {
      setState(false);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
