(function () {
  var STORAGE_KEY = "localCart.v1";
  var CHECKOUT_URL = "/checkout.html";
  var CRYPTO_USDT_TRC20 = "TRH3bhpgs1zf2xy4YMAYgQj2nXiVBwVvQF";
  var BINANCE_ID = "1159880271";
  var drawerState = {
    open: false,
    reservedUntil: 0,
  };
  var drawerEls = {
    backdrop: null,
    drawer: null,
    headerCount: null,
    headerTimer: null,
    items: null,
    savings: null,
    subtotal: null,
    checkout: null,
  };

  function safeParse(json) {
    try {
      return JSON.parse(json);
    } catch (_e) {
      return null;
    }
  }

  function loadCart() {
    var data = safeParse(localStorage.getItem(STORAGE_KEY));
    if (!data || !Array.isArray(data.items)) return { items: [] };
    return data;
  }

  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  function formatMoney(value) {
    if (typeof value === "number") {
      return "$" + value.toFixed(2);
    }
    if (typeof value === "string" && value.trim()) return value.trim();
    return "";
  }

  function formatMoneyShort(value) {
    var s = formatMoney(value);
    if (s.slice(-3) === ".00") return s.slice(0, -3);
    return s;
  }

  function parseMoney(text) {
    if (!text) return null;
    var cleaned = String(text).replace(/[^0-9.]/g, "");
    var num = Number(cleaned);
    if (!isFinite(num)) return null;
    return num;
  }

  var modalEls = { backdrop: null, modal: null, title: null, body: null };

  function ensureModal() {
    if (modalEls.modal) return modalEls;

    var backdrop = document.createElement("div");
    backdrop.className = "local-modal-backdrop";
    backdrop.addEventListener("click", closeModal);

    var modal = document.createElement("div");
    modal.className = "local-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    var head = document.createElement("div");
    head.className = "local-modal__head";

    var title = document.createElement("div");
    title.className = "local-modal__title";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "local-modal__close";
    close.textContent = "×";
    close.addEventListener("click", closeModal);

    head.appendChild(title);
    head.appendChild(close);

    var body = document.createElement("div");
    body.className = "local-modal__body";

    modal.appendChild(head);
    modal.appendChild(body);

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    modalEls = { backdrop: backdrop, modal: modal, title: title, body: body };

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    return modalEls;
  }

  function openModal(titleText, contentNode) {
    var els = ensureModal();
    els.title.textContent = titleText || "";
    els.body.innerHTML = "";
    if (contentNode) els.body.appendChild(contentNode);
    els.backdrop.classList.add("is-open");
    els.modal.classList.add("is-open");
    document.documentElement.classList.add("local-modal-open");
    document.body.classList.add("local-modal-open");
  }

  function closeModal() {
    if (!modalEls.modal) return;
    modalEls.backdrop.classList.remove("is-open");
    modalEls.modal.classList.remove("is-open");
    document.documentElement.classList.remove("local-modal-open");
    document.body.classList.remove("local-modal-open");
  }

  function copyToClipboard(text) {
    var v = String(text || "");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(v);
      return;
    }
    var ta = document.createElement("textarea");
    ta.value = v;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } catch (_e) {}
    document.body.removeChild(ta);
  }

  function buildCryptoModal(amountText) {
    var wrap = document.createElement("div");
    wrap.className = "local-pay";

    var p1 = document.createElement("div");
    p1.className = "local-pay__text";
    p1.textContent =
      "Send the exact amount below using USDT (TRC20). Include your email in the payment note if your wallet supports it.";

    var amt = document.createElement("div");
    amt.className = "local-pay__amount";
    amt.textContent = "Amount: " + String(amountText || "");

    var label = document.createElement("div");
    label.className = "local-pay__label";
    label.textContent = "USDT TRC20 Wallet Address";

    var row = document.createElement("div");
    row.className = "local-pay__row";

    var addr = document.createElement("div");
    addr.className = "local-pay__addr";
    addr.textContent = CRYPTO_USDT_TRC20;

    var copy = document.createElement("button");
    copy.type = "button";
    copy.className = "local-pay__copy";
    copy.textContent = "Copy";
    copy.addEventListener("click", function () {
      copyToClipboard(CRYPTO_USDT_TRC20);
      copy.textContent = "Copied";
      setTimeout(function () {
        copy.textContent = "Copy";
      }, 1200);
    });

    row.appendChild(addr);
    row.appendChild(copy);

    var p2 = document.createElement("div");
    p2.className = "local-pay__hint";
    p2.textContent =
      "After sending, keep your transaction hash. Your order will be confirmed once the payment is verified on-chain.";

    wrap.appendChild(p1);
    wrap.appendChild(amt);
    wrap.appendChild(label);
    wrap.appendChild(row);
    wrap.appendChild(p2);
    return wrap;
  }

  function cartCount(cart) {
    var total = 0;
    for (var i = 0; i < cart.items.length; i++) {
      total += cart.items[i].qty || 0;
    }
    return total;
  }

  function upsertItem(cart, item) {
    var id = String(item.id || "");
    if (!id) return;
    var existing = null;
    for (var i = 0; i < cart.items.length; i++) {
      if (String(cart.items[i].id) === id) {
        existing = cart.items[i];
        break;
      }
    }
    if (existing) {
      existing.qty = (existing.qty || 0) + (item.qty || 1);
      existing.title = item.title || existing.title;
      existing.price = item.price || existing.price;
      existing.comparePrice = item.comparePrice || existing.comparePrice;
      existing.image = item.image || existing.image;
      existing.url = item.url || existing.url;
    } else {
      cart.items.push({
        id: id,
        title: item.title || "Product",
        price: item.price || "",
        comparePrice: item.comparePrice || "",
        image: item.image || "",
        url: item.url || "",
        qty: item.qty || 1,
      });
    }
  }

  function ensureCartLink() {
    var links = document.querySelectorAll('a[href="/cart"], a[href^="/cart?"]');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("href", CHECKOUT_URL);
    }
  }

  var logoObserverStarted = false;
  var logoDisableScheduled = false;

  function disableOurMagaShopLogoClick() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (!a || !a.querySelector) continue;
      var img = a.querySelector("img[alt]");
      if (!img) continue;
      var alt = String(img.getAttribute("alt") || "").toLowerCase();
      if (alt.indexOf("our maga shop") === -1) continue;
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.setAttribute("tabindex", "-1");
      a.style.pointerEvents = "none";
      a.style.cursor = "default";
    }
  }

  function scheduleDisableLogo() {
    if (logoDisableScheduled) return;
    logoDisableScheduled = true;
    setTimeout(function () {
      logoDisableScheduled = false;
      disableOurMagaShopLogoClick();
    }, 0);
  }

  function ensureCartBadge() {
    var bubble = document.getElementById("cart-icon-bubble");
    if (!bubble) return null;
    var badge = bubble.querySelector(".local-cart-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "local-cart-badge";
      bubble.appendChild(badge);
    }
    return badge;
  }

  function updateCartBadge() {
    ensureCartLink();
    var badge = ensureCartBadge();
    if (!badge) return;
    var count = cartCount(loadCart());
    if (count > 0) {
      badge.hidden = false;
      badge.textContent = String(count);
    } else {
      badge.hidden = true;
      badge.textContent = "";
    }
  }

  function ensureDrawer() {
    if (drawerEls.drawer) return;

    var backdrop = document.createElement("div");
    backdrop.className = "local-cart-drawer-backdrop";
    backdrop.addEventListener("click", function () {
      closeDrawer();
    });

    var drawer = document.createElement("aside");
    drawer.className = "local-cart-drawer";
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    drawer.setAttribute("aria-label", "Cart");

    var header = document.createElement("div");
    header.className = "local-cart-drawer__header";

    var headerTitle = document.createElement("div");
    headerTitle.className = "local-cart-drawer__title";
    headerTitle.textContent = "Cart · ";

    var headerCount = document.createElement("span");
    headerCount.className = "local-cart-drawer__count";
    headerTitle.appendChild(headerCount);

    var close = document.createElement("button");
    close.type = "button";
    close.className = "local-cart-drawer__close";
    close.textContent = "×";
    close.addEventListener("click", function () {
      closeDrawer();
    });

    header.appendChild(headerTitle);
    header.appendChild(close);

    var timer = document.createElement("div");
    timer.className = "local-cart-drawer__timer";
    var timerValue = document.createElement("div");
    timerValue.className = "local-cart-drawer__timer-value";
    timer.appendChild(timerValue);

    var body = document.createElement("div");
    body.className = "local-cart-drawer__body";

    var items = document.createElement("div");
    items.className = "local-cart-drawer__items";

    var footer = document.createElement("div");
    footer.className = "local-cart-drawer__footer";

    var totals = document.createElement("div");
    totals.className = "local-cart-drawer__totals";

    var savingsRow = document.createElement("div");
    savingsRow.className = "local-cart-drawer__row";
    var savingsLabel = document.createElement("div");
    savingsLabel.className =
      "local-cart-drawer__label local-cart-drawer__label--savings";
    savingsLabel.textContent = "Savings";
    var savingsValue = document.createElement("div");
    savingsValue.className =
      "local-cart-drawer__value local-cart-drawer__value--neg";
    savingsRow.appendChild(savingsLabel);
    savingsRow.appendChild(savingsValue);

    var subtotalRow = document.createElement("div");
    subtotalRow.className =
      "local-cart-drawer__row local-cart-drawer__row--big";
    var subtotalLabel = document.createElement("div");
    subtotalLabel.className = "local-cart-drawer__label";
    subtotalLabel.textContent = "Subtotal";
    var subtotalValue = document.createElement("div");
    subtotalValue.className = "local-cart-drawer__value";
    subtotalRow.appendChild(subtotalLabel);
    subtotalRow.appendChild(subtotalValue);

    totals.appendChild(savingsRow);
    totals.appendChild(subtotalRow);

    var checkout = document.createElement("a");
    checkout.className = "local-cart-drawer__checkout";
    checkout.href = CHECKOUT_URL;
    checkout.textContent = "Check out";

    var payments = document.createElement("div");
    payments.className = "local-cart-drawer__payments";
    payments.innerHTML =
      '<span class="local-cart-pay">AMEX</span><span class="local-cart-pay">PayPal</span><span class="local-cart-pay">DISCOVER</span><span class="local-cart-pay">VISA</span><span class="local-cart-pay">MASTERCARD</span>';

    footer.appendChild(totals);
    footer.appendChild(checkout);
    footer.appendChild(payments);

    drawer.appendChild(header);
    drawer.appendChild(timer);
    drawer.appendChild(body);
    drawer.appendChild(footer);
    body.appendChild(items);

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    drawerEls.backdrop = backdrop;
    drawerEls.drawer = drawer;
    drawerEls.headerCount = headerCount;
    drawerEls.headerTimer = timerValue;
    drawerEls.items = items;
    drawerEls.savings = savingsValue;
    drawerEls.subtotal = subtotalValue;
    drawerEls.checkout = checkout;
  }

  function setDrawerOpen(open) {
    ensureDrawer();
    drawerState.open = open;
    document.documentElement.classList.toggle("local-cart-drawer-open", open);
    document.body.classList.toggle("local-cart-drawer-open", open);
    drawerEls.backdrop.classList.toggle("is-open", open);
    drawerEls.drawer.classList.toggle("is-open", open);
  }

  function pad2(n) {
    return n < 10 ? "0" + String(n) : String(n);
  }

  function formatCountdown(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return pad2(m) + ":" + pad2(r);
  }

  function renderDrawer() {
    ensureDrawer();
    var cart = loadCart();
    drawerEls.headerCount.textContent = String(cartCount(cart)) + " items";

    drawerEls.items.innerHTML = "";

    var subtotal = 0;
    var savings = 0;

    if (!cart.items.length) {
      var empty = document.createElement("div");
      empty.className = "local-cart-drawer__empty";
      empty.textContent = "Your cart is empty.";
      drawerEls.items.appendChild(empty);
      drawerEls.savings.parentElement.hidden = true;
      drawerEls.subtotal.textContent = formatMoney(0);
      drawerEls.checkout.setAttribute("aria-disabled", "true");
      drawerEls.checkout.classList.add("is-disabled");
      return;
    }

    drawerEls.checkout.removeAttribute("aria-disabled");
    drawerEls.checkout.classList.remove("is-disabled");

    for (var i = 0; i < cart.items.length; i++) {
      (function () {
        var item = cart.items[i];
        var row = document.createElement("div");
        row.className = "local-cart-drawer-item";

        var imgWrap = document.createElement("div");
        imgWrap.className = "local-cart-drawer-item__imgwrap";
        if (item.image) {
          var img = document.createElement("img");
          img.className = "local-cart-drawer-item__img";
          img.src = item.image;
          img.alt = item.title || "Product";
          imgWrap.appendChild(img);
        }

        var main = document.createElement("div");
        main.className = "local-cart-drawer-item__main";

        var top = document.createElement("div");
        top.className = "local-cart-drawer-item__top";

        var title = document.createElement("div");
        title.className = "local-cart-drawer-item__title";
        if (item.url) {
          var a = document.createElement("a");
          a.href = item.url;
          a.textContent = item.title || "Product";
          title.appendChild(a);
        } else {
          title.textContent = item.title || "Product";
        }

        var remove = document.createElement("button");
        remove.type = "button";
        remove.className = "local-cart-drawer-item__remove";
        remove.setAttribute("aria-label", "Remove");
        remove.innerHTML =
          '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9 3h6l1 2h5v2H3V5h5l1-2zm1 7h2v9h-2v-9zm4 0h2v9h-2v-9zM7 10h2v9H7v-9z"/></svg>';
        remove.addEventListener("click", function () {
          var next = loadCart();
          next.items = next.items.filter(function (x) {
            return String(x.id) !== String(item.id);
          });
          saveCart(next);
          updateCartBadge();
          renderDrawer();
        });

        top.appendChild(title);
        top.appendChild(remove);

        var bottom = document.createElement("div");
        bottom.className = "local-cart-drawer-item__bottom";

        var qty = document.createElement("div");
        qty.className = "local-cart-drawer-qty";

        var minus = document.createElement("button");
        minus.type = "button";
        minus.textContent = "−";
        minus.addEventListener("click", function () {
          var next = loadCart();
          for (var j = 0; j < next.items.length; j++) {
            if (String(next.items[j].id) === String(item.id)) {
              next.items[j].qty = Math.max(1, (next.items[j].qty || 1) - 1);
              break;
            }
          }
          saveCart(next);
          updateCartBadge();
          renderDrawer();
        });

        var qtyVal = document.createElement("span");
        qtyVal.textContent = String(item.qty || 1);

        var plus = document.createElement("button");
        plus.type = "button";
        plus.textContent = "+";
        plus.addEventListener("click", function () {
          var next = loadCart();
          for (var j = 0; j < next.items.length; j++) {
            if (String(next.items[j].id) === String(item.id)) {
              next.items[j].qty = (next.items[j].qty || 1) + 1;
              break;
            }
          }
          saveCart(next);
          updateCartBadge();
          renderDrawer();
        });

        qty.appendChild(minus);
        qty.appendChild(qtyVal);
        qty.appendChild(plus);

        var priceWrap = document.createElement("div");
        priceWrap.className = "local-cart-drawer-item__price";

        var unit = parseMoney(item.price);
        var compare = parseMoney(item.comparePrice);

        if (compare != null && unit != null && compare > unit) {
          var strike = document.createElement("s");
          strike.className = "local-cart-drawer-item__compare";
          strike.textContent = formatMoney(compare);
          priceWrap.appendChild(strike);
        }

        var price = document.createElement("div");
        price.className = "local-cart-drawer-item__sale";
        price.textContent = item.price || "";
        priceWrap.appendChild(price);

        if (compare != null && unit != null && compare > unit) {
          var saveLine = document.createElement("div");
          saveLine.className = "local-cart-drawer-item__save";
          var per = compare - unit;
          var save = per * (item.qty || 1);
          saveLine.textContent = "(You save " + formatMoneyShort(save) + ")";
          priceWrap.appendChild(saveLine);
        }

        bottom.appendChild(qty);
        bottom.appendChild(priceWrap);
        main.appendChild(top);
        main.appendChild(bottom);

        row.appendChild(imgWrap);
        row.appendChild(main);
        drawerEls.items.appendChild(row);

        if (unit != null) subtotal += unit * (item.qty || 1);
        if (compare != null && unit != null && compare > unit) {
          savings += (compare - unit) * (item.qty || 1);
        }
      })();
    }

    if (savings > 0) {
      drawerEls.savings.parentElement.hidden = false;
      drawerEls.savings.textContent = "-" + formatMoney(savings);
    } else {
      drawerEls.savings.parentElement.hidden = true;
      drawerEls.savings.textContent = "";
    }

    drawerEls.subtotal.textContent = formatMoney(subtotal);
  }

  function tickTimer() {
    if (!drawerState.open) return;
    ensureDrawer();
    var remaining = drawerState.reservedUntil - Date.now();
    if (remaining <= 0) {
      drawerEls.headerTimer.textContent = "Cart reserved for 00:00";
      return;
    }
    drawerEls.headerTimer.textContent =
      "Cart reserved for " + formatCountdown(remaining);
    window.setTimeout(tickTimer, 250);
  }

  function openDrawer() {
    if (!drawerState.reservedUntil || drawerState.reservedUntil < Date.now()) {
      drawerState.reservedUntil = Date.now() + 5 * 60 * 1000;
    }
    renderDrawer();
    setDrawerOpen(true);
    tickTimer();
  }

  function closeDrawer() {
    if (!drawerState.open) return;
    setDrawerOpen(false);
  }

  function getText(el) {
    if (!el) return "";
    return (el.textContent || "").trim();
  }

  function findProductInfoFromForm(form) {
    var id = "";
    var idEls = form.querySelectorAll('[name="id"]');
    for (var k = 0; k < idEls.length; k++) {
      var el = idEls[k];
      var v = (el.getAttribute && el.getAttribute("value")) || el.value || "";
      v = String(v).trim();
      if (!v) continue;
      id = v;
      break;
    }
    var qtyInput = form.querySelector('input[name="quantity"]');
    var qty = qtyInput ? Number(qtyInput.value) || 1 : 1;

    var url = "";
    var title = "";
    var price = "";
    var comparePrice = "";
    var image = "";

    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogPrice = document.querySelector('meta[property="og:price:amount"]');
    var ogImage = document.querySelector(
      'meta[property="og:image:secure_url"], meta[property="og:image"]',
    );

    if (ogTitle) title = (ogTitle.getAttribute("content") || "").trim();
    if (ogPrice) price = (ogPrice.getAttribute("content") || "").trim();
    if (price) price = "$" + price.replace(/[^0-9.]/g, "");
    if (ogImage) image = (ogImage.getAttribute("content") || "").trim();

    var submit = form.querySelector(
      'button[type="submit"][name="add"], button[name="add"]',
    );
    var labelledBy = submit ? submit.getAttribute("aria-labelledby") : "";
    if (labelledBy) {
      var parts = labelledBy.split(/\s+/);
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf("title-") === 0) {
          var t = document.getElementById(parts[i]);
          var a = t ? t.querySelector("a") : null;
          title = getText(a || t) || title;
          url = a ? a.getAttribute("href") || url : url;
          break;
        }
      }
    }

    if (!title || !url || !price || !image) {
      var card =
        form.closest(".card-wrapper") ||
        form.closest(".product") ||
        form.closest("li") ||
        null;
      if (card) {
        var cardTitle = card.querySelector(
          ".card__heading a, .product__title a, h3 a, h2 a",
        );
        if (cardTitle) {
          title = title || getText(cardTitle);
          url = url || cardTitle.getAttribute("href") || "";
        }
        var priceEl = card.querySelector(
          ".price-item--regular, .price-item--sale, .price-item",
        );
        if (priceEl) price = price || getText(priceEl);
        var compareEl = card.querySelector(
          ".price__compare-price .price-item--regular, s.price-item--regular, .price__compare-price s",
        );
        if (compareEl) comparePrice = comparePrice || getText(compareEl);
        var imgEl = card.querySelector("img");
        if (imgEl) image = image || imgEl.getAttribute("src") || "";
      }
    }

    if (!price) {
      var p = parseMoney(price);
      price = p != null ? formatMoney(p) : "";
    }

    return {
      id: id,
      qty: qty,
      title: title,
      price: price,
      comparePrice: comparePrice,
      image: image,
      url: url,
    };
  }

  function onAddToCart(form) {
    var info = findProductInfoFromForm(form);
    if (!info.id) {
      openDrawer();
      return;
    }
    var cart = loadCart();
    upsertItem(cart, info);
    saveCart(cart);
    updateCartBadge();
    openDrawer();
  }

  var interceptorsAttached = false;

  function attachInterceptors() {
    if (interceptorsAttached) return;
    interceptorsAttached = true;

    var clickTarget = window;
    var submitTarget = window;

    document.addEventListener(
      "click",
      function (e) {
        var target = e.target;
        if (!target || !target.closest) return;

        var btn = target.closest('button[name="add"], button[type="submit"]');
        if (!btn) return;

        var form = btn.closest("form");
        if (!form || !form.getAttribute) return;

        var action = form.getAttribute("action") || "";
        if (action.indexOf("/cart/add") !== 0) return;

        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        e.stopPropagation();
        onAddToCart(form);
      },
      true,
    );

    submitTarget.addEventListener(
      "submit",
      function (e) {
        var form = e.target;
        if (!form || !form.getAttribute) return;
        var action = form.getAttribute("action") || "";
        if (action.indexOf("/cart/add") !== 0) return;
        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        e.stopPropagation();
        onAddToCart(form);
      },
      true,
    );

    clickTarget.addEventListener(
      "click",
      function (e) {
        var target = e.target;
        if (!target || !target.closest) return;

        var btn = target.closest('button[name="add"], button[type="submit"]');
        if (!btn) return;

        var form = btn.closest("form");
        if (!form || !form.getAttribute) return;

        var action = form.getAttribute("action") || "";
        if (action.indexOf("/cart/add") !== 0) return;

        e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        e.stopPropagation();
        onAddToCart(form);
      },
      true,
    );

    document.addEventListener("click", function (e) {
      var target = e.target;
      if (!target || !target.closest) return;
      var link = target.closest(
        '#cart-icon-bubble, a[href="/cart"], a[href^="/cart?"], a[href="/cart.html"]',
      );
      if (!link) return;
      e.preventDefault();
      openDrawer();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
  }

  function renderCartPage() {
    var root = document.getElementById("local-cart-page");
    if (!root) return;

    function rerender() {
      var cart = loadCart();
      root.innerHTML = "";

      var wrap = document.createElement("div");
      wrap.className = "local-cart-page";

      var h1 = document.createElement("h1");
      h1.textContent = "Cart";
      wrap.appendChild(h1);

      if (!cart.items.length) {
        var empty = document.createElement("p");
        empty.textContent = "Your cart is empty.";
        wrap.appendChild(empty);
        var back = document.createElement("a");
        back.href = "/index.htm";
        back.textContent = "Back to home";
        wrap.appendChild(back);
        root.appendChild(wrap);
        updateCartBadge();
        return;
      }

      var table = document.createElement("table");
      table.className = "local-cart-table";
      var thead = document.createElement("thead");
      thead.innerHTML =
        "<tr><th>Item</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr>";
      table.appendChild(thead);

      var tbody = document.createElement("tbody");

      var total = 0;
      for (var i = 0; i < cart.items.length; i++) {
        (function () {
          var item = cart.items[i];
          var tr = document.createElement("tr");

          var tdItem = document.createElement("td");
          var itemWrap = document.createElement("div");
          itemWrap.className = "local-cart-item";
          if (item.image) {
            var img = document.createElement("img");
            img.className = "local-cart-item__img";
            img.src = item.image;
            img.alt = item.title || "Product";
            itemWrap.appendChild(img);
          }
          var textWrap = document.createElement("div");
          var title = document.createElement("div");
          title.className = "local-cart-item__title";
          if (item.url) {
            var a = document.createElement("a");
            a.href = item.url;
            a.textContent = item.title || "Product";
            title.appendChild(a);
          } else {
            title.textContent = item.title || "Product";
          }
          var meta = document.createElement("div");
          meta.className = "local-cart-item__meta";
          meta.textContent = "ID: " + item.id;
          textWrap.appendChild(title);
          textWrap.appendChild(meta);
          itemWrap.appendChild(textWrap);
          tdItem.appendChild(itemWrap);

          var tdPrice = document.createElement("td");
          tdPrice.textContent = item.price || "";

          var tdQty = document.createElement("td");
          var qtyWrap = document.createElement("div");
          qtyWrap.className = "local-cart-qty";

          var btnMinus = document.createElement("button");
          btnMinus.type = "button";
          btnMinus.textContent = "−";
          btnMinus.addEventListener("click", function () {
            item.qty = Math.max(0, (item.qty || 0) - 1);
            if (item.qty === 0) {
              cart.items = cart.items.filter(function (x) {
                return String(x.id) !== String(item.id);
              });
            }
            saveCart(cart);
            rerender();
          });

          var qtyVal = document.createElement("span");
          qtyVal.textContent = String(item.qty || 0);

          var btnPlus = document.createElement("button");
          btnPlus.type = "button";
          btnPlus.textContent = "+";
          btnPlus.addEventListener("click", function () {
            item.qty = (item.qty || 0) + 1;
            saveCart(cart);
            rerender();
          });

          qtyWrap.appendChild(btnMinus);
          qtyWrap.appendChild(qtyVal);
          qtyWrap.appendChild(btnPlus);
          tdQty.appendChild(qtyWrap);

          var tdTotal = document.createElement("td");
          var unit = parseMoney(item.price);
          var line = unit != null ? unit * (item.qty || 0) : null;
          if (line != null) {
            total += line;
            tdTotal.textContent = formatMoney(line);
          } else {
            tdTotal.textContent = "";
          }

          var tdRemove = document.createElement("td");
          var rm = document.createElement("button");
          rm.type = "button";
          rm.className = "local-cart-remove";
          rm.textContent = "Remove";
          rm.addEventListener("click", function () {
            cart.items = cart.items.filter(function (x) {
              return String(x.id) !== String(item.id);
            });
            saveCart(cart);
            rerender();
          });
          tdRemove.appendChild(rm);

          tr.appendChild(tdItem);
          tr.appendChild(tdPrice);
          tr.appendChild(tdQty);
          tr.appendChild(tdTotal);
          tr.appendChild(tdRemove);
          tbody.appendChild(tr);
        })();
      }

      table.appendChild(tbody);
      wrap.appendChild(table);

      var summary = document.createElement("div");
      summary.className = "local-cart-summary";
      summary.textContent = "Subtotal: " + formatMoney(total);
      wrap.appendChild(summary);

      root.appendChild(wrap);
      updateCartBadge();
    }

    rerender();
  }

  function clearCart() {
    saveCart({ items: [] });
    updateCartBadge();
  }

  function setCartItems(items) {
    saveCart({ items: items || [] });
    updateCartBadge();
  }

  var currentMethodIdx = 0;
  var methods = [
    {
      id: "cryptomus",
      label:
        "Cryptomus - USDT | USDC | BTC | ETH | LTC | BEP20 | TRC20 + All Crypto Coins Accepted",
      icon: "₿",
    },
    {
      id: "heleket",
      label:
        "Heleket - USDT | USDC | BTC | ETH | LTC | BEP20 | TRC20 + All Crypto Coins Accepted",
      icon: "₿",
    },
  ];

  function renderCheckoutPage() {
    var root = document.getElementById("local-checkout-page");
    if (!root) return;

    var cart = loadCart();
    root.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "local-checkout";

    // Header matching image
    var header = document.createElement("div");
    header.className = "local-checkout__topbar";
    header.innerHTML =
      '<div class="local-checkout__topbar-inner">' +
      '<a href="/" style="display:flex; align-items:center;"><img class="local-checkout__headerimg" src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/LIMITED_TIME_OFFER_3_x320.png?v=1772663214" alt="OUR MAGA SHOP" /></a>' +
      '<div class="local-checkout__shields">' +
      '<img src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/shield_trusted_seller.png" />' +
      '<img src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/shield_100_secure.png" />' +
      '<img src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/shield_certified.png" />' +
      "</div>" +
      "</div>";

    var grid = document.createElement("div");
    grid.className = "local-checkout__grid";

    var left = document.createElement("div");
    left.className = "local-checkout__left";

    var right = document.createElement("div");
    right.className = "local-checkout__right";

    // TrustedSite badges (desktop at top, mobile after Complete Purchase)
    var trustTopDesktop = document.createElement("img");
    trustTopDesktop.className =
      "local-checkout__trust-badge local-checkout__trust-badge--desktop";
    trustTopDesktop.src = "https://cdn.ywxi.net/meter/ourmagashop.com/202.svg";

    var trustTopMobile = document.createElement("img");
    trustTopMobile.className =
      "local-checkout__trust-badge local-checkout__trust-badge--mobile";
    trustTopMobile.src = "https://cdn.ywxi.net/meter/ourmagashop.com/202.svg";

    var title = document.createElement("div");
    title.className = "local-checkout__title";
    title.innerHTML =
      'Email or Phone <a href="#" class="local-checkout__signin">Sign in</a>';

    var form = document.createElement("form");
    form.className = "local-checkout__form";

    function field(label, placeholder, type) {
      var w = document.createElement("div");
      w.className = "local-checkout__field";
      var i = document.createElement("input");
      i.type = type || "text";
      i.placeholder = placeholder || "";
      w.appendChild(i);
      return w;
    }

    var contactField = field("", "Email", "email");
    var trackingWrap = document.createElement("label");
    trackingWrap.className = "local-checkout__checkbox-wrap";
    trackingWrap.innerHTML =
      '<input type="checkbox" checked /> Send me live tracking and order updates';

    var contact = document.createElement("div");
    contact.className = "local-checkout__section";
    contact.appendChild(contactField);
    contact.appendChild(trackingWrap);

    var delivery = document.createElement("div");
    delivery.className = "local-checkout__section";
    delivery.innerHTML = '<h2 class="local-checkout__h2">Delivery</h2>';

    var country = document.createElement("div");
    country.className = "local-checkout__field";
    country.innerHTML =
      '<select disabled style="background:#f9f9f9; cursor:default; color:#121212; border: 1px solid #d9d9d9; padding:14px; border-radius:10px; width:100%;"><option>United States</option></select>';

    var nameRow = document.createElement("div");
    nameRow.style.display = "grid";
    nameRow.style.gridTemplateColumns = "1fr 1fr";
    nameRow.style.gap = "12px";
    nameRow.style.marginTop = "12px";
    nameRow.appendChild(field("", "First name", "text"));
    nameRow.appendChild(field("", "Last name", "text"));

    delivery.appendChild(country);
    delivery.appendChild(nameRow);
    delivery.appendChild(field("", "Address", "text"));
    var aptField = field("", "Apartment, suite, etc. (optional)", "text");
    aptField.style.marginTop = "12px";
    delivery.appendChild(aptField);

    var cityRow = document.createElement("div");
    cityRow.style.display = "grid";
    cityRow.style.gridTemplateColumns = "1fr 1fr 1fr";
    cityRow.style.gap = "12px";
    cityRow.style.marginTop = "12px";
    cityRow.appendChild(field("", "City", "text"));
    cityRow.appendChild(field("", "State", "text"));
    cityRow.appendChild(field("", "ZIP code", "text"));
    delivery.appendChild(cityRow);

    var phoneField = field("", "Phone", "tel");
    phoneField.style.marginTop = "12px";
    delivery.appendChild(phoneField);

    var payment = document.createElement("div");
    payment.className = "local-checkout__section";
    payment.innerHTML = '<h2 class="local-checkout__h2">Secure Checkout</h2>';

    var payMethodWrap = document.createElement("div");
    payMethodWrap.className = "local-pay-method";
    payMethodWrap.innerHTML =
      '<div class="local-pay-method__hi">Hi choose your desired Payment Method!</div>' +
      '<div class="local-pay-method__label">Method</div>';

    var selector = document.createElement("div");
    selector.className = "local-pay-selector";
    var selectorInner = document.createElement("div");
    selectorInner.className = "local-pay-selector__inner";
    var selected = methods[currentMethodIdx] || methods[0];
    selectorInner.innerHTML =
      '<span class="local-pay-selector__icon">' +
      (selected ? selected.icon : "") +
      '</span><span class="local-pay-selector__text">' +
      (selected ? selected.label : "") +
      '</span><span class="local-pay-selector__caret">⌄</span>';
    selector.appendChild(selectorInner);

    var options = document.createElement("div");
    options.className = "local-pay-options";
    methods.forEach(function (m, idx) {
      var opt = document.createElement("div");
      opt.className = "local-pay-option";
      if (idx === currentMethodIdx) opt.classList.add("is-selected");
      opt.innerHTML =
        '<span class="local-pay-option__icon">' +
        m.icon +
        '</span><span class="local-pay-option__text">' +
        m.label +
        "</span>";
      opt.addEventListener("click", function (e) {
        e.stopPropagation();
        currentMethodIdx = idx;
        selectorInner.querySelector(".local-pay-selector__text").textContent =
          m.label;
        selectorInner.querySelector(".local-pay-selector__icon").textContent =
          m.icon;
        var all = options.querySelectorAll(".local-pay-option");
        for (var i = 0; i < all.length; i++)
          all[i].classList.remove("is-selected");
        opt.classList.add("is-selected");
        options.classList.remove("is-open");
        selector.classList.remove("is-open");
      });
      options.appendChild(opt);
    });

    selector.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !options.classList.contains("is-open");
      options.classList.toggle("is-open", open);
      selector.classList.toggle("is-open", open);
    });

    document.addEventListener("click", function () {
      options.classList.remove("is-open");
      selector.classList.remove("is-open");
    });

    payMethodWrap.appendChild(selector);
    payMethodWrap.appendChild(options);
    payment.appendChild(payMethodWrap);

    var upsell = null;
    if (cart.items && cart.items.length) {
      var srcItem = cart.items[0];
      function getPackFromTitle(title) {
        var t = String(title || "");
        var m = t.match(/(\d+)\s*x/i);
        if (!m) return null;
        var n = Number(m[1]);
        return isFinite(n) ? n : null;
      }

      function getUpsellDefaultPack(pack) {
        if (pack === 10) return 60;
        if (pack === 25) return 60;
        if (pack === 60) return 25;
        if (pack === 90) return 60;
        if (pack === 150) return 90;
        if (pack === 400) return 150;
        return 25;
      }

      var packPrices = {
        10: 199,
        25: 399,
        60: 799,
        90: 1399,
        150: 1899,
        400: 3499,
      };

      var srcPack = getPackFromTitle(srcItem.title);
      var targetPack = getUpsellDefaultPack(srcPack);
      var upsellUnit = packPrices[targetPack];
      if (upsellUnit == null) upsellUnit = parseMoney(srcItem.price);
      if (upsellUnit == null) upsellUnit = 299;

      var upsellCompare = targetPack * 1999;
      if (!isFinite(upsellCompare) || upsellCompare <= upsellUnit) {
        upsellCompare = parseMoney(srcItem.comparePrice);
      }
      if (upsellCompare == null || upsellCompare <= upsellUnit) upsellCompare = 49975;

      var pct = 99;
      if (upsellCompare > 0 && upsellUnit >= 0 && upsellUnit < upsellCompare) {
        var raw = Math.round((1 - upsellUnit / upsellCompare) * 100);
        pct = Math.max(1, Math.min(99, raw));
      }

      upsell = document.createElement("div");
      upsell.className = "local-upsell";

      var upsellHeadline = document.createElement("div");
      upsellHeadline.className = "local-upsell__headline";
      upsellHeadline.innerHTML =
        "<strong>VIP PATRIOTS ONLY:</strong> Secure Your X" +
        String(targetPack) +
        " QFS GOLD BILLS Supply Before<br/>Checkout Closes!";

      var upsellCard = document.createElement("div");
      upsellCard.className = "local-upsell__card";

      var upsellTop = document.createElement("div");
      upsellTop.className = "local-upsell__top";

      var upsellImg = document.createElement("img");
      upsellImg.className = "local-upsell__img";
      upsellImg.src = srcItem.image || "";
      upsellImg.alt = "X" + String(targetPack) + " QFS GOLD BILLS";

      var upsellInfo = document.createElement("div");
      upsellInfo.className = "local-upsell__info";

      var upsellName = document.createElement("div");
      upsellName.className = "local-upsell__name";
      upsellName.innerHTML =
        "X" +
        String(targetPack) +
        ' QFS GOLD BILLS <span class="local-upsell__off">(' +
        String(pct) +
        "% OFF)</span>";

      var upsellPrices = document.createElement("div");
      upsellPrices.className = "local-upsell__prices";
      upsellPrices.innerHTML =
        '<span class="local-upsell__price">' +
        formatMoney(upsellUnit) +
        '</span><s class="local-upsell__compare">' +
        formatMoney(upsellCompare) +
        "</s>";

      upsellInfo.appendChild(upsellName);
      upsellInfo.appendChild(upsellPrices);

      upsellTop.appendChild(upsellImg);
      upsellTop.appendChild(upsellInfo);

      var upsellBtn = document.createElement("button");
      upsellBtn.type = "button";
      upsellBtn.className = "local-upsell__add";
      upsellBtn.textContent = "Add";
      upsellBtn.addEventListener("click", function () {
        var next = loadCart();
        var id = "qfs-bundle-" + String(targetPack);
        upsertItem(next, {
          id: id,
          qty: 1,
          title: "X" + String(targetPack) + " QFS GOLD BILLS",
          price: formatMoney(upsellUnit),
          comparePrice: formatMoney(upsellCompare),
          image: srcItem.image,
          url: srcItem.url,
        });
        saveCart(next);
        updateCartBadge();
        renderCheckoutPage();
      });

      upsellCard.appendChild(upsellTop);
      upsellCard.appendChild(upsellBtn);
      upsell.appendChild(upsellHeadline);
      upsell.appendChild(upsellCard);
    }

    var complete = document.createElement("button");
    complete.type = "button";
    complete.className = "local-checkout__complete";
    complete.textContent = "Complete Purchase";
    complete.style.marginTop = "30px";
    complete.addEventListener("click", function () {
      handlePayment();
    });

    var foot = document.createElement("div");
    foot.className = "local-checkout__foot";
    foot.innerHTML =
      '<a href="/policies/refund-policy.html" class="local-checkout__footlink">Refund policy</a>' +
      '<a href="/policies/shipping-policy.html" class="local-checkout__footlink">Shipping</a>' +
      '<a href="/policies/privacy-policy.html" class="local-checkout__footlink">Privacy policy</a>' +
      '<a href="/policies/terms-of-service.html" class="local-checkout__footlink">Terms of service</a>' +
      '<a href="/policies/contact.html" class="local-checkout__footlink">Contact</a>';

    form.appendChild(contact);
    form.appendChild(delivery);
    form.appendChild(payment);
    if (upsell) form.appendChild(upsell);
    form.appendChild(complete);
    form.appendChild(trustTopMobile);
    form.appendChild(foot);

    left.appendChild(trustTopDesktop);
    left.appendChild(title);
    left.appendChild(form);

    var itemsWrap = document.createElement("div");
    itemsWrap.className = "local-checkout__summary-items";
    var subtotal = 0;
    var totalSavings = 0;

    for (var i = 0; i < cart.items.length; i++) {
      var item = cart.items[i];
      var row = document.createElement("div");
      row.className = "local-checkout__summary-item";

      var imgWrap = document.createElement("div");
      imgWrap.className = "local-checkout__summary-img-wrap";
      imgWrap.innerHTML =
        '<img class="local-checkout__summary-img" src="' +
        (item.image || "") +
        '" />' +
        '<span class="local-checkout__summary-qty">' +
        (item.qty || 1) +
        "</span>";

      var infoWrap = document.createElement("div");
      infoWrap.className = "local-checkout__summary-info";

      var unit = parseMoney(item.price);
      var compare = parseMoney(item.comparePrice);

      var titleRow = document.createElement("div");
      titleRow.className = "local-checkout__summary-title-row";
      titleRow.innerHTML =
        '<div class="local-checkout__summary-title">' +
        (item.title || "Product") +
        "</div>" +
        '<div class="local-checkout__summary-price-col">' +
        (compare != null && unit != null && compare > unit
          ? '<div class="local-checkout__summary-compare">' +
            formatMoney(compare * (item.qty || 1)) +
            "</div>"
          : "") +
        '<div class="local-checkout__summary-price">' +
        formatMoney(unit * (item.qty || 1)) +
        "</div>" +
        "</div>";

      infoWrap.appendChild(titleRow);

      if (compare != null && unit != null && compare > unit) {
        var disc = document.createElement("div");
        disc.className = "local-checkout__summary-discount";
        var saved = (compare - unit) * (item.qty || 1);
        disc.innerHTML =
          '<svg style="width:14px; height:14px; margin-right:5px; vertical-align:text-bottom;" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg> PATRIOTDISCOUNT (-' +
          formatMoney(saved) +
          ")";
        infoWrap.appendChild(disc);
      }

      row.appendChild(imgWrap);
      row.appendChild(infoWrap);

      if (unit != null) subtotal += unit * (item.qty || 1);
      if (compare != null && unit != null && compare > unit) {
        totalSavings += (compare - unit) * (item.qty || 1);
      }
      itemsWrap.appendChild(row);
    }

    var discountWrap = document.createElement("div");
    discountWrap.className = "local-checkout__discount-wrap";
    discountWrap.innerHTML =
      '<input type="text" class="local-checkout__discount-input" placeholder="Discount code" />' +
      '<button type="button" class="local-checkout__discount-btn">Apply</button>';

    var totals = document.createElement("div");
    totals.className = "local-checkout__totals";
    var totalsHTML =
      '<div class="local-checkout__total-row"><span>Subtotal</span><span>' +
      formatMoney(subtotal) +
      "</span></div>" +
      '<div class="local-checkout__total-row"><span>Shipping</span><span style="color:#666; font-size:13px;">Enter shipping address</span></div>' +
      '<div class="local-checkout__total-row is-big"><span>Total</span><span style="font-size:14px; color:#666; margin-right:8px; font-weight:400;">USD</span><span>' +
      formatMoney(subtotal) +
      "</span></div>";

    if (totalSavings > 0) {
      totalsHTML +=
        '<div class="local-checkout__savings-row"><svg style="width:20px; height:20px; margin-right:8px; vertical-align:text-bottom;" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg> TOTAL SAVINGS ' +
        formatMoney(totalSavings) +
        "</div>";
    }

    totals.innerHTML = totalsHTML;

    var trustBottom = document.createElement("img");
    trustBottom.className = "local-checkout__trust-badge-small";
    trustBottom.src = "https://cdn.ywxi.net/meter/ourmagashop.com/202.svg";

    var orderHead = document.createElement("div");
    orderHead.className = "local-order-summary__head";

    var compareTotal = subtotal + totalSavings;
    var headBtn = document.createElement("button");
    headBtn.type = "button";
    headBtn.className = "local-order-summary__toggle";
    headBtn.setAttribute("aria-expanded", "true");
    headBtn.innerHTML =
      '<span class="local-order-summary__left">' +
      'Order summary <span class="local-order-summary__caret">⌃</span>' +
      "</span>" +
      '<span class="local-order-summary__prices">' +
      (totalSavings > 0
        ? '<span class="local-order-summary__compare">' +
          formatMoney(compareTotal) +
          "</span>"
        : "") +
      '<span class="local-order-summary__total">' +
      formatMoney(subtotal) +
      "</span>" +
      "</span>";

    orderHead.appendChild(headBtn);

    var orderBody = document.createElement("div");
    orderBody.className = "local-order-summary__body";

    headBtn.addEventListener("click", function () {
      var collapsed = orderBody.classList.toggle("is-collapsed");
      headBtn.classList.toggle("is-collapsed", collapsed);
      headBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
    });

    orderBody.appendChild(itemsWrap);
    orderBody.appendChild(discountWrap);
    orderBody.appendChild(totals);
    orderBody.appendChild(trustBottom);

    right.appendChild(orderHead);
    right.appendChild(orderBody);

    grid.appendChild(left);
    grid.appendChild(right);
    wrap.appendChild(header);
    wrap.appendChild(grid);
    root.appendChild(wrap);
  }

  function getSubtotalNumber() {
    var c = loadCart();
    var total = 0;
    for (var i = 0; i < c.items.length; i++) {
      var unit = parseMoney(c.items[i].price);
      if (unit != null) total += unit * (c.items[i].qty || 1);
    }
    return total;
  }

  function getEmailValue() {
    var input = document.querySelector('input[type="email"]');
    return input ? String(input.value || "").trim() : "";
  }

  function handlePayment() {
    var amt = getSubtotalNumber();
    var m = methods[currentMethodIdx];
    if (m.id === "cryptomus") {
      createCryptomusInvoice(amt, getEmailValue());
    } else if (m.id === "heleket") {
      createHeleketInvoice(amt, getEmailValue());
    } else {
      openModal(m.label, buildCryptoModal(formatMoney(amt)));
    }
  }

  function createBinancePayOrder(amount, email) {
    var btn = document.querySelector(".local-checkout__complete");
    if (!btn) return;

    var originalText = btn.textContent;
    btn.textContent = "Redirecting to Binance Pay...";
    btn.disabled = true;

    var payload = {
      amount: String(amount),
      currency: "USD",
      order_id: "BIN-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      email: email,
    };

    fetch("/api/binance-pay.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data && data.url) {
          window.location.href = data.url;
        } else {
          throw new Error(data.message || "Failed to create Binance Pay order");
        }
      })
      .catch(function (err) {
        console.error("Binance error:", err);
        alert("Error: " + err.message);
        btn.textContent = originalText;
        btn.disabled = false;
      });
  }

  function createHeleketInvoice(amount, email) {
    var btn = document.querySelector(".local-checkout__complete");
    if (!btn) return;

    var originalText = btn.textContent;
    btn.textContent = "Redirecting to Heleket...";
    btn.disabled = true;

    var amt = typeof amount === "number" ? amount : Number(amount);
    if (!isFinite(amt)) amt = 0;

    var url =
      "/heleket.html?amount=" +
      encodeURIComponent(String(amt.toFixed(2))) +
      "&currency=USD" +
      "&return=" +
      encodeURIComponent("/checkout.html");

    window.location.href = url;

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1000);
  }

  function createCryptomusInvoice(amount, email) {
    var btn = document.querySelector(".local-checkout__complete");
    if (!btn) return;

    var originalText = btn.textContent;
    btn.textContent = "Redirecting to Cryptomus...";
    btn.disabled = true;

    var amt = typeof amount === "number" ? amount : Number(amount);
    if (!isFinite(amt)) amt = 0;

    var url =
      "/cryptomus.html?amount=" +
      encodeURIComponent(String(amt.toFixed(2))) +
      "&currency=USD" +
      "&return=" +
      encodeURIComponent("/checkout.html");

    window.location.href = url;

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1000);
  }

  function init() {
    ensureCartLink();
    attachInterceptors();
    updateCartBadge();
    renderCartPage();

    // Handle return from payment gateways
    var params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      var root = document.getElementById("local-checkout-page");
      if (root) {
        var notice = document.createElement("div");
        notice.className = "local-checkout__success";
        notice.textContent = "Payment received. Thank you for your purchase!";
        root.innerHTML = "";
        root.appendChild(notice);
        clearCart();
        disableOurMagaShopLogoClick();
        return;
      }
    }

    renderCheckoutPage();
    disableOurMagaShopLogoClick();
    scheduleDisableLogo();
  }

  window.LocalCart = {
    clear: clearCart,
    setItems: setCartItems,
    get: loadCart,
    openDrawer: openDrawer,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
