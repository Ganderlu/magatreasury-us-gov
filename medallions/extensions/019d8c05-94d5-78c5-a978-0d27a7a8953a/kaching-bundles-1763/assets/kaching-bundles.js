Array.prototype.flat || (Array.prototype.flat = function(i = 1) {
  return i > 0 ? (
    // @ts-expect-error - Polyfill for older browsers
    this.reduce(
      (t, e) => t.concat(Array.isArray(e) ? e.flat(i - 1) : e),
      []
    )
  ) : (
    // @ts-expect-error - Polyfill for older browsers
    this.slice()
  );
});
Array.prototype.flatMap || (Array.prototype.flatMap = function(i, t) {
  return this.map(i, t).flat();
});
const jt = () => {
  try {
    const i = "kaching_local_storage_test";
    return localStorage.setItem(i, i), localStorage.removeItem(i), !0;
  } catch {
    return !1;
  }
}, R = jt() ? window.localStorage : window.sessionStorage, Z = () => new URLSearchParams(window.location.search).get("kaching");
let tt;
const Qt = () => (tt === void 0 && (tt = Z() === "off"), tt);
let et;
const W = () => (et === void 0 && (et = Z() === "debug"), et);
let nt;
const Et = () => (nt === void 0 && (nt = Z() === "dev"), nt);
let it;
const Ht = () => (it === void 0 && (it = Z() === "info"), it), zt = async (i, t, e, n, r) => {
  try {
    const a = "kaching_visited_deal_blocks", o = R.getItem(a), s = o ? JSON.parse(o) : [];
    if (s.includes(t))
      return;
    s.push(t), R.setItem(a, JSON.stringify(s)), await fetch("https://bundles-stats.kachingappz.app/impressions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shopDomain: i,
        dealBlockId: t,
        productId: e,
        abTestVariantId: n,
        sessionId: r
      }),
      keepalive: !0
    });
  } catch (a) {
    console.error(a);
  }
}, pt = /* @__PURE__ */ new Set(), I = async (i, t = {}, e = 1) => {
  if (p("sendStorefrontEvent", { name: i, data: t }), pt.has(i) || (pt.add(i), Math.random() > e))
    return;
  const n = window.location.href;
  return await fetch(
    "https://storefront-events.kachingappz.app/bundles/events",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event: { name: i, data: t, url: n, shop: window.Shopify.shop }
      })
    }
  );
};
let ht = !1;
const at = async (i, t, e = 0.1) => {
  if (ht || Math.random() > e || i === "Failed to fetch" || i && (i.includes(
    "Cannot define multiple custom elements with the same tag name"
  ) || i.includes(
    "Failed to execute 'define' on 'CustomElementRegistry'"
  ) || i.includes("CustomElementRegistry.define")))
    return;
  const n = window.location.href, r = window.Shopify.shop;
  return ht = !0, await fetch(
    "https://storefront-events.kachingappz.app/bundles/errors",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: { message: i, stack: t, url: n, shop: r }
      })
    }
  );
}, Ut = () => {
  const i = ["kaching-bundles.js", "kaching-bundles-block.js"];
  window.addEventListener("error", async function(t) {
    const e = async (n) => {
      const { filename: r, message: a, error: o } = n;
      for (const s of i)
        if (r.includes(s)) {
          if (W() || ft()) {
            p("Error", n);
            return;
          }
          await at(a, o.stack);
        }
    };
    try {
      await e(t);
    } catch (n) {
      console.error(n);
    }
  }), window.addEventListener("unhandledrejection", async function(t) {
    const e = async (n) => {
      if (typeof n.reason != "object")
        return;
      const { message: r, stack: a } = n.reason;
      if (a) {
        for (const o of i)
          if (a.includes(o)) {
            if (W() || ft()) {
              p("Unhandled rejection", n);
              return;
            }
            await at(r, a);
          }
      }
    };
    try {
      await e(t);
    } catch (n) {
      console.error(n);
    }
  });
};
function p(i, t = null) {
  !W() && !Et() || console.debug("[Kaching Bundles]", i, t);
}
function v(i, t = null) {
  !Ht() && !W() && !Et() || console.info("[Kaching Bundles]", i, t);
}
const Jt = () => {
  const i = (n) => {
    window.dispatchEvent(new Event(n));
  }, t = history.pushState;
  history.pushState = function(...r) {
    const a = t.apply(this, r);
    return i("pushstate"), i("locationchange"), a;
  };
  const e = history.replaceState;
  history.replaceState = function(...r) {
    const a = e.apply(this, r);
    return i("replacestate"), i("locationchange"), a;
  }, O(window, "popstate", () => {
    i("locationchange");
  });
}, st = (i, t, e, n = 0) => {
  const r = Object.getPrototypeOf(i);
  if (r.hasOwnProperty(t)) {
    const a = Object.getOwnPropertyDescriptor(
      r,
      t
    );
    if (!a.configurable)
      return;
    Object.defineProperty(i, t, {
      configurable: !0,
      get: function(...o) {
        return a.get.apply(this, o);
      },
      set: function(...o) {
        const s = this[t];
        a.set.apply(this, o);
        const l = this[t];
        return typeof e == "function" && setTimeout(e.bind(this, s, l), n), l;
      }
    });
  }
}, E = (i, t = document) => {
  try {
    return t.querySelector(i);
  } catch {
    return null;
  }
}, C = (i, t = document) => {
  try {
    return [...t.querySelectorAll(i)];
  } catch {
    return [];
  }
}, O = (i, t, e) => i.addEventListener(t, e), X = (i) => document.createElement(i), Kt = (i, t) => i && i.classList.add(t), P = (i, t, e) => i.setAttribute(t, e), M = (i) => i.dataset, z = (i) => {
  const t = E(i);
  if (!t)
    return;
  const e = JSON.parse(t.textContent);
  return p("jsonFromElement", e), e;
}, Wt = (i, t) => {
  let e = 0, n = i;
  for (; n && n !== t && n !== document.body; )
    e++, n = n.parentNode;
  return n !== t ? 1 / 0 : e;
}, Xt = (i, t) => {
  if (i === t)
    return i;
  const e = /* @__PURE__ */ new Set();
  let n = i;
  for (; n; )
    e.add(n), n = n.parentElement;
  for (n = t; n; ) {
    if (e.has(n))
      return n;
    n = n.parentElement;
  }
  return document.documentElement;
}, V = (i, t, e = 1 / 0) => {
  let n = null, r = 1 / 0;
  for (const a of t) {
    const o = Xt(i, a);
    if (o === document.body || o === document.documentElement)
      continue;
    const s = Wt(i, o);
    s > e || s < r && (n = a, r = s);
  }
  return n;
}, ft = () => {
  const i = document.currentScript;
  return i ? i.src.includes("kaching-bundles-dev") : !1;
}, Y = (i, t = {}) => {
  const e = window.Shopify.routes, r = (e && e.root || "/") + i, a = new URLSearchParams();
  for (const [s, l] of Object.entries(t))
    a.append(s, l);
  const o = a.toString();
  return o ? `${r}?${o}` : r;
}, L = (i, t) => {
  new MutationObserver((n, r) => {
    for (const a of n)
      a.type === "childList" && a.removedNodes.forEach((o) => {
        o.contains(i) && (r.disconnect(), t());
      });
  }).observe(document.body, { childList: !0, subtree: !0 });
}, Bt = (i, t = 300, e = 100) => {
  let n = 0;
  const r = () => {
    window.Shopify.analytics ? i() : n < t ? (n++, setTimeout(r, e)) : I(
      "shopify_analytics_missing",
      {
        userAgent: navigator.userAgent
      },
      0.1
    );
  };
  r();
}, Yt = () => {
  const i = /\b__kaching_/, t = ["script", "style"], e = (r) => {
    const a = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, {
      acceptNode: (s) => {
        const l = s.parentElement;
        return !l || t.includes(l.tagName.toLowerCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let o;
    for (; o = a.nextNode(); ) {
      const s = o.textContent || "";
      if (i.test(s)) {
        const l = o.parentElement;
        if (l.classList.contains("properties-key-value-key"))
          continue;
        if (l.tagName.toLowerCase() === "dt") {
          const c = l.nextElementSibling;
          (c == null ? void 0 : c.tagName.toLowerCase()) === "dd" && (c.style.display = "none");
        }
        l.style.display = "none", I(
          "kaching_property_hidden",
          {
            text: s,
            element: l.tagName
          },
          0.01
        );
      }
    }
  };
  new MutationObserver((r) => {
    for (const a of r)
      for (const o of a.addedNodes)
        o.nodeType === Node.ELEMENT_NODE && e(o);
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }), e(document.body);
}, Zt = () => {
  const i = document.querySelector('link[href*="kaching-bundles.css"]');
  if (!i) return;
  const t = i.closest(
    'div[data-block-type="liquid"]'
  );
  t && (t.dataset.blockType = "liquid-kaching-fix");
}, j = ({
  country: i,
  language: t
}) => {
  const e = [];
  return i && e.push(`country: ${i}`), t && e.push(`language: ${t}`), e.length > 0 ? `@inContext(${e.join(", ")})` : "";
}, te = async (i, {
  productId: t,
  country: e,
  language: n
}) => {
  var a;
  const r = j({ country: e, language: n });
  return ((a = (await i.query(
    `
      query FetchComplementaryProductGIDs($productGID: ID!) ${r} {
        productRecommendations(productId: $productGID, intent: COMPLEMENTARY) {
          id
        }
      }
    `,
    {
      variables: {
        productGID: `gid://shopify/Product/${t}`
      }
    }
  )).productRecommendations) == null ? void 0 : a.map((o) => o.id)) || [];
}, Dt = async (i, {
  useExternalMetafieldNamespace: t,
  useMetaobjects: e
}) => e ? ne(
  i
) : ee(i), ee = async (i, t) => {
  var n;
  const e = (n = (await i.query(
    `
      query FetchDealBlocks($metafieldNamespace: String!) {
        shop {
          metafield(namespace: $metafieldNamespace, key: "deal_blocks") {
            value
          }
        }
      }
    `,
    {
      variables: {
        metafieldNamespace: "$app:kaching_bundles"
      }
    }
  )).shop.metafield) == null ? void 0 : n.value;
  return e ? JSON.parse(e) : [];
}, ne = async (i, t) => {
  const e = "$app:deal_block", n = [];
  let r = null;
  for (; ; ) {
    const a = await i.query(
      `
        query FetchDealBlockMetaobjects($type: String!, $cursor: String) {
          metaobjects(type: $type, first: 250, after: $cursor) {
            nodes {
              fields {
                key
                value
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      {
        variables: {
          type: e,
          cursor: r
        }
      }
    );
    for (const o of a.metaobjects.nodes) {
      const s = o.fields.find(
        (l) => l.key === "settings"
      );
      s != null && s.value && n.push(JSON.parse(s.value));
    }
    if (!a.metaobjects.pageInfo.hasNextPage)
      break;
    r = a.metaobjects.pageInfo.endCursor;
  }
  return n;
}, ie = async (i, t, e = 200) => (t = t.filter(Boolean).filter((n) => !n.startsWith("placeholder")), t.length === 0 ? [] : (await i.query(
  `
      query FetchMediaImages($mediaImageIds: [ID!]!, $size: Int!) {
        nodes(ids: $mediaImageIds) {
          ... on MediaImage {
            id
            image {
              url(transform: { maxWidth: $size, maxHeight: $size })
            }
          }
        }
      }
    `,
  {
    variables: {
      mediaImageIds: t,
      size: e
    }
  }
)).nodes.filter(Boolean).map((n) => ({
  gid: n.id,
  url: n.image.url
}))), re = async (i, t) => {
  if (!t.length) return [];
  const e = t.map((n) => `gid://shopify/Product/${n}`);
  return (await i.query(
    `
      query FetchNativeBundleProductIds($productGIDs: [ID!]!) {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            variants(first: 1) {
              nodes {
                requiresComponents
              }
            }
          }
        }
      }
    `,
    { variables: { productGIDs: e } }
  )).nodes.filter((n) => n !== null).filter(
    (n) => n.variants.nodes.some((r) => r.requiresComponents)
  ).map((n) => Number(n.id.split("/").pop()));
}, mt = async (i, {
  country: t,
  language: e,
  blockVisibility: n,
  excludedProductGIDs: r,
  selectedProductGIDs: a,
  selectedCollectionGIDs: o,
  limit: s = 1e3
}) => {
  switch (n) {
    case "selected-products":
      return a.slice(0, s);
    case "all-products":
    case "excluded-products": {
      const l = j({ country: t, language: e });
      let c = [], f = null;
      for (; c.length < s; ) {
        const y = Math.min(s - c.length, 250), g = await i.query(
          `
            query FetchProductGIDs($limit: Int!, $cursor: String) ${l} {
              products(first: $limit, after: $cursor) {
                nodes {
                  id
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          `,
          {
            variables: {
              limit: y,
              cursor: f
            }
          }
        );
        if (c.push(...g.products.nodes.map((d) => d.id)), !g.products.pageInfo.hasNextPage) break;
        f = g.products.pageInfo.endCursor;
      }
      if (n === "excluded-products") {
        const y = new Set(r);
        c = c.filter((g) => !y.has(g));
      }
      return c;
    }
    case "selected-collections": {
      const l = j({ country: t, language: e }), c = (await i.query(
        `
          query FetchCollectionProductGIDs($collectionGIDs: [ID!]!, $limit: Int!) ${l} {
            nodes(ids: $collectionGIDs) {
              ... on Collection {
                products(first: $limit) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        `,
        {
          variables: {
            collectionGIDs: o,
            limit: Math.min(s, 250)
          }
        }
      )).nodes.filter((f) => f !== null).flatMap(
        (f) => f.products.nodes.map((y) => y.id)
      );
      return Array.from(new Set(c)).slice(0, s);
    }
  }
}, qt = `
  id
  availableForSale
  price {
    amount
  }
  compareAtPrice {
    amount
  }
  selectedOptions {
    name
    value
  }
  image {
    id
    url(transform: { maxWidth: 200, maxHeight: 200 })
  }
  unitPriceMeasurement {
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  requiresComponents
  sellingPlanAllocations(first: 100) @include(if: $includeSellingPlans) {
    nodes {
      sellingPlan {
        id
      }
      priceAdjustments {
        price {
          amount
        }
      }
    }
  }
  quantityAvailable @include(if: $includeAvailableQuantity)
`, U = async (i, {
  country: t,
  language: e,
  productIds: n,
  includeSellingPlans: r = !0,
  includeAvailableQuantity: a = !0,
  useExternalMetafieldNamespace: o = !1,
  batchSize: s = 250,
  onBatchError: l
}) => {
  if (!n.length)
    return [];
  const c = n.map((h) => typeof h == "string" && h.startsWith("gid://") ? h : `gid://shopify/Product/${h}`), f = `
    query FetchProducts($productGIDs: [ID!]!, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!, $metafieldNamespace: String!) ${j({ country: t, language: e })} {
      nodes(ids: $productGIDs) {
        ... on Product {
          id
          handle
          onlineStoreUrl
          availableForSale
          createdAt
          title
          featuredImage {
            url
          }
          options {
            name
            optionValues {
              id
              name
              swatch {
                color
                image {
                  previewImage {
                    url(transform: { maxWidth: 200, maxHeight: 200 })
                  }
                }
              }
            }
          }
          variants(first: 250) {
            nodes {
              ${qt}
            }
          }
          collections(first: 50) {
            nodes {
              id
            }
          }
          metafield: metafield(namespace: $metafieldNamespace, key: "text") {
            value
          }
          metafield2: metafield(namespace: $metafieldNamespace, key: "text2") {
            value
          }
          metafield3: metafield(namespace: $metafieldNamespace, key: "text3") {
            value
          }
          metafield4: metafield(namespace: $metafieldNamespace, key: "text4") {
            value
          }
          requiresSellingPlan
          sellingPlanGroups(first: 100) @include(if: $includeSellingPlans) {
            nodes {
              sellingPlans(first: 100) {
                nodes {
                  id
                  name
                  priceAdjustments {
                    adjustmentValue {
                      __typename
                      ... on SellingPlanPercentagePriceAdjustment {
                        adjustmentPercentage
                      }
                      ... on SellingPlanFixedAmountPriceAdjustment {
                        adjustmentAmount {
                          amount
                        }
                      }
                      ... on SellingPlanFixedPriceAdjustment {
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `, y = o ? "app--2935586817--kaching_bundles" : "$app:kaching_bundles", g = [], d = Math.min(s, 250);
  for (let h = 0; h < c.length; h += d)
    g.push(c.slice(h, h + d));
  const _ = (h) => i.query(f, {
    variables: {
      productGIDs: h,
      includeSellingPlans: r,
      includeAvailableQuantity: a,
      metafieldNamespace: y
    }
  });
  let u;
  if (l) {
    const h = await Promise.allSettled(g.map(_));
    for (const k of h)
      k.status === "rejected" && l(
        k.reason instanceof Error ? k.reason : new Error(String(k.reason))
      );
    u = h.filter(
      (k) => k.status === "fulfilled"
    ).flatMap((k) => k.value.nodes);
  } else
    u = (await Promise.all(g.map(_))).flatMap((h) => h.nodes);
  const m = u.filter((h) => h != null);
  if (l) {
    const h = await Promise.allSettled(
      m.map(async (S) => {
        const b = await gt(
          i,
          S,
          { includeSellingPlans: r, includeAvailableQuantity: a }
        );
        return _t(b, i.shopifyDomain);
      })
    ), k = [];
    for (const S of h)
      S.status === "fulfilled" ? k.push(S.value) : l(
        S.reason instanceof Error ? S.reason : new Error(String(S.reason))
      );
    return k;
  }
  return (await Promise.all(
    m.map(
      (h) => gt(i, h, {
        includeSellingPlans: r,
        includeAvailableQuantity: a
      })
    )
  )).map(
    (h) => _t(h, i.shopifyDomain)
  );
}, gt = async (i, t, e) => {
  if (t.variants.nodes.length < 250)
    return t;
  const n = /* @__PURE__ */ new Set(), r = [], a = [], o = async (s) => {
    let l = !0, c = null;
    for (; l; ) {
      const f = await i.query(
        `
          query($productGID: ID!, $cursor: String, $reverse: Boolean, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!) {
            product(id: $productGID) {
              variants(first: 250, after: $cursor, reverse: $reverse) {
                nodes {
                  ${qt}
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        `,
        {
          variables: {
            productGID: t.id,
            cursor: c,
            reverse: s,
            ...e
          }
        }
      ), { nodes: y, pageInfo: g } = f.product.variants;
      for (const d of y) {
        if (n.has(d.id)) {
          l = !1;
          break;
        }
        n.add(d.id), s ? a.push(d) : r.push(d);
      }
      g.hasNextPage || (l = !1), c = g.endCursor;
    }
  };
  return await Promise.all([
    o(!1),
    o(!0)
  ]), t.variants.nodes = [...r, ...a.reverse()], t;
}, _t = (i, t) => {
  var s, l, c, f, y, g;
  const e = i.variants.nodes.map(
    ({ unitPriceMeasurement: d, ..._ }) => {
      var u, m, h;
      return {
        id: Number(_.id.split("/").pop()),
        availableForSale: _.availableForSale,
        price: Math.round(Number(_.price.amount) * 100),
        compareAtPrice: _.compareAtPrice ? Math.round(Number(_.compareAtPrice.amount) * 100) : null,
        options: _.selectedOptions.map((k) => k.value),
        imageId: _.image ? Number(_.image.id.split("/").pop()) : null,
        image: ((u = _.image) == null ? void 0 : u.url) || null,
        sellingPlans: ((m = _.sellingPlanAllocations) == null ? void 0 : m.nodes.map((k) => ({
          id: Number(k.sellingPlan.id.split("/").pop()),
          price: k.priceAdjustments.length > 0 ? Math.round(Number(k.priceAdjustments[0].price.amount) * 100) : Math.round(Number(_.price.amount) * 100)
        }))) || [],
        inventoryManagement: null,
        // Storefront API does not return inventory management, only available in liquid
        inventoryPolicy: null,
        // Storefront API does not return inventory policy, only available in liquid
        inventoryQuantity: (h = _.quantityAvailable) != null ? h : null,
        unitPriceMeasurement: d != null && d.quantityUnit && (d != null && d.referenceUnit) ? {
          quantityValue: d.quantityValue,
          quantityUnit: d.quantityUnit.toLowerCase(),
          referenceValue: d.referenceValue,
          referenceUnit: d.referenceUnit.toLowerCase()
        } : null
      };
    }
  ), n = i.options.map((d, _) => {
    const u = d.optionValues.map((m) => {
      var h, k, S, b;
      return {
        id: Number(m.id.split("/").pop()),
        defaultName: m.name,
        name: m.name,
        swatch: {
          color: ((h = m.swatch) == null ? void 0 : h.color) || null,
          image: ((b = (S = (k = m.swatch) == null ? void 0 : k.image) == null ? void 0 : S.previewImage) == null ? void 0 : b.url) || null
        }
      };
    });
    return {
      defaultName: d.name,
      name: d.name,
      position: _ + 1,
      optionValues: ae(u, _, e)
    };
  }), r = (d) => {
    const _ = d.priceAdjustments[0];
    if (!_)
      return null;
    const u = _.adjustmentValue;
    switch (u.__typename) {
      case "SellingPlanPercentagePriceAdjustment":
        return {
          type: "percentage",
          value: u.adjustmentPercentage
        };
      case "SellingPlanFixedAmountPriceAdjustment":
        return {
          type: "fixed_amount",
          value: Number(u.adjustmentAmount.amount) * 100
        };
      case "SellingPlanFixedPriceAdjustment":
        return {
          type: "price",
          value: Number(u.price.amount) * 100
        };
      default:
        throw new Error(
          `Unknown price adjustment type: ${u.__typename}`
        );
    }
  }, a = ((s = i.sellingPlanGroups) == null ? void 0 : s.nodes.flatMap(
    (d) => d.sellingPlans.nodes.map((_) => ({
      id: Number(_.id.split("/").pop()),
      name: _.name,
      priceAdjustment: r(_)
    }))
  )) || [], o = i.variants.nodes.some(
    (d) => d.requiresComponents
  );
  return {
    id: Number(i.id.split("/").pop()),
    handle: i.handle,
    url: i.onlineStoreUrl || `https://${t}/products/${i.handle}`,
    availableForSale: i.availableForSale,
    createdAt: i.createdAt,
    title: i.title,
    image: ((l = i.featuredImage) == null ? void 0 : l.url) || null,
    collectionIds: i.collections.nodes.map(
      (d) => Number(d.id.split("/").pop())
    ),
    options: n,
    selectedVariantId: Number(
      i.variants.nodes[0].id.split("/").pop()
    ),
    variants: e,
    requiresSellingPlan: i.requiresSellingPlan,
    sellingPlans: a,
    isNativeBundle: o,
    metafields: {
      text: ((c = i.metafield) == null ? void 0 : c.value) || null,
      text2: ((f = i.metafield2) == null ? void 0 : f.value) || null,
      text3: ((y = i.metafield3) == null ? void 0 : y.value) || null,
      text4: ((g = i.metafield4) == null ? void 0 : g.value) || null
    }
  };
}, ae = (i, t, e) => i.filter((n) => e.filter(
  (r) => r.options[t] === n.name
).length > 0), se = async (i, t, e) => {
  const n = t.map((a) => `gid://shopify/Product/${a}`), r = j({
    country: e == null ? void 0 : e.country,
    language: e == null ? void 0 : e.language
  });
  return (await i.query(
    `
      query FetchProductsInDefaultLanguage($productGIDs: [ID!]!) ${r} {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            options {
              name
              optionValues {
                id
                name
              }
            }
          }
        }
        localization {
          country {
            isoCode
          }
          language {
            isoCode
          }
        }
      }
    `,
    {
      variables: {
        productGIDs: n
      }
    }
  )).nodes.filter((a) => a != null).map(oe);
}, oe = (i) => {
  const t = i.options.map(
    (e, n) => ({
      defaultName: e.name,
      position: n + 1,
      optionValues: e.optionValues.map((r) => ({
        id: Number(r.id.split("/").pop()),
        defaultName: r.name
      }))
    })
  );
  return {
    id: Number(i.id.split("/").pop()),
    options: t
  };
}, le = (i, t) => {
  const e = [], n = i.filter(
    (s) => s.blockVisibility === "selected-products"
  );
  for (const s of n)
    s.selectedProductIds.map(Number).includes(t.id) && e.push(s);
  const r = i.filter(
    (s) => s.blockVisibility === "selected-collections"
  );
  for (const s of r)
    t.collectionIds.some(
      (l) => s.selectedCollectionIds.map(Number).includes(l)
    ) && e.push(s);
  const a = i.filter(
    (s) => s.blockVisibility === "excluded-products"
  );
  for (const s of a)
    !s.excludedProductIds.map(Number).includes(t.id) && !(s.excludedCollectionIds || []).some(
      (l) => t.collectionIds.includes(l)
    ) && e.push(s);
  const o = i.filter(
    (s) => s.blockVisibility === "all-products"
  );
  for (const s of o)
    e.push(s);
  return e;
}, ce = (i) => [
  ...ue(i),
  ...de(i),
  ...pe(i),
  ...he(i),
  ...fe(i),
  ...me(i),
  ...ge(i),
  ..._e(i),
  ...ye(i),
  ...be(i)
].filter((t) => t != null && !t.includes("placeholder")), ue = (i) => i.dealBars.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), de = (i) => i.dealBars.map(
  ({ freeGifts: t }) => (t || []).map((e) => e.mediaImageGID)
).reduce((t, e) => t.concat(e), []).filter((t) => t != null), pe = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => (t || []).map((e) => e.mediaImageGID)
).filter((t) => t != null), he = (i) => i.dealBars.map(({ upsells: t }) => (t || []).map((e) => e.mediaImageGID)).reduce((t, e) => t.concat(e), []).filter((t) => t != null), fe = (i) => i.swatchOptions ? i.swatchOptions.reduce((t, e) => {
  const n = e.images.map((r) => r.mediaImageGID).filter((r) => r != null);
  return [...t, ...n];
}, []) : [], me = (i) => {
  if (!i.collectionBreaksEnabled || !i.collectionBreaks)
    return [];
  const t = i.collectionBreaks.mediaImageGID;
  return t ? [t] : [];
}, ge = (i) => {
  var t, e, n;
  return i.progressiveGifts ? [
    ...((t = i.progressiveGifts.gifts) == null ? void 0 : t.map((r) => r.mediaImageGID)) || [],
    (e = i.progressiveGifts.style) == null ? void 0 : e.lockedMediaImageGID,
    (n = i.progressiveGifts.dealBarStyle) == null ? void 0 : n.lockedMediaImageGID
  ].filter((r) => r != null) : [];
}, _e = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), ye = (i) => i.dealBars.map((t) => {
  var e;
  return (e = t.productPersonalisation) == null ? void 0 : e.mediaImageGID;
}).filter((t) => t != null), be = (i) => i.dealBars.map((t) => {
  var e;
  return (e = t.highlights) == null ? void 0 : e.customIconGID;
}).filter((t) => t != null), ke = (i) => {
  const t = [
    ...Ce(i),
    ...Ie(i),
    ...ve(i),
    ...we(i),
    ...Se(i),
    ...Pe(i),
    ...Te(i)
  ];
  return Array.from(new Set(t.filter((e) => e != null)));
}, Ce = (i) => i.dealBars.flatMap(
  ({ freeGifts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null), Ie = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => t ? t.flatMap(
    (e) => e.products ? e.products.map((n) => n.id) : []
  ) : []
).filter((t) => t != null), ve = (i) => {
  var t;
  return i.progressiveGiftsEnabled ? ((t = i.progressiveGifts) == null ? void 0 : t.gifts.map((e) => e.productGID).filter((e) => e != null)) || [] : [];
}, we = (i) => i.dealBars.flatMap(({ upsells: t }) => t ? t.map((e) => e.productGID) : []).filter((t) => t != null), Se = (i) => i.dealBars.filter((t) => t.dealBarType === "bundle").flatMap(
  ({ bundleProducts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null).filter((t) => t !== "default"), Pe = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.map((t) => t.productGID).filter((t) => t != null), Te = (i) => i.dealBars.filter((t) => t.dealBarType === "sku").flatMap(({ productGID: t }) => t ? [t] : []);
class N {
  constructor(t, e) {
    this.storefrontApiVersion = "2025-10", this.storefrontAccessToken = e, this.shopifyDomain = t;
  }
  async query(t, e) {
    var s, l;
    const n = (s = e == null ? void 0 : e.variables) != null ? s : {};
    let r = `https://${this.shopifyDomain}/api/${this.storefrontApiVersion}/graphql.json`;
    const a = (l = t.match(/query\s+(\w+)/)) == null ? void 0 : l[1];
    a && (r += `?operation_name=${a}`);
    const o = await (await fetch(r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": this.storefrontAccessToken
      },
      body: JSON.stringify({
        query: t,
        variables: n
      })
    })).text();
    if (!o)
      throw new Error("Empty graphql response");
    return JSON.parse(o).data;
  }
}
class Nt extends Error {
  constructor(t) {
    super(t), this.name = "CartFetchError";
  }
}
const lt = "kaching_session_id", Ae = async () => {
  try {
    Ee();
    const i = Q();
    await Ne() !== i && await Fe(i);
  } catch (i) {
    if (i instanceof Nt)
      console.error(i);
    else
      throw i;
  }
}, Ee = () => {
  const i = new URL(window.location.href), t = new URLSearchParams(i.search), e = t.get("preview_kaching_session_id");
  e && (R.setItem(lt, e), t.delete("preview_kaching_session_id"), i.search = t.toString(), window.history.replaceState({}, "", i.toString()));
}, Q = () => R.getItem(lt) || Be(), Be = () => {
  const i = De();
  return R.setItem(lt, i), i;
}, De = () => typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : qe(), qe = () => "10000000-1000-4000-8000-100000000000".replace(
  /[018]/g,
  (i) => (+i ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +i / 4).toString(16)
), Ne = async () => {
  const i = await fetch(Y("cart.js"));
  if (!i.ok)
    throw new Nt("Failed to fetch cart");
  return (await i.json()).attributes._kaching_session_id;
}, Fe = async (i) => await fetch(Y("cart/update.js"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    attributes: {
      _kaching_session_id: i
    }
  })
}), Ft = ({
  kachingSessionId: i,
  abTestVariantsCount: t,
  abTestTrafficAllocation: e
}) => {
  const n = parseInt(i.replace(/-/g, "").slice(0, 4), 16) % 256, r = Math.floor(n * 100 / 256);
  if (!e)
    return Oe(r, t);
  const a = 100 - e;
  if (r < a)
    return 1;
  const o = t - 1;
  if (o === 0)
    return 1;
  const s = e / o, l = Math.floor(
    (r - a) / s
  );
  return Math.min(l + 2, t);
}, Oe = (i, t) => {
  const e = 100 / t, n = Math.floor(i / e);
  return Math.min(n + 1, t);
};
let F, $ = null, Ot, Vt = [];
const Ve = async (i) => {
  Vt = i;
}, Mt = async () => {
  if ($)
    return $;
  $ = (async () => {
    if (!F.storefrontAccessToken)
      return;
    const i = new N(
      F.shopifyDomain,
      F.storefrontAccessToken
    );
    Ot = await Dt(i, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: F.featureFlags.storefront_metaobjects
    });
  })();
  try {
    await $;
  } catch (i) {
    throw $ = null, i;
  }
}, Me = async () => {
  var e;
  await Mt();
  const i = Ot.filter((n) => {
    if (!n.abTestVariantId)
      return !0;
    const r = Q(), a = Ft({
      kachingSessionId: r,
      abTestVariantsCount: n.abTestVariantsCount,
      abTestTrafficAllocation: n.abTestTrafficAllocation
    });
    return n.abTestVariantNumber === a;
  }), t = (e = Vt.find(
    (n) => n.locale === F.locale
  )) == null ? void 0 : e.translations;
  return i.map((n) => {
    const r = (t == null ? void 0 : t.dealBlocks[n.id]) || {};
    return $e(n, r);
  });
}, $e = (i, t) => {
  var g, d, _;
  const e = (u) => {
    switch (u.dealBarType) {
      case void 0:
      case "quantity-break":
        return n(u);
      case "bxgy":
        return r(u);
      case "bundle":
        return a(u);
      case "sku":
        return o(u);
      default:
        return null;
    }
  }, n = (u) => ({
    id: u.id,
    title: t[u.title] || u.title,
    mediaImageGID: u.mediaImageGID,
    freeGifts: [
      ...l(u.freeGifts),
      ...c(u.id, i.progressiveGifts)
    ],
    upsells: f(u.upsells),
    dealBarType: "quantity-break",
    quantity: Number(u.quantity),
    discount: rt(u.discountType, u.discountValue)
  }), r = (u) => ({
    id: u.id,
    title: t[u.title] || u.title,
    mediaImageGID: u.mediaImageGID,
    freeGifts: [
      ...l(u.freeGifts),
      ...c(u.id, i.progressiveGifts)
    ],
    upsells: f(u.upsells),
    dealBarType: "bxgy",
    buyQuantity: Number(u.buyQuantity),
    getQuantity: Number(u.getQuantity)
  }), a = (u) => ({
    id: u.id,
    title: t[u.title] || u.title,
    mediaImageGID: u.mediaImageGID,
    freeGifts: [
      ...l(u.freeGifts),
      ...c(u.id, i.progressiveGifts)
    ],
    upsells: f(u.upsells),
    dealBarType: "bundle",
    bundleProducts: s(u.bundleProducts)
  }), o = (u) => ({
    id: u.id,
    title: t[u.title] || u.title,
    mediaImageGID: u.mediaImageGID,
    freeGifts: [
      ...l(u.freeGifts),
      ...c(u.id, i.progressiveGifts)
    ],
    upsells: f(u.upsells),
    dealBarType: "sku"
  }), s = (u) => u.map((m) => {
    var h;
    return {
      id: m.id,
      productId: m.productGID === "default" ? "default" : B(m.productGID),
      variantId: m.variantGIDs && ((h = m.variantGIDs) != null && h[0]) ? B(m.variantGIDs[0]) : null,
      variantIds: m.variantGIDs ? m.variantGIDs.map(B) : null,
      quantity: Number(m.quantity),
      discount: rt(
        m.discountType,
        m.discountValue
      )
    };
  }), l = (u) => u ? u.filter((h) => h.productGID).map((h) => {
    var k, S;
    return {
      id: h.id,
      productId: B(h.productGID),
      variantId: h.variantGIDs && ((k = h.variantGIDs) != null && k[0]) ? B(h.variantGIDs[0]) : null,
      variantIds: h.variantGIDs ? h.variantGIDs.map(B) : null,
      quantity: Number(h.quantity),
      applyOnlyForSubscriptions: (S = h.applyOnlyForSubscriptions) != null ? S : !1
    };
  }) : [], c = (u, m) => {
    if (!m)
      return [];
    const h = i.dealBars.findIndex((b) => b.id === u);
    return m.gifts.filter((b) => b.giftType === "product").filter((b) => b.productGID).filter(
      (b) => h + 1 >= b.unlockAtBar
    ).map((b) => ({
      id: b.id,
      productId: B(b.productGID),
      variantId: null,
      variantIds: null,
      quantity: 1,
      applyOnlyForSubscriptions: !1
    }));
  }, f = (u) => u ? u.map((m) => ({
    id: m.id,
    productId: m.productGID ? B(m.productGID) : null,
    variantId: m.variantGIDs && m.variantGIDs[0] ? B(m.variantGIDs[0]) : null,
    variantIds: m.variantGIDs ? m.variantGIDs.map(B) : null,
    quantity: Number(m.quantity),
    discount: rt(m.discountType, m.discountValue)
  })) : [];
  return {
    id: i.id,
    nanoId: i.nanoId,
    collectionBreaksEnabled: (g = i.collectionBreaksEnabled) != null ? g : !1,
    differentVariantsEnabled: i.differentVariantsEnabled,
    marketId: (d = i.marketId) != null ? d : null,
    currency: (_ = i.currency) != null ? _ : null,
    dealBars: i.dealBars.filter((u) => "showAsSoldOutEnabled" in u ? !u.showAsSoldOutEnabled : !0).map(e).filter((u) => u !== null)
  };
}, rt = (i, t) => !i || i === "default" ? null : {
  type: i,
  value: Number(t)
}, B = (i) => Number(i.split("/").pop()), Le = (i) => (F = i, {
  fetchDeals: Me
}), G = "kachingBundlesSaveOverlayDismissed", Ge = "bundles.kachingappz.app", xe = () => {
  const i = document.createElement("div");
  return i.className = "kaching-bundles-save-overlay", i.setAttribute("role", "status"), i.setAttribute("tabindex", "0"), i.setAttribute(
    "aria-label",
    "Click Save in the top-right corner to activate the app. Press Escape or Enter to dismiss."
  ), i.innerHTML = `
    <div class="kaching-bundles-save-overlay__content">
      <div class="kaching-bundles-save-overlay__text">Click "Save" in the top-right corner.</div>
      <svg class="kaching-bundles-save-overlay__arrow" aria-hidden="true" width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0235 30.0476C26.9813 26.0688 31.6367 20.3068 34.359 13.6647C34.5787 13.1287 34.7807 12.5866 34.9688 12.0407C34.9872 12.1286 35.0055 12.2166 35.0239 12.3045C35.6997 15.541 36.1871 18.9234 37.35 22.0252C37.7091 22.9828 39.2759 22.7067 39.9528 22.449C40.7647 22.1396 42.0725 21.3396 41.9969 20.292C41.7562 16.9608 40.8171 13.666 40.0928 10.414C39.3726 7.17983 38.6526 3.94569 37.9324 0.711381C37.7809 0.0312821 36.6451 -0.0343474 36.1453 0.0113582C35.3082 0.0879608 34.2573 0.50077 33.6973 1.15893C33.4368 1.46497 33.1749 1.76993 32.9143 2.07579C32.6324 2.30048 32.3929 2.56904 32.2294 2.87801C29.1225 6.52203 26.0063 10.1587 22.8826 13.7888C22.4856 14.2503 22.2166 14.9143 22.9177 15.2375C23.5886 15.5469 24.5829 15.0895 25.0594 14.6178C27.0866 12.6108 29.1155 10.6056 31.1471 8.60291C30.1175 12.9391 28.3489 17.1025 25.7631 20.7229C24.0598 23.1078 21.9 25.3178 19.6649 26.9826C17.264 28.771 14.6378 30.214 11.9792 31.178C10.3347 31.7744 8.62775 32.2461 6.92197 32.6287C5.09815 33.0377 3.24342 33.2486 1.42578 33.6781C0.857063 33.8125 -0.79524 35.2271 0.459136 35.5827C3.73503 36.5115 7.65457 35.7308 10.8601 34.7902C14.4641 33.7324 17.896 32.1362 21.0235 30.0476Z" fill="white"/>
      </svg>
    </div>
  `, i;
}, yt = (i) => {
  i.classList.add("kaching-bundles-save-overlay--dismissed");
  try {
    sessionStorage.setItem(G, "true");
  } catch {
  }
  setTimeout(() => i.remove(), 300);
}, Re = () => {
  if (sessionStorage.getItem(G))
    return;
  const i = xe();
  document.body.appendChild(i), requestAnimationFrame(() => {
    i.classList.add("kaching-bundles-save-overlay--visible"), i.focus();
  }), i.addEventListener("click", () => yt(i)), i.addEventListener("keydown", (t) => {
    (t.key === "Escape" || t.key === "Enter") && yt(i);
  });
}, je = async ({
  appHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  try {
    if (sessionStorage.getItem(G))
      return !0;
  } catch {
  }
  const n = new URLSearchParams({ shop: t });
  e && n.set("theme_id", e.toString());
  const r = `${i}/public_api/app_embed?${n.toString()}`, a = await fetch(r);
  if (!a.ok)
    throw new Error(`API error: ${a.status}`);
  const o = await a.json();
  if (o.themeInaccessible) {
    try {
      sessionStorage.setItem(G, "true");
    } catch {
    }
    return !0;
  }
  if (o.active)
    try {
      sessionStorage.setItem(G, "true");
    } catch {
    }
  return o.active;
}, Qe = async ({
  customApiHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  const r = `https://${i != null ? i : Ge}`;
  try {
    await je({
      appHost: r,
      shopifyDomain: t,
      themeId: e
    }) || Re();
  } catch {
  }
};
function bt(i) {
  const t = i.properties && typeof i.properties == "object" ? i.properties : {};
  for (const [n, r] of Object.entries(i)) {
    const a = n.match(/^properties\[(.+)\]$/);
    a && (t[a[1]] = r);
  }
  ct(t);
  const e = {
    id: Number(i.id),
    quantity: Number(i.quantity) || 1,
    properties: t
  };
  return i.selling_plan && (e.selling_plan = Number(i.selling_plan)), i.parent_id && (e.parent_id = Number(i.parent_id)), e;
}
function ct(i) {
  if (!i.__kaching_bundles) return;
  const t = i.__kaching_bundles;
  if (typeof t == "string")
    try {
      const e = atob(t);
      JSON.parse(e), i.__kaching_bundles = e;
    } catch {
    }
}
function kt(i) {
  try {
    return JSON.parse(i), !1;
  } catch {
    return !0;
  }
}
function Ct(i) {
  const t = new URLSearchParams(i), e = new FormData();
  return t.forEach((n, r) => {
    e.append(r, n);
  }), e;
}
function He(i) {
  const t = new URLSearchParams();
  return i.forEach((e, n) => {
    t.append(n, e);
  }), t.toString();
}
function It(i) {
  return Array.from(i.keys()).some(
    (e) => e.startsWith("items[")
  ) ? Ue(i) : ze(i);
}
function ze(i) {
  const t = i.get("id");
  if (!t)
    return I("intercept_cart_request_error", {
      type: "processing",
      error: "Missing item id in form data",
      body: i
    }), null;
  const e = {};
  i.forEach((o, s) => {
    const l = s.match(/^properties\[(.+)\]$/);
    l && (e[l[1]] = o);
  }), ct(e);
  const n = {
    id: Number(t),
    quantity: Number(i.get("quantity")) || 1,
    properties: e
  }, r = i.get("selling_plan");
  r && (n.selling_plan = Number(r));
  const a = i.get("parent_id");
  return a && (n.parent_id = Number(a)), [n];
}
function Ue(i) {
  const t = /* @__PURE__ */ new Map();
  if (i.forEach((n, r) => {
    const a = r.match(/^items\[(\d+)\]\[(.+)\]$/);
    if (!a) return;
    const o = Number(a[1]), s = a[2];
    t.has(o) || t.set(o, { properties: {} });
    const l = t.get(o);
    switch (s) {
      case "id":
        l.id = Number(n);
        break;
      case "quantity":
        l.quantity = Number(n);
        break;
      case "selling_plan":
        l.selling_plan = Number(n);
        break;
      case "parent_id":
        l.parent_id = Number(n);
        break;
      default: {
        const c = s.match(/^properties\]\[(.+)$/);
        c && (l.properties[c[1]] = n);
      }
    }
  }), t.size === 0) return null;
  const e = [];
  for (const [, n] of t) {
    if (!n.id) continue;
    ct(n.properties);
    const r = {
      id: n.id,
      quantity: n.quantity || 1,
      properties: n.properties
    };
    n.selling_plan && (r.selling_plan = n.selling_plan), n.parent_id && (r.parent_id = n.parent_id), e.push(r);
  }
  return e.length > 0 ? e : null;
}
function vt(i, t) {
  const e = new FormData();
  if (i.forEach((n, r) => {
    Je(r) || e.append(r, n);
  }), t.length === 1) {
    const n = t[0];
    if (e.append("id", String(n.id)), e.append("quantity", String(n.quantity)), n.selling_plan && e.append("selling_plan", String(n.selling_plan)), n.parent_id && e.append("parent_id", String(n.parent_id)), n.properties)
      for (const [r, a] of Object.entries(n.properties))
        e.append(`properties[${r}]`, $t(a));
  } else
    t.forEach(
      (n, r) => Ke(e, n, r)
    );
  return e;
}
function Je(i) {
  return ["id", "quantity", "selling_plan", "parent_id"].includes(i) || i.startsWith("properties[") || i.startsWith("items[");
}
function Ke(i, t, e) {
  if (i.append(`items[${e}][id]`, String(t.id)), i.append(`items[${e}][quantity]`, String(t.quantity)), t.selling_plan && i.append(`items[${e}][selling_plan]`, String(t.selling_plan)), t.parent_id && i.append(`items[${e}][parent_id]`, String(t.parent_id)), t.properties)
    for (const [n, r] of Object.entries(t.properties))
      i.append(
        `items[${e}][properties][${n}]`,
        $t(r)
      );
}
function $t(i) {
  return i instanceof Blob ? i : String(i);
}
function We(i) {
  try {
    const t = JSON.parse(i);
    return !t || typeof t != "object" ? (I("intercept_cart_request_error", {
      type: "processing",
      error: "Failed to parse JSON body",
      body: i
    }), null) : Array.isArray(t.items) ? t.items.filter(
      (e) => e && typeof e == "object" && "id" in e
    ).map((e) => bt(e)) : t.id ? [bt(t)] : null;
  } catch {
    return I("intercept_cart_request_error", {
      type: "processing",
      error: "Failed to parse JSON body",
      body: i
    }), null;
  }
}
function Xe(i, t) {
  try {
    const e = JSON.parse(i), n = [
      "id",
      "quantity",
      "selling_plan",
      "parent_id",
      "properties"
    ], r = {};
    for (const [a, o] of Object.entries(e))
      !n.includes(a) && a !== "items" && !a.startsWith("properties[") && (r[a] = o);
    return t.length === 1 ? Object.assign(r, t[0]) : r.items = t, JSON.stringify(r);
  } catch {
    return t.length === 1 ? JSON.stringify(t[0]) : JSON.stringify({ items: t });
  }
}
const wt = /* @__PURE__ */ new WeakMap();
class Ye {
  constructor() {
    this._started = !1, this._registeredDeals = /* @__PURE__ */ new Map(), this._fallbackDeal = null, this._fallbackDealTimeout = null;
  }
  start() {
    this._started || (this._started = !0, this._interceptFetchRequests(), this._interceptXHRRequests(), this._interceptCartFormSubmits(), window.OpusNoATC = !0, p("CartInterceptor started"));
  }
  registerDeal(t, e, n) {
    const r = this._registeredDeals.get(t) || [];
    r.push({ getItems: n, product: e }), this._registeredDeals.set(t, r), p("CartInterceptor deal registered", {
      dealId: t,
      totalDeals: r.length
    });
  }
  setFallbackDeal(t, e) {
    p("CartInterceptor fallback deal set", { dealId: t }), this._fallbackDealTimeout && clearTimeout(this._fallbackDealTimeout), this._fallbackDeal = { dealId: t, product: e }, this._fallbackDealTimeout = window.setTimeout(() => {
      this._fallbackDeal = null, this._fallbackDealTimeout = null;
    }, 2e3);
  }
  _interceptFetchRequests() {
    const t = window.fetch.bind(window);
    window.fetch = async (e, n) => {
      var a, o;
      const r = this._getModifiedBody(e, n == null ? void 0 : n.body);
      if (r) {
        v("Intercepting cart/add request, merging bundle items"), I(
          "intercept_cart_request",
          {
            type: "fetch",
            theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
          },
          0.01
        );
        try {
          return await t(e, { ...n, body: r });
        } catch (s) {
          return p("Modified request failed, retrying with original", { error: s }), I("intercept_cart_request_error", {
            type: "fetch",
            theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name,
            error: s instanceof Error ? s.message : String(s)
          }), t(e, n);
        }
      }
      return t(e, n);
    };
  }
  _interceptXHRRequests() {
    var s, l, c, f;
    const t = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send, n = function(y, g, d = !0, _, u) {
      return wt.set(this, g), t.call(this, y, g, d, _, u);
    }, r = function(y) {
      var d, _;
      const g = wt.get(this);
      if (g) {
        const u = J._getModifiedBody(g, y);
        if (u) {
          v("Intercepting XHR cart/add request, merging bundle items"), I("intercept_cart_request", {
            type: "xhr",
            theme: (d = window.Shopify.theme) == null ? void 0 : d.schema_name
          });
          try {
            return e.call(this, u);
          } catch (m) {
            return p("Modified XHR request failed, retrying with original", {
              error: m
            }), I("intercept_cart_request_error", {
              type: "xhr",
              theme: (_ = window.Shopify.theme) == null ? void 0 : _.schema_name,
              error: m instanceof Error ? m.message : String(m)
            }), e.call(this, y);
          }
        }
      }
      return e.call(this, y);
    }, a = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "open"
    ), o = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "send"
    );
    if ((a == null ? void 0 : a.configurable) === !1 || (o == null ? void 0 : o.configurable) === !1) {
      p("Cannot intercept XHR - prototype methods are not configurable");
      return;
    }
    Object.defineProperty(XMLHttpRequest.prototype, "open", {
      value: n,
      writable: (s = a == null ? void 0 : a.writable) != null ? s : !0,
      configurable: (l = a == null ? void 0 : a.configurable) != null ? l : !0
    }), Object.defineProperty(XMLHttpRequest.prototype, "send", {
      value: r,
      writable: (c = o == null ? void 0 : o.writable) != null ? c : !0,
      configurable: (f = o == null ? void 0 : o.configurable) != null ? f : !0
    });
  }
  _interceptCartFormSubmits() {
    const t = async (e) => {
      var s, l;
      if (e.defaultPrevented || !(e.target instanceof HTMLFormElement))
        return;
      const n = e.target, r = n.action;
      if (!r.includes("/cart/add"))
        return;
      const a = new FormData(n);
      if (this._getModifiedBody(r, a)) {
        e.preventDefault(), I("intercept_cart_request", {
          type: "form",
          theme: (s = window.Shopify.theme) == null ? void 0 : s.schema_name
        });
        try {
          const c = await fetch(r, {
            method: "POST",
            body: a
          });
          if (!c.ok)
            throw new Error(`HTTP ${c.status}`);
          window.location.href = "/cart";
        } catch (c) {
          p("Fetch request failed, submitting original form", {
            error: c
          }), I("intercept_cart_request_error", {
            type: "form",
            theme: (l = window.Shopify.theme) == null ? void 0 : l.schema_name,
            error: c instanceof Error ? c.message : String(c)
          }), n.submit();
        }
      }
    };
    document.addEventListener("submit", t), setTimeout(() => {
      document.removeEventListener("submit", t), document.addEventListener("submit", t);
    }, 3e3);
  }
  _getModifiedBody(t, e) {
    try {
      const n = typeof t == "string" ? t : t instanceof URL ? t.href : t.url;
      if (!this._isInterceptableUrl(n))
        return null;
      if (p("Request body", e), typeof e != "string" && !(e instanceof FormData))
        return I("intercept_cart_request_error", {
          type: "processing",
          error: "Invalid body type"
        }), null;
      const r = this._parseOriginalItems(e);
      if (p("Original items", r), !r)
        return null;
      const a = this._findBundleItems(r);
      if (p("Bundle items", a), !a)
        return null;
      const o = this._mergeItems(r, a);
      if (p("Merged items", o), JSON.stringify(r) === JSON.stringify(o))
        return null;
      const s = this._updateBody(e, o);
      return p("Updated body", s), s;
    } catch (n) {
      return p("CartInterceptor error, falling back to original request", {
        error: n
      }), I("intercept_cart_request_error", {
        type: "processing",
        error: n instanceof Error ? n.message : String(n)
      }), null;
    }
  }
  _isInterceptableUrl(t) {
    return t.includes("cart/add") && !t.includes("kaching_bundles=true") && !t.includes("kaching-cart=true") && !t.includes("kaching_popup=true");
  }
  _parseOriginalItems(t) {
    if (t instanceof FormData)
      return It(t);
    if (kt(t)) {
      const e = Ct(t);
      return It(e);
    }
    return We(t);
  }
  _findBundleItems(t) {
    var o, s;
    const e = t.find(
      (l) => l.properties.__kaching_bundles
    ), n = e ? JSON.parse(e.properties.__kaching_bundles).deal : (o = this._fallbackDeal) == null ? void 0 : o.dealId;
    if (!n)
      return null;
    const r = this._fallbackDeal;
    if (!e && r) {
      if (!t.some(
        (c) => r.product.variants.some((f) => f.id === c.id)
      ))
        return null;
      I("fallback_deal_used", {
        theme: (s = window.Shopify.theme) == null ? void 0 : s.schema_name
      });
    }
    const a = this._registeredDeals.get(n);
    if (!(a != null && a.length))
      return p("No registered deals found", { dealId: n }), null;
    for (const { getItems: l, product: c } of a) {
      const f = l();
      if (e ? f.some(
        (g) => t.some(
          (d) => d.id === g.id && d.properties.__kaching_bundles === g.properties.__kaching_bundles
        )
      ) : f.length > 0 && c.id === (r == null ? void 0 : r.product.id)) return f;
    }
    return p("No matching items found for deal", { dealId: n }), null;
  }
  _mergeItems(t, e) {
    t = t.map((s) => ({
      ...s
    }));
    const n = t.find(
      (s) => s.properties.__kaching_bundles
    );
    if (!n && this._fallbackDeal) {
      const s = t.filter(
        (l) => !this._fallbackDeal.product.variants.some((c) => c.id === l.id) && !e.some((c) => c.id === l.id)
      );
      return [...e, ...s];
    }
    const r = {};
    if (n) {
      for (const [l, c] of Object.entries(n.properties))
        l !== "__kaching_bundles" && (r[l] = c);
      const s = e.find(
        (l) => l.id === n.id && l.properties.__kaching_bundles === n.properties.__kaching_bundles
      );
      s && (n.quantity = s.quantity, s.selling_plan && (n.selling_plan = s.selling_plan));
    }
    return [...e.filter(
      (s) => !t.some(
        (l) => l.id === s.id && l.properties.__kaching_bundles === s.properties.__kaching_bundles
      )
    ).map((s) => {
      const l = JSON.parse(
        s.properties.__kaching_bundles
      );
      return l != null && l.main ? {
        ...s,
        properties: {
          ...r,
          ...s.properties
        }
      } : s;
    }), ...t];
  }
  _updateBody(t, e) {
    if (t instanceof FormData)
      return vt(t, e);
    if (kt(t)) {
      const n = Ct(t), r = vt(n, e);
      return He(r);
    }
    return Xe(t, e);
  }
}
const J = new Ye(), K = async (i, t, e, n) => {
  var l;
  if (!t || e.length === 0) return;
  const r = Ze(n);
  if (r.length === 0) return;
  const a = e.map((c) => c.id), o = (l = r.find((c) => c.localization)) == null ? void 0 : l.localization, s = new N(
    i,
    t
  );
  try {
    const c = await se(
      s,
      a,
      o
    );
    for (const f of e) {
      const y = c.find(
        (g) => g.id === f.id
      );
      y && tn(f, y);
    }
  } catch (c) {
    console.error("[Kaching Bundles] Failed to fetch swatches", c), setTimeout(() => {
      throw c;
    }, 0);
  }
}, Ze = (i) => i.map((e) => e.swatchOptions || []).reduce((e, n) => e.concat(n), []).filter((e) => e != null).filter((e) => e.swatchType !== "default"), tn = (i, t) => {
  for (const e of t.options) {
    const n = i.options.find(
      (r) => r.position === e.position
    );
    if (n) {
      n.defaultName = e.defaultName;
      for (const r of e.optionValues) {
        const a = n.optionValues.find(
          (o) => o.id === r.id
        );
        a && (a.defaultName = r.defaultName);
      }
    }
  }
}, St = window;
class en {
  constructor(t, e, n, r, a, o, s) {
    var l, c, f, y;
    if (this._items = [], this._clickedAddToCartBeforeFormSubmit = !1, this._isFirstVariantChange = !0, v("Deal block id:", a.id), v("Deal block settings", a), v("Config", n), v("Product", o), v("Deal block widget", { widget: t }), v("Cart form", { form: (l = e.addToCartForm()) == null ? void 0 : l.form }), v("Add to cart button", {
      button: (c = e.addToCartButton()) == null ? void 0 : c.button
    }), v("Quantity input", { input: e.quantityInput() }), v("Variant picker", {
      picker: (f = e.variantPicker()) == null ? void 0 : f.elements()
    }), this._dealBlockElement = t, this._productBlock = e, this._globalConfig = n, this._translations = r, this._dealBlockSettings = a, this._product = o, this._otherProductsFromLiquid = s, this._country = this._globalConfig.country, this._language = this._globalConfig.locale.split("-")[0].toUpperCase(), this._globalConfig.featureFlags.initialize_with_form_variant) {
      let g = this._product.selectedVariantId || this._product.variants[0].id;
      const d = (y = this._productBlock.addToCartForm()) == null ? void 0 : y.currentVariantId();
      d && this._product.variants.some((_) => _.id == d) && (g = d), this._currentVariantId = g;
    } else
      this._currentVariantId = this._product.selectedVariantId || this._product.variants[0].id;
    this._initialize();
  }
  _initialize() {
    P(
      this._dealBlockElement,
      "deal-block-id",
      this._dealBlockSettings.id
    ), P(
      this._dealBlockElement,
      "config",
      JSON.stringify(this._globalConfig)
    ), P(
      this._dealBlockElement,
      "translations",
      JSON.stringify(this._translations)
    ), P(
      this._dealBlockElement,
      "deal-block",
      JSON.stringify(this._dealBlockSettings)
    ), P(
      this._dealBlockElement,
      "product",
      JSON.stringify(this._product)
    ), P(
      this._dealBlockElement,
      "current-variant-id",
      String(this._currentVariantId)
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(this._otherProductsFromLiquid)
    ), this._loadMediaImagesAsync(), this._loadOtherProductsAsync(), this._loadCollectionBreaksProductsAsync(), this._loadComplementaryProductsAsync(), this._loadNativeBundleProductIdsAsync();
    const t = !!this._productBlock.addToCartForm(), e = !t && this._globalConfig.featureFlags.intercept_cart_request === !0 && !!this._globalConfig.customSelectors.addToCartButton;
    !t && !e || this._addEventListeners(e);
  }
  async _loadMediaImagesAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), e = ce(this._dealBlockSettings), n = await ie(t, e, 300);
    P(
      this._dealBlockElement,
      "media-images",
      JSON.stringify(n)
    );
  }
  async _loadOtherProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = ke(this._dealBlockSettings);
    if (!t.length)
      return;
    const e = new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await U(e, {
      country: this._country,
      language: this._language,
      productIds: t,
      includeSellingPlans: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_selling_plans"
      ),
      includeAvailableQuantity: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_product_inventory"
      ),
      useExternalMetafieldNamespace: !1
    });
    await K(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      n,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(n)
    );
  }
  async _loadCollectionBreaksProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const { collectionBreaksEnabled: t, collectionBreaks: e } = this._dealBlockSettings;
    if (!t || !e)
      return;
    const n = new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    let r;
    e.visibility === "deal-products" ? r = await mt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: this._dealBlockSettings.blockVisibility,
      excludedProductGIDs: (this._dealBlockSettings.excludedProductIds || []).map((o) => `gid://shopify/Product/${o}`),
      selectedProductGIDs: (this._dealBlockSettings.selectedProductIds || []).map((o) => `gid://shopify/Product/${o}`),
      selectedCollectionGIDs: (this._dealBlockSettings.selectedCollectionIds || []).map((o) => `gid://shopify/Collection/${o}`)
    }) : r = await mt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: e.visibility,
      excludedProductGIDs: (e.excludedProducts || []).map(
        ({ id: o }) => o
      ),
      selectedProductGIDs: (e.selectedProducts || []).map(
        ({ id: o }) => o
      ),
      selectedCollectionGIDs: (e.selectedCollections || []).map(({ id: o }) => o)
    });
    let a = await U(n, {
      country: this._country,
      language: this._language,
      productIds: r.map((o) => Number(o.split("/").pop())),
      includeSellingPlans: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_selling_plans"
      ),
      includeAvailableQuantity: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_product_inventory"
      ),
      useExternalMetafieldNamespace: !1,
      batchSize: 20,
      onBatchError: (o) => {
        var s;
        return at(o.message, (s = o.stack) != null ? s : "", 1);
      }
    });
    a = a.filter(
      (o) => o.availableForSale
    ), a.sort((o, s) => o.id === this._product.id ? -1 : s.id === this._product.id ? 1 : 0), await K(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "collection-breaks-products",
      JSON.stringify(a)
    ), setTimeout(() => {
      this._preloadImages(a);
    }, 1e3);
  }
  async _loadComplementaryProductsAsync() {
    var a, o;
    if (!(this._dealBlockSettings.dealBars.some(
      (s) => {
        var l;
        return (l = s.upsells) == null ? void 0 : l.some(
          (c) => c.productSource === "complementary"
        );
      }
    ) || ((o = (a = this._dealBlockSettings.checkboxUpsells) == null ? void 0 : a.upsells) == null ? void 0 : o.some(
      (s) => s.productSource === "complementary"
    ))) || !this._globalConfig.storefrontAccessToken)
      return;
    const e = new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await te(
      e,
      {
        country: this._country,
        language: this._language,
        productId: this._product.id
      }
    );
    if (!n.length)
      return;
    let r = await U(e, {
      country: this._country,
      language: this._language,
      productIds: n.map(
        (s) => Number(s.split("/").pop())
      ),
      includeSellingPlans: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_selling_plans"
      ),
      includeAvailableQuantity: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_product_inventory"
      ),
      useExternalMetafieldNamespace: !1
    });
    r = r.filter(
      (s) => s.availableForSale
    ), await K(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      r,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "complementary-products",
      JSON.stringify(r)
    );
  }
  async _loadNativeBundleProductIdsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = [
      this._product,
      ...this._otherProductsFromLiquid
    ].filter((r) => r.isNativeBundle === null);
    if (t.length === 0)
      return;
    const e = new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await re(
      e,
      t.map((r) => r.id)
    );
    n.length > 0 && P(
      this._dealBlockElement,
      "native-bundle-product-ids",
      JSON.stringify(n)
    );
  }
  _preloadImages(t) {
    for (const e of t) {
      const n = e.variants[0].image || e.image;
      if (n) {
        const r = new Image();
        r.src = n;
      }
    }
  }
  _addEventListeners(t) {
    if (this._listenForVariantUrlChange(), this._listenForQuantityInputChange(), this._listenForBlockVariantSelect(), this._listenForBlockDealBarSelect(), this._listenForBlockItemsChange(), t || (this._listenForFormVariantIdChange(), this._listenForFormSellingPlanChange()), this._listenForAmountDiscountExceedsPrice(), !window.kachingBundlesDisableAddToCartHandling) {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        J.start();
        const e = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        J.registerDeal(e, this._product, () => this._items);
      }
      this._listenForAddToCartClick();
    }
  }
  /* Native variant change handling */
  _listenForVariantUrlChange() {
    Jt(), O(St, "locationchange", () => {
      const e = new URLSearchParams(St.location.search).get("variant");
      e && (p("listenForVariantUrlChange", e), this._handleNativeVariantChange(Number(e)));
    });
  }
  _listenForFormVariantIdChange() {
    const t = this._productBlock.addToCartForm();
    t && t.onVariantIdChange((e) => {
      p("listenForFormVariantIdChange", e), this._handleNativeVariantChange(e);
    });
  }
  _handleNativeVariantChange(t) {
    if (p("handleNativeVariantChange", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), t != this._currentVariantId && this._product.variants.find((e) => e.id == t)) {
      if (this._globalConfig.featureFlags.remove_variant_change_delay ? window.kachingBundlesCurrentVariantChangeInProgress || (this._currentVariantId = t) : this._currentVariantId = t, this._globalConfig.featureFlags.remove_variant_change_delay) {
        if (window.kachingBundlesCurrentVariantChangeInProgress) {
          p("handleNativeVariantChange", "skipping");
          return;
        }
      } else if (this._dealBlockElement.dataset.nativeVariantChangeInProgress || window.kachingBundlesCurrentVariantChangeInProgress) {
        p("handleNativeVariantChange", "skipping");
        return;
      }
      this._dealBlockElement.dataset.nativeVariantChangeInProgress = "true", setTimeout(
        () => {
          delete this._dealBlockElement.dataset.nativeVariantChangeInProgress;
        },
        this._globalConfig.featureFlags.remove_variant_change_delay ? 1e3 : 500
      ), P(
        this._dealBlockElement,
        "current-variant-id",
        String(t)
      );
    }
  }
  _listenForFormSellingPlanChange() {
    if (!this._globalConfig.featureFlags.observe_form_selling_plan)
      return;
    const t = this._productBlock.addToCartForm();
    if (t) {
      try {
        !!E(
          'input[name="selling_plan"][type="radio"]',
          t.form
        ) && I("selling_plan_radio_detected", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id
        });
      } catch {
      }
      t.onSellingPlanChange((e) => {
        p("listenForFormSellingPlanChange", e), P(
          this._dealBlockElement,
          "selling-plan-id",
          e ? String(e) : ""
        );
      });
    }
  }
  /* Native quantity input */
  _listenForQuantityInputChange() {
    this._productBlock.onQuantityInputChange((t) => {
      if (p("_listenForQuantityInputChange", t), !window.kachingBundlesQuantityChangeInProgress) {
        if (!this._globalConfig.keepQuantityInput || window.kachingBundlesCurrentVariantChangeInProgress || this._dealBlockElement.dataset.nativeVariantChangeInProgress) {
          this._changeQuantityInput();
          return;
        }
        this._globalConfig.keepQuantityInput && P(this._dealBlockElement, "quantity", String(t));
      }
    });
  }
  _changeQuantityInput() {
    const t = this._productBlock.quantityInput();
    if (!t || this._items.length === 0 || window.kachingBundlesDisableAddToCartHandling && !this._globalConfig.keepQuantityInput)
      return;
    window.kachingBundlesQuantityChangeInProgress = !0;
    const e = this._items.filter(
      (a) => this._isMainProductItem(a)
    ), r = (e.find(({ id: a }) => a == this._currentVariantId) || e[0]).quantity;
    p("_updateQuantityInput", r), t.value = String(r), this._globalConfig.shopifyDomain === "119a01-bf.myshopify.com" && t.dispatchEvent(new Event("input", { bubbles: !0 })), t.dispatchEvent(new Event("change", { bubbles: !0 })), setTimeout(() => {
      delete window.kachingBundlesQuantityChangeInProgress;
    }, 100);
  }
  /* Block variants change handling */
  _listenForBlockVariantSelect() {
    O(this._dealBlockElement, "variant-selected", (t) => {
      const { variantId: e } = t.detail;
      p("listenForBlockVariantSelect", e), this._changeCurrentVariant(e);
    });
  }
  _listenForBlockDealBarSelect() {
    this._globalConfig.webPixel && this._dealBlockElement.addEventListener("deal-bar-selected", (t) => {
      const { dealBarId: e } = t.detail, n = this._dealBlockSettings.dealBars.find(
        (a) => a.id === e
      ), r = (n == null ? void 0 : n.dealBarType) === "sku" && n.productGID ? Number(n.productGID.split("/").pop()) : this._product.id;
      Bt(() => {
        window.Shopify.analytics.publish("kaching_deal_bar_selected", {
          product_id: r,
          deal_block_id: this._dealBlockSettings.id,
          deal_bar_id: e,
          ab_test_variant_id: this._dealBlockSettings.abTestVariantId
        });
      });
    });
  }
  _listenForBlockItemsChange() {
    O(this._dealBlockElement, "items-changed", () => {
      var r, a, o;
      clearTimeout(this._updateQuantityInputTimeoutHandle);
      const t = this._dealBlockElement.pricing();
      this._items = this._dealBlockElement.items(), v("Selected items changed", this._items);
      const e = this._items.filter(
        (s) => this._isMainProductItem(s)
      ), n = e.find((s) => s.id == this._currentVariantId) || e[0];
      if (n) {
        if (this._changeCurrentVariant(n.id), (r = this._productBlock.addToCartForm()) == null || r.updateItem(n), this._changeQuantityInput(), (a = this._productBlock.addToCartButton()) == null || a.updatePrice(t.discountedPrice, t.fullPrice), clearTimeout(this._updateAddToCartButtonPriceTimeoutHandle), this._updateAddToCartButtonPriceTimeoutHandle = setTimeout(
          () => {
            var s;
            return (s = this._productBlock.addToCartButton()) == null ? void 0 : s.updatePrice(t.discountedPrice, t.fullPrice);
          },
          2e3
        ), (o = this._productBlock.addToCartForm()) == null || o.toggleAcceleratedCheckoutButtons(
          this._shouldShowAcceleratedCheckoutButtons()
        ), this._isFirstVariantChange && (this._updateQuantityInputTimeoutHandle = setTimeout(() => {
          this._changeQuantityInput(), delete this._updateQuantityInputTimeoutHandle;
        }, 1e3), this._isFirstVariantChange = !1), this._dealBlockSettings.updateNativePrice) {
          clearTimeout(this._updateNativePriceTimeoutHandle);
          const s = this._dealBlockSettings.updateNativePriceType === "item" ? t.discountedPricePerItem : t.discountedPrice, l = this._dealBlockSettings.updateNativePriceType === "item" ? t.fullPricePerItem : t.fullPrice;
          this._productBlock.updatePrice(s, l), this._updateNativePriceTimeoutHandle = setTimeout(() => {
            this._productBlock.updatePrice(s, l);
          }, 1e3);
        }
        this._reconvertPrices();
      }
    });
  }
  _reconvertPrices() {
    var t, e, n, r;
    p("reconvertPrices");
    try {
      (t = window.bucksCC) != null && t.reConvert && window.bucksCC.reConvert(), (e = window.baCurr) != null && e.refreshConversion && window.baCurr.refreshConversion(), (n = window.DoublyGlobalCurrency) != null && n.convertAll && window.DoublyGlobalCurrency.convertAll(), (r = window.conversionBearAutoCurrencyConverter) != null && r.convertPricesOnPage && window.conversionBearAutoCurrencyConverter.convertPricesOnPage(), window.mlvedaload && window.mlvedaload();
    } catch (a) {
      console.error(a);
    }
  }
  _changeCurrentVariant(t) {
    const e = this._product.variants.find((a) => a.id == t);
    if (p("_changeCurrentVariant", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), this._currentVariantId == t || (this._currentVariantId = t, !e))
      return;
    const n = this._productBlock.variantPicker();
    if (!n)
      return;
    (this._globalConfig.featureFlags.remove_variant_change_delay ? !this._dealBlockElement.dataset.nativeVariantChangeInProgress : !0) && (clearTimeout(window.kachingBundlesCurrentVariantChangeInProgress), window.kachingBundlesCurrentVariantChangeInProgress = setTimeout(() => {
      delete window.kachingBundlesCurrentVariantChangeInProgress;
    }, 1e3));
    for (const [a, o] of e.options.entries()) {
      const s = this._product.options[a], l = s.name, c = s.optionValues.find(
        (f) => f.name === o
      ).id;
      n.select(
        a + 1,
        c,
        l,
        o,
        this._product.id,
        e.id
      );
    }
  }
  _listenForAmountDiscountExceedsPrice() {
    document.addEventListener(
      "kaching-bundles-amount-discount-exceeds-price",
      (t) => {
        var r;
        const { totalDiscount: e, fullOrderPrice: n } = t.detail;
        I("amount_discount_exceeds_price_v3", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          country: this._country,
          currency: (r = window.Shopify.currency) == null ? void 0 : r.active,
          totalDiscount: e,
          fullOrderPrice: n
        });
      },
      { once: !0 }
    );
  }
  /* Add to cart */
  _listenForAddToCartClick() {
    const t = this._productBlock.addToCartButton();
    if (!t)
      return;
    if (t.setValidation(() => {
      var a;
      return !this._dealBlockSettings.collectionBreaksEnabled || !((a = this._dealBlockSettings.collectionBreaks) != null && a.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.validateItemSelection().valid;
    }), this._globalConfig.featureFlags.intercept_cart_request) {
      const a = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
      t.onClick(() => {
        J.setFallbackDeal(a, this._product);
      });
    }
    const e = () => window.kachingBundlesDisableAddToCartHandling ? !1 : this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled() ? !0 : this._globalConfig.featureFlags.intercept_cart_request ? !1 : this._items.length > 1, n = async () => {
      var a;
      if (this._dealBlockSettings.skipCart) {
        await this._addAllItemsToCart(), window.kachingCartApi && (p("Kaching Cart update tiered promotions bar"), await window.kachingCartApi.updateTieredPromotionsBar()), window.location.href = Y("checkout");
        return;
      }
      if (this._isUpcartAppEnabled()) {
        try {
          window.upcartOpenCart && window.upcartOpenCart();
        } catch (o) {
          console.error("upcartOpenCart error", o);
        }
        await this._addAllItemsToCart(), window.upcartRefreshCart && window.upcartRefreshCart();
        return;
      }
      if (this._isOpusAppEnabled()) {
        try {
          window.opusOpen && window.opusOpen();
        } catch (o) {
          console.error("opusOpen error", o);
        }
        await this._addAllItemsToCart(), window.opusRefreshCart && window.opusRefreshCart();
        return;
      }
      if (this._isKrakenCartAppEnabled()) {
        try {
          (a = window.KrakenCart) != null && a.toggleCart && window.KrakenCart.toggleCart(!0);
        } catch (o) {
          console.error("KrakenCart error", o);
        }
        await this._addAllItemsToCart();
        return;
      }
      return this._addItemsExceptCurrentToCart();
    }, r = () => this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled();
    t.onClickIfConditionMet(
      e,
      n,
      r
    ), !this._globalConfig.featureFlags.intercept_cart_request && (this._setupUpcart(), this._setupOpus(), this._setupKrakenCart());
  }
  _setupUpcart() {
    window.upcartShouldSkipAddToCartInterceptor = !0;
    const t = window.upcartShouldSkipAddToCart;
    window.upcartShouldSkipAddToCart = (e) => typeof t == "function" && t(e) === !0 ? !0 : e.includes("kaching_bundles=true");
  }
  _setupOpus() {
    [
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) && (window.OpusNoATC = !0);
  }
  _setupKrakenCart() {
    window.krakenCartIsFormATCEnabled = !1;
  }
  _isUpcartAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || this._globalConfig.shopifyDomain === "qu1udi-ws.myshopify.com" ? !1 : !!E("#UpcartPopup") || !!window.upcartDocumentOrShadowRoot;
  }
  _isOpusAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || ![
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) ? !1 : window.opusActive || !1;
  }
  _isKrakenCartAppEnabled() {
    var t;
    return this._globalConfig.featureFlags.intercept_cart_request ? !1 : ((t = window.KrakenCart) == null ? void 0 : t.isActive) && window.KrakenCart.isActive() || !1;
  }
  async _addItemsExceptCurrentToCart() {
    var s;
    p("addItemsExceptCurrentToCart", this._items);
    const t = (s = this._productBlock.addToCartForm()) == null ? void 0 : s.currentVariantId();
    setTimeout(() => {
      t != this._currentVariantId && I("different_current_variant_v3", {
        form: t,
        object: this._currentVariantId
      });
    });
    const e = this._items.findIndex(
      (l) => this._isMainProductItem(l) && l.id == t
    ), n = this._items.filter(
      (l, c) => c !== e
    ), r = n.filter((l) => l.parent_id), a = n.filter((l) => !l.parent_id), o = [
      ...r.reverse(),
      ...a
    ].map(({ parent_id: l, ...c }) => c);
    v("Adding only extra items to cart", o), await this._makeAddToCartRequest({
      items: o,
      partial: !0
    });
  }
  async _addAllItemsToCart() {
    var e, n;
    p("addAllItemsToCart", this._items);
    let t = this._items;
    t.length === 0 && (t = [
      {
        id: (n = (e = this._productBlock.addToCartForm()) == null ? void 0 : e.currentVariantId()) != null ? n : this._currentVariantId,
        quantity: 1,
        properties: {}
      }
    ]), v("Adding all items to cart", t), await this._makeAddToCartRequest({ items: t });
  }
  _collectProperties() {
    const e = C(
      '[name^="properties"]'
    ).map((n) => [n.name.match(/properties\[(.*)\]/)[1], n.value]).filter(([n]) => n !== "__kaching_bundles");
    return Object.fromEntries(e);
  }
  _isMainProductItem(t) {
    const e = this._kachingBundlesProperty(t);
    return e ? e.main || !1 : !0;
  }
  _shouldShowAcceleratedCheckoutButtons() {
    var t;
    return this._items.length > 1 ? !1 : !this._dealBlockSettings.collectionBreaksEnabled || !((t = this._dealBlockSettings.collectionBreaks) != null && t.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.isItemSelectionValid();
  }
  _kachingBundlesProperty(t) {
    return t.properties.__kaching_bundles ? JSON.parse(
      t.properties.__kaching_bundles
    ) : null;
  }
  async _makeAddToCartRequest({
    items: t,
    partial: e = !1
  }) {
    const n = this._collectProperties(), r = t.map((s) => {
      var l;
      return !this._isMainProductItem(s) && !((l = this._kachingBundlesProperty(s)) != null && l.collectionBreaksProduct) ? s : {
        ...s,
        properties: { ...n, ...s.properties }
      };
    });
    setTimeout(() => this._logCollectionBreakProperties(n));
    const a = { kaching_bundles: "true" };
    e && (a.partial = "true");
    const o = {
      "Content-Type": "application/json"
    };
    e || (o["X-Kaching-Cart-Ignore"] = "1"), await fetch(Y("cart/add.js", a), {
      method: "POST",
      body: JSON.stringify({ items: r }),
      headers: o
    });
  }
  _logCollectionBreakProperties(t) {
    if (!this._dealBlockSettings.collectionBreaksEnabled)
      return;
    const e = Object.fromEntries(
      Object.entries(t).filter(
        ([n]) => !n.startsWith("__kaching_")
      )
    );
    Object.keys(e).length !== 0 && I("collection_break_properties", {
      properties: e
    });
  }
}
function nn(i, t, e) {
  i.currencyRate !== 1 && t.subscriptionsEnabled && e.sellingPlans.length > 0 && t.dealBars.some((n) => rn(n)) && I(
    "multicurrency_subscription_fixed_discount_v2",
    {
      dealBlockId: t.id,
      currencyRate: i.currencyRate
    },
    0.01
  );
}
function rn(i) {
  const t = (e) => e === "amount" || e === "specific";
  switch (i.dealBarType) {
    case void 0:
    case "quantity-break":
      return t(i.discountType);
    case "bundle":
      return i.bundleProducts.some(
        (e) => t(e.discountType)
      );
    case "bxgy":
      return t(i.buyDiscountType) || t(i.getDiscountType);
    case "sku":
      return !1;
  }
}
class an {
  constructor(t) {
    this._submitInProgress = !1, this._ignoreClick = !1, this._clickHandler = null, this._onClickCallback = null, this._validationCallback = null, this._horizonAnimationDisabled = !1, this.button = t;
  }
  onClick(t) {
    this._onClickCallback = t;
  }
  setValidation(t) {
    this._validationCallback = t;
  }
  onClickIfConditionMet(t, e, n) {
    this._clickHandler = {
      condition: t,
      callback: e,
      shouldPreventDefault: n
    }, this._registerClickHandler();
  }
  replaceButton(t) {
    v("New add to cart button", { button: t }), this.button = t, this._clickHandler && this._registerClickHandler();
  }
  _registerClickHandler() {
    if (!this._clickHandler)
      return;
    this._setupHorizonThemeHandling();
    const t = async (n) => {
      if (this._onClickCallback && this._onClickCallback(), this._validationCallback && !this._validationCallback()) {
        n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
        return;
      }
      const r = this._clickHandler.condition(), a = this._clickHandler.shouldPreventDefault();
      if (this._ignoreClick || v("Add to cart button clicked"), p("AddToCartButton#interceptClick", {
        conditionMet: r,
        preventDefault: a,
        submitInProgress: this._submitInProgress,
        ignoreClick: this._ignoreClick
      }), !!r) {
        if (this._submitInProgress) {
          this._submitInProgress = !1;
          return;
        }
        if (!this._ignoreClick) {
          if (this._submitInProgress = !0, this._ignoreClick = !0, this.button.disabled = !0, setTimeout(() => {
            this._ignoreClick = !1;
          }, 1e3), n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), await this._clickHandler.callback(), this.button.disabled = !1, a) {
            this._submitInProgress = !1;
            return;
          }
          await new Promise((o) => setTimeout(o, 200)), this.button.click();
        }
      }
    };
    this.button.addEventListener("click", t, !0);
  }
  updatePrice(t, e) {
    const n = this._findAllAddToCartPriceElements(this.button);
    if (n.length === 0)
      return;
    const r = n.find(
      (o) => this._isCompareAtPriceElement(o)
    ), a = n.find((o) => o !== r) || n[0];
    a.innerHTML = t.amount > 0 ? t.formatted : "", r && r !== a && (e.amount > t.amount && t.amount > 0 ? (r.innerHTML = e.formatted, r.style.display = "") : r.innerHTML = "");
  }
  _setupHorizonThemeHandling() {
    const t = this.button.closest("add-to-cart-component");
    t && this.button.addEventListener(
      "pointerdown",
      () => {
        this._validationCallback && !this._validationCallback() ? (t.setAttribute("data-add-to-cart-animation", "false"), this._horizonAnimationDisabled = !0) : this._horizonAnimationDisabled && (t.setAttribute("data-add-to-cart-animation", "true"), this._horizonAnimationDisabled = !1);
      },
      !0
    );
  }
  _isPriceNode(t) {
    var n;
    const e = (n = t.childNodes[0]) == null ? void 0 : n.nodeValue;
    return !!(e && e.match(/\d/) && !e.match(/\p{L}{4}/u) && !e.includes("%"));
  }
  _findAllAddToCartPriceElements(t) {
    const e = [];
    if (!t.childNodes.length)
      return e;
    if (this._isPriceNode(t))
      return e.push(t), e;
    for (const n of t.childNodes)
      e.push(...this._findAllAddToCartPriceElements(n));
    return e;
  }
  _isCompareAtPriceElement(t) {
    let e = t;
    for (; e && e !== this.button; ) {
      const n = e.tagName;
      if (n === "S" || n === "DEL" || n === "STRIKE" || /compare/i.test(e.className || "") || getComputedStyle(e).textDecorationLine.includes("line-through"))
        return !0;
      e = e.parentElement;
    }
    return !1;
  }
}
class sn {
  constructor(t, e, n, r) {
    this._acceleratedCheckoutButtonsEnabled = !0, this._currentItem = null, this._variantIdChangeCallback = null, this._sellingPlanChangeCallback = null, this._variantIdIntervalId = null, this._sellingPlanObserver = null, this._sellingPlanChangeHandler = null, p("AddToCartForm", {
      form: t,
      addQuantityInput: e,
      allowSellingPlanUpdate: n
    }), this.form = t, this._addQuantityInput = e, this._allowSellingPlanUpdate = n, this._abTestRunning = r, this._addAbTestSessionId();
  }
  _addAbTestSessionId() {
    if (!this._abTestRunning)
      return;
    const t = this._findOrCreateInput(
      "properties[__kaching_session_id]"
    );
    t.value = Q();
  }
  updateItem(t) {
    p("AddToCartForm#updateItem", [this.form, t]), this._currentItem = t, this._updateIdInput(t.id), this._updateQuantityInput(t.quantity), this._updateKachingBundlesPropertyInput(t.properties), this._updateSellingPlanInput(t.selling_plan);
  }
  currentVariantId() {
    const t = this._findVariantIdElement();
    if (t)
      return Number(t.value);
  }
  onVariantIdChange(t) {
    this._variantIdChangeCallback = t, this._registerVariantIdObserver();
  }
  _registerVariantIdObserver() {
    if (!this._variantIdChangeCallback)
      return;
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null);
    const t = this._variantIdChangeCallback, e = this._findVariantIdElement();
    if (e instanceof HTMLInputElement && st(e, "value", (n, r) => {
      n !== r && r && t(Number(r));
    }), e instanceof HTMLSelectElement) {
      let n;
      this._variantIdIntervalId = window.setInterval(() => {
        const r = e.value;
        n !== r && r && (n = r, t(Number(r)));
      }, 100);
    }
  }
  onSellingPlanChange(t) {
    this._sellingPlanChangeCallback = t, this._registerSellingPlanObserver();
  }
  _registerSellingPlanObserver() {
    if (this._allowSellingPlanUpdate || !this._sellingPlanChangeCallback)
      return;
    this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null);
    const t = this._sellingPlanChangeCallback;
    let e;
    const n = (o) => {
      e !== o && (e = o, t(o ? Number(o) : void 0));
    };
    let r = null;
    const a = () => {
      var l;
      const o = this._findInput("selling_plan");
      o !== r && (r = o, o && st(o, "value", (c, f) => {
        n(f);
      })), this._sellingPlanChangeHandler || (this._sellingPlanChangeHandler = (c) => {
        const f = c.target;
        f.name === "selling_plan" && n(f.value);
      }, this.form.addEventListener("change", this._sellingPlanChangeHandler));
      const s = E(
        'input[name="selling_plan"]:checked',
        this.form
      );
      n((l = s == null ? void 0 : s.value) != null ? l : o == null ? void 0 : o.value);
    };
    a(), this._sellingPlanObserver = new MutationObserver((o) => {
      o.some((s) => s.type === "childList") && a();
    }), this._sellingPlanObserver.observe(this.form, {
      childList: !0,
      subtree: !0
    });
  }
  toggleAcceleratedCheckoutButtons(t) {
    const e = "kaching-bundles-form--different-variants-selected";
    this._acceleratedCheckoutButtonsEnabled = t, t ? this.form.classList.remove(e) : this.form.classList.add(e);
  }
  _cleanupObservers() {
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null), this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null), this._sellingPlanChangeHandler && (this.form.removeEventListener("change", this._sellingPlanChangeHandler), this._sellingPlanChangeHandler = null);
  }
  replaceForm(t) {
    v("New add to cart form", { form: t }), this._cleanupObservers(), this.form = t, this._addAbTestSessionId(), this.toggleAcceleratedCheckoutButtons(
      this._acceleratedCheckoutButtonsEnabled
    ), this._currentItem && this.updateItem(this._currentItem), this._registerVariantIdObserver(), this._registerSellingPlanObserver();
  }
  _updateIdInput(t) {
    const e = this._findVariantIdElement() || this._createInput("id"), n = String(t);
    this._ensureSelectOptionExists(e, n), e.disabled = !1, e.value = n;
  }
  _updateQuantityInput(t) {
    p("AddToCartForm#_updateQuantityInput", t);
    let e = null;
    this._addQuantityInput ? e = this._findOrCreateInput("quantity") : e = this._findInput("quantity"), e && (e.disabled = !1, e.value = String(t));
  }
  _updateKachingBundlesPropertyInput(t) {
    var e, n;
    if (t.__kaching_bundles) {
      const r = this._findOrCreateInput(
        "properties[__kaching_bundles]"
      );
      r.disabled = !1, r.value = this._encodeBundlesProperty(
        t.__kaching_bundles
      );
      const a = (n = (e = window.Shopify.theme) == null ? void 0 : e.schema_name) == null ? void 0 : n.toLowerCase();
      a != null && a.includes("pipeline") && (r.dataset.morphSkip = "true");
    } else {
      const r = this._findInput("properties[__kaching_bundles]");
      r == null || r.remove();
    }
  }
  _encodeBundlesProperty(t) {
    var n, r;
    const e = (r = (n = window.Shopify.theme) == null ? void 0 : n.schema_name) == null ? void 0 : r.toLowerCase();
    return e != null && e.includes("shrine pro") || e != null && e.includes("ascendify") ? btoa(t) : t;
  }
  _updateSellingPlanInput(t) {
    if (this._allowSellingPlanUpdate)
      if (t) {
        const e = this._findOrCreateInput("selling_plan");
        e.disabled = !1, e.value = String(t);
      } else {
        const e = this._findInput("selling_plan");
        e == null || e.remove();
      }
  }
  _findOrCreateInput(t) {
    return this._findInput(t) || this._createInput(t);
  }
  _ensureSelectOptionExists(t, e) {
    if (!(t instanceof HTMLSelectElement)) return;
    if (!Array.from(t.options).some(
      (r) => r.value === e
    )) {
      const r = X("option");
      r.value = e, r.text = "", t.appendChild(r);
    }
  }
  _findInput(t) {
    return E(
      `[name="${t}"]`,
      this.form
    );
  }
  _findVariantIdElement() {
    return Array.from(this.form.elements).find(
      (t) => (t instanceof HTMLInputElement || t instanceof HTMLSelectElement) && t.name === "id"
    ) || null;
  }
  _createInput(t) {
    const e = X("input");
    return e.type = "hidden", e.name = t, this.form.prepend(e), e;
  }
}
const Lt = [
  'form[action*="/cart/add"]',
  "form[data-instant-form-product-url]",
  // Instant page builder
  'form[action$="/add"]'
], ot = [
  '[data-pf-type^="ProductATC"]',
  // PageFly sometimes uses ProductATC2
  "button.gp-button-atc",
  // Gempages
  "gp-product-button button",
  // Gempages v7
  "x-buy-button",
  // Minimog
  "button.button--addToCart",
  // Booster
  'button[type="submit"]',
  'input[type="submit"]'
], Gt = [
  // Gempages
  [
    '[data-icon="gpicon-product-cartbutton"]',
    '[data-icon="gpicon-product-quantity"]'
  ],
  // Gempages v7
  ["gp-product-button", "gp-product-quantity"],
  // Dawn (and other free themes)
  ["product-form", ".product-form__quantity"],
  // Horizon
  [".buy-buttons-block", ".quantity-selector-wrapper"],
  // PageFly app
  ['[data-pf-type^="ProductATC"]', '[data-pf-type="ProductQuantity"]'],
  // PageFly sometimes uses ProductATC2
  // Debut
  [".product-form__item--submit", 'label[for="Quantity-product-template"]'],
  // Debutify
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Impact
  [".product-info__buy-buttons", ".product-info__quantity-selector"],
  // Prestige
  [
    ".ProductForm__BuyButtons, .ProductForm__AddToCart",
    ".ProductForm__QuantitySelector"
  ],
  // Prestige (v7)
  ['[data-block-type="buy-buttons"]', '[data-block-type="quantity-selector"]'],
  // Envy
  [".product-page--submit-action", ".quantity-controls__outer"],
  // Warehouse
  [".product-form__payment-container", ".product-form__info-item--quantity"],
  // Atlantic
  ["[data-product-submit]", ".product-quantity-input"],
  // Empire
  [".product-form--atc", ".product-form--atc-qty"],
  // Turbo
  [".purchase-details", ".purchase-details__quantity"],
  // Expanse
  [".product-single__form .payment-buttons", ".product__quantity"],
  // Minimal
  [".product-form--wide", ".product-single__quantity"],
  // Brooklyn
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Blockshop
  [".product-form--button-container", null],
  // Venture
  [".product-form__item--submit", ".product-form__item--quantity"],
  // Showcase
  [".product-detail__form__action", null],
  // Palo Alto
  [".product__submit__buttons", null],
  // Symmetry
  [".buy-buttons-row", ".quantity-wrapper"],
  // Kalles, Unsen
  [".t4s-product-form__buttons", "[data-quantity-wrapper]"],
  // Alchemy
  [".qty-wrapper--with-payment-button", ".product-qty"],
  // Baseline
  [".shopify-product-form", ".product-quantity-block"],
  // Shapes
  [".shopify-product-form", ".product-block-quantity-selector"],
  // Colors
  [".type_buy_buttons", ".type_quantity_selector"],
  // Motion
  [".product-single__form .add-to-cart", ".product__quantity"],
  // Avenue
  [".purchase-section", ".quantity.form"],
  // Ella
  [".product-form__buttons", ".quantity_selector"],
  // Booster
  [".product__atc", ".quantity--input"],
  // Focal
  [".product-form__payment-container", ".quantity-selector"],
  // EComposer
  [".ecom-product-single__add-to-cart", ".ecom-product-single__quantity"],
  // Solodrop
  [".product-form__submit", ".product__quantity"],
  // Enterprise
  [".product-info__add-to-cart", "quantity-input"],
  // Yuva
  [".yv-checkout-btn", ".yv-product-quantity"],
  // Reformation
  [".product-add-to-cart-container", "quantity-selector"],
  // Pipeline
  [".product__block__buttons", ".product__block__quantity"],
  // Minimog
  ["x-buy-button", "x-quantity-input"],
  // Xtra
  [".submit:has(.overlay-buy_button)", ".input-amount"],
  // Instant page builder
  [
    '[data-instant-action-type="redirect-to-cart"]',
    '[data-instant-type="container"]:has(> .instant-quantity-input)'
  ]
], on = (i, t, e, n) => {
  if (p("_updateNativePrice", {
    discountedPrice: t,
    fullPrice: e
  }), e.amount > 0) {
    let r = C(
      "[data-kaching-price-compare]"
    );
    if (n.customSelectors.priceCompare && (r = C(
      n.customSelectors.priceCompare
    )), r.length > 0)
      for (const a of r)
        e.amount > t.amount ? (a.innerHTML = e.formatted, a.style.display = "") : a.style.display = "none";
    else {
      const a = [
        ".price--large .price__sale .price-item--regular",
        // Dawn, Shrine
        ".price--medium .price__sale .price-item--regular",
        // Be Yours
        ".lumin-price .price__sale .price-item--regular",
        // Architect, Beauty
        ".product-page-price .price__sale .price-item--regular",
        // Craft, Atlas
        ".f-price--large .f-price__sale .f-price-item--regular",
        // Sleek
        'gp-product-price div[type="compare"]',
        // Gempages
        "gp-product-price .gp-product-compare-price",
        // Gempages
        "product-price .compare-at-price",
        // Horizon
        ".pp-product-price .pp-price-item--sale",
        // Page Pilot
        ".product__price-and-badge .product__price--compare",
        // Palo Alto
        ".product-block--price span[data-compare-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--regular",
        // Minimog
        ".product-info__price compare-at-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] compare-at-price',
        // Prestige
        ".product-form__info-item .price--compare",
        // Warehouse
        '[data-product-type="compare_at_price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale del",
        // Marble
        ".product__price-wrapper .price__container .product__price span:not(.visually-hidden)"
        // Marble
      ].flatMap((s) => C(s)), o = V(
        i,
        a
      );
      if (o) {
        o.innerHTML = e.formatted;
        const s = o.closest("gp-product-price");
        s instanceof HTMLElement && (s.dataset.hidden = e.amount > t.amount ? "false" : "true");
      }
    }
  }
  if (t.amount > 0) {
    let r = C("[data-kaching-price]");
    if (n.customSelectors.price && (r = C(
      n.customSelectors.price
    )), r.length > 0)
      for (const a of r)
        a.innerHTML = t.formatted;
    else {
      const a = [
        ".price--large .price__regular .price-item--regular",
        // Dawn, Shrine
        ".price--large .price__sale .price-item--sale",
        // Dawn, Shrine
        ".price--medium .price__regular .price-item--regular",
        // Be Yours
        ".price--medium .price__sale .price-item--sale",
        // Be Yours
        ".lumin-price .price__regular .price-item--regular",
        // Architect, Beauty
        ".lumin-price .price__sale .price-item--sale",
        // Architect, Beauty
        ".product-page-price .price__regular .price-item--regular",
        // Craft, Atlas
        ".product-page-price .price__sale .price-item--sale",
        // Craft, Atlas
        ".f-price--large .f-price__regular .f-price-item--regular",
        // Sleek
        ".f-price--large .f-price__sale .f-price-item--sale",
        // Sleek
        'gp-product-price div[type="regular"]',
        // Gempages
        "gp-product-price .gp-price:not(.gp-product-compare-price)",
        // Gempages
        "product-price .price",
        // Horizon
        ".pp-product-price .pp-price-item--regular",
        // Page Pilot
        ".product__price-and-badge .product__price--regular",
        // Palo Alto
        ".product-block--price span[data-product-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--sale",
        // Minimog
        ".product-info__price sale-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] sale-price',
        // Prestige
        ".product-form__info-item .price:not(.price--compare)",
        // Warehouse
        '[data-product-type="price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale ins"
        // Marble
      ].flatMap((s) => C(s)), o = V(i, a);
      o && (o.innerHTML = t.formatted);
    }
  }
  if (t.amount > 0 && e.amount > 0) {
    const r = Math.round(
      (e.amount - t.amount) / e.amount * 100
    ), a = C("[data-kaching-price-badge]");
    if (a.length > 0)
      for (const o of a)
        r > 0 ? (o.innerHTML = o.innerHTML.replace(
          /\d+%/,
          `${r}%`
        ), o.style.display = "") : o.style.display = "none";
    else {
      const o = [
        ".price--large .price__badge-sale",
        // Dawn, Shrine
        ".lumin-price .price__badge-sale",
        // Architect
        ".product-page-price .price__badge-sale",
        // Craft, Atlas
        "gp-product-tag div[data-gp-text]",
        // Gempages
        ".product__price-and-badge span[data-price-off-amount]",
        // Palo Alto
        ".product-block--price span[data-save-price]",
        // Impulse
        ".product-info__price on-sale-badge"
        // Impact
      ].flatMap((l) => C(l)), s = V(i, o);
      s && (/\d/.test(s.innerHTML) && !s.innerHTML.includes("%") ? s.style.display = "none" : s.innerHTML = s.innerHTML.replace(/\d+%/, `${r}%`));
    }
  }
};
class x {
  static find(t, e) {
    let n = t.parentElement;
    for (; n; ) {
      if (e) {
        const o = C(
          e,
          n
        );
        if (o.length > 0)
          return new x(o);
      }
      const r = E(
        [
          "variant-selects",
          "variant-radios",
          "variant-picker",
          "product-variants",
          "gp-product-variants",
          ".gf_variants-wrapper",
          '[data-pf-type="ProductVariantSwatches"]',
          ".product-selectors",
          ".product-block-variant-picker",
          "dm-variant-selects",
          "simple-variant-picker"
        ].join(", "),
        n
      );
      if (r) return new x([r]);
      let a = C(
        [
          ".selector-wrapper",
          ".radio-wrapper",
          ".variant-wrapper",
          "div[data-product-option]",
          ".pp-variant-picker"
        ].join(", "),
        n
      );
      if (window.Shopify.shop && ["28212b.myshopify.com", "9bd9ad.myshopify.com"].includes(
        window.Shopify.shop
      ) && (a = C(
        ".selector-wrapper, .radio-wrapper, .variant-wrapper, .select-wrapper, div[data-product-option]",
        n
      )), a.length > 0) {
        const o = a.filter(
          (s) => !a.some(
            (l) => l !== s && l.contains(s)
          )
        );
        return new x(o);
      }
      n = n.parentElement;
    }
    return null;
  }
  constructor(t) {
    this._elements = t;
  }
  elements() {
    return this._elements;
  }
  hide() {
    for (const t of this._elements)
      t.style.display = "none", t.parentElement.classList.add(
        "kaching-bundles--variant-selects-hidden"
      );
  }
  select(t, e, n, r, a, o) {
    p("VariantPicker#select", [
      t,
      e,
      n,
      r
    ]), this._clickOptionWrapper(n, r) || this._clickRadioInput(
      t,
      e,
      n,
      r,
      a
    ) || this._setSelectValue(t, n, r) || this._setSelectVariantId(o) || this._clickButton(n, r);
  }
  // GemPages v7
  _clickOptionWrapper(t, e) {
    const r = this._elements.map((a) => C(".option-value-wrapper", a)).flat().find(
      (a) => a.getAttribute("option-data") === t && a.getAttribute("option-value") === e
    );
    return r ? (p("VariantPicker#_clickOptionWrapper", r), r.click(), !0) : !1;
  }
  _clickRadioInput(t, e, n, r, a) {
    const o = this._elements.map((c) => [...c.querySelectorAll("input")]).flat();
    let s = o.filter(
      (c) => [
        n,
        `${n}-${t}`,
        `options[${n}]`,
        `option${t}`,
        `option-${a}-${t - 1}`,
        `${a}-options-${n}`
      ].includes(c.name.trim())
    );
    s.length || (s = o.filter(
      (c) => c.dataset.optionPosition ? Number(c.dataset.optionPosition) === t : !1
    )), s.length || (s = o.filter((c) => c.type === "radio"));
    const l = s.find(
      (c) => c.value == r || c.value === String(e)
    );
    return l ? (p("VariantPicker#_clickRadioInput", l), l.click(), !0) : !1;
  }
  _setSelectValue(t, e, n) {
    const a = this._elements.map((s) => [...s.querySelectorAll("select")]).flat().find((s) => !!([`options[${e}]`, `option${t}`].includes(s.name) || s.dataset.index === `option${t}` || s.dataset.optionName === e || [
      `SingleOptionSelector-product-${t - 1}`,
      // PageFly
      `p-variant-dropdown-${t}`,
      // Gempages v6
      `option-${e.toLowerCase().replace(/ /g, "-")}`
    ].includes(s.id)));
    return !a || ![...a.options].find(
      (s) => s.value == n
    ) ? !1 : a.value === n ? (p("VariantPicker#_setSelectValue - already set", {
      variantSelect: a,
      optionValue: n
    }), !0) : (p("VariantPicker#_setSelectValue", { variantSelect: a, optionValue: n }), a.value = n, a.dispatchEvent(new Event("change", { bubbles: !0 })), !0);
  }
  _setSelectVariantId(t) {
    const n = this._elements.map((r) => [...r.querySelectorAll("select")]).flat().find(
      (r) => [...r.options].find((a) => Number(a.value) === t)
    );
    return n ? n.value === String(t) ? (p("VariantPicker#_setSelectVariantId - already set", {
      variantSelect: n,
      variantId: t
    }), !0) : (p("VariantPicker#_setSelectVariantId", { variantSelect: n, variantId: t }), n.value = String(t), n.dispatchEvent(new Event("change", { bubbles: !0 })), !0) : !1;
  }
  _clickButton(t, e) {
    const n = this._elements.find(
      (a) => a.getAttribute("data-product-option") === t
    );
    if (!n) return !1;
    const r = C("[data-value]", n).find(
      (a) => a.getAttribute("data-value") === e
    );
    return r ? (p("VariantPicker#_clickButton", r), r.click(), !0) : !1;
  }
}
class ln {
  constructor(t, e, n) {
    this._variantPicker = null, this._quantityInput = null, this._hiddenQuantityElement = null, this._onQuantityChange = null, this._addToCartForm = null, this._addToCartButton = null, this._placeholder = t, this._globalConfig = e, this._dealBlockSettings = n;
  }
  initialize() {
    this._findVariantPicker(), this._observeVariantPickerRemoval(), this._findQuantityInput(), this._listenForQuantityInputChange(), this._observeQuantityInputRemoval(), this._findAddToCartForm(), this._observeAddToCartFormRemoval(), this._findAddToCartButton(), this._moveAddToCartButtonOutOfQuantityElement(), this._observeAddToCartButtonRemoval();
  }
  variantPicker() {
    return this._variantPicker;
  }
  quantityInput() {
    return this._quantityInput;
  }
  addToCartForm() {
    return this._addToCartForm;
  }
  addToCartButton() {
    return this._addToCartButton;
  }
  onQuantityInputChange(t) {
    this._onQuantityChange = t;
  }
  updatePrice(t, e) {
    on(
      this._placeholder,
      t,
      e,
      this._globalConfig
    );
  }
  _findVariantPicker() {
    const t = x.find(
      this._placeholder,
      this._globalConfig.customSelectors.variantPicker
    );
    t && (this._dealBlockSettings.hideVariantPicker && t.hide(), this._variantPicker = t);
  }
  _observeVariantPickerRemoval() {
    this._variantPicker && L(this._variantPicker.elements()[0], () => {
      var t, e;
      this._findVariantPicker(), v("New variant picker", {
        picker: (t = this._variantPicker) == null ? void 0 : t.elements()
      }), I(
        "variant_picker_removed",
        {
          recreated: !!this._variantPicker,
          theme: (e = window.Shopify.theme) == null ? void 0 : e.schema_name
        },
        0.01
      ), this._observeVariantPickerRemoval();
    });
  }
  _findQuantityInput() {
    const t = this._findQuantityElements(), n = V(
      this._placeholder,
      t,
      6
    );
    if (!n)
      return;
    this._globalConfig.keepQuantityInput || (this._hiddenQuantityElement = n, n.style.display = "none");
    const r = n.matches("input") ? n : n.querySelector("input");
    this._quantityInput = r;
  }
  _listenForQuantityInputChange() {
    this._quantityInput && (O(this._quantityInput, "change", () => {
      this._onQuantityChange && this._onQuantityChange(Number(this._quantityInput.value));
    }), st(this._quantityInput, "value", (t, e) => {
      t !== e && this._onQuantityChange && this._onQuantityChange(Number(e));
    }));
  }
  _observeQuantityInputRemoval() {
    this._quantityInput && L(this._quantityInput, () => {
      var t;
      this._findQuantityInput(), this._listenForQuantityInputChange(), this._moveAddToCartButtonOutOfQuantityElement(), v("New quantity input", {
        input: this._quantityInput
      }), I(
        "quantity_input_removed",
        {
          recreated: !!this._quantityInput,
          theme: (t = window.Shopify.theme) == null ? void 0 : t.schema_name
        },
        0.01
      ), this._observeQuantityInputRemoval();
    });
  }
  _findQuantityElements() {
    const t = this._globalConfig.customSelectors.quantity;
    if (t) {
      const e = C(t);
      if (e.length)
        return e;
    }
    for (const [e, n] of Gt) {
      if (!n)
        continue;
      const r = C(n);
      if (r.length)
        return r;
    }
    return C(".product-form__quantity");
  }
  _findAddToCartForm() {
    const t = this._findCartForm();
    if (!t)
      return;
    const e = !!this._dealBlockSettings.subscriptionsEnabled || this._dealBlockSettings.dealBars.some(
      (n) => n.sellingPlanEnabled
    );
    this._addToCartForm = new sn(
      t,
      !this._quantityInput,
      e,
      !!this._dealBlockSettings.abTestVariantNumber
    );
  }
  _findCartForm() {
    let t = this._placeholder.parentElement;
    for (; t; ) {
      for (const e of Lt)
        for (const n of [
          this._globalConfig.customSelectors.addToCartButton,
          ...ot,
          "button"
        ]) {
          if (!n)
            continue;
          const r = E(
            `${e} ${n}`,
            t
          );
          if (r)
            return r.closest(e);
        }
      t = t.parentElement;
    }
    return null;
  }
  _observeAddToCartFormRemoval() {
    var e;
    const t = (e = this._addToCartForm) == null ? void 0 : e.form;
    window.Shopify.designMode || !t || L(t, () => {
      var r, a;
      const n = this._findCartForm();
      n && ((r = this._addToCartForm) == null || r.replaceForm(n), I(
        "cart_form_removed",
        {
          theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
        },
        0.01
      ), this._observeAddToCartFormRemoval());
    });
  }
  _findAddToCartButton() {
    const t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
    if (!t) {
      this._warnAboutMissingAddToCartButton(), this._addToCartButton = null;
      return;
    }
    this._addToCartButton = new an(t);
  }
  _moveAddToCartButtonOutOfQuantityElement() {
    !this._hiddenQuantityElement || !this._addToCartButton || this._hiddenQuantityElement.contains(this._addToCartButton.button) && this._hiddenQuantityElement.after(this._addToCartButton.button);
  }
  _findAddToCartButtonElement() {
    var r;
    const t = (r = this.addToCartForm()) == null ? void 0 : r.form;
    if (!t)
      return null;
    if (this._globalConfig.customSelectors.addToCartButton) {
      const a = E(
        this._globalConfig.customSelectors.addToCartButton,
        t
      );
      if (a)
        return a;
    }
    const e = [];
    for (const a of ot) {
      const o = C(a, t);
      e.push(...o);
    }
    const n = V(
      this._placeholder,
      e
    );
    return n || t.querySelector("button");
  }
  _findFormlessAddToCartButtonElement() {
    if (this._addToCartForm || this._globalConfig.featureFlags.intercept_cart_request !== !0 || !this._globalConfig.customSelectors.addToCartButton)
      return null;
    const t = this._globalConfig.customSelectors.addToCartButton;
    if (!t)
      return null;
    const e = C(t);
    return e.length === 0 ? null : V(
      this._placeholder,
      e,
      3
    );
  }
  _observeAddToCartButtonRemoval() {
    this._addToCartButton && L(this._addToCartButton.button, () => {
      var e, n;
      if ((e = this._addToCartButton) != null && e.button.isConnected) {
        this._observeAddToCartButtonRemoval();
        return;
      }
      let t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
      t ? (this._addToCartButton.replaceButton(t), this._moveAddToCartButtonOutOfQuantityElement()) : this._addToCartButton = null, I(
        "add_to_cart_button_removed",
        {
          recreated: !!t,
          theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
        },
        0.01
      ), this._observeAddToCartButtonRemoval();
    });
  }
  _warnAboutMissingAddToCartButton() {
    new URLSearchParams(window.location.search).get("source") !== "visualPreviewInitialLoad" && console.log(
      "%c[Kaching Bundles] Add to cart button not found. Please add a selector to the settings page or contact support.",
      "background: #f8d7da; color: #721c24; padding: 8px; border-left: 4px solid #f5c6cb;"
    );
  }
}
const cn = (i, t, e, n, r) => {
  if (!e.stickyAtcEnabled || t.offsetParent === null || document.querySelector(".kaching-bundles-sticky-atc-wrapper"))
    return;
  const a = document.createElement("div");
  a.classList.add("kaching-bundles-sticky-atc-wrapper"), document.body.appendChild(a);
  const o = document.createElement("div");
  o.classList.add("kaching-bundles-sticky-atc-spacer"), a.appendChild(o);
  const s = document.createElement("kaching-bundles-sticky-atc");
  s.setAttribute(
    "sticky-atc",
    JSON.stringify(e.stickyAtc)
  ), s.setAttribute("config", JSON.stringify(i)), s.setAttribute("translations", JSON.stringify(n)), s.setAttribute("product", JSON.stringify(r)), s.setAttribute("deal-block", JSON.stringify(e)), a.appendChild(s), s.addEventListener(
    "kaching-bundles-sticky-atc-clicked",
    () => {
      const g = t.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: g,
        behavior: "smooth"
      });
    }
  );
  let l = !1;
  const c = () => {
    const y = t.getBoundingClientRect().bottom < 0;
    y !== l && (l = y, y ? (s.style.display = "block", requestAnimationFrame(() => {
      l && s.classList.add("kaching-bundles-sticky-atc--visible");
    })) : s.classList.contains("kaching-bundles-sticky-atc--visible") && (s.classList.remove("kaching-bundles-sticky-atc--visible"), s.addEventListener(
      "transitionend",
      () => {
        l || (s.style.display = "");
      },
      { once: !0 }
    )));
  };
  requestAnimationFrame(c), window.addEventListener("scroll", c, { passive: !0 }), new ResizeObserver(() => {
    const y = s.offsetHeight;
    o.style.height = `${y}px`;
  }).observe(s);
};
class Pt {
  constructor(t) {
    this._globalConfig = t, setTimeout(() => {
      const e = document.querySelector(
        'link[href*="kaching-bundles.css"]'
      );
      e && L(e, () => {
        var n;
        I(
          "css_removed",
          {
            theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
          },
          0.01
        );
      });
    }, 100);
  }
  initialize() {
    this._setupTranslations();
    const t = C(
      "kaching-bundle, kaching-bundle-deals"
    );
    this._addProductIdForPlaceholders(t), t.length === 0 && this._addPlaceholders(), this._initializePlaceholders(), this._globalConfig.abTestsRunning && Ae(), this._setupPlaceholderObserver();
  }
  _setupTranslations() {
    const t = z("script#kaching-bundles-translations") || [], e = t.find(
      (n) => n.locale === this._globalConfig.locale
    );
    this._translations = e == null ? void 0 : e.translations, Ve(t);
  }
  _addProductIdForPlaceholders(t) {
    const e = z("script.kaching-bundles-product[data-main]");
    if (e)
      for (const n of t)
        n.getAttribute("product-id") || n.setAttribute("product-id", e.id);
  }
  _addPlaceholders() {
    if (!E("script.kaching-bundles-deal-block-settings"))
      return;
    const t = this._findPosition();
    if (!t)
      return;
    const e = z("script.kaching-bundles-product[data-main]"), n = e && e.id || this._globalConfig.productId, r = X("kaching-bundle");
    r.setAttribute("product-id", n), t.parentElement.insertBefore(r, t);
  }
  async _initializePlaceholders() {
    const t = [
      // kaching-bundle-deals is a legacy tag
      ...C("kaching-bundle, kaching-bundle-deals")
    ].filter((s) => s.getAttribute("product-id"));
    if (p("_initializePlaceholders", t), t.length === 0) {
      window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
      return;
    }
    if (t.filter(
      (s) => !M(s).initialized
    ).length === 0)
      return;
    const n = await this._fetchPlaceholdersData(t);
    p("placeholdersData", n);
    const r = Array.from(n.values()).map(({ dealBlock: s }) => s).filter((s) => s != null), a = Array.from(n.values()).map(({ product: s }) => s).filter((s) => s != null);
    await K(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      r
    );
    const o = Q();
    for (const s of t) {
      const { product: l, dealBlock: c } = n.get(s);
      if (!l || !c) {
        M(s).initialized = "skipped";
        continue;
      }
      await this._initializePlaceholder(
        s,
        l,
        c,
        o
      );
    }
    window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
  }
  async _initializePlaceholder(t, e, n, r) {
    var d, _;
    const a = e.id;
    this._globalConfig.webPixel ? (p("Tracking view with web pixel", window.Shopify.analytics), Bt(() => {
      window.Shopify.analytics.publish("kaching_bundle_viewed", {
        product_id: a,
        deal_block_id: n.id,
        ab_test_variant_id: n.abTestVariantId,
        session_id: r
      });
    })) : (p("Tracking view without web pixel (legacy)"), setTimeout(() => {
      zt(
        this._globalConfig.shopifyDomain,
        n.id,
        a,
        n.abTestVariantId,
        r
      );
    }, 2e3));
    const o = {
      ...this._globalConfig.defaultTranslations,
      ...(d = this._translations) == null ? void 0 : d.system
    }, s = (_ = this._translations) == null ? void 0 : _.dealBlocks[n.id], l = { ...o, ...s }, c = C(
      "script.kaching-bundles-product:not([data-main])"
    ).map((u) => JSON.parse(u.textContent));
    await import("./kaching-bundles-block.js");
    const f = { ...this._globalConfig };
    f.currencyRate = un(
      this._globalConfig.currencyRate,
      n.currency
    );
    try {
      nn(f, n, e);
    } catch {
    }
    n.dealBars.some(
      (u) => u.dealBarType === "quantity-break" && u.quantitySelector
    ) && (f.keepQuantityInput = !1);
    const y = new ln(t, f, n);
    y.initialize();
    const g = X(
      "kaching-bundles-block"
    );
    for (g.setAttribute("data-instant-styles", "none"), new en(
      g,
      y,
      f,
      l,
      n,
      e,
      c
    ); t.firstChild; )
      t.removeChild(t.firstChild);
    t.appendChild(g), M(t).initialized = "true", dn(g), cn(
      this._globalConfig,
      g,
      n,
      l,
      e
    );
  }
  _setupPlaceholderObserver() {
    if (window.Shopify.designMode)
      return;
    new MutationObserver((e) => {
      var r;
      e.some(
        (a) => Array.from(a.addedNodes).some((o) => {
          if (!(o instanceof HTMLElement)) return !1;
          const s = (l) => l.tagName === "KACHING-BUNDLE" && !M(l).initialized;
          return s(o) || Array.from(o.querySelectorAll("kaching-bundle")).some(
            (l) => s(l)
          );
        })
      ) && (this._globalConfig.featureFlags.reinitialize_morphed_placeholders ? (v("Initializing new kaching-bundle placeholder"), this._initializePlaceholders()) : document.querySelector(
        "#replo-fullpage-element, #replo-element-styles"
      ) || I(
        "kaching_bundle_added_v8",
        {
          theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
        },
        0.01
      ));
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
  async _fetchPlaceholdersData(t) {
    var k, S;
    const e = t.map(
      (b) => Number(b.getAttribute("product-id"))
    ), n = this._globalConfig.locale === this._globalConfig.liquidLocale ? C("script.kaching-bundles-product[data-main]") : [], r = new Map(
      n.map((b) => {
        const A = JSON.parse(b.textContent);
        return A.variants.length === 250 ? null : [A.id, A];
      }).filter((b) => b !== null)
    ), a = e.filter(
      (b) => !r.has(b)
    ), o = C(
      "script.kaching-bundles-deal-block-settings"
    ), s = /* @__PURE__ */ new Map();
    for (const b of e) {
      const A = o.filter(
        (D) => Number(M(D).productId) === b
      );
      A.length && s.set(
        b,
        A.map(
          (D) => D.textContent ? JSON.parse(D.textContent) : null
        )
      );
    }
    const l = e.filter(
      (b) => !s.has(b)
    ), c = this._globalConfig.storefrontAccessToken ? new N(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ) : null, f = c && a.length > 0 ? U(c, {
      country: this._globalConfig.country,
      language: this._globalConfig.locale.split("-")[0].toUpperCase(),
      productIds: a,
      includeSellingPlans: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_selling_plans"
      ),
      includeAvailableQuantity: this._globalConfig.accessScopes.includes(
        "unauthenticated_read_product_inventory"
      ),
      useExternalMetafieldNamespace: !1
    }) : [], y = c && l.length > 0 ? Dt(c, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: this._globalConfig.featureFlags.storefront_metaobjects
    }) : [], [g, d] = await Promise.all([
      f,
      y
    ]), _ = new Map(
      a.map((b) => [
        b,
        g.find((A) => A.id == b)
      ])
    ), u = new Map([...r, ..._]), m = Q(), h = /* @__PURE__ */ new Map();
    for (const b of t) {
      const A = Number(b.getAttribute("product-id")), D = u.get(A);
      if (!D)
        continue;
      const ut = ((k = s.get(A)) == null ? void 0 : k.filter((w) => w)) || d;
      ut.sort((w, q) => {
        const dt = !!w.marketId, Rt = !!q.marketId;
        return dt === Rt ? 0 : dt ? -1 : 1;
      });
      let T = le(ut, D);
      p("applicableDealBlocks", T), T = T.filter((w) => w.marketId ? w.marketId === this._globalConfig.marketId : !0), T = T.filter((w) => {
        if (!w.abTestVariantId)
          return !0;
        const q = Ft({
          kachingSessionId: m,
          abTestVariantsCount: w.abTestVariantsCount,
          abTestTrafficAllocation: w.abTestTrafficAllocation
        });
        return w.abTestVariantNumber === q;
      }), this._globalConfig.b2bCustomer && (T = T.filter(
        (w) => !w.excludeB2bCustomers
      )), this._globalConfig.requireCustomerLogin && !this._globalConfig.isLoggedIn && (T = []);
      const H = (S = b.getAttribute("manual-deal-block-id")) == null ? void 0 : S.trim();
      if (H) {
        const w = T.findIndex(
          (q) => q.id === H || q.nanoId === H
        );
        if (v("Manual deal override", {
          deal: T[w],
          manualDealBlockId: H,
          manualDealBlockIndex: w
        }), w > 0) {
          const [q] = T.splice(
            w,
            1
          );
          T.unshift(q);
        }
      }
      if (!T.length) {
        h.set(b, {
          product: D,
          dealBlock: null
        });
        continue;
      }
      h.set(b, {
        product: D,
        dealBlock: T[0]
      });
    }
    return h;
  }
  _findPosition() {
    const t = this._findGempagesPosition();
    if (t)
      return t;
    const e = this._findThemePosition();
    if (e)
      return e;
    const n = this._findDefaultPosition();
    return n || null;
  }
  // Temporary
  _findGempagesPosition() {
    const t = C("gp-product-button");
    for (const e of t)
      if (!e.closest("gp-sticky"))
        return e;
    return null;
  }
  _findThemePosition() {
    for (const t of Gt) {
      const e = E(t[0]);
      if (e) {
        if (e.closest(
          ".dbtfy-sticky-addtocart, .cart-drawer, cart-drawer, cart-items"
        ))
          continue;
        return setTimeout(() => {
          var r;
          const n = e.closest(
            '[class*="cart"], [class*="Cart"]'
          );
          n && n.tagName.toLowerCase() !== "body" && !n.classList.toString().includes("add-to-cart") && !n.classList.toString().includes("AddToCart") && !n.classList.toString().includes("icartShopifyCartContent") && I(
            "theme_position_in_cart_drawer_v8",
            {
              selector: t[0],
              classes: n.classList.toString(),
              theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
            },
            0.01
          );
        }), e;
      }
    }
    return null;
  }
  _findDefaultPosition() {
    for (const t of Lt)
      for (const e of [
        this._globalConfig.customSelectors.addToCartButton,
        ...ot,
        "button"
      ]) {
        if (!e)
          continue;
        const n = E(
          `${t} ${e}`
        );
        if (n)
          return n.parentElement;
      }
    return null;
  }
}
function un(i, t) {
  var e;
  return t ? ((e = window.Shopify.currency) == null ? void 0 : e.active) === t.currencyCode ? 1 : 1 / t.currencyRate * i : i;
}
function dn(i) {
  const t = () => typeof window.FastClick != "undefined" || typeof window.T4SThemeSP != "undefined" && typeof window.T4SThemeSP.FastClick != "undefined" || typeof window.BEEThemeSP != "undefined" && typeof window.BEEThemeSP.FastClick != "undefined", e = setInterval(() => {
    t() && (clearInterval(e), C("*", i).forEach(
      (n) => Kt(n, "needsclick")
    ));
  }, 500);
}
const Tt = (i) => {
  var t;
  ((t = window.Shopify.theme) == null ? void 0 : t.theme_store_id) === 801 ? setTimeout(() => new Pt(i).initialize(), 100) : new Pt(i).initialize();
}, xt = () => {
  var r;
  if (Qt()) {
    const a = C(
      "style#kaching-bundles-custom-css"
    );
    for (const o of a)
      o.remove();
    return;
  }
  const i = z(
    "script#kaching-bundles-config"
  );
  if (!i)
    return;
  v("Shopify domain:", i.shopifyDomain), Ut();
  const t = window.Shopify.currency;
  t && (i.currencyRate = Number(t.rate));
  const e = window.Shopify.country;
  e && (i.country = e);
  const n = window.Shopify.locale;
  n && (i.locale = n), window.kachingBundlesKeepQuantityInput && (i.keepQuantityInput = !0), Tt(i), window.Shopify.designMode && (O(window, "shopify:section:load", () => {
    Tt(i);
  }), i.isDeprecatedAppEmbed || Qe({
    customApiHost: i.customApiHost,
    shopifyDomain: i.shopifyDomain,
    themeId: (r = window.Shopify.theme) == null ? void 0 : r.id
  })), Yt(), Zt(), window.kachingBundlesApi = Le(i), setTimeout(() => {
    Mt();
  }, 1e3);
};
window.__kachingBundlesInitializeInternal = xt;
const At = () => {
  window.kachingBundlesDisableAutoInitialize || xt();
};
document.readyState === "loading" ? (p("Waiting for DOMContentLoaded"), document.addEventListener("DOMContentLoaded", At)) : At();
