(function () {
  var STORAGE_KEY = "localCart.v1";
  var CHECKOUT_URL = "/checkout.html";
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

  function attachInterceptors() {
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

    document.addEventListener(
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
      '<div class="local-checkout__offer">LIMITED TIME OFFER</div><div class="local-checkout__trust">100% Secure Checkout</div>';

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
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var notice = document.createElement("div");
      notice.className = "local-checkout__success";
      notice.textContent = "Payment received. Thank you!";
      root.innerHTML = "";
      root.appendChild(notice);
      clearCart();
    });

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
    payment.appendChild(field("", "Card number", "text"));
    var payRow = document.createElement("div");
    payRow.className = "local-checkout__row";
    payRow.appendChild(field("", "Expiration date (MM/YY)", "text"));
    payRow.appendChild(field("", "Security code", "text"));
    payment.appendChild(payRow);
    payment.appendChild(field("", "Name on card", "text"));

    var submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "local-checkout__submit";
    submit.textContent = "Complete Purchase";

    form.appendChild(contact);
    form.appendChild(delivery);
    form.appendChild(payment);
    form.appendChild(submit);

    left.appendChild(title);
    left.appendChild(form);

    var summary = document.createElement("div");
    summary.className = "local-checkout__summary";
    summary.innerHTML =
      '<div class="local-checkout__summary-head">Order summary</div>';

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

    summary.appendChild(items);
    summary.appendChild(discount);
    summary.appendChild(totals);
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
