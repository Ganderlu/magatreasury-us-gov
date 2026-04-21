
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CLC_3jHV.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CScrCxB1.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor-legacy.BFEfGJMl.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.DqPp0a2w.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-FullScreenBackground-legacy.dNrmovLE.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-unactionable-errors-legacy.CMHLQvhx.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer-legacy.ZBKy0ekg.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.B2XaVoZO.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shared-legacy.Wfe87RLG.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-BusinessCustomerShippingAddressManager-legacy.Cckxvze1.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-shared-legacy.CLx91dwo.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-ButtonWithRegisterWebPixel-legacy.SESosQMG.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BbBFqdfu.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.aBpfsba5.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.DCmbYjPT.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-MarketsProDisclaimer-legacy.CA1P3mlO.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-VatNumberValidationField-legacy.Br9dYEjx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEditorShopPayNavigation-legacy.VsCdBtKh.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo-legacy.CmbhskDn.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment-legacy.DmBruwGg.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine-legacy.D6dv5IwQ.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview-legacy.CY2dfom9.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo-legacy.CIdibT8Z.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.7jPB5BHg.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField-legacy.-A3vQhzj.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-RememberMeDescriptionText-legacy.B2-QZZBB.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer-legacy.DEkv-gD8.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary-legacy.BTkRtTsY.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery-legacy.DNXTS3_4.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice-legacy.X6y2G-QG.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops-legacy.DmQthutA.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.Ccq58-Sz.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility-legacy.CTzbeoaT.js","/cdn/shopifycloud/checkout-web/assets/c1/MobilePhoneField-legacy.DtsrPnx-.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown-legacy.CFp8iTZG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal-legacy.DPNUl0ls.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options-legacy.BGGRjT8J.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions-legacy.oPUGzIiT.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector-legacy.DJ9t1jDJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown-legacy.CbvsnV8s.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.DBqgbEfJ.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions-legacy.hS-h67gy.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets-legacy.e1hxs6Py.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.CuLfAz_x.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-useShopPayNewSignupLoginExperiment-legacy.DqATX_P5.js"];
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
  