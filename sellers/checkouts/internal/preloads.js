
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CqhMYcPa.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DWJe-rve.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor-legacy.IWsIfEK8.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.B-day9Px.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-FullScreenBackground-legacy.BizQfvRF.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-useReplaceShopPayInHistory-legacy.DYlxhmu6.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer-legacy.CizW-tIg.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-NotFound-legacy.BHAM6NhJ.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-proposal-legacy.gOCkI5n3.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-ButtonWithRegisterWebPixel-legacy.DfEJmJDj.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.CPmEwG72.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.BcpuSwTG.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B4i1_wWM.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-PaymentButtons-legacy.CKttXRcT.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-LocalPickup-legacy.DaZVxWYO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment-legacy.Cg6HF7U5.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo-legacy.DFakv1O6.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment-legacy.DFPV_Kcc.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine-legacy.OamRVkpp.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview-legacy.BDAklMkB.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo-legacy.CVQcmaLq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.C-QARPcW.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField-legacy.DBEpLyjT.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-useShowShopPayOptin-legacy.sQ-vCocy.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer-legacy.0bVgUgcd.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-RememberMeDescriptionText-legacy.D0X3EW7r.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary-legacy.Dt6DBHn1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery-legacy.ouOVdVXK.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice-legacy.Ce9Cwe5X.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops-legacy.DV7K3Gdp.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.DB5EloFA.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility-legacy.i96fxQAY.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown-legacy.CHawnkSZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal-legacy.gL2u_6Bs.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options-legacy.C3B48kce.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions-legacy.CY-8SwAn.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector-legacy.OPdmPU7K.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown-legacy.BZCjXbSZ.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.CPkjW9eO.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions-legacy.CjrtsW8P.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets-legacy.4PkDjWmo.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.M8NXMyrM.js"];
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
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
  