(function () {
  var STORAGE_KEY = "localCart.v1";

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
      existing.image = item.image || existing.image;
      existing.url = item.url || existing.url;
    } else {
      cart.items.push({
        id: id,
        title: item.title || "Product",
        price: item.price || "",
        image: item.image || "",
        url: item.url || "",
        qty: item.qty || 1,
      });
    }
  }

  function ensureCartLink() {
    var links = document.querySelectorAll('a[href="/cart"], a[href^="/cart?"]');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("href", "/cart.html");
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

  function showToast(text) {
    var existing = document.querySelector(".local-cart-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.className = "local-cart-toast";

    var left = document.createElement("div");
    left.className = "local-cart-toast__text";
    left.textContent = text;

    var actions = document.createElement("div");
    actions.className = "local-cart-toast__actions";

    var link = document.createElement("a");
    link.className = "local-cart-toast__link";
    link.href = "/cart.html";
    link.textContent = "View cart";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "local-cart-toast__close";
    close.textContent = "Close";
    close.addEventListener("click", function () {
      toast.remove();
    });

    actions.appendChild(link);
    actions.appendChild(close);
    toast.appendChild(left);
    toast.appendChild(actions);
    document.body.appendChild(toast);

    window.setTimeout(function () {
      if (toast.isConnected) toast.remove();
    }, 4500);
  }

  function getText(el) {
    if (!el) return "";
    return (el.textContent || "").trim();
  }

  function findProductInfoFromForm(form) {
    var idInput = form.querySelector('input[name="id"]');
    var id = idInput ? idInput.getAttribute("value") || idInput.value : "";
    var qtyInput = form.querySelector('input[name="quantity"]');
    var qty = qtyInput ? Number(qtyInput.value) || 1 : 1;

    var url = "";
    var title = "";
    var price = "";
    var image = "";

    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogPrice = document.querySelector('meta[property="og:price:amount"]');
    var ogImage = document.querySelector('meta[property="og:image:secure_url"], meta[property="og:image"]');

    if (ogTitle) title = (ogTitle.getAttribute("content") || "").trim();
    if (ogPrice) price = (ogPrice.getAttribute("content") || "").trim();
    if (price) price = "$" + price.replace(/[^0-9.]/g, "");
    if (ogImage) image = (ogImage.getAttribute("content") || "").trim();

    var submit = form.querySelector('button[type="submit"][name="add"], button[name="add"]');
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
      var card = form.closest(".card-wrapper") || form.closest(".product") || form.closest("li") || null;
      if (card) {
        var cardTitle = card.querySelector(".card__heading a, .product__title a, h3 a, h2 a");
        if (cardTitle) {
          title = title || getText(cardTitle);
          url = url || cardTitle.getAttribute("href") || "";
        }
        var priceEl = card.querySelector(".price-item--regular, .price-item--sale, .price-item");
        if (priceEl) price = price || getText(priceEl);
        var imgEl = card.querySelector("img");
        if (imgEl) image = image || imgEl.getAttribute("src") || "";
      }
    }

    if (!price) {
      var p = parseMoney(price);
      price = p != null ? formatMoney(p) : "";
    }

    return { id: id, qty: qty, title: title, price: price, image: image, url: url };
  }

  function onAddToCart(form) {
    var info = findProductInfoFromForm(form);
    if (!info.id) {
      showToast("Unable to add to cart");
      return;
    }
    var cart = loadCart();
    upsertItem(cart, info);
    saveCart(cart);
    updateCartBadge();
    showToast("Added to cart");
  }

  function attachInterceptors() {
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
      true
    );

    document.addEventListener("click", function (e) {
      var target = e.target;
      if (!target || !target.closest) return;
      var link = target.closest('a[href="/cart"], a[href^="/cart?"]');
      if (!link) return;
      e.preventDefault();
      window.location.href = "/cart.html";
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

  function init() {
    ensureCartLink();
    attachInterceptors();
    updateCartBadge();
    renderCartPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
