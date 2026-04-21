(function () {
  var STORAGE_KEY = "localCart.v1";
  var CHECKOUT_URL = "/checkout.html";
  var CRYPTO_USDT_TRC20 = "TRH3bhpgs1zf2xy4YMAYgQj2nXiVBwVvQF";
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

  function getPaystackKey() {
    if (window.LOCAL_PAYSTACK_PUBLIC_KEY)
      return window.LOCAL_PAYSTACK_PUBLIC_KEY;
    var k = localStorage.getItem("localPayPublicKey");
    return k || "";
  }

  function setPaystackKey(key) {
    localStorage.setItem("localPayPublicKey", String(key || "").trim());
  }

  function loadPaystackSdk(done) {
    if (window.PaystackPop) return done();
    var existing = document.querySelector('script[data-local-pay="paystack"]');
    if (existing) {
      existing.addEventListener("load", done);
      return;
    }
    var s = document.createElement("script");
    s.src = "https://js.paystack.co/v1/inline.js";
    s.async = true;
    s.setAttribute("data-local-pay", "paystack");
    s.addEventListener("load", done);
    document.head.appendChild(s);
  }

  function openSecureCardPayment(amountNumber, email, onSuccess) {
    var key = getPaystackKey();
    if (!key) return;
    var currency = window.LOCAL_PAYSTACK_CURRENCY || "USD";
    var amount = Math.max(1, Math.round(Number(amountNumber || 0) * 100));
    var ref = "LC-" + Date.now() + "-" + Math.random().toString(16).slice(2);
    loadPaystackSdk(function () {
      if (!window.PaystackPop || !window.PaystackPop.setup) return;
      var handler = window.PaystackPop.setup({
        key: key,
        email: email || "customer@example.com",
        amount: amount,
        currency: currency,
        ref: ref,
        callback: function (_response) {
          if (onSuccess) onSuccess();
        },
      });
      handler.openIframe();
    });
  }

  function buildCardPaymentModal(getAmount, getEmail, onSuccess) {
    var wrap = document.createElement("div");
    wrap.className = "local-pay";

    var p1 = document.createElement("div");
    p1.className = "local-pay__text";
    p1.textContent =
      "A secure payment window will open for you to enter your card details and complete your payment.";

    var key = getPaystackKey();

    var keyRow = document.createElement("div");
    keyRow.className = "local-pay__keyrow";

    var keyInput = document.createElement("input");
    keyInput.type = "text";
    keyInput.placeholder = "Payment public key (pk_...)";
    keyInput.className = "local-pay__input";
    keyInput.value = key || "";

    var keySave = document.createElement("button");
    keySave.type = "button";
    keySave.className = "local-pay__btn";
    keySave.textContent = "Save";
    keySave.addEventListener("click", function () {
      setPaystackKey(keyInput.value);
      keySave.textContent = "Saved";
      setTimeout(function () {
        keySave.textContent = "Save";
      }, 1200);
    });

    keyRow.appendChild(keyInput);
    keyRow.appendChild(keySave);

    var pay = document.createElement("button");
    pay.type = "button";
    pay.className = "local-pay__paybtn";
    pay.textContent = "Pay now";
    pay.addEventListener("click", function () {
      var amt = getAmount ? getAmount() : 0;
      var mail = getEmail ? getEmail() : "";
      openSecureCardPayment(amt, mail, function () {
        closeModal();
        if (onSuccess) onSuccess();
      });
    });

    wrap.appendChild(p1);
    wrap.appendChild(keyRow);
    wrap.appendChild(pay);
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

  function renderCheckoutPage() {
    var root = document.getElementById("local-checkout-page");
    if (!root) return;

    var cart = loadCart();
    root.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "local-checkout";

    var header = document.createElement("div");
    header.className = "local-checkout__topbar";
    header.innerHTML =
      '<div class="local-checkout__topbar-inner"><img class="local-checkout__headerimg" src="https://cdn.shopify.com/s/files/1/0967/3775/5412/files/LIMITED_TIME_OFFER_3_x320.png?v=1772663214" alt="LIMITED TIME OFFER" /></div>';

    var grid = document.createElement("div");
    grid.className = "local-checkout__grid";

    var left = document.createElement("div");
    left.className = "local-checkout__left";

    var right = document.createElement("div");
    right.className = "local-checkout__right";

    var title = document.createElement("h1");
    title.className = "local-checkout__title";
    title.textContent = "Checkout";

    var form = document.createElement("form");
    form.className = "local-checkout__form";
    function showPaid() {
      var notice = document.createElement("div");
      notice.className = "local-checkout__success";
      notice.textContent = "Payment received. Thank you!";
      root.innerHTML = "";
      root.appendChild(notice);
      clearCart();
    }

    function field(label, placeholder, type) {
      var w = document.createElement("div");
      w.className = "local-checkout__field";
      var l = document.createElement("label");
      l.textContent = label;
      var i = document.createElement("input");
      i.type = type || "text";
      i.placeholder = placeholder || "";
      w.appendChild(l);
      w.appendChild(i);
      return w;
    }

    var contact = document.createElement("div");
    contact.className = "local-checkout__section";
    contact.innerHTML = '<h2 class="local-checkout__h2">Email or Phone</h2>';
    contact.appendChild(field("", "Email", "email"));

    var delivery = document.createElement("div");
    delivery.className = "local-checkout__section";
    delivery.innerHTML = '<h2 class="local-checkout__h2">Delivery</h2>';
    delivery.appendChild(field("", "Country/Region", "text"));

    var nameRow = document.createElement("div");
    nameRow.className = "local-checkout__row";
    nameRow.appendChild(field("", "First name", "text"));
    nameRow.appendChild(field("", "Last name", "text"));
    delivery.appendChild(nameRow);
    delivery.appendChild(field("", "Address", "text"));
    delivery.appendChild(
      field("", "Apartment, suite, etc. (optional)", "text"),
    );
    var cityRow = document.createElement("div");
    cityRow.className = "local-checkout__row";
    cityRow.appendChild(field("", "City", "text"));
    cityRow.appendChild(field("", "State", "text"));
    cityRow.appendChild(field("", "ZIP code", "text"));
    delivery.appendChild(cityRow);
    delivery.appendChild(field("", "Phone", "tel"));

    var payment = document.createElement("div");
    payment.className = "local-checkout__section";
    payment.innerHTML = '<h2 class="local-checkout__h2">Secure Checkout</h2>';
    var payNote = document.createElement("div");
    payNote.className = "local-checkout__paynote";
    payNote.textContent =
      "All transactions are secure and encrypted. Your order includes free returns and 24/7 access to our award-winning customer service.";
    payment.appendChild(payNote);

    var payChoices = document.createElement("div");
    payChoices.className = "local-checkout__paychoices";

    var btnCrypto = document.createElement("button");
    btnCrypto.type = "button";
    btnCrypto.className = "local-checkout__paychoice";
    btnCrypto.textContent = "Pay with crypto wallet";

    var btnCard = document.createElement("button");
    btnCard.type = "button";
    btnCard.className =
      "local-checkout__paychoice local-checkout__paychoice--primary";
    btnCard.textContent = "Pay with credit card";

    payChoices.appendChild(btnCrypto);
    payChoices.appendChild(btnCard);
    payment.appendChild(payChoices);

    form.appendChild(contact);
    form.appendChild(delivery);
    form.appendChild(payment);

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
      var input = contact.querySelector('input[type="email"]');
      return input ? String(input.value || "").trim() : "";
    }

    btnCrypto.addEventListener("click", function () {
      var amt = getSubtotalNumber();
      openModal("Pay with crypto wallet", buildCryptoModal(formatMoney(amt)));
    });

    btnCard.addEventListener("click", function () {
      openModal(
        "Pay with credit card",
        buildCardPaymentModal(getSubtotalNumber, getEmailValue, showPaid),
      );
    });

    var vip = document.createElement("div");
    vip.className = "local-checkout__vip";

    var vipTitle = document.createElement("div");
    vipTitle.className = "local-checkout__vip-title";
    vipTitle.textContent =
      "VIP PATRIOTS ONLY: Secure Your X25 QFS GOLD BILLS Supply Before Checkout Closes!";

    var vipCard = document.createElement("div");
    vipCard.className = "local-checkout__vipcard";

    var vipRow = document.createElement("div");
    vipRow.className = "local-checkout__viprow";

    var vipImg = document.createElement("img");
    vipImg.className = "local-checkout__vipimg";
    vipImg.alt = "X25 QFS GOLD BILLS";
    vipImg.src = (cart.items[0] && cart.items[0].image) || "";

    var vipMeta = document.createElement("div");
    vipMeta.className = "local-checkout__vipmeta";

    var vipName = document.createElement("div");
    vipName.className = "local-checkout__vipname";
    vipName.innerHTML =
      'X25 QFS GOLD BILLS <span class="local-checkout__vipoff">(99% OFF)</span>';

    var vipPrices = document.createElement("div");
    vipPrices.className = "local-checkout__vipprices";
    vipPrices.innerHTML = "<strong>$299.00</strong> <s>$49,975.00</s>";

    vipMeta.appendChild(vipName);
    vipMeta.appendChild(vipPrices);

    vipRow.appendChild(vipImg);
    vipRow.appendChild(vipMeta);
    vipCard.appendChild(vipRow);

    var vipAdd = document.createElement("button");
    vipAdd.type = "button";
    vipAdd.className = "local-checkout__vipadd";
    vipAdd.textContent = "Add";
    vipAdd.addEventListener("click", function () {
      var c = loadCart();
      upsertItem(c, {
        id: "vip-x25-qfs-gold-bills",
        title: "X25 QFS GOLD BILLS (99% OFF)",
        qty: 1,
        price: "$299.00",
        comparePrice: "$49,975.00",
        image: vipImg.src || "",
        url: window.location.pathname,
      });
      saveCart(c);
      updateCartBadge();
      renderCheckoutPage();
    });

    vipCard.appendChild(vipAdd);
    vip.appendChild(vipTitle);
    vip.appendChild(vipCard);

    var complete = document.createElement("button");
    complete.type = "button";
    complete.className = "local-checkout__complete";
    complete.textContent = "Complete Purchase";
    complete.addEventListener("click", function () {
      btnCard.click();
    });

    var foot = document.createElement("div");
    foot.className = "local-checkout__foot";
    foot.innerHTML =
      '<a href="#" class="local-checkout__footlink">Refund policy</a><a href="#" class="local-checkout__footlink">Shipping</a><a href="#" class="local-checkout__footlink">Privacy policy</a><a href="#" class="local-checkout__footlink">Terms of service</a><a href="#" class="local-checkout__footlink">Contact</a>';

    form.appendChild(vip);
    form.appendChild(complete);
    form.appendChild(foot);

    var trustTop = document.createElement("div");
    trustTop.className =
      "local-checkout__trustbadge local-checkout__trustbadge--top";
    trustTop.innerHTML =
      '<img src="https://cdn.ywxi.net/meter/ourmagashop.com/202.svg" alt="TrustedSite" />';

    left.appendChild(trustTop);
    left.appendChild(title);
    left.appendChild(form);

    var summary = document.createElement("div");
    summary.className = "local-checkout__summary";
    summary.innerHTML = "";

    var items = document.createElement("div");
    items.className = "local-checkout__summary-items";

    var discount = document.createElement("div");
    discount.className = "local-checkout__discount";
    discount.innerHTML =
      '<input type="text" placeholder="Discount code" /><button type="button">Apply</button>';

    var totals = document.createElement("div");
    totals.className = "local-checkout__totals";

    var subtotal = 0;
    var savings = 0;
    var compareTotal = 0;

    if (!cart.items.length) {
      items.innerHTML = '<div class="local-checkout__empty">No items.</div>';
    } else {
      for (var i = 0; i < cart.items.length; i++) {
        var item = cart.items[i];
        var row = document.createElement("div");
        row.className = "local-checkout__summary-item";
        var img = document.createElement("img");
        img.className = "local-checkout__summary-img";
        img.src = item.image || "";
        img.alt = item.title || "Product";
        var meta = document.createElement("div");
        meta.className = "local-checkout__summary-meta";
        var t = document.createElement("div");
        t.className = "local-checkout__summary-title";
        t.textContent = item.title || "Product";
        var q = document.createElement("div");
        q.className = "local-checkout__summary-qty";
        q.textContent = "Qty: " + String(item.qty || 1);
        meta.appendChild(t);
        meta.appendChild(q);
        var price = document.createElement("div");
        price.className = "local-checkout__summary-price";
        var unit = parseMoney(item.price);
        var compare = parseMoney(item.comparePrice);
        var line = unit != null ? unit * (item.qty || 1) : 0;
        subtotal += line;
        if (compare != null && unit != null && compare > unit) {
          savings += (compare - unit) * (item.qty || 1);
          compareTotal += compare * (item.qty || 1);
        }
        price.textContent = formatMoney(line);
        row.appendChild(img);
        row.appendChild(meta);
        row.appendChild(price);
        items.appendChild(row);
      }
    }

    function totalRow(label, value, big, neg) {
      var r = document.createElement("div");
      r.className = "local-checkout__total-row" + (big ? " is-big" : "");
      var l = document.createElement("div");
      l.textContent = label;
      var v = document.createElement("div");
      v.textContent = value;
      if (neg) v.classList.add("is-neg");
      r.appendChild(l);
      r.appendChild(v);
      return r;
    }

    if (savings > 0) {
      totals.appendChild(
        totalRow("TOTAL SAVINGS", "-" + formatMoney(savings), false, true),
      );
    }
    totals.appendChild(
      totalRow("Subtotal", formatMoney(subtotal), false, false),
    );
    totals.appendChild(
      totalRow("Shipping", "Enter shipping address", false, false),
    );
    totals.appendChild(totalRow("Total", formatMoney(subtotal), true, false));

    var summaryHeadDesktop = document.createElement("div");
    summaryHeadDesktop.className = "local-checkout__summary-head";
    summaryHeadDesktop.textContent = "Order summary";

    var summaryHead = document.createElement("button");
    summaryHead.type = "button";
    summaryHead.className = "local-checkout__summary-headbtn";
    summaryHead.innerHTML =
      '<span class="local-checkout__summary-headleft">Order summary</span><span class="local-checkout__summary-headright"></span>';

    var headRight = summaryHead.querySelector(
      ".local-checkout__summary-headright",
    );
    if (headRight) {
      if (compareTotal > 0 && compareTotal > subtotal) {
        headRight.innerHTML =
          "<s>" +
          formatMoney(compareTotal) +
          "</s><strong>" +
          formatMoney(subtotal) +
          "</strong>";
      } else {
        headRight.innerHTML = "<strong>" + formatMoney(subtotal) + "</strong>";
      }
    }

    var summaryBody = document.createElement("div");
    summaryBody.className = "local-checkout__summary-body";

    var trustBottom = document.createElement("div");
    trustBottom.className =
      "local-checkout__trustbadge local-checkout__trustbadge--bottom";
    trustBottom.innerHTML =
      '<img src="https://cdn.ywxi.net/meter/ourmagashop.com/202.svg" alt="TrustedSite" />';

    summaryBody.appendChild(items);
    summaryBody.appendChild(discount);
    summaryBody.appendChild(totals);
    summaryBody.appendChild(trustBottom);

    summary.appendChild(summaryHeadDesktop);
    summary.appendChild(summaryHead);
    summary.appendChild(summaryBody);
    summaryHead.addEventListener("click", function () {
      summary.classList.toggle("is-collapsed");
    });
    right.appendChild(summary);

    grid.appendChild(left);
    grid.appendChild(right);

    wrap.appendChild(header);
    wrap.appendChild(grid);
    root.appendChild(wrap);
  }

  function init() {
    ensureCartLink();
    attachInterceptors();
    updateCartBadge();
    renderCartPage();
    renderCheckoutPage();
    disableOurMagaShopLogoClick();
    scheduleDisableLogo();
    setTimeout(scheduleDisableLogo, 800);
    setTimeout(scheduleDisableLogo, 2200);
    if (!logoObserverStarted && window.MutationObserver) {
      logoObserverStarted = true;
      var obs = new MutationObserver(scheduleDisableLogo);
      obs.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
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
