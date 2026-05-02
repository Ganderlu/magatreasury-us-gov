
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.4BHXk6k3.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.C5-z54Em.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.QrY2l_Sq.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.VgQC580f.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.6bEj3K_c.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation-legacy.iGYHiFZ9.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.DPbJxrfp.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.DJqnNPYi.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared-legacy.D6wHqtIj.js","/cdn/shopifycloud/checkout-web/assets/c1/business-customer-BusinessCustomerShippingAddressManager-legacy.B7Tdx48q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.BGjs0YhY.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel-legacy.a05uCfu6.js","/cdn/shopifycloud/checkout-web/assets/c1/events-shared-legacy.x00jnQ_o.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BbBFqdfu.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.CPPZ2Y_0.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.FcgxgE1T.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.D8GRRgiy.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation-legacy.CsnLI-Ee.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.CsjZMSOZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.YP_t7CSI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops-legacy.CTVAgLB8.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.wL4uWrR3.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.B9vuCn7E.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.BOqGO0-q.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BcSJ03MR.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo-legacy.AlVSRL_A.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.CrpxJehm.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DYsO7a08.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.KqH4i6V7.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.DuGn1vJ_.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.-5Y8oX55.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery-legacy.Sp1urGpQ.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DjEVCTz8.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.BqsCBF18.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.Cm08JeyW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.jTQzWTwK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CGZupMNv.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BzoGrScG.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.BW0RDLgD.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.Dl98Vybc.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.Bx5kbxTg.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.B3xcD8r3.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.CGcf9Y0Y.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.h0znNG5l.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.QtiOvv-p.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.FoqE2efF.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0967/3775/5412/files/LIMITED_TIME_OFFER_3_x320.png?v=1772663214","https://cdn.shopify.com/s/files/1/0967/3775/5412/files/LIMITED_TIME_OFFER_2_2000x.png?v=1772662911"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  