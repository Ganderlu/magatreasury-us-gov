(function() {
  try {
    if (typeof document != "undefined") {
      var Ct = document.createElement("style");
      Ct.id = "kaching-bundles-styles", Ct.appendChild(document.createTextNode(`.kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;white-space:nowrap}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:70%;height:70%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__product-personalisation__image--default{opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;font-family:system-ui;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:1}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:56px;width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:sans-serif;font-size:12px;font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:system-ui;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.kaching-bundles img{width:initial}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}`)), document.head.appendChild(Ct);
    }
  } catch (Rt) {
    console.error("vite-plugin-css-injected-by-js", Rt);
  }
})();
var jv = Object.defineProperty, Ev = Object.getPrototypeOf, Rv = Reflect.get, qu = (Ct) => {
  throw TypeError(Ct);
}, Qv = (Ct, Rt, sn) => Rt in Ct ? jv(Ct, Rt, { enumerable: !0, configurable: !0, writable: !0, value: sn }) : Ct[Rt] = sn, on = (Ct, Rt, sn) => Qv(Ct, typeof Rt != "symbol" ? Rt + "" : Rt, sn), Ss = (Ct, Rt, sn) => Rt.has(Ct) || qu("Cannot " + sn), de = (Ct, Rt, sn) => (Ss(Ct, Rt, "read from private field"), sn ? sn.call(Ct) : Rt.get(Ct)), ht = (Ct, Rt, sn) => Rt.has(Ct) ? qu("Cannot add the same private member more than once") : Rt instanceof WeakSet ? Rt.add(Ct) : Rt.set(Ct, sn), gt = (Ct, Rt, sn, kl) => (Ss(Ct, Rt, "write to private field"), Rt.set(Ct, sn), sn), Yt = (Ct, Rt, sn) => (Ss(Ct, Rt, "access private method"), sn), Nv = (Ct, Rt, sn) => Rv(Ev(Ct), sn, Rt);
(function(Ct) {
  var Rt, sn, kl, Pa, Ei, mr, Ri, Sa, fi, Qi, bi, Jr, Ni, Ca, Ba, qr, Cs, Ia, ml, cr, En, Da, yr, vi, xr, Kn, Gn, wr, Zr, Kr, Mr, _i, Yr, yl, xl, Rn, Bs, Is, za, $a, wl, Vr, Yn, Wi, Aa, Pl, Sl, Ds, Ui, ur, Xr, Cl, qa, zs, $s, Pr, Sr, Gr, Bl, Cr, Hi, Ma;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(t, n) {
    if (typeof t == "string") {
      const r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), n);
    }
    if (t instanceof RegExp) {
      if (!t.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(t, n);
    }
    return this.replace(t, n);
  }), typeof window != "undefined" && ((kl = (sn = (Rt = window.__svelte) != null ? Rt : window.__svelte = {}).v) != null ? kl : sn.v = /* @__PURE__ */ new Set()).add("5");
  const Va = "[!", ei = {}, dn = Symbol(), Mu = !1;
  var Ji = Array.isArray, Vu = Array.prototype.indexOf, Il = Array.from, Ga = Object.keys, ti = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, As = Object.getOwnPropertyDescriptors, qs = Object.prototype, Gu = Array.prototype, Ta = Object.getPrototypeOf, Ms = Object.isExtensible;
  const ri = () => {
  };
  function Tu(t) {
    return t();
  }
  function Fa(t) {
    for (var n = 0; n < t.length; n++) t[n]();
  }
  const Zi = 16, Oa = 32, Vs = 64, Xn = 256, Dl = 512, xn = 1024, Br = 2048, ii = 4096, dr = 8192, ki = 16384, zl = 32768, mi = 65536, Fu = 1 << 17, Gs = 1 << 19, $l = 1 << 21, Ou = 1 << 22, ai = 1 << 23, Ir = Symbol("$state"), Ts = Symbol("legacy props"), Lu = Symbol(""), Al = new class extends Error {
    constructor() {
      super(...arguments), on(this, "name", "StaleReactionError"), on(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Fs(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Ki(t) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let ft, tt = !1;
  function Bn(t) {
    tt = t;
  }
  function gn(t) {
    if (t === null) throw Ki(), ei;
    return ft = t;
  }
  function er() {
    return gn(nr(ft));
  }
  function x(t) {
    if (tt) {
      if (nr(ft) !== null) throw Ki(), ei;
      ft = t;
    }
  }
  function Yi(t = 1) {
    if (tt) {
      for (var n = t, r = ft; n--; ) r = nr(r);
      ft = r;
    }
  }
  function La(t = !0) {
    for (var n = 0, r = ft; ; ) {
      if (r.nodeType === 8) {
        var i = r.data;
        if (i === "]") {
          if (n === 0) return r;
          n -= 1;
        } else i !== "[" && i !== Va || (n += 1);
      }
      var l = nr(r);
      t && r.remove(), r = l;
    }
  }
  function Os(t) {
    if (!t || t.nodeType !== 8) throw Ki(), ei;
    return t.data;
  }
  function Ls(t) {
    return t === this.v;
  }
  function ja(t, n) {
    return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
  }
  function ju(t, n) {
    return t !== n;
  }
  function js(t) {
    return !ja(t, this.v);
  }
  let yi = !1;
  const Eu = [];
  function Ea(t, n = !1, r = !1) {
    return Ra(t, /* @__PURE__ */ new Map(), "", Eu, null, r);
  }
  function Ra(t, n, r, i, l = null, s = !1) {
    if (typeof t == "object" && t !== null) {
      var u = n.get(t);
      if (u !== void 0) return u;
      if (t instanceof Map) return new Map(t);
      if (t instanceof Set) return new Set(t);
      if (Ji(t)) {
        var o = Array(t.length);
        n.set(t, o), l !== null && n.set(l, o);
        for (var a = 0; a < t.length; a += 1) {
          var c = t[a];
          a in t && (o[a] = Ra(c, n, r, i, null, s));
        }
        return o;
      }
      if (Ta(t) === qs) {
        for (var d in o = {}, n.set(t, o), l !== null && n.set(l, o), t) o[d] = Ra(t[d], n, r, i, null, s);
        return o;
      }
      if (t instanceof Date) return structuredClone(t);
      if (typeof t.toJSON == "function" && !s) return Ra(t.toJSON(), n, r, i, t);
    }
    if (t instanceof EventTarget) return t;
    try {
      return structuredClone(t);
    } catch {
      return t;
    }
  }
  let Xt = null;
  function xi(t) {
    Xt = t;
  }
  function Xi(t) {
    return Es().get(t);
  }
  function ea(t, n) {
    return Es().set(t, n), n;
  }
  function Je(t, n = !1, r) {
    Xt = { p: Xt, c: null, e: null, s: t, x: null, l: yi && !n ? { s: null, u: null, $: [] } : null };
  }
  function Ze(t) {
    var n = Xt, r = n.e;
    if (r !== null) for (var i of (n.e = null, r)) co(i);
    return t !== void 0 && (n.x = t), Xt = n.p, t != null ? t : {};
  }
  function wi() {
    return !yi || Xt !== null && Xt.l === null;
  }
  function Es(t) {
    var n;
    return Xt === null && Fs(), (n = Xt.c) != null ? n : Xt.c = new Map((function(r) {
      let i = r.p;
      for (; i !== null; ) {
        const l = i.c;
        if (l !== null) return l;
        i = i.p;
      }
      return null;
    })(Xt) || void 0);
  }
  const Ru = typeof requestIdleCallback == "undefined" ? (t) => setTimeout(t, 1) : requestIdleCallback;
  let Tr = [], Pi = [];
  function Rs() {
    var t = Tr;
    Tr = [], Fa(t);
  }
  function Qs() {
    var t = Pi;
    Pi = [], Fa(t);
  }
  function Qu() {
    return Tr.length > 0 || Pi.length > 0;
  }
  function li(t) {
    if (Tr.length === 0 && !na) {
      var n = Tr;
      queueMicrotask(() => {
        n === Tr && Rs();
      });
    }
    Tr.push(t);
  }
  function Nu() {
    Tr.length > 0 && Rs(), Pi.length > 0 && Qs();
  }
  const Wu = /* @__PURE__ */ new WeakMap();
  function Ns(t) {
    var n = mt;
    if (n === null) return wt.f |= ai, t;
    if ((n.f & zl) === 0) {
      if (!(128 & n.f)) throw !n.parent && t instanceof Error && Ws(t), t;
      n.b.error(t);
    } else Si(t, n);
  }
  function Si(t, n) {
    for (; n !== null; ) {
      if (128 & n.f) try {
        return void n.b.error(t);
      } catch (r) {
        t = r;
      }
      n = n.parent;
    }
    throw t instanceof Error && Ws(t), t;
  }
  function Ws(t) {
    const n = Wu.get(t);
    n && (ti(t, "message", { value: n.message }), ti(t, "stack", { value: n.stack }));
  }
  const ql = /* @__PURE__ */ new Set();
  let nn = null, ta = null, Ml = /* @__PURE__ */ new Set(), si = [], Qa = null, Vl = !1, na = !1;
  Pa = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakSet(), Cs = function(t) {
    var n;
    t.f ^= xn;
    for (var r = t.first; r !== null; ) {
      var i = r.f, l = !!(96 & i);
      if (!(l && (i & xn) !== 0 || (i & dr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        l ? r.f ^= xn : 4 & i ? de(this, Jr).push(r) : (i & xn) === 0 && ((i & Ou) !== 0 ? ((n = r.b) != null && n.is_pending() ? de(this, Qi) : de(this, fi)).push(r) : Ha(r) && ((r.f & Zi) !== 0 && de(this, Ni).push(r), Di(r)));
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; ) r = u.next, u = u.parent;
    }
  }, Ia = function(t) {
    for (const n of t)
      ((n.f & Br) !== 0 ? de(this, Ca) : de(this, Ba)).push(n), zn(n, xn);
    t.length = 0;
  }, ml = function() {
    if (!de(this, Sa)) for (const t of de(this, Ei)) t();
    de(this, Ei).clear();
  };
  let oi = class Ps {
    constructor() {
      ht(this, qr), on(this, "current", /* @__PURE__ */ new Map()), ht(this, Pa, /* @__PURE__ */ new Map()), ht(this, Ei, /* @__PURE__ */ new Set()), ht(this, mr, 0), ht(this, Ri, null), ht(this, Sa, !1), ht(this, fi, []), ht(this, Qi, []), ht(this, bi, []), ht(this, Jr, []), ht(this, Ni, []), ht(this, Ca, []), ht(this, Ba, []), on(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(n) {
      var r;
      si = [], ta = null;
      for (const s of n) Yt(this, qr, Cs).call(this, s);
      if (de(this, fi).length === 0 && de(this, mr) === 0) {
        Yt(this, qr, ml).call(this);
        var i = de(this, bi), l = de(this, Jr);
        gt(this, bi, []), gt(this, Jr, []), gt(this, Ni, []), ta = nn, nn = null, Hs(i), Hs(l), nn === null ? nn = this : ql.delete(this), (r = de(this, Ri)) == null || r.resolve();
      } else Yt(this, qr, Ia).call(this, de(this, bi)), Yt(this, qr, Ia).call(this, de(this, Jr)), Yt(this, qr, Ia).call(this, de(this, Ni));
      for (const s of de(this, fi)) Di(s);
      for (const s of de(this, Qi)) Di(s);
      gt(this, fi, []), gt(this, Qi, []);
    }
    capture(n, r) {
      de(this, Pa).has(n) || de(this, Pa).set(n, r), this.current.set(n, n.v);
    }
    activate() {
      nn = this;
    }
    deactivate() {
      nn = null, ta = null;
      for (const n of Ml) if (Ml.delete(n), n(), nn !== null) break;
    }
    neuter() {
      gt(this, Sa, !0);
    }
    flush() {
      si.length > 0 ? Us() : Yt(this, qr, ml).call(this), nn === this && (de(this, mr) === 0 && ql.delete(this), this.deactivate());
    }
    increment() {
      gt(this, mr, de(this, mr) + 1);
    }
    decrement() {
      if (gt(this, mr, de(this, mr) - 1), de(this, mr) === 0) {
        for (const n of de(this, Ca)) zn(n, Br), Ci(n);
        for (const n of de(this, Ba)) zn(n, ii), Ci(n);
        gt(this, bi, []), gt(this, Jr, []), this.flush();
      } else this.deactivate();
    }
    add_callback(n) {
      de(this, Ei).add(n);
    }
    settled() {
      var n, r, i;
      return ((n = de(this, Ri)) != null ? n : gt(this, Ri, { promise: new Promise((l, s) => {
        r = l, i = s;
      }), resolve: r, reject: i })).promise;
    }
    static ensure() {
      if (nn === null) {
        const n = nn = new Ps();
        ql.add(nn), na || Ps.enqueue(() => {
          nn === n && n.flush();
        });
      }
      return nn;
    }
    static enqueue(n) {
      li(n);
    }
  };
  function k(t) {
    var n = na;
    na = !0;
    try {
      for (; ; ) {
        if (Nu(), si.length === 0 && !Qu() && (nn == null || nn.flush(), si.length === 0)) return void (Qa = null);
        Us();
      }
    } finally {
      na = n;
    }
  }
  function Us() {
    var t = Ii;
    Vl = !0;
    try {
      var n = 0;
      for (vo(!0); si.length > 0; ) {
        var r = oi.ensure();
        n++ > 1e3 && Uu(), r.process(si), Or.clear();
      }
    } finally {
      Vl = !1, vo(t), Qa = null;
    }
  }
  function Uu() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (t) {
      Si(t, Qa);
    }
  }
  let Fr = null;
  function Hs(t) {
    var n = t.length;
    if (n !== 0) {
      for (var r = 0; r < n; ) {
        var i = t[r++];
        if (!(24576 & i.f) && Ha(i) && (Fr = [], Di(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? ho(i) : i.fn = null), (Fr == null ? void 0 : Fr.length) > 0)) {
          Or.clear();
          for (const l of Fr) Di(l);
          Fr = [];
        }
      }
      Fr = null;
    }
  }
  function Ci(t) {
    for (var n = Qa = t; n.parent !== null; ) {
      var r = (n = n.parent).f;
      if (Vl && n === mt && (r & Zi) !== 0) return;
      if (96 & r) {
        if ((r & xn) === 0) return;
        n.f ^= xn;
      }
    }
    si.push(n);
  }
  function Hu(t) {
    let n, r = 0, i = Dr(0);
    return () => {
      wt === null || ir || (e(i), ia(() => (r === 0 && (n = Zt(() => t(() => Tn(i)))), r += 1, () => {
        li(() => {
          r -= 1, r === 0 && (n == null || n(), n = void 0, Tn(i));
        });
      })));
    };
  }
  class Ju {
    constructor(n, r, i) {
      ht(this, Rn), on(this, "parent"), ht(this, cr, !1), ht(this, En), ht(this, Da, tt ? ft : null), ht(this, yr), ht(this, vi), ht(this, xr), ht(this, Kn, null), ht(this, Gn, null), ht(this, wr, null), ht(this, Zr, null), ht(this, Kr, 0), ht(this, Mr, 0), ht(this, _i, !1), ht(this, Yr, null), ht(this, yl, () => {
        de(this, Yr) && Bi(de(this, Yr), de(this, Kr));
      }), ht(this, xl, Hu(() => (gt(this, Yr, Dr(de(this, Kr))), () => {
        gt(this, Yr, null);
      }))), gt(this, En, n), gt(this, yr, r), gt(this, vi, i), this.parent = mt.b, gt(this, cr, !!de(this, yr).pending), gt(this, xr, zr(() => {
        if (mt.b = this, tt) {
          const l = de(this, Da);
          er(), l.nodeType === 8 && l.data === Va ? Yt(this, Rn, Is).call(this) : Yt(this, Rn, Bs).call(this);
        } else {
          try {
            gt(this, Kn, hn(() => i(de(this, En))));
          } catch (l) {
            this.error(l);
          }
          de(this, Mr) > 0 ? Yt(this, Rn, $a).call(this) : gt(this, cr, !1);
        }
      }, 589952)), tt && gt(this, En, ft);
    }
    is_pending() {
      return de(this, cr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!de(this, yr).pending;
    }
    update_pending_count(n) {
      Yt(this, Rn, wl).call(this, n), gt(this, Kr, de(this, Kr) + n), Ml.add(de(this, yl));
    }
    get_effect_pending() {
      return de(this, xl).call(this), e(de(this, Yr));
    }
    error(n) {
      var r = de(this, yr).onerror;
      let i = de(this, yr).failed;
      if (de(this, _i) || !r && !i) throw n;
      de(this, Kn) && (fn(de(this, Kn)), gt(this, Kn, null)), de(this, Gn) && (fn(de(this, Gn)), gt(this, Gn, null)), de(this, wr) && (fn(de(this, wr)), gt(this, wr, null)), tt && (gn(de(this, Da)), Yi(), gn(La()));
      var l = !1, s = !1;
      const u = () => {
        l ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (l = !0, s && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), oi.ensure(), gt(this, Kr, 0), de(this, wr) !== null && $r(de(this, wr), () => {
          gt(this, wr, null);
        }), gt(this, cr, this.has_pending_snippet()), gt(this, Kn, Yt(this, Rn, za).call(this, () => (gt(this, _i, !1), hn(() => de(this, vi).call(this, de(this, En)))))), de(this, Mr) > 0 ? Yt(this, Rn, $a).call(this) : gt(this, cr, !1));
      };
      var o = wt;
      try {
        wn(null), s = !0, r == null || r(n, u), s = !1;
      } catch (a) {
        Si(a, de(this, xr) && de(this, xr).parent);
      } finally {
        wn(o);
      }
      i && li(() => {
        gt(this, wr, Yt(this, Rn, za).call(this, () => {
          gt(this, _i, !0);
          try {
            return hn(() => {
              i(de(this, En), () => n, () => u);
            });
          } catch (a) {
            return Si(a, de(this, xr).parent), null;
          } finally {
            gt(this, _i, !1);
          }
        }));
      });
    }
  }
  function Js(t, n, r) {
    const i = wi() ? ra : Gl;
    if (n.length !== 0) {
      var l = nn, s = mt, u = (function() {
        var a = mt, c = wt, d = Xt, g = nn, f = tt;
        if (f) var p = ft;
        return function() {
          pr(a), wn(c), xi(d), g == null || g.activate(), f && (Bn(!0), gn(p));
        };
      })(), o = tt;
      Promise.all(n.map((a) => Zu(a))).then((a) => {
        l == null || l.activate(), u();
        try {
          r([...t.map(i), ...a]);
        } catch (c) {
          (s.f & ki) === 0 && Si(c, s);
        }
        o && Bn(!1), l == null || l.deactivate(), Zs();
      }).catch((a) => {
        Si(a, s);
      });
    } else r(t.map(i));
  }
  function Zs() {
    pr(null), wn(null), xi(null);
  }
  function ra(t) {
    var n = 2050, r = wt !== null && 2 & wt.f ? wt : null;
    return mt === null || r !== null && (r.f & Xn) !== 0 ? n |= Xn : mt.f |= Gs, { ctx: Xt, deps: null, effects: null, equals: Ls, f: n, fn: t, reactions: null, rv: 0, v: dn, wv: 0, parent: r != null ? r : mt, ac: null };
  }
  function Zu(t, n) {
    let r = mt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var i = r.b, l = void 0, s = Dr(dn), u = null, o = !wt;
    return (function(a) {
      rr(4718592, a, !0);
    })(() => {
      var a;
      try {
        var c = t();
        u && Promise.resolve(c).catch(() => {
        });
      } catch (_) {
        c = Promise.reject(_);
      }
      var d = () => c;
      l = (a = u == null ? void 0 : u.then(d, d)) != null ? a : Promise.resolve(c), u = l;
      var g = nn, f = i.is_pending();
      o && (i.update_pending_count(1), f || g.increment());
      const p = (_, B = void 0) => {
        u = null, f || g.activate(), B ? B !== Al && (s.f |= ai, Bi(s, B)) : ((s.f & ai) !== 0 && (s.f ^= ai), Bi(s, _)), o && (i.update_pending_count(-1), f || g.decrement()), Zs();
      };
      if (l.then(p, (_) => p(null, _ || "unknown")), g) return () => {
        queueMicrotask(() => g.neuter());
      };
    }), new Promise((a) => {
      (function c(d) {
        function g() {
          d === l ? a(s) : c(l);
        }
        d.then(g, g);
      })(l);
    });
  }
  function h(t) {
    const n = ra(t);
    return ko(n), n;
  }
  function Gl(t) {
    const n = ra(t);
    return n.equals = js, n;
  }
  function Ks(t) {
    var n = t.effects;
    if (n !== null) {
      t.effects = null;
      for (var r = 0; r < n.length; r += 1) fn(n[r]);
    }
  }
  function Tl(t) {
    var n, r = mt;
    pr((function(i) {
      for (var l = i.parent; l !== null; ) {
        if (!(2 & l.f)) return l;
        l = l.parent;
      }
      return null;
    })(t));
    try {
      Ks(t), n = Po(t);
    } finally {
      pr(r);
    }
    return n;
  }
  function Ys(t) {
    var n = Tl(t);
    t.equals(n) || (t.v = n, t.wv = xo()), ci || zn(t, !Lr && (t.f & Xn) === 0 || t.deps === null ? xn : ii);
  }
  cr = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakSet(), Bs = function() {
    try {
      gt(this, Kn, hn(() => de(this, vi).call(this, de(this, En))));
    } catch (t) {
      this.error(t);
    }
    gt(this, cr, !1);
  }, Is = function() {
    const t = de(this, yr).pending;
    t && (gt(this, Gn, hn(() => t(de(this, En)))), oi.enqueue(() => {
      gt(this, Kn, Yt(this, Rn, za).call(this, () => (oi.ensure(), hn(() => de(this, vi).call(this, de(this, En)))))), de(this, Mr) > 0 ? Yt(this, Rn, $a).call(this) : ($r(de(this, Gn), () => {
        gt(this, Gn, null);
      }), gt(this, cr, !1));
    }));
  }, za = function(t) {
    var n = mt, r = wt, i = Xt;
    pr(de(this, xr)), wn(de(this, xr)), xi(de(this, xr).ctx);
    try {
      return t();
    } catch (l) {
      return Ns(l), null;
    } finally {
      pr(n), wn(r), xi(i);
    }
  }, $a = function() {
    const t = de(this, yr).pending;
    de(this, Kn) !== null && (gt(this, Zr, document.createDocumentFragment()), (function(n, r) {
      for (var i = n.nodes_start, l = n.nodes_end; i !== null; ) {
        var s = i === l ? null : nr(i);
        r.append(i), i = s;
      }
    })(de(this, Kn), de(this, Zr))), de(this, Gn) === null && gt(this, Gn, hn(() => t(de(this, En))));
  }, wl = function(t) {
    var n;
    this.has_pending_snippet() ? (gt(this, Mr, de(this, Mr) + t), de(this, Mr) === 0 && (gt(this, cr, !1), de(this, Gn) && $r(de(this, Gn), () => {
      gt(this, Gn, null);
    }), de(this, Zr) && (de(this, En).before(de(this, Zr)), gt(this, Zr, null)))) : this.parent && Yt(n = this.parent, Rn, wl).call(n, t);
  };
  const Or = /* @__PURE__ */ new Map();
  function Dr(t, n) {
    return { f: 0, v: t, reactions: null, equals: Ls, rv: 0, wv: 0 };
  }
  function Ae(t, n) {
    const r = Dr(t);
    return ko(r), r;
  }
  function Fl(t, n = !1, r = !0) {
    var i, l;
    const s = Dr(t);
    return n || (s.equals = js), yi && r && Xt !== null && Xt.l !== null && ((l = (i = Xt.l).s) != null ? l : i.s = []).push(s), s;
  }
  function W(t, n, r = !1) {
    return wt !== null && (!ir || (wt.f & Fu) !== 0) && wi() && 4325394 & wt.f && !(Qn != null && Qn.includes(t)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), Bi(t, r ? at(n) : n);
  }
  function Bi(t, n) {
    if (!t.equals(n)) {
      var r = t.v;
      ci ? Or.set(t, n) : Or.set(t, r), t.v = n, oi.ensure().capture(t, r), 2 & t.f && ((t.f & Br) !== 0 && Tl(t), zn(t, (t.f & Xn) === 0 ? xn : ii)), t.wv = xo(), Xs(t, Br), !wi() || mt === null || (mt.f & xn) === 0 || 96 & mt.f || (Nn === null ? (function(i) {
        Nn = i;
      })([t]) : Nn.push(t));
    }
    return n;
  }
  function Tn(t) {
    W(t, t.v + 1);
  }
  function Xs(t, n) {
    var r = t.reactions;
    if (r !== null) for (var i = wi(), l = r.length, s = 0; s < l; s++) {
      var u = r[s], o = u.f;
      if (i || u !== mt) {
        var a = (o & Br) === 0;
        a && zn(u, n), 2 & o ? Xs(u, ii) : a && ((o & Zi) !== 0 && Fr !== null && Fr.push(u), Ci(u));
      }
    }
  }
  function at(t) {
    if (typeof t != "object" || t === null || Ir in t) return t;
    const n = Ta(t);
    if (n !== qs && n !== Gu) return t;
    var r = /* @__PURE__ */ new Map(), i = Ji(t), l = Ae(0), s = ar, u = (o) => {
      if (ar === s) return o();
      var a = wt, c = ar;
      wn(null), yo(s);
      var d = o();
      return wn(a), yo(c), d;
    };
    return i && r.set("length", Ae(t.length)), new Proxy(t, { defineProperty(o, a, c) {
      "value" in c && c.configurable !== !1 && c.enumerable !== !1 && c.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var d = r.get(a);
      return d === void 0 ? d = u(() => {
        var g = Ae(c.value);
        return r.set(a, g), g;
      }) : W(d, c.value, !0), !0;
    }, deleteProperty(o, a) {
      var c = r.get(a);
      if (c === void 0) {
        if (a in o) {
          const d = u(() => Ae(dn));
          r.set(a, d), Tn(l);
        }
      } else W(c, dn), Tn(l);
      return !0;
    }, get(o, a, c) {
      var d;
      if (a === Ir) return t;
      var g = r.get(a), f = a in o;
      if (g !== void 0 || f && !((d = ni(o, a)) != null && d.writable) || (g = u(() => Ae(at(f ? o[a] : dn))), r.set(a, g)), g !== void 0) {
        var p = e(g);
        return p === dn ? void 0 : p;
      }
      return Reflect.get(o, a, c);
    }, getOwnPropertyDescriptor(o, a) {
      var c = Reflect.getOwnPropertyDescriptor(o, a);
      if (c && "value" in c) {
        var d = r.get(a);
        d && (c.value = e(d));
      } else if (c === void 0) {
        var g = r.get(a), f = g == null ? void 0 : g.v;
        if (g !== void 0 && f !== dn) return { enumerable: !0, configurable: !0, value: f, writable: !0 };
      }
      return c;
    }, has(o, a) {
      var c;
      if (a === Ir) return !0;
      var d = r.get(a), g = d !== void 0 && d.v !== dn || Reflect.has(o, a);
      return (d !== void 0 || mt !== null && (!g || (c = ni(o, a)) != null && c.writable)) && (d === void 0 && (d = u(() => Ae(g ? at(o[a]) : dn)), r.set(a, d)), e(d) === dn) ? !1 : g;
    }, set(o, a, c, d) {
      var g, f = r.get(a), p = a in o;
      if (i && a === "length") for (var _ = c; _ < f.v; _ += 1) {
        var B = r.get(_ + "");
        B !== void 0 ? W(B, dn) : _ in o && (B = u(() => Ae(dn)), r.set(_ + "", B));
      }
      f === void 0 ? p && !((g = ni(o, a)) != null && g.writable) || (W(f = u(() => Ae(void 0)), at(c)), r.set(a, f)) : (p = f.v !== dn, W(f, u(() => at(c))));
      var y = Reflect.getOwnPropertyDescriptor(o, a);
      if (y != null && y.set && y.set.call(d, c), !p) {
        if (i && typeof a == "string") {
          var w = r.get("length"), S = Number(a);
          Number.isInteger(S) && S >= w.v && W(w, S + 1);
        }
        Tn(l);
      }
      return !0;
    }, ownKeys(o) {
      e(l);
      var a = Reflect.ownKeys(o).filter((g) => {
        var f = r.get(g);
        return f === void 0 || f.v !== dn;
      });
      for (var [c, d] of r) d.v === dn || c in o || a.push(c);
      return a;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function eo(t) {
    try {
      if (t !== null && typeof t == "object" && Ir in t) return t[Ir];
    } catch {
    }
    return t;
  }
  function Ku(t, n) {
    return Object.is(eo(t), eo(n));
  }
  var to, no, ro, io;
  function Ol() {
    if (to === void 0) {
      to = window, no = /Firefox/.test(navigator.userAgent);
      var t = Element.prototype, n = Node.prototype, r = Text.prototype;
      ro = ni(n, "firstChild").get, io = ni(n, "nextSibling").get, Ms(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Ms(r) && (r.__t = void 0);
    }
  }
  function tr(t = "") {
    return document.createTextNode(t);
  }
  function Dn(t) {
    return ro.call(t);
  }
  function nr(t) {
    return io.call(t);
  }
  function P(t, n) {
    if (!tt) return Dn(t);
    var r = Dn(ft);
    if (r === null) r = ft.appendChild(tr());
    else if (n && r.nodeType !== 3) {
      var i = tr();
      return r == null || r.before(i), gn(i), i;
    }
    return gn(r), r;
  }
  function ve(t, n = !1) {
    if (!tt) {
      var r = Dn(t);
      return r instanceof Comment && r.data === "" ? nr(r) : r;
    }
    if (n && (ft == null ? void 0 : ft.nodeType) !== 3) {
      var i = tr();
      return ft == null || ft.before(i), gn(i), i;
    }
    return ft;
  }
  function G(t, n = 1, r = !1) {
    let i = tt ? ft : t;
    for (var l; n--; ) l = i, i = nr(i);
    if (!tt) return i;
    if (r && (i == null ? void 0 : i.nodeType) !== 3) {
      var s = tr();
      return i === null ? l == null || l.after(s) : i.before(s), gn(s), s;
    }
    return gn(i), i;
  }
  function ao(t) {
    t.textContent = "";
  }
  function Yu(t, n) {
    if (n) {
      const r = document.body;
      t.autofocus = !0, li(() => {
        document.activeElement === r && t.focus();
      });
    }
  }
  let lo = !1;
  function so() {
    lo || (lo = !0, document.addEventListener("reset", (t) => {
      Promise.resolve().then(() => {
        var n;
        if (!t.defaultPrevented) for (const r of t.target.elements) (n = r.__on_r) == null || n.call(r);
      });
    }, { capture: !0 }));
  }
  function Na(t) {
    var n = wt, r = mt;
    wn(null), pr(null);
    try {
      return t();
    } finally {
      wn(n), pr(r);
    }
  }
  function oo(t) {
    mt === null && wt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), wt !== null && (wt.f & Xn) !== 0 && mt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), ci && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function rr(t, n, r, i = !0) {
    var l, s = mt;
    s !== null && (s.f & dr) !== 0 && (t |= dr);
    var u = { ctx: Xt, deps: null, nodes_start: null, nodes_end: null, f: t | Br, first: null, fn: n, last: null, next: null, parent: s, b: s && s.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      Di(u), u.f |= zl;
    } catch (c) {
      throw fn(u), c;
    }
    else n !== null && Ci(u);
    if (i) {
      var o = u;
      if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && (o.f & Gs) === 0 && (o = o.first), o !== null && (o.parent = s, s !== null && (function(c, d) {
        var g = d.last;
        g === null ? d.last = d.first = c : (g.next = c, c.prev = g, d.last = c);
      })(o, s), wt !== null && 2 & wt.f && (t & Vs) === 0)) {
        var a = wt;
        ((l = a.effects) != null ? l : a.effects = []).push(o);
      }
    }
    return u;
  }
  function Ll(t) {
    const n = rr(8, null, !1);
    return zn(n, xn), n.teardown = t, n;
  }
  function Xe(t) {
    var n;
    oo();
    var r = mt.f;
    if (!(!wt && (r & Oa) !== 0 && (r & zl) === 0)) return co(t);
    var i = Xt;
    ((n = i.e) != null ? n : i.e = []).push(t);
  }
  function co(t) {
    return rr(1048580, t, !1);
  }
  function gr(t) {
    return oo(), rr(1048584, t, !0);
  }
  function Wa(t) {
    return rr(4, t, !1);
  }
  function ia(t, n = 0) {
    return rr(8 | n, t, !0);
  }
  function fe(t, n = [], r = []) {
    Js(n, r, (i) => {
      rr(8, () => t(...i.map(e)), !0);
    });
  }
  function zr(t, n = 0) {
    return rr(Zi | n, t, !0);
  }
  function hn(t, n = !0) {
    return rr(524320, t, !0, n);
  }
  function uo(t) {
    var n = t.teardown;
    if (n !== null) {
      const r = ci, i = wt;
      _o(!0), wn(null);
      try {
        n.call(null);
      } finally {
        _o(r), wn(i);
      }
    }
  }
  function go(t, n = !1) {
    var r = t.first;
    for (t.first = t.last = null; r !== null; ) {
      const l = r.ac;
      l !== null && Na(() => {
        l.abort(Al);
      });
      var i = r.next;
      (r.f & Vs) !== 0 ? r.parent = null : fn(r, n), r = i;
    }
  }
  function fn(t, n = !0) {
    var r = !1;
    (n || 262144 & t.f) && t.nodes_start !== null && t.nodes_end !== null && (po(t.nodes_start, t.nodes_end), r = !0), go(t, n && !r), Ja(t, 0), zn(t, ki);
    var i = t.transitions;
    if (i !== null) for (const s of i) s.stop();
    uo(t);
    var l = t.parent;
    l !== null && l.first !== null && ho(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
  }
  function po(t, n) {
    for (; t !== null; ) {
      var r = t === n ? null : nr(t);
      t.remove(), t = r;
    }
  }
  function ho(t) {
    var n = t.parent, r = t.prev, i = t.next;
    r !== null && (r.next = i), i !== null && (i.prev = r), n !== null && (n.first === t && (n.first = i), n.last === t && (n.last = r));
  }
  function $r(t, n) {
    var r = [];
    jl(t, r, !0), fo(r, () => {
      fn(t), n && n();
    });
  }
  function fo(t, n) {
    var r = t.length;
    if (r > 0) {
      var i = () => --r || n();
      for (var l of t) l.out(i);
    } else n();
  }
  function jl(t, n, r) {
    if ((t.f & dr) === 0) {
      if (t.f ^= dr, t.transitions !== null) for (const s of t.transitions) (s.is_global || r) && n.push(s);
      for (var i = t.first; i !== null; ) {
        var l = i.next;
        jl(i, n, ((i.f & mi) !== 0 || (i.f & Oa) !== 0) && r), i = l;
      }
    }
  }
  function Ua(t) {
    bo(t, !0);
  }
  function bo(t, n) {
    if ((t.f & dr) !== 0) {
      t.f ^= dr, (t.f & xn) === 0 && (zn(t, Br), Ci(t));
      for (var r = t.first; r !== null; ) {
        var i = r.next;
        bo(r, ((r.f & mi) !== 0 || (r.f & Oa) !== 0) && n), r = i;
      }
      if (t.transitions !== null) for (const l of t.transitions) (l.is_global || n) && l.in();
    }
  }
  let Ii = !1;
  function vo(t) {
    Ii = t;
  }
  let ci = !1;
  function _o(t) {
    ci = t;
  }
  let wt = null, ir = !1;
  function wn(t) {
    wt = t;
  }
  let mt = null;
  function pr(t) {
    mt = t;
  }
  let Qn = null;
  function ko(t) {
    wt !== null && (Qn === null ? Qn = [t] : Qn.push(t));
  }
  let In = null, Fn = 0, Nn = null, mo = 1, aa = 0, ar = aa;
  function yo(t) {
    ar = t;
  }
  let Lr = !1;
  function xo() {
    return ++mo;
  }
  function Ha(t) {
    var n, r, i = t.f;
    if ((i & Br) !== 0) return !0;
    if ((i & ii) !== 0) {
      var l = t.deps, s = (i & Xn) !== 0;
      if (l !== null) {
        var u, o, a = (i & Dl) !== 0, c = s && mt !== null && !Lr, d = l.length;
        if ((a || c) && (mt === null || (mt.f & ki) === 0)) {
          var g = t, f = g.parent;
          for (u = 0; u < d; u++) o = l[u], !a && ((n = o == null ? void 0 : o.reactions) != null && n.includes(g)) || ((r = o.reactions) != null ? r : o.reactions = []).push(g);
          a && (g.f ^= Dl), c && f !== null && (f.f & Xn) === 0 && (g.f ^= Xn);
        }
        for (u = 0; u < d; u++) if (Ha(o = l[u]) && Ys(o), o.wv > t.wv) return !0;
      }
      s && (mt === null || Lr) || zn(t, xn);
    }
    return !1;
  }
  function wo(t, n, r = !0) {
    var i = t.reactions;
    if (i !== null && !(Qn != null && Qn.includes(t))) for (var l = 0; l < i.length; l++) {
      var s = i[l];
      2 & s.f ? wo(s, n, !1) : n === s && (r ? zn(s, Br) : (s.f & xn) !== 0 && zn(s, ii), Ci(s));
    }
  }
  function Po(t) {
    var n, r, i = In, l = Fn, s = Nn, u = wt, o = Lr, a = Qn, c = Xt, d = ir, g = ar, f = t.f;
    In = null, Fn = 0, Nn = null, Lr = (f & Xn) !== 0 && (ir || !Ii || wt === null), wt = 96 & f ? null : t, Qn = null, xi(t.ctx), ir = !1, ar = ++aa, t.ac !== null && (Na(() => {
      t.ac.abort(Al);
    }), t.ac = null);
    try {
      t.f |= $l;
      var p = (0, t.fn)(), _ = t.deps;
      if (In !== null) {
        var B;
        if (Ja(t, Fn), _ !== null && Fn > 0) for (_.length = Fn + In.length, B = 0; B < In.length; B++) _[Fn + B] = In[B];
        else t.deps = _ = In;
        if (!Lr || 2 & f && t.reactions !== null) for (B = Fn; B < _.length; B++) ((r = (n = _[B]).reactions) != null ? r : n.reactions = []).push(t);
      } else _ !== null && Fn < _.length && (Ja(t, Fn), _.length = Fn);
      if (wi() && Nn !== null && !ir && _ !== null && !(6146 & t.f)) for (B = 0; B < Nn.length; B++) wo(Nn[B], t);
      return u !== null && u !== t && (aa++, Nn !== null && (s === null ? s = Nn : s.push(...Nn))), (t.f & ai) !== 0 && (t.f ^= ai), p;
    } catch (y) {
      return Ns(y);
    } finally {
      t.f ^= $l, In = i, Fn = l, Nn = s, wt = u, Lr = o, Qn = a, xi(c), ir = d, ar = g;
    }
  }
  function Xu(t, n) {
    let r = n.reactions;
    if (r !== null) {
      var i = Vu.call(r, t);
      if (i !== -1) {
        var l = r.length - 1;
        l === 0 ? r = n.reactions = null : (r[i] = r[l], r.pop());
      }
    }
    r === null && 2 & n.f && (In === null || !In.includes(n)) && (zn(n, ii), 768 & n.f || (n.f ^= Dl), Ks(n), Ja(n, 0));
  }
  function Ja(t, n) {
    var r = t.deps;
    if (r !== null) for (var i = n; i < r.length; i++) Xu(t, r[i]);
  }
  function Di(t) {
    var n = t.f;
    if ((n & ki) === 0) {
      zn(t, xn);
      var r = mt, i = Ii;
      mt = t, Ii = !0;
      try {
        (n & Zi) !== 0 ? (function(s) {
          for (var u = s.first; u !== null; ) {
            var o = u.next;
            (u.f & Oa) === 0 && fn(u), u = o;
          }
        })(t) : go(t), uo(t);
        var l = Po(t);
        t.teardown = typeof l == "function" ? l : null, t.wv = mo;
      } finally {
        Ii = i, mt = r;
      }
    }
  }
  async function El() {
    await Promise.resolve(), k();
  }
  function e(t) {
    var n, r = !!(2 & t.f);
    if (wt === null || ir) {
      if (r && t.deps === null && t.effects === null) {
        var i = t, l = i.parent;
        l !== null && (l.f & Xn) === 0 && (i.f ^= Xn);
      }
    } else if (!(mt !== null && (mt.f & ki) !== 0) && !(Qn != null && Qn.includes(t))) {
      var s = wt.deps;
      if ((wt.f & $l) !== 0) t.rv < aa && (t.rv = aa, In === null && s !== null && s[Fn] === t ? Fn++ : In === null ? In = [t] : Lr && In.includes(t) || In.push(t));
      else {
        ((n = wt.deps) != null ? n : wt.deps = []).push(t);
        var u = t.reactions;
        u === null ? t.reactions = [wt] : u.includes(wt) || u.push(wt);
      }
    }
    if (ci) {
      if (Or.has(t)) return Or.get(t);
      if (r) {
        var o = (i = t).v;
        return ((i.f & xn) === 0 && i.reactions !== null || So(i)) && (o = Tl(i)), Or.set(i, o), o;
      }
    } else r && Ha(i = t) && Ys(i);
    if ((t.f & ai) !== 0) throw t.v;
    return t.v;
  }
  function So(t) {
    if (t.v === dn) return !0;
    if (t.deps === null) return !1;
    for (const n of t.deps)
      if (Or.has(n) || 2 & n.f && So(n)) return !0;
    return !1;
  }
  function Zt(t) {
    var n = ir;
    try {
      return ir = !0, t();
    } finally {
      ir = n;
    }
  }
  const ed = -7169;
  function zn(t, n) {
    t.f = t.f & ed | n;
  }
  function Co(t) {
    if (typeof t == "object" && t && !(t instanceof EventTarget)) {
      if (Ir in t) Rl(t);
      else if (!Array.isArray(t)) for (let n in t) {
        const r = t[n];
        typeof r == "object" && r && Ir in r && Rl(r);
      }
    }
  }
  function Rl(t, n = /* @__PURE__ */ new Set()) {
    if (!(typeof t != "object" || t === null || t instanceof EventTarget || n.has(t))) {
      n.add(t), t instanceof Date && t.getTime();
      for (let i in t) try {
        Rl(t[i], n);
      } catch {
      }
      const r = Ta(t);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const i = As(r);
        for (let l in i) {
          const s = i[l].get;
          if (s) try {
            s.call(t);
          } catch {
          }
        }
      }
    }
  }
  const Bo = /* @__PURE__ */ new Set(), Ql = /* @__PURE__ */ new Set();
  function Io(t, n, r, i = {}) {
    function l(s) {
      if (i.capture || la.call(n, s), !s.cancelBubble) return Na(() => r == null ? void 0 : r.call(this, s));
    }
    return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? li(() => {
      n.addEventListener(t, l, i);
    }) : n.addEventListener(t, l, i), l;
  }
  function $n(t) {
    for (var n = 0; n < t.length; n++) Bo.add(t[n]);
    for (var r of Ql) r(t);
  }
  let Do = null;
  function la(t) {
    var n, r = this, i = r.ownerDocument, l = t.type, s = ((n = t.composedPath) == null ? void 0 : n.call(t)) || [], u = s[0] || t.target;
    Do = t;
    var o = 0, a = Do === t && t.__root;
    if (a) {
      var c = s.indexOf(a);
      if (c !== -1 && (r === document || r === window)) return void (t.__root = r);
      var d = s.indexOf(r);
      if (d === -1) return;
      c <= d && (o = c);
    }
    if ((u = s[o] || t.target) !== r) {
      ti(t, "currentTarget", { configurable: !0, get: () => u || i });
      var g = wt, f = mt;
      wn(null), pr(null);
      try {
        for (var p, _ = []; u !== null; ) {
          var B = u.assignedSlot || u.parentNode || u.host || null;
          try {
            var y = u["__" + l];
            if (y != null && (!u.disabled || t.target === u)) if (Ji(y)) {
              var [w, ...S] = y;
              w.apply(u, [t, ...S]);
            } else y.call(u, t);
          } catch ($) {
            p ? _.push($) : p = $;
          }
          if (t.cancelBubble || B === r || B === null) break;
          u = B;
        }
        if (p) {
          for (let $ of _) queueMicrotask(() => {
            throw $;
          });
          throw p;
        }
      } finally {
        t.__root = r, delete t.currentTarget, wn(g), pr(f);
      }
    }
  }
  function Nl(t) {
    var n = document.createElement("template");
    return n.innerHTML = t.replaceAll("<!>", "<!---->"), n.content;
  }
  function On(t, n) {
    var r = mt;
    r.nodes_start === null && (r.nodes_start = t, r.nodes_end = n);
  }
  function D(t, n) {
    var r, i = !!(1 & n), l = !!(2 & n), s = !t.startsWith("<!>");
    return () => {
      if (tt) return On(ft, null), ft;
      r === void 0 && (r = Nl(s ? t : "<!>" + t), i || (r = Dn(r)));
      var u = l || no ? document.importNode(r, !0) : r.cloneNode(!0);
      return i ? On(Dn(u), u.lastChild) : On(u, u), u;
    };
  }
  function td(t, n, r = "svg") {
    var i, l = `<${r}>${t.startsWith("<!>") ? "<!>" + t : t}</${r}>`;
    return () => {
      if (tt) return On(ft, null), ft;
      if (!i) {
        var s = Nl(l);
        i = Dn(Dn(s));
      }
      var u = i.cloneNode(!0);
      return On(u, u), u;
    };
  }
  function Ln(t, n) {
    return td(t, 0, "svg");
  }
  function Wn(t = "") {
    if (!tt) {
      var n = tr(t + "");
      return On(n, n), n;
    }
    var r = ft;
    return r.nodeType !== 3 && (r.before(r = tr()), gn(r)), On(r, r), r;
  }
  function De() {
    if (tt) return On(ft, null), ft;
    var t = document.createDocumentFragment(), n = document.createComment(""), r = tr();
    return t.append(n, r), On(n, r), t;
  }
  function v(t, n) {
    if (tt) return mt.nodes_end = ft, void er();
    t !== null && t.before(n);
  }
  function nd(t) {
    return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
  }
  const rd = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function id(t) {
    return rd.includes(t);
  }
  const ad = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function ld(t) {
    var n;
    return t = t.toLowerCase(), (n = ad[t]) != null ? n : t;
  }
  const sd = ["touchstart", "touchmove"];
  function od(t) {
    return sd.includes(t);
  }
  const cd = ["textarea", "script", "style", "title"];
  function yt(t, n) {
    var r, i = n == null ? "" : typeof n == "object" ? n + "" : n;
    i !== ((r = t.__t) != null ? r : t.__t = t.nodeValue) && (t.__t = i, t.nodeValue = i + "");
  }
  function zo(t, n) {
    return $o(t, n);
  }
  function ud(t, n) {
    var r;
    Ol(), n.intro = (r = n.intro) != null && r;
    const i = n.target, l = tt, s = ft;
    try {
      for (var u = Dn(i); u && (u.nodeType !== 8 || u.data !== "["); ) u = nr(u);
      if (!u) throw ei;
      Bn(!0), gn(u);
      const o = $o(t, { ...n, anchor: u });
      return Bn(!1), o;
    } catch (o) {
      if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/"))) throw o;
      return o !== ei && console.warn("Failed to hydrate: ", o), n.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), Ol(), ao(i), Bn(!1), zo(t, n);
    } finally {
      Bn(l), gn(s);
    }
  }
  const zi = /* @__PURE__ */ new Map();
  function $o(t, { target: n, anchor: r, props: i = {}, events: l, context: s, intro: u = !0 }) {
    Ol();
    var o = /* @__PURE__ */ new Set(), a = (g) => {
      for (var f = 0; f < g.length; f++) {
        var p = g[f];
        if (!o.has(p)) {
          o.add(p);
          var _ = od(p);
          n.addEventListener(p, la, { passive: _ });
          var B = zi.get(p);
          B === void 0 ? (document.addEventListener(p, la, { passive: _ }), zi.set(p, 1)) : zi.set(p, B + 1);
        }
      }
    };
    a(Il(Bo)), Ql.add(a);
    var c = void 0, d = (function(g) {
      oi.ensure();
      const f = rr(524352, g, !0);
      return (p = {}) => new Promise((_) => {
        p.outro ? $r(f, () => {
          fn(f), _(void 0);
        }) : (fn(f), _(void 0));
      });
    })(() => {
      var g = r != null ? r : n.appendChild(tr());
      return (function(f, p, _) {
        new Ju(f, p, _);
      })(g, { pending: () => {
      } }, (f) => {
        if (s && (Je({}), Xt.c = s), l && (i.$$events = l), tt && On(f, null), c = t(f, i) || {}, tt && (mt.nodes_end = ft, ft === null || ft.nodeType !== 8 || ft.data !== "]")) throw Ki(), ei;
        s && Ze();
      }), () => {
        var f;
        for (var p of o) {
          n.removeEventListener(p, la);
          var _ = zi.get(p);
          --_ === 0 ? (document.removeEventListener(p, la), zi.delete(p)) : zi.set(p, _);
        }
        Ql.delete(a), g !== r && ((f = g.parentNode) == null || f.removeChild(g));
      };
    });
    return Wl.set(c, d), c;
  }
  let Wl = /* @__PURE__ */ new WeakMap();
  function Ao(t, n, ...r) {
    var i, l = t, s = ri;
    zr(() => {
      s !== (s = n()) && (i && (fn(i), i = null), i = hn(() => s(l, ...r)));
    }, mi), tt && (l = ft);
  }
  function $i(t) {
    var n, r, i;
    Xt === null && Fs(), yi && Xt.l !== null ? (n = Xt, i = n.l, (r = i.u) != null ? r : i.u = { a: [], b: [], m: [] }).m.push(t) : Xe(() => {
      const l = Zt(t);
      if (typeof l == "function") return l;
    });
  }
  function T(t, n, r = !1) {
    tt && er();
    var i = t, l = null, s = null, u = dn, o = !1;
    const a = (g, f = !0) => {
      o = !0, d(f, g);
    };
    function c() {
      var g = u ? l : s, f = u ? s : l;
      g && Ua(g), f && $r(f, () => {
        u ? s = null : l = null;
      });
    }
    const d = (g, f) => {
      if (u === (u = g)) return;
      let p = !1;
      if (tt) {
        const B = Os(i) === Va;
        !!u === B && (gn(i = La()), Bn(!1), p = !0);
      }
      var _ = i;
      u ? l != null || (l = f && hn(() => f(_))) : s != null || (s = f && hn(() => f(_))), c(), p && Bn(!0);
    };
    zr(() => {
      o = !1, n(a), o || d(null, null);
    }, r ? mi : 0), tt && (i = ft);
  }
  function Ue(t, n, r) {
    tt && er();
    var i, l, s = t, u = dn, o = wi() ? ju : ja;
    function a() {
      i && $r(i), i = l;
    }
    zr(() => {
      if (o(u, u = n())) {
        var c = s;
        l = hn(() => r(c)), a();
      }
    }), tt && (s = ft);
  }
  function jr(t, n) {
    return n;
  }
  function Ut(t, n, r, i, l, s = null) {
    var u = t, o = { flags: n, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & n) {
      var a = t;
      u = tt ? gn(Dn(a)) : a.appendChild(tr());
    }
    tt && er();
    var c, d, g = null, f = !1, p = /* @__PURE__ */ new Map(), _ = Gl(() => {
      var y = r();
      return Ji(y) ? y : y == null ? [] : Il(y);
    });
    function B() {
      (function(y, w, S, $, A, I, q, L, z) {
        var ce, N, re, Q, Y, K, U, J, Z, V, ee = !!(8 & q), ye = !!(3 & q), F = w.length, b = S.items, C = S.first, O = C, j = null, ie = [], oe = [];
        if (ee) for (V = 0; V < F; V += 1) J = L(U = w[V], V), (Z = b.get(J)) !== void 0 && ((ce = Z.a) == null || ce.measure(), (K != null ? K : K = /* @__PURE__ */ new Set()).add(Z));
        for (V = 0; V < F; V += 1) if (J = L(U = w[V], V), (Z = b.get(J)) !== void 0) {
          if (ye && dd(Z, U, V, q), (Z.e.f & dr) !== 0 && (Ua(Z.e), ee && ((N = Z.a) == null || N.unfix(), (K != null ? K : K = /* @__PURE__ */ new Set()).delete(Z))), Z !== O) {
            if (Y !== void 0 && Y.has(Z)) {
              if (ie.length < oe.length) {
                var M, ne = oe[0];
                j = ne.prev;
                var me = ie[0], he = ie[ie.length - 1];
                for (M = 0; M < ie.length; M += 1) Ul(ie[M], ne, A);
                for (M = 0; M < oe.length; M += 1) Y.delete(oe[M]);
                hr(S, me.prev, he.next), hr(S, j, me), hr(S, he, ne), O = ne, j = he, V -= 1, ie = [], oe = [];
              } else Y.delete(Z), Ul(Z, O, A), hr(S, Z.prev, Z.next), hr(S, Z, j === null ? S.first : j.next), hr(S, j, Z), j = Z;
              continue;
            }
            for (ie = [], oe = []; O !== null && O.k !== J; ) (O.e.f & dr) === 0 && (Y != null ? Y : Y = /* @__PURE__ */ new Set()).add(O), oe.push(O), O = O.next;
            if (O === null) continue;
            Z = O;
          }
          ie.push(Z), j = Z, O = Z.next;
        } else {
          var E = $.get(J);
          if (E !== void 0) {
            $.delete(J), b.set(J, E);
            var ae = j ? j.next : O;
            hr(S, j, E), hr(S, E, ae), Ul(E, ae, A), j = E;
          } else
            j = qo(O ? O.e.nodes_start : A, S, j, j === null ? S.first : j.next, U, J, V, I, q, z);
          b.set(J, j), ie = [], oe = [], O = j.next;
        }
        if (O !== null || Y !== void 0) {
          for (var R = Y === void 0 ? [] : Il(Y); O !== null; ) (O.e.f & dr) === 0 && R.push(O), O = O.next;
          var le = R.length;
          if (le > 0) {
            var Se = 4 & q && F === 0 ? A : null;
            if (ee) {
              for (V = 0; V < le; V += 1) (re = R[V].a) == null || re.measure();
              for (V = 0; V < le; V += 1) (Q = R[V].a) == null || Q.fix();
            }
            (function(ge, Ve, ue) {
              for (var Be = ge.items, te = [], _e = Ve.length, qe = 0; qe < _e; qe++) jl(Ve[qe].e, te, !0);
              var Ie = _e > 0 && te.length === 0 && ue !== null;
              if (Ie) {
                var be = ue.parentNode;
                ao(be), be.append(ue), Be.clear(), hr(ge, Ve[0].prev, Ve[_e - 1].next);
              }
              fo(te, () => {
                for (var ze = 0; ze < _e; ze++) {
                  var Oe = Ve[ze];
                  Ie || (Be.delete(Oe.k), hr(ge, Oe.prev, Oe.next)), fn(Oe.e, !Ie);
                }
              });
            })(S, R, Se);
          }
        }
        ee && li(() => {
          var ge;
          if (K !== void 0) for (Z of K) (ge = Z.a) == null || ge.apply();
        });
        for (var X of (y.first = S.first && S.first.e, y.last = j && j.e, $.values())) fn(X.e);
        $.clear();
      })(d, c, o, p, u, l, n, i, r), s !== null && (c.length === 0 ? g ? Ua(g) : g = hn(() => s(u)) : g !== null && $r(g, () => {
        g = null;
      }));
    }
    zr(() => {
      d != null || (d = mt);
      var y = (c = e(_)).length;
      if (f && y === 0) return;
      f = y === 0;
      let w = !1;
      if (tt && Os(u) === Va != (y === 0) && (gn(u = La()), Bn(!1), w = !0), tt) {
        for (var S, $ = null, A = 0; A < y; A++) {
          if (ft.nodeType === 8 && ft.data === "]") {
            u = ft, w = !0, Bn(!1);
            break;
          }
          var I = c[A], q = i(I, A);
          S = qo(ft, o, $, null, I, q, A, l, n, r), o.items.set(q, S), $ = S;
        }
        y > 0 && gn(La());
      }
      tt ? y === 0 && s && (g = hn(() => s(u))) : B(), w && Bn(!0), e(_);
    }), tt && (u = ft);
  }
  function dd(t, n, r, i) {
    1 & i && Bi(t.v, n), 2 & i ? Bi(t.i, r) : t.i = r;
  }
  function qo(t, n, r, i, l, s, u, o, a, c, d) {
    var g = 1 & a ? 16 & a ? Dr(l) : Fl(l, !1, !1) : l, f = 2 & a ? Dr(u) : u, p = { i: f, v: g, k: s, a: null, e: null, prev: r, next: i };
    try {
      return t === null && document.createDocumentFragment().append(t = tr()), p.e = hn(() => o(t, g, f, c), tt), p.e.prev = r && r.e, p.e.next = i && i.e, r === null ? d || (n.first = p) : (r.next = p, r.e.next = p.e), i !== null && (i.prev = p, i.e.prev = p.e), p;
    } finally {
    }
  }
  function Ul(t, n, r) {
    for (var i = t.next ? t.next.e.nodes_start : r, l = n ? n.e.nodes_start : r, s = t.e.nodes_start; s !== null && s !== i; ) {
      var u = nr(s);
      l.before(s), s = u;
    }
  }
  function hr(t, n, r) {
    n === null ? t.first = r : (n.next = r, n.e.next = r && r.e), r !== null && (r.prev = n, r.e.prev = n && n.e);
  }
  function Me(t, n, r = !1, i = !1, l = !1) {
    var s = t, u = "";
    fe(() => {
      var o, a = mt;
      if (u !== (u = (o = n()) != null ? o : "")) {
        if (a.nodes_start !== null && (po(a.nodes_start, a.nodes_end), a.nodes_start = a.nodes_end = null), u !== "") {
          if (tt) {
            ft.data;
            for (var c = er(), d = c; c !== null && (c.nodeType !== 8 || c.data !== ""); ) d = c, c = nr(c);
            if (c === null) throw Ki(), ei;
            return On(ft, d), void (s = gn(c));
          }
          var g = u + "";
          r ? g = `<svg>${g}</svg>` : i && (g = `<math>${g}</math>`);
          var f = Nl(g);
          if ((r || i) && (f = Dn(f)), On(Dn(f), f.lastChild), r || i) for (; Dn(f); ) s.before(Dn(f));
          else s.before(f);
        }
      } else tt && er();
    });
  }
  function Mo(t, n, r, i, l) {
    var s;
    tt && er();
    var u = (s = n.$$slots) == null ? void 0 : s[r], o = !1;
    u === !0 && (u = n.children, o = !0), u === void 0 || u(t, o ? () => i : i);
  }
  function gd(t, n, r, i, l, s) {
    let u = tt;
    var o, a;
    tt && er();
    var c = null;
    tt && ft.nodeType === 1 && (c = ft, er());
    var d, g = tt ? ft : t;
    zr(() => {
      const f = n() || null;
      var p = f === "svg" ? "http://www.w3.org/2000/svg" : null;
      f !== o && (d && (f === null ? $r(d, () => {
        d = null, a = null;
      }) : f === a ? Ua(d) : fn(d)), f && f !== a && (d = hn(() => {
        if (On(c = tt ? c : p ? document.createElementNS(p, f) : document.createElement(f), c), i) {
          tt && (B = f, cd.includes(B)) && c.append(document.createComment(""));
          var _ = tt ? Dn(c) : c.appendChild(tr());
          tt && (_ === null ? Bn(!1) : gn(_)), i(c, _);
        }
        var B;
        mt.nodes_end = c, g.before(c);
      })), (o = f) && (a = o));
    }, mi), u && (Bn(!0), gn(g));
  }
  function Hl(t, n, r) {
    Wa(() => {
      var i = Zt(() => n(t, r == null ? void 0 : r()) || {});
      if (r && (i != null && i.update)) {
        var l = !1, s = {};
        ia(() => {
          var u = r();
          Co(u), l && ja(s, u) && (s = u, i.update(u));
        }), l = !0;
      }
      if (i != null && i.destroy) return () => i.destroy();
    });
  }
  function pd(t, n) {
    var r, i = void 0;
    zr(() => {
      i !== (i = n()) && (r && (fn(r), r = null), i && (r = hn(() => {
        Wa(() => i(t));
      })));
    });
  }
  function Vo(t) {
    var n, r, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var l = t.length;
      for (n = 0; n < l; n++) t[n] && (r = Vo(t[n])) && (i && (i += " "), i += r);
    } else for (r in t) t[r] && (i && (i += " "), i += r);
    return i;
  }
  function sa(t) {
    return typeof t == "object" ? (function() {
      for (var n, r, i = 0, l = "", s = arguments.length; i < s; i++) (n = arguments[i]) && (r = Vo(n)) && (l && (l += " "), l += r);
      return l;
    })(t) : t != null ? t : "";
  }
  const Go = [...` 	
\r\f \v\uFEFF`];
  function To(t, n = !1) {
    var r = n ? " !important;" : ";", i = "";
    for (var l in t) {
      var s = t[l];
      s != null && s !== "" && (i += " " + l + ": " + s + r);
    }
    return i;
  }
  function Jl(t) {
    return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
  }
  function qt(t, n, r, i, l, s) {
    var u = t.__className;
    if (tt || u !== r || u === void 0) {
      var o = (function(d, g, f) {
        var p = d == null ? "" : "" + d;
        if (g && (p = p ? p + " " + g : g), f) {
          for (var _ in f) if (f[_]) p = p ? p + " " + _ : _;
          else if (p.length) for (var B = _.length, y = 0; (y = p.indexOf(_, y)) >= 0; ) {
            var w = y + B;
            y !== 0 && !Go.includes(p[y - 1]) || w !== p.length && !Go.includes(p[w]) ? y = w : p = (y === 0 ? "" : p.substring(0, y)) + p.substring(w + 1);
          }
        }
        return p === "" ? null : p;
      })(r, i, s);
      tt && o === t.getAttribute("class") || (o == null ? t.removeAttribute("class") : n ? t.className = o : t.setAttribute("class", o)), t.__className = r;
    } else if (s && l !== s) for (var a in s) {
      var c = !!s[a];
      l != null && c === !!l[a] || t.classList.toggle(a, c);
    }
    return s;
  }
  function Zl(t, n = {}, r, i) {
    for (var l in r) {
      var s = r[l];
      n[l] !== s && (r[l] == null ? t.style.removeProperty(l) : t.style.setProperty(l, s, i));
    }
  }
  function Ht(t, n, r, i) {
    var l = t.__style;
    if (tt || l !== n) {
      var s = (function(u, o) {
        if (o) {
          var a, c, d = "";
          if (Array.isArray(o) ? (a = o[0], c = o[1]) : a = o, u) {
            u = String(u).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var g = !1, f = 0, p = !1, _ = [];
            a && _.push(...Object.keys(a).map(Jl)), c && _.push(...Object.keys(c).map(Jl));
            var B = 0, y = -1;
            const A = u.length;
            for (var w = 0; w < A; w++) {
              var S = u[w];
              if (p ? S === "/" && u[w - 1] === "*" && (p = !1) : g ? g === S && (g = !1) : S === "/" && u[w + 1] === "*" ? p = !0 : S === '"' || S === "'" ? g = S : S === "(" ? f++ : S === ")" && f--, !p && g === !1 && f === 0) {
                if (S === ":" && y === -1) y = w;
                else if (S === ";" || w === A - 1) {
                  if (y !== -1) {
                    var $ = Jl(u.substring(B, y).trim());
                    _.includes($) || (S !== ";" && w++, d += " " + u.substring(B, w).trim() + ";");
                  }
                  B = w + 1, y = -1;
                }
              }
            }
          }
          return a && (d += To(a)), c && (d += To(c, !0)), (d = d.trim()) === "" ? null : d;
        }
        return u == null ? null : String(u);
      })(n, i);
      tt && s === t.getAttribute("style") || (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = n;
    } else i && (Array.isArray(i) ? (Zl(t, r == null ? void 0 : r[0], i[0]), Zl(t, r == null ? void 0 : r[1], i[1], "important")) : Zl(t, r, i));
    return i;
  }
  function oa(t, n, r = !1) {
    if (t.multiple) {
      if (n == null) return;
      if (!Ji(n)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var i of t.options) i.selected = n.includes(Fo(i));
    } else {
      for (i of t.options)
        if (Ku(Fo(i), n)) return void (i.selected = !0);
      r && n === void 0 || (t.selectedIndex = -1);
    }
  }
  function Kl(t) {
    var n = new MutationObserver(() => {
      oa(t, t.__value);
    });
    n.observe(t, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), Ll(() => {
      n.disconnect();
    });
  }
  function Fo(t) {
    return "__value" in t ? t.__value : t.value;
  }
  const ca = Symbol("class"), ua = Symbol("style"), Oo = Symbol("is custom element"), Lo = Symbol("is html");
  function Er(t) {
    if (tt) {
      var n, r = !1, i = () => {
        if (!r) {
          if (r = !0, t.hasAttribute("value")) {
            var l = t.value;
            Pe(t, "value", null), t.value = l;
          }
          if (t.hasAttribute("checked")) {
            var s = t.checked;
            Pe(t, "checked", null), t.checked = s;
          }
        }
      };
      t.__on_r = i, n = i, Pi.length === 0 && Ru(Qs), Pi.push(n), so();
    }
  }
  function Ai(t, n) {
    var r = Ka(t);
    r.value !== (r.value = n != null ? n : void 0) && (t.value !== n || n === 0 && t.nodeName === "PROGRESS") && (t.value = n != null ? n : "");
  }
  function Za(t, n) {
    var r = Ka(t);
    r.checked !== (r.checked = n != null ? n : void 0) && (t.checked = n);
  }
  function hd(t, n) {
    n ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
  }
  function Pe(t, n, r, i) {
    var l = Ka(t);
    tt && (l[n] = t.getAttribute(n), n === "src" || n === "srcset" || n === "href" && t.nodeName === "LINK") || l[n] !== (l[n] = r) && (n === "loading" && (t[Lu] = r), r == null ? t.removeAttribute(n) : typeof r != "string" && Eo(t).includes(n) ? t[n] = r : t.setAttribute(n, r));
  }
  function fd(t, n, r = [], i = [], l, s = !1, u = !1) {
    Js(r, i, (o) => {
      var a = void 0, c = {}, d = t.nodeName === "SELECT", g = !1;
      if (zr(() => {
        var p = n(...o.map(e)), _ = (function(y, w, S, $, A = !1) {
          if (tt && A && y.tagName === "INPUT") {
            var I = y;
            (I.type === "checkbox" ? "defaultChecked" : "defaultValue") in S || Er(I);
          }
          var q = Ka(y), L = q[Oo], z = !q[Lo];
          let ce = tt && L;
          ce && Bn(!1);
          var N = w || {}, re = y.tagName === "OPTION";
          for (var Q in w) Q in S || (S[Q] = null);
          S.class ? S.class = sa(S.class) : S[ca] && (S.class = null), S[ua] && (S.style != null || (S.style = null));
          var Y = Eo(y);
          for (const ee in S) {
            let ye = S[ee];
            if (re && ee === "value" && ye == null) y.value = y.__value = "", N[ee] = ye;
            else if (ee !== "class") if (ee !== "style") {
              var K = N[ee];
              if (ye !== K || ye === void 0 && y.hasAttribute(ee)) {
                N[ee] = ye;
                var U = ee[0] + ee[1];
                if (U !== "$$") if (U === "on") {
                  const F = {}, b = "$$" + ee;
                  let C = ee.slice(2);
                  var J = id(C);
                  if (nd(C) && (C = C.slice(0, -7), F.capture = !0), !J && K) {
                    if (ye != null) continue;
                    y.removeEventListener(C, N[b], F), N[b] = null;
                  }
                  if (ye != null) if (J) y[`__${C}`] = ye, $n([C]);
                  else {
                    let O = function(j) {
                      N[ee].call(this, j);
                    };
                    N[b] = Io(C, y, O, F);
                  }
                  else J && (y[`__${C}`] = void 0);
                } else if (ee === "style") Pe(y, ee, ye);
                else if (ee === "autofocus") Yu(y, !!ye);
                else if (L || ee !== "__value" && (ee !== "value" || ye == null)) if (ee === "selected" && re) hd(y, ye);
                else {
                  var Z = ee;
                  z || (Z = ld(Z));
                  var V = Z === "defaultValue" || Z === "defaultChecked";
                  if (ye != null || L || V) V || Y.includes(Z) && (L || typeof ye != "string") ? (y[Z] = ye, Z in q && (q[Z] = dn)) : typeof ye != "function" && Pe(y, Z, ye);
                  else if (q[ee] = null, Z === "value" || Z === "checked") {
                    let F = y;
                    const b = w === void 0;
                    if (Z === "value") {
                      let C = F.defaultValue;
                      F.removeAttribute(Z), F.defaultValue = C, F.value = F.__value = b ? C : null;
                    } else {
                      let C = F.defaultChecked;
                      F.removeAttribute(Z), F.defaultChecked = C, F.checked = !!b && C;
                    }
                  } else y.removeAttribute(ee);
                }
                else y.value = y.__value = ye;
              }
            } else Ht(y, ye, w == null ? void 0 : w[ua], S[ua]), N[ee] = ye, N[ua] = S[ua];
            else qt(y, y.namespaceURI === "http://www.w3.org/1999/xhtml", ye, $, w == null ? void 0 : w[ca], S[ca]), N[ee] = ye, N[ca] = S[ca];
          }
          return ce && Bn(!0), N;
        })(t, a, p, l, s, u);
        g && d && "value" in p && oa(t, p.value);
        for (let y of Object.getOwnPropertySymbols(c)) p[y] || fn(c[y]);
        for (let y of Object.getOwnPropertySymbols(p)) {
          var B = p[y];
          y.description !== "@attach" || a && B === a[y] || (c[y] && fn(c[y]), c[y] = hn(() => pd(t, () => B))), _[y] = B;
        }
        a = _;
      }), d) {
        var f = t;
        Wa(() => {
          oa(f, a.value, !0), Kl(f);
        });
      }
      g = !0;
    });
  }
  function Ka(t) {
    var n;
    return (n = t.__attributes) != null ? n : t.__attributes = { [Oo]: t.nodeName.includes("-"), [Lo]: t.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var jo = /* @__PURE__ */ new Map();
  function Eo(t) {
    var n, r = t.getAttribute("is") || t.nodeName, i = jo.get(r);
    if (i) return i;
    jo.set(r, i = []);
    for (var l = t, s = Element.prototype; s !== l; ) {
      for (var u in n = As(l)) n[u].set && i.push(u);
      l = Ta(l);
    }
    return i;
  }
  function bd(t, n, r = n) {
    var i = /* @__PURE__ */ new WeakSet();
    (function(l, s, u, o = u) {
      l.addEventListener(s, () => Na(u));
      const a = l.__on_r;
      l.__on_r = a ? () => {
        a(), o(!0);
      } : () => o(!0), so();
    })(t, "input", async (l) => {
      var s = l ? t.defaultValue : t.value;
      if (s = Yl(t) ? Xl(s) : s, r(s), nn !== null && i.add(nn), await El(), s !== (s = n())) {
        var u = t.selectionStart, o = t.selectionEnd;
        t.value = s != null ? s : "", o !== null && (t.selectionStart = u, t.selectionEnd = Math.min(o, t.value.length));
      }
    }), (tt && t.defaultValue !== t.value || Zt(n) == null && t.value) && (r(Yl(t) ? Xl(t.value) : t.value), nn !== null && i.add(nn)), ia(() => {
      var l = n();
      if (t === document.activeElement) {
        var s = ta != null ? ta : nn;
        if (i.has(s)) return;
      }
      Yl(t) && l === Xl(t.value) || (t.type !== "date" || l || t.value) && l !== t.value && (t.value = l != null ? l : "");
    });
  }
  function Yl(t) {
    var n = t.type;
    return n === "number" || n === "range";
  }
  function Xl(t) {
    return t === "" ? null : +t;
  }
  function Ro(t, n) {
    return t === n || (t == null ? void 0 : t[Ir]) === n;
  }
  function es(t = {}, n, r, i) {
    return Wa(() => {
      var l, s;
      return ia(() => {
        l = s, s = [], Zt(() => {
          t !== r(...s) && (n(t, ...s), l && Ro(r(...l), t) && n(null, ...l));
        });
      }), () => {
        li(() => {
          s && Ro(r(...s), t) && n(null, ...s);
        });
      };
    }), t;
  }
  function Qo(t, n) {
    if (t.l.s) for (const r of t.l.s) e(r);
    n();
  }
  function No(t, n, r) {
    if (t == null) return n(void 0), ri;
    const i = Zt(() => t.subscribe(n, r));
    return i.unsubscribe ? () => i.unsubscribe() : i;
  }
  const qi = [];
  function Rr(t, n = ri) {
    let r = null;
    const i = /* @__PURE__ */ new Set();
    function l(u) {
      if (ja(t, u) && (t = u, r)) {
        const o = !qi.length;
        for (const a of i) a[1](), qi.push(a, t);
        if (o) {
          for (let a = 0; a < qi.length; a += 2) qi[a][0](qi[a + 1]);
          qi.length = 0;
        }
      }
    }
    function s(u) {
      l(u(t));
    }
    return { set: l, update: s, subscribe: function(u, o = ri) {
      const a = [u, o];
      return i.add(a), i.size === 1 && (r = n(l, s) || ri), u(t), () => {
        i.delete(a), i.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let Wo, Ya = !1, ts = Symbol();
  function $e(t, n, r) {
    var i;
    const l = (i = r[n]) != null ? i : r[n] = { store: null, source: Fl(void 0), unsubscribe: ri };
    if (l.store !== t && !(ts in r)) if (l.unsubscribe(), l.store = t != null ? t : null, t == null) l.source.v = void 0, l.unsubscribe = ri;
    else {
      var s = !0;
      l.unsubscribe = No(t, (u) => {
        s ? l.source.v = u : W(l.source, u);
      }), s = !1;
    }
    return t && ts in r ? (function(u) {
      let o;
      return No(u, (a) => o = a)(), o;
    })(t) : e(l.source);
  }
  function Pt() {
    const t = {};
    return [t, function() {
      Ll(() => {
        for (var n in t)
          t[n].unsubscribe();
        ti(t, ts, { enumerable: !1, value: !0 });
      });
    }];
  }
  function m(t, n, r, i) {
    var l, s, u, o, a = !yi || !!(2 & r), c = !!(8 & r), d = !!(16 & r), g = i, f = !0, p = () => (f && (f = !1, g = d ? Zt(i) : i), g);
    if (c) {
      var _ = Ir in t || Ts in t;
      u = (s = (l = ni(t, n)) == null ? void 0 : l.set) != null ? s : _ && n in t ? (I) => t[n] = I : void 0;
    }
    var B, y = !1;
    if (c ? [o, y] = (function(I) {
      var q = Ya;
      try {
        return Ya = !1, [I(), Ya];
      } finally {
        Ya = q;
      }
    })(() => t[n]) : o = t[n], o === void 0 && i !== void 0 && (o = p(), u && (a && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), u(o))), B = a ? () => {
      var I = t[n];
      return I === void 0 ? p() : (f = !0, I);
    } : () => {
      var I = t[n];
      return I !== void 0 && (g = void 0), I === void 0 ? g : I;
    }, a && !(4 & r)) return B;
    if (u) {
      var w = t.$$legacy;
      return function(I, q) {
        return arguments.length > 0 ? (a && q && !w && !y || u(q ? B() : I), I) : B();
      };
    }
    var S = !1, $ = (1 & r ? ra : Gl)(() => (S = !1, B()));
    c && e($);
    var A = mt;
    return function(I, q) {
      if (arguments.length > 0) {
        const L = q ? e($) : a && c ? at(I) : I;
        return W($, L), S = !0, g !== void 0 && (g = L), I;
      }
      return ci && S || (A.f & ki) !== 0 ? $.v : e($);
    };
  }
  class vd {
    constructor(n) {
      var r, i;
      ht(this, Vr), ht(this, Yn);
      var l = /* @__PURE__ */ new Map(), s = (o, a) => {
        var c = Fl(a, !1, !1);
        return l.set(o, c), c;
      };
      const u = new Proxy({ ...n.props || {}, $$events: {} }, { get(o, a) {
        var c;
        return e((c = l.get(a)) != null ? c : s(a, Reflect.get(o, a)));
      }, has(o, a) {
        var c;
        return a === Ts || (e((c = l.get(a)) != null ? c : s(a, Reflect.get(o, a))), Reflect.has(o, a));
      }, set(o, a, c) {
        var d;
        return W((d = l.get(a)) != null ? d : s(a, c), c), Reflect.set(o, a, c);
      } });
      gt(this, Yn, (n.hydrate ? ud : zo)(n.component, { target: n.target, anchor: n.anchor, props: u, context: n.context, intro: (r = n.intro) != null && r, recover: n.recover })), (i = n == null ? void 0 : n.props) != null && i.$$host && n.sync !== !1 || k(), gt(this, Vr, u.$$events);
      for (const o of Object.keys(de(this, Yn))) o !== "$set" && o !== "$destroy" && o !== "$on" && ti(this, o, { get() {
        return de(this, Yn)[o];
      }, set(a) {
        de(this, Yn)[o] = a;
      }, enumerable: !0 });
      de(this, Yn).$set = (o) => {
        Object.assign(u, o);
      }, de(this, Yn).$destroy = () => {
        (function(o, a) {
          const c = Wl.get(o);
          c ? (Wl.delete(o), c(a)) : Promise.resolve();
        })(de(this, Yn));
      };
    }
    $set(n) {
      de(this, Yn).$set(n);
    }
    $on(n, r) {
      de(this, Vr)[n] = de(this, Vr)[n] || [];
      const i = (...l) => r.call(this, ...l);
      return de(this, Vr)[n].push(i), () => {
        de(this, Vr)[n] = de(this, Vr)[n].filter((l) => l !== i);
      };
    }
    $destroy() {
      de(this, Yn).$destroy();
    }
  }
  function Xa(t, n, r, i) {
    var l;
    const s = (l = r[t]) == null ? void 0 : l.type;
    if (n = s === "Boolean" && typeof n != "boolean" ? n != null : n, !i || !r[t]) return n;
    if (i === "toAttribute") switch (s) {
      case "Object":
      case "Array":
        return n == null ? null : JSON.stringify(n);
      case "Boolean":
        return n ? "" : null;
      case "Number":
        return n == null ? null : n;
      default:
        return n;
    }
    else switch (s) {
      case "Object":
      case "Array":
        return n && JSON.parse(n);
      case "Boolean":
      default:
        return n;
      case "Number":
        return n != null ? +n : n;
    }
  }
  function Le(t, n, r, i, l, s) {
    let u = class extends Wo {
      constructor() {
        super(t, r, l), this.$$p_d = n;
      }
      static get observedAttributes() {
        return Ga(n).map((o) => (n[o].attribute || o).toLowerCase());
      }
    };
    return Ga(n).forEach((o) => {
      ti(u.prototype, o, { get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      }, set(a) {
        var c;
        a = Xa(o, a, n), this.$$d[o] = a;
        var d = this.$$c;
        d && ((c = ni(d, o)) != null && c.get ? d[o] = a : d.$set({ [o]: a }));
      } });
    }), i.forEach((o) => {
      ti(u.prototype, o, { get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[o];
      } });
    }), s && (u = s(u)), t.element = u, u;
  }
  Vr = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (Wo = class extends HTMLElement {
    constructor(t, n, r) {
      super(), on(this, "$$ctor"), on(this, "$$s"), on(this, "$$c"), on(this, "$$cn", !1), on(this, "$$d", {}), on(this, "$$r", !1), on(this, "$$p_d", {}), on(this, "$$l", {}), on(this, "$$l_u", /* @__PURE__ */ new Map()), on(this, "$$me"), this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(t, n, r) {
      if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
        const i = this.$$c.$on(t, n);
        this.$$l_u.set(n, i);
      }
      super.addEventListener(t, n, r);
    }
    removeEventListener(t, n, r) {
      if (super.removeEventListener(t, n, r), this.$$c) {
        const i = this.$$l_u.get(n);
        i && (i(), this.$$l_u.delete(n));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let n = function(l) {
          return (s) => {
            const u = document.createElement("slot");
            l !== "default" && (u.name = l), v(s, u);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, i = (function(l) {
          const s = {};
          return l.childNodes.forEach((u) => {
            s[u.slot || "default"] = !0;
          }), s;
        })(this);
        for (const l of this.$$s) l in i && (l !== "default" || this.$$d.children ? r[l] = n(l) : (this.$$d.children = n(l), r.default = !0));
        for (const l of this.attributes) {
          const s = this.$$g_p(l.name);
          s in this.$$d || (this.$$d[s] = Xa(s, l.value, this.$$p_d, "toProp"));
        }
        for (const l in this.$$p_d) l in this.$$d || this[l] === void 0 || (this.$$d[l] = this[l], delete this[l]);
        this.$$c = (t = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new vd(t)), this.$$me = (function(l) {
          oi.ensure();
          const s = rr(524352, l, !0);
          return () => {
            fn(s);
          };
        })(() => {
          ia(() => {
            var l;
            this.$$r = !0;
            for (const s of Ga(this.$$c)) {
              if (!((l = this.$$p_d[s]) != null && l.reflect)) continue;
              this.$$d[s] = this.$$c[s];
              const u = Xa(s, this.$$d[s], this.$$p_d, "toAttribute");
              u == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, u);
            }
            this.$$r = !1;
          });
        });
        for (const l in this.$$l) for (const s of this.$$l[l]) {
          const u = this.$$c.$on(l, s);
          this.$$l_u.set(s, u);
        }
        this.$$l = {};
      }
      var t;
    }
    attributeChangedCallback(t, n, r) {
      var i;
      this.$$r || (t = this.$$g_p(t), this.$$d[t] = Xa(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(t) {
      return Ga(this.$$p_d).find((n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t) || t;
    }
  });
  var _d = D("<span> </span>"), kd = D("<div></div>");
  function Qr(t, n) {
    Je(n, !0);
    const r = m(n, "product", 7), i = m(n, "class", 7, ""), l = h(() => r().options.map((o) => o.name));
    var s = { get product() {
      return r();
    }, set product(o) {
      r(o), k();
    }, get class() {
      return i();
    }, set class(o = "") {
      i(o), k();
    } }, u = kd();
    return Ut(u, 21, () => e(l), jr, (o, a) => {
      var c = _d(), d = P(c, !0);
      x(c), fe(() => yt(d, e(a))), v(o, c);
    }), x(u), fe(() => qt(u, 1, sa(["kaching-bundles__bar-variant-names", i()]))), v(t, u), Ze(s);
  }
  Le(Qr, { product: {}, class: {} }, [], [], !0);
  const el = Math.min, ui = Math.max, tl = Math.round, nl = Math.floor, fr = (t) => ({ x: t, y: t }), md = { left: "right", right: "left", bottom: "top", top: "bottom" }, yd = { start: "end", end: "start" };
  function Uo(t, n, r) {
    return ui(t, el(n, r));
  }
  function rl(t, n) {
    return typeof t == "function" ? t(n) : t;
  }
  function di(t) {
    return t.split("-")[0];
  }
  function il(t) {
    return t.split("-")[1];
  }
  function Ho(t) {
    return t === "x" ? "y" : "x";
  }
  function Jo(t) {
    return t === "y" ? "height" : "width";
  }
  const xd = /* @__PURE__ */ new Set(["top", "bottom"]);
  function Nr(t) {
    return xd.has(di(t)) ? "y" : "x";
  }
  function Zo(t) {
    return Ho(Nr(t));
  }
  function ns(t) {
    return t.replace(/start|end/g, (n) => yd[n]);
  }
  const Ko = ["left", "right"], Yo = ["right", "left"], wd = ["top", "bottom"], Pd = ["bottom", "top"];
  function Sd(t, n, r, i) {
    const l = il(t);
    let s = (function(u, o, a) {
      switch (u) {
        case "top":
        case "bottom":
          return a ? o ? Yo : Ko : o ? Ko : Yo;
        case "left":
        case "right":
          return o ? wd : Pd;
        default:
          return [];
      }
    })(di(t), r === "start", i);
    return l && (s = s.map((u) => u + "-" + l), n && (s = s.concat(s.map(ns)))), s;
  }
  function al(t) {
    return t.replace(/left|right|bottom|top/g, (n) => md[n]);
  }
  function ll(t) {
    const { x: n, y: r, width: i, height: l } = t;
    return { width: i, height: l, top: r, left: n, right: n + i, bottom: r + l, x: n, y: r };
  }
  function Xo(t, n, r) {
    let { reference: i, floating: l } = t;
    const s = Nr(n), u = Zo(n), o = Jo(u), a = di(n), c = s === "y", d = i.x + i.width / 2 - l.width / 2, g = i.y + i.height / 2 - l.height / 2, f = i[o] / 2 - l[o] / 2;
    let p;
    switch (a) {
      case "top":
        p = { x: d, y: i.y - l.height };
        break;
      case "bottom":
        p = { x: d, y: i.y + i.height };
        break;
      case "right":
        p = { x: i.x + i.width, y: g };
        break;
      case "left":
        p = { x: i.x - l.width, y: g };
        break;
      default:
        p = { x: i.x, y: i.y };
    }
    switch (il(n)) {
      case "start":
        p[u] -= f * (r && c ? -1 : 1);
        break;
      case "end":
        p[u] += f * (r && c ? -1 : 1);
    }
    return p;
  }
  async function ec(t, n) {
    var r;
    n === void 0 && (n = {});
    const { x: i, y: l, platform: s, rects: u, elements: o, strategy: a } = t, { boundary: c = "clippingAncestors", rootBoundary: d = "viewport", elementContext: g = "floating", altBoundary: f = !1, padding: p = 0 } = rl(n, t), _ = (function(I) {
      return typeof I != "number" ? (function(q) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...q };
      })(I) : { top: I, right: I, bottom: I, left: I };
    })(p), B = o[f ? g === "floating" ? "reference" : "floating" : g], y = ll(await s.getClippingRect({ element: (r = await (s.isElement == null ? void 0 : s.isElement(B))) == null || r ? B : B.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(o.floating)), boundary: c, rootBoundary: d, strategy: a })), w = g === "floating" ? { x: i, y: l, width: u.floating.width, height: u.floating.height } : u.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(o.floating)), $ = await (s.isElement == null ? void 0 : s.isElement(S)) && await (s.getScale == null ? void 0 : s.getScale(S)) || { x: 1, y: 1 }, A = ll(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o, rect: w, offsetParent: S, strategy: a }) : w);
    return { top: (y.top - A.top + _.top) / $.y, bottom: (A.bottom - y.bottom + _.bottom) / $.y, left: (y.left - A.left + _.left) / $.x, right: (A.right - y.right + _.right) / $.x };
  }
  const Cd = /* @__PURE__ */ new Set(["left", "top"]);
  function sl() {
    return typeof window != "undefined";
  }
  function Mi(t) {
    return tc(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function jn(t) {
    var n;
    return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
  }
  function br(t) {
    var n;
    return (n = (tc(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
  }
  function tc(t) {
    return !!sl() && (t instanceof Node || t instanceof jn(t).Node);
  }
  function lr(t) {
    return !!sl() && (t instanceof Element || t instanceof jn(t).Element);
  }
  function vr(t) {
    return !!sl() && (t instanceof HTMLElement || t instanceof jn(t).HTMLElement);
  }
  function nc(t) {
    return !(!sl() || typeof ShadowRoot == "undefined") && (t instanceof ShadowRoot || t instanceof jn(t).ShadowRoot);
  }
  const Bd = /* @__PURE__ */ new Set(["inline", "contents"]);
  function da(t) {
    const { overflow: n, overflowX: r, overflowY: i, display: l } = sr(t);
    return /auto|scroll|overlay|hidden|clip/.test(n + i + r) && !Bd.has(l);
  }
  const Id = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function Dd(t) {
    return Id.has(Mi(t));
  }
  const zd = [":popover-open", ":modal"];
  function ol(t) {
    return zd.some((n) => {
      try {
        return t.matches(n);
      } catch {
        return !1;
      }
    });
  }
  const $d = ["transform", "translate", "scale", "rotate", "perspective"], Ad = ["transform", "translate", "scale", "rotate", "perspective", "filter"], qd = ["paint", "layout", "strict", "content"];
  function rs(t) {
    const n = is(), r = lr(t) ? sr(t) : t;
    return $d.some((i) => !!r[i] && r[i] !== "none") || !!r.containerType && r.containerType !== "normal" || !n && !!r.backdropFilter && r.backdropFilter !== "none" || !n && !!r.filter && r.filter !== "none" || Ad.some((i) => (r.willChange || "").includes(i)) || qd.some((i) => (r.contain || "").includes(i));
  }
  function is() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const Md = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function Vi(t) {
    return Md.has(Mi(t));
  }
  function sr(t) {
    return jn(t).getComputedStyle(t);
  }
  function cl(t) {
    return lr(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
  }
  function Wr(t) {
    if (Mi(t) === "html") return t;
    const n = t.assignedSlot || t.parentNode || nc(t) && t.host || br(t);
    return nc(n) ? n.host : n;
  }
  function rc(t) {
    const n = Wr(t);
    return Vi(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : vr(n) && da(n) ? n : rc(n);
  }
  function ga(t, n, r) {
    var i;
    n === void 0 && (n = []), r === void 0 && (r = !0);
    const l = rc(t), s = l === ((i = t.ownerDocument) == null ? void 0 : i.body), u = jn(l);
    if (s) {
      const o = as(u);
      return n.concat(u, u.visualViewport || [], da(l) ? l : [], o && r ? ga(o) : []);
    }
    return n.concat(l, ga(l, [], r));
  }
  function as(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function ic(t) {
    const n = sr(t);
    let r = parseFloat(n.width) || 0, i = parseFloat(n.height) || 0;
    const l = vr(t), s = l ? t.offsetWidth : r, u = l ? t.offsetHeight : i, o = tl(r) !== s || tl(i) !== u;
    return o && (r = s, i = u), { width: r, height: i, $: o };
  }
  function ls(t) {
    return lr(t) ? t : t.contextElement;
  }
  function Gi(t) {
    const n = ls(t);
    if (!vr(n)) return fr(1);
    const r = n.getBoundingClientRect(), { width: i, height: l, $: s } = ic(n);
    let u = (s ? tl(r.width) : r.width) / i, o = (s ? tl(r.height) : r.height) / l;
    return u && Number.isFinite(u) || (u = 1), o && Number.isFinite(o) || (o = 1), { x: u, y: o };
  }
  const Vd = fr(0);
  function ac(t) {
    const n = jn(t);
    return is() && n.visualViewport ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop } : Vd;
  }
  function gi(t, n, r, i) {
    n === void 0 && (n = !1), r === void 0 && (r = !1);
    const l = t.getBoundingClientRect(), s = ls(t);
    let u = fr(1);
    n && (i ? lr(i) && (u = Gi(i)) : u = Gi(t));
    const o = (function(f, p, _) {
      return p === void 0 && (p = !1), !(!_ || p && _ !== jn(f)) && p;
    })(s, r, i) ? ac(s) : fr(0);
    let a = (l.left + o.x) / u.x, c = (l.top + o.y) / u.y, d = l.width / u.x, g = l.height / u.y;
    if (s) {
      const f = jn(s), p = i && lr(i) ? jn(i) : i;
      let _ = f, B = as(_);
      for (; B && i && p !== _; ) {
        const y = Gi(B), w = B.getBoundingClientRect(), S = sr(B), $ = w.left + (B.clientLeft + parseFloat(S.paddingLeft)) * y.x, A = w.top + (B.clientTop + parseFloat(S.paddingTop)) * y.y;
        a *= y.x, c *= y.y, d *= y.x, g *= y.y, a += $, c += A, _ = jn(B), B = as(_);
      }
    }
    return ll({ width: d, height: g, x: a, y: c });
  }
  function ul(t, n) {
    const r = cl(t).scrollLeft;
    return n ? n.left + r : gi(br(t)).left + r;
  }
  function lc(t, n) {
    const r = t.getBoundingClientRect();
    return { x: r.left + n.scrollLeft - ul(t, r), y: r.top + n.scrollTop };
  }
  const Gd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function sc(t, n, r) {
    let i;
    if (n === "viewport") i = (function(l, s) {
      const u = jn(l), o = br(l), a = u.visualViewport;
      let c = o.clientWidth, d = o.clientHeight, g = 0, f = 0;
      if (a) {
        c = a.width, d = a.height;
        const _ = is();
        (!_ || _ && s === "fixed") && (g = a.offsetLeft, f = a.offsetTop);
      }
      const p = ul(o);
      if (p <= 0) {
        const _ = o.ownerDocument, B = _.body, y = getComputedStyle(B), w = _.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, S = Math.abs(o.clientWidth - B.clientWidth - w);
        S <= 25 && (c -= S);
      } else p <= 25 && (c += p);
      return { width: c, height: d, x: g, y: f };
    })(t, r);
    else if (n === "document") i = (function(l) {
      const s = br(l), u = cl(l), o = l.ownerDocument.body, a = ui(s.scrollWidth, s.clientWidth, o.scrollWidth, o.clientWidth), c = ui(s.scrollHeight, s.clientHeight, o.scrollHeight, o.clientHeight);
      let d = -u.scrollLeft + ul(l);
      const g = -u.scrollTop;
      return sr(o).direction === "rtl" && (d += ui(s.clientWidth, o.clientWidth) - a), { width: a, height: c, x: d, y: g };
    })(br(t));
    else if (lr(n)) i = (function(l, s) {
      const u = gi(l, !0, s === "fixed"), o = u.top + l.clientTop, a = u.left + l.clientLeft, c = vr(l) ? Gi(l) : fr(1);
      return { width: l.clientWidth * c.x, height: l.clientHeight * c.y, x: a * c.x, y: o * c.y };
    })(n, r);
    else {
      const l = ac(t);
      i = { x: n.x - l.x, y: n.y - l.y, width: n.width, height: n.height };
    }
    return ll(i);
  }
  function oc(t, n) {
    const r = Wr(t);
    return !(r === n || !lr(r) || Vi(r)) && (sr(r).position === "fixed" || oc(r, n));
  }
  function Td(t, n, r) {
    const i = vr(n), l = br(n), s = r === "fixed", u = gi(t, !0, s, n);
    let o = { scrollLeft: 0, scrollTop: 0 };
    const a = fr(0);
    function c() {
      a.x = ul(l);
    }
    if (i || !i && !s) if ((Mi(n) !== "body" || da(l)) && (o = cl(n)), i) {
      const g = gi(n, !0, s, n);
      a.x = g.x + n.clientLeft, a.y = g.y + n.clientTop;
    } else l && c();
    s && !i && l && c();
    const d = !l || i || s ? fr(0) : lc(l, o);
    return { x: u.left + o.scrollLeft - a.x - d.x, y: u.top + o.scrollTop - a.y - d.y, width: u.width, height: u.height };
  }
  function ss(t) {
    return sr(t).position === "static";
  }
  function cc(t, n) {
    if (!vr(t) || sr(t).position === "fixed") return null;
    if (n) return n(t);
    let r = t.offsetParent;
    return br(t) === r && (r = r.ownerDocument.body), r;
  }
  function uc(t, n) {
    const r = jn(t);
    if (ol(t)) return r;
    if (!vr(t)) {
      let l = Wr(t);
      for (; l && !Vi(l); ) {
        if (lr(l) && !ss(l)) return l;
        l = Wr(l);
      }
      return r;
    }
    let i = cc(t, n);
    for (; i && Dd(i) && ss(i); ) i = cc(i, n);
    return i && Vi(i) && ss(i) && !rs(i) ? r : i || (function(l) {
      let s = Wr(l);
      for (; vr(s) && !Vi(s); ) {
        if (rs(s)) return s;
        if (ol(s)) return null;
        s = Wr(s);
      }
      return null;
    })(t) || r;
  }
  const Fd = { convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
    let { elements: n, rect: r, offsetParent: i, strategy: l } = t;
    const s = l === "fixed", u = br(i), o = !!n && ol(n.floating);
    if (i === u || o && s) return r;
    let a = { scrollLeft: 0, scrollTop: 0 }, c = fr(1);
    const d = fr(0), g = vr(i);
    if ((g || !g && !s) && ((Mi(i) !== "body" || da(u)) && (a = cl(i)), vr(i))) {
      const p = gi(i);
      c = Gi(i), d.x = p.x + i.clientLeft, d.y = p.y + i.clientTop;
    }
    const f = !u || g || s ? fr(0) : lc(u, a);
    return { width: r.width * c.x, height: r.height * c.y, x: r.x * c.x - a.scrollLeft * c.x + d.x + f.x, y: r.y * c.y - a.scrollTop * c.y + d.y + f.y };
  }, getDocumentElement: br, getClippingRect: function(t) {
    let { element: n, boundary: r, rootBoundary: i, strategy: l } = t;
    const s = [...r === "clippingAncestors" ? ol(n) ? [] : (function(a, c) {
      const d = c.get(a);
      if (d) return d;
      let g = ga(a, [], !1).filter((B) => lr(B) && Mi(B) !== "body"), f = null;
      const p = sr(a).position === "fixed";
      let _ = p ? Wr(a) : a;
      for (; lr(_) && !Vi(_); ) {
        const B = sr(_), y = rs(_);
        y || B.position !== "fixed" || (f = null), (p ? !y && !f : !y && B.position === "static" && f && Gd.has(f.position) || da(_) && !y && oc(a, _)) ? g = g.filter((w) => w !== _) : f = B, _ = Wr(_);
      }
      return c.set(a, g), g;
    })(n, this._c) : [].concat(r), i], u = s[0], o = s.reduce((a, c) => {
      const d = sc(n, c, l);
      return a.top = ui(d.top, a.top), a.right = el(d.right, a.right), a.bottom = el(d.bottom, a.bottom), a.left = ui(d.left, a.left), a;
    }, sc(n, u, l));
    return { width: o.right - o.left, height: o.bottom - o.top, x: o.left, y: o.top };
  }, getOffsetParent: uc, getElementRects: async function(t) {
    const n = this.getOffsetParent || uc, r = this.getDimensions, i = await r(t.floating);
    return { reference: Td(t.reference, await n(t.floating), t.strategy), floating: { x: 0, y: 0, width: i.width, height: i.height } };
  }, getClientRects: function(t) {
    return Array.from(t.getClientRects());
  }, getDimensions: function(t) {
    const { width: n, height: r } = ic(t);
    return { width: n, height: r };
  }, getScale: Gi, isElement: lr, isRTL: function(t) {
    return sr(t).direction === "rtl";
  } };
  function dc(t, n) {
    return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
  }
  function Od(t, n, r, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: l = !0, ancestorResize: s = !0, elementResize: u = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: a = !1 } = i, c = ls(t), d = l || s ? [...c ? ga(c) : [], ...ga(n)] : [];
    d.forEach((y) => {
      l && y.addEventListener("scroll", r, { passive: !0 }), s && y.addEventListener("resize", r);
    });
    const g = c && o ? (function(y, w) {
      let S, $ = null;
      const A = br(y);
      function I() {
        var q;
        clearTimeout(S), (q = $) == null || q.disconnect(), $ = null;
      }
      return (function q(L, z) {
        L === void 0 && (L = !1), z === void 0 && (z = 1), I();
        const ce = y.getBoundingClientRect(), { left: N, top: re, width: Q, height: Y } = ce;
        if (L || w(), !Q || !Y) return;
        const K = { rootMargin: -nl(re) + "px " + -nl(A.clientWidth - (N + Q)) + "px " + -nl(A.clientHeight - (re + Y)) + "px " + -nl(N) + "px", threshold: ui(0, el(1, z)) || 1 };
        let U = !0;
        function J(Z) {
          const V = Z[0].intersectionRatio;
          if (V !== z) {
            if (!U) return q();
            V ? q(!1, V) : S = setTimeout(() => {
              q(!1, 1e-7);
            }, 1e3);
          }
          V !== 1 || dc(ce, y.getBoundingClientRect()) || q(), U = !1;
        }
        try {
          $ = new IntersectionObserver(J, { ...K, root: A.ownerDocument });
        } catch {
          $ = new IntersectionObserver(J, K);
        }
        $.observe(y);
      })(!0), I;
    })(c, r) : null;
    let f, p = -1, _ = null;
    u && (_ = new ResizeObserver((y) => {
      let [w] = y;
      w && w.target === c && _ && (_.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
        var S;
        (S = _) == null || S.observe(n);
      })), r();
    }), c && !a && _.observe(c), _.observe(n));
    let B = a ? gi(t) : null;
    return a && (function y() {
      const w = gi(t);
      B && !dc(B, w) && r(), B = w, f = requestAnimationFrame(y);
    })(), r(), () => {
      var y;
      d.forEach((w) => {
        l && w.removeEventListener("scroll", r), s && w.removeEventListener("resize", r);
      }), g == null || g(), (y = _) == null || y.disconnect(), _ = null, a && cancelAnimationFrame(f);
    };
  }
  const Ld = function(t) {
    return { name: "offset", options: t, async fn(n) {
      var r, i;
      const { x: l, y: s, placement: u, middlewareData: o } = n, a = await (async function(c, d) {
        const { placement: g, platform: f, elements: p } = c, _ = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), B = di(g), y = il(g), w = Nr(g) === "y", S = Cd.has(B) ? -1 : 1, $ = _ && w ? -1 : 1, A = rl(d, c);
        let { mainAxis: I, crossAxis: q, alignmentAxis: L } = typeof A == "number" ? { mainAxis: A, crossAxis: 0, alignmentAxis: null } : { mainAxis: A.mainAxis || 0, crossAxis: A.crossAxis || 0, alignmentAxis: A.alignmentAxis };
        return y && typeof L == "number" && (q = y === "end" ? -1 * L : L), w ? { x: q * $, y: I * S } : { x: I * S, y: q * $ };
      })(n, t);
      return u === ((r = o.offset) == null ? void 0 : r.placement) && (i = o.arrow) != null && i.alignmentOffset ? {} : { x: l + a.x, y: s + a.y, data: { ...a, placement: u } };
    } };
  }, jd = function(t) {
    return t === void 0 && (t = {}), { name: "shift", options: t, async fn(n) {
      const { x: r, y: i, placement: l } = n, { mainAxis: s = !0, crossAxis: u = !1, limiter: o = { fn: (y) => {
        let { x: w, y: S } = y;
        return { x: w, y: S };
      } }, ...a } = rl(t, n), c = { x: r, y: i }, d = await ec(n, a), g = Nr(di(l)), f = Ho(g);
      let p = c[f], _ = c[g];
      if (s) {
        const y = f === "y" ? "bottom" : "right";
        p = Uo(p + d[f === "y" ? "top" : "left"], p, p - d[y]);
      }
      if (u) {
        const y = g === "y" ? "bottom" : "right";
        _ = Uo(_ + d[g === "y" ? "top" : "left"], _, _ - d[y]);
      }
      const B = o.fn({ ...n, [f]: p, [g]: _ });
      return { ...B, data: { x: B.x - r, y: B.y - i, enabled: { [f]: s, [g]: u } } };
    } };
  }, Ed = function(t) {
    return t === void 0 && (t = {}), { name: "flip", options: t, async fn(n) {
      var r, i;
      const { placement: l, middlewareData: s, rects: u, initialPlacement: o, platform: a, elements: c } = n, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: f, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: _ = "none", flipAlignment: B = !0, ...y } = rl(t, n);
      if ((r = s.arrow) != null && r.alignmentOffset) return {};
      const w = di(l), S = Nr(o), $ = di(o) === o, A = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), I = f || ($ || !B ? [al(o)] : (function(K) {
        const U = al(K);
        return [ns(K), U, ns(U)];
      })(o)), q = _ !== "none";
      !f && q && I.push(...Sd(o, B, _, A));
      const L = [o, ...I], z = await ec(n, y), ce = [];
      let N = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (d && ce.push(z[w]), g) {
        const K = (function(U, J, Z) {
          Z === void 0 && (Z = !1);
          const V = il(U), ee = Zo(U), ye = Jo(ee);
          let F = ee === "x" ? V === (Z ? "end" : "start") ? "right" : "left" : V === "start" ? "bottom" : "top";
          return J.reference[ye] > J.floating[ye] && (F = al(F)), [F, al(F)];
        })(l, u, A);
        ce.push(z[K[0]], z[K[1]]);
      }
      if (N = [...N, { placement: l, overflows: ce }], !ce.every((K) => K <= 0)) {
        var re, Q;
        const K = (((re = s.flip) == null ? void 0 : re.index) || 0) + 1, U = L[K];
        if (U && (!(g === "alignment" && S !== Nr(U)) || N.every((Z) => Nr(Z.placement) !== S || Z.overflows[0] > 0)))
          return { data: { index: K, overflows: N }, reset: { placement: U } };
        let J = (Q = N.filter((Z) => Z.overflows[0] <= 0).sort((Z, V) => Z.overflows[1] - V.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!J) switch (p) {
          case "bestFit": {
            var Y;
            const Z = (Y = N.filter((V) => {
              if (q) {
                const ee = Nr(V.placement);
                return ee === S || ee === "y";
              }
              return !0;
            }).map((V) => [V.placement, V.overflows.filter((ee) => ee > 0).reduce((ee, ye) => ee + ye, 0)]).sort((V, ee) => V[1] - ee[1])[0]) == null ? void 0 : Y[0];
            Z && (J = Z);
            break;
          }
          case "initialPlacement":
            J = o;
        }
        if (l !== J) return { reset: { placement: J } };
      }
      return {};
    } };
  }, Rd = (t, n, r) => {
    const i = /* @__PURE__ */ new Map(), l = { platform: Fd, ...r }, s = { ...l.platform, _c: i };
    return (async (u, o, a) => {
      const { placement: c = "bottom", strategy: d = "absolute", middleware: g = [], platform: f } = a, p = g.filter(Boolean), _ = await (f.isRTL == null ? void 0 : f.isRTL(o));
      let B = await f.getElementRects({ reference: u, floating: o, strategy: d }), { x: y, y: w } = Xo(B, c, _), S = c, $ = {}, A = 0;
      for (let I = 0; I < p.length; I++) {
        const { name: q, fn: L } = p[I], { x: z, y: ce, data: N, reset: re } = await L({ x: y, y: w, initialPlacement: c, placement: S, strategy: d, middlewareData: $, rects: B, platform: f, elements: { reference: u, floating: o } });
        y = z != null ? z : y, w = ce != null ? ce : w, $ = { ...$, [q]: { ...$[q], ...N } }, re && A <= 50 && (A++, typeof re == "object" && (re.placement && (S = re.placement), re.rects && (B = re.rects === !0 ? await f.getElementRects({ reference: u, floating: o, strategy: d }) : re.rects), { x: y, y: w } = Xo(B, S, _)), I = -1);
      }
      return { x: y, y: w, placement: S, strategy: d, middlewareData: $ };
    })(t, n, { ...l, platform: s });
  };
  function Un(t) {
    const n = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in n) if (t.includes(r)) return n[r];
    return "normal";
  }
  function Hn(t) {
    return t.includes("italic") ? "italic" : "normal";
  }
  function Fe(t) {
    return `rgba(${t.red}, ${t.green}, ${t.blue}, ${t.alpha})`;
  }
  function pn(t) {
    return Object.entries(t).reduce((n, [r, i]) => (i && n.push(`--${r}:${i}`), n), []).join(";");
  }
  function gc(t) {
    var n, r;
    const { colors: i, fonts: l, cornerRadius: s, spacing: u, imageSize: o, imageCornerRadius: a, bundleBarsPerRow: c, dealBars: d } = t, g = i.border || i.primary, f = Math.min(d.length, c ? parseInt(c) : 3).toString();
    return pn({ "block-title-color": Fe(i.title), "block-title-font-size": l.blockTitle.size + "px", "block-title-font-weight": Un(l.blockTitle.style), "block-title-font-style": Hn(l.blockTitle.style), "block-spacing": u == null ? void 0 : u.toString(), "bar-border-radius": (s || 0) + "px", "bar-background-color": Fe(i.background), "bar-selected-background-color": Fe(i.selectedBackground || i.background), "bar-border-color": Fe({ ...g, alpha: 0.3 * g.alpha }), "bar-selected-border-color": Fe(g), "block-block-title-color": Fe(i.blockTitle || i.title), "bar-title-color": Fe(i.title), "bar-title-font-size": l.title.size + "px", "bar-title-font-weight": Un(l.title.style), "bar-title-font-style": Hn(l.title.style), "bar-subtitle-color": Fe(i.subtitle), "bar-subtitle-font-size": l.subtitle.size + "px", "bar-subtitle-font-weight": Un(l.subtitle.style), "bar-subtitle-font-style": Hn(l.subtitle.style), "bar-price-color": Fe(i.price || i.title), "bar-full-price-color": Fe(i.fullPrice || i.subtitle), "bar-label-border-top-radius": (s ? s - 1 : 0) + "px", "bar-label-background-color": Fe(i.labelBackground), "bar-label-color": Fe(i.label), "bar-label-font-size": l.label.size + "px", "bar-label-font-weight": Un(l.label.style), "bar-label-font-style": Hn(l.label.style), "bar-most-popular-background-color": Fe(i.badgeBackground), "bar-most-popular-color": Fe(i.badgeText), "bar-variant-select-border-radius": (s || 0) / 2 + "px", "bar-image-size": (o || 48) + "px", "bar-image-border-radius": (a || 0) + "px", "kaching-bundle-products-image-border-radius": (s || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": l.unitLabel ? l.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": l.unitLabel ? Un(l.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": l.unitLabel ? Hn(l.unitLabel.style) : null, "bundle-bars-per-row": f, "kaching-collection-breaks-require-selection-background-color": ((n = t.collectionBreaks) == null ? void 0 : n.requireItemSelectionAlert) && Fe(t.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = t.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && Fe(t.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const pc = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Qd = (t) => {
    const n = t.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(n in pc)) return;
    const r = pc[n];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Nd = (t, n) => ({ red: Math.max(0, t.red - Math.round(t.red * n)), green: Math.max(0, t.green - Math.round(t.green * n)), blue: Math.max(0, t.blue - Math.round(t.blue * n)), alpha: t.alpha });
  var Wd = D("<div></div>");
  function dl(t, n) {
    Je(n, !0);
    let r = m(n, "color", 7), i = m(n, "image", 7), l = m(n, "size", 7), s = m(n, "shape", 7), u = m(n, "unavailable", 7, !1);
    const o = h(() => r() ? (function(f) {
      f = f.replace(/^#/, "");
      let p = parseInt(f, 16);
      return { red: p >> 16 & 255, green: p >> 8 & 255, blue: 255 & p, alpha: 1 };
    })(r()) : null), a = h(() => {
      let f = { "kaching-swatch-size": `${l() - 2}px` };
      const p = { rounded: 20, circle: 50 }[s()];
      return p && (f = { ...f, "kaching-swatch-border-radius": `${p}%` }), i() ? f = { ...f, "kaching-swatch-image-url": `url(${i()})` } : e(o) && (f = { ...f, "kaching-swatch-color": Fe(e(o)), "kaching-swatch-border-color": Fe(Nd(e(o), 0.1)) }), pn(f);
    });
    var c = { get color() {
      return r();
    }, set color(f) {
      r(f), k();
    }, get image() {
      return i();
    }, set image(f) {
      i(f), k();
    }, get size() {
      return l();
    }, set size(f) {
      l(f), k();
    }, get shape() {
      return s();
    }, set shape(f) {
      s(f), k();
    }, get unavailable() {
      return u();
    }, set unavailable(f = !1) {
      u(f), k();
    } }, d = Wd();
    let g;
    return fe((f) => {
      g = qt(d, 1, "kaching-bundles__swatch", null, g, f), Ht(d, e(a));
    }, [() => ({ "kaching-bundles__swatch--unavailable": u() })]), v(t, d), Ze(c);
  }
  function Vt(t, n) {
    Je(n, !0);
    let r = m(n, "element", 7, "button"), i = m(n, "class", 7), l = m(n, "onclick", 7), s = m(n, "onkeydown", 7), u = m(n, "data-value", 7), o = m(n, "title", 7), a = m(n, "id", 7), c = m(n, "role", 7), d = m(n, "aria-label", 7), g = m(n, "aria-expanded", 7), f = m(n, "aria-haspopup", 7), p = m(n, "aria-selected", 7), _ = m(n, "aria-checked", 7), B = m(n, "aria-activedescendant", 7), y = m(n, "aria-controls", 7), w = m(n, "tabindex", 7), S = m(n, "disabled", 7, !1), $ = m(n, "ref", 15);
    function A(z) {
      s() && (s()(z), z.defaultPrevented) || S() || z.key !== "Enter" && z.key !== " " || (z.preventDefault(), z.currentTarget.click());
    }
    function I(z) {
      var ce;
      if (S()) return z.preventDefault(), void z.stopPropagation();
      (ce = l()) == null || ce(z);
    }
    var q = { get element() {
      return r();
    }, set element(z = "button") {
      r(z), k();
    }, get class() {
      return i();
    }, set class(z) {
      i(z), k();
    }, get onclick() {
      return l();
    }, set onclick(z) {
      l(z), k();
    }, get onkeydown() {
      return s();
    }, set onkeydown(z) {
      s(z), k();
    }, get "data-value"() {
      return u();
    }, set "data-value"(z) {
      u(z), k();
    }, get title() {
      return o();
    }, set title(z) {
      o(z), k();
    }, get id() {
      return a();
    }, set id(z) {
      a(z), k();
    }, get role() {
      return c();
    }, set role(z) {
      c(z), k();
    }, get "aria-label"() {
      return d();
    }, set "aria-label"(z) {
      d(z), k();
    }, get "aria-expanded"() {
      return g();
    }, set "aria-expanded"(z) {
      g(z), k();
    }, get "aria-haspopup"() {
      return f();
    }, set "aria-haspopup"(z) {
      f(z), k();
    }, get "aria-selected"() {
      return p();
    }, set "aria-selected"(z) {
      p(z), k();
    }, get "aria-checked"() {
      return _();
    }, set "aria-checked"(z) {
      _(z), k();
    }, get "aria-activedescendant"() {
      return B();
    }, set "aria-activedescendant"(z) {
      B(z), k();
    }, get "aria-controls"() {
      return y();
    }, set "aria-controls"(z) {
      y(z), k();
    }, get tabindex() {
      return w();
    }, set tabindex(z) {
      w(z), k();
    }, get disabled() {
      return S();
    }, set disabled(z = !1) {
      S(z), k();
    }, get ref() {
      return $();
    }, set ref(z) {
      $(z), k();
    } }, L = De();
    return gd(ve(L), r, 0, (z, ce) => {
      es(z, (re) => $(re), () => $()), fd(z, () => {
        var re, Q;
        return { role: (re = c()) != null ? re : "button", tabindex: (Q = w()) != null ? Q : S() ? -1 : 0, class: i(), onclick: I, "data-value": u(), title: o(), id: a(), "aria-label": d(), "aria-expanded": g(), "aria-haspopup": f(), "aria-selected": p(), "aria-checked": _(), "aria-activedescendant": B(), "aria-controls": y(), "aria-disabled": S() ? "true" : void 0, onkeydown: A };
      });
      var N = De();
      Mo(ve(N), n, "default", {}), v(ce, N);
    }), v(t, L), Ze(q);
  }
  Le(dl, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Le(Vt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const hc = "translations", Ti = (t = {}) => {
    const n = Rr(fc(t));
    return ea(hc, n), { translate: n, setTranslations: (r) => {
      n.set(fc(r));
    } };
  }, Gt = () => {
    const t = Xi(hc);
    if (!t) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return t;
  }, fc = (t) => (n) => t[n] || n;
  function bc(t) {
    return String.fromCharCode(64 + t);
  }
  async function _r(t, n, r = {}, i = !0) {
    i && await El();
    const l = new CustomEvent(n, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    t.dispatchEvent(l);
  }
  function Tt(t) {
    return typeof t == "number" ? t : Number(t.split("/").pop());
  }
  function Jn(t) {
    const n = t.variants.filter((r) => r.availableForSale);
    return n.length > 0 ? { ...t, variants: n } : t;
  }
  var Ud = D("<span> <!></span>"), Hd = D("<span> </span>"), Jd = D("<!> <!>", 1), Zd = D("<span> <!></span>"), Kd = D("<span> </span>"), Yd = D("<!> <!>", 1), Xd = D('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), eg = D('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function vc(t, n) {
    Je(n, !0);
    const r = () => $e(w, "$translate", i), [i, l] = Pt();
    let s = m(n, "option", 7), u = m(n, "swatchSize", 7), o = m(n, "swatchShape", 7), a = m(n, "value", 7), c = m(n, "onChange", 7), d = Ae(!1), g = Ae(-1), f = Ae(void 0), p = Ae(void 0), _ = h(() => s().optionValues.find((Y) => Y.name === a()) || s().optionValues[0]);
    const B = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function y(Y) {
      return `${B}-option-${Y}`;
    }
    const w = Gt();
    function S() {
      W(d, !0), W(g, s().optionValues.findIndex((Y) => Y.name === a()), !0), e(g) === -1 && W(g, 0);
    }
    function $() {
      W(d, !1), W(g, -1);
    }
    function A() {
      var Y;
      $(), (Y = e(f)) == null || Y.focus();
    }
    function I(Y) {
      a(Y), A();
      try {
        const K = s().optionValues.find((U) => U.name === Y);
        K != null && K.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (K) {
        console.error(K);
      }
      c()(a());
    }
    function q(Y, K) {
      const U = (J) => {
        Y.contains(J.target) || K();
      };
      return document.addEventListener("click", U, !0), { destroy() {
        document.removeEventListener("click", U, !0);
      } };
    }
    Xe(() => {
      if (e(d) && e(f) && e(p)) return Od(e(f), e(p), async () => {
        if (!e(f) || !e(p)) return;
        const Y = e(p), { x: K, y: U } = await Rd(e(f), Y, { placement: "bottom-start", strategy: "fixed", middleware: [Ld(2), Ed(), jd({ padding: 8 })] });
        Y.style.left = `${K}px`, Y.style.top = `${U}px`;
      });
    });
    var L = { get option() {
      return s();
    }, set option(Y) {
      s(Y), k();
    }, get swatchSize() {
      return u();
    }, set swatchSize(Y) {
      u(Y), k();
    }, get swatchShape() {
      return o();
    }, set swatchShape(Y) {
      o(Y), k();
    }, get value() {
      return a();
    }, set value(Y) {
      a(Y), k();
    }, get onChange() {
      return c();
    }, set onChange(Y) {
      c(Y), k();
    } }, z = eg(), ce = P(z);
    {
      let Y = h(() => e(d) && e(g) >= 0 ? y(e(g)) : void 0);
      Vt(ce, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return s().name;
      }, onclick: function(K) {
        e(d) ? (W(d, !1), W(g, -1)) : S(), K.preventDefault();
      }, onkeydown: function(K) {
        if (!e(d)) return void (K.key !== "ArrowDown" && K.key !== "ArrowUp" && K.key !== "Enter" && K.key !== " " || (K.preventDefault(), S()));
        const U = s().optionValues.length;
        switch (K.key) {
          case "Escape":
            K.preventDefault(), A();
            break;
          case "ArrowDown":
            K.preventDefault(), W(g, e(g) < U - 1 ? e(g) + 1 : 0, !0);
            break;
          case "ArrowUp":
            K.preventDefault(), W(g, e(g) > 0 ? e(g) - 1 : U - 1, !0);
            break;
          case "Home":
            K.preventDefault(), W(g, 0);
            break;
          case "End":
            K.preventDefault(), W(g, U - 1);
            break;
          case "Enter":
          case " ":
            K.preventDefault(), e(g) >= 0 && I(s().optionValues[e(g)].name);
        }
      }, get "aria-expanded"() {
        return e(d);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return B;
      }, get "aria-activedescendant"() {
        return e(Y);
      }, get ref() {
        return e(f);
      }, set ref(K) {
        W(f, K, !0);
      }, children: (K, U) => {
        var J = Jd(), Z = ve(J);
        dl(Z, { get color() {
          return e(_).swatch.color;
        }, get image() {
          return e(_).swatch.image;
        }, get size() {
          return u();
        }, get shape() {
          return o();
        }, get unavailable() {
          return e(_).unavailable;
        } }), Ue(G(Z, 2), () => e(_).name, (V) => {
          var ee = De(), ye = ve(ee), F = (C) => {
            var O = Ud(), j = P(O);
            Me(G(j), () => r()("system.unavailable_option_value")), x(O), fe(() => {
              var ie;
              return yt(j, `${(ie = e(_).name) != null ? ie : ""} - `);
            }), v(C, O);
          }, b = (C) => {
            var O = Hd(), j = P(O, !0);
            x(O), fe(() => yt(j, e(_).name)), v(C, O);
          };
          T(ye, (C) => {
            e(_).unavailable ? C(F) : C(b, !1);
          }), v(V, ee);
        }), v(K, J);
      }, $$slots: { default: !0 } });
    }
    var N = G(ce, 2), re = (Y) => {
      var K = Xd();
      Ut(K, 23, () => s().optionValues, (U) => U.name, (U, J, Z) => {
        {
          let V = h(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(Z) === e(g) && "kaching-bundles__swatch-dropdown__option--focused"]), ee = h(() => y(e(Z))), ye = h(() => e(J).name === a());
          Vt(U, { element: "span", get class() {
            return e(V);
          }, get id() {
            return e(ee);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(ye);
          }, get "data-value"() {
            return e(J).name;
          }, onclick: () => I(e(J).name), children: (F, b) => {
            var C = Yd(), O = ve(C);
            {
              let M = h(() => 1.333 * u());
              dl(O, { get color() {
                return e(J).swatch.color;
              }, get image() {
                return e(J).swatch.image;
              }, get size() {
                return e(M);
              }, get shape() {
                return o();
              }, get unavailable() {
                return e(J).unavailable;
              } });
            }
            var j = G(O, 2), ie = (M) => {
              var ne = Zd(), me = P(ne);
              Me(G(me), () => r()("system.unavailable_option_value")), x(ne), fe(() => {
                var he;
                return yt(me, `${(he = e(J).name) != null ? he : ""} - `);
              }), v(M, ne);
            }, oe = (M) => {
              var ne = Kd(), me = P(ne, !0);
              x(ne), fe(() => yt(me, e(J).name)), v(M, ne);
            };
            T(j, (M) => {
              e(J).unavailable ? M(ie) : M(oe, !1);
            }), v(F, C);
          }, $$slots: { default: !0 } });
        }
      }), x(K), es(K, (U) => W(p, U), () => e(p)), fe(() => Pe(K, "id", B)), v(Y, K);
    };
    T(N, (Y) => {
      e(d) && Y(re);
    }), x(z), Hl(z, (Y, K) => q == null ? void 0 : q(Y, K), () => $), fe(() => {
      Pe(z, "data-name", s().name), Pe(z, "data-value", a());
    }), v(t, z);
    var Q = Ze(L);
    return l(), Q;
  }
  function tg(t, n, r) {
    try {
      const i = n().optionValues.find((l) => l.name === t.target.value);
      i != null && i.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (i) {
      console.error(i);
    }
    r()(t.target.value);
  }
  Le(vc, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var ng = D(" <!>", 1), rg = D('<option class="kaching-bundles-option-value"><!></option>'), ig = D('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function _c(t, n) {
    Je(n, !0);
    const [r, i] = Pt();
    let l = m(n, "option", 7), s = m(n, "value", 7), u = m(n, "onChange", 7);
    const o = Gt();
    var a, c = { get option() {
      return l();
    }, set option(f) {
      l(f), k();
    }, get value() {
      return s();
    }, set value(f) {
      s(f), k();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), k();
    } }, d = ig();
    d.__change = [tg, l, u], Ut(d, 21, () => l().optionValues, (f) => f.name, (f, p) => {
      var _ = rg(), B = P(_), y = ($) => {
        var A = ng(), I = ve(A);
        Me(G(I), () => $e(o, "$translate", r)("system.unavailable_option_value")), fe(() => {
          var q;
          return yt(I, `${(q = e(p).name) != null ? q : ""} - `);
        }), v($, A);
      }, w = ($) => {
        var A = Wn();
        fe(() => yt(A, e(p).name)), v($, A);
      };
      T(B, ($) => {
        e(p).unavailable ? $(y) : $(w, !1);
      }), x(_);
      var S = {};
      fe(() => {
        var $;
        Pe(_, "data-value", e(p).name), S !== (S = e(p).name) && (_.value = ($ = _.__value = e(p).name) != null ? $ : "");
      }), v(f, _);
    }), x(d), Kl(d), fe(() => {
      var f;
      Pe(d, "aria-label", l().name), Pe(d, "data-name", l().name), Pe(d, "data-value", s()), a !== (a = s()) && (d.value = (f = d.__value = s()) != null ? f : "", oa(d, s()));
    }), v(t, d);
    var g = Ze(c);
    return i(), g;
  }
  $n(["change"]), Le(_c, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var ag = D('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function kc(t, n) {
    Je(n, !0);
    const [r, i] = Pt();
    let l = m(n, "option", 7), s = m(n, "swatchSize", 7), u = m(n, "swatchShape", 7), o = m(n, "value", 7), a = m(n, "onChange", 7);
    const c = Gt();
    var d = { get option() {
      return l();
    }, set option(p) {
      l(p), k();
    }, get swatchSize() {
      return s();
    }, set swatchSize(p) {
      s(p), k();
    }, get swatchShape() {
      return u();
    }, set swatchShape(p) {
      u(p), k();
    }, get value() {
      return o();
    }, set value(p) {
      o(p), k();
    }, get onChange() {
      return a();
    }, set onChange(p) {
      a(p), k();
    } }, g = ag();
    Ut(g, 21, () => l().optionValues, (p) => p.name, (p, _) => {
      {
        let B = h(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(_).name === o() && "kaching-bundles__swatch-buttons__button--selected"]), y = h(() => e(_).unavailable ? `${e(_).name} - ${$e(c, "$translate", r)("system.unavailable_option_value")}` : e(_).name);
        Vt(p, { element: "span", get class() {
          return e(B);
        }, get title() {
          return e(_).name;
        }, get "aria-label"() {
          return e(y);
        }, get "data-value"() {
          return e(_).name;
        }, onclick: () => (function(w) {
          o(w);
          try {
            const S = l().optionValues.find(($) => $.name === w);
            S != null && S.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (S) {
            console.error(S);
          }
          a()(o());
        })(e(_).name), children: (w, S) => {
          dl(w, { get color() {
            return e(_).swatch.color;
          }, get image() {
            return e(_).swatch.image;
          }, get size() {
            return s();
          }, get shape() {
            return u();
          }, get unavailable() {
            return e(_).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), x(g), fe(() => {
      Pe(g, "data-name", l().name), Pe(g, "data-value", o());
    }), v(t, g);
    var f = Ze(d);
    return i(), f;
  }
  function mc(t, n) {
    Je(n, !0);
    let r = m(n, "value", 7), i = m(n, "option", 7), l = m(n, "swatchSize", 7, 18), s = m(n, "swatchShape", 7, "circle"), u = m(n, "swatchType", 7), o = m(n, "onChange", 7);
    function a(_) {
      o()({ position: i().position, value: _ });
    }
    var c = { get value() {
      return r();
    }, set value(_) {
      r(_), k();
    }, get option() {
      return i();
    }, set option(_) {
      i(_), k();
    }, get swatchSize() {
      return l();
    }, set swatchSize(_ = 18) {
      l(_), k();
    }, get swatchShape() {
      return s();
    }, set swatchShape(_ = "circle") {
      s(_), k();
    }, get swatchType() {
      return u();
    }, set swatchType(_) {
      u(_), k();
    }, get onChange() {
      return o();
    }, set onChange(_) {
      o(_), k();
    } }, d = De(), g = ve(d), f = (_) => {
      vc(_, { get option() {
        return i();
      }, get swatchSize() {
        return l();
      }, get swatchShape() {
        return s();
      }, get value() {
        return r();
      }, onChange: a });
    }, p = (_) => {
      var B = De(), y = ve(B), w = ($) => {
        kc($, { get option() {
          return i();
        }, get swatchSize() {
          return l();
        }, get swatchShape() {
          return s();
        }, get value() {
          return r();
        }, onChange: a });
      }, S = ($) => {
        _c($, { get option() {
          return i();
        }, get value() {
          return r();
        }, onChange: a });
      };
      T(y, ($) => {
        u() === "colorButtons" || u() === "imageButtons" || u() === "productImageButtons" ? $(w) : $(S, !1);
      }, !0), v(_, B);
    };
    return T(g, (_) => {
      u() === "colorDropdown" || u() === "imageDropdown" || u() === "productImageDropdown" || u() === "mixedDropdown" ? _(f) : _(p, !1);
    }), v(t, d), Ze(c);
  }
  Le(kc, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Le(mc, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const yc = "mediaImages", gl = (t = []) => {
    const n = Rr(xc(t));
    return ea(yc, n), { getMediaImageUrl: n, setMediaImages: (r) => {
      n.set(xc(r));
    } };
  }, An = () => {
    const t = Xi(yc);
    if (!t) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return t;
  }, xc = (t) => (n) => {
    if (!n) return;
    const r = t.find((i) => i.gid === n);
    return r == null ? void 0 : r.url;
  }, wc = "config", Fi = (t) => {
    const n = Rr(t);
    return ea(wc, n), { config: n, setConfig: (r) => {
      n.set(r);
    } };
  }, cn = () => {
    const t = Xi(wc);
    if (!t) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return t;
  }, Pc = "swatchSettings", pl = (t) => {
    const n = Rr(t);
    return ea(Pc, n), { swatchSettings: n, setSwatchSettings: (r) => {
      n.set(r);
    } };
  };
  var lg = D('<img alt="" class="kaching-bundles__bar-variant-image"/>'), sg = D('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), og = D('<div class="kaching-bundles__invalid-variant-error"><!></div>'), cg = D('<div><div class="kaching-bundles__bar-variant__content"><!> <div class="kaching-bundles__bar-variant-selects"></div></div> <!></div>');
  function qn(t, n) {
    Je(n, !0);
    const r = () => $e(B, "$config", l), i = () => $e(y, "$swatchSettings", l), [l, s] = Pt();
    let u = m(n, "product", 7), o = m(n, "selectedVariantId", 7), a = m(n, "number", 7, void 0), c = m(n, "showImage", 7, !1), d = m(n, "forceDropdown", 7, !1), g = m(n, "onChange", 7), f = m(n, "onOptionChange", 7);
    const p = Gt(), _ = An(), B = cn(), y = (() => {
      const b = Xi(Pc);
      if (!b) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
      return b;
    })();
    let w = h(() => u().variants.find((b) => b.id === o())), S = Ae(at([]));
    Xe(() => {
      if (e(w)) W(S, [...e(w).options], !0);
      else {
        if (o() && r().featureFlags.hide_missing_variants && u().variants.length > 0) {
          const b = N(u().variants, 0, e(S));
          if (b) return W(S, [...b.options], !0), void Zt(() => g()(b.id));
        }
        W(S, [], !0);
      }
    });
    let $ = h(() => {
      return b = u(), C = e(S), O = i().swatchOptions, j = $e(_, "$getMediaImageUrl", l), ie = d(), b.options.map((oe) => ({ name: oe.name, position: oe.position, swatchType: q(oe, O, ie), optionValues: oe.optionValues.map((M) => {
        const ne = ce(oe.position, M.name, C, b);
        if (r().featureFlags.hide_missing_variants && ne.length === 0) return null;
        const me = !ne.some((he) => he.availableForSale);
        return { name: M.name, unavailable: me, swatch: L(oe, M, O, j, C, b) };
      }).filter((M) => M !== null) }));
      var b, C, O, j, ie;
    }), A = h(() => {
      var b;
      return c() ? ((b = e(w)) == null ? void 0 : b.image) || u().image : null;
    });
    function I({ position: b, value: C }) {
      const O = e(S)[b - 1];
      e(S)[b - 1] = C;
      let j = u().variants.find((ie) => e(S).every((oe, M) => ie.options[M] === oe));
      if (!j && r().featureFlags.hide_missing_variants) {
        const ie = N(ce(b, C, e(S), u()), b, e(S));
        ie && (j = ie, W(S, [...j.options], !0));
      }
      j && (g()(j.id), f() && f()(b, C, O));
    }
    function q(b, C, O) {
      var j;
      const ie = (j = C.find((oe) => oe.name === b.defaultName)) == null ? void 0 : j.swatchType;
      if (ie && ie !== "default") return O ? (function(oe) {
        switch (oe) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return oe;
        }
      })(ie) : ie;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const oe of b.optionValues) if (oe.swatch.image || oe.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function L(b, C, O, j, ie, oe) {
      var M, ne;
      const me = r().featureFlags.native_swatches_disabled ? null : C.swatch, he = O.find((E) => E.name === b.defaultName);
      if (!he || he.swatchType === "default") return me || { color: null, image: null };
      if (he.swatchType === "colorButtons" || he.swatchType === "colorDropdown")
        return { color: z((M = he.colors.find((E) => E.name === C.defaultName)) == null ? void 0 : M.color) || (me == null ? void 0 : me.color) || z(Qd(C.defaultName)) || null, image: null };
      if (he.swatchType === "imageButtons" || he.swatchType === "imageDropdown") {
        const E = j(((ne = he.images.find((ae) => ae.name === C.defaultName)) == null ? void 0 : ne.mediaImageGID) || null);
        return { color: (me == null ? void 0 : me.color) || null, image: E || (me == null ? void 0 : me.image) || null };
      }
      if (he.swatchType === "productImageDropdown" || he.swatchType === "productImageButtons") {
        const E = b.position - 1, ae = oe.variants.filter((Se) => Se.image && Se.options[E] === C.name);
        let R = ae[0], le = 0;
        for (const Se of ae) {
          let X = 0;
          for (let ge = 0; ge < E; ge++) Se.options[ge] === ie[ge] && X++;
          X > le && (le = X, R = Se);
        }
        return { color: null, image: (R == null ? void 0 : R.image) || null };
      }
      return { color: null, image: null };
    }
    function z(b) {
      if (!b) return;
      const { red: C, green: O, blue: j } = b;
      return `#${C.toString(16).padStart(2, "0")}${O.toString(16).padStart(2, "0")}${j.toString(16).padStart(2, "0")}`;
    }
    function ce(b, C, O, j) {
      const ie = b - 1, oe = O.slice(0, ie);
      return j.variants.filter((M) => M.options[ie] === C && oe.every((ne, me) => M.options[me] === ne));
    }
    function N(b, C, O) {
      if (b.length === 0) return null;
      let j = b[0], ie = -1;
      const oe = O.slice(C);
      for (const M of b) {
        let ne = 0;
        for (let me = 0; me < oe.length; me++) M.options[C + me] === oe[me] && (ne += oe.length - me);
        ne > ie && (ie = ne, j = M);
      }
      return j;
    }
    var re = { get product() {
      return u();
    }, set product(b) {
      u(b), k();
    }, get selectedVariantId() {
      return o();
    }, set selectedVariantId(b) {
      o(b), k();
    }, get number() {
      return a();
    }, set number(b = void 0) {
      a(b), k();
    }, get showImage() {
      return c();
    }, set showImage(b = !1) {
      c(b), k();
    }, get forceDropdown() {
      return d();
    }, set forceDropdown(b = !1) {
      d(b), k();
    }, get onChange() {
      return g();
    }, set onChange(b) {
      g(b), k();
    }, get onOptionChange() {
      return f();
    }, set onOptionChange(b) {
      f(b), k();
    } }, Q = cg();
    let Y;
    var K = P(Q), U = P(K), J = (b) => {
      var C = lg();
      fe(() => Pe(C, "src", e(A))), v(b, C);
    }, Z = (b) => {
      var C = De(), O = ve(C), j = (ie) => {
        var oe = sg(), M = G(P(oe), 2), ne = P(M, !0);
        x(M), x(oe), fe(() => yt(ne, a())), v(ie, oe);
      };
      T(O, (ie) => {
        a() && ie(j);
      }, !0), v(b, C);
    };
    T(U, (b) => {
      e(A) ? b(J) : b(Z, !1);
    });
    var V = G(U, 2);
    Ut(V, 21, () => e($), (b) => b.name, (b, C) => {
      mc(b, { get option() {
        return e(C);
      }, get swatchSize() {
        return i().swatchSize;
      }, get swatchShape() {
        return i().swatchShape;
      }, get swatchType() {
        return e(C).swatchType;
      }, get value() {
        return e(S)[e(C).position - 1];
      }, onChange: I });
    }), x(V), x(K);
    var ee = G(K, 2), ye = (b) => {
      var C = og();
      Me(P(C), () => $e(p, "$translate", l)("system.invalid_variant")), x(C), v(b, C);
    };
    T(ee, (b) => {
      e(w) && e(w).availableForSale || b(ye);
    }), x(Q), fe((b) => Y = qt(Q, 1, "kaching-bundles__bar-variant", null, Y, b), [() => ({ "kaching-bundles__bar-variant--invalid": !e(w) || !e(w).availableForSale })]), v(t, Q);
    var F = Ze(re);
    return s(), F;
  }
  Le(qn, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var ug = D('<a target="_blank"><!></a>'), dg = D("<div><!></div>");
  function or(t, n) {
    Je(n, !0);
    const r = m(n, "url", 7), i = m(n, "children", 7), l = m(n, "class", 7);
    var s = { get url() {
      return r();
    }, set url(d) {
      r(d), k();
    }, get children() {
      return i();
    }, set children(d) {
      i(d), k();
    }, get class() {
      return l();
    }, set class(d) {
      l(d), k();
    } }, u = De(), o = ve(u), a = (d) => {
      var g = ug();
      Ao(P(g), i), x(g), fe(() => {
        Pe(g, "href", r()), qt(g, 1, sa(l()));
      }), v(d, g);
    }, c = (d) => {
      var g = dg();
      Ao(P(g), i), x(g), fe(() => qt(g, 1, sa(l()))), v(d, g);
    };
    return T(o, (d) => {
      r() ? d(a) : d(c, !1);
    }), v(t, u), Ze(s);
  }
  Le(or, { url: {}, children: {}, class: {} }, [], [], !0);
  const Sc = "priceFormatter", pa = (t = "{{amount}}", n) => {
    const r = Rr(Cc(t, n));
    return ea(Sc, r), { formatPrice: r, setMoneyFormat: (i, l) => {
      r.set(Cc(i, l));
    } };
  }, bn = () => {
    const t = Xi(Sc);
    if (!t) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return t;
  }, Cc = (t, n) => (r, i) => gg(r, t, (!(i != null && i.preserveDecimals) || Math.round(r) % 100 == 0) && n), gg = (t, n, r) => {
    const i = ((a, c) => c ? a.includes("amount_no_decimals") ? a : a.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : a)(n, r), l = { amount: (a) => a.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (a) => a.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (a) => a.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (a) => a.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (a) => a.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (a) => a.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (a) => a.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (a) => a.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (a) => a.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, s = /{{\s*(\w+)\s*}}/, u = i.match(s), o = (l[u ? u[1] : "amount"] || l.amount)(t / 100);
    return i.replace(s, o);
  }, Bc = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ic = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", pg = { new_price: ({ totalDiscountedPrice: t, quantity: n }) => ({ value: t / n, type: "price" }), new_total: ({ totalDiscountedPrice: t }) => ({ value: t, type: "price" }), original_price: ({ totalFullPrice: t, quantity: n }) => ({ value: t / n, type: "price" }), original_total: ({ totalFullPrice: t }) => ({ value: t, type: "price" }), saved_total: ({ totalFullPrice: t, totalDiscountedPrice: n }) => ({ value: t - n, type: "price" }), saved_amount: ({ totalFullPrice: t, totalDiscountedPrice: n, quantity: r }) => ({ value: (t - n) / r, type: "price" }), quantity: ({ quantity: t }) => ({ value: t, type: "number" }), buy_quantity: ({ dealBar: t, quantity: n }) => {
    if ((t == null ? void 0 : t.dealBarType) !== "bxgy") return;
    const r = t.buyQuantity + t.getQuantity;
    return { value: n - Math.floor(n / r) * t.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: t, quantity: n }) => {
    if ((t == null ? void 0 : t.dealBarType) !== "bxgy") return;
    const r = t.buyQuantity + t.getQuantity;
    return { value: Math.floor(n / r) * t.getQuantity, type: "number" };
  }, saved_percentage: ({ totalFullPrice: t, totalDiscountedPrice: n, dealBar: r, legacySavedPercentage: i }) => {
    if (i && r && (r.dealBarType === "quantity-break" || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    let l = (t - n) / t * 100;
    return l = Math.round(100 * l) / 100, { value: Math.round(l), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: t, unitQuantity: n }) => {
    if (n) return { value: t / n, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalFullPrice: t, totalDiscountedPrice: n, unitQuantity: r }) => {
    if (r) return { value: (t - n) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: t, unitQuantity: n }) => {
    if (n) return { value: t / n, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: t }) => {
    if (t) return { value: t, type: "number" };
  } }, hg = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, fg = /\{\{[^}]*\}\}/g, bg = ({ priceFormatter: t, product: n, totalFullPrice: r, totalDiscountedPrice: i, quantity: l, dealBar: s, legacySavedPercentage: u, unitQuantity: o, sellingPlan: a }) => (c, d, g) => {
    const f = pg[c];
    if (f) {
      const p = f({ totalFullPrice: r, totalDiscountedPrice: i, quantity: l, dealBar: s, legacySavedPercentage: u, unitQuantity: o });
      if (!p) return;
      let _ = p.value;
      if (d !== void 0 && g !== void 0) {
        const y = ((w, S, $) => {
          switch (S) {
            case "+":
              return w + $;
            case "-":
              return w - $;
            case "*":
              return w * $;
            case "/":
              return $ === 0 ? void 0 : w / $;
          }
        })(_, d, p.type !== "price" || d !== "+" && d !== "-" ? g : 100 * g);
        if (y === void 0) return;
        _ = y;
      }
      const B = d === "/" || p.preserveDecimals === !0;
      return ((y, w, S, $) => {
        switch (w) {
          case "price":
            return S(y, { preserveDecimals: $ });
          case "number":
            return String(Math.round(100 * y) / 100);
          case "percentage":
            return `${Math.round(y)}%`;
        }
      })(_, p.type, t, B);
    }
    if (d === void 0) return (({ variable: p, product: _, sellingPlan: B }) => {
      switch (p) {
        case "product":
          return _ == null ? void 0 : _.title;
        case "metafield":
          return (_ == null ? void 0 : _.metafields.text) || void 0;
        case "metafield2":
          return (_ == null ? void 0 : _.metafields.text2) || void 0;
        case "metafield3":
          return (_ == null ? void 0 : _.metafields.text3) || void 0;
        case "metafield4":
          return (_ == null ? void 0 : _.metafields.text4) || void 0;
        case "selling_plan":
          return (B == null ? void 0 : B.name) || void 0;
      }
    })({ variable: c, product: n, sellingPlan: a });
  }, vn = ({ priceFormatter: t, product: n, totalFullPrice: r, totalDiscountedPrice: i, quantity: l, dealBar: s, legacySavedPercentage: u = !1, unitQuantity: o, sellingPlan: a }) => (c) => {
    if (!c) return c;
    const d = bg({ priceFormatter: t, product: n, totalFullPrice: r, totalDiscountedPrice: i, quantity: l, dealBar: s, legacySavedPercentage: u, unitQuantity: o, sellingPlan: a });
    return c.replace(hg, (g, f, p, _) => {
      var B;
      if (p && _) {
        const y = parseFloat(_);
        return (B = d(f, p, y)) != null ? B : "";
      }
      return d(f) || "";
    }).replace(fg, "");
  };
  function os(t) {
    const { unitPriceMeasurement: n } = t;
    return n ? n.referenceValue == 1 ? n.referenceUnit : `${n.referenceValue}${n.referenceUnit}` : null;
  }
  function Zn(t) {
    return t.reduce((n, { variant: r, quantity: i }) => {
      const { unitPriceMeasurement: l } = r;
      if (!l) return n;
      const s = (function(u, o, a) {
        if (o === a) return u;
        if (o === "g" && a === "kg" || o === "ml" && a === "l") return u / 1e3;
      })(l.quantityValue, l.quantityUnit, l.referenceUnit);
      return s ? n + s / l.referenceValue * i : n;
    }, 0) || null;
  }
  var vg = D('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), _g = D('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), kg = D('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), mg = D('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), yg = D('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), xg = D('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), wg = D('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), Pg = D('<img alt="Decrease"/>'), Sg = D('<img alt="Increase"/>'), Cg = D('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), Bg = D("<img/>"), Ig = D("<!> <!>", 1), Dg = D('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function Dc(t, n) {
    Je(n, !0);
    const r = () => $e(y, "$formatPrice", l), i = () => $e(B, "$translate", l), [l, s] = Pt(), u = m(n, "product", 7), o = m(n, "dealBlock", 7), a = m(n, "multipleGiftsSelector", 7), c = m(n, "selectedVariantIds", 7), d = m(n, "availableQuantity", 7), g = m(n, "onSelect", 7), f = m(n, "onRemove", 7), p = m(n, "onVariantChange", 7), _ = m(n, "onQuantityChange", 7), B = Gt(), y = bn();
    let w = Ae(!1);
    const S = h(() => c().length > 0), $ = h(() => c().length || 1), A = h(() => !e(S) && d() === 0), I = h(() => u().variants.find((X) => X.id === c()[0]) || u().variants[0]), q = h(() => e(w) && e(I).image || u().image), L = h(() => c().map((X) => u().variants.find((ge) => ge.id === X) || u().variants[0])), z = h(() => e(L).length > 0 ? e(L).reduce((X, ge) => X + K(o(), ge), 0) : K(o(), e(I))), ce = h(() => u().url ? `${u().url}?variant=${c()[0] || u().variants[0].id}` : void 0), N = h(() => o().chooseMultipleGiftsModal), re = h(() => vn({ priceFormatter: r(), product: u(), totalFullPrice: e(z), totalDiscountedPrice: 0, quantity: e($), unitQuantity: Zn(e(L).map((X) => ({ variant: X, quantity: 1 }))) })), Q = h(() => {
      var X;
      return e(re)(i()(((X = e(N)) == null ? void 0 : X.subtitle) || ""));
    }), Y = h(() => {
      var X, ge;
      return e(S) ? (X = e(N)) == null ? void 0 : X.buttonTextAfterSelection : (ge = e(N)) == null ? void 0 : ge.buttonTextBeforeSelection;
    });
    function K(X, ge) {
      return X.useProductCompareAtPrice && ge.compareAtPrice ? Math.max(ge.price, ge.compareAtPrice) : ge.price;
    }
    function U() {
      e($) <= 1 || _()(e($) - 1);
    }
    function J() {
      e($) >= d() || _()(e($) + 1);
    }
    var Z = { get product() {
      return u();
    }, set product(X) {
      u(X), k();
    }, get dealBlock() {
      return o();
    }, set dealBlock(X) {
      o(X), k();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(X) {
      a(X), k();
    }, get selectedVariantIds() {
      return c();
    }, set selectedVariantIds(X) {
      c(X), k();
    }, get availableQuantity() {
      return d();
    }, set availableQuantity(X) {
      d(X), k();
    }, get onSelect() {
      return g();
    }, set onSelect(X) {
      g(X), k();
    }, get onRemove() {
      return f();
    }, set onRemove(X) {
      f(X), k();
    }, get onVariantChange() {
      return p();
    }, set onVariantChange(X) {
      p(X), k();
    }, get onQuantityChange() {
      return _();
    }, set onQuantityChange(X) {
      _(X), k();
    } }, V = Dg(), ee = P(V), ye = P(ee), F = (X) => {
      or(X, { get url() {
        return e(ce);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (ge, Ve) => {
        var ue = vg();
        Pe(ue, "width", 100), Pe(ue, "height", 100), fe(() => Pe(ue, "src", e(q))), v(ge, ue);
      }, $$slots: { default: !0 } });
    };
    T(ye, (X) => {
      e(q) && X(F);
    });
    var b = G(ye, 2), C = P(b);
    or(C, { get url() {
      return e(ce);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (X, ge) => {
      var Ve = _g(), ue = P(Ve, !0);
      x(Ve), fe(() => yt(ue, u().title)), v(X, Ve);
    }, $$slots: { default: !0 } });
    var O = G(C, 2), j = (X) => {
      var ge = kg();
      Me(P(ge), () => e(Q)), x(ge), v(X, ge);
    };
    T(O, (X) => {
      e(Q) && X(j);
    });
    var ie = G(O, 2), oe = P(ie);
    Me(P(oe), () => i()("system.free")), x(oe);
    var M = G(oe, 2), ne = (X) => {
      var ge = De();
      Ue(ve(ge), () => e(z), (Ve) => {
        var ue = mg();
        Me(P(ue), () => r()(e(z))), x(ue), v(Ve, ue);
      }), v(X, ge);
    };
    T(M, (X) => {
      a().showPrice && e(z) > 0 && X(ne);
    }), x(ie);
    var me = G(ie, 2), he = (X) => {
      var ge = wg();
      Ut(ge, 21, c, jr, (Ve, ue, Be) => {
        var te = xg(), _e = P(te), qe = P(_e), Ie = (Ne) => {
          Qr(Ne, { get product() {
            return u();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        T(qe, (Ne) => {
          Be === 0 && Ne(Ie);
        });
        var be = G(qe, 2), ze = P(be), Oe = (Ne) => {
          var dt = yg();
          dt.textContent = `#${Be + 1}`, v(Ne, dt);
        };
        T(ze, (Ne) => {
          c().length > 1 && Ne(Oe);
        });
        var xe = G(ze, 2);
        qn(P(xe), { get product() {
          return u();
        }, get selectedVariantId() {
          return e(ue);
        }, onChange: (Ne) => {
          W(w, !0), p()(Be, Ne);
        } }), x(xe), x(be), x(_e), x(te), v(Ve, te);
      }), x(ge), v(X, ge);
    };
    T(me, (X) => {
      u().variants.length > 1 && X(he);
    }), x(b), x(ee);
    var E = G(ee, 2), ae = P(E), R = (X) => {
      var ge = Cg(), Ve = P(ge);
      {
        let _e = h(() => e($) <= 1);
        Vt(Ve, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: U, get disabled() {
          return e(_e);
        }, children: (qe, Ie) => {
          var be = Pg();
          fe(() => Pe(be, "src", Bc)), v(qe, be);
        }, $$slots: { default: !0 } });
      }
      var ue = G(Ve, 2), Be = P(ue, !0);
      x(ue);
      var te = G(ue, 2);
      {
        let _e = h(() => e($) >= d());
        Vt(te, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: J, get disabled() {
          return e(_e);
        }, children: (qe, Ie) => {
          var be = Sg();
          fe(() => Pe(be, "src", Ic)), v(qe, be);
        }, $$slots: { default: !0 } });
      }
      x(ge), fe(() => yt(Be, e($))), v(X, ge);
    };
    T(ae, (X) => {
      e(S) && a().maxQuantity > 1 && X(R);
    });
    var le = G(ae, 2);
    {
      let X = h(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(A) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(S) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Vt(le, { element: "span", get class() {
        return e(X);
      }, onclick: function() {
        e(S) ? (W(w, !1), f()()) : g()();
      }, get disabled() {
        return e(A);
      }, children: (ge, Ve) => {
        var ue = Ig(), Be = ve(ue), te = (be) => {
          var ze = Bg();
          fe((Oe) => {
            Pe(ze, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(ze, "alt", Oe);
          }, [() => i()("system.remove")]), v(be, ze);
        };
        T(Be, (be) => {
          e(S) && be(te);
        });
        var _e = G(Be, 2), qe = (be) => {
          var ze = Wn();
          fe((Oe) => yt(ze, Oe), [() => i()(e(Y))]), v(be, ze);
        }, Ie = (be) => {
          v(be, Wn("Choose"));
        };
        T(_e, (be) => {
          e(Y) ? be(qe) : be(Ie, !1);
        }), v(ge, ue);
      }, $$slots: { default: !0 } });
    }
    x(E), x(V), v(t, V);
    var Se = Ze(Z);
    return s(), Se;
  }
  Le(Dc, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const zg = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function $g(t, n) {
    var r;
    (r = n()) == null || r();
  }
  function Ag(t, n, r, i, l) {
    var s;
    const u = n();
    r()(i().id, u), (s = l()) == null || s();
  }
  var qg = D('<img alt="Close"/>'), Mg = D('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function cs(t, n) {
    Je(n, !0);
    const r = () => $e(g, "$translate", i), [i, l] = Pt(), s = m(n, "dealBlock", 7), u = m(n, "multipleGiftsSelector", 7), o = m(n, "products", 23, () => []), a = m(n, "initialSelectedGifts", 23, () => []), c = m(n, "onConfirm", 7, () => {
    }), d = m(n, "onClose", 7), g = Gt();
    let f = Ae(at((function(b) {
      const C = {};
      for (const O of b) {
        const j = O.product.id;
        C[j] || (C[j] = []), C[j].push(O.variant.id);
      }
      return C;
    })(a())));
    const p = h(() => s().chooseMultipleGiftsModal), _ = h(() => ((b) => b ? pn({ "kaching-choose-multiple-gifts-button-size": b.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": b.textSize + "px", "kaching-choose-multiple-gifts-price-color": Fe(b.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": Fe(b.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": Fe(b.textColor), "kaching-choose-multiple-gifts-button-color": Fe(b.buttonColor), "kaching-choose-multiple-gifts-button-text-color": Fe(b.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": b.productPhotoSize + "px" }) : "")(e(p) || null)), B = h(() => u().maxQuantity), y = h(() => Object.values(e(f)).reduce((b, C) => b + C.length, 0));
    function w(b) {
      return e(f)[b] || [];
    }
    function S(b) {
      const C = b.variants.find((O) => O.availableForSale);
      return (C == null ? void 0 : C.id) || b.variants[0].id;
    }
    const $ = h(() => {
      var b;
      return ((b = e(p)) == null ? void 0 : b.footerText) || "FREE gifts selected";
    });
    var A = { get dealBlock() {
      return s();
    }, set dealBlock(b) {
      s(b), k();
    }, get multipleGiftsSelector() {
      return u();
    }, set multipleGiftsSelector(b) {
      u(b), k();
    }, get products() {
      return o();
    }, set products(b = []) {
      o(b), k();
    }, get initialSelectedGifts() {
      return a();
    }, set initialSelectedGifts(b = []) {
      a(b), k();
    }, get onConfirm() {
      return c();
    }, set onConfirm(b = () => {
    }) {
      c(b), k();
    }, get onClose() {
      return d();
    }, set onClose(b) {
      d(b), k();
    } }, I = Mg(), q = P(I), L = P(q), z = P(L), ce = (b) => {
      var C = Wn();
      fe((O) => yt(C, O), [() => r()(e(p).heading)]), v(b, C);
    };
    T(z, (b) => {
      var C;
      (C = e(p)) != null && C.heading && b(ce);
    }), x(L);
    var N = G(L, 2), re = (b) => {
      Vt(b, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return d();
      }, children: (C, O) => {
        var j = qg();
        fe(() => Pe(j, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), v(C, j);
      }, $$slots: { default: !0 } });
    };
    T(N, (b) => {
      d() && b(re);
    }), x(q);
    var Q = G(q, 2);
    Ut(Q, 21, o, (b) => b.id, (b, C) => {
      {
        let O = h(() => w(e(C).id)), j = h(() => (function(ie) {
          const oe = w(ie).length;
          return e(B) - e(y) + oe;
        })(e(C).id));
        Dc(b, { get dealBlock() {
          return s();
        }, get multipleGiftsSelector() {
          return u();
        }, get product() {
          return e(C);
        }, get selectedVariantIds() {
          return e(O);
        }, get availableQuantity() {
          return e(j);
        }, onSelect: () => (function(ie) {
          if (e(y) >= e(B)) return;
          const oe = S(ie), M = o().length === 1 ? e(B) : 1;
          W(f, { ...e(f), [ie.id]: Array(M).fill(oe) }, !0);
        })(e(C)), onRemove: () => (function(ie) {
          const { [ie]: oe, ...M } = e(f);
          W(f, M, !0);
        })(e(C).id), onVariantChange: (ie, oe) => (function(M, ne, me) {
          const he = w(M);
          if (ne >= he.length) return;
          const E = [...he];
          E[ne] = me, W(f, { ...e(f), [M]: E }, !0);
        })(e(C).id, ie, oe), onQuantityChange: (ie) => (function(oe, M) {
          const ne = w(oe.id), me = ne.length;
          if (M === me) return;
          let he;
          if (M > me) {
            const E = S(oe), ae = M - me;
            he = [...ne, ...Array(ae).fill(E)];
          } else he = ne.slice(0, M);
          W(f, { ...e(f), [oe.id]: he }, !0);
        })(e(C), ie) });
      }
    }), x(Q);
    var Y = G(Q, 2), K = P(Y), U = P(K);
    x(K);
    var J = G(K, 2), Z = P(J);
    Z.__click = [$g, d];
    var V = P(Z, !0);
    x(Z);
    var ee = G(Z, 2);
    ee.__click = [Ag, function() {
      const b = [];
      for (const C of o()) {
        const O = w(C.id);
        for (const j of O) {
          const ie = C.variants.find((oe) => oe.id === j);
          ie && b.push({ id: `${j}`, variant: ie, product: C, quantity: 1, fullPrice: ie.price });
        }
      }
      return b;
    }, c, u, d];
    var ye = P(ee, !0);
    x(ee), x(J), x(Y), x(I), fe((b, C, O) => {
      var j, ie;
      Ht(I, e(_)), yt(U, `${(j = e(y)) != null ? j : ""}/${(ie = e(B)) != null ? ie : ""}
      ${b != null ? b : ""}`), yt(V, C), yt(ye, O);
    }, [() => r()(e($)), () => r()("system.cancel"), () => r()("system.confirm")]), v(t, I);
    var F = Ze(A);
    return l(), F;
  }
  $n(["click"]), Le(cs, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Vg = D('<div class="kaching-bundles"><!></div>');
  function zc(t, n) {
    Je(n, !0);
    const r = m(n, "config", 7), i = m(n, "dealBlock", 7), l = m(n, "products", 23, () => []), s = m(n, "mediaImages", 7), u = m(n, "translations", 7), o = m(n, "multipleGiftsSelector", 7), { setConfig: a } = Fi(r()), { setMoneyFormat: c } = pa(r().moneyFormat), { setTranslations: d } = Ti(u()), { setMediaImages: g } = gl(s()), { setSwatchSettings: f } = pl({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    Xe(() => {
      a(r());
    }), Xe(() => {
      c(r().moneyFormat, !!i().showPricesWithoutDecimals);
    }), Xe(() => {
      d(u());
    }), Xe(() => {
      g(s());
    }), Xe(() => {
      f({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    });
    var p = { get config() {
      return r();
    }, set config(w) {
      r(w), k();
    }, get dealBlock() {
      return i();
    }, set dealBlock(w) {
      i(w), k();
    }, get products() {
      return l();
    }, set products(w = []) {
      l(w), k();
    }, get mediaImages() {
      return s();
    }, set mediaImages(w) {
      s(w), k();
    }, get translations() {
      return u();
    }, set translations(w) {
      u(w), k();
    }, get multipleGiftsSelector() {
      return o();
    }, set multipleGiftsSelector(w) {
      o(w), k();
    } }, _ = De(), B = ve(_), y = (w) => {
      var S = Vg();
      cs(P(S), { get dealBlock() {
        return i();
      }, get products() {
        return l();
      }, get multipleGiftsSelector() {
        return o();
      } }), x(S), v(w, S);
    };
    return T(B, (w) => {
      o() && w(y);
    }), v(t, _), Ze(p);
  }
  function ha(t, n) {
    var r;
    if (!n) return t.price;
    const i = t.sellingPlans.find((l) => l.id === n.id);
    return (r = i == null ? void 0 : i.price) != null ? r : t.price;
  }
  function Gg(t, n) {
    const r = n.priceAdjustment;
    if (!r) return t;
    switch (r.type) {
      case "percentage":
        return t * (1 - r.value / 100);
      case "fixed_amount":
        return t - r.value;
      case "price":
        return r.value;
    }
  }
  function $c(t, n) {
    return t.sellingPlans.filter((r) => n.some((i) => i.sellingPlans.some((l) => l.id === r.id)));
  }
  function Ac(t, n, r) {
    let i;
    if (t.sellingPlanGid) {
      const l = Tt(t.sellingPlanGid);
      i = n.find((s) => s.id === l);
    } else i = r || n[0];
    return i && n.some((l) => l.id === i.id) ? i : n[0];
  }
  function qc(t, n, r, i) {
    return t || (n ? r.some((l) => l.id === n.id) ? n : r[0] : i && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Le(zc, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this;
    }
  }));
  const Mn = (t, n, r) => Tg(t, n, r) || Fg(t, n), Tg = (t, n, r) => {
    if (r && n.sellingPlans.length !== 0) return n.sellingPlans.some((i) => i.id === r) ? t.sellingPlans.find((i) => i.id === r) : t.sellingPlans.find((i) => i.id === n.sellingPlans[0].id);
  }, Fg = (t, n) => {
    if (!t.requiresSellingPlan || n.sellingPlans.length === 0) return;
    const r = n.sellingPlans[0].id;
    return t.sellingPlans.find((i) => i.id === r);
  };
  function Ur({ discountType: t, discountValue: n, discountQuantity: r, variantQuantities: i, currencyRate: l, priceRounding: s, sellingPlan: u, percentageCentsRoundingWorkaround: o }) {
    const a = (function({ discountType: g, discountValue: f, discountQuantity: p, variantQuantities: _, currencyRate: B, sellingPlan: y, percentageCentsRoundingWorkaround: w }) {
      const S = _.map(({ variant: I, quantity: q }) => ha(I, y) * q), $ = S.reduce((I, q) => I + q, 0), A = _.map(({ quantity: I }) => I).reduce((I, q) => I + q, 0);
      if (g === "specific") {
        let I = 100 * Number(f) * B;
        if (A > Number(p)) {
          const z = I / Number(p);
          I = Math.ceil(z * A);
        }
        const q = I / A;
        let L = 0;
        for (const { variant: z, quantity: ce } of _) {
          if (y && z.sellingPlans.some((N) => N.id === y.id) && y.priceAdjustment) {
            L += Gg(q, y) * ce;
            continue;
          }
          L += q * ce;
        }
        return Math.max(0, Math.min(L, $));
      }
      if (g === "percentage") {
        if (w) {
          const q = $ * (100 - Number(f)) / 100;
          return Math.max(0, Math.min(Math.ceil(q), $));
        }
        let I = 0;
        for (const { variant: q, quantity: L } of _) {
          const z = ha(q, y);
          I += Math.ceil(z * (100 - Number(f)) / 100) * L;
        }
        return Math.max(0, Math.min(I, $));
      }
      if (g === "amount") {
        const I = Math.round(100 * Number(f)) * B, q = I * A;
        return typeof document != "undefined" && $ > 0 && q > $ && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: q, fullOrderPrice: $ } })), Math.max(0, Math.min($ - I * A, $));
      }
      return $;
    })({ discountType: t, discountValue: n, discountQuantity: r, variantQuantities: i, currencyRate: l, sellingPlan: u, percentageCentsRoundingWorkaround: o }), c = i.map(({ variant: g, quantity: f }) => s != null && s.v2 ? ha(g, u) * f : g.price * f).reduce((g, f) => g + f, 0), d = i.map(({ quantity: g }) => g).reduce((g, f) => g + f, 0);
    if (s && (t !== "default" || s.v2)) {
      if (s.perItem) {
        const g = hl(a / d, s.precision) * d;
        return s.v2 && Math.round(g) > Math.round(c) && a / d > 100 ? hl(a / d - 100, s.precision) * d : g <= c ? g : a;
      }
      {
        const g = hl(a, s.precision);
        return s.v2 && Math.round(g) > Math.round(c) && a > 100 ? hl(a - 100, s.precision) : g <= c ? g : a;
      }
    }
    return a;
  }
  function Mc(t, n, r, i, l, s) {
    return Ur({ discountType: t.discountType, discountValue: t.discountValue, discountQuantity: t.quantity, variantQuantities: n, currencyRate: r, priceRounding: i, sellingPlan: l, percentageCentsRoundingWorkaround: s });
  }
  function Vc(t, n, r, i, l) {
    const s = [...n].sort((f, p) => f.variant.price - p.variant.price), u = s.reduce((f, p) => f + p.quantity, 0) >= t.buyQuantity + t.getQuantity ? t.getQuantity : 0, o = [], a = [];
    let c = u;
    for (const { variant: f, quantity: p } of s) {
      const _ = Math.min(p, c), B = p - _;
      c -= _, _ > 0 && o.push({ variant: f, quantity: _ }), B > 0 && a.push({ variant: f, quantity: B });
    }
    const d = o.length > 0 ? Ur({ discountType: t.getDiscountType || "percentage", discountValue: t.getDiscountValue || "100", discountQuantity: u, variantQuantities: o, currencyRate: r, priceRounding: i, sellingPlan: l }) : 0, g = a.reduce((f, p) => f + p.quantity, 0);
    return d + Ur({ discountType: t.buyDiscountType || "default", discountValue: t.buyDiscountValue || "0", discountQuantity: g, variantQuantities: a, currencyRate: r, priceRounding: i, sellingPlan: l });
  }
  function us(t, n, r, i, l) {
    return t.bundleProducts.filter(({ productGID: s }) => s).map((s) => {
      const u = n[s.id];
      if (!u) return 0;
      const o = Mn(u.product, u.variant, l == null ? void 0 : l.id);
      return Ur({ discountType: s.discountType, discountValue: s.discountValue, discountQuantity: s.quantity, variantQuantities: [u], currencyRate: r, priceRounding: i, sellingPlan: o });
    }).reduce((s, u) => s + u, 0);
  }
  function hl(t, n = ".00") {
    switch (n) {
      case ".99":
        return t > 99 ? 100 * Math.ceil(t / 100) - 1 : t;
      case ".95":
        return t > 95 ? 100 * Math.ceil(t / 100) - 5 : t;
      case ".90":
        return t > 90 ? 100 * Math.ceil(t / 100) - 10 : t;
      case ".x9":
        return t > 9 ? 10 * Math.ceil(t / 10) - 1 : t;
      case ".x0":
        return 10 * Math.ceil(t / 10);
      default:
        return 100 * Math.ceil(t / 100);
    }
  }
  var Og = D('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), Lg = D('<span class="kaching-bundles__choose-product__product-title"> </span>'), jg = D('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Eg = D('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Rg = D('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Qg = D("<div><!> <!></div>"), Ng = D('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function Gc(t, n) {
    var r;
    Je(n, !0);
    const i = () => $e(_, "$config", u), l = () => $e(p, "$formatPrice", u), s = () => $e(f, "$translate", u), [u, o] = Pt(), a = m(n, "product", 7), c = m(n, "dealBlock", 7), d = m(n, "dealBar", 7), g = m(n, "onChoose", 7), f = Gt(), p = bn(), _ = cn();
    let B = Ae(!1), y = Ae(at(((r = a().variants.find((M) => M.availableForSale)) == null ? void 0 : r.id) || a().variants[0].id));
    const w = h(() => a().variants.find((M) => M.id === e(y)) || a().variants[0]), S = h(() => {
      var M;
      return e(B) || ((M = c().chooseProductModal) == null ? void 0 : M.showVariantImageByDefault);
    }), $ = h(() => e(S) && e(w).image || a().image), A = h(() => c().priceRounding ? { perItem: !0, precision: c().priceRoundingPrecision, v2: i().featureFlags.price_rounding_v2 || !1 } : void 0), I = h(() => d().dealBarType === "bxgy" ? e(w).price : Ur({ discountType: d().discountType, discountValue: d().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(w), quantity: 1 }], currencyRate: i().currencyRate, priceRounding: e(A) })), q = h(() => (function(M, ne) {
      return M.useProductCompareAtPrice && ne.compareAtPrice ? Math.max(ne.price, ne.compareAtPrice) : ne.price;
    })(c(), e(w))), L = h(() => a().url ? `${a().url}?variant=${e(y)}` : void 0), z = h(() => vn({ priceFormatter: l(), product: a(), totalFullPrice: e(q), totalDiscountedPrice: e(I), quantity: 1, unitQuantity: Zn([{ variant: e(w), quantity: 1 }]) })), ce = h(() => e(z)(s()(c().chooseProductModal.subtitle || ""))), N = h(() => c().chooseProductModal.buttonText);
    function re(M) {
      W(B, !0), W(y, M, !0);
    }
    var Q = { get product() {
      return a();
    }, set product(M) {
      a(M), k();
    }, get dealBlock() {
      return c();
    }, set dealBlock(M) {
      c(M), k();
    }, get dealBar() {
      return d();
    }, set dealBar(M) {
      d(M), k();
    }, get onChoose() {
      return g();
    }, set onChoose(M) {
      g(M), k();
    } }, Y = Ng(), K = P(Y), U = P(K), J = (M) => {
      or(M, { get url() {
        return e(L);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (ne, me) => {
        var he = Og();
        Pe(he, "width", 100), Pe(he, "height", 100), fe(() => Pe(he, "src", e($))), v(ne, he);
      }, $$slots: { default: !0 } });
    };
    T(U, (M) => {
      e($) && M(J);
    });
    var Z = G(U, 2), V = P(Z);
    or(V, { get url() {
      return e(L);
    }, class: "kaching-bundles__choose-product__product-link", children: (M, ne) => {
      var me = Lg(), he = P(me, !0);
      x(me), fe(() => yt(he, a().title)), v(M, me);
    }, $$slots: { default: !0 } });
    var ee = G(V, 2), ye = (M) => {
      var ne = jg();
      Me(P(ne), () => e(ce)), x(ne), v(M, ne);
    };
    T(ee, (M) => {
      e(ce) && M(ye);
    });
    var F = G(ee, 2), b = P(F);
    Ue(b, () => e(I), (M) => {
      var ne = Eg();
      Me(P(ne), () => l()(e(I))), x(ne), v(M, ne);
    });
    var C = G(b, 2), O = (M) => {
      var ne = De();
      Ue(ve(ne), () => e(q), (me) => {
        var he = Rg();
        Me(P(he), () => l()(e(q))), x(he), v(me, he);
      }), v(M, ne);
    };
    T(C, (M) => {
      e(q) && e(q) > e(I) && M(O);
    }), x(F);
    var j = G(F, 2), ie = (M) => {
      var ne = Qg(), me = P(ne);
      Qr(me, { get product() {
        return a();
      }, class: "kaching-bundles__choose-product__product-option-names" }), qn(G(me, 2), { get product() {
        return a();
      }, get selectedVariantId() {
        return e(y);
      }, onChange: re }), x(ne), v(M, ne);
    };
    T(j, (M) => {
      a().variants.length > 1 && M(ie);
    }), x(Z), x(K), Vt(G(K, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      g()({ product: a(), variant: e(w) });
    }, children: (M, ne) => {
      var me = De(), he = ve(me), E = (R) => {
        var le = Wn();
        fe((Se) => yt(le, Se), [() => s()(e(N))]), v(R, le);
      }, ae = (R) => {
        v(R, Wn("Choose"));
      };
      T(he, (R) => {
        e(N) ? R(E) : R(ae, !1);
      }), v(M, me);
    }, $$slots: { default: !0 } }), x(Y), v(t, Y);
    var oe = Ze(Q);
    return o(), oe;
  }
  Le(Gc, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const Tc = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Wg = D('<img alt="Close"/>'), Ug = (t, n) => {
    W(n, !e(n));
  }, Hg = (t, n, r, i) => {
    W(n, e(r).value, !0), W(i, !1);
  }, Jg = D('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Zg = D('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Kg = D('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Yg = D('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Xg = (t, n) => {
    W(n, "");
  }, ep = D('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), tp = D('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), np = D('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function ds(t, n) {
    var r;
    Je(n, !0);
    const i = () => $e(g, "$translate", l), [l, s] = Pt(), u = m(n, "dealBlock", 7), o = m(n, "dealBar", 7), a = m(n, "products", 23, () => []), c = m(n, "onChoose", 7), d = m(n, "onClose", 7), g = Gt(), f = h(() => u().chooseProductModal), p = h(() => ((F) => pn({ "kaching-choose-product-button-size": F.buttonSize + "px", "kaching-choose-product-text-size": F.textSize + "px", "kaching-choose-product-price-color": Fe(F.priceColor), "kaching-choose-product-compare-at-price-color": Fe(F.compareAtPriceColor), "kaching-choose-product-text-color": Fe(F.textColor), "kaching-choose-product-button-color": Fe(F.buttonColor), "kaching-choose-product-button-text-color": Fe(F.buttonTextColor), "kaching-choose-product-photo-size": F.productPhotoSize + "px" }))(e(f)));
    let _ = Ae(""), B = Ae(!1);
    const y = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, w = h(() => [{ value: y.Relevance, label: i()("system.sort_relevance") }, { value: y.NewestFirst, label: i()("system.sort_newest_first") }, { value: y.PriceLowToHigh, label: i()("system.sort_price_low_to_high") }, { value: y.PriceHighToLow, label: i()("system.sort_price_high_to_low") }]);
    let S = Ae(at(Object.values(y).includes((r = e(f).defaultSortOption) != null ? r : "") ? e(f).defaultSortOption : y.Relevance));
    const $ = h(() => e(f).showSearchField ? a().filter((F) => F.title.toLowerCase().includes(e(_).toLowerCase().trim())) : a()), A = h(() => {
      const F = [...e($)], b = (O) => {
        const j = O.variants.find((ie) => ie.availableForSale) || O.variants[0];
        return (j == null ? void 0 : j.price) || 0;
      }, C = (O) => {
        if (!O.createdAt) return 0;
        const j = Date.parse(O.createdAt);
        return Number.isNaN(j) ? 0 : j;
      };
      switch (e(S)) {
        case y.Relevance:
          return F;
        case y.NewestFirst:
          return F.sort((O, j) => {
            const ie = C(j) - C(O);
            return ie !== 0 ? ie : j.id - O.id;
          });
        case y.PriceLowToHigh:
          return F.sort((O, j) => b(O) - b(j));
        case y.PriceHighToLow:
          return F.sort((O, j) => b(j) - b(O));
        default:
          return F;
      }
    }), I = h(() => e(f).showSearchField && e(_).trim().length > 0 && e(A).length === 0);
    function q() {
      W(B, !1);
    }
    function L(F, b) {
      const C = (O) => {
        F.contains(O.target) || b();
      };
      return document.addEventListener("click", C, !0), { destroy() {
        document.removeEventListener("click", C, !0);
      } };
    }
    var z = { get dealBlock() {
      return u();
    }, set dealBlock(F) {
      u(F), k();
    }, get dealBar() {
      return o();
    }, set dealBar(F) {
      o(F), k();
    }, get products() {
      return a();
    }, set products(F = []) {
      a(F), k();
    }, get onChoose() {
      return c();
    }, set onChoose(F) {
      c(F), k();
    }, get onClose() {
      return d();
    }, set onClose(F) {
      d(F), k();
    } }, ce = np(), N = P(ce), re = P(N), Q = P(re), Y = (F) => {
      var b = Wn();
      fe((C) => yt(b, C), [() => i()(e(f).heading)]), v(F, b);
    };
    T(Q, (F) => {
      e(f).heading && F(Y);
    }), x(re), Vt(G(re, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return d();
    }, children: (F, b) => {
      var C = Wg();
      fe(() => Pe(C, "src", Tc)), v(F, C);
    }, $$slots: { default: !0 } }), x(N);
    var K = G(N, 2), U = (F) => {
      var b = Yg(), C = P(b), O = P(C), j = G(O, 2);
      Er(j), x(C);
      var ie = G(C, 2), oe = P(ie);
      oe.__click = [Ug, B];
      var M = P(oe), ne = G(M);
      x(oe);
      var me = G(oe, 2), he = (E) => {
        var ae = Kg();
        Ut(ae, 21, () => e(w), (R) => R.value, (R, le) => {
          var Se = Zg();
          Se.__click = [Hg, S, le, B];
          var X = P(Se), ge = P(X, !0);
          x(X);
          var Ve = G(X, 2), ue = (Be) => {
            var te = Jg();
            fe(() => Pe(te, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), v(Be, te);
          };
          T(Ve, (Be) => {
            e(S) === e(le).value && Be(ue);
          }), x(Se), fe(() => yt(ge, e(le).label)), v(R, Se);
        }), x(ae), v(E, ae);
      };
      T(me, (E) => {
        e(B) && E(he);
      }), x(ie), Hl(ie, (E, ae) => L == null ? void 0 : L(E, ae), () => q), x(b), fe((E, ae, R) => {
        Pe(O, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(j, "aria-label", E), Pe(j, "placeholder", ae), Pe(M, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), yt(ne, ` ${R != null ? R : ""}`);
      }, [() => i()("system.search"), () => i()("system.search"), () => i()("system.sort_by")]), bd(j, () => e(_), (E) => W(_, E)), v(F, b);
    };
    T(K, (F) => {
      e(f).showSearchField && F(U);
    });
    var J = G(K, 2), Z = P(J), V = (F) => {
      var b = tp(), C = P(b), O = (ie) => {
        var oe = ep(), M = ve(oe), ne = P(M);
        x(M);
        var me = G(M, 2), he = P(me, !0);
        x(me);
        var E = G(me, 2), ae = P(E, !0);
        x(E);
        var R = G(E, 2);
        R.__click = [Xg, _];
        var le = P(R, !0);
        x(R), fe((Se, X, ge) => {
          Pe(ne, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), yt(he, Se), yt(ae, X), yt(le, ge);
        }, [() => i()("system.no_results_found"), () => i()("system.no_results_description"), () => i()("system.clear_search")]), v(ie, oe);
      }, j = (ie) => {
        var oe = Wn();
        fe((M) => yt(oe, M), [() => i()("system.no_products_available")]), v(ie, oe);
      };
      T(C, (ie) => {
        e(I) ? ie(O) : ie(j, !1);
      }), x(b), v(F, b);
    }, ee = (F) => {
      var b = De();
      Ut(ve(b), 17, () => e(A), (C) => C.id, (C, O) => {
        Gc(C, { get dealBlock() {
          return u();
        }, get dealBar() {
          return o();
        }, get product() {
          return e(O);
        }, get onChoose() {
          return c();
        } });
      }), v(F, b);
    };
    T(Z, (F) => {
      e(A).length === 0 ? F(V) : F(ee, !1);
    }), x(J), x(ce), fe(() => Ht(ce, e(p))), v(t, ce);
    var ye = Ze(z);
    return s(), ye;
  }
  $n(["click"]), Le(ds, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var rp = D('<div class="kaching-bundles"><!></div>');
  function Fc(t, n) {
    Je(n, !0);
    const r = m(n, "config", 7), i = m(n, "dealBlock", 7), l = m(n, "dealBar", 7), s = m(n, "products", 23, () => []), u = m(n, "mediaImages", 7), o = m(n, "translations", 7), { setConfig: a } = Fi(r()), { setMoneyFormat: c } = pa(r().moneyFormat), { setTranslations: d } = Ti(o()), { setMediaImages: g } = gl(u()), { setSwatchSettings: f } = pl({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    Xe(() => {
      a(r());
    }), Xe(() => {
      c(r().moneyFormat, !!i().showPricesWithoutDecimals);
    }), Xe(() => {
      d(o());
    }), Xe(() => {
      g(u());
    }), Xe(() => {
      f({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    });
    var p = { get config() {
      return r();
    }, set config(B) {
      r(B), k();
    }, get dealBlock() {
      return i();
    }, set dealBlock(B) {
      i(B), k();
    }, get dealBar() {
      return l();
    }, set dealBar(B) {
      l(B), k();
    }, get products() {
      return s();
    }, set products(B = []) {
      s(B), k();
    }, get mediaImages() {
      return u();
    }, set mediaImages(B) {
      u(B), k();
    }, get translations() {
      return o();
    }, set translations(B) {
      o(B), k();
    } }, _ = rp();
    return ds(P(_), { get dealBlock() {
      return i();
    }, get dealBar() {
      return l();
    }, get products() {
      return s();
    }, onChoose: () => {
    }, onClose: () => {
    } }), x(_), v(t, _), Ze(p);
  }
  customElements.define("kaching-bundles-choose-product", Le(Fc, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this;
    }
  })), yi = !0;
  var ip = Ln('<svg width="102" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function Oc(t) {
    v(t, ip());
  }
  Le(Oc, {}, [], [], !0);
  var ap = D('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), lp = D('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), sp = D('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), op = D('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function Oi(t, n) {
    Je(n, !0);
    const r = m(n, "style", 7, "simple"), i = m(n, "text", 7, ""), l = m(n, "imageUrl", 7), s = m(n, "blockLayout", 7), u = h(() => s() === "vertical" && (r() === "most-popular" || r() === "simple" && !!i() || r() === "custom" && !!l()));
    var o = { get style() {
      return r();
    }, set style(g = "simple") {
      r(g), k();
    }, get text() {
      return i();
    }, set text(g = "") {
      i(g), k();
    }, get imageUrl() {
      return l();
    }, set imageUrl(g) {
      l(g), k();
    }, get blockLayout() {
      return s();
    }, set blockLayout(g) {
      s(g), k();
    } }, a = De(), c = ve(a), d = (g) => {
      var f = De(), p = ve(f), _ = (y) => {
        var w = ap(), S = P(w);
        x(w), fe(() => {
          Pe(S, "alt", i() || "Badge"), Pe(S, "src", l());
        }), v(y, w);
      }, B = (y) => {
        var w = De(), S = ve(w), $ = (I) => {
          var q = lp();
          Oc(P(q)), x(q), v(I, q);
        }, A = (I) => {
          var q = op();
          Ue(P(q), i, (L) => {
            var z = sp();
            Me(P(z), i), x(z), v(L, z);
          }), x(q), v(I, q);
        };
        T(S, (I) => {
          r() === "most-popular" ? I($) : I(A, !1);
        }, !0), v(y, w);
      };
      T(p, (y) => {
        r() === "custom" && l() ? y(_) : y(B, !1);
      }), v(g, f);
    };
    return T(c, (g) => {
      e(u) && g(d);
    }), v(t, a), Ze(o);
  }
  Le(Oi, { style: {}, text: {}, imageUrl: {}, blockLayout: {} }, [], [], !0);
  const fl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", Lc = ({ dealBlock: t, imageSize: n }) => {
    const { fonts: r, colors: i, cornerRadius: l } = t;
    return pn({ "kaching-free-gift-background-color": i.freeGiftBackground && Fe(i.freeGiftBackground), "kaching-free-gift-text-color": i.freeGiftText && Fe(i.freeGiftText), "kaching-free-gift-selected-background-color": i.freeGiftSelectedBackground && Fe(i.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": i.freeGiftSelectedText && Fe(i.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && Un(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && Hn(r.freeGift.style), "kaching-free-gift-image-border-radius": (l || 0) / 2 + "px", "kaching-free-gift-image-height": n + "px" });
  };
  var cp = D('<img alt="" class="kaching-bundles__free-gift__image"/>'), up = D('<div class="kaching-bundles__free-gift__image"></div>'), dp = D('<span class="kaching-bundles__free-gift__text"><!></span>'), gp = D('<div class="kaching-bundles__free-gift__full-price"><!></div>'), pp = D('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function jc(t, n) {
    Je(n, !0);
    const r = () => $e(p, "$config", l), i = () => $e(B, "$formatPrice", l), [l, s] = Pt();
    let u = m(n, "dealBlock", 7), o = m(n, "freeGift", 7), a = m(n, "product", 7), c = m(n, "dealBarSelected", 7, !1), d = m(n, "sets", 7), g = m(n, "mainProductVariantId", 7), f = m(n, "onChange", 7);
    const p = cn(), _ = Gt(), B = bn(), y = An(), w = h(() => {
      var F;
      return a() ? o().variantGIDs ? o().variantGIDs.map(Tt) : (F = a()) == null ? void 0 : F.variants.map((b) => b.id) : null;
    }), S = h(() => {
      if (a()) return { ...a(), variants: a().variants.filter((F) => (r().preview || F.availableForSale) && (!e(w) || e(w).includes(F.id))) };
    });
    let $ = Ae(void 0);
    const A = h(() => (function(F, b) {
      if (F !== void 0) return F;
      if (b != null && b.availableForSale && b.variants.length > 0) return b.variants[0].id;
    })(e($), e(S))), I = h(() => e(S) && e(A) ? e(S).variants.find((F) => F.id === e(A)) : void 0), q = h(() => {
      var F, b;
      return o().mediaImageGID ? $e(y, "$getMediaImageUrl", l)(o().mediaImageGID) : ((F = e(I)) == null ? void 0 : F.image) || ((b = a()) == null ? void 0 : b.image);
    }), L = h(() => o().quantity * d()), z = h(() => (function(F, b) {
      if (!b) return 0;
      let C = b.price;
      return b.compareAtPrice && F.useProductCompareAtPrice && (C = Math.max(C, b.compareAtPrice)), C * e(L);
    })(u(), e(I))), ce = h(() => Lc({ dealBlock: u(), imageSize: o().imageSize })), N = h(() => vn({ priceFormatter: i(), product: a(), totalFullPrice: e(z), totalDiscountedPrice: 0, quantity: e(L), unitQuantity: e(I) ? Zn([{ variant: e(I), quantity: e(L) }]) : null })), re = h(() => o() ? e(N)($e(_, "$translate", l)(o().text)) : ""), Q = h(() => {
      var F;
      if ((F = a()) != null && F.url) return e(A) ? `${a().url}?variant=${e(A)}` : a().url;
    });
    function Y(F) {
      W($, F, !0);
    }
    let K;
    gr(() => {
      o().productGID, W($, void 0), K = void 0;
    }), gr(() => {
      if (u().disableVariantOptionSync || !g() || !e(S) || g() === K) return;
      const F = K;
      K = g(), e(S).variants.some((b) => b.id === g()) && (e($) !== void 0 && e($) !== F || W($, g(), !0));
    }), Xe(() => {
      var F;
      e(I) && ((F = a()) != null && F.availableForSale) && e(L) && Zt(() => {
        f()({ variant: e(I), product: a(), fullPrice: o().showPrice ? e(z) : 0 });
      });
    });
    const U = h(() => !(!a() || a().availableForSale && a().variants.filter((F) => F.availableForSale && (!e(w) || e(w).includes(F.id))).length !== 0));
    var J = { get dealBlock() {
      return u();
    }, set dealBlock(F) {
      u(F), k();
    }, get freeGift() {
      return o();
    }, set freeGift(F) {
      o(F), k();
    }, get product() {
      return a();
    }, set product(F) {
      a(F), k();
    }, get dealBarSelected() {
      return c();
    }, set dealBarSelected(F = !1) {
      c(F), k();
    }, get sets() {
      return d();
    }, set sets(F) {
      d(F), k();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(F) {
      g(F), k();
    }, get onChange() {
      return f();
    }, set onChange(F) {
      f(F), k();
    } }, Z = De(), V = ve(Z), ee = (F) => {
      var b = pp();
      let C;
      var O = P(b), j = P(O);
      {
        let ae = h(() => c() ? e(Q) : void 0);
        or(j, { get url() {
          return e(ae);
        }, class: "kaching-bundles__free-gift__link", children: (R, le) => {
          var Se = De(), X = ve(Se), ge = (ue) => {
            var Be = cp();
            fe(() => {
              Pe(Be, "src", e(q)), Pe(Be, "height", o().imageSize || 0);
            }), v(ue, Be);
          }, Ve = (ue) => {
            var Be = up();
            let te;
            fe((_e) => te = Ht(Be, "", te, _e), [() => {
              var _e, qe;
              return { height: `${(_e = o().imageSize || 0) != null ? _e : ""}px`, width: `${(qe = (a() || o().mediaImageGID) && o().imageSize || 0) != null ? qe : ""}px` };
            }]), v(ue, Be);
          };
          T(X, (ue) => {
            e(q) ? ue(ge) : ue(Ve, !1);
          }), v(R, Se);
        }, $$slots: { default: !0 } });
      }
      var ie = G(j, 2), oe = P(ie), M = (ae) => {
        var R = De();
        Ue(ve(R), () => e(re), (le) => {
          var Se = dp();
          Me(P(Se), () => e(re)), x(Se), v(le, Se);
        }), v(ae, R);
      };
      T(oe, (ae) => {
        e(re) && ae(M);
      });
      var ne = G(oe, 2), me = (ae) => {
        qn(ae, { get product() {
          return e(S);
        }, get selectedVariantId() {
          return e(A);
        }, onChange: Y });
      };
      T(ne, (ae) => {
        c() && e(S) && e(S).variants.length > 1 && e(A) && ae(me);
      }), x(ie), x(O);
      var he = G(O, 2), E = (ae) => {
        var R = De();
        Ue(ve(R), () => e(z), (le) => {
          var Se = gp();
          Me(P(Se), () => i()(e(z))), x(Se), v(le, Se);
        }), v(ae, R);
      };
      T(he, (ae) => {
        o().showPrice && e(z) > 0 && ae(E);
      }), x(b), fe((ae) => {
        C = qt(b, 1, "kaching-bundles__free-gift", null, C, ae), Pe(b, "data-free-gift-id", o().id), Ht(b, e(ce));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(U) })]), v(F, b);
    };
    T(V, (F) => {
      (!o().productGID || e(I) || r().preview && e(U)) && F(ee);
    }), v(t, Z);
    var ye = Ze(J);
    return s(), ye;
  }
  Le(jc, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var hp = D('<div class="kaching-bundles__free-gift__divider"></div>'), fp = D("<!> <!>", 1);
  function fa(t, n) {
    Je(n, !0);
    const r = () => $e(p, "$config", i), [i, l] = Pt();
    let s = m(n, "dealBlock", 7), u = m(n, "freeGifts", 7), o = m(n, "otherProducts", 7), a = m(n, "dealBarSelected", 7), c = m(n, "sellingPlan", 7), d = m(n, "sets", 7, 1), g = m(n, "mainProductVariantId", 7), f = m(n, "onChange", 7);
    const p = cn();
    let _ = Ae(at({})), B = h(() => u().filter((A) => !A.applyOnlyForSubscriptions || c()));
    const y = h(() => e(B).flatMap((A) => {
      const I = A.productGID ? o().find((L) => L.id === Tt(A.productGID)) : void 0;
      if (!r().preview && A.productGID && !(I != null && I.availableForSale)) return [];
      const q = I && !r().preview ? Jn(I) : I;
      return { freeGift: A, product: q };
    }));
    Xe(() => {
      (function(A, I) {
        if (!u().length) return;
        const q = A.filter((L) => L.id in I).map((L) => ({ id: L.id, variant: I[L.id].variant, product: I[L.id].product, quantity: L.quantity * d(), fullPrice: I[L.id].fullPrice }));
        f()(q);
      })(e(B), e(_));
    });
    var w = { get dealBlock() {
      return s();
    }, set dealBlock(A) {
      s(A), k();
    }, get freeGifts() {
      return u();
    }, set freeGifts(A) {
      u(A), k();
    }, get otherProducts() {
      return o();
    }, set otherProducts(A) {
      o(A), k();
    }, get dealBarSelected() {
      return a();
    }, set dealBarSelected(A) {
      a(A), k();
    }, get sellingPlan() {
      return c();
    }, set sellingPlan(A) {
      c(A), k();
    }, get sets() {
      return d();
    }, set sets(A = 1) {
      d(A), k();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(A) {
      g(A), k();
    }, get onChange() {
      return f();
    }, set onChange(A) {
      f(A), k();
    } }, S = De();
    Ut(ve(S), 19, () => e(y), ({ freeGift: A, product: I }) => A.id, (A, I, q) => {
      let L = () => e(I).freeGift;
      var z = fp(), ce = ve(z);
      jc(ce, { get dealBlock() {
        return s();
      }, get freeGift() {
        return L();
      }, get product() {
        return e(I).product;
      }, get dealBarSelected() {
        return a();
      }, get sets() {
        return d();
      }, get mainProductVariantId() {
        return g();
      }, onChange: (Q) => (function(Y, K) {
        K.variant ? e(_)[Y] = K : delete e(_)[Y];
      })(L().id, Q) });
      var N = G(ce, 2), re = (Q) => {
        v(Q, hp());
      };
      T(N, (Q) => {
        e(q) < e(y).length - 1 && Q(re);
      }), v(A, z);
    }), v(t, S);
    var $ = Ze(w);
    return l(), $;
  }
  function Ec(t, n = "body") {
    let r;
    async function i(l) {
      if (typeof (n = l) == "string") {
        if (r = document.querySelector(n), r === null && (await El(), r = document.querySelector(n)), r === null) throw new Error(`No element found matching css selector: "${n}"`);
      } else {
        if (!(n instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${n === null ? "null" : typeof n}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = n;
      }
      r.appendChild(t), t.hidden = !1;
    }
    return i(n), { update: i, destroy: function() {
      t.parentNode && t.parentNode.removeChild(t);
    } };
  }
  Le(fa, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var bp = D('<div hidden=""><!></div>');
  function bl(t, n) {
    Je(n, !1);
    let r = m(n, "target", 12, "body");
    var i = { get target() {
      return r();
    }, set target(s) {
      r(s), k();
    } };
    (function(s = !1) {
      const u = Xt, o = u.l.u;
      if (!o) return;
      let a = () => Co(u.s);
      if (s) {
        let c = 0, d = {};
        const g = ra(() => {
          let f = !1;
          const p = u.s;
          for (const _ in p) p[_] !== d[_] && (d[_] = p[_], f = !0);
          return f && c++, c;
        });
        a = () => e(g);
      }
      o.b.length && gr(() => {
        Qo(u, a), Fa(o.b);
      }), Xe(() => {
        const c = Zt(() => o.m.map(Tu));
        return () => {
          for (const d of c) typeof d == "function" && d();
        };
      }), o.a.length && Xe(() => {
        Qo(u, a), Fa(o.a);
      });
    })();
    var l = bp();
    return Mo(P(l), n, "default", {}), x(l), Hl(l, (s, u) => Ec == null ? void 0 : Ec(s, u), r), v(t, l), Ze(i);
  }
  Le(bl, { target: {} }, ["default"], [], !0);
  const Rc = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], Qc = [0, 12, 16, 20, 24, 28];
  var vp = (t, n) => {
    t.target === t.currentTarget && n()();
  }, _p = D('<img alt="Close"/>'), kp = D('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), mp = (t, n, r) => n(r(), t.currentTarget.value), yp = D('<img alt="Clear"/>'), xp = D("<span> </span>"), wp = D('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!></div></div>'), Pp = D('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function gs(t, n) {
    Je(n, !0);
    const r = m(n, "product", 7), i = m(n, "selectedVariants", 7), l = m(n, "personalisationValues", 7), s = m(n, "addPersonalisationModal", 7), u = m(n, "inline", 7, !1), o = m(n, "onConfirm", 7), a = m(n, "onClose", 7), c = h(() => {
      var J, Z;
      return (Z = (J = s()) == null ? void 0 : J.characterLimitEnabled) != null && Z;
    }), d = h(() => {
      var J, Z;
      return e(c) ? (Z = (J = s()) == null ? void 0 : J.characterLimit) != null ? Z : 30 : void 0;
    }), g = Math.max(...i().map(({ index: J }) => J), -1);
    let f = Ae(at(Array.from({ length: g + 1 }, (J, Z) => l()[Z] || "")));
    const p = new Set(l().map((J, Z) => J && J.trim() !== "" ? Z : -1).filter((J) => J !== -1)), _ = h(() => s() ? (({ size: J, roundness: Z, imageSize: V, textSize: ee, overlayColor: ye, primaryTextColor: F, secondaryTextColor: b, buttonColor: C, buttonTextColor: O, errorColor: j }) => {
      const ie = Math.min(Math.max(0, J), Rc.length - 1), oe = Math.min(Math.max(0, Z), Qc.length - 1), M = Rc[ie], ne = Qc[oe];
      return pn({ "kaching-product-personalisation-font-0": M.fonts[0] + "px", "kaching-product-personalisation-font-1": M.fonts[1] + "px", "kaching-product-personalisation-font-2": M.fonts[2] + "px", "kaching-product-personalisation-font-3": M.fonts[3] + "px", "kaching-product-personalisation-gap-0": M.gaps[0] + "px", "kaching-product-personalisation-gap-1": M.gaps[1] + "px", "kaching-product-personalisation-gap-2": M.gaps[2] + "px", "kaching-product-personalisation-image-size": (V != null ? V : M.image) + "px", "kaching-product-personalisation-radius": ne + "px", "kaching-product-personalisation-text-size": ee + "px", "kaching-product-personalisation-overlay-color": Fe(ye), "kaching-product-personalisation-primary-text-color": Fe(F), "kaching-product-personalisation-secondary-text-color": Fe(b), "kaching-product-personalisation-button-color": Fe(C), "kaching-product-personalisation-button-text-color": Fe(O), "kaching-product-personalisation-error-color": Fe(j) });
    })(s()) : "");
    function B(J, Z) {
      if (e(d) === void 0 || Z.length <= e(d)) {
        const V = [...e(f)];
        V[J] = Z, W(f, V, !0);
      }
    }
    function y(J) {
      return p.has(J) && !!e(f)[J] && e(f)[J].trim() !== "";
    }
    const w = h(() => e(f).some((J) => J && J.trim() !== "")), S = h(() => p.size > 0), $ = h(() => !e(w) && !e(S));
    var A = { get product() {
      return r();
    }, set product(J) {
      r(J), k();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(J) {
      i(J), k();
    }, get personalisationValues() {
      return l();
    }, set personalisationValues(J) {
      l(J), k();
    }, get addPersonalisationModal() {
      return s();
    }, set addPersonalisationModal(J) {
      s(J), k();
    }, get inline() {
      return u();
    }, set inline(J = !1) {
      u(J), k();
    }, get onConfirm() {
      return o();
    }, set onConfirm(J) {
      o(J), k();
    }, get onClose() {
      return a();
    }, set onClose(J) {
      a(J), k();
    } }, I = Pp();
    let q;
    I.__click = [vp, a];
    var L = P(I), z = P(L), ce = P(z), N = P(ce), re = P(N, !0);
    x(N), Vt(G(N, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return a();
    }, children: (J, Z) => {
      var V = _p();
      fe(() => Pe(V, "src", Tc)), v(J, V);
    }, $$slots: { default: !0 } }), x(ce);
    var Q = G(ce, 2);
    Ut(Q, 21, i, ({ variant: J, index: Z }) => Z, (J, Z) => {
      let V = () => e(Z).variant, ee = () => e(Z).index;
      var ye = wp(), F = P(ye), b = P(F), C = P(b);
      x(b);
      var O = G(b, 2), j = P(O), ie = P(j);
      x(j);
      var oe = G(j, 2), M = (X) => {
        var ge = kp(), Ve = P(ge, !0);
        x(ge), fe((ue) => yt(Ve, ue), [() => V().options.join(", ")]), v(X, ge);
      };
      T(oe, (X) => {
        r().variants.length > 1 && X(M);
      }), x(O), x(F);
      var ne = G(F, 2), me = P(ne), he = P(me);
      let E;
      Er(he), he.__input = [mp, B, ee];
      var ae = G(he, 2), R = (X) => {
        Vt(X, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(ge) {
          const Ve = [...e(f)];
          Ve[ge] = "", W(f, Ve, !0);
        })(ee()), children: (ge, Ve) => {
          var ue = yp();
          fe(() => Pe(ue, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), v(ge, ue);
        }, $$slots: { default: !0 } });
      };
      T(ae, (X) => {
        y(ee()) && X(R);
      }), x(me);
      var le = G(me, 2), Se = (X) => {
        var ge = xp();
        let Ve;
        var ue = P(ge);
        x(ge), fe((Be) => {
          var te, _e;
          Ve = qt(ge, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ve, Be), yt(ue, `${(te = (e(f)[ee()] || "").length) != null ? te : ""}/${(_e = e(d)) != null ? _e : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(d) !== void 0 && (e(f)[ee()] || "").length >= e(d) })]), v(X, ge);
      };
      T(le, (X) => {
        e(c) && X(Se);
      }), x(ne), x(ye), fe((X) => {
        var ge, Ve;
        Pe(C, "src", V().image || r().image), yt(ie, `${(ge = r().title) != null ? ge : ""} #${ee() + 1}`), E = qt(he, 1, "kaching-bundles__personalisation-modal__input", null, E, X), Pe(he, "placeholder", (Ve = s()) == null ? void 0 : Ve.placeholderText), Ai(he, e(f)[ee()] || ""), Pe(he, "maxlength", e(d));
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": y(ee()), "kaching-bundles__personalisation-modal__input--error": e(d) !== void 0 && (e(f)[ee()] || "").length >= e(d) })]), v(J, ye);
    }), x(Q);
    var Y = G(Q, 2), K = P(Y);
    Vt(K, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return a();
    }, children: (J, Z) => {
      Yi(), v(J, Wn("Cancel"));
    }, $$slots: { default: !0 } });
    var U = G(K, 2);
    {
      let J = h(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e($) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Vt(U, { element: "button", get class() {
        return e(J);
      }, get disabled() {
        return e($);
      }, onclick: () => o()(e(f)), children: (Z, V) => {
        Yi(), v(Z, Wn("Confirm"));
      }, $$slots: { default: !0 } });
    }
    return x(Y), x(z), x(L), x(I), fe((J) => {
      var Z;
      q = qt(I, 1, "kaching-bundles__personalisation-modal-overlay", null, q, J), Ht(I, e(_)), yt(re, (Z = s()) == null ? void 0 : Z.heading);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() })]), v(t, I), Ze(A);
  }
  $n(["click", "input"]), Le(gs, { product: {}, selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Sp = (t, n) => {
    W(n, !0);
  }, Cp = (t, n) => {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), W(n, !0));
  }, Bp = D('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), Ip = D('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Dp = D('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), zp = D('<span class="kaching-bundles__product-personalisation__title"><!></span>'), $p = D('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Ap = D("<!> <!>", 1), qp = D('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Mp = D('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Vp = D('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), Gp = D('<div class="kaching-bundles"><!></div>'), Tp = D('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function Li(t, n) {
    Je(n, !0);
    const r = () => $e(_, "$config", s), i = () => $e(y, "$formatPrice", s), l = () => $e(B, "$translate", s), [s, u] = Pt();
    let o = m(n, "productPersonalisation", 7), a = m(n, "product", 7), c = m(n, "selectedVariantIds", 7), d = m(n, "quantity", 7), g = m(n, "addPersonalisationModal", 7), f = m(n, "onPersonalisationsChange", 7), p = m(n, "initialValues", 23, () => []);
    const _ = cn(), B = Gt(), y = bn(), w = An();
    let S = Ae(!1), $ = Ae(at([]));
    Xe(() => {
      o().id, p(), W($, p().map((ue) => ue || ""), !0);
    });
    const A = h(() => {
      if (o().mediaImageGID) return $e(w, "$getMediaImageUrl", s)(o().mediaImageGID);
    }), I = h(() => !e(A) && o().imageSize > 0), q = h(() => Math.round(100 * parseFloat(o().pricePerItem || "0") * r().currencyRate)), L = h(() => Math.round(100 * parseFloat(o().compareAtPrice || "0") * r().currencyRate)), z = h(() => e(q)), ce = h(() => e(L)), N = h(() => e(ce) > 0 && e(ce) > e(z)), re = h(() => ((ue) => pn({ "kaching-product-personalisation-image-height": ue.imageSize + "px" }))(o())), Q = h(() => vn({ priceFormatter: i(), product: void 0, totalFullPrice: e(ce) || e(z), totalDiscountedPrice: e(z), quantity: d(), unitQuantity: null })), Y = h(() => e(Q)(l()(o().title))), K = h(() => o().subtitle ? e(Q)(l()(o().subtitle)) : ""), U = h(() => c().map((ue, Be) => ({ variant: a().variants.find((te) => te.id === ue) || a().variants[0], index: Be }))), J = h(() => e($).some((ue) => (ue || "").trim() !== "")), Z = h(() => e($).map((ue, Be) => ({ value: ue, index: Be })).filter(({ value: ue }) => (ue || "").trim() !== "")), V = h(() => d() === 1);
    function ee(ue) {
      var Be;
      const te = ue.map((be) => be || "");
      if (W($, te, !0), W(S, !1), !o().variantGID) return;
      const _e = Tt(o().variantGID);
      if (!_e) return;
      const qe = l()(o().valueLabel || "Value"), Ie = te.map((be, ze) => ({ id: o().id, variantId: _e, text: be, valueLabel: qe, productIndex: ze })).filter((be) => be.text.trim() !== "");
      (Be = f()) == null || Be(Ie);
    }
    var ye = { get productPersonalisation() {
      return o();
    }, set productPersonalisation(ue) {
      o(ue), k();
    }, get product() {
      return a();
    }, set product(ue) {
      a(ue), k();
    }, get selectedVariantIds() {
      return c();
    }, set selectedVariantIds(ue) {
      c(ue), k();
    }, get quantity() {
      return d();
    }, set quantity(ue) {
      d(ue), k();
    }, get addPersonalisationModal() {
      return g();
    }, set addPersonalisationModal(ue) {
      g(ue), k();
    }, get onPersonalisationsChange() {
      return f();
    }, set onPersonalisationsChange(ue) {
      f(ue), k();
    }, get initialValues() {
      return p();
    }, set initialValues(ue = []) {
      p(ue), k();
    } }, F = Tp(), b = ve(F);
    let C;
    b.__click = [Sp, S], b.__keydown = [Cp, S];
    var O = P(b), j = P(O), ie = (ue) => {
      var Be = Bp(), te = P(Be);
      x(Be), fe(() => {
        Pe(te, "src", e(A)), Pe(te, "height", o().imageSize || 0);
      }), v(ue, Be);
    }, oe = (ue) => {
      var Be = De(), te = ve(Be), _e = (qe) => {
        var Ie = Ip(), be = P(Ie);
        x(Ie), fe(() => {
          Pe(be, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Pe(be, "height", o().imageSize || 0);
        }), v(qe, Ie);
      };
      T(te, (qe) => {
        e(I) && qe(_e);
      }, !0), v(ue, Be);
    };
    T(j, (ue) => {
      e(A) ? ue(ie) : ue(oe, !1);
    });
    var M = G(j, 2), ne = P(M), me = (ue) => {
      var Be = De();
      Ut(ve(Be), 17, () => e(Z), ({ value: te, index: _e }) => _e, (te, _e) => {
        var qe = Dp(), Ie = P(qe), be = (xe) => {
          var Ne = Wn();
          fe(() => yt(Ne, `#${e(_e).index + 1}`)), v(xe, Ne);
        };
        T(Ie, (xe) => {
          e(V) || xe(be);
        });
        var ze = G(Ie, 2), Oe = P(ze, !0);
        x(ze), x(qe), fe(() => yt(Oe, e(_e).value)), v(te, qe);
      }), v(ue, Be);
    }, he = (ue) => {
      var Be = Ap(), te = ve(Be), _e = (be) => {
        var ze = zp();
        Me(P(ze), () => e(Y)), x(ze), v(be, ze);
      };
      T(te, (be) => {
        e(Y) && be(_e);
      });
      var qe = G(te, 2), Ie = (be) => {
        var ze = $p();
        Me(P(ze), () => e(K)), x(ze), v(be, ze);
      };
      T(qe, (be) => {
        e(K) && be(Ie);
      }), v(ue, Be);
    };
    T(ne, (ue) => {
      e(J) ? ue(me) : ue(he, !1);
    }), x(M), x(O);
    var E = G(O, 2), ae = P(E), R = (ue) => {
      var Be = Mp(), te = P(Be);
      Me(te, () => i()(e(z)));
      var _e = G(te, 2), qe = (Ie) => {
        var be = qp(), ze = P(be, !0);
        x(be), fe(() => yt(ze, o().pricePerItemUnitLabel)), v(Ie, be);
      };
      T(_e, (Ie) => {
        o().pricePerItemUnitLabel && Ie(qe);
      }), x(Be), v(ue, Be);
    };
    T(ae, (ue) => {
      e(z) > 0 && ue(R);
    });
    var le = G(ae, 2), Se = (ue) => {
      var Be = Vp();
      Me(P(Be), () => i()(e(ce))), x(Be), v(ue, Be);
    };
    T(le, (ue) => {
      e(N) && ue(Se);
    }), x(E), x(b);
    var X = G(b, 2), ge = (ue) => {
      bl(ue, { target: "body", children: (Be, te) => {
        var _e = Gp();
        gs(P(_e), { get product() {
          return a();
        }, get selectedVariants() {
          return e(U);
        }, get personalisationValues() {
          return e($);
        }, get addPersonalisationModal() {
          return g();
        }, onConfirm: ee, onClose: () => {
          W(S, !1);
        } }), x(_e), v(Be, _e);
      }, $$slots: { default: !0 } });
    };
    T(X, (ue) => {
      e(S) && ue(ge);
    }), fe((ue) => {
      C = qt(b, 1, "kaching-bundles__product-personalisation", null, C, ue), Pe(b, "data-product-personalisation-id", o().id), Ht(b, e(re));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(J) })]), v(t, F);
    var Ve = Ze(ye);
    return u(), Ve;
  }
  function Fp(t, n, r) {
    const i = Number(t.target.value), l = n().find((s) => s.id === i);
    r()(l);
  }
  $n(["click", "keydown"]), Le(Li, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var Op = (t) => t.stopPropagation(), Lp = D("<option> </option>"), jp = D('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function pi(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "sellingPlans", 7), s = m(n, "selectedSellingPlan", 7), u = m(n, "onChange", 7), o = Gt();
    var a, c = { get sellingPlans() {
      return l();
    }, set sellingPlans(f) {
      l(f), k();
    }, get selectedSellingPlan() {
      return s();
    }, set selectedSellingPlan(f) {
      s(f), k();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), k();
    } }, d = jp();
    d.__change = [Fp, l, u], d.__click = [Op], Ut(d, 21, l, (f) => f.id, (f, p) => {
      var _ = Lp(), B = P(_, !0);
      x(_);
      var y = {};
      fe(() => {
        var w;
        yt(B, e(p).name), y !== (y = e(p).id) && (_.value = (w = _.__value = e(p).id) != null ? w : "");
      }), v(f, _);
    }), x(d), Kl(d), fe((f) => {
      var p;
      Pe(d, "aria-label", f), a !== (a = s().id) && (d.value = (p = d.__value = s().id) != null ? p : "", oa(d, s().id));
    }, [() => $e(o, "$translate", r)("system.subscription_plan")]), v(t, d);
    var g = Ze(c);
    return i(), g;
  }
  $n(["change", "click"]), Le(pi, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Ep = Ln('<svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function vl(t) {
    v(t, Ep());
  }
  Le(vl, {}, [], [], !0);
  var Rp = D('<img alt="" class="kaching-bundles__upsell__image"/>'), Qp = D('<div class="kaching-bundles__upsell__price"><!></div>'), Np = D('<div class="kaching-bundles__upsell__full-price"><!></div>'), Wp = D('<div class="kaching-bundles__upsell__price"><!></div>'), Up = D('<div class="kaching-bundles__upsell__full-price"><!></div>'), Hp = D('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), Jp = D('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), Zp = D('<div class="kaching-bundles__upsell__price"><!></div>'), Kp = D('<div class="kaching-bundles__upsell__full-price"><!></div>'), Yp = D('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), Xp = D('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), eh = D('<div class="kaching-bundles__upsell__price"><!></div>'), th = D('<div class="kaching-bundles__upsell__full-price"><!></div>'), nh = D("<!> <!>", 1), rh = D('<div><div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function Nc(t, n) {
    Je(n, !0);
    const r = () => $e(y, "$config", l), i = () => $e(_, "$formatPrice", l), [l, s] = Pt();
    let u = m(n, "dealBlock", 7), o = m(n, "upsell", 7), a = m(n, "product", 7), c = m(n, "dealBarSelected", 7, !1), d = m(n, "dealSellingPlan", 7), g = m(n, "sets", 7), f = m(n, "onChange", 7);
    const p = Gt(), _ = bn(), B = An(), y = cn();
    let w = Ae(at(o().preselected)), S = Ae(void 0), $ = Ae(void 0);
    const A = h(() => o().variantGIDs ? o().variantGIDs.map(Tt) : a().variants.map((R) => R.id)), I = h(() => ({ ...a(), variants: a().variants.filter((R) => (r().preview || R.availableForSale) && e(A).includes(R.id)) })), q = h(() => (function(R, le) {
      if (R !== void 0) return R;
      if (le != null && le.availableForSale && le.variants.length > 0) return le.variants[0].id;
    })(e(S), e(I))), L = h(() => e(I).variants.find((R) => R.id === e(q))), z = h(() => $e(B, "$getMediaImageUrl", l)(o().mediaImageGID)), ce = h(() => ((R, le) => {
      const { fonts: Se, colors: X, cornerRadius: ge } = R;
      return pn({ "kaching-upsell-background-color": X.upsellBackground && Fe(X.upsellBackground), "kaching-upsell-text-color": X.upsellText && Fe(X.upsellText), "kaching-upsell-selected-background-color": X.upsellSelectedBackground && Fe(X.upsellSelectedBackground), "kaching-upsell-selected-text-color": X.upsellSelectedText && Fe(X.upsellSelectedText), "kaching-upsell-font-size": Se.upsell && Se.upsell.size + "px", "kaching-upsell-font-weight": Se.upsell && Un(Se.upsell.style), "kaching-upsell-font-style": Se.upsell && Hn(Se.upsell.style), "kaching-upsell-image-border-radius": (ge || 0) / 2 + "px", "kaching-upsell-image-height": le.imageSize + "px" });
    })(u(), o())), N = h(() => a().url ? `${a().url}?variant=${e(q)}` : void 0), re = h(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Q = h(() => o().quantity * g()), Y = h(() => (function(R) {
      if (!R) return 0;
      let le = R.price;
      return u().useProductCompareAtPrice && R.compareAtPrice && (le = Math.max(le, R.compareAtPrice)), le * e(Q);
    })(e(L))), K = h(() => Math.ceil(e(Y) / e(Q))), U = h(() => {
      if (!o().sellAsSubscription || !e(L)) return [];
      const R = new Set(e(L).sellingPlans.map((le) => le.id));
      return a().sellingPlans.filter((le) => R.has(le.id));
    }), J = h(() => e(U).find((R) => R.id === e($)) || e(U)[0]), Z = h(() => {
      var R;
      if (e(L)) return o().sellAsSubscription && e(J) ? e(J) : Mn(a(), e(L), (R = d()) == null ? void 0 : R.id);
    }), V = h(() => Ur({ discountType: o().discountType, discountValue: o().discountValue, discountQuantity: o().quantity, variantQuantities: e(L) ? [{ variant: e(L), quantity: e(Q) }] : [], currencyRate: r().currencyRate, priceRounding: e(re), sellingPlan: e(Z) })), ee = h(() => Math.ceil(e(V) / e(Q))), ye = h(() => e(Y) !== e(V)), F = h(() => e(L) && os(e(L))), b = h(() => e(L) ? Zn([{ variant: e(L), quantity: e(Q) }]) : null), C = h(() => e(b) ? e(V) / e(b) : null), O = h(() => vn({ priceFormatter: i(), product: a(), totalFullPrice: e(Y), totalDiscountedPrice: e(V), quantity: e(Q), unitQuantity: e(b), sellingPlan: e(Z) })), j = h(() => e(O)($e(p, "$translate", l)(o().text)));
    function ie(R) {
      W(S, R, !0);
    }
    function oe() {
      c() && W(w, !e(w));
    }
    gr(() => {
      o().productGID, W(S, void 0);
    }), Xe(() => {
      if (e(L) && a().availableForSale && e(Q)) {
        const R = e(w), le = o().sellAsSubscription ? e(J) : void 0;
        Zt(() => {
          f()({ variant: R ? e(L) : null, product: R ? a() : null, discountedPrice: R ? e(V) : 0, fullPrice: R ? e(Y) : 0, sellingPlan: R ? le : void 0 });
        });
      }
    });
    const M = h(() => !a().availableForSale || a().variants.filter((R) => R.availableForSale && e(A).includes(R.id)).length === 0);
    var ne = { get dealBlock() {
      return u();
    }, set dealBlock(R) {
      u(R), k();
    }, get upsell() {
      return o();
    }, set upsell(R) {
      o(R), k();
    }, get product() {
      return a();
    }, set product(R) {
      a(R), k();
    }, get dealBarSelected() {
      return c();
    }, set dealBarSelected(R = !1) {
      c(R), k();
    }, get dealSellingPlan() {
      return d();
    }, set dealSellingPlan(R) {
      d(R), k();
    }, get sets() {
      return g();
    }, set sets(R) {
      g(R), k();
    }, get onChange() {
      return f();
    }, set onChange(R) {
      f(R), k();
    } }, me = De(), he = ve(me), E = (R) => {
      var le = rh();
      let Se;
      var X = P(le), ge = P(X), Ve = (je) => {
        {
          let st = h(() => ["kaching-bundles__upsell__checkbox", e(w) && "kaching-bundles__upsell__checkbox--selected"]);
          Vt(je, { element: "span", get class() {
            return e(st);
          }, onclick: oe, children: (it, we) => {
            var Ke = De(), ot = ve(Ke), lt = (nt) => {
              vl(nt);
            };
            T(ot, (nt) => {
              e(w) && nt(lt);
            }), v(it, Ke);
          }, $$slots: { default: !0 } });
        }
      };
      T(ge, (je) => {
        c() && je(Ve);
      });
      var ue = G(ge, 2), Be = (je) => {
        {
          let st = h(() => c() ? e(N) : void 0);
          or(je, { get url() {
            return e(st);
          }, class: "kaching-bundles__upsell__link", children: (it, we) => {
            var Ke = Rp();
            fe(() => {
              var ot;
              Pe(Ke, "src", e(z) || ((ot = e(L)) == null ? void 0 : ot.image) || a().image), Pe(Ke, "height", o().imageSize);
            }), v(it, Ke);
          }, $$slots: { default: !0 } });
        }
      };
      T(ue, (je) => {
        o().imageSize > 0 && je(Be);
      });
      var te = G(ue, 2), _e = P(te), qe = (je) => {
        Vt(je, { element: "span", class: "kaching-bundles__upsell__text", onclick: oe, children: (st, it) => {
          var we = De();
          Me(ve(we), () => e(j)), v(st, we);
        }, $$slots: { default: !0 } });
      };
      T(_e, (je) => {
        e(j) && je(qe);
      });
      var Ie = G(_e, 2), be = (je) => {
        qn(je, { get product() {
          return e(I);
        }, get selectedVariantId() {
          return e(q);
        }, onChange: ie });
      };
      T(Ie, (je) => {
        c() && e(I) && e(I).variants.length > 1 && e(q) && je(be);
      });
      var ze = G(Ie, 2), Oe = (je) => {
        pi(je, { get sellingPlans() {
          return e(U);
        }, get selectedSellingPlan() {
          return e(J);
        }, onChange: (st) => W($, st.id, !0) });
      };
      T(ze, (je) => {
        c() && e(w) && e(U).length > 1 && e(J) && je(Oe);
      }), x(te), x(X);
      var xe = G(X, 2), Ne = P(xe), dt = (je) => {
        var st = Jp(), it = ve(st), we = P(it);
        Ue(we, () => e(ee), (ut) => {
          var ct = Qp();
          Me(P(ct), () => i()(e(ee))), x(ct), v(ut, ct);
        });
        var Ke = G(we, 2), ot = (ut) => {
          var ct = De();
          Ue(ve(ct), () => e(K), (St) => {
            var Ft = Np();
            Me(P(Ft), () => i()(e(K))), x(Ft), v(St, Ft);
          }), v(ut, ct);
        };
        T(Ke, (ut) => {
          e(ye) && ut(ot);
        }), x(it);
        var lt = G(it, 2), nt = (ut) => {
          var ct = Hp(), St = P(ct);
          Ue(St, () => e(V), (It) => {
            var rn = Wp();
            Me(P(rn), () => i()(e(V))), x(rn), v(It, rn);
          });
          var Ft = G(St, 2), xt = (It) => {
            var rn = De();
            Ue(ve(rn), () => e(Y), (un) => {
              var yn = Up();
              Me(P(yn), () => i()(e(Y))), x(yn), v(un, yn);
            }), v(It, rn);
          };
          T(Ft, (It) => {
            e(ye) && It(xt);
          }), x(ct), v(ut, ct);
        };
        T(lt, (ut) => {
          e(Q) > 1 && ut(nt);
        }), v(je, st);
      }, rt = (je) => {
        var st = De(), it = ve(st), we = (ot) => {
          var lt = Xp(), nt = ve(lt), ut = P(nt);
          Ue(ut, () => e(V), (xt) => {
            var It = Zp();
            Me(P(It), () => i()(u().showPricesPerItem ? e(ee) : e(V))), x(It), v(xt, It);
          });
          var ct = G(ut, 2), St = (xt) => {
            var It = De();
            Ue(ve(It), () => e(Y), (rn) => {
              var un = Kp();
              Me(P(un), () => i()(u().showPricesPerItem ? e(K) : e(Y))), x(un), v(rn, un);
            }), v(xt, It);
          };
          T(ct, (xt) => {
            e(ye) && xt(St);
          }), x(nt);
          var Ft = G(nt, 2);
          Ue(P(Ft), () => e(C), (xt) => {
            var It = Yp(), rn = P(It);
            Me(rn, () => i()(e(C), { preserveDecimals: !0 }));
            var un = G(rn);
            x(It), fe(() => {
              var yn;
              return yt(un, ` / ${(yn = e(F)) != null ? yn : ""}`);
            }), v(xt, It);
          }), x(Ft), v(ot, lt);
        }, Ke = (ot) => {
          var lt = nh(), nt = ve(lt);
          Ue(nt, () => e(V), (St) => {
            var Ft = eh();
            Me(P(Ft), () => i()(u().showPricesPerItem ? e(ee) : e(V))), x(Ft), v(St, Ft);
          });
          var ut = G(nt, 2), ct = (St) => {
            var Ft = De();
            Ue(ve(Ft), () => e(Y), (xt) => {
              var It = th();
              Me(P(It), () => i()(u().showPricesPerItem ? e(K) : e(Y))), x(It), v(xt, It);
            }), v(St, Ft);
          };
          T(ut, (St) => {
            e(ye) && St(ct);
          }), v(ot, lt);
        };
        T(it, (ot) => {
          e(C) && e(F) && !r().ignoreUnitPrice ? ot(we) : ot(Ke, !1);
        }, !0), v(je, st);
      };
      T(Ne, (je) => {
        u().showBothPrices ? je(dt) : je(rt, !1);
      }), x(xe), x(le), fe((je) => {
        Se = qt(le, 1, "kaching-bundles__upsell", null, Se, je), Pe(le, "data-upsell-id", o().id), Ht(le, e(ce));
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(M) })]), v(R, le);
    };
    T(he, (R) => {
      !(e(L) || r().preview && e(M)) || o().visibleOnlyWhenDealBarSelected && !c() || R(E);
    }), v(t, me);
    var ae = Ze(ne);
    return s(), ae;
  }
  Le(Nc, { dealBlock: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var ih = D('<div class="kaching-bundles__free-gift__divider"></div>'), ah = D("<!> <!>", 1);
  function ba(t, n) {
    Je(n, !0);
    const r = () => $e(p, "$config", i), [i, l] = Pt();
    let s = m(n, "dealBlock", 7), u = m(n, "upsells", 7), o = m(n, "otherProducts", 7), a = m(n, "complementaryProducts", 7), c = m(n, "dealBarSelected", 7), d = m(n, "dealSellingPlan", 7), g = m(n, "sets", 7, 1), f = m(n, "onChange", 7);
    const p = cn();
    let _ = Ae(at({}));
    const B = h(() => r().preview ? o() : o().map(Jn)), y = h(() => r().preview ? a() : a().map(Jn)), w = Math.floor(1e3 * Math.random()), S = h(() => u().flatMap((q, L) => {
      if (q.productSource === "complementary") {
        const ce = e(y)[(L + w) % (e(y).length || 1)];
        return ce && (r().preview || ce.availableForSale) ? { upsell: q, product: ce } : [];
      }
      if (!q.productGID) return [];
      const z = e(B).find((ce) => ce.id === Tt(q.productGID));
      if (!z) return [];
      if (!r().preview) {
        if (!z.availableForSale) return [];
        const ce = q.variantGIDs ? q.variantGIDs.map(Tt) : z.variants.map((N) => N.id);
        if (!z.variants.some((N) => N.availableForSale && ce.includes(N.id))) return [];
      }
      return { upsell: q, product: z };
    }));
    var $ = { get dealBlock() {
      return s();
    }, set dealBlock(q) {
      s(q), k();
    }, get upsells() {
      return u();
    }, set upsells(q) {
      u(q), k();
    }, get otherProducts() {
      return o();
    }, set otherProducts(q) {
      o(q), k();
    }, get complementaryProducts() {
      return a();
    }, set complementaryProducts(q) {
      a(q), k();
    }, get dealBarSelected() {
      return c();
    }, set dealBarSelected(q) {
      c(q), k();
    }, get dealSellingPlan() {
      return d();
    }, set dealSellingPlan(q) {
      d(q), k();
    }, get sets() {
      return g();
    }, set sets(q = 1) {
      g(q), k();
    }, get onChange() {
      return f();
    }, set onChange(q) {
      f(q), k();
    } }, A = De();
    Ut(ve(A), 19, () => e(S), ({ upsell: q, product: L }) => q.id, (q, L, z) => {
      let ce = () => e(L).upsell;
      var N = ah(), re = ve(N);
      Nc(re, { get dealBlock() {
        return s();
      }, get upsell() {
        return ce();
      }, get product() {
        return e(L).product;
      }, get dealBarSelected() {
        return c();
      }, get dealSellingPlan() {
        return d();
      }, get sets() {
        return g();
      }, onChange: (K) => (function(U, J) {
        const { variant: Z, product: V, discountedPrice: ee, fullPrice: ye, sellingPlan: F } = J;
        Z && V ? e(_)[U] = { variant: Z, product: V, discountedPrice: ee, fullPrice: ye, sellingPlan: F } : delete e(_)[U];
        const b = u().filter((C) => C.id in e(_)).map((C) => ({ id: C.id, variant: e(_)[C.id].variant, product: e(_)[C.id].product, quantity: C.quantity * g(), discountedPrice: e(_)[C.id].discountedPrice, fullPrice: e(_)[C.id].fullPrice, sellingPlan: e(_)[C.id].sellingPlan }));
        f()(b);
      })(ce().id, K) });
      var Q = G(re, 2), Y = (K) => {
        v(K, ih());
      };
      T(Q, (K) => {
        e(z) < e(S).length - 1 && K(Y);
      }), v(q, N);
    }), v(t, A);
    var I = Ze($);
    return l(), I;
  }
  Le(ba, { dealBlock: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var lh = D('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), sh = D('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Ar(t, n) {
    Je(n, !0);
    const r = () => $e(a, "$translate", i), [i, l] = Pt(), s = m(n, "amount", 7), u = m(n, "showPricesPerItem", 7), o = m(n, "unitLabel", 7, ""), a = Gt(), c = bn();
    var d = { get amount() {
      return s();
    }, set amount(y) {
      s(y), k();
    }, get showPricesPerItem() {
      return u();
    }, set showPricesPerItem(y) {
      u(y), k();
    }, get unitLabel() {
      return o();
    }, set unitLabel(y = "") {
      o(y), k();
    } }, g = sh(), f = P(g);
    Me(f, () => $e(c, "$formatPrice", i)(s()));
    var p = G(f, 2), _ = (y) => {
      var w = lh();
      Me(P(w), () => r()(o())), x(w), v(y, w);
    };
    T(p, (y) => {
      u() && o() && y(_);
    }), x(g), fe((y) => Pe(g, "data-a11y-label", y), [() => r()("system.price")]), v(t, g);
    var B = Ze(d);
    return l(), B;
  }
  Le(Ar, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  var oh = D('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function Hr(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "lowStockAlert", 7), s = m(n, "inventoryQuantity", 7), u = Gt(), o = h(() => {
      return _ = $e(u, "$translate", r)(l().message), B = { stock: s() ? s().toString() : null }, _.replace(/\{\{\s*(\w+)\s*\}\}/g, (y, w) => {
        var S;
        return (S = B[w]) != null ? S : "";
      });
      var _, B;
    }), a = h(() => ((_) => {
      const { textColor: B } = _;
      return pn({ "kaching-bundles-low-stock-alert-text-color": Fe(B) });
    })(l()));
    var c = { get lowStockAlert() {
      return l();
    }, set lowStockAlert(_) {
      l(_), k();
    }, get inventoryQuantity() {
      return s();
    }, set inventoryQuantity(_) {
      s(_), k();
    } }, d = De(), g = ve(d), f = (_) => {
      var B = oh();
      Me(P(B), () => e(o)), x(B), fe(() => Ht(B, e(a))), v(_, B);
    };
    T(g, (_) => {
      s() && s() > 0 && s() < l().threshold && _(f);
    }), v(t, d);
    var p = Ze(c);
    return i(), p;
  }
  Le(Hr, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var ch = D('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function va(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "showAsSoldOut", 7), s = m(n, "replaceLiquid", 7), u = Gt(), o = h(() => s()($e(u, "$translate", r)(l().label)));
    var a = { get showAsSoldOut() {
      return l();
    }, set showAsSoldOut(g) {
      l(g), k();
    }, get replaceLiquid() {
      return s();
    }, set replaceLiquid(g) {
      s(g), k();
    } }, c = ch();
    Me(P(c), () => e(o)), x(c), v(t, c);
    var d = Ze(a);
    return i(), d;
  }
  Le(va, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const _l = (t) => {
    const { opacity: n, backgroundColor: r, textColor: i, textSize: l } = t;
    return pn({ "kaching-bundles-show-as-sold-out-opacity": n.toString(), "kaching-bundles-show-as-sold-out-background-color": Fe(r), "kaching-bundles-show-as-sold-out-text-color": Fe(i), "kaching-bundles-show-as-sold-out-text-size": l + "px" });
  };
  var uh = D('<img alt="Decrease"/>'), dh = D('<img alt="Increase"/>'), gh = D('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function _a(t, n) {
    Je(n, !0);
    const [r, i] = Pt();
    let l = m(n, "value", 7), s = m(n, "onChange", 7), u = m(n, "min", 7, 1);
    const o = Gt(), a = h(() => l() <= u());
    var c = { get value() {
      return l();
    }, set value(A) {
      l(A), k();
    }, get onChange() {
      return s();
    }, set onChange(A) {
      s(A), k();
    }, get min() {
      return u();
    }, set min(A = 1) {
      u(A), k();
    } }, d = gh(), g = P(d);
    {
      let A = h(() => ["kaching-bundles__quantity-selector__button", e(a) && "kaching-bundles__quantity-selector__button--disabled"]);
      Vt(g, { element: "div", get class() {
        return e(A);
      }, onclick: function(I) {
        I.stopPropagation(), s()(Math.max(l() - 1, u()));
      }, get disabled() {
        return e(a);
      }, children: (I, q) => {
        var L = uh();
        fe(() => Pe(L, "src", Bc)), v(I, L);
      }, $$slots: { default: !0 } });
    }
    var f, p, _, B, y, w, S = G(g, 2);
    Er(S), Vt(G(S, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(A) {
      A.stopPropagation(), s()(l() + 1);
    }, children: (A, I) => {
      var q = dh();
      fe(() => Pe(q, "src", Ic)), v(A, q);
    }, $$slots: { default: !0 } }), x(d), fe((A) => {
      Pe(S, "aria-label", A), Ai(S, l()), Pe(S, "min", u());
    }, [() => $e(o, "$translate", r)("system.quantity")]), w = Io(f = "blur", p = S, function(A) {
      const I = A.target, q = parseInt(I.value);
      s()(isNaN(q) ? u() : Math.max(q, u()));
    }, y = { capture: _, passive: B }), (p === document.body || p === window || p === document || p instanceof HTMLMediaElement) && Ll(() => {
      p.removeEventListener(f, w, y);
    }), v(t, d);
    var $ = Ze(c);
    return i(), $;
  }
  function ph(t, n) {
    t.target === t.currentTarget && n()();
  }
  Le(_a, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var hh = D('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function Wc(t, n) {
    Je(n, !0);
    const r = m(n, "dealBlock", 7), i = m(n, "multipleGiftsSelector", 7), l = m(n, "products", 23, () => []), s = m(n, "initialSelectedGifts", 7), u = m(n, "isOpen", 7), o = m(n, "onConfirm", 7), a = m(n, "onClose", 7);
    var c = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), k();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(p) {
      i(p), k();
    }, get products() {
      return l();
    }, set products(p = []) {
      l(p), k();
    }, get initialSelectedGifts() {
      return s();
    }, set initialSelectedGifts(p) {
      s(p), k();
    }, get isOpen() {
      return u();
    }, set isOpen(p) {
      u(p), k();
    }, get onConfirm() {
      return o();
    }, set onConfirm(p) {
      o(p), k();
    }, get onClose() {
      return a();
    }, set onClose(p) {
      a(p), k();
    } }, d = De(), g = ve(d), f = (p) => {
      bl(p, { target: "body", children: (_, B) => {
        var y = hh(), w = P(y);
        w.__click = [ph, a];
        var S = P(w);
        cs(P(S), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return i();
        }, get products() {
          return l();
        }, get initialSelectedGifts() {
          return s();
        }, get onConfirm() {
          return o();
        }, get onClose() {
          return a();
        } }), x(S), x(w), x(y), fe(($) => Ht(w, $), [() => (function($) {
          var A;
          return pn({ "kaching-choose-multiple-gifts-overlay-color": Fe(((A = $.chooseMultipleGiftsModal) == null ? void 0 : A.overlayColor) || zg) });
        })(r())]), v(_, y);
      }, $$slots: { default: !0 } });
    };
    return T(g, (p) => {
      u() && p(f);
    }), v(t, d), Ze(c);
  }
  $n(["click"]), Le(Wc, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var fh = Ln('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Uc(t) {
    v(t, fh());
  }
  Le(Uc, {}, [], [], !0);
  var bh = D('<img alt="" class="kaching-bundles__free-gift__image"/>'), vh = D('<div class="kaching-bundles__free-gift__image"></div>'), _h = D('<span class="kaching-bundles__free-gift__text"><!></span>'), kh = D('<span class="kaching-bundles__free-gift__add-button"><!></span>'), mh = D('<div class="kaching-bundles__free-gift__full-price"><!></div>'), yh = D('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function Hc(t, n) {
    Je(n, !0);
    const r = () => $e(p, "$formatPrice", l), i = () => $e(_, "$translate", l), [l, s] = Pt();
    let u = m(n, "dealBlock", 7), o = m(n, "multipleGiftsSelector", 7), a = m(n, "selectedVariants", 7), c = m(n, "otherProducts", 7), d = m(n, "onConfirm", 7), g = Ae(!1);
    const f = h(() => (o().products || []).flatMap((b) => {
      const C = Tt(b.id), O = c().find((ie) => ie.id === C);
      if (!O || !O.availableForSale) return [];
      const j = Jn(O);
      if (b.variantGIDs && b.variantGIDs.length > 0) {
        const ie = b.variantGIDs.map(Tt);
        return { ...j, variants: j.variants.filter((oe) => ie.includes(oe.id)) };
      }
      return j;
    })), p = bn(), _ = Gt(), B = An(), y = h(() => Lc({ dealBlock: u(), imageSize: o().imageSize })), w = h(() => {
      if (o().mediaImageGID) return $e(B, "$getMediaImageUrl", l)(o().mediaImageGID);
    }), S = h(() => a().reduce((b, C) => b + C.quantity, 0)), $ = h(() => e(S) >= o().maxQuantity), A = h(() => (function(b, C) {
      if (!C.length) return 0;
      let O = C.reduce((j, ie) => j + ie.fullPrice * ie.quantity, 0);
      return C.some((j) => j.variant.compareAtPrice) && b.useProductCompareAtPrice && (O = Math.max(O, C.reduce((j, ie) => j + (ie.variant.compareAtPrice || 0), 0))), O;
    })(u(), a())), I = h(() => vn({ priceFormatter: r(), product: void 0, totalFullPrice: e(A), totalDiscountedPrice: 0, quantity: e(S), unitQuantity: null })), q = h(() => e($) ? e(I)(i()(o().textAfterSelection)) : e(I)(i()(o().textBeforeSelection)));
    var L = { get dealBlock() {
      return u();
    }, set dealBlock(b) {
      u(b), k();
    }, get multipleGiftsSelector() {
      return o();
    }, set multipleGiftsSelector(b) {
      o(b), k();
    }, get selectedVariants() {
      return a();
    }, set selectedVariants(b) {
      a(b), k();
    }, get otherProducts() {
      return c();
    }, set otherProducts(b) {
      c(b), k();
    }, get onConfirm() {
      return d();
    }, set onConfirm(b) {
      d(b), k();
    } }, z = yh(), ce = P(z);
    {
      let b = h(() => {
        var C;
        return (C = e(q)) == null ? void 0 : C.replace(/<[^>]*>/g, "");
      });
      Vt(ce, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(b);
      }, onclick: () => W(g, !0) });
    }
    var N = G(ce, 2), re = P(N), Q = (b) => {
      var C = bh();
      fe(() => {
        Pe(C, "src", e(w)), Pe(C, "height", o().imageSize || 0);
      }), v(b, C);
    }, Y = (b) => {
      var C = De(), O = ve(C), j = (ie) => {
        var oe = vh();
        let M;
        fe((ne) => M = Ht(oe, "", M, ne), [() => {
          var ne;
          return { height: `${(ne = o().imageSize) != null ? ne : ""}px` };
        }]), v(ie, oe);
      };
      T(O, (ie) => {
        o().imageSize && ie(j);
      }, !0), v(b, C);
    };
    T(re, (b) => {
      e(w) ? b(Q) : b(Y, !1);
    });
    var K = G(re, 2), U = P(K), J = (b) => {
      var C = De();
      Ue(ve(C), () => e(q), (O) => {
        var j = _h();
        Me(P(j), () => e(q)), x(j), v(O, j);
      }), v(b, C);
    };
    T(U, (b) => {
      e(q) && b(J);
    });
    var Z = G(U, 2), V = (b) => {
      var C = kh();
      Uc(P(C)), x(C), v(b, C);
    };
    T(Z, (b) => {
      e($) || b(V);
    }), x(K), x(N);
    var ee = G(N, 2), ye = (b) => {
      var C = De();
      Ue(ve(C), () => e(A), (O) => {
        var j = mh();
        Me(P(j), () => r()(e(A))), x(j), v(O, j);
      }), v(b, C);
    };
    T(ee, (b) => {
      o().showPrice && e(A) > 0 && b(ye);
    }), Wc(G(ee, 2), { get dealBlock() {
      return u();
    }, get multipleGiftsSelector() {
      return o();
    }, get isOpen() {
      return e(g);
    }, get products() {
      return e(f);
    }, get initialSelectedGifts() {
      return a();
    }, get onConfirm() {
      return d();
    }, onClose: () => W(g, !1) }), x(z), fe(() => {
      Pe(z, "data-multiple-gifts-selector-id", o().id), Ht(z, e(y));
    }), v(t, z);
    var F = Ze(L);
    return s(), F;
  }
  Le(Hc, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var xh = D('<div class="kaching-bundles__free-gift__divider"></div>'), wh = D("<!> <!>", 1);
  function ka(t, n) {
    Je(n, !0);
    let r = m(n, "dealBlock", 7), i = m(n, "multipleGiftsSelectors", 7), l = m(n, "sellingPlan", 7), s = m(n, "otherProducts", 7), u = m(n, "onChange", 7), o = Ae(at({})), a = h(() => i().filter((f) => !f.applyOnlyForSubscriptions || l()));
    function c(f, p) {
      const _ = i().find((B) => B.id === f);
      _ && (p.reduce((B, y) => B + y.quantity, 0) > _.maxQuantity || (e(o)[f] = p));
    }
    Xe(() => {
      const f = new Set(e(a).map((_) => _.id)), p = Object.entries(e(o)).filter(([_]) => f.has(_)).flatMap(([, _]) => _.map((B) => ({ id: B.id, quantity: B.quantity, variant: B.variant, product: B.product, fullPrice: B.fullPrice })));
      u()(p);
    });
    var d = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), k();
    }, get multipleGiftsSelectors() {
      return i();
    }, set multipleGiftsSelectors(f) {
      i(f), k();
    }, get sellingPlan() {
      return l();
    }, set sellingPlan(f) {
      l(f), k();
    }, get otherProducts() {
      return s();
    }, set otherProducts(f) {
      s(f), k();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), k();
    } }, g = De();
    return Ut(ve(g), 19, () => e(a), (f) => f.id, (f, p, _) => {
      var B = wh(), y = ve(B);
      {
        let $ = h(() => e(o)[e(p).id] || []);
        Hc(y, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(p);
        }, get selectedVariants() {
          return e($);
        }, onConfirm: c, get otherProducts() {
          return s();
        } });
      }
      var w = G(y, 2), S = ($) => {
        v($, xh());
      };
      T(w, ($) => {
        e(_) < e(a).length - 1 && $(S);
      }), v(f, B);
    }), v(t, g), Ze(d);
  }
  Le(ka, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  var Ph = Ln('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Jc(t) {
    v(t, Ph());
  }
  Le(Jc, {}, [], [], !0);
  const Zc = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=";
  var Sh = D('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Ch = D('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Bh = D('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Ih = D('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Dh = D('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), zh = D('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), $h = D('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Ah = D('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function Kc(t, n) {
    Je(n, !0);
    const r = () => $e(y, "$config", s), i = () => $e(p, "$translate", s), l = () => $e(B, "$getMediaImageUrl", s), [s, u] = Pt(), o = m(n, "progressiveGifts", 7), a = m(n, "gift", 7), c = m(n, "product", 7), d = m(n, "selectedDealBarIndex", 7), g = m(n, "selected", 7), f = m(n, "onChange", 7), p = Gt(), _ = bn(), B = An(), y = cn(), w = h(() => a().differentVariantsEnabled), S = h(() => {
      var b;
      return c() ? a().variantGIDs ? a().variantGIDs.map(Tt) : (b = c()) == null ? void 0 : b.variants.map((C) => C.id) : null;
    }), $ = h(() => {
      if (c()) return { ...c(), variants: c().variants.filter((b) => (r().preview || b.availableForSale) && (!e(S) || e(S).includes(b.id))) };
    });
    let A = Ae(at([]));
    const I = h(() => (function(b, C, O) {
      return b.length > 0 ? b : C != null && C.availableForSale && C.variants.length > 0 ? Array.from({ length: O }, () => C.variants[0].id) : [];
    })(e(A), e($), a().quantity)), q = h(() => c() && e(I).length > 0 ? e(I).map((b) => c().variants.find((C) => C.id === b)).filter((b) => b !== void 0) : []), L = h(() => {
      var b;
      return vn({ priceFormatter: $e(_, "$formatPrice", s), product: c(), totalFullPrice: ((b = e(q)) == null ? void 0 : b.reduce((C, O) => {
        var j;
        return C + ((j = O == null ? void 0 : O.price) != null ? j : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: a().quantity, unitQuantity: Zn(e(q).map((C) => ({ variant: C, quantity: 1 }))) });
    }), z = h(() => e(L)(i()(a().title))), ce = h(() => e(L)(i()(a().lockedTitle))), N = h(() => e(L)(i()(a().label))), re = h(() => e(L)(i()(a().labelCrossedOut))), Q = h(() => d() === null || a().unlockAtBar > d() + 1), Y = h(() => {
      var b, C, O;
      return a().giftType === "shipping" ? Zc : ((C = (b = e(q)) == null ? void 0 : b[0]) == null ? void 0 : C.image) || ((O = c()) == null ? void 0 : O.image);
    }), K = h(() => a().mediaImageGID ? l()(a().mediaImageGID) : e(Y)), U = h(() => o().dealBarStyle && l()(o().dealBarStyle.lockedMediaImageGID));
    Xe(() => {
      if (g()) if (c() && e(q) && !e(Q)) {
        const b = Object.values(e(q).reduce((C, O) => (C[O.id] ? C[O.id].quantity += 1 : C[O.id] = { variant: O, quantity: 1 }, C), {}));
        Zt(() => f()({ product: c(), variants: b }));
      } else Zt(() => f()(void 0));
      else Zt(() => f()(void 0));
    }), gr(() => {
      a().productGID, W(A, [], !0);
    }), Xe(() => {
      e(Q) && e(K) && (new Image().src = e(K));
    });
    const J = h(() => {
      var b;
      return a().giftType === "product" && !((b = c()) != null && b.availableForSale);
    });
    var Z = { get progressiveGifts() {
      return o();
    }, set progressiveGifts(b) {
      o(b), k();
    }, get gift() {
      return a();
    }, set gift(b) {
      a(b), k();
    }, get product() {
      return c();
    }, set product(b) {
      c(b), k();
    }, get selectedDealBarIndex() {
      return d();
    }, set selectedDealBarIndex(b) {
      d(b), k();
    }, get selected() {
      return g();
    }, set selected(b) {
      g(b), k();
    }, get onChange() {
      return f();
    }, set onChange(b) {
      f(b), k();
    } }, V = De(), ee = ve(V), ye = (b) => {
      var C = De(), O = ve(C), j = (ie) => {
        var oe = Ah();
        let M;
        var ne = P(oe), me = P(ne), he = (Be) => {
          var te = De(), _e = ve(te), qe = (be) => {
            var ze = Sh();
            fe(() => Pe(ze, "src", e(U))), v(be, ze);
          }, Ie = (be) => {
            var ze = Ch();
            Jc(P(ze)), x(ze), v(be, ze);
          };
          T(_e, (be) => {
            e(U) ? be(qe) : be(Ie, !1);
          }), v(Be, te);
        }, E = (Be) => {
          var te = De(), _e = ve(te), qe = (Ie) => {
            var be = Bh();
            fe(() => {
              var ze, Oe;
              Pe(be, "src", e(K)), Pe(be, "alt", (Oe = (ze = c()) == null ? void 0 : ze.title) != null ? Oe : "");
            }), v(Ie, be);
          };
          T(_e, (Ie) => {
            e(K) && Ie(qe);
          }, !0), v(Be, te);
        };
        T(me, (Be) => {
          e(Q) ? Be(he) : Be(E, !1);
        });
        var ae = G(me, 2), R = P(ae), le = (Be) => {
          var te = Ih();
          Me(P(te), () => e(ce)), x(te), v(Be, te);
        }, Se = (Be) => {
          var te = De(), _e = ve(te), qe = (Ie) => {
            var be = Dh();
            Me(P(be), () => e(z)), x(be), v(Ie, be);
          };
          T(_e, (Ie) => {
            e(z) && Ie(qe);
          }, !0), v(Be, te);
        };
        T(R, (Be) => {
          e(Q) ? Be(le) : Be(Se, !1);
        });
        var X = G(R, 2), ge = (Be) => {
          var te = De();
          Ut(ve(te), 17, () => ({ length: e(w) ? a().quantity : 1 }), jr, (_e, qe, Ie) => {
            var be = De(), ze = ve(be), Oe = (xe) => {
              {
                let Ne = h(() => e(w) ? Ie + 1 : void 0);
                qn(xe, { get product() {
                  return e($);
                }, get selectedVariantId() {
                  return e(I)[Ie];
                }, get number() {
                  return e(Ne);
                }, forceDropdown: !0, onChange: (dt) => (function(rt, je) {
                  e(w) ? W(A, [...e(I).slice(0, je), rt, ...e(I).slice(je + 1)], !0) : W(A, Array.from({ length: a().quantity }, () => rt), !0);
                })(dt, Ie) });
              }
            };
            T(ze, (xe) => {
              e(I)[Ie] !== void 0 && xe(Oe);
            }), v(_e, be);
          }), v(Be, te);
        };
        T(X, (Be) => {
          g() && !e(Q) && e($) && e($).variants.length > 1 && e(I).length > 0 && Be(ge);
        }), x(ae), x(ne);
        var Ve = G(ne, 2), ue = (Be) => {
          var te = De(), _e = ve(te), qe = (Ie) => {
            var be = $h(), ze = P(be), Oe = (dt) => {
              var rt = De();
              Me(ve(rt), () => e(N)), v(dt, rt);
            };
            T(ze, (dt) => {
              e(N) && dt(Oe);
            });
            var xe = G(ze, 2), Ne = (dt) => {
              var rt = zh();
              Me(P(rt), () => e(re)), x(rt), v(dt, rt);
            };
            T(xe, (dt) => {
              e(re) && dt(Ne);
            }), x(be), v(Ie, be);
          };
          T(_e, (Ie) => {
            e(Q) && !o().showLockedGiftLabels || Ie(qe);
          }), v(Be, te);
        };
        T(Ve, (Be) => {
          (e(N) || e(re)) && Be(ue);
        }), x(oe), fe((Be) => M = qt(oe, 1, "kaching-bundles__deal-bar-progressive-gift", null, M, Be), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(Q), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(J) })]), v(ie, oe);
      };
      T(O, (ie) => {
        var oe;
        (c() && ((oe = e(q)) != null && oe.length) || a().giftType === "shipping") && ie(j);
      }), v(b, C);
    };
    T(ee, (b) => {
      e(Q) && o().hideLockedGifts || b(ye);
    }), v(t, V);
    var F = Ze(Z);
    return u(), F;
  }
  Le(Kc, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var qh = D('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function ma(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "progressiveGifts", 7), s = m(n, "dealBlock", 7), u = m(n, "dealBar", 7), o = m(n, "otherProducts", 7), a = m(n, "selectedDealBarIndex", 7), c = m(n, "selected", 7), d = m(n, "onChange", 7), g = h(() => s().dealBars.findIndex((I) => I.id === u().id)), f = cn();
    let p = Ae(at({}));
    const _ = h(() => {
      var I, q;
      return ((L) => L ? pn({ "kaching-deal-bar-progressive-gift-image-size": L.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": L.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": Fe(L.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": Fe(L.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": L.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": Fe(L.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": Fe(L.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": L.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": Fe(L.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": Fe(L.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": L.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": Fe(L.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": L.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": Fe(L.lockedIconColor) }) : "")((q = (I = s().progressiveGifts) == null ? void 0 : I.dealBarStyle) != null ? q : null);
    }), B = h(() => {
      var I, q, L;
      return (L = (q = (I = l()) == null ? void 0 : I.gifts) == null ? void 0 : q.filter((z) => z.unlockAtBar <= e(g) + 1).flatMap((z) => {
        const ce = z.giftType === "product" && z.productGID ? o().find((re) => re.id === Tt(z.productGID)) : void 0;
        if (!$e(f, "$config", r).preview && z.giftType === "product" && !(ce != null && ce.availableForSale)) return [];
        const N = ce && Jn(ce);
        return { gift: z, product: N };
      })) != null ? L : [];
    });
    var y = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(I) {
      l(I), k();
    }, get dealBlock() {
      return s();
    }, set dealBlock(I) {
      s(I), k();
    }, get dealBar() {
      return u();
    }, set dealBar(I) {
      u(I), k();
    }, get otherProducts() {
      return o();
    }, set otherProducts(I) {
      o(I), k();
    }, get selectedDealBarIndex() {
      return a();
    }, set selectedDealBarIndex(I) {
      a(I), k();
    }, get selected() {
      return c();
    }, set selected(I) {
      c(I), k();
    }, get onChange() {
      return d();
    }, set onChange(I) {
      d(I), k();
    } }, w = De(), S = ve(w), $ = (I) => {
      var q = qh();
      Ut(q, 21, () => e(B), ({ gift: L, product: z }) => L.id, (L, z) => {
        let ce = () => e(z).gift;
        Kc(L, { get selectedDealBarIndex() {
          return a();
        }, get selected() {
          return c();
        }, get gift() {
          return ce();
        }, get product() {
          return e(z).product;
        }, get progressiveGifts() {
          return l();
        }, onChange: (N) => (function(re, Q) {
          if (Q ? e(p)[re] = Q : delete e(p)[re], !c()) return;
          const Y = Object.entries(e(p)).map(([K, U]) => ({ id: K, variants: U.variants, product: U.product }));
          d()(Y);
        })(ce().id, N) });
      }), x(q), fe(() => Ht(q, e(_))), v(I, q);
    };
    T(S, (I) => {
      var q;
      ((q = l()) == null ? void 0 : q.layout) === "deal-bar" && e(B).length > 0 && I($);
    }), v(t, w);
    var A = Ze(y);
    return i(), A;
  }
  Le(ma, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var Mh = Ln('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Yc(t) {
    v(t, Mh());
  }
  Le(Yc, {}, [], [], !0);
  var Vh = Ln('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Xc(t) {
    v(t, Vh());
  }
  Le(Xc, {}, [], [], !0);
  var Gh = Ln('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function eu(t) {
    v(t, Gh());
  }
  Le(eu, {}, [], [], !0);
  var Th = Ln('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function tu(t) {
    v(t, Th());
  }
  Le(tu, {}, [], [], !0);
  var Fh = Ln('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function nu(t) {
    v(t, Fh());
  }
  Le(nu, {}, [], [], !0);
  var Oh = Ln('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ru(t) {
    v(t, Oh());
  }
  Le(ru, {}, [], [], !0);
  var Lh = D('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), jh = D('<span class="kaching-bundles__highlights__icon"><!></span>'), Eh = D('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), Rh = D('<div class="kaching-bundles__highlights"></div>');
  function ya(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "highlights", 7), s = m(n, "dealBarSelected", 7), u = An(), o = { checkmark: Xc, dot: eu, arrow: Yc, star: nu, heart: tu, "thumbs-up": ru }, a = Gt(), c = h(() => l().items.map(($) => $e(a, "$translate", r)($)).filter(($) => $ !== "")), d = h(() => (($) => pn({ "kaching-highlights-icon-color": Fe($.iconColor), "kaching-highlights-text-color": Fe($.textColor), "kaching-highlights-icon-size": $.size + 2 + "px", "kaching-highlights-text-size": $.size + "px" }))(l())), g = h(() => {
      var $;
      return ($ = l().iconType) != null ? $ : "checkmark";
    }), f = h(() => o[e(g)]), p = h(() => {
      var $;
      return e(g) === "custom" ? $e(u, "$getMediaImageUrl", r)(($ = l().customIconGID) != null ? $ : null) : void 0;
    });
    var _ = { get highlights() {
      return l();
    }, set highlights($) {
      l($), k();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected($) {
      s($), k();
    } }, B = De(), y = ve(B), w = ($) => {
      var A = Rh();
      Ut(A, 21, () => e(c), jr, (I, q) => {
        var L = Eh(), z = P(L), ce = (Q) => {
          var Y = Lh(), K = P(Y);
          x(Y), fe(() => Pe(K, "src", e(p))), v(Q, Y);
        }, N = (Q) => {
          var Y = De(), K = ve(Y), U = (J) => {
            var Z = jh();
            (function(V, ee, ye) {
              tt && er();
              var F, b, C = V, O = null;
              function j() {
                b && ($r(b), b = null), b = O, O = null;
              }
              zr(() => {
                if (F !== (F = ee())) {
                  if (F) {
                    var ie = C;
                    O = hn(() => ye(ie, F));
                  }
                  j();
                }
              }, mi), tt && (C = ft);
            })(P(Z), () => e(f), (V, ee) => {
              ee(V, {});
            }), x(Z), v(J, Z);
          };
          T(K, (J) => {
            e(f) && J(U);
          }, !0), v(Q, Y);
        };
        T(z, (Q) => {
          e(g) === "custom" && e(p) ? Q(ce) : Q(N, !1);
        });
        var re = G(z, 2);
        Me(P(re), () => e(q)), x(re), x(L), v(I, L);
      }), x(A), fe(() => Ht(A, e(d))), v($, A);
    };
    T(y, ($) => {
      e(c).length > 0 && (!l().showOnlyWhenSelected || s()) && $(w);
    }), v(t, B);
    var S = Ze(_);
    return i(), S;
  }
  function Qh(t, n, r, i) {
    n()({ dealBarId: r().id, dealBarQuantity: i(r()), preselected: !1 });
  }
  Le(ya, { highlights: {}, dealBarSelected: {} }, [], [], !0);
  var Nh = D('<img class="kaching-bundles__bar-image" alt=""/>'), Wh = D('<div class="kaching-bundles__bar-radio"></div>'), Uh = D('<span class="kaching-bundles__bar-title"><!></span>'), Hh = D('<span class="kaching-bundles__bar-label"><!></span>'), Jh = D('<div class="kaching-bundles__bar-subtitle"><!></div>'), Zh = D('<div class="kaching-bundles__bar-full-price"><!></div>'), Kh = D('<div class="kaching-bundles__bar-price"><!></div>'), Yh = D('<div class="kaching-bundles__bar-full-price"><!></div>'), Xh = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), ef = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), tf = D('<div class="kaching-bundles__bar-full-price"><!></div>'), nf = D('<div class="kaching-bundles__bar-unit-price"><!> </div>'), rf = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), af = D('<div class="kaching-bundles__bar-full-price"><!></div>'), lf = D("<!> <!>", 1), sf = D('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), of = D('<div class="kaching-bundles__bar-selling-plan"><!></div>'), cf = D('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), uf = D('<div class="kaching-bundles__bar-variants"><!> <!></div>'), df = D('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function ps(t, n) {
    Je(n, !0);
    const r = () => $e(Y, "$config", u), i = () => $e(re, "$formatPrice", u), l = () => $e(N, "$translate", u), s = () => $e(Q, "$getMediaImageUrl", u), [u, o] = Pt();
    let a = m(n, "dealBlock", 7), c = m(n, "dealBar", 7), d = m(n, "product", 7), g = m(n, "otherProducts", 23, () => []), f = m(n, "complementaryProducts", 23, () => []), p = m(n, "customQuantity", 7, void 0), _ = m(n, "currentVariantId", 7, void 0), B = m(n, "componentId", 7), y = m(n, "selected", 7, !1), w = m(n, "globalSellingPlan", 7, void 0), S = m(n, "selectedDealBarIndex", 7), $ = m(n, "onProgressiveGiftsChange", 7), A = m(n, "onDealBarSelect", 7), I = m(n, "onDealBarDeselect", 7), q = m(n, "onVariantSelect", 7), L = m(n, "onVariantsChange", 7), z = m(n, "onPersonalisationsChange", 7), ce = m(n, "personalisationInitialValues", 23, () => []);
    const N = Gt(), re = bn(), Q = An(), Y = cn();
    let K = Ae(at([])), U = Ae(at([])), J = Ae(at([]));
    const Z = h(() => a().priceRounding ? { perItem: a().showPricesPerItem, precision: a().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), V = h(() => {
      var pe, et;
      return a() && ((et = (pe = a().defaultVariantsV2) == null ? void 0 : pe.find((He) => Tt(He.productGID) === d().id && He.dealBarId === c().id)) == null ? void 0 : et.variantGIDs) || [];
    });
    let ee = h(() => b(c())), ye = Ae(at(b(c())));
    gr(() => {
      W(ye, e(ee), !0);
    });
    const F = h(() => p() || e(ye));
    function b(pe) {
      return pe.dealBarType === "bxgy" ? pe.buyQuantity + pe.getQuantity : Number(pe.quantity);
    }
    let C = Ae(at([])), O = Ae(at([]));
    Xe(() => {
      const pe = (function(et, He, se) {
        let Ge = [];
        for (let Qe = 0; Qe < et; Qe++) {
          let Re = He[Qe];
          if (!Re && et > b(c()) && He.filter((We) => We).length === b(c()) && (Re = He[He.length - 1]), Re) {
            const We = Tt(Re);
            if (d().variants.find((zt) => zt.id == We)) {
              Ge.push(We);
              continue;
            }
          }
          se && Ge.push(se);
        }
        return Ge;
      })(e(F), e(V), _());
      if (JSON.stringify(e(C)) !== JSON.stringify(pe)) {
        const et = e(C).length === pe.length;
        W(C, pe, !0), e(O).length === 0 || et ? W(O, pe, !0) : W(O, (function(He, se) {
          const Ge = He[He.length - 1];
          if (He.length < se) {
            const Qe = se - He.length;
            return [...He, ...Array(Qe).fill(Ge)];
          }
          return He.slice(0, se);
        })(e(O), e(F)), !0);
      }
    });
    const j = h(() => xe(e(O))), ie = h(() => (function(pe, et, He) {
      return He.map(({ variant: Ge, quantity: Qe }) => {
        let Re = Ge.price;
        const We = pe.useProductCompareAtPrice || (et.dealBarType === void 0 || et.dealBarType === "quantity-break") && et.discountType === "default";
        return Ge.compareAtPrice && We && (Re = Math.max(Re, Ge.compareAtPrice)), Re * Qe;
      }).reduce((Ge, Qe) => Ge + Qe, 0);
    })(a(), c(), e(j))), oe = h(() => Math.ceil(e(ie) / e(F)));
    let M = Ae(void 0);
    const ne = h(() => $c(d(), e(j).map((pe) => pe.variant))), me = h(() => c().sellingPlanEnabled && (!a().subscriptionsEnabled || !!w())), he = h(() => e(me) ? Ac(c(), e(ne), e(M)) : void 0), E = h(() => qc(e(he), w(), e(ne), d().requiresSellingPlan)), ae = h(() => a() && _e(e(j), e(E))), R = h(() => e(j)[0] && os(e(j)[0].variant)), le = h(() => Zn(e(j))), Se = h(() => e(le) ? e(ae) / e(le) : null), X = h(() => vn({ priceFormatter: i(), product: d(), totalFullPrice: e(ie), totalDiscountedPrice: e(ae), quantity: e(F), dealBar: c(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(le), sellingPlan: e(E) })), ge = h(() => e(X)(l()(c().title))), Ve = h(() => e(X)(l()(c().subtitle))), ue = h(() => e(X)(l()(c().label))), Be = h(() => e(X)(l()(c().badgeText))), te = h(() => s()(c().badgeImageGID));
    function _e(pe, et) {
      switch (c().dealBarType) {
        case void 0:
        case "quantity-break":
          return Mc(c(), pe, r().currencyRate, e(Z), et, r().featureFlags.percentage_cents_rounding_workaround);
        case "bxgy":
          return Vc(c(), pe, r().currencyRate, e(Z), et);
      }
    }
    const qe = h(() => Math.ceil(e(ae) / e(F))), Ie = h(() => e(ie) !== e(ae)), be = h(() => e(F) && (function(pe) {
      return !pe.differentVariantsEnabled || d().variants.length === 1 ? !1 : pe.hideVariantPicker ? !0 : !(e(F) == 1 && !pe.showVariantsForSingleQuantity);
    })(a())), ze = h(() => r().featureFlags.variant_images && new Set(d().variants.map((pe) => pe.image).filter((pe) => pe)).size > 1), Oe = h(() => `${c().id}_${B()}`);
    function xe(pe) {
      return pe.reduce((et, He) => {
        const se = et.find(({ variant: Ge }) => Ge.id === He);
        if (se) se.quantity += 1;
        else {
          const Ge = d().variants.find((Qe) => Qe.id === He);
          if (!Ge) return et;
          et.push({ variant: Ge, quantity: 1 });
        }
        return et;
      }, []);
    }
    $i(() => {
      y() && A()({ dealBarId: c().id, dealBarQuantity: b(c()), preselected: !0 });
    });
    const Ne = h(() => s()(c().mediaImageGID) || fl);
    Xe(() => {
      y() && (e(O), e(J), e(K), e(U), e(E), Zt(() => {
        (function() {
          if (!e(O).length) return;
          const pe = xe(e(O)), et = e(ae) + e(J).reduce((Re, We) => Re + We.discountedPrice, 0), He = e(ie) + e(J).reduce((Re, We) => Re + We.fullPrice, 0) + e(K).reduce((Re, We) => Re + We.fullPrice, 0) + e(U).reduce((Re, We) => Re + We.fullPrice * We.quantity, 0), se = _e(e(j), void 0), Ge = d().sellingPlans.map((Re) => ({ sellingPlanId: Re.id, discountedPrice: _e(e(j), Re) })), Qe = { discountedPrice: et, fullPrice: He, discountedPricePerItem: e(qe), fullPricePerItem: e(oe), discountedPriceWithoutSellingPlan: se, discountedPricesForSellingPlans: Ge };
          L()({ variants: pe, freeGifts: [...e(K), ...e(U)], upsells: e(J), dealBarSellingPlan: e(he), pricing: Qe });
        })();
      }));
    });
    const dt = h(() => c().showAsSoldOutEnabled && c().showAsSoldOut ? _l(c().showAsSoldOut) : "");
    var rt = { get dealBlock() {
      return a();
    }, set dealBlock(pe) {
      a(pe), k();
    }, get dealBar() {
      return c();
    }, set dealBar(pe) {
      c(pe), k();
    }, get product() {
      return d();
    }, set product(pe) {
      d(pe), k();
    }, get otherProducts() {
      return g();
    }, set otherProducts(pe = []) {
      g(pe), k();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(pe = []) {
      f(pe), k();
    }, get customQuantity() {
      return p();
    }, set customQuantity(pe = void 0) {
      p(pe), k();
    }, get currentVariantId() {
      return _();
    }, set currentVariantId(pe = void 0) {
      _(pe), k();
    }, get componentId() {
      return B();
    }, set componentId(pe) {
      B(pe), k();
    }, get selected() {
      return y();
    }, set selected(pe = !1) {
      y(pe), k();
    }, get globalSellingPlan() {
      return w();
    }, set globalSellingPlan(pe = void 0) {
      w(pe), k();
    }, get selectedDealBarIndex() {
      return S();
    }, set selectedDealBarIndex(pe) {
      S(pe), k();
    }, get onProgressiveGiftsChange() {
      return $();
    }, set onProgressiveGiftsChange(pe) {
      $(pe), k();
    }, get onDealBarSelect() {
      return A();
    }, set onDealBarSelect(pe) {
      A(pe), k();
    }, get onDealBarDeselect() {
      return I();
    }, set onDealBarDeselect(pe) {
      I(pe), k();
    }, get onVariantSelect() {
      return q();
    }, set onVariantSelect(pe) {
      q(pe), k();
    }, get onVariantsChange() {
      return L();
    }, set onVariantsChange(pe) {
      L(pe), k();
    }, get onPersonalisationsChange() {
      return z();
    }, set onPersonalisationsChange(pe) {
      z(pe), k();
    }, get personalisationInitialValues() {
      return ce();
    }, set personalisationInitialValues(pe = []) {
      ce(pe), k();
    } }, je = df();
    let st;
    var it = P(je);
    Er(it), it.__change = [Qh, A, c, b];
    var we = G(it, 2);
    let Ke;
    var ot = P(we);
    {
      let pe = h(() => e(Be) || void 0);
      Oi(ot, { get style() {
        return c().badgeStyle;
      }, get text() {
        return e(pe);
      }, get imageUrl() {
        return e(te);
      }, get blockLayout() {
        return a().blockLayout;
      } });
    }
    var lt = G(ot, 2), nt = P(lt);
    Vt(nt, { element: "div", class: "kaching-bundles__bar-main", onclick: function(pe) {
      y() && (pe.preventDefault(), pe.stopPropagation(), I()());
    }, children: (pe, et) => {
      var He = sf(), se = ve(He), Ge = (Ce) => {
        var Te = Nh();
        fe(() => Pe(Te, "src", e(Ne))), v(Ce, Te);
      }, Qe = (Ce) => {
        v(Ce, Wh());
      };
      T(se, (Ce) => {
        c().mediaImageGID ? Ce(Ge) : Ce(Qe, !1);
      });
      var Re = G(se, 2), We = P(Re), zt = P(We), Ot = P(zt);
      Ue(Ot, () => e(ge), (Ce) => {
        var Te = Uh();
        Me(P(Te), () => e(ge)), x(Te), v(Ce, Te);
      });
      var Mt = G(Ot, 2), _t = (Ce) => {
        var Te = De();
        Ue(ve(Te), () => e(ue), (Ye) => {
          var Ee = Hh();
          Me(P(Ee), () => e(ue)), x(Ee), v(Ye, Ee);
        }), v(Ce, Te);
      };
      T(Mt, (Ce) => {
        e(ue) && Ce(_t);
      }), x(zt);
      var vt = G(zt, 2), Wt = P(vt), Lt = (Ce) => {
        var Te = De();
        Ue(ve(Te), () => e(Ve), (Ye) => {
          var Ee = Jh();
          Me(P(Ee), () => e(Ve)), x(Ee), v(Ye, Ee);
        }), v(Ce, Te);
      };
      T(Wt, (Ce) => {
        e(Ve) && Ce(Lt);
      });
      var Jt = G(Wt, 2), an = (Ce) => {
        {
          let Te = h(() => {
            var Ye, Ee;
            return (Ee = (Ye = e(j)) == null ? void 0 : Ye[0]) == null ? void 0 : Ee.variant.inventoryQuantity;
          });
          Hr(Ce, { get lowStockAlert() {
            return a().lowStockAlert;
          }, get inventoryQuantity() {
            return e(Te);
          } });
        }
      };
      T(Jt, (Ce) => {
        !e(be) && a().lowStockAlertEnabled && a().lowStockAlert && Ce(an);
      }), x(vt), x(We);
      var Sn = G(We, 2), Cn = P(Sn), H = (Ce) => {
        var Te = ef(), Ye = ve(Te), Ee = P(Ye);
        Ue(Ee, () => e(qe), (Bt) => {
          Ar(Bt, { get amount() {
            return e(qe);
          }, get showPricesPerItem() {
            return a().showPricesPerItem;
          }, get unitLabel() {
            return a().unitLabel;
          } });
        });
        var bt = G(Ee, 2), pt = (Bt) => {
          var At = De();
          Ue(ve(At), () => e(oe), (Kt) => {
            var jt = Zh();
            Me(P(jt), () => i()(e(oe))), x(jt), fe((ln) => Pe(jt, "data-a11y-label", ln), [() => l()("system.original_price")]), v(Kt, jt);
          }), v(Bt, At);
        };
        T(bt, (Bt) => {
          e(Ie) && Bt(pt);
        }), x(Ye);
        var $t = G(Ye, 2), tn = (Bt) => {
          var At = Xh(), Kt = P(At);
          Ue(Kt, () => e(ae), (Et) => {
            var Nt = Kh();
            Me(P(Nt), () => i()(e(ae))), x(Nt), fe((kn) => Pe(Nt, "data-a11y-label", kn), [() => l()("system.price")]), v(Et, Nt);
          });
          var jt = G(Kt, 2), ln = (Et) => {
            var Nt = De();
            Ue(ve(Nt), () => e(ie), (kn) => {
              var mn = Yh();
              Me(P(mn), () => i()(e(ie))), x(mn), fe((hi) => Pe(mn, "data-a11y-label", hi), [() => l()("system.original_price")]), v(kn, mn);
            }), v(Et, Nt);
          };
          T(jt, (Et) => {
            e(Ie) && Et(ln);
          }), x(At), v(Bt, At);
        };
        T($t, (Bt) => {
          e(F) > 1 && Bt(tn);
        }), v(Ce, Te);
      }, ke = (Ce) => {
        var Te = De(), Ye = ve(Te), Ee = (pt) => {
          var $t = rf(), tn = ve($t), Bt = P(tn);
          Ue(Bt, () => e(ae), (ln) => {
            {
              let Et = h(() => a().showPricesPerItem ? e(qe) : e(ae));
              Ar(ln, { get amount() {
                return e(Et);
              }, get showPricesPerItem() {
                return a().showPricesPerItem;
              }, get unitLabel() {
                return a().unitLabel;
              } });
            }
          });
          var At = G(Bt, 2), Kt = (ln) => {
            var Et = De();
            Ue(ve(Et), () => e(ie), (Nt) => {
              var kn = tf();
              Me(P(kn), () => i()(a().showPricesPerItem ? e(oe) : e(ie))), x(kn), fe((mn) => Pe(kn, "data-a11y-label", mn), [() => l()("system.original_price")]), v(Nt, kn);
            }), v(ln, Et);
          };
          T(At, (ln) => {
            e(Ie) && ln(Kt);
          }), x(tn);
          var jt = G(tn, 2);
          Ue(P(jt), () => e(Se), (ln) => {
            var Et = nf(), Nt = P(Et);
            Me(Nt, () => i()(e(Se), { preserveDecimals: !0 }));
            var kn = G(Nt);
            x(Et), fe(() => {
              var mn;
              return yt(kn, ` /
                    ${(mn = e(R)) != null ? mn : ""}`);
            }), v(ln, Et);
          }), x(jt), v(pt, $t);
        }, bt = (pt) => {
          var $t = lf(), tn = ve($t);
          Ue(tn, () => e(ae), (Kt) => {
            {
              let jt = h(() => a().showPricesPerItem ? e(qe) : e(ae));
              Ar(Kt, { get amount() {
                return e(jt);
              }, get showPricesPerItem() {
                return a().showPricesPerItem;
              }, get unitLabel() {
                return a().unitLabel;
              } });
            }
          });
          var Bt = G(tn, 2), At = (Kt) => {
            var jt = De();
            Ue(ve(jt), () => e(ie), (ln) => {
              var Et = af();
              Me(P(Et), () => i()(a().showPricesPerItem ? e(oe) : e(ie))), x(Et), fe((Nt) => Pe(Et, "data-a11y-label", Nt), [() => l()("system.original_price")]), v(ln, Et);
            }), v(Kt, jt);
          };
          T(Bt, (Kt) => {
            e(Ie) && Kt(At);
          }), v(pt, $t);
        };
        T(Ye, (pt) => {
          e(Se) && !r().ignoreUnitPrice ? pt(Ee) : pt(bt, !1);
        }, !0), v(Ce, Te);
      };
      T(Cn, (Ce) => {
        a().showBothPrices ? Ce(H) : Ce(ke, !1);
      }), x(Sn), x(Re), v(pe, He);
    }, $$slots: { default: !0 } });
    var ut = G(nt, 2), ct = (pe) => {
      ya(pe, { get highlights() {
        return c().highlights;
      }, get dealBarSelected() {
        return y();
      } });
    };
    T(ut, (pe) => {
      c().highlights && pe(ct);
    });
    var St = G(ut, 2), Ft = (pe) => {
      var et = of(), He = P(et);
      {
        let se = h(() => e(he) || e(ne)[0]);
        pi(He, { get sellingPlans() {
          return e(ne);
        }, get selectedSellingPlan() {
          return e(se);
        }, onChange: (Ge) => {
          W(M, Ge, !0);
        } });
      }
      x(et), v(pe, et);
    };
    T(St, (pe) => {
      y() && e(me) && !c().sellingPlanGid && e(ne).length > 1 && pe(Ft);
    });
    var xt = G(St, 2), It = (pe) => {
      var et = uf(), He = P(et);
      Qr(He, { get product() {
        return d();
      } }), Ut(G(He, 2), 17, () => ({ length: e(F) }), jr, (se, Ge, Qe) => {
        var Re = cf(), We = P(Re);
        {
          let Mt = h(() => e(F) > 1 ? Qe + 1 : void 0);
          qn(We, { get product() {
            return d();
          }, get selectedVariantId() {
            return e(O)[Qe];
          }, get showImage() {
            return e(ze);
          }, get number() {
            return e(Mt);
          }, onChange: (_t) => (function(vt, Wt) {
            const Lt = [...e(O)];
            Lt[vt] = Wt, W(O, Lt, !0), y() && q()({ variantId: Wt });
          })(Qe, _t), onOptionChange: (_t, vt, Wt) => (function(Lt, Jt, an, Sn) {
            if (a().disableVariantOptionSync || Lt !== 0) return;
            const Cn = Jt - 1, H = e(O).map((ke) => d().variants.find((Ce) => Ce.id === ke)).filter((ke) => ke != null).slice(1);
            H.length !== 0 && H.every((ke) => ke.options[Cn] === Sn) && W(O, e(O).map((ke) => {
              const Ce = d().variants.find((Ee) => Ee.id === ke);
              if (!Ce || Ce.options[Cn] !== Sn) return ke;
              const Te = [...Ce.options];
              Te[Cn] = an;
              const Ye = d().variants.find((Ee) => Ee.options.every((bt, pt) => bt === Te[pt]));
              return Ye ? Ye.id : ke;
            }), !0);
          })(Qe, _t, vt, Wt) });
        }
        var zt = G(We, 2), Ot = (Mt) => {
          {
            let _t = h(() => {
              var vt, Wt;
              return (Wt = (vt = d().variants.find((Lt) => Lt.id === e(O)[Qe])) == null ? void 0 : vt.inventoryQuantity) != null ? Wt : null;
            });
            Hr(Mt, { get lowStockAlert() {
              return a().lowStockAlert;
            }, get inventoryQuantity() {
              return e(_t);
            } });
          }
        };
        T(zt, (Mt) => {
          a().lowStockAlertEnabled && a().lowStockAlert && Mt(Ot);
        }), x(Re), v(se, Re);
      }), x(et), v(pe, et);
    };
    T(xt, (pe) => {
      e(be) && pe(It);
    });
    var rn = G(xt, 2), un = (pe) => {
      {
        let et = h(() => b(c()));
        _a(pe, { get value() {
          return e(ye);
        }, get min() {
          return e(et);
        }, onChange: (He) => W(ye, He, !0) });
      }
    };
    T(rn, (pe) => {
      y() && c().dealBarType === "quantity-break" && c().quantitySelector && pe(un);
    });
    var yn = G(rn, 2), Vn = (pe) => {
      Li(pe, { get product() {
        return d();
      }, get selectedVariantIds() {
        return e(O);
      }, get productPersonalisation() {
        return c().productPersonalisation;
      }, get quantity() {
        return e(ee);
      }, get addPersonalisationModal() {
        return a().addPersonalisationModal;
      }, get onPersonalisationsChange() {
        return z();
      }, get initialValues() {
        return ce();
      } });
    };
    T(yn, (pe) => {
      y() && c().productPersonalisation && (a().blockLayout === "vertical" || a().blockLayout === "plain") && pe(Vn);
    }), x(lt);
    var kr = G(lt, 2);
    {
      let pe = h(() => c().upsells || []);
      ba(kr, { get dealBlock() {
        return a();
      }, get upsells() {
        return e(pe);
      }, get otherProducts() {
        return g();
      }, get complementaryProducts() {
        return f();
      }, get dealBarSelected() {
        return y();
      }, get dealSellingPlan() {
        return e(E);
      }, onChange: (et) => {
        W(J, et, !0);
      } });
    }
    var kt = G(kr, 2);
    ma(kt, { get selectedDealBarIndex() {
      return S();
    }, get onChange() {
      return $();
    }, get dealBlock() {
      return a();
    }, get dealBar() {
      return c();
    }, get selected() {
      return y();
    }, get otherProducts() {
      return g();
    }, get progressiveGifts() {
      return a().progressiveGifts;
    } });
    var Qt = G(kt, 2);
    {
      let pe = h(() => c().freeGifts || []);
      fa(Qt, { get dealBlock() {
        return a();
      }, get freeGifts() {
        return e(pe);
      }, get otherProducts() {
        return g();
      }, get dealBarSelected() {
        return y();
      }, get sellingPlan() {
        return e(E);
      }, get mainProductVariantId() {
        return e(O)[0];
      }, onChange: (et) => {
        W(K, et, !0);
      } });
    }
    var en = G(Qt, 2);
    {
      let pe = h(() => c().multipleGiftsSelectors || []);
      ka(en, { get dealBlock() {
        return a();
      }, get multipleGiftsSelectors() {
        return e(pe);
      }, get sellingPlan() {
        return e(E);
      }, get otherProducts() {
        return g();
      }, onChange: (et) => {
        W(U, et, !0);
      } });
    }
    x(we);
    var _n = G(we, 2), Pn = (pe) => {
      va(pe, { get showAsSoldOut() {
        return c().showAsSoldOut;
      }, get replaceLiquid() {
        return e(X);
      } });
    };
    T(_n, (pe) => {
      c().showAsSoldOutEnabled && c().showAsSoldOut && pe(Pn);
    }), x(je), fe((pe, et) => {
      var He;
      st = qt(je, 1, "kaching-bundles__bar", null, st, pe), Pe(je, "data-deal-bar-id", c().id), Ht(je, e(dt)), Pe(it, "name", `kaching-bundles-deal-${(He = B()) != null ? He : ""}`), Ai(it, c().id), Pe(it, "id", e(Oe)), Za(it, y()), it.disabled = c().showAsSoldOutEnabled, Pe(we, "for", e(Oe)), Ke = qt(we, 1, "kaching-bundles__bar-container", null, Ke, et);
    }, [() => ({ "kaching-bundles__bar--selected": y() }), () => ({ "kaching-bundles__bar-container--sold-out": c().showAsSoldOutEnabled })]), v(t, je);
    var Dt = Ze(rt);
    return o(), Dt;
  }
  $n(["change"]), Le(ps, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var gf = D('<div class="kaching-bundles"><!></div>');
  function iu(t, n) {
    Je(n, !0);
    const r = m(n, "config", 7), i = m(n, "dealBlock", 7), l = m(n, "dealBar", 7), s = m(n, "translations", 7), u = m(n, "product", 7), o = m(n, "mediaImages", 23, () => []), a = m(n, "currentVariantId", 7), c = Math.random().toString(16).slice(2), { setConfig: d } = Fi(r()), { setMoneyFormat: g } = pa(r().moneyFormat), { setTranslations: f } = Ti(s()), { setMediaImages: p } = gl(o()), { setSwatchSettings: _ } = pl({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    Xe(() => {
      d(r());
    }), Xe(() => {
      g(r().moneyFormat, !!i().showPricesWithoutDecimals);
    }), Xe(() => {
      f(s());
    }), Xe(() => {
      p(o());
    }), Xe(() => {
      _({ swatchOptions: i().swatchOptions || [], swatchSize: i().swatchSize, swatchShape: i().swatchShape });
    });
    const B = h(() => i() && gc(i()));
    var y = { get config() {
      return r();
    }, set config(A) {
      r(A), k();
    }, get dealBlock() {
      return i();
    }, set dealBlock(A) {
      i(A), k();
    }, get dealBar() {
      return l();
    }, set dealBar(A) {
      l(A), k();
    }, get translations() {
      return s();
    }, set translations(A) {
      s(A), k();
    }, get product() {
      return u();
    }, set product(A) {
      u(A), k();
    }, get mediaImages() {
      return o();
    }, set mediaImages(A = []) {
      o(A), k();
    }, get currentVariantId() {
      return a();
    }, set currentVariantId(A) {
      a(A), k();
    } }, w = gf(), S = P(w), $ = (A) => {
      ps(A, { selectedDealBarIndex: null, get dealBlock() {
        return i();
      }, get dealBar() {
        return l();
      }, get product() {
        return u();
      }, get currentVariantId() {
        return a();
      }, get componentId() {
        return c;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return T(S, (A) => {
      l().dealBarType && l().dealBarType !== "quantity-break" && l().dealBarType !== "bxgy" || A($);
    }), x(w), fe(() => Ht(w, e(B))), v(t, w), Ze(y);
  }
  customElements.define("kaching-bundles-bar", Le(iu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" } }, [], [], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this;
    }
  }));
  var au = !1;
  const lu = class extends Date {
    constructor(...t) {
      super(...t), ht(this, Sl), ht(this, Wi, Ae(super.getTime())), ht(this, Aa, /* @__PURE__ */ new Map()), ht(this, Pl, wt), au || Yt(this, Sl, Ds).call(this);
    }
  };
  Wi = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakSet(), Ds = function() {
    au = !0;
    var t = lu.prototype, n = Date.prototype, r = Object.getOwnPropertyNames(n);
    for (const i of r) (i.startsWith("get") || i.startsWith("to") || i === "valueOf") && (t[i] = function(...l) {
      if (l.length > 0) return e(de(this, Wi)), n[i].apply(this, l);
      var s = de(this, Aa).get(i);
      if (s === void 0) {
        const u = wt;
        wn(de(this, Pl)), s = h(() => (e(de(this, Wi)), n[i].apply(this, l))), de(this, Aa).set(i, s), wn(u);
      }
      return e(s);
    }), i.startsWith("set") && (t[i] = function(...l) {
      var s = n[i].apply(this, l);
      return W(de(this, Wi), n.getTime.call(this)), s;
    });
  };
  let hs = lu;
  var pf = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], hf = ["difference", "intersection", "symmetricDifference", "union"], su = !1;
  const fs = class extends Set {
    constructor(t) {
      if (super(), ht(this, qa), ht(this, Ui, /* @__PURE__ */ new Map()), ht(this, ur, Ae(0)), ht(this, Xr, Ae(0)), ht(this, Cl, ar || -1), t) {
        for (var n of t) super.add(n);
        de(this, Xr).v = super.size;
      }
      su || Yt(this, qa, $s).call(this);
    }
    has(t) {
      var n = super.has(t), r = de(this, Ui), i = r.get(t);
      if (i === void 0) {
        if (!n) return e(de(this, ur)), !1;
        i = Yt(this, qa, zs).call(this, !0), r.set(t, i);
      }
      return e(i), n;
    }
    add(t) {
      return super.has(t) || (super.add(t), W(de(this, Xr), super.size), Tn(de(this, ur))), this;
    }
    delete(t) {
      var n = super.delete(t), r = de(this, Ui), i = r.get(t);
      return i !== void 0 && (r.delete(t), W(i, !1)), n && (W(de(this, Xr), super.size), Tn(de(this, ur))), n;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var t = de(this, Ui);
        for (var n of t.values()) W(n, !1);
        t.clear(), W(de(this, Xr), 0), Tn(de(this, ur));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(de(this, ur)), super.values();
    }
    entries() {
      return e(de(this, ur)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(de(this, Xr));
    }
  };
  Ui = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakSet(), zs = function(t) {
    return ar === de(this, Cl) ? Ae(t) : Dr(t);
  }, $s = function() {
    su = !0;
    var t = fs.prototype, n = Set.prototype;
    for (const r of pf) t[r] = function(...i) {
      return e(de(this, ur)), n[r].apply(this, i);
    };
    for (const r of hf) t[r] = function(...i) {
      e(de(this, ur));
      var l = n[r].apply(this, i);
      return new fs(l);
    };
  };
  let ff = fs;
  const ou = class extends Map {
    constructor(t) {
      if (super(), ht(this, Cr), ht(this, Pr, /* @__PURE__ */ new Map()), ht(this, Sr, Ae(0)), ht(this, Gr, Ae(0)), ht(this, Bl, ar || -1), t) {
        for (var [n, r] of t) super.set(n, r);
        de(this, Gr).v = super.size;
      }
    }
    has(t) {
      var n = de(this, Pr), r = n.get(t);
      if (r === void 0) {
        if (super.get(t) === void 0) return e(de(this, Sr)), !1;
        r = Yt(this, Cr, Hi).call(this, 0), n.set(t, r);
      }
      return e(r), !0;
    }
    forEach(t, n) {
      Yt(this, Cr, Ma).call(this), super.forEach(t, n);
    }
    get(t) {
      var n = de(this, Pr), r = n.get(t);
      if (r === void 0) {
        if (super.get(t) === void 0) return void e(de(this, Sr));
        r = Yt(this, Cr, Hi).call(this, 0), n.set(t, r);
      }
      return e(r), super.get(t);
    }
    set(t, n) {
      var r, i = de(this, Pr), l = i.get(t), s = super.get(t), u = super.set(t, n), o = de(this, Sr);
      if (l === void 0) l = Yt(this, Cr, Hi).call(this, 0), i.set(t, l), W(de(this, Gr), super.size), Tn(o);
      else if (s !== n) {
        Tn(l);
        var a = o.reactions === null ? null : new Set(o.reactions);
        (a === null || !((r = l.reactions) != null && r.every((c) => a.has(c)))) && Tn(o);
      }
      return u;
    }
    delete(t) {
      var n = de(this, Pr), r = n.get(t), i = super.delete(t);
      return r !== void 0 && (n.delete(t), W(de(this, Gr), super.size), W(r, -1), Tn(de(this, Sr))), i;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var t = de(this, Pr);
        for (var n of (W(de(this, Gr), 0), t.values())) W(n, -1);
        Tn(de(this, Sr)), t.clear();
      }
    }
    keys() {
      return e(de(this, Sr)), super.keys();
    }
    values() {
      return Yt(this, Cr, Ma).call(this), super.values();
    }
    entries() {
      return Yt(this, Cr, Ma).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(de(this, Gr)), super.size;
    }
  };
  Pr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakSet(), Hi = function(t) {
    return ar === de(this, Bl) ? Ae(t) : Dr(t);
  }, Ma = function() {
    e(de(this, Sr));
    var t = de(this, Pr);
    if (de(this, Gr).v !== t.size) {
      for (var n of Nv(ou.prototype, this, "keys").call(this)) if (!t.has(n)) {
        var r = Yt(this, Cr, Hi).call(this, 0);
        t.set(n, r);
      }
    }
    for ([, r] of de(this, Pr)) e(r);
  };
  let bf = ou;
  var vf = D('<img alt="" class="kaching-bundles__bundle-products__image"/>');
  function bs(t, n) {
    Je(n, !0);
    const r = m(n, "image", 7), i = m(n, "linkUrl", 7);
    var l = { get image() {
      return r();
    }, set image(s) {
      r(s), k();
    }, get linkUrl() {
      return i();
    }, set linkUrl(s) {
      i(s), k();
    } };
    return or(t, { get url() {
      return i();
    }, class: "kaching-bundles__bundle-products__link", children: (s, u) => {
      var o = vf();
      Pe(o, "height", 50), Pe(o, "width", 50), fe(() => Pe(o, "src", r())), v(s, o);
    }, $$slots: { default: !0 } }), Ze(l);
  }
  Le(bs, { image: {}, linkUrl: {} }, [], [], !0);
  var _f = D('<span class="kaching-bundles__bundle-products__quantity"> </span>'), kf = D('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function vs(t, n) {
    Je(n, !0);
    const r = m(n, "title", 7), i = m(n, "quantity", 7), l = m(n, "linkUrl", 7);
    var s = { get title() {
      return r();
    }, set title(u) {
      r(u), k();
    }, get quantity() {
      return i();
    }, set quantity(u) {
      i(u), k();
    }, get linkUrl() {
      return l();
    }, set linkUrl(u) {
      l(u), k();
    } };
    return or(t, { get url() {
      return l();
    }, class: "kaching-bundles__bundle-products__link", children: (u, o) => {
      var a = kf(), c = P(a), d = (p) => {
        var _ = _f(), B = P(_);
        x(_), fe(() => {
          var y;
          return yt(B, `${(y = i()) != null ? y : ""}x`);
        }), v(p, _);
      };
      T(c, (p) => {
        i() > 1 && p(d);
      });
      var g = G(c, 2), f = P(g, !0);
      x(g), x(a), fe(() => yt(f, r())), v(u, a);
    }, $$slots: { default: !0 } }), Ze(s);
  }
  Le(vs, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var mf = D('<span class="kaching-bundles__bundle-products__price"><!></span>'), yf = D('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), xf = D('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), wf = D("<div><!> <!> <!></div>");
  function _s(t, n) {
    Je(n, !0);
    const r = () => $e(d, "$formatPrice", i), [i, l] = Pt();
    let s = m(n, "discountedPrice", 7), u = m(n, "fullPrice", 7), o = m(n, "unitPrice", 7), a = m(n, "unitPriceReference", 7), c = m(n, "ignoreUnitPrice", 7);
    const d = bn(), g = h(() => !!o() && !!a() && !c());
    var f = { get discountedPrice() {
      return s();
    }, set discountedPrice(I) {
      s(I), k();
    }, get fullPrice() {
      return u();
    }, set fullPrice(I) {
      u(I), k();
    }, get unitPrice() {
      return o();
    }, set unitPrice(I) {
      o(I), k();
    }, get unitPriceReference() {
      return a();
    }, set unitPriceReference(I) {
      a(I), k();
    }, get ignoreUnitPrice() {
      return c();
    }, set ignoreUnitPrice(I) {
      c(I), k();
    } }, p = wf();
    let _;
    var B = P(p);
    Ue(B, s, (I) => {
      var q = mf();
      Me(P(q), () => r()(s())), x(q), v(I, q);
    });
    var y = G(B, 2), w = (I) => {
      var q = De();
      Ue(ve(q), u, (L) => {
        var z = yf();
        Me(P(z), () => r()(u())), x(z), v(L, z);
      }), v(I, q);
    };
    T(y, (I) => {
      s() < u() && I(w);
    });
    var S = G(y, 2), $ = (I) => {
      var q = De();
      Ue(ve(q), o, (L) => {
        var z = xf(), ce = P(z);
        Me(ce, () => r()(o(), { preserveDecimals: !0 }));
        var N = G(ce);
        x(z), fe(() => {
          var re;
          return yt(N, ` / ${(re = a()) != null ? re : ""}`);
        }), v(L, z);
      }), v(I, q);
    };
    T(S, (I) => {
      o() && a() && !c() && I($);
    }), x(p), fe((I) => _ = qt(p, 1, "kaching-bundles__bundle-products__pricing", null, _, I), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(g) })]), v(t, p);
    var A = Ze(f);
    return l(), A;
  }
  Le(_s, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var Pf = D("<!> <!> <!> <!> <!>", 1), Sf = D("<!> <!>", 1), Cf = D('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), Bf = D('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function cu(t, n) {
    Je(n, !0);
    const r = () => $e(w, "$config", i), [i, l] = Pt();
    let s = m(n, "dealBlock", 7), u = m(n, "layout", 7), o = m(n, "bundleProduct", 7), a = m(n, "product", 7), c = m(n, "dealBarSelected", 7), d = m(n, "currentVariantId", 7), g = m(n, "mainVariantId", 7), f = m(n, "priceRounding", 7), p = m(n, "sellingPlan", 7), _ = m(n, "dealBar", 7), B = m(n, "sets", 7), y = m(n, "onChange", 7);
    const w = cn(), S = bn();
    let $ = Ae(void 0);
    const A = h(() => !!o().variantGIDs), I = h(() => {
      var M, ne;
      return e(A) && a() ? a().variants.filter((me) => o().variantGIDs.some((he) => Tt(he) === me.id)) : (ne = (M = a()) == null ? void 0 : M.variants) != null ? ne : [];
    }), q = h(() => {
      var M, ne, me, he;
      const E = o().productGID === "default", ae = !!((M = s().defaultVariantsV2) != null && M.length);
      if (E && ae && a()) {
        const R = a().id, le = (he = (me = (ne = s().defaultVariantsV2) == null ? void 0 : ne.find((Se) => Tt(Se.productGID) === R && Se.dealBarId === _().id)) == null ? void 0 : me.variantGIDs) == null ? void 0 : he[0];
        if (le) return Tt(le);
      }
      if (o().defaultVariantGID) return Tt(o().defaultVariantGID);
    }), L = h(() => {
      const M = e($) || e(q);
      return M !== void 0 && e(I).some(({ id: ne }) => ne === M) ? M : o().productGID === "default" && d() ? d() : o().variantGIDs ? o().variantGIDs.length === 0 ? void 0 : Tt(o().variantGIDs[0]) : e(I).length > 0 ? e(I)[0].id : void 0;
    }), z = h(() => {
      var M;
      return e(L) ? (M = a()) == null ? void 0 : M.variants.find((ne) => ne.id === e(L)) : void 0;
    }), ce = h(() => {
      var M;
      return a() && e(z) && Mn(a(), e(z), (M = p()) == null ? void 0 : M.id);
    }), N = h(() => o().quantity * B()), re = h(() => Ur({ discountType: o().discountType, discountValue: o().discountValue, discountQuantity: o().quantity, variantQuantities: e(z) ? [{ variant: e(z), quantity: e(N) }] : [], currencyRate: r().currencyRate, priceRounding: f(), sellingPlan: e(ce) })), Q = h(() => (function(M) {
      if (!M) return 0;
      let ne = M.price;
      return s().useProductCompareAtPrice && M.compareAtPrice && (ne = Math.max(ne, M.compareAtPrice)), ne * e(N);
    })(e(z))), Y = h(() => e(z) ? os(e(z)) : null), K = h(() => e(z) ? Zn([{ variant: e(z), quantity: e(N) }]) : null), U = h(() => e(K) ? e(re) / e(K) : null), J = h(() => {
      var M;
      return (M = a()) != null && M.url && e(z) ? `${a().url}?variant=${e(z).id}` : void 0;
    }), Z = h(() => {
      var M, ne;
      return ((M = e(z)) == null ? void 0 : M.image) || ((ne = a()) == null ? void 0 : ne.image);
    }), V = h(() => c() && a() && e(I).length > 1 && e(L)), ee = h(() => c() && o().productGID !== "default" ? e(J) : void 0), ye = h(() => a() ? o().title ? vn({ priceFormatter: $e(S, "$formatPrice", i), product: a(), totalFullPrice: e(Q), totalDiscountedPrice: e(re), quantity: e(N), unitQuantity: e(K) })(o().title) : a().title : "");
    function F(M) {
      W($, M, !0);
    }
    let b;
    Xe(() => {
      e(z) && e(N) && Zt(() => {
        y()({ variant: e(z), product: a(), quantity: e(N) });
      });
    }), gr(() => {
      o().productGID, W($, void 0), b = void 0;
    }), gr(() => {
      const M = o().productGID === "default";
      if (!(M || !s().disableVariantOptionSync)) return;
      const ne = M ? d() : g();
      if (!ne || !a() || ne === b) return;
      const me = b;
      if (b = ne, !e(I).some((ae) => ae.id === ne)) return;
      const he = e($) === void 0 && e(q) === void 0, E = e($) === me && me !== void 0;
      (he || E) && W($, ne, !0);
    });
    var C = { get dealBlock() {
      return s();
    }, set dealBlock(M) {
      s(M), k();
    }, get layout() {
      return u();
    }, set layout(M) {
      u(M), k();
    }, get bundleProduct() {
      return o();
    }, set bundleProduct(M) {
      o(M), k();
    }, get product() {
      return a();
    }, set product(M) {
      a(M), k();
    }, get dealBarSelected() {
      return c();
    }, set dealBarSelected(M) {
      c(M), k();
    }, get currentVariantId() {
      return d();
    }, set currentVariantId(M) {
      d(M), k();
    }, get mainVariantId() {
      return g();
    }, set mainVariantId(M) {
      g(M), k();
    }, get priceRounding() {
      return f();
    }, set priceRounding(M) {
      f(M), k();
    }, get sellingPlan() {
      return p();
    }, set sellingPlan(M) {
      p(M), k();
    }, get dealBar() {
      return _();
    }, set dealBar(M) {
      _(M), k();
    }, get sets() {
      return B();
    }, set sets(M) {
      B(M), k();
    }, get onChange() {
      return y();
    }, set onChange(M) {
      y(M), k();
    } }, O = De(), j = ve(O), ie = (M) => {
      var ne = Bf(), me = P(ne), he = (ae) => {
        var R = Pf(), le = ve(R);
        bs(le, { get image() {
          return e(Z);
        }, get linkUrl() {
          return e(ee);
        } });
        var Se = G(le, 2);
        vs(Se, { get title() {
          return e(ye);
        }, get quantity() {
          return e(N);
        }, get linkUrl() {
          return e(ee);
        } });
        var X = G(Se, 2);
        _s(X, { get discountedPrice() {
          return e(re);
        }, get fullPrice() {
          return e(Q);
        }, get unitPrice() {
          return e(U);
        }, get unitPriceReference() {
          return e(Y);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } });
        var ge = G(X, 2), Ve = (te) => {
          {
            let _e = h(() => {
              var qe, Ie;
              return (Ie = (qe = e(z)) == null ? void 0 : qe.inventoryQuantity) != null ? Ie : null;
            });
            Hr(te, { get lowStockAlert() {
              return s().lowStockAlert;
            }, get inventoryQuantity() {
              return e(_e);
            } });
          }
        };
        T(ge, (te) => {
          s().lowStockAlertEnabled && s().lowStockAlert && te(Ve);
        });
        var ue = G(ge, 2), Be = (te) => {
          {
            let _e = h(() => ({ ...a(), variants: e(I) })), qe = h(() => e(L) || 0);
            qn(te, { get product() {
              return e(_e);
            }, get selectedVariantId() {
              return e(qe);
            }, onChange: F });
          }
        };
        T(ue, (te) => {
          e(V) && te(Be);
        }), v(ae, R);
      }, E = (ae) => {
        var R = Cf(), le = ve(R), Se = P(le);
        bs(Se, { get image() {
          return e(Z);
        }, get linkUrl() {
          return e(ee);
        } });
        var X = G(Se, 2), ge = P(X);
        vs(ge, { get title() {
          return e(ye);
        }, get quantity() {
          return e(N);
        }, get linkUrl() {
          return e(ee);
        } });
        var Ve = G(ge, 2), ue = (_e) => {
          {
            let qe = h(() => {
              var Ie, be;
              return (be = (Ie = e(z)) == null ? void 0 : Ie.inventoryQuantity) != null ? be : null;
            });
            Hr(_e, { get lowStockAlert() {
              return s().lowStockAlert;
            }, get inventoryQuantity() {
              return e(qe);
            } });
          }
        };
        T(Ve, (_e) => {
          s().lowStockAlertEnabled && s().lowStockAlert && _e(ue);
        });
        var Be = G(Ve, 2), te = (_e) => {
          var qe = Sf(), Ie = ve(qe);
          {
            let ze = h(() => ({ ...a(), variants: e(I) }));
            Qr(Ie, { get product() {
              return e(ze);
            } });
          }
          var be = G(Ie, 2);
          {
            let ze = h(() => ({ ...a(), variants: e(I) })), Oe = h(() => e(L) || 0);
            qn(be, { get product() {
              return e(ze);
            }, get selectedVariantId() {
              return e(Oe);
            }, onChange: F });
          }
          v(_e, qe);
        };
        T(Be, (_e) => {
          e(V) && _e(te);
        }), x(X), x(le), _s(G(le, 2), { get discountedPrice() {
          return e(re);
        }, get fullPrice() {
          return e(Q);
        }, get unitPrice() {
          return e(U);
        }, get unitPriceReference() {
          return e(Y);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } }), v(ae, R);
      };
      T(me, (ae) => {
        u() === "horizontal" ? ae(he) : ae(E, !1);
      }), x(ne), v(M, ne);
    };
    T(j, (M) => {
      a() && M(ie);
    }), v(t, O);
    var oe = Ze(C);
    return l(), oe;
  }
  Le(cu, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var If = Ln('<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function uu(t) {
    v(t, If());
  }
  function Df(t, n, r) {
    n()({ dealBarId: r().id, preselected: !1 });
  }
  Le(uu, {}, [], [], !0);
  var zf = D('<img class="kaching-bundles__bar-image" alt=""/>'), $f = D('<div class="kaching-bundles__bar-radio"></div>'), Af = D('<span class="kaching-bundles__bar-title"><!></span>'), qf = D('<span class="kaching-bundles__bar-label"><!></span>'), Mf = D('<div class="kaching-bundles__bar-subtitle"><!></div>'), Vf = D('<div class="kaching-bundles__bar-full-price"><!></div>'), Gf = D('<div class="kaching-bundles__bar-price"><!></div>'), Tf = D('<div class="kaching-bundles__bar-full-price"><!></div>'), Ff = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Of = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Lf = D('<div class="kaching-bundles__bar-full-price"><!></div>'), jf = D("<!> <!>", 1), Ef = D('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Rf = D('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), Qf = D('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), Nf = D("<!> <!>", 1), Wf = D("<div></div>"), Uf = D('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function du(t, n) {
    Je(n, !0);
    const r = () => $e(Q, "$config", u), i = () => $e(N, "$formatPrice", u), l = () => $e(ce, "$translate", u), s = () => $e(re, "$getMediaImageUrl", u), [u, o] = Pt(), a = m(n, "dealBlock", 7), c = m(n, "dealBar", 7), d = m(n, "product", 7), g = m(n, "otherProducts", 23, () => []), f = m(n, "complementaryProducts", 23, () => []), p = m(n, "currentVariantId", 7), _ = m(n, "componentId", 7), B = m(n, "selectedDealBarIndex", 7), y = m(n, "selected", 7, !1), w = m(n, "sellingPlan", 7), S = m(n, "onProgressiveGiftsChange", 7), $ = m(n, "onDealBarSelect", 7), A = m(n, "onDealBarDeselect", 7), I = m(n, "onVariantSelect", 7), q = m(n, "onVariantsChange", 7), L = m(n, "onPersonalisationsChange", 7), z = m(n, "personalisationInitialValues", 23, () => []), ce = Gt(), N = bn(), re = An(), Q = cn();
    let Y = Ae(at({})), K = Ae(at([])), U = Ae(at([])), J = Ae(at([])), Z = Ae(1);
    const V = h(() => `${c().id}_${_()}`), ee = h(() => c().bundleProducts.filter(({ productGID: xe }) => xe)), ye = h(() => e(ee).every((xe) => te(xe, d(), g()))), F = h(() => c().showProductsOnlyWhenSelected && !y()), b = h(() => e(ee).every((xe) => {
      var Ne;
      const dt = te(xe, d(), g());
      return (Ne = dt == null ? void 0 : dt.availableForSale) != null && Ne;
    })), C = h(() => a() ? (function(xe, Ne) {
      return c().bundleProducts.map((rt) => {
        const je = Ne[rt.id];
        if (!je) return 0;
        const { variant: st, quantity: it } = je;
        let we = st.price;
        return st.compareAtPrice && xe.useProductCompareAtPrice && (we = Math.max(we, st.compareAtPrice)), we * it;
      }).reduce((rt, je) => rt + je, 0);
    })(a(), e(Y)) : 0), O = h(() => a().priceRounding ? { perItem: a().showPricesPerItem, precision: a().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), j = h(() => a() ? us(c(), e(Y), r().currencyRate, e(O), w()) : 0), ie = h(() => e(ee).reduce((xe, Ne) => xe + Ne.quantity, 0) * e(Z)), oe = h(() => Math.ceil(e(j) / (e(ie) || 1))), M = h(() => Math.ceil(e(C) / (e(ie) || 1))), ne = h(() => e(C) !== e(j)), me = h(() => Zn(Object.values(e(Y)))), he = h(() => e(ee).every((xe) => xe.productGID === "default" || Tt(xe.productGID) === d().id)), E = h(() => {
      var xe;
      const Ne = e(ee)[0];
      if (Ne) return (xe = e(Y)[Ne.id]) == null ? void 0 : xe.variant.id;
    }), ae = h(() => a().showPricesPerItem && e(he)), R = h(() => vn({ priceFormatter: i(), product: d(), dealBar: c(), totalFullPrice: e(C), totalDiscountedPrice: e(j), quantity: 1, unitQuantity: e(me), sellingPlan: w() })), le = h(() => e(R)(l()(c().title))), Se = h(() => e(R)(l()(c().subtitle))), X = h(() => e(R)(l()(c().label))), ge = h(() => e(R)(l()(c().badgeText))), Ve = h(() => s()(c().badgeImageGID)), ue = h(() => s()(c().mediaImageGID) || fl);
    function Be(xe) {
      y() && (xe.preventDefault(), xe.stopPropagation(), A()());
    }
    function te(xe, Ne, dt) {
      if (xe.productGID) return xe.productGID === "default" ? Ne : dt.find((rt) => rt.id === Tt(xe.productGID));
    }
    $i(() => {
      y() && $()({ dealBarId: c().id, preselected: !0 });
    }), Xe(() => {
      y() && (Ea(e(Y)), Ea(e(J)), Ea(e(K)), Ea(e(U)), w(), Zt(() => {
        (function() {
          if (!c().bundleProducts.map(({ id: st }) => st).every((st) => e(Y)[st])) return;
          const xe = [];
          for (const st of c().bundleProducts) {
            const it = e(Y)[st.id];
            it && xe.push({ id: st.id, variant: it.variant, product: it.product, quantity: it.quantity });
          }
          if (xe.length === 0) return;
          const Ne = e(j) + e(J).reduce((st, it) => st + it.discountedPrice, 0), dt = e(C) + e(J).reduce((st, it) => st + it.fullPrice, 0) + e(K).reduce((st, it) => st + it.fullPrice, 0) + e(U).reduce((st, it) => st + it.fullPrice * it.quantity, 0), rt = us(c(), e(Y), r().currencyRate, e(O), void 0), je = d().sellingPlans.map((st) => ({ sellingPlanId: st.id, discountedPrice: us(c(), e(Y), r().currencyRate, e(O), st) }));
          q()({ bundleProducts: xe, freeGifts: [...e(K), ...e(U)], upsells: e(J), pricing: { discountedPrice: Ne, fullPrice: dt, discountedPricePerItem: e(j), fullPricePerItem: e(C), discountedPriceWithoutSellingPlan: rt, discountedPricesForSellingPlans: je } });
        })();
      }));
    });
    const _e = h(() => c().showAsSoldOutEnabled && c().showAsSoldOut ? _l(c().showAsSoldOut) : "");
    var qe = { get dealBlock() {
      return a();
    }, set dealBlock(xe) {
      a(xe), k();
    }, get dealBar() {
      return c();
    }, set dealBar(xe) {
      c(xe), k();
    }, get product() {
      return d();
    }, set product(xe) {
      d(xe), k();
    }, get otherProducts() {
      return g();
    }, set otherProducts(xe = []) {
      g(xe), k();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(xe = []) {
      f(xe), k();
    }, get currentVariantId() {
      return p();
    }, set currentVariantId(xe) {
      p(xe), k();
    }, get componentId() {
      return _();
    }, set componentId(xe) {
      _(xe), k();
    }, get selectedDealBarIndex() {
      return B();
    }, set selectedDealBarIndex(xe) {
      B(xe), k();
    }, get selected() {
      return y();
    }, set selected(xe = !1) {
      y(xe), k();
    }, get sellingPlan() {
      return w();
    }, set sellingPlan(xe) {
      w(xe), k();
    }, get onProgressiveGiftsChange() {
      return S();
    }, set onProgressiveGiftsChange(xe) {
      S(xe), k();
    }, get onDealBarSelect() {
      return $();
    }, set onDealBarSelect(xe) {
      $(xe), k();
    }, get onDealBarDeselect() {
      return A();
    }, set onDealBarDeselect(xe) {
      A(xe), k();
    }, get onVariantSelect() {
      return I();
    }, set onVariantSelect(xe) {
      I(xe), k();
    }, get onVariantsChange() {
      return q();
    }, set onVariantsChange(xe) {
      q(xe), k();
    }, get onPersonalisationsChange() {
      return L();
    }, set onPersonalisationsChange(xe) {
      L(xe), k();
    }, get personalisationInitialValues() {
      return z();
    }, set personalisationInitialValues(xe = []) {
      z(xe), k();
    } }, Ie = De(), be = ve(Ie), ze = (xe) => {
      var Ne = Uf();
      let dt;
      var rt = P(Ne);
      Er(rt), rt.__change = [Df, $, c];
      var je = G(rt, 2);
      let st;
      var it = P(je);
      {
        let kt = h(() => e(ge) || void 0);
        Oi(it, { get style() {
          return c().badgeStyle;
        }, get text() {
          return e(kt);
        }, get imageUrl() {
          return e(Ve);
        }, get blockLayout() {
          return a().blockLayout;
        } });
      }
      var we = G(it, 2), Ke = P(we);
      Vt(Ke, { element: "div", class: "kaching-bundles__bar-main", onclick: Be, children: (kt, Qt) => {
        var en = Ef(), _n = ve(en), Pn = (_t) => {
          var vt = zf();
          fe(() => Pe(vt, "src", e(ue))), v(_t, vt);
        }, Dt = (_t) => {
          v(_t, $f());
        };
        T(_n, (_t) => {
          c().mediaImageGID ? _t(Pn) : _t(Dt, !1);
        });
        var pe = G(_n, 2), et = P(pe), He = P(et), se = P(He);
        Ue(se, () => e(le), (_t) => {
          var vt = Af();
          Me(P(vt), () => e(le)), x(vt), v(_t, vt);
        });
        var Ge = G(se, 2), Qe = (_t) => {
          var vt = De();
          Ue(ve(vt), () => e(X), (Wt) => {
            var Lt = qf();
            Me(P(Lt), () => e(X)), x(Lt), v(Wt, Lt);
          }), v(_t, vt);
        };
        T(Ge, (_t) => {
          e(X) && _t(Qe);
        }), x(He);
        var Re = G(He, 2), We = (_t) => {
          var vt = De();
          Ue(ve(vt), () => e(Se), (Wt) => {
            var Lt = Mf();
            Me(P(Lt), () => e(Se)), x(Lt), v(Wt, Lt);
          }), v(_t, vt);
        };
        T(Re, (_t) => {
          e(Se) && _t(We);
        }), x(et);
        var zt = G(et, 2), Ot = P(zt), Mt = (_t) => {
          var vt = De(), Wt = ve(vt), Lt = (an) => {
            var Sn = Of(), Cn = ve(Sn), H = P(Cn);
            Ue(H, () => e(oe), (Ee) => {
              Ar(Ee, { get amount() {
                return e(oe);
              }, get showPricesPerItem() {
                return e(ae);
              }, get unitLabel() {
                return a().unitLabel;
              } });
            });
            var ke = G(H, 2), Ce = (Ee) => {
              var bt = De();
              Ue(ve(bt), () => e(M), (pt) => {
                var $t = Vf();
                Me(P($t), () => i()(e(M))), x($t), fe((tn) => Pe($t, "data-a11y-label", tn), [() => l()("system.original_price")]), v(pt, $t);
              }), v(Ee, bt);
            };
            T(ke, (Ee) => {
              e(ne) && Ee(Ce);
            }), x(Cn);
            var Te = G(Cn, 2), Ye = (Ee) => {
              var bt = Ff(), pt = P(bt);
              Ue(pt, () => e(j), (Bt) => {
                var At = Gf();
                Me(P(At), () => i()(e(j))), x(At), fe((Kt) => Pe(At, "data-a11y-label", Kt), [() => l()("system.price")]), v(Bt, At);
              });
              var $t = G(pt, 2), tn = (Bt) => {
                var At = De();
                Ue(ve(At), () => e(C), (Kt) => {
                  var jt = Tf();
                  Me(P(jt), () => i()(e(C))), x(jt), fe((ln) => Pe(jt, "data-a11y-label", ln), [() => l()("system.original_price")]), v(Kt, jt);
                }), v(Bt, At);
              };
              T($t, (Bt) => {
                e(ne) && Bt(tn);
              }), x(bt), v(Ee, bt);
            };
            T(Te, (Ee) => {
              e(ie) > 1 && Ee(Ye);
            }), v(an, Sn);
          }, Jt = (an) => {
            var Sn = jf(), Cn = ve(Sn);
            Ue(Cn, () => e(j), (Ce) => {
              {
                let Te = h(() => e(ae) ? e(oe) : e(j));
                Ar(Ce, { get amount() {
                  return e(Te);
                }, get showPricesPerItem() {
                  return e(ae);
                }, get unitLabel() {
                  return a().unitLabel;
                } });
              }
            });
            var H = G(Cn, 2), ke = (Ce) => {
              var Te = De();
              Ue(ve(Te), () => e(C), (Ye) => {
                var Ee = Lf();
                Me(P(Ee), () => i()(e(ae) ? e(M) : e(C))), x(Ee), fe((bt) => Pe(Ee, "data-a11y-label", bt), [() => l()("system.original_price")]), v(Ye, Ee);
              }), v(Ce, Te);
            };
            T(H, (Ce) => {
              e(ne) && Ce(ke);
            }), v(an, Sn);
          };
          T(Wt, (an) => {
            a().showBothPrices && e(he) ? an(Lt) : an(Jt, !1);
          }), v(_t, vt);
        };
        T(Ot, (_t) => {
          e(ye) && _t(Mt);
        }), x(zt), x(pe), v(kt, en);
      }, $$slots: { default: !0 } });
      var ot = G(Ke, 2), lt = (kt) => {
        ya(kt, { get highlights() {
          return c().highlights;
        }, get dealBarSelected() {
          return y();
        } });
      };
      T(ot, (kt) => {
        c().highlights && kt(lt);
      });
      var nt = G(ot, 2), ut = (kt) => {
        _a(kt, { get value() {
          return e(Z);
        }, onChange: (Qt) => {
          W(Z, Qt, !0);
        } });
      };
      T(nt, (kt) => {
        y() && c().quantitySelector && kt(ut);
      });
      var ct = G(nt, 2), St = (kt) => {
        var Qt = Wf();
        let en;
        Ut(Qt, 23, () => c().bundleProducts, (_n) => _n.id, (_n, Pn, Dt) => {
          var pe = Nf(), et = ve(pe), He = (Re) => {
            {
              let We = h(() => te(e(Pn), d(), g())), zt = h(() => c().layout || "horizontal");
              cu(Re, { get dealBar() {
                return c();
              }, get bundleProduct() {
                return e(Pn);
              }, get product() {
                return e(We);
              }, get dealBlock() {
                return a();
              }, get layout() {
                return e(zt);
              }, get dealBarSelected() {
                return y();
              }, get priceRounding() {
                return e(O);
              }, get currentVariantId() {
                return p();
              }, get mainVariantId() {
                return e(E);
              }, get sellingPlan() {
                return w();
              }, get sets() {
                return e(Z);
              }, onChange: (Ot) => (function(Mt, _t) {
                const { variant: vt, product: Wt, quantity: Lt } = _t;
                e(Y)[Mt] = { variant: vt, product: Wt, quantity: Lt }, y() && c().bundleProducts.map(({ id: Jt }) => Jt).every((Jt) => e(Y)[Jt]) && Mt === c().bundleProducts[0].id && I()({ variantId: vt.id });
              })(e(Pn).id, Ot) });
            }
          }, se = (Re) => {
            var We = De(), zt = ve(We), Ot = (Mt) => {
              v(Mt, Rf());
            };
            T(zt, (Mt) => {
              r().preview && Mt(Ot);
            }, !0), v(Re, We);
          };
          T(et, (Re) => {
            e(Pn).productGID ? Re(He) : Re(se, !1);
          });
          var Ge = G(et, 2), Qe = (Re) => {
            var We = Qf(), zt = G(P(We), 2);
            uu(P(zt)), x(zt), Yi(2), x(We), v(Re, We);
          };
          T(Ge, (Re) => {
            e(Dt) < c().bundleProducts.length - 1 && Re(Qe);
          }), v(_n, pe);
        }), x(Qt), fe((_n) => en = qt(Qt, 1, "kaching-bundles__bundle-products", null, en, _n), [() => ({ "kaching-bundles__bundle-products--vertical": c().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(F) })]), v(kt, Qt);
      };
      T(ct, (kt) => {
        e(ye) && kt(St);
      });
      var Ft = G(ct, 2), xt = (kt) => {
        {
          let Qt = h(() => e(E) ? [e(E)] : []);
          Li(kt, { get product() {
            return d();
          }, get productPersonalisation() {
            return c().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Qt);
          }, get quantity() {
            return e(Z);
          }, get addPersonalisationModal() {
            return a().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return L();
          }, get initialValues() {
            return z();
          } });
        }
      };
      T(Ft, (kt) => {
        y() && c().productPersonalisation && (a().blockLayout === "vertical" || a().blockLayout === "plain") && kt(xt);
      }), x(we);
      var It = G(we, 2);
      {
        let kt = h(() => c().upsells || []);
        ba(It, { get dealBlock() {
          return a();
        }, get upsells() {
          return e(kt);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return f();
        }, get dealBarSelected() {
          return y();
        }, get dealSellingPlan() {
          return w();
        }, get sets() {
          return e(Z);
        }, onChange: (Qt) => {
          W(J, Qt, !0);
        } });
      }
      var rn = G(It, 2);
      ma(rn, { get selectedDealBarIndex() {
        return B();
      }, get onChange() {
        return S();
      }, get dealBlock() {
        return a();
      }, get dealBar() {
        return c();
      }, get otherProducts() {
        return g();
      }, get selected() {
        return y();
      }, get progressiveGifts() {
        return a().progressiveGifts;
      } });
      var un = G(rn, 2);
      {
        let kt = h(() => c().freeGifts || []);
        fa(un, { get dealBlock() {
          return a();
        }, get freeGifts() {
          return e(kt);
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return y();
        }, get sellingPlan() {
          return w();
        }, get sets() {
          return e(Z);
        }, onChange: (Qt) => {
          W(K, Qt, !0);
        } });
      }
      var yn = G(un, 2);
      {
        let kt = h(() => c().multipleGiftsSelectors || []);
        ka(yn, { get dealBlock() {
          return a();
        }, get multipleGiftsSelectors() {
          return e(kt);
        }, get sellingPlan() {
          return w();
        }, get otherProducts() {
          return g();
        }, onChange: (Qt) => {
          W(U, Qt, !0);
        } });
      }
      x(je);
      var Vn = G(je, 2), kr = (kt) => {
        va(kt, { get showAsSoldOut() {
          return c().showAsSoldOut;
        }, get replaceLiquid() {
          return e(R);
        } });
      };
      T(Vn, (kt) => {
        c().showAsSoldOutEnabled && c().showAsSoldOut && kt(kr);
      }), x(Ne), fe((kt, Qt) => {
        var en;
        dt = qt(Ne, 1, "kaching-bundles__bar", null, dt, kt), Pe(Ne, "data-deal-bar-id", c().id), Ht(Ne, e(_e)), Pe(rt, "name", `kaching-bundles-deal-${(en = _()) != null ? en : ""}`), Ai(rt, c().id), Pe(rt, "id", e(V)), Za(rt, y()), rt.disabled = c().showAsSoldOutEnabled, Pe(je, "for", e(V)), st = qt(je, 1, "kaching-bundles__bar-container", null, st, Qt);
      }, [() => ({ "kaching-bundles__bar--selected": y(), "kaching-bundles__bar--disabled": !e(b) && r().preview }), () => ({ "kaching-bundles__bar-container--sold-out": c().showAsSoldOutEnabled })]), v(xe, Ne);
    };
    T(be, (xe) => {
      (e(b) || r().preview) && xe(ze);
    }), v(t, Ie);
    var Oe = Ze(qe);
    return o(), Oe;
  }
  $n(["change"]), Le(du, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Hf = Ln('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function gu(t, n) {
    Je(n, !0);
    let r = m(n, "class", 7);
    var i = { get class() {
      return r();
    }, set class(s) {
      r(s), k();
    } }, l = Hf();
    return fe(() => qt(l, 0, sa(r()))), v(t, l), Ze(i);
  }
  Le(gu, { class: {} }, [], [], !0);
  const ks = Rr({}), ms = Rr(!1);
  function xa(t) {
    ms.set(t);
  }
  function ys(t, n) {
    ks.update((r) => ({ ...r, [t]: n }));
  }
  const Jf = (t) => {
    const { collectionBreaks: n, colors: r, cornerRadius: i } = t;
    return n ? pn({ "kaching-collection-breaks-product-photo-size": n.productPhotoSize + "px", "kaching-collection-breaks-button-color": n.buttonColor && Fe(n.buttonColor), "kaching-collection-breaks-product-title-color": Fe(r.title), "kaching-collection-breaks-image-border-radius": (i || 0) / 2 + "px" }) : "";
  };
  function Zf(t, n) {
    t.target === t.currentTarget && W(n, !1);
  }
  var Kf = D('<img class="kaching-bundles__collection-product__image" alt=""/>'), Yf = D('<span class="kaching-bundles__collection-product__title"> </span>'), Xf = D("<!> <!>", 1), eb = D('<img alt=""/>'), tb = D('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), nb = D('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), rb = D('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), ib = D('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function xs(t, n) {
    Je(n, !0);
    const r = () => $e(_, "$config", i), [i, l] = Pt(), s = m(n, "dealBlock", 7), u = m(n, "dealBar", 7), o = m(n, "mainProduct", 7, null), a = m(n, "products", 7), c = m(n, "selectedProductVariant", 7, null), d = m(n, "onChange", 7), g = m(n, "onRemove", 7), f = Gt(), p = An(), _ = cn();
    let B = Ae(!1);
    const y = h(() => s().collectionBreaks), w = h(() => {
      var V;
      return ((V = c()) == null ? void 0 : V.product) || o();
    }), S = h(() => {
      var V, ee;
      return ((V = c()) == null ? void 0 : V.variant) || ((ee = e(w)) == null ? void 0 : ee.variants[0]) || null;
    }), $ = h(() => $e(p, "$getMediaImageUrl", i)(e(y).mediaImageGID)), A = h(() => $e(f, "$translate", i)(e(y).buttonText)), I = h(() => e(y).requireItemSelectionAlert), q = h(() => e(y).requireItemSelectionEnabled), L = h(() => r().preview && r().previewAlerts || $e(ms, "$requireSelectionError", i)), z = h(() => {
      var V, ee;
      return (V = e(w)) != null && V.url ? `${e(w).url}?variant=${(ee = e(S)) == null ? void 0 : ee.id}` : void 0;
    });
    function ce(V) {
      W(B, !1), d()(V);
    }
    function N() {
      var V;
      (V = g()) == null || V();
    }
    function re(V) {
      const ee = e(w).variants.find((ye) => ye.id === V);
      ee && d()({ product: e(w), variant: ee });
    }
    var Q = { get dealBlock() {
      return s();
    }, set dealBlock(V) {
      s(V), k();
    }, get dealBar() {
      return u();
    }, set dealBar(V) {
      u(V), k();
    }, get mainProduct() {
      return o();
    }, set mainProduct(V = null) {
      o(V), k();
    }, get products() {
      return a();
    }, set products(V) {
      a(V), k();
    }, get selectedProductVariant() {
      return c();
    }, set selectedProductVariant(V = null) {
      c(V), k();
    }, get onChange() {
      return d();
    }, set onChange(V) {
      d(V), k();
    }, get onRemove() {
      return g();
    }, set onRemove(V) {
      g(V), k();
    } }, Y = De(), K = ve(Y), U = (V) => {
      var ee = tb(), ye = P(ee), F = P(ye);
      {
        let he = h(() => o() ? void 0 : e(z));
        or(F, { get url() {
          return e(he);
        }, class: "kaching-bundles__collection-product__link", children: (E, ae) => {
          var R = Kf();
          fe(() => Pe(R, "src", e(S).image || e(w).image)), v(E, R);
        }, $$slots: { default: !0 } });
      }
      var b = G(F, 2), C = P(b), O = (he) => {
        {
          let E = h(() => o() ? void 0 : e(z));
          or(he, { get url() {
            return e(E);
          }, class: "kaching-bundles__collection-product__link", children: (ae, R) => {
            var le = Yf(), Se = P(le, !0);
            x(le), fe(() => yt(Se, e(w).title)), v(ae, le);
          }, $$slots: { default: !0 } });
        }
      };
      T(C, (he) => {
        e(y).showProductName && he(O);
      });
      var j = G(C, 2), ie = (he) => {
        var E = Xf(), ae = ve(E);
        Qr(ae, { get product() {
          return e(w);
        } });
        var R = G(ae, 2);
        {
          let le = h(() => {
            var Se;
            return (Se = e(S)) == null ? void 0 : Se.id;
          });
          qn(R, { get product() {
            return e(w);
          }, get selectedVariantId() {
            return e(le);
          }, onChange: re });
        }
        v(he, E);
      };
      T(j, (he) => {
        e(w).variants.length > 1 && he(ie);
      });
      var oe = G(j, 2), M = (he) => {
        Hr(he, { get lowStockAlert() {
          return s().lowStockAlert;
        }, get inventoryQuantity() {
          return e(S).inventoryQuantity;
        } });
      };
      T(oe, (he) => {
        s().lowStockAlertEnabled && s().lowStockAlert && he(M);
      }), x(b), x(ye);
      var ne = G(ye, 2), me = (he) => {
        Vt(he, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: N, children: (E, ae) => {
          var R = eb();
          fe(() => Pe(R, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), v(E, R);
        }, $$slots: { default: !0 } });
      };
      T(ne, (he) => {
        o() || he(me);
      }), x(ee), v(V, ee);
    }, J = (V) => {
      var ee = ib();
      let ye;
      var F = P(ee), b = P(F);
      Vt(b, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        W(B, !0);
      }, children: (oe, M) => {
        var ne = De(), me = ve(ne), he = (ae) => {
          var R = De(), le = ve(R), Se = (X) => {
            var ge = nb();
            fe(() => Pe(ge, "src", e($))), v(X, ge);
          };
          T(le, (X) => {
            e($) && X(Se);
          }), v(ae, R);
        }, E = (ae) => {
          gu(ae, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        T(me, (ae) => {
          e(y).mediaImageGID ? ae(he) : ae(E, !1);
        }), v(oe, ne);
      }, $$slots: { default: !0 } });
      var C = G(b, 2), O = (oe) => {
        Vt(oe, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          W(B, !0);
        }, children: (M, ne) => {
          Yi();
          var me = Wn();
          fe(() => yt(me, e(A))), v(M, me);
        }, $$slots: { default: !0 } });
      };
      T(C, (oe) => {
        e(A) && oe(O);
      }), x(F);
      var j = G(F, 2), ie = (oe) => {
        bl(oe, { target: "body", children: (M, ne) => {
          var me = rb(), he = P(me);
          he.__click = [Zf, B];
          var E = P(he);
          ds(P(E), { get dealBlock() {
            return s();
          }, get dealBar() {
            return u();
          }, get products() {
            return a();
          }, onChoose: ce, onClose: () => {
            W(B, !1);
          } }), x(E), x(he), x(me), fe((ae) => Ht(he, ae), [() => (function(ae) {
            return pn({ "kaching-choose-product-overlay-color": Fe(ae.chooseProductModal.overlayColor) });
          })(s())]), v(M, me);
        }, $$slots: { default: !0 } });
      };
      T(j, (oe) => {
        e(B) && oe(ie);
      }), x(ee), fe((oe) => ye = qt(ee, 1, "kaching-bundles__collection-product", null, ye, oe), [() => ({ "kaching-bundles__collection-product--require-selection": e(L) && e(q) && e(I) })]), v(V, ee);
    };
    T(K, (V) => {
      e(w) && e(S) ? V(U) : V(J, !1);
    }), v(t, Y);
    var Z = Ze(Q);
    return l(), Z;
  }
  function ab(t, n, r, i) {
    n()({ dealBarId: r().id, dealBarQuantity: i(r()), preselected: !1 });
  }
  $n(["click"]), Le(xs, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var lb = D('<img class="kaching-bundles__bar-image" alt=""/>'), sb = D('<div class="kaching-bundles__bar-radio"></div>'), ob = D('<span class="kaching-bundles__bar-title"><!></span>'), cb = D('<span class="kaching-bundles__bar-label"><!></span>'), ub = D('<div class="kaching-bundles__bar-subtitle"><!></div>'), db = D('<div class="kaching-bundles__bar-full-price"><!></div>'), gb = D('<div class="kaching-bundles__bar-price"><!></div>'), pb = D('<div class="kaching-bundles__bar-full-price"><!></div>'), hb = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), fb = D('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), bb = D('<div class="kaching-bundles__bar-full-price"><!></div>'), vb = D("<!> <!>", 1), _b = D('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), kb = D('<div class="kaching-bundles__bar-selling-plan"><!></div>'), mb = D('<div class="kaching-bundles__bar-collection-products"></div>'), yb = D('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function pu(t, n) {
    Je(n, !0);
    const r = () => $e(U, "$config", o), i = () => $e(ks, "$chosenCollectionBreaksProducts", o), l = () => $e(Y, "$formatPrice", o), s = () => $e(Q, "$translate", o), u = () => $e(K, "$getMediaImageUrl", o), [o, a] = Pt();
    let c = m(n, "dealBlock", 7), d = m(n, "dealBar", 7), g = m(n, "product", 7), f = m(n, "collectionBreaksProducts", 23, () => []), p = m(n, "otherProducts", 23, () => []), _ = m(n, "selectedDealBarIndex", 7, null), B = m(n, "complementaryProducts", 23, () => []), y = m(n, "customQuantity", 7, void 0), w = m(n, "currentVariantId", 7, void 0), S = m(n, "componentId", 7), $ = m(n, "selected", 7, !1), A = m(n, "globalSellingPlan", 7, void 0), I = m(n, "onDealBarSelect", 7), q = m(n, "onDealBarDeselect", 7), L = m(n, "onVariantSelect", 7), z = m(n, "onVariantsChange", 7), ce = m(n, "onPersonalisationsChange", 7), N = m(n, "personalisationInitialValues", 23, () => []), re = m(n, "onProgressiveGiftsChange", 7);
    const Q = Gt(), Y = bn(), K = An(), U = cn();
    let J = Ae(at([])), Z = Ae(at([])), V = Ae(at([]));
    const ee = new ff(), ye = h(() => {
      var se, Ge;
      return (Ge = (se = c().collectionBreaks) == null ? void 0 : se.autoFillNotChosenItems) != null && Ge;
    }), F = h(() => c().priceRounding ? { perItem: c().showPricesPerItem, precision: c().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), b = h(() => {
      var se, Ge;
      return c() && ((Ge = (se = c().defaultVariantsV2) == null ? void 0 : se.find((Qe) => Tt(Qe.productGID) === g().id && Qe.dealBarId === d().id)) == null ? void 0 : Ge.variantGIDs) || [];
    });
    let C = h(() => ie(d())), O = Ae(at(ie(d())));
    gr(() => {
      W(O, e(C), !0);
    });
    const j = h(() => y() || e(O));
    function ie(se) {
      return se.dealBarType === "bxgy" ? se.buyQuantity + se.getQuantity : Number(se.quantity);
    }
    Xe(() => {
      w() && Zt(() => {
        (function(se, Ge) {
          if (Object.keys(i()).length === 0 && se[0]) {
            const Re = Tt(se[0]), We = g().variants.find((zt) => zt.id == Re);
            if (We) return void ys(0, { product: g(), variant: We });
          }
          const Qe = g().variants.find((Re) => Re.id == Ge);
          ys(0, { product: g(), variant: Qe });
        })(e(b), w());
      });
    }), Xe(() => {
      $() || ee.clear();
    });
    const oe = h(() => f().length === 0 || f().some((se) => se.id === g().id)), M = h(() => {
      const se = Object.fromEntries(Object.entries(i()).filter(([Qe]) => Number(Qe) < e(j)));
      if (!$() || !e(ye)) return se;
      const Ge = { ...se };
      for (let Qe = 1; Qe < e(j); Qe++) Ge[Qe] || ee.has(Qe) || (e(oe) && se[0] ? Ge[Qe] = { product: g(), variant: se[0].variant } : se[1] && (Ge[Qe] = { product: se[1].product, variant: se[1].variant }));
      return Ge;
    }), ne = h(() => (() => {
      var se;
      const Ge = Object.values(e(M)).map((Re) => ({ quantity: 1, variant: Re.variant }));
      if (Ge.length === 0 || Ge.length >= e(j) || (se = c().collectionBreaks) != null && se.showChosenProductsPriceOnly) return Ge;
      const Qe = e(j) - Ge.length;
      if (f().length === 0 || f().find((Re) => Re.id === g().id)) {
        const Re = Array.from({ length: Qe }, () => Ge[0]);
        return [...Ge, ...Re];
      }
      {
        const Re = f().flatMap((Ot) => Ot.variants).filter((Ot) => Ot.availableForSale), We = Re.reduce((Ot, Mt) => Mt.price < Ot.price ? Mt : Ot, Re[0]), zt = Array.from({ length: Qe }, () => ({ quantity: 1, variant: We }));
        return [...Ge, ...zt];
      }
    })());
    let me = Ae(void 0);
    const he = h(() => $c(g(), e(ne).map((se) => se.variant))), E = h(() => d().sellingPlanEnabled && (!c().subscriptionsEnabled || !!A())), ae = h(() => e(E) ? Ac(d(), e(he), e(me)) : void 0), R = h(() => qc(e(ae), A(), e(he), g().requiresSellingPlan)), le = h(() => new Set(g().variants.map((se) => se.id))), Se = h(() => Object.values(e(M)).filter((se) => e(le).has(se.variant.id))), X = h(() => (function(se, Ge, Qe) {
      return Qe.map(({ variant: We, quantity: zt }) => {
        let Ot = We.price;
        const Mt = se.useProductCompareAtPrice || (Ge.dealBarType === void 0 || Ge.dealBarType === "quantity-break") && Ge.discountType === "default";
        return We.compareAtPrice && Mt && (Ot = Math.max(Ot, We.compareAtPrice)), Ot * zt;
      }).reduce((We, zt) => We + zt, 0);
    })(c(), d(), e(ne))), ge = h(() => Math.ceil(e(X) / e(ne).length)), Ve = h(() => c() && be(e(ne), e(R))), ue = h(() => vn({ priceFormatter: l(), product: g(), dealBar: d(), totalFullPrice: e(X), totalDiscountedPrice: e(Ve), quantity: e(j), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Zn(e(ne)), sellingPlan: e(R) })), Be = h(() => e(ue)(s()(d().title))), te = h(() => e(ue)(s()(d().subtitle))), _e = h(() => e(ue)(s()(d().label))), qe = h(() => e(ue)(s()(d().badgeText))), Ie = h(() => u()(d().badgeImageGID));
    function be(se, Ge) {
      switch (d().dealBarType) {
        case void 0:
        case "quantity-break":
          return Mc(d(), se, r().currencyRate, e(F), Ge, r().featureFlags.percentage_cents_rounding_workaround);
        case "bxgy":
          return Vc(d(), se, r().currencyRate, e(F), Ge);
      }
    }
    const ze = h(() => Math.ceil(e(Ve) / e(ne).length)), Oe = h(() => e(X) !== e(Ve)), xe = h(() => `${d().id}_${S()}`);
    $i(() => {
      $() && I()({ dealBarId: d().id, dealBarQuantity: ie(d()), preselected: !0 });
    });
    const Ne = h(() => u()(d().mediaImageGID) || fl);
    Xe(() => {
      var se;
      $() && Object.keys(e(M)).length > 0 && (e(V), e(J), e(Z), e(R), (se = c().collectionBreaks) == null || se.requireItemSelectionEnabled, Zt(() => {
        (function() {
          var Ge, Qe;
          const Re = Object.values(e(M)).map((Jt) => ({ variant: Jt.variant, product: Jt.product, quantity: 1 })), We = e(Ve) + e(V).reduce((Jt, an) => Jt + an.discountedPrice, 0), zt = e(X) + e(V).reduce((Jt, an) => Jt + an.fullPrice, 0) + e(J).reduce((Jt, an) => Jt + an.fullPrice, 0) + e(Z).reduce((Jt, an) => Jt + an.fullPrice * an.quantity, 0), Ot = be(e(ne), void 0), Mt = g().sellingPlans.map((Jt) => ({ sellingPlanId: Jt.id, discountedPrice: be(e(ne), Jt) })), _t = (Qe = (Ge = c().collectionBreaks) == null ? void 0 : Ge.requireItemSelectionEnabled) != null && Qe, vt = Re.length, Wt = !_t || vt >= e(j), Lt = _t ? Math.max(0, e(j) - vt) : 0;
          z()({ variants: Re, freeGifts: [...e(J), ...e(Z)], upsells: e(V), dealBarSellingPlan: e(ae), pricing: { discountedPrice: We, fullPrice: zt, discountedPricePerItem: e(ze), fullPricePerItem: e(ge), discountedPriceWithoutSellingPlan: Ot, discountedPricesForSellingPlans: Mt }, validation: { requiresItemSelection: _t, allItemsSelected: Wt, missingItemsCount: Lt } });
        })();
      }));
    });
    const dt = h(() => d().showAsSoldOutEnabled && d().showAsSoldOut ? _l(d().showAsSoldOut) : ""), rt = h(() => [Jf(c()), e(dt)].filter(Boolean).join(";"));
    function je(se, Ge) {
      se === 0 && L()({ variantId: Ge.variant.id }), ys(se, Ge), xa(!1), e(ye) && ee.delete(se);
    }
    function st(se) {
      (function(Ge) {
        ks.update((Qe) => {
          const { [Ge]: Re, ...We } = Qe;
          return We;
        });
      })(se), e(ye) && ee.add(se);
    }
    var it = { get dealBlock() {
      return c();
    }, set dealBlock(se) {
      c(se), k();
    }, get dealBar() {
      return d();
    }, set dealBar(se) {
      d(se), k();
    }, get product() {
      return g();
    }, set product(se) {
      g(se), k();
    }, get collectionBreaksProducts() {
      return f();
    }, set collectionBreaksProducts(se = []) {
      f(se), k();
    }, get otherProducts() {
      return p();
    }, set otherProducts(se = []) {
      p(se), k();
    }, get selectedDealBarIndex() {
      return _();
    }, set selectedDealBarIndex(se = null) {
      _(se), k();
    }, get complementaryProducts() {
      return B();
    }, set complementaryProducts(se = []) {
      B(se), k();
    }, get customQuantity() {
      return y();
    }, set customQuantity(se = void 0) {
      y(se), k();
    }, get currentVariantId() {
      return w();
    }, set currentVariantId(se = void 0) {
      w(se), k();
    }, get componentId() {
      return S();
    }, set componentId(se) {
      S(se), k();
    }, get selected() {
      return $();
    }, set selected(se = !1) {
      $(se), k();
    }, get globalSellingPlan() {
      return A();
    }, set globalSellingPlan(se = void 0) {
      A(se), k();
    }, get onDealBarSelect() {
      return I();
    }, set onDealBarSelect(se) {
      I(se), k();
    }, get onDealBarDeselect() {
      return q();
    }, set onDealBarDeselect(se) {
      q(se), k();
    }, get onVariantSelect() {
      return L();
    }, set onVariantSelect(se) {
      L(se), k();
    }, get onVariantsChange() {
      return z();
    }, set onVariantsChange(se) {
      z(se), k();
    }, get onPersonalisationsChange() {
      return ce();
    }, set onPersonalisationsChange(se) {
      ce(se), k();
    }, get personalisationInitialValues() {
      return N();
    }, set personalisationInitialValues(se = []) {
      N(se), k();
    }, get onProgressiveGiftsChange() {
      return re();
    }, set onProgressiveGiftsChange(se) {
      re(se), k();
    } }, we = yb();
    let Ke;
    var ot = P(we);
    Er(ot), ot.__change = [ab, I, d, ie];
    var lt = G(ot, 2);
    let nt;
    var ut = P(lt);
    {
      let se = h(() => e(qe) || void 0);
      Oi(ut, { get style() {
        return d().badgeStyle;
      }, get text() {
        return e(se);
      }, get imageUrl() {
        return e(Ie);
      }, get blockLayout() {
        return c().blockLayout;
      } });
    }
    var ct = G(ut, 2), St = P(ct);
    Vt(St, { element: "div", class: "kaching-bundles__bar-main", onclick: function(se) {
      $() && (se.preventDefault(), se.stopPropagation(), q()());
    }, children: (se, Ge) => {
      var Qe = _b(), Re = ve(Qe), We = (Ce) => {
        var Te = lb();
        fe(() => Pe(Te, "src", e(Ne))), v(Ce, Te);
      }, zt = (Ce) => {
        v(Ce, sb());
      };
      T(Re, (Ce) => {
        d().mediaImageGID ? Ce(We) : Ce(zt, !1);
      });
      var Ot = G(Re, 2), Mt = P(Ot), _t = P(Mt), vt = P(_t);
      Ue(vt, () => e(Be), (Ce) => {
        var Te = ob();
        Me(P(Te), () => e(Be)), x(Te), v(Ce, Te);
      });
      var Wt = G(vt, 2), Lt = (Ce) => {
        var Te = De();
        Ue(ve(Te), () => e(_e), (Ye) => {
          var Ee = cb();
          Me(P(Ee), () => e(_e)), x(Ee), v(Ye, Ee);
        }), v(Ce, Te);
      };
      T(Wt, (Ce) => {
        e(_e) && Ce(Lt);
      }), x(_t);
      var Jt = G(_t, 2), an = (Ce) => {
        var Te = De();
        Ue(ve(Te), () => e(te), (Ye) => {
          var Ee = ub();
          Me(P(Ee), () => e(te)), x(Ee), v(Ye, Ee);
        }), v(Ce, Te);
      };
      T(Jt, (Ce) => {
        e(te) && Ce(an);
      }), x(Mt);
      var Sn = G(Mt, 2), Cn = P(Sn), H = (Ce) => {
        var Te = fb(), Ye = ve(Te), Ee = P(Ye);
        Ue(Ee, () => e(ze), (Bt) => {
          Ar(Bt, { get amount() {
            return e(ze);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var bt = G(Ee, 2), pt = (Bt) => {
          var At = De();
          Ue(ve(At), () => e(ge), (Kt) => {
            var jt = db();
            Me(P(jt), () => l()(e(ge))), x(jt), fe((ln) => Pe(jt, "data-a11y-label", ln), [() => s()("system.original_price")]), v(Kt, jt);
          }), v(Bt, At);
        };
        T(bt, (Bt) => {
          e(Oe) && Bt(pt);
        }), x(Ye);
        var $t = G(Ye, 2), tn = (Bt) => {
          var At = hb(), Kt = P(At);
          Ue(Kt, () => e(Ve), (Et) => {
            var Nt = gb();
            Me(P(Nt), () => l()(e(Ve))), x(Nt), fe((kn) => Pe(Nt, "data-a11y-label", kn), [() => s()("system.price")]), v(Et, Nt);
          });
          var jt = G(Kt, 2), ln = (Et) => {
            var Nt = De();
            Ue(ve(Nt), () => e(X), (kn) => {
              var mn = pb();
              Me(P(mn), () => l()(e(X))), x(mn), fe((hi) => Pe(mn, "data-a11y-label", hi), [() => s()("system.original_price")]), v(kn, mn);
            }), v(Et, Nt);
          };
          T(jt, (Et) => {
            e(Oe) && Et(ln);
          }), x(At), v(Bt, At);
        };
        T($t, (Bt) => {
          e(j) > 1 && Bt(tn);
        }), v(Ce, Te);
      }, ke = (Ce) => {
        var Te = vb(), Ye = ve(Te);
        Ue(Ye, () => e(Ve), (pt) => {
          {
            let $t = h(() => c().showPricesPerItem ? e(ze) : e(Ve));
            Ar(pt, { get amount() {
              return e($t);
            }, get showPricesPerItem() {
              return c().showPricesPerItem;
            }, get unitLabel() {
              return c().unitLabel;
            } });
          }
        });
        var Ee = G(Ye, 2), bt = (pt) => {
          var $t = De();
          Ue(ve($t), () => e(X), (tn) => {
            var Bt = bb();
            Me(P(Bt), () => l()(c().showPricesPerItem ? e(ge) : e(X))), x(Bt), fe((At) => Pe(Bt, "data-a11y-label", At), [() => s()("system.original_price")]), v(tn, Bt);
          }), v(pt, $t);
        };
        T(Ee, (pt) => {
          e(Oe) && pt(bt);
        }), v(Ce, Te);
      };
      T(Cn, (Ce) => {
        c().showBothPrices ? Ce(H) : Ce(ke, !1);
      }), x(Sn), x(Ot), v(se, Qe);
    }, $$slots: { default: !0 } });
    var Ft = G(St, 2), xt = (se) => {
      ya(se, { get highlights() {
        return d().highlights;
      }, get dealBarSelected() {
        return $();
      } });
    };
    T(Ft, (se) => {
      d().highlights && se(xt);
    });
    var It = G(Ft, 2), rn = (se) => {
      var Ge = kb(), Qe = P(Ge);
      {
        let Re = h(() => e(ae) || e(he)[0]);
        pi(Qe, { get sellingPlans() {
          return e(he);
        }, get selectedSellingPlan() {
          return e(Re);
        }, onChange: (We) => {
          W(me, We, !0);
        } });
      }
      x(Ge), v(se, Ge);
    };
    T(It, (se) => {
      $() && e(E) && !d().sellingPlanGid && e(he).length > 1 && se(rn);
    });
    var un = G(It, 2), yn = (se) => {
      var Ge = mb();
      Ut(Ge, 21, () => ({ length: e(j) }), jr, (Qe, Re, We) => {
        var zt = De(), Ot = ve(zt), Mt = (vt) => {
          {
            let Wt = h(() => e(M)[We] || null);
            xs(vt, { get dealBlock() {
              return c();
            }, get dealBar() {
              return d();
            }, get mainProduct() {
              return g();
            }, products: [], get selectedProductVariant() {
              return e(Wt);
            }, onChange: (Lt) => je(We, Lt) });
          }
        }, _t = (vt) => {
          {
            let Wt = h(() => e(M)[We] || null);
            xs(vt, { get dealBlock() {
              return c();
            }, get dealBar() {
              return d();
            }, get products() {
              return f();
            }, get selectedProductVariant() {
              return e(Wt);
            }, onChange: (Lt) => je(We, Lt), onRemove: () => st(We) });
          }
        };
        T(Ot, (vt) => {
          We === 0 ? vt(Mt) : vt(_t, !1);
        }), v(Qe, zt);
      }), x(Ge), v(se, Ge);
    };
    T(un, (se) => {
      $() && se(yn);
    });
    var Vn = G(un, 2), kr = (se) => {
      {
        let Ge = h(() => ie(d()));
        _a(se, { get value() {
          return e(O);
        }, get min() {
          return e(Ge);
        }, onChange: (Qe) => W(O, Qe, !0) });
      }
    };
    T(Vn, (se) => {
      $() && d().dealBarType === "quantity-break" && d().quantitySelector && se(kr);
    });
    var kt = G(Vn, 2), Qt = (se) => {
      {
        let Ge = h(() => e(Se).map((Qe) => Qe.variant.id));
        Li(se, { get product() {
          return g();
        }, get productPersonalisation() {
          return d().productPersonalisation;
        }, get selectedVariantIds() {
          return e(Ge);
        }, get quantity() {
          return e(Se).length;
        }, get addPersonalisationModal() {
          return c().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return ce();
        }, get initialValues() {
          return N();
        } });
      }
    };
    T(kt, (se) => {
      $() && d().productPersonalisation && (c().blockLayout === "vertical" || c().blockLayout === "plain") && se(Qt);
    }), x(ct);
    var en = G(ct, 2);
    {
      let se = h(() => d().upsells || []);
      ba(en, { get dealBlock() {
        return c();
      }, get upsells() {
        return e(se);
      }, get otherProducts() {
        return p();
      }, get complementaryProducts() {
        return B();
      }, get dealBarSelected() {
        return $();
      }, get dealSellingPlan() {
        return e(R);
      }, onChange: (Ge) => {
        W(V, Ge, !0);
      } });
    }
    var _n = G(en, 2);
    ma(_n, { get selectedDealBarIndex() {
      return _();
    }, get onChange() {
      return re();
    }, get dealBlock() {
      return c();
    }, get dealBar() {
      return d();
    }, get otherProducts() {
      return p();
    }, get selected() {
      return $();
    }, get progressiveGifts() {
      return c().progressiveGifts;
    } });
    var Pn = G(_n, 2);
    {
      let se = h(() => d().freeGifts || []);
      fa(Pn, { get dealBlock() {
        return c();
      }, get freeGifts() {
        return e(se);
      }, get otherProducts() {
        return p();
      }, get dealBarSelected() {
        return $();
      }, get sellingPlan() {
        return e(R);
      }, onChange: (Ge) => {
        W(J, Ge, !0);
      } });
    }
    var Dt = G(Pn, 2);
    {
      let se = h(() => d().multipleGiftsSelectors || []);
      ka(Dt, { get dealBlock() {
        return c();
      }, get multipleGiftsSelectors() {
        return e(se);
      }, get sellingPlan() {
        return e(R);
      }, get otherProducts() {
        return p();
      }, onChange: (Ge) => {
        W(Z, Ge, !0);
      } });
    }
    x(lt);
    var pe = G(lt, 2), et = (se) => {
      va(se, { get showAsSoldOut() {
        return d().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ue);
      } });
    };
    T(pe, (se) => {
      d().showAsSoldOutEnabled && d().showAsSoldOut && se(et);
    }), x(we), fe((se, Ge) => {
      var Qe;
      Ke = qt(we, 1, "kaching-bundles__bar", null, Ke, se), Pe(we, "data-deal-bar-id", d().id), Ht(we, e(rt)), Pe(ot, "name", `kaching-bundles-deal-${(Qe = S()) != null ? Qe : ""}`), Ai(ot, d().id), Pe(ot, "id", e(xe)), Za(ot, $()), ot.disabled = d().showAsSoldOutEnabled, Pe(lt, "for", e(xe)), nt = qt(lt, 1, "kaching-bundles__bar-container", null, nt, Ge);
    }, [() => ({ "kaching-bundles__bar--selected": $() }), () => ({ "kaching-bundles__bar-container--sold-out": d().showAsSoldOutEnabled })]), v(t, we);
    var He = Ze(it);
    return a(), He;
  }
  $n(["change"]), Le(pu, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  const wa = Rr(null), hu = (t) => pn({ "kaching-subscriptions-title-color": Fe(t.titleColor), "kaching-subscriptions-subtitle-color": Fe(t.subtitleColor), "kaching-subscriptions-title-font-size": t.titleSize + "px", "kaching-subscriptions-subtitle-font-size": t.subtitleSize + "px" });
  var xb = D('<div class="kaching-bundles__bar-radio"></div>'), wb = D('<div class="kaching-bundles__subscriptions__title"><!></div>'), Pb = D('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), Sb = D('<div class="kaching-bundles__bar-variants"><!></div>'), Cb = D('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div></div> <!></div></div>'), Bb = D('<div class="kaching-bundles__bar-radio"></div>'), Ib = D('<div class="kaching-bundles__subscriptions__title"><!></div>'), Db = D('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), zb = D('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div></div></div></div>'), $b = D("<div></div>");
  function fu(t, n) {
    Je(n, !0);
    const r = () => $e(wa, "$selectedDealBarStore", s), i = () => $e(p, "$formatPrice", s), l = () => $e(f, "$translate", s), [s, u] = Pt(), o = m(n, "subscriptions", 7), a = m(n, "sellingPlans", 7), c = m(n, "selectedSellingPlan", 7), d = m(n, "hideSellingPlanSelector", 7, !1), g = m(n, "onChange", 7), f = Gt(), p = bn();
    let _ = Ae(at(o().subscribeByDefault || c() ? "subscribe" : "one-time")), B = Ae(at(c() || a()[0])), y = Ae(!1), w = h(() => o().subscribeByDefault), S = h(() => e(w) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const $ = h(() => hu(o())), A = h(() => {
      var U;
      const J = (U = r()) == null ? void 0 : U.dealBar.sellingPlanGid;
      if (J) return a().find((Z) => Z.id === Tt(J));
    }), I = h(() => {
      var U;
      return (U = e(A)) != null ? U : e(B);
    }), q = h(() => {
      var U, J, Z, V, ee;
      return (ee = (V = (J = (U = r()) == null ? void 0 : U.discountedPricesForSellingPlans.find((ye) => {
        var F;
        return ye.sellingPlanId === ((F = e(I)) == null ? void 0 : F.id);
      })) == null ? void 0 : J.discountedPrice) != null ? V : (Z = r()) == null ? void 0 : Z.totalDiscountedPrice) != null ? ee : 0;
    }), L = h(() => {
      var U, J, Z, V, ee;
      return vn({ priceFormatter: i(), product: (U = r()) == null ? void 0 : U.product, totalFullPrice: (Z = (J = r()) == null ? void 0 : J.totalFullPrice) != null ? Z : 0, totalDiscountedPrice: e(q), quantity: (ee = (V = r()) == null ? void 0 : V.quantity) != null ? ee : 1, sellingPlan: e(I), unitQuantity: null });
    }), z = h(() => {
      var U, J, Z, V, ee, ye, F;
      return vn({ priceFormatter: i(), product: (U = r()) == null ? void 0 : U.product, totalFullPrice: (Z = (J = r()) == null ? void 0 : J.totalFullPrice) != null ? Z : 0, totalDiscountedPrice: (ee = (V = r()) == null ? void 0 : V.discountedPriceWithoutSellingPlan) != null ? ee : 0, quantity: (F = (ye = r()) == null ? void 0 : ye.quantity) != null ? F : 1, unitQuantity: null });
    });
    function ce(U) {
      W(y, !0), W(_, U, !0), g()(U === "subscribe" ? e(B) : void 0);
    }
    function N(U) {
      W(B, U, !0), e(_) === "subscribe" && g()(U);
    }
    $i(() => {
      e(_) === "subscribe" && g()(e(B));
    }), Xe(() => {
      if (c()) return W(B, c(), !0), void W(_, "subscribe");
      if (a().length === 0) return void W(_, "one-time");
      e(B) && a().some((U) => U.id === e(B).id) || W(B, a()[0], !0), e(y) || W(_, e(w) ? "subscribe" : "one-time", !0), g()(e(_) === "subscribe" ? e(B) : void 0);
    });
    var re = { get subscriptions() {
      return o();
    }, set subscriptions(U) {
      o(U), k();
    }, get sellingPlans() {
      return a();
    }, set sellingPlans(U) {
      a(U), k();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(U) {
      c(U), k();
    }, get hideSellingPlanSelector() {
      return d();
    }, set hideSellingPlanSelector(U = !1) {
      d(U), k();
    }, get onChange() {
      return g();
    }, set onChange(U) {
      g(U), k();
    } }, Q = $b();
    let Y;
    Ut(Q, 20, () => e(S), (U) => U, (U, J) => {
      var Z = De(), V = ve(Z), ee = (F) => {
        {
          let b = h(() => ["kaching-bundles__bar", a().length === 0 && "kaching-bundles__bar--disabled", e(_) === "subscribe" && "kaching-bundles__bar--selected"]);
          Vt(F, { element: "div", get class() {
            return e(b);
          }, onclick: () => ce("subscribe"), children: (C, O) => {
            var j = Cb(), ie = P(j), oe = P(ie), M = P(oe), ne = (Ve) => {
              v(Ve, xb());
            };
            T(M, (Ve) => {
              o().layout === "vertical" && Ve(ne);
            });
            var me = G(M, 2), he = P(me), E = P(he), ae = P(E), R = (Ve) => {
              var ue = wb();
              Me(P(ue), () => e(L)(l()(o().subscribeTitle))), x(ue), v(Ve, ue);
            };
            T(ae, (Ve) => {
              o().subscribeTitle && Ve(R);
            }), x(E);
            var le = G(E, 2), Se = (Ve) => {
              var ue = Pb();
              Me(P(ue), () => e(L)(l()(o().subscribeSubtitle))), x(ue), v(Ve, ue);
            };
            T(le, (Ve) => {
              o().subscribeSubtitle && Ve(Se);
            }), x(he), x(me), x(oe);
            var X = G(oe, 2), ge = (Ve) => {
              var ue = Sb();
              pi(P(ue), { get sellingPlans() {
                return a();
              }, get selectedSellingPlan() {
                return e(B);
              }, onChange: N }), x(ue), v(Ve, ue);
            };
            T(X, (Ve) => {
              e(_) === "subscribe" && a().length > 1 && !d() && Ve(ge);
            }), x(ie), x(j), v(C, j);
          }, $$slots: { default: !0 } });
        }
      }, ye = (F) => {
        {
          let b = h(() => ["kaching-bundles__bar", a().length === 0 && "kaching-bundles__bar--disabled", e(_) === "one-time" && "kaching-bundles__bar--selected"]);
          Vt(F, { element: "div", get class() {
            return e(b);
          }, onclick: () => ce("one-time"), children: (C, O) => {
            var j = zb(), ie = P(j), oe = P(ie), M = P(oe), ne = (X) => {
              v(X, Bb());
            };
            T(M, (X) => {
              o().layout === "vertical" && X(ne);
            });
            var me = G(M, 2), he = P(me), E = P(he), ae = P(E), R = (X) => {
              var ge = Ib();
              Me(P(ge), () => e(z)(l()(o().oneTimeTitle))), x(ge), v(X, ge);
            };
            T(ae, (X) => {
              o().oneTimeTitle && X(R);
            }), x(E);
            var le = G(E, 2), Se = (X) => {
              var ge = Db();
              Me(P(ge), () => e(z)(l()(o().oneTimeSubtitle))), x(ge), v(X, ge);
            };
            T(le, (X) => {
              o().oneTimeSubtitle && X(Se);
            }), x(he), x(me), x(oe), x(ie), x(j), v(C, j);
          }, $$slots: { default: !0 } });
        }
      };
      T(V, (F) => {
        J === "subscribe" ? F(ee) : F(ye, !1);
      }), v(U, Z);
    }), x(Q), fe((U) => {
      Y = qt(Q, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, Y, U), Ht(Q, e($));
    }, [() => ({ "kaching-bundles__bars--horizontal": o().layout === "horizontal" })]), v(t, Q);
    var K = Ze(re);
    return u(), K;
  }
  Le(fu, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Ab = D('<div class="kaching-bundles__subscriptions__title"><!></div>'), qb = D('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), Mb = D('<div class="kaching-bundles__bar-variants"><!></div>'), Vb = D('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div></div> <!></div></div>'), Gb = D('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function bu(t, n) {
    Je(n, !0);
    const r = () => $e(wa, "$selectedDealBarStore", l), i = () => $e(g, "$translate", l), [l, s] = Pt(), u = m(n, "subscriptions", 7), o = m(n, "sellingPlans", 7), a = m(n, "selectedSellingPlan", 7), c = m(n, "hideSellingPlanSelector", 7, !1), d = m(n, "onChange", 7), g = Gt(), f = bn();
    let p = Ae(at(u().subscribeByDefault || !!a())), _ = Ae(at(a() || o()[0])), B = Ae(!1);
    const y = h(() => hu(u())), w = h(() => {
      var N;
      const re = (N = r()) == null ? void 0 : N.dealBar.sellingPlanGid;
      if (re) return o().find((Q) => Q.id === Tt(re));
    }), S = h(() => {
      var N;
      return (N = e(w)) != null ? N : e(_);
    }), $ = h(() => {
      var N, re, Q, Y, K;
      return (K = (Y = (re = (N = r()) == null ? void 0 : N.discountedPricesForSellingPlans.find((U) => {
        var J;
        return U.sellingPlanId === ((J = e(S)) == null ? void 0 : J.id);
      })) == null ? void 0 : re.discountedPrice) != null ? Y : (Q = r()) == null ? void 0 : Q.totalDiscountedPrice) != null ? K : 0;
    }), A = h(() => {
      var N, re, Q, Y, K;
      return vn({ priceFormatter: $e(f, "$formatPrice", l), product: (N = r()) == null ? void 0 : N.product, totalFullPrice: (Q = (re = r()) == null ? void 0 : re.totalFullPrice) != null ? Q : 0, totalDiscountedPrice: e($), quantity: (K = (Y = r()) == null ? void 0 : Y.quantity) != null ? K : 1, sellingPlan: e(S), unitQuantity: null });
    });
    function I(N) {
      W(_, N, !0), d()(N);
    }
    Xe(() => {
      if (a()) return W(_, a(), !0), void W(p, !0);
      if (o().length === 0) return void W(p, !1);
      e(_) && o().some((N) => N.id === e(_).id) || W(_, o()[0], !0), e(B) || W(p, u().subscribeByDefault, !0), d()(e(p) ? e(_) : void 0);
    }), $i(() => {
      e(p) && d()(e(_));
    });
    var q = { get subscriptions() {
      return u();
    }, set subscriptions(N) {
      u(N), k();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(N) {
      o(N), k();
    }, get selectedSellingPlan() {
      return a();
    }, set selectedSellingPlan(N) {
      a(N), k();
    }, get hideSellingPlanSelector() {
      return c();
    }, set hideSellingPlanSelector(N = !1) {
      c(N), k();
    }, get onChange() {
      return d();
    }, set onChange(N) {
      d(N), k();
    } }, L = Gb(), z = P(L);
    {
      let N = h(() => ["kaching-bundles__bar", o().length === 0 && "kaching-bundles__bar--disabled"]);
      Vt(z, { element: "div", get class() {
        return e(N);
      }, role: "checkbox", get "aria-checked"() {
        return e(p);
      }, onclick: function() {
        W(B, !0), W(p, !e(p)), d()(e(p) ? e(_) : void 0);
      }, children: (re, Q) => {
        var Y = Vb(), K = P(Y), U = P(K), J = P(U), Z = P(J), V = (M) => {
          vl(M);
        };
        T(Z, (M) => {
          e(p) && M(V);
        }), x(J);
        var ee = G(J, 2), ye = P(ee), F = P(ye), b = P(F), C = (M) => {
          var ne = Ab();
          Me(P(ne), () => e(A)(i()(u().subscribeTitle))), x(ne), v(M, ne);
        };
        T(b, (M) => {
          u().subscribeTitle && M(C);
        }), x(F);
        var O = G(F, 2), j = (M) => {
          var ne = qb();
          Me(P(ne), () => e(A)(i()(u().subscribeSubtitle))), x(ne), v(M, ne);
        };
        T(O, (M) => {
          u().subscribeSubtitle && M(j);
        }), x(ye), x(ee), x(U);
        var ie = G(U, 2), oe = (M) => {
          var ne = Mb();
          pi(P(ne), { get sellingPlans() {
            return o();
          }, get selectedSellingPlan() {
            return e(_);
          }, onChange: I }), x(ne), v(M, ne);
        };
        T(ie, (M) => {
          e(p) && o().length > 1 && e(_) && !c() && M(oe);
        }), x(K), x(Y), v(re, Y);
      }, $$slots: { default: !0 } });
    }
    x(L), fe(() => Ht(L, e(y))), v(t, L);
    var ce = Ze(q);
    return s(), ce;
  }
  function ws(t, n) {
    Je(n, !0);
    const r = m(n, "subscriptions", 7), i = m(n, "sellingPlans", 7), l = m(n, "selectedSellingPlan", 7), s = m(n, "hideSellingPlanSelector", 7, !1), u = m(n, "onChange", 7);
    var o = { get subscriptions() {
      return r();
    }, set subscriptions(f) {
      r(f), k();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(f) {
      i(f), k();
    }, get selectedSellingPlan() {
      return l();
    }, set selectedSellingPlan(f) {
      l(f), k();
    }, get hideSellingPlanSelector() {
      return s();
    }, set hideSellingPlanSelector(f = !1) {
      s(f), k();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), k();
    } }, a = De(), c = ve(a), d = (f) => {
      bu(f, { get subscriptions() {
        return r();
      }, get sellingPlans() {
        return i();
      }, get selectedSellingPlan() {
        return l();
      }, get hideSellingPlanSelector() {
        return s();
      }, get onChange() {
        return u();
      } });
    }, g = (f) => {
      fu(f, { get subscriptions() {
        return r();
      }, get sellingPlans() {
        return i();
      }, get selectedSellingPlan() {
        return l();
      }, get hideSellingPlanSelector() {
        return s();
      }, get onChange() {
        return u();
      } });
    };
    return T(c, (f) => {
      r().layout === "checkbox" ? f(d) : f(g, !1);
    }), v(t, a), Ze(o);
  }
  Le(bu, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0), Le(ws, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Tb = Ln('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function vu(t) {
    v(t, Tb());
  }
  Le(vu, {}, [], [], !0);
  var Fb = D('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), Ob = D('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Lb = D('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), jb = D('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Eb = D('<div class="kaching-bundles__progressive-gifts__gift__content"><div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div> <div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div> <!></div>'), Rb = D('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), Qb = D('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), Nb = D('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Wb = D('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), Ub = D('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Hb = D('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function _u(t, n) {
    Je(n, !0);
    const r = () => $e(y, "$config", s), i = () => $e(p, "$translate", s), l = () => $e(B, "$getMediaImageUrl", s), [s, u] = Pt(), o = m(n, "progressiveGifts", 7), a = m(n, "gift", 7), c = m(n, "product", 7), d = m(n, "selectedDealBarIndex", 7), g = m(n, "onChange", 7), f = m(n, "onUnlock", 7), p = Gt(), _ = bn(), B = An(), y = cn(), w = h(() => a().differentVariantsEnabled), S = h(() => {
      var b;
      return c() ? a().variantGIDs ? a().variantGIDs.map(Tt) : (b = c()) == null ? void 0 : b.variants.map((C) => C.id) : null;
    }), $ = h(() => {
      if (c()) return { ...c(), variants: c().variants.filter((b) => (r().preview || b.availableForSale) && (!e(S) || e(S).includes(b.id))) };
    });
    let A = Ae(at([]));
    const I = h(() => (function(b, C, O) {
      return b.length > 0 ? b : C != null && C.availableForSale && C.variants.length > 0 ? Array.from({ length: O }, () => C.variants[0].id) : [];
    })(e(A), e($), a().quantity)), q = h(() => c() && e(I).length > 0 ? e(I).map((b) => c().variants.find((C) => C.id === b)).filter((b) => b !== void 0) : []), L = h(() => {
      var b;
      return vn({ priceFormatter: $e(_, "$formatPrice", s), product: c(), totalFullPrice: ((b = e(q)) == null ? void 0 : b.reduce((C, O) => {
        var j;
        return C + ((j = O == null ? void 0 : O.price) != null ? j : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: a().quantity, unitQuantity: Zn(e(q).map((C) => ({ variant: C, quantity: 1 }))) });
    }), z = h(() => e(L)(i()(a().title))), ce = h(() => e(L)(i()(a().lockedTitle))), N = h(() => e(L)(i()(a().label))), re = h(() => e(L)(i()(a().labelCrossedOut))), Q = h(() => d() === null || a().unlockAtBar > d() + 1), Y = h(() => {
      var b, C, O;
      return a().giftType === "shipping" ? Zc : ((C = (b = e(q)) == null ? void 0 : b[0]) == null ? void 0 : C.image) || ((O = c()) == null ? void 0 : O.image);
    }), K = h(() => a().mediaImageGID ? l()(a().mediaImageGID) : e(Y)), U = h(() => !o().inheritStyle && o().style && l()(o().style.lockedMediaImageGID));
    Xe(() => {
      if (c() && e(q) && !e(Q)) {
        const b = Object.values(e(q).reduce((C, O) => (C[O.id] ? C[O.id].quantity += 1 : C[O.id] = { variant: O, quantity: 1 }, C), {}));
        Zt(() => g()({ product: c(), variants: b }));
      } else Zt(() => g()(void 0));
    }), gr(() => {
      a().productGID;
    }), Xe(() => {
      e(Q) && e(K) && (new Image().src = e(K));
    });
    const J = h(() => !(a().giftType !== "product" || !c() || c().availableForSale && c().variants.filter((b) => b.availableForSale && (!e(S) || e(S).includes(b.id))).length !== 0));
    var Z = { get progressiveGifts() {
      return o();
    }, set progressiveGifts(b) {
      o(b), k();
    }, get gift() {
      return a();
    }, set gift(b) {
      a(b), k();
    }, get product() {
      return c();
    }, set product(b) {
      c(b), k();
    }, get selectedDealBarIndex() {
      return d();
    }, set selectedDealBarIndex(b) {
      d(b), k();
    }, get onChange() {
      return g();
    }, set onChange(b) {
      g(b), k();
    }, get onUnlock() {
      return f();
    }, set onUnlock(b) {
      f(b), k();
    } }, V = De(), ee = ve(V), ye = (b) => {
      var C = De(), O = ve(C), j = (ie) => {
        var oe = De(), M = ve(oe), ne = (he) => {
          Vt(he, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", get onclick() {
            return f();
          }, children: (E, ae) => {
            var R = Eb(), le = P(R), Se = P(le), X = (te) => {
              var _e = Fb();
              fe(() => Pe(_e, "src", e(U))), v(te, _e);
            }, ge = (te) => {
              vu(te);
            };
            T(Se, (te) => {
              e(U) ? te(X) : te(ge, !1);
            }), x(le);
            var Ve = G(le, 2);
            Me(P(Ve), () => e(ce)), x(Ve);
            var ue = G(Ve, 2), Be = (te) => {
              var _e = jb(), qe = P(_e), Ie = (Oe) => {
                var xe = Ob();
                Me(P(xe), () => e(N)), x(xe), v(Oe, xe);
              };
              T(qe, (Oe) => {
                e(N) && Oe(Ie);
              });
              var be = G(qe, 2), ze = (Oe) => {
                var xe = Lb();
                Me(P(xe), () => e(re)), x(xe), v(Oe, xe);
              };
              T(be, (Oe) => {
                e(re) && Oe(ze);
              }), x(_e), v(te, _e);
            };
            T(ue, (te) => {
              (e(N) || e(re)) && o().showLockedGiftLabels && te(Be);
            }), x(R), v(E, R);
          }, $$slots: { default: !0 } });
        }, me = (he) => {
          var E = Hb();
          let ae;
          var R = P(E), le = P(R), Se = (Ie) => {
            var be = Rb(), ze = P(be);
            x(be), fe(() => {
              var Oe, xe;
              Pe(ze, "src", e(K)), Pe(ze, "alt", (xe = (Oe = c()) == null ? void 0 : Oe.title) != null ? xe : "");
            }), v(Ie, be);
          };
          T(le, (Ie) => {
            e(K) && Ie(Se);
          });
          var X = G(le, 2), ge = P(X), Ve = P(ge), ue = (Ie) => {
            var be = Qb();
            Me(P(be), () => e(z)), x(be), v(Ie, be);
          };
          T(Ve, (Ie) => {
            e(z) && Ie(ue);
          });
          var Be = G(Ve, 2), te = (Ie) => {
            var be = Ub(), ze = P(be), Oe = (dt) => {
              var rt = Nb();
              Me(P(rt), () => e(N)), x(rt), v(dt, rt);
            };
            T(ze, (dt) => {
              e(N) && dt(Oe);
            });
            var xe = G(ze, 2), Ne = (dt) => {
              var rt = Wb();
              Me(P(rt), () => e(re)), x(rt), v(dt, rt);
            };
            T(xe, (dt) => {
              e(re) && dt(Ne);
            }), x(be), v(Ie, be);
          };
          T(Be, (Ie) => {
            (e(N) || e(re)) && Ie(te);
          }), x(ge);
          var _e = G(ge, 2), qe = (Ie) => {
            var be = De();
            Ut(ve(be), 17, () => ({ length: e(w) ? a().quantity : 1 }), jr, (ze, Oe, xe) => {
              var Ne = De(), dt = ve(Ne), rt = (je) => {
                {
                  let st = h(() => e(w) ? xe + 1 : void 0);
                  qn(je, { get product() {
                    return e($);
                  }, get selectedVariantId() {
                    return e(I)[xe];
                  }, get number() {
                    return e(st);
                  }, forceDropdown: !0, onChange: (it) => (function(we, Ke) {
                    e(w) ? W(A, [...e(I).slice(0, Ke), we, ...e(I).slice(Ke + 1)], !0) : W(A, Array.from({ length: a().quantity }, () => we), !0);
                  })(it, xe) });
                }
              };
              T(dt, (je) => {
                e(I)[xe] !== void 0 && je(rt);
              }), v(ze, Ne);
            }), v(Ie, be);
          };
          T(_e, (Ie) => {
            e($) && e($).variants.length > 1 && e(I).length > 0 && Ie(qe);
          }), x(X), x(R), x(E), fe((Ie) => ae = qt(E, 1, "kaching-bundles__progressive-gifts__gift", null, ae, Ie), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(J) })]), v(he, E);
        };
        T(M, (he) => {
          e(Q) ? he(ne) : he(me, !1);
        }), v(ie, oe);
      };
      T(O, (ie) => {
        var oe;
        (c() && ((oe = e(q)) != null && oe.length || r().preview && e(J)) || a().giftType === "shipping") && ie(j);
      }), v(b, C);
    };
    T(ee, (b) => {
      e(Q) && o().hideLockedGifts || b(ye);
    }), v(t, V);
    var F = Ze(Z);
    return u(), F;
  }
  Le(_u, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var Jb = D('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), Zb = D('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), Kb = D('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function ku(t, n) {
    Je(n, !0);
    const r = () => $e(p, "$config", l), i = () => $e(f, "$translate", l), [l, s] = Pt(), u = m(n, "progressiveGifts", 7), o = m(n, "dealBlock", 7), a = m(n, "otherProducts", 7), c = m(n, "selectedDealBarIndex", 7), d = m(n, "onChange", 7), g = m(n, "onUnlock", 7), f = Gt(), p = cn();
    let _ = Ae(at({}));
    const B = h(() => ((re) => {
      const { progressiveGifts: Q, colors: Y, fonts: K } = re, U = (Q == null ? void 0 : Q.inheritStyle) || !(Q != null && Q.style);
      return pn({ "kaching-bundles-progressive-gifts-title-color": Fe(Q.titleColor), "kaching-bundles-progressive-gifts-title-alignment": Q.titleAlignment, "kaching-bundles-progressive-gifts-title-size": Q.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": Un(Q.titleStyle), "kaching-bundles-progressive-gifts-title-style": Hn(Q.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": Fe(Q.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": Q.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": Q.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": Un(Q.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": Hn(Q.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": U ? void 0 : Q.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (U ? re.cornerRadius : Q.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": Fe(U ? Y.progressiveGiftsLabelBackground || Y.labelBackground : Q.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": Fe(U ? Y.label : Q.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (U ? K.label.size : Q.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": Fe(U ? Y.selectedBackground : Q.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": Fe(U ? Y.border : Q.style.borderColor), "kaching-bundles-progressive-gifts-text-color": Fe(U ? Y.title : Q.style.textColor), "kaching-bundles-progressive-gifts-text-size": U ? void 0 : Q.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": Fe(U ? Y.background : Q.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": Fe(U ? { ...Y.border, alpha: 0.3 * Y.border.alpha } : Q.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": U ? void 0 : Fe(Q.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": U ? void 0 : Q.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": U ? void 0 : Fe(Q.style.lockedIconColor) });
    })(o())), y = h(() => u().gifts.flatMap((re) => {
      const Q = re.giftType === "product" && re.productGID ? a().find((K) => K.id === Tt(re.productGID)) : void 0;
      if (!r().preview && re.giftType === "product" && !(Q != null && Q.availableForSale)) return [];
      const Y = Q && !r().preview ? Jn(Q) : Q;
      return { gift: re, product: Y };
    }));
    var w = { get progressiveGifts() {
      return u();
    }, set progressiveGifts(re) {
      u(re), k();
    }, get dealBlock() {
      return o();
    }, set dealBlock(re) {
      o(re), k();
    }, get otherProducts() {
      return a();
    }, set otherProducts(re) {
      a(re), k();
    }, get selectedDealBarIndex() {
      return c();
    }, set selectedDealBarIndex(re) {
      c(re), k();
    }, get onChange() {
      return d();
    }, set onChange(re) {
      d(re), k();
    }, get onUnlock() {
      return g();
    }, set onUnlock(re) {
      g(re), k();
    } }, S = Kb(), $ = P(S), A = P($), I = (re) => {
      var Q = Jb();
      Me(P(Q), () => i()(u().title)), x(Q), v(re, Q);
    };
    T(A, (re) => {
      u().title && re(I);
    });
    var q = G(A, 2), L = (re) => {
      var Q = Zb();
      Me(P(Q), () => i()(u().subtitle)), x(Q), v(re, Q);
    };
    T(q, (re) => {
      u().subtitle && re(L);
    }), x($);
    var z = G($, 2);
    let ce;
    Ut(z, 21, () => e(y), ({ gift: re, product: Q }) => re.id, (re, Q) => {
      let Y = () => e(Q).gift;
      _u(re, { get progressiveGifts() {
        return u();
      }, get gift() {
        return Y();
      }, get product() {
        return e(Q).product;
      }, get selectedDealBarIndex() {
        return c();
      }, onChange: (K) => (function(U, J) {
        J ? e(_)[U] = J : delete e(_)[U];
        const Z = Object.entries(e(_)).map(([V, ee]) => ({ id: V, variants: ee.variants, product: ee.product }));
        d()(Z);
      })(Y().id, K), onUnlock: () => g()(Y().unlockAtBar - 1) });
    }), x(z), x(S), fe((re) => {
      Ht(S, e(B)), ce = qt(z, 1, "kaching-bundles__progressive-gifts__gifts", null, ce, re);
    }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": u().layout === "vertical" })]), v(t, S);
    var N = Ze(w);
    return s(), N;
  }
  Le(ku, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var Yb = D('<span class="kaching-bundles__bar-title"><!></span>'), Xb = D('<div class="kaching-bundles__bar-subtitle"><!></div>'), ev = D('<div class="kaching-bundles__bar-price"><!></div>'), tv = D('<div class="kaching-bundles__bar-full-price"><!></div>'), nv = D('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), rv = D('<div class="kaching-bundles__bar-variants"><!> <!></div>'), iv = D('<div class="kaching-bundles__bar-variants"><!></div>'), av = D('<div><div class="kaching-bundles__bar-container"><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div></div></div>');
  function mu(t, n) {
    Je(n, !0);
    const r = () => $e(y, "$config", u), i = () => $e(_, "$formatPrice", u), l = () => $e(ye, "$translate", u), s = () => $e(B, "$getMediaImageUrl", u), [u, o] = Pt(), a = m(n, "checkboxUpsell", 7), c = m(n, "product", 7), d = m(n, "dealBlock", 7), g = m(n, "dealSellingPlan", 7), f = m(n, "dealBarQuantity", 7), p = m(n, "onChange", 7), _ = bn(), B = An(), y = cn();
    let w = Ae(!1), S = Ae(1), $ = Ae(at({})), A = Ae(void 0);
    const I = h(() => {
      var te;
      return (te = a().preselected) != null && te;
    });
    Xe(() => {
      W(w, e(I), !0);
    }), Xe(() => {
      a().matchQuantityWithDealBar && W(S, f(), !0);
    });
    const q = h(() => !!a().variantGIDs), L = h(() => {
      var te, _e;
      return e(q) && c() ? c().variants.filter((qe) => a().variantGIDs.some((Ie) => Tt(Ie) === qe.id)) : (_e = (te = c()) == null ? void 0 : te.variants) != null ? _e : [];
    }), z = h(() => e(S) > 1 && e(L).length > 1), ce = h(() => (function(te, _e) {
      if (te.variantGIDs)
        return te.variantGIDs.length === 0 ? void 0 : Tt(te.variantGIDs[0]);
      if (_e != null && _e.availableForSale && _e.variants.length > 0) return _e.variants[0].id;
    })(a(), c())), N = h(() => {
      if (e(ce) === void 0) return [];
      const te = [];
      for (let _e = 0; _e < e(S); _e++) {
        const qe = e($)[_e];
        qe !== void 0 ? te.push(qe) : te.push(e(ce));
      }
      return te;
    }), re = h(() => (function(te, _e) {
      if (!_e) return [];
      const qe = {};
      for (const Ie of te) {
        const be = qe[Ie];
        if (be) {
          be.quantity += 1;
          continue;
        }
        const ze = _e.variants.find((Oe) => Oe.id === Ie);
        ze && (qe[Ie] = { variant: ze, quantity: 1 });
      }
      return Object.values(qe);
    })(e(N), c())), Q = h(() => {
      var te;
      return (te = e(re)[0]) == null ? void 0 : te.variant;
    }), Y = h(() => {
      if (!a().sellAsSubscription || !c() || !e(Q)) return [];
      const te = new Set(e(Q).sellingPlans.map((_e) => _e.id));
      return c().sellingPlans.filter((_e) => te.has(_e.id));
    }), K = h(() => e(Y).find((te) => te.id === e(A)) || e(Y)[0]), U = h(() => {
      var te;
      if (c() && e(Q)) return a().sellAsSubscription && e(K) ? e(K) : Mn(c(), e(Q), (te = g()) == null ? void 0 : te.id);
    }), J = h(() => d().priceRounding ? { perItem: d().showPricesPerItem, precision: d().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    let Z = h(() => Ur({ discountType: a().discountType, discountValue: a().discountValue, discountQuantity: 1, variantQuantities: e(re), currencyRate: r().currencyRate, priceRounding: e(J), sellingPlan: e(U) })), V = h(() => e(re).reduce((te, { variant: _e, quantity: qe }) => te + Math.max(_e.price, _e.compareAtPrice || 0) * qe, 0));
    const ee = h(() => vn({ priceFormatter: i(), product: c(), totalFullPrice: e(V), totalDiscountedPrice: e(Z), quantity: e(S), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Zn(e(re)), sellingPlan: e(U) })), ye = Gt();
    let F = h(() => e(ee)(l()(a().title))), b = h(() => e(ee)(l()(a().subtitle))), C = h(() => e(V) && e(V) > e(Z));
    const O = h(() => s()(a().mediaImageGID)), j = h(() => e(ee)(l()(a().badgeText || ""))), ie = h(() => {
      var te;
      return s()((te = a().badgeImageGID) != null ? te : null);
    });
    function oe(te, _e) {
      W($, { ...e($), [te]: _e }, !0);
    }
    Xe(() => {
      if (c() && e(re).length > 0 && e(w)) {
        const te = a().sellAsSubscription ? e(K) : void 0;
        Zt(() => p()({ product: c(), variants: e(re), sellingPlan: te, totalDiscountedPrice: e(Z), totalFullPrice: e(V) }));
      } else Zt(() => p()(void 0));
    });
    var M = { get checkboxUpsell() {
      return a();
    }, set checkboxUpsell(te) {
      a(te), k();
    }, get product() {
      return c();
    }, set product(te) {
      c(te), k();
    }, get dealBlock() {
      return d();
    }, set dealBlock(te) {
      d(te), k();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(te) {
      g(te), k();
    }, get dealBarQuantity() {
      return f();
    }, set dealBarQuantity(te) {
      f(te), k();
    }, get onChange() {
      return p();
    }, set onChange(te) {
      p(te), k();
    } }, ne = av();
    let me;
    var he = P(ne), E = P(he);
    {
      let te = h(() => e(j) || void 0);
      Oi(E, { get style() {
        return a().badgeStyle;
      }, get text() {
        return e(te);
      }, get imageUrl() {
        return e(ie);
      }, blockLayout: "vertical" });
    }
    var ae = G(E, 2), R = P(ae);
    Vt(R, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
      return e(w);
    }, onclick: function() {
      W(w, !e(w));
    }, children: (te, _e) => {
      var qe = nv(), Ie = ve(qe);
      let be;
      var ze = P(Ie), Oe = (lt) => {
        vl(lt);
      };
      T(ze, (lt) => {
        e(w) && lt(Oe);
      }), x(Ie);
      var xe = G(Ie, 2), Ne = G(xe, 2), dt = P(Ne), rt = P(dt);
      Ue(P(rt), () => e(F), (lt) => {
        var nt = Yb();
        Me(P(nt), () => e(F)), x(nt), v(lt, nt);
      }), x(rt);
      var je = G(rt, 2), st = (lt) => {
        var nt = De();
        Ue(ve(nt), () => e(b), (ut) => {
          var ct = Xb();
          Me(P(ct), () => e(b)), x(ct), v(ut, ct);
        }), v(lt, nt);
      };
      T(je, (lt) => {
        e(b) && lt(st);
      }), x(dt), x(Ne);
      var it = G(Ne, 2), we = P(it);
      Ue(we, () => e(Z), (lt) => {
        var nt = ev();
        Me(P(nt), () => i()(e(Z))), x(nt), fe((ut) => Pe(nt, "data-a11y-label", ut), [() => l()("system.price")]), v(lt, nt);
      });
      var Ke = G(we, 2), ot = (lt) => {
        var nt = De();
        Ue(ve(nt), () => e(V), (ut) => {
          var ct = tv();
          Me(P(ct), () => i()(e(V))), x(ct), fe((St) => Pe(ct, "data-a11y-label", St), [() => l()("system.original_price")]), v(ut, ct);
        }), v(lt, nt);
      };
      T(Ke, (lt) => {
        e(C) && lt(ot);
      }), x(it), fe((lt) => {
        var nt, ut, ct;
        be = qt(Ie, 1, "kaching-bundles__checkbox-upsells__checkbox", null, be, lt), Pe(xe, "src", e(O) || ((nt = e(Q)) == null ? void 0 : nt.image) || ((ut = c()) == null ? void 0 : ut.image)), Pe(xe, "alt", (ct = c()) == null ? void 0 : ct.title);
      }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(w) })]), v(te, qe);
    }, $$slots: { default: !0 } });
    var le = G(R, 2), Se = (te) => {
      var _e = rv(), qe = P(_e);
      {
        let Oe = h(() => ({ ...c(), variants: e(L) }));
        Qr(qe, { get product() {
          return e(Oe);
        } });
      }
      var Ie = G(qe, 2), be = (Oe) => {
        var xe = De();
        Ut(ve(xe), 17, () => ({ length: e(S) }), jr, (Ne, dt, rt) => {
          {
            let je = h(() => ({ ...c(), variants: e(L) })), st = h(() => e(S) > 1 ? rt + 1 : void 0);
            qn(Ne, { get product() {
              return e(je);
            }, get selectedVariantId() {
              return e(N)[rt];
            }, get number() {
              return e(st);
            }, onChange: (it) => oe(rt, it) });
          }
        }), v(Oe, xe);
      }, ze = (Oe) => {
        {
          let xe = h(() => ({ ...c(), variants: e(L) }));
          qn(Oe, { get product() {
            return e(xe);
          }, get selectedVariantId() {
            return e(N)[0];
          }, onChange: (Ne) => oe(0, Ne) });
        }
      };
      T(Ie, (Oe) => {
        e(z) ? Oe(be) : Oe(ze, !1);
      }), x(_e), v(te, _e);
    };
    T(le, (te) => {
      e(w) && e(L).length > 1 && e(N).length > 0 && te(Se);
    });
    var X = G(le, 2), ge = (te) => {
      var _e = iv();
      pi(P(_e), { get sellingPlans() {
        return e(Y);
      }, get selectedSellingPlan() {
        return e(K);
      }, onChange: (qe) => W(A, qe.id, !0) }), x(_e), v(te, _e);
    };
    T(X, (te) => {
      e(w) && e(Y).length > 1 && e(K) && te(ge);
    });
    var Ve = G(X, 2), ue = (te) => {
      _a(te, { get value() {
        return e(S);
      }, min: 1, onChange: (_e) => W(S, _e, !0) });
    };
    T(Ve, (te) => {
      e(w) && a().quantitySelector && te(ue);
    }), x(ae), x(he), x(ne), fe((te) => me = qt(ne, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, me, te), [() => {
      var te;
      return { "kaching-bundles__bar--selected": e(w), "kaching-bundles__bar--disabled": r().preview && !((te = c()) != null && te.availableForSale) };
    }]), v(t, ne);
    var Be = Ze(M);
    return o(), Be;
  }
  Le(mu, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var lv = D('<div class="kaching-bundles__checkbox-upsells"><div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function yu(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "checkboxUpsells", 7), s = m(n, "dealBlock", 7), u = m(n, "otherProducts", 7), o = m(n, "complementaryProducts", 7), a = m(n, "dealSellingPlan", 7), c = m(n, "dealBarQuantity", 7), d = m(n, "onChange", 7), g = cn();
    let f = Ae(at({}));
    const p = h(() => o().map(Jn)), _ = Math.floor(1e3 * Math.random()), B = h(() => l().upsells.flatMap((A, I) => {
      if (A.productSource === "complementary") {
        const z = e(p)[(I + _) % (e(p).length || 1)];
        return z ? { upsell: A, product: z } : [];
      }
      const q = A.productGID ? u().find((z) => z.id === Tt(A.productGID)) : void 0;
      if (!$e(g, "$config", r).preview && !(q != null && q.availableForSale)) return [];
      const L = q && Jn(q);
      return { upsell: A, product: L };
    }));
    var y = { get checkboxUpsells() {
      return l();
    }, set checkboxUpsells(A) {
      l(A), k();
    }, get dealBlock() {
      return s();
    }, set dealBlock(A) {
      s(A), k();
    }, get otherProducts() {
      return u();
    }, set otherProducts(A) {
      u(A), k();
    }, get complementaryProducts() {
      return o();
    }, set complementaryProducts(A) {
      o(A), k();
    }, get dealSellingPlan() {
      return a();
    }, set dealSellingPlan(A) {
      a(A), k();
    }, get dealBarQuantity() {
      return c();
    }, set dealBarQuantity(A) {
      c(A), k();
    }, get onChange() {
      return d();
    }, set onChange(A) {
      d(A), k();
    } }, w = lv(), S = P(w);
    Ut(S, 21, () => e(B), ({ upsell: A, product: I }) => A.id, (A, I) => {
      let q = () => e(I).upsell;
      mu(A, { get checkboxUpsell() {
        return q();
      }, get product() {
        return e(I).product;
      }, get dealBlock() {
        return s();
      }, get dealSellingPlan() {
        return a();
      }, get dealBarQuantity() {
        return c();
      }, onChange: (L) => (function(z, ce) {
        ce ? e(f)[z] = ce : delete e(f)[z];
        const N = Object.entries(e(f)).flatMap(([Y, K]) => K.variants.map(({ variant: U, quantity: J }) => ({ id: Y, variant: U, product: K.product, quantity: J, sellingPlan: K.sellingPlan })));
        let re = 0, Q = 0;
        for (const Y of Object.values(e(f))) re += Y.totalDiscountedPrice, Q += Y.totalFullPrice;
        d()(N, { totalDiscountedPrice: re, totalFullPrice: Q });
      })(q().id, L) });
    }), x(S), x(w), v(t, w);
    var $ = Ze(y);
    return i(), $;
  }
  Le(yu, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var sv = D('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function xu(t, n) {
    Je(n, !0);
    const [r, i] = Pt(), l = m(n, "timer", 7), s = Gt(), u = h(() => ((I) => {
      const { textColor: q, backgroundColor: L, titleAlignment: z, titleStyle: ce, titleSize: N } = I;
      return pn({ "kaching-bundles-timer-background-color": Fe(L), "kaching-bundles-timer-text-color": Fe(q), "kaching-bundles-timer-title-alignment": z, "kaching-bundles-timer-title-font-weight": ce ? Un(ce) : null, "kaching-bundles-timer-title-font-style": ce ? Hn(ce) : null, "kaching-bundles-timer-title-size": N ? N + "px" : null });
    })(l()));
    function o() {
      const I = new hs(), q = new hs(I);
      return q.setHours(24, 0, 0, 0), Math.floor((q.getTime() - I.getTime()) / 1e3);
    }
    function a() {
      if (!l().endTimestamp) return 0;
      const I = new hs();
      return Math.max(0, Math.floor((l().endTimestamp - I.getTime()) / 1e3));
    }
    function c() {
      return l().type === "midnight" ? o() : l().type === "custom" ? a() : 60 * l().minutes;
    }
    let d = Ae(at(c())), g = h(() => l().type !== "custom" || e(d) > 0);
    Xe(() => {
      W(d, c(), !0);
    }), Xe(() => {
      const I = window.setInterval(() => {
        l().type === "midnight" ? W(d, o(), !0) : l().type === "custom" ? W(d, a(), !0) : W(d, e(d) <= 1 ? c() : e(d) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(I);
    });
    const f = h(() => $e(s, "$translate", r)(l().title)), p = h(() => (function(I) {
      const q = Math.floor(I / 86400), L = Math.floor(I % 86400 / 3600), z = Math.floor(I % 3600 / 60), ce = I % 60, N = (re) => re.toString().padStart(2, "0");
      return l().type === "custom" && q > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(q)} ${N(L)}:${N(z)}:${N(ce)}` : L > 0 ? `${N(L)}:${N(z)}:${N(ce)}` : `${N(z)}:${N(ce)}`;
    })(e(d))), _ = h(() => e(f).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let B = Ae(void 0);
    Xe(() => {
      !e(B) || !e(_) || e(B).querySelectorAll(".kaching-bundles__timer-value").forEach((I) => {
        I.textContent = ` ${e(p)} `;
      });
    });
    var y = { get timer() {
      return l();
    }, set timer(I) {
      l(I), k();
    } }, w = De(), S = ve(w), $ = (I) => {
      var q = sv(), L = P(q);
      Me(P(L), () => e(_)), x(L), es(L, (z) => W(B, z), () => e(B)), x(q), fe(() => Ht(q, e(u))), v(I, q);
    };
    T(S, (I) => {
      e(g) && I($);
    }), v(t, w);
    var A = Ze(y);
    return i(), A;
  }
  function wu(t, n) {
    Je(n, !0);
    const r = m(n, "dealBlockId", 7), i = m(n, "shopCustomStyles", 7), l = m(n, "customStyles", 7), s = h(() => {
      const d = [i(), l()].filter((g) => g == null ? void 0 : g.trim()).join(`
`);
      return d ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${d}
        }
      </style>
    ` : "";
    });
    var u = { get dealBlockId() {
      return r();
    }, set dealBlockId(d) {
      r(d), k();
    }, get shopCustomStyles() {
      return i();
    }, set shopCustomStyles(d) {
      i(d), k();
    }, get customStyles() {
      return l();
    }, set customStyles(d) {
      l(d), k();
    } }, o = De(), a = ve(o), c = (d) => {
      var g = De();
      Me(ve(g), () => e(s)), v(d, g);
    };
    return T(a, (d) => {
      e(s) && d(c);
    }), v(t, o), Ze(u);
  }
  Le(xu, { timer: {} }, [], [], !0), Le(wu, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function ov(t, n = 4) {
    const r = (function(i) {
      let l = 2166136261;
      for (let s = 0; s < i.length; s++) l ^= i.charCodeAt(s), l = Math.imul(l, 16777619) >>> 0;
      return l >>> 0;
    })(t);
    return (function(i, l) {
      let s = "";
      for (let u = 0; u < l; u++) s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[i % 62] + s, i = Math.floor(i / 62);
      return s;
    })(r, n);
  }
  function cv(t) {
    var n, r, i, l, s, u, o, a;
    const { dealBlock: c, product: d, selectedDealBarId: g, selectedVariantQuantities: f, selectedBundleProducts: p, selectedCollectionBreaksProducts: _, selectedFreeGifts: B, selectedProgressiveGifts: y, selectedCheckboxUpsells: w, selectedUpsells: S, selectedPersonalisations: $, selectedSellingPlan: A, dealBarSellingPlan: I, nativeBundleProductIds: q } = t, L = (function(E) {
      const { product: ae, selectedVariantQuantities: R, selectedBundleProducts: le, selectedCollectionBreaksProducts: Se, selectedFreeGifts: X, selectedProgressiveGifts: ge, selectedCheckboxUpsells: Ve, selectedUpsells: ue, selectedSellingPlan: Be, dealBarSellingPlan: te, selectedDealBarId: _e } = E, qe = le.length > 0 || Se.length > 0 || X.length > 0 || ge.length > 0 || ue.length > 0, Ie = JSON.stringify([qe ? R.map(({ variant: be, quantity: ze }) => ({ variantId: be.id, quantity: ze })) : ae.id, le.map(({ id: be, variant: ze, quantity: Oe }) => ({ id: be, variantId: ze.id, quantity: Oe })), Se.map(({ variant: be, quantity: ze }) => ({ variantId: be.id, quantity: ze })), X.map(({ id: be, variant: ze, quantity: Oe }) => ({ id: be, variantId: ze.id, quantity: Oe })), ge.map(({ id: be, variants: ze }) => ze.map((Oe) => ({ id: be, variantId: Oe.variant.id, quantity: Oe.quantity })).flat()).flat(), Ve.map(({ id: be, variant: ze }) => ({ id: be, variantId: ze.id })), ue.map(({ id: be, variant: ze, quantity: Oe }) => ({ id: be, variantId: ze.id, quantity: Oe })), Be == null ? void 0 : Be.id, te == null ? void 0 : te.id, _e]);
      return ov(Ie);
    })(t), z = c.dealBars.find((E) => E.id === g);
    let ce = !1;
    z && (!z.dealBarType || z.dealBarType === "quantity-break" || z.dealBarType === "bxgy") && c.dealBars.filter((E) => !E.dealBarType || E.dealBarType === "quantity-break" || E.dealBarType === "bxgy").filter((E) => Su(E) === Su(z) && E.id !== g).length > 0 && (ce = !0);
    const N = (n = I == null ? void 0 : I.id) != null ? n : A == null ? void 0 : A.id, re = (z == null ? void 0 : z.dealBarType) === "bxgy", Q = f.some(({ variant: E }) => E.sellingPlans.length > 0), Y = re && (Q || t.splitBxgy), K = c.dealBars.some((E) => (E.freeGifts || []).filter((ae) => ae.productGID).length > 0), U = !(!c.progressiveGiftsEnabled || !c.progressiveGifts) && c.progressiveGifts.gifts.some((E) => E.giftType === "product"), J = c.dealBars.some((E) => (E.upsells || []).length > 0), Z = c.nanoId || c.id, V = c.abTestVariantNumber ? bc(c.abTestVariantNumber) : void 0, ee = (z == null ? void 0 : z.dealBarType) === "sku" || (z == null ? void 0 : z.dealBarType) === "bundle" || ce || Y, ye = { deal: Z, main: !0 };
    c.marketId && (ye.market = c.marketId), ee ? (ye.id = L, ye.bar = g) : (re || B.length > 0 || y.length > 0 || w.length > 0 || S.length > 0 || _.length > 0 || $.length > 0 || K || U || J) && (ye.id = L), !ye.bar && g && (ye.bid = g), V && (ye.ab = V);
    const F = { id: L, deal: Z, bar: g };
    V && (F.ab = V);
    const b = [];
    let C = f, O = [];
    if (Y && _.length === 0) {
      const { buy: E, get: ae } = Bu(f, z.getQuantity);
      C = E, O = ae;
    }
    for (const { variant: E, quantity: ae } of C) {
      const R = { ...ye }, le = Mn(d, E, N);
      le != null && le.priceAdjustment && z && Cu(z) && (R.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const Se = { id: E.id, quantity: ae, properties: { __kaching_bundles: JSON.stringify(R) } };
      le && (Se.selling_plan = le.id), b.push(Se);
    }
    const j = C.length > 0 && !Pu(d, q) ? C[0].variant.id : void 0;
    for (const { variant: E, quantity: ae } of O) {
      const R = { ...F, main: !0, bxgy: !0 }, le = Mn(d, E, N);
      le != null && le.priceAdjustment && (z == null ? void 0 : z.dealBarType) === "bxgy" && z.getDiscountType === "specific" && (R.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const Se = { id: E.id, quantity: ae, properties: { __kaching_bundles: JSON.stringify(R) } };
      ji(Se, j, d, q), le && (Se.selling_plan = le.id), b.push(Se);
    }
    for (const E of p) {
      const ae = { ...F, bundleProduct: E.id }, R = Mn(E.product, E.variant, N);
      R != null && R.priceAdjustment && (z == null ? void 0 : z.dealBarType) === "bundle" && ((r = z == null ? void 0 : z.bundleProducts.find((Se) => Se.id === E.id)) == null ? void 0 : r.discountType) === "specific" && (ae.sellingPlan = { id: R.id, priceAdjustment: R.priceAdjustment });
      const le = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      ji(le, j, E.product, q), R && (le.selling_plan = R.id), b.push(le);
    }
    let ie = _, oe = [];
    if (Y && _.length > 0) {
      const { buy: E, get: ae } = Bu(_, z.getQuantity);
      ie = E, oe = ae;
    }
    const M = ((i = c.collectionBreaks) == null ? void 0 : i.visibility) === "deal-products";
    for (const E of ie) {
      if (M) {
        const Se = b.find((X) => X.id === E.variant.id);
        if (Se) {
          Se.quantity += E.quantity;
          continue;
        }
      }
      const ae = { ...F, collectionBreaksProduct: !0 };
      ee || delete ae.bar;
      const R = Mn(E.product, E.variant, N);
      R != null && R.priceAdjustment && z && Cu(z) && (ae.sellingPlan = { id: R.id, priceAdjustment: R.priceAdjustment });
      const le = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      R && (le.selling_plan = R.id), b.push(le);
    }
    for (const E of oe) {
      const ae = { ...F, collectionBreaksProduct: !0 };
      ee || delete ae.bar, ae.bxgy = !0;
      const R = Mn(E.product, E.variant, N);
      R != null && R.priceAdjustment && (z == null ? void 0 : z.dealBarType) === "bxgy" && z.getDiscountType === "specific" && (ae.sellingPlan = { id: R.id, priceAdjustment: R.priceAdjustment });
      const le = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      R && (le.selling_plan = R.id), b.push(le);
    }
    for (const E of B) {
      const ae = { ...F, gift: E.id };
      delete ae.bar;
      const R = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      ji(R, j, E.product, q);
      const le = Mn(E.product, E.variant, N);
      le && (R.selling_plan = le.id), b.push(R);
    }
    for (const E of y) {
      const ae = { ...F, gift: E.id };
      delete ae.bar;
      for (const R of E.variants) {
        const le = { id: R.variant.id, quantity: R.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
        ji(le, j, E.product, q);
        const Se = Mn(E.product, R.variant, N);
        Se && (le.selling_plan = Se.id), b.push(le);
      }
    }
    for (const E of w) {
      const ae = { ...F, checkboxUpsell: E.id };
      delete ae.bar;
      const R = ((l = E.sellingPlan) == null ? void 0 : l.id) || N, le = Mn(E.product, E.variant, R), Se = (s = c.checkboxUpsells) == null ? void 0 : s.upsells.find((ge) => ge.id === E.id);
      le != null && le.priceAdjustment && (Se == null ? void 0 : Se.discountType) === "specific" && (ae.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const X = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      ji(X, j, E.product, q), le && (X.selling_plan = le.id), b.push(X);
    }
    for (const E of S) {
      const ae = { ...F, upsell: E.id };
      delete ae.bar;
      const R = ((u = E.sellingPlan) == null ? void 0 : u.id) || N, le = Mn(E.product, E.variant, R);
      le != null && le.priceAdjustment && ((a = (o = z == null ? void 0 : z.upsells) == null ? void 0 : o.find((X) => X.id === E.id)) == null ? void 0 : a.discountType) === "specific" && (ae.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const Se = { id: E.variant.id, quantity: E.quantity, properties: { __kaching_bundles: JSON.stringify(ae) } };
      ji(Se, j, E.product, q), le && (Se.selling_plan = le.id), b.push(Se);
    }
    const ne = [];
    for (const { variant: E, quantity: ae } of C) for (let R = 0; R < ae; R++) ne.push(E.id);
    for (const E of $) {
      const ae = { ...F, personalisation: E.id };
      delete ae.bar;
      const R = { id: E.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(ae), [E.valueLabel]: E.text } }, le = ne[E.productIndex];
      le && (R.parent_id = le), b.push(R);
    }
    const me = b.filter((E) => !E.parent_id), he = b.filter((E) => E.parent_id);
    return [...me.reverse(), ...he];
  }
  function Pu(t, n) {
    return n.includes(t.id) || t.isNativeBundle === !0;
  }
  function ji(t, n, r, i) {
    n && n !== t.id && (Pu(r, i) || (t.parent_id = n));
  }
  function Su(t) {
    switch (t.dealBarType) {
      case void 0:
      case "quantity-break":
        return Number(t.quantity);
      case "bxgy":
        return Number(t.buyQuantity) + Number(t.getQuantity);
      case "bundle":
        return t.bundleProducts[0].quantity;
      case "sku":
        return 1;
    }
  }
  function Cu(t) {
    switch (t.dealBarType) {
      case void 0:
      case "quantity-break":
        return t.discountType === "specific";
      case "bundle":
        return t.bundleProducts[0].discountType === "specific";
      case "bxgy":
        return t.buyDiscountType === "specific";
      case "sku":
        return !1;
    }
  }
  function Bu(t, n) {
    const r = [...t].sort((u, o) => u.variant.price - o.variant.price), i = [], l = [];
    let s = n;
    for (const u of r) {
      const o = Math.min(s, u.quantity), a = u.quantity - o;
      o > 0 && l.push({ ...u, quantity: o }), a > 0 && i.push({ ...u, quantity: a }), s -= o;
    }
    return { buy: i, get: l };
  }
  function uv(t, n, r) {
    n()({ dealBarId: r().id, preselected: !1 });
  }
  var dv = D('<img class="kaching-bundles__bar-image" alt=""/>'), gv = D('<div class="kaching-bundles__bar-radio"></div>'), pv = D('<span class="kaching-bundles__bar-title"><!></span>'), hv = D('<span class="kaching-bundles__bar-label"><!></span>'), fv = D('<div class="kaching-bundles__bar-subtitle"><!></div>'), bv = D('<div class="kaching-bundles__bar-full-price"><!></div>'), vv = D('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), _v = D('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), kv = D('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function Iu(t, n) {
    Je(n, !0);
    const r = () => $e(q, "$formatPrice", s), i = () => $e(I, "$translate", s), l = () => $e(L, "$getMediaImageUrl", s), [s, u] = Pt();
    let o = m(n, "dealBlock", 7), a = m(n, "dealBar", 7), c = m(n, "otherProducts", 23, () => []), d = m(n, "complementaryProducts", 23, () => []), g = m(n, "selectedDealBarIndex", 7, null), f = m(n, "componentId", 7), p = m(n, "selected", 7, !1), _ = m(n, "sellingPlanId", 7, void 0), B = m(n, "onProgressiveGiftsChange", 7), y = m(n, "onDealBarSelect", 7), w = m(n, "onDealBarDeselect", 7), S = m(n, "onVariantsChange", 7), $ = m(n, "onPersonalisationsChange", 7), A = m(n, "personalisationInitialValues", 23, () => []);
    const I = Gt(), q = bn(), L = An();
    let z = Ae(at([])), ce = Ae(at([])), N = Ae(at([])), re = !1;
    const Q = h(() => a().productGID ? c().find((we) => we.id === Tt(a().productGID)) : void 0);
    let Y = Ae(void 0);
    const K = h(() => (function(we, Ke, ot) {
      if (we !== void 0 && ot && ot.variants.some((lt) => lt.id === we))
        return we;
      if (Ke.variantGID) return Tt(Ke.variantGID);
      if (ot && ot.variants.length > 0) return ot.variants[0].id;
    })(e(Y), a(), e(Q))), U = h(() => e(K) && e(Q) ? e(Q).variants.find((we) => we.id === e(K)) : void 0), J = h(() => e(U) ? [{ variant: e(U), quantity: 1 }] : []), Z = h(() => e(Q) && e(U) ? Mn(e(Q), e(U), _()) : void 0), V = h(() => e(U) ? ha(e(U), e(Z)) : 0), ee = h(() => e(U) ? (function(we, Ke) {
      return we.useProductCompareAtPrice && Ke.compareAtPrice ? Math.max(Ke.price, Ke.compareAtPrice) : Ke.price;
    })(o(), e(U)) : 0), ye = h(() => e(ee) > e(V)), F = h(() => vn({ priceFormatter: r(), product: e(Q), dealBar: a(), totalFullPrice: e(ee), totalDiscountedPrice: e(V), quantity: 1, unitQuantity: Zn(e(J)), sellingPlan: e(Z) })), b = h(() => e(F)(i()(a().title))), C = h(() => e(F)(i()(a().subtitle))), O = h(() => e(F)(i()(a().label))), j = h(() => e(F)(i()(a().badgeText))), ie = h(() => l()(a().badgeImageGID)), oe = h(() => `${a().id}_${f()}`), M = h(() => l()(a().mediaImageGID) || fl), ne = cn(), me = h(() => e(Q) && e(Q).variants.length > 1 && !a().variantGID && p()), he = h(() => e(Q) && $e(ne, "$config", s).featureFlags.variant_images && new Set(e(Q).variants.map((we) => we.image).filter((we) => we)).size > 1), E = h(() => a().showAsSoldOutEnabled && a().showAsSoldOut ? _l(a().showAsSoldOut) : "");
    function ae(we) {
      W(Y, we, !0);
    }
    Xe(() => {
      !p() || !e(U) && e(Q) || (e(z), e(N), e(ce), e(K), e(Z), Zt(() => {
        re || (re = !0, y()({ dealBarId: a().id, preselected: !0 })), (function() {
          const we = e(V) + e(N).reduce((ut, ct) => ut + ct.discountedPrice, 0), Ke = e(ee) + e(N).reduce((ut, ct) => ut + ct.fullPrice, 0) + e(z).reduce((ut, ct) => ut + ct.fullPrice, 0) + e(ce).reduce((ut, ct) => ut + ct.fullPrice * ct.quantity, 0), ot = e(U) ? e(U).price : 0, lt = e(U) ? e(U).sellingPlans.map((ut) => ({ sellingPlanId: ut.id, discountedPrice: ut.price })) : [], nt = { discountedPrice: we, fullPrice: Ke, discountedPricePerItem: e(V), fullPricePerItem: e(ee), discountedPriceWithoutSellingPlan: ot, discountedPricesForSellingPlans: lt };
          S()({ variants: e(J), freeGifts: [...e(z), ...e(ce)], upsells: e(N), pricing: nt, product: e(Q) });
        })();
      }));
    });
    var R = { get dealBlock() {
      return o();
    }, set dealBlock(we) {
      o(we), k();
    }, get dealBar() {
      return a();
    }, set dealBar(we) {
      a(we), k();
    }, get otherProducts() {
      return c();
    }, set otherProducts(we = []) {
      c(we), k();
    }, get complementaryProducts() {
      return d();
    }, set complementaryProducts(we = []) {
      d(we), k();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(we = null) {
      g(we), k();
    }, get componentId() {
      return f();
    }, set componentId(we) {
      f(we), k();
    }, get selected() {
      return p();
    }, set selected(we = !1) {
      p(we), k();
    }, get sellingPlanId() {
      return _();
    }, set sellingPlanId(we = void 0) {
      _(we), k();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(we) {
      B(we), k();
    }, get onDealBarSelect() {
      return y();
    }, set onDealBarSelect(we) {
      y(we), k();
    }, get onDealBarDeselect() {
      return w();
    }, set onDealBarDeselect(we) {
      w(we), k();
    }, get onVariantsChange() {
      return S();
    }, set onVariantsChange(we) {
      S(we), k();
    }, get onPersonalisationsChange() {
      return $();
    }, set onPersonalisationsChange(we) {
      $(we), k();
    }, get personalisationInitialValues() {
      return A();
    }, set personalisationInitialValues(we = []) {
      A(we), k();
    } }, le = kv();
    let Se;
    var X = P(le);
    Er(X), X.__change = [uv, y, a];
    var ge = G(X, 2);
    let Ve;
    var ue = P(ge);
    {
      let we = h(() => e(j) || void 0);
      Oi(ue, { get style() {
        return a().badgeStyle;
      }, get text() {
        return e(we);
      }, get imageUrl() {
        return e(ie);
      }, get blockLayout() {
        return o().blockLayout;
      } });
    }
    var Be = G(ue, 2), te = P(Be);
    Vt(te, { element: "div", class: "kaching-bundles__bar-main", onclick: function(we) {
      p() && (we.preventDefault(), we.stopPropagation(), w()());
    }, children: (we, Ke) => {
      var ot = vv(), lt = ve(ot), nt = (Dt) => {
        var pe = dv();
        fe(() => Pe(pe, "src", e(M))), v(Dt, pe);
      }, ut = (Dt) => {
        v(Dt, gv());
      };
      T(lt, (Dt) => {
        a().mediaImageGID ? Dt(nt) : Dt(ut, !1);
      });
      var ct = G(lt, 2), St = P(ct), Ft = P(St), xt = P(Ft);
      Ue(xt, () => e(b), (Dt) => {
        var pe = pv();
        Me(P(pe), () => e(b)), x(pe), v(Dt, pe);
      });
      var It = G(xt, 2), rn = (Dt) => {
        var pe = De();
        Ue(ve(pe), () => e(O), (et) => {
          var He = hv();
          Me(P(He), () => e(O)), x(He), v(et, He);
        }), v(Dt, pe);
      };
      T(It, (Dt) => {
        e(O) && Dt(rn);
      }), x(Ft);
      var un = G(Ft, 2), yn = P(un), Vn = (Dt) => {
        var pe = De();
        Ue(ve(pe), () => e(C), (et) => {
          var He = fv();
          Me(P(He), () => e(C)), x(He), v(et, He);
        }), v(Dt, pe);
      };
      T(yn, (Dt) => {
        e(C) && Dt(Vn);
      });
      var kr = G(yn, 2), kt = (Dt) => {
        Hr(Dt, { get lowStockAlert() {
          return o().lowStockAlert;
        }, get inventoryQuantity() {
          return e(U).inventoryQuantity;
        } });
      };
      T(kr, (Dt) => {
        !e(me) && o().lowStockAlertEnabled && o().lowStockAlert && e(U) && Dt(kt);
      }), x(un), x(St);
      var Qt = G(St, 2), en = P(Qt);
      Ue(en, () => e(V), (Dt) => {
        Ar(Dt, { get amount() {
          return e(V);
        }, get showPricesPerItem() {
          return o().showPricesPerItem;
        }, get unitLabel() {
          return o().unitLabel;
        } });
      });
      var _n = G(en, 2), Pn = (Dt) => {
        var pe = De();
        Ue(ve(pe), () => e(ee), (et) => {
          var He = bv();
          Me(P(He), () => r()(e(ee))), x(He), fe((se) => Pe(He, "data-a11y-label", se), [() => i()("system.original_price")]), v(et, He);
        }), v(Dt, pe);
      };
      T(_n, (Dt) => {
        e(ye) && Dt(Pn);
      }), x(Qt), x(ct), v(we, ot);
    }, $$slots: { default: !0 } });
    var _e = G(te, 2), qe = (we) => {
      ya(we, { get highlights() {
        return a().highlights;
      }, get dealBarSelected() {
        return p();
      } });
    };
    T(_e, (we) => {
      a().highlights && we(qe);
    });
    var Ie = G(_e, 2), be = (we) => {
      var Ke = _v(), ot = P(Ke);
      Qr(ot, { get product() {
        return e(Q);
      } });
      var lt = G(ot, 2), nt = P(lt);
      {
        let St = h(() => e(K) || 0);
        qn(nt, { get product() {
          return e(Q);
        }, get selectedVariantId() {
          return e(St);
        }, get showImage() {
          return e(he);
        }, onChange: ae });
      }
      var ut = G(nt, 2), ct = (St) => {
        {
          let Ft = h(() => {
            var xt, It;
            return (It = (xt = e(U)) == null ? void 0 : xt.inventoryQuantity) != null ? It : null;
          });
          Hr(St, { get lowStockAlert() {
            return o().lowStockAlert;
          }, get inventoryQuantity() {
            return e(Ft);
          } });
        }
      };
      T(ut, (St) => {
        o().lowStockAlertEnabled && o().lowStockAlert && St(ct);
      }), x(lt), x(Ke), v(we, Ke);
    };
    T(Ie, (we) => {
      e(me) && e(Q) && we(be);
    });
    var ze = G(Ie, 2), Oe = (we) => {
      {
        let Ke = h(() => [e(K)]);
        Li(we, { get productPersonalisation() {
          return a().productPersonalisation;
        }, get product() {
          return e(Q);
        }, get selectedVariantIds() {
          return e(Ke);
        }, quantity: 1, get addPersonalisationModal() {
          return o().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return $();
        }, get initialValues() {
          return A();
        } });
      }
    };
    T(ze, (we) => {
      p() && a().productPersonalisation && e(Q) && e(K) && (o().blockLayout === "vertical" || o().blockLayout === "plain") && we(Oe);
    }), x(Be);
    var xe = G(Be, 2);
    {
      let we = h(() => a().upsells || []);
      ba(xe, { get dealBlock() {
        return o();
      }, get upsells() {
        return e(we);
      }, get otherProducts() {
        return c();
      }, get complementaryProducts() {
        return d();
      }, get dealBarSelected() {
        return p();
      }, get dealSellingPlan() {
        return e(Z);
      }, onChange: (Ke) => {
        W(N, Ke, !0);
      } });
    }
    var Ne = G(xe, 2);
    ma(Ne, { get selectedDealBarIndex() {
      return g();
    }, get onChange() {
      return B();
    }, get dealBlock() {
      return o();
    }, get dealBar() {
      return a();
    }, get selected() {
      return p();
    }, get otherProducts() {
      return c();
    }, get progressiveGifts() {
      return o().progressiveGifts;
    } });
    var dt = G(Ne, 2);
    {
      let we = h(() => a().freeGifts || []);
      fa(dt, { get dealBlock() {
        return o();
      }, get freeGifts() {
        return e(we);
      }, get otherProducts() {
        return c();
      }, get dealBarSelected() {
        return p();
      }, get sellingPlan() {
        return e(Z);
      }, onChange: (Ke) => {
        W(z, Ke, !0);
      } });
    }
    var rt = G(dt, 2);
    {
      let we = h(() => a().multipleGiftsSelectors || []);
      ka(rt, { get dealBlock() {
        return o();
      }, get multipleGiftsSelectors() {
        return e(we);
      }, get sellingPlan() {
        return e(Z);
      }, get otherProducts() {
        return c();
      }, onChange: (Ke) => {
        W(ce, Ke, !0);
      } });
    }
    x(ge);
    var je = G(ge, 2), st = (we) => {
      va(we, { get showAsSoldOut() {
        return a().showAsSoldOut;
      }, get replaceLiquid() {
        return e(F);
      } });
    };
    T(je, (we) => {
      a().showAsSoldOutEnabled && a().showAsSoldOut && we(st);
    }), x(le), fe((we, Ke) => {
      var ot;
      Se = qt(le, 1, "kaching-bundles__bar", null, Se, we), Pe(le, "data-deal-bar-id", a().id), Ht(le, e(E)), Pe(X, "name", `kaching-bundles-deal-${(ot = f()) != null ? ot : ""}`), Ai(X, a().id), Pe(X, "id", e(oe)), Za(X, p()), X.disabled = a().showAsSoldOutEnabled, Pe(ge, "for", e(oe)), Ve = qt(ge, 1, "kaching-bundles__bar-container", null, Ve, Ke);
    }, [() => ({ "kaching-bundles__bar--selected": p() }), () => ({ "kaching-bundles__bar-container--sold-out": a().showAsSoldOutEnabled })]), v(t, le);
    var it = Ze(R);
    return u(), it;
  }
  $n(["change"]), Le(Iu, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, sellingPlanId: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var mv = D('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function Du(t, n) {
    Je(n, !0);
    const r = () => $e(a, "$config", i), [i, l] = Pt();
    let s = m(n, "collectionBreaks", 7), u = m(n, "hasItemsToSelect", 7);
    const o = Gt(), a = cn(), c = h(() => {
      var w;
      return (w = s()) == null ? void 0 : w.requireItemSelectionAlert;
    }), d = h(() => r().preview && r().previewAlerts || $e(ms, "$requireSelectionError", i)), g = h(() => {
      var w;
      return e(d) && ((w = s()) == null ? void 0 : w.requireItemSelectionEnabled) && e(c) && u();
    });
    var f = { get collectionBreaks() {
      return s();
    }, set collectionBreaks(w) {
      s(w), k();
    }, get hasItemsToSelect() {
      return u();
    }, set hasItemsToSelect(w) {
      u(w), k();
    } }, p = De(), _ = ve(p), B = (w) => {
      var S = mv(), $ = G(P(S));
      x(S), fe((A) => yt($, ` ${A != null ? A : ""}`), [() => $e(o, "$translate", i)(e(c).text)]), v(w, S);
    };
    T(_, (w) => {
      e(g) && e(c) && w(B);
    }), v(t, p);
    var y = Ze(f);
    return l(), y;
  }
  Le(Du, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var yv = D('<div class="kaching-bundles__block-title"><!></div>'), xv = D("<!> <!>", 1), wv = D('<div class="kaching-bundles__out-of-stock"><!></div>'), Pv = D('<div class="kaching-bundles"><div><!> <!> <div></div> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function zu(t, n) {
    var r, i, l, s;
    Je(n, !0);
    const u = () => $e(K, "$formatPrice", a), o = () => $e(J, "$translate", a), [a, c] = Pt();
    let d = m(n, "component", 7), g = m(n, "config", 7), f = m(n, "translations", 23, () => ({})), p = m(n, "dealBlock", 7), _ = m(n, "product", 7), B = m(n, "currentVariantId", 7), y = m(n, "sellingPlanId", 15), w = m(n, "selectedDealBarId", 15), S = m(n, "quantity", 15), $ = m(n, "mediaImages", 23, () => []), A = m(n, "otherProducts", 23, () => []), I = m(n, "collectionBreaksProducts", 23, () => []), q = m(n, "complementaryProducts", 23, () => []), L = m(n, "nativeBundleProductIds", 23, () => []), z = m(n, "compact", 7, !1);
    const ce = h(() => p().hideUnavailableOptions ? Jn(_()) : _()), N = h(() => p().hideUnavailableOptions ? A().map(Jn) : A()), re = h(() => p().hideUnavailableOptions ? q().map(Jn) : q()), Q = h(() => p().hideUnavailableOptions ? I().map(Jn) : I()), { setConfig: Y } = Fi(g()), { formatPrice: K, setMoneyFormat: U } = pa(g().moneyFormat, (r = p()) == null ? void 0 : r.showPricesWithoutDecimals), { translate: J, setTranslations: Z } = Ti(f()), { setMediaImages: V } = gl($()), { setSwatchSettings: ee } = pl({ swatchOptions: ((i = p()) == null ? void 0 : i.swatchOptions) || [], swatchSize: (l = p()) == null ? void 0 : l.swatchSize, swatchShape: (s = p()) == null ? void 0 : s.swatchShape });
    function ye() {
      return cv({ dealBlock: p(), product: e(ot), selectedDealBarId: w(), selectedVariantQuantities: e(C), selectedBundleProducts: e(O), selectedCollectionBreaksProducts: e(j), selectedFreeGifts: e(ie), selectedProgressiveGifts: e(oe), selectedCheckboxUpsells: e(M), selectedUpsells: e(ne), selectedPersonalisations: e(me), selectedSellingPlan: e(nt), dealBarSellingPlan: e(E), nativeBundleProductIds: L(), splitBxgy: g().featureFlags.split_bxgy_items });
    }
    $i(() => {
      _r(d(), "kaching-bundles-block-loaded", { component: d() }, !1);
    }), Xe(() => {
      Y(g());
    }), Xe(() => {
      U(g().moneyFormat, !!p().showPricesWithoutDecimals);
    }), Xe(() => {
      Z(f());
    }), Xe(() => {
      V($());
    }), Xe(() => {
      ee({ swatchOptions: p().swatchOptions || [], swatchSize: p().swatchSize, swatchShape: p().swatchShape });
    });
    let F = 0;
    Xe(() => {
      F === 0 && L().length > 0 && Ke({ pricing: e(ge) }), F = L().length;
    });
    let b = Math.random().toString(16).slice(2), C = Ae(at([])), O = Ae(at([])), j = Ae(at([])), ie = Ae(at([])), oe = Ae(at([])), M = Ae(at([])), ne = Ae(at([])), me = Ae(at([])), he = new bf(), E = Ae(void 0), ae = Ae(0), R = Ae(0), le = Ae(void 0), Se = Ae(!1), X = Ae(at({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), ge = Ae(at({ discountedPrice: 0, fullPrice: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Xe(() => {
      B() && !w() && (e(nt), Zt(() => {
        (function() {
          const H = _().variants.find((Ye) => Ye.id === B());
          if (!H) return;
          W(C, [{ variant: H, quantity: 1 }], !0);
          let ke = H.price;
          if (e(nt)) {
            const Ye = H.sellingPlans.find((Ee) => Ee.id === e(nt).id);
            Ye && (ke = Ye.price);
          }
          const Ce = H.compareAtPrice && H.compareAtPrice > H.price ? H.compareAtPrice : H.price, Te = _().sellingPlans.map((Ye) => ({ sellingPlanId: Ye.id, discountedPrice: ha(H, Ye) }));
          W(ge, { discountedPrice: ke, fullPrice: Ce, discountedPricePerItem: ke, fullPricePerItem: Ce, discountedPriceWithoutSellingPlan: H.price, discountedPricesForSellingPlans: Te }, !0), Ke({ pricing: e(ge) });
        })();
      }));
    });
    let Ve = h(() => gc(p())), ue = h(() => o()(p().blockTitle));
    function Be(H) {
      return !H.dealBarType || H.dealBarType === "quantity-break" || H.dealBarType === "bxgy";
    }
    function te(H) {
      switch (H.dealBarType) {
        case void 0:
        case "quantity-break":
          return Number(H.quantity);
        case "bxgy":
          return Number(H.buyQuantity) + Number(H.getQuantity);
        case "bundle":
          return H.bundleProducts[0].quantity;
        case "sku":
          return 1;
      }
    }
    function _e(H) {
      var ke, Ce;
      w() !== H && (w() && he.set(w(), e(me)), W(me, (ke = he.get(H)) != null ? ke : [], !0), ((Ce = p().progressiveGifts) == null ? void 0 : Ce.layout) === "deal-bar" && W(oe, [], !0)), w(H);
    }
    function qe(H) {
      const { dealBarId: ke, dealBarQuantity: Ce, preselected: Te } = H;
      _e(ke), xa(!1), g().keepQuantityInput && Ce && S(Ce), _r(d(), "deal-bar-selected", { dealBarId: ke, preselected: Te });
    }
    function Ie(H) {
      const ke = p().dealBars[H];
      ke && _e(ke.id);
    }
    function be() {
      g().ignoreDeselect || (w(void 0), W(ie, [], !0), W(oe, [], !0), W(ne, [], !0), W(O, [], !0), W(j, [], !0), W(me, [], !0), he.clear(), W(E, void 0), xa(!1), _r(d(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function ze(H) {
      const { variantId: ke } = H;
      _r(d(), "variant-selected", { variantId: ke });
    }
    function Oe(H) {
      const { bundleProducts: ke, freeGifts: Ce, upsells: Te, pricing: Ye } = H, Ee = [{ variant: ke[0].variant, quantity: ke[0].quantity }];
      W(C, Ee, !0), W(O, ke.slice(1), !0), W(ie, Ce, !0), W(ne, Te, !0), W(j, [], !0), W(E, void 0), W(le, void 0), W(ge, Ye, !0), W(Se, we(e(C)), !0), Ke({ pricing: Ye });
    }
    function xe(H) {
      const { variants: ke, freeGifts: Ce, upsells: Te, pricing: Ye, validation: Ee } = H;
      W(X, Ee, !0);
      const bt = [{ variant: ke[0].variant, quantity: ke[0].quantity }], pt = ke.slice(1);
      W(C, bt, !0), W(ie, Ce, !0), W(ne, Te, !0), W(O, [], !0), W(j, pt, !0), W(E, H.dealBarSellingPlan, !0), W(le, void 0), W(ge, Ye, !0), W(Se, we(e(C)), !0), Ke({ pricing: Ye });
    }
    function Ne(H) {
      const { variants: ke, freeGifts: Ce, upsells: Te, pricing: Ye } = H;
      W(C, ke, !0), W(ie, Ce, !0), W(ne, Te, !0), W(O, [], !0), W(j, [], !0), W(E, H.dealBarSellingPlan, !0), W(le, void 0), W(ge, Ye, !0), W(Se, we(e(C)), !0), Ke({ pricing: Ye });
    }
    function dt(H) {
      var ke;
      const { variants: Ce, freeGifts: Te, upsells: Ye, pricing: Ee, product: bt } = H;
      W(C, Ce, !0), W(ie, Te, !0), W(ne, Ye, !0), W(O, [], !0), W(j, [], !0), W(E, void 0), ((ke = e(le)) == null ? void 0 : ke.id) !== (bt == null ? void 0 : bt.id) && W(le, bt, !0), W(ge, Ee, !0), W(Se, we(e(C)), !0), Ke({ pricing: Ee });
    }
    function rt(H) {
      y(H == null ? void 0 : H.id);
    }
    function je(H) {
      W(oe, H, !0), Ke({ pricing: e(ge) });
    }
    function st(H, ke) {
      W(M, H, !0), W(ae, ke.totalDiscountedPrice, !0), W(R, ke.totalFullPrice, !0), Ke({ pricing: e(ge) });
    }
    function it(H) {
      W(me, H, !0), Ke({ pricing: e(ge) });
    }
    function we(H) {
      return H.some(({ variant: ke, quantity: Ce }) => !!ke && !!ke.inventoryManagement && ke.inventoryPolicy === "deny" && ke.inventoryQuantity !== null && Ce > ke.inventoryQuantity);
    }
    function Ke({ pricing: H }) {
      const ke = e(C).map(({ variant: pt, quantity: $t }) => ({ variantId: pt.id, quantity: $t })), Ce = e(ie).map(({ id: pt, variant: $t, quantity: tn }) => ({ id: pt, variantId: $t.id, quantity: tn })), Te = e(ne).map(({ id: pt, variant: $t, quantity: tn }) => ({ id: pt, variantId: $t.id, quantity: tn })), Ye = e(O).map(({ id: pt, variant: $t, quantity: tn }) => ({ id: pt, variantId: $t.id, quantity: tn })), Ee = H.discountedPrice + e(ae), bt = H.fullPrice + e(R);
      w() && e(xt) ? wa.set({ id: w(), dealBar: e(xt), product: e(ot), quantity: e(C).reduce((pt, { quantity: $t }) => pt + $t, 0), totalFullPrice: bt, totalDiscountedPrice: Ee, discountedPriceWithoutSellingPlan: H.discountedPriceWithoutSellingPlan + e(ae), discountedPricesForSellingPlans: H.discountedPricesForSellingPlans.map((pt) => ({ sellingPlanId: pt.sellingPlanId, discountedPrice: pt.discountedPrice + e(ae) })) }) : wa.set(null), _r(d(), "variants-changed", { variantIdQuantities: ke, freeGifts: Ce, upsells: Te, bundleProducts: Ye, pricing: { discountedPrice: { amount: Ee, formatted: u()(Ee) }, fullPrice: { amount: bt, formatted: u()(bt) }, discountedPricePerItem: { amount: H.discountedPricePerItem, formatted: u()(H.discountedPricePerItem) }, fullPricePerItem: { amount: H.fullPricePerItem, formatted: u()(H.fullPricePerItem) } }, formattedPrice: u()(H.discountedPrice), validation: e(X) }), _r(d(), "items-changed", {});
    }
    w(w() || p().preselectedDealBarId || void 0), Xe(() => {
      S() && p() && Zt(() => {
        if (!w()) return;
        const H = p().dealBars.find((ke) => ke.id === w());
        H && Be(H) && te(H) !== S() && (function(ke, Ce) {
          if (!w()) return;
          const Te = ke.dealBars.slice().sort((Ee, bt) => te(Ee) - te(bt));
          let Ye = Te[0];
          for (const Ee of Te) if (Be(Ee)) {
            if (te(Ee) > Ce) break;
            Ye = Ee;
          }
          _e(Ye.id);
        })(p(), S());
      });
    });
    const ot = h(() => e(le) || _()), lt = h(() => {
      const H = e(C).map(({ variant: ke }) => ke);
      return e(ot).sellingPlans.filter((ke) => H.some((Ce) => Ce.sellingPlans.some((Te) => Te.id === ke.id)));
    }), nt = h(() => e(lt).find((H) => H.id === y())), ut = h(() => y() ? e(ot).sellingPlans.find((H) => H.id === y()) : void 0);
    let ct = h(() => p().subscriptionsEnabled && p().subscriptions && (e(lt).length > 0 || g().preview)), St = h(() => w() ? p().dealBars.findIndex((H) => H.id === w()) : null);
    const Ft = h(() => e(C).reduce((H, { quantity: ke }) => H + ke, 0) || 1), xt = h(() => w() ? p().dealBars.find((H) => H.id === w()) : void 0), It = h(() => {
      var H, ke;
      return !!((H = e(xt)) != null && H.sellingPlanEnabled) && !!((ke = e(xt)) != null && ke.sellingPlanGid);
    }), rn = h(() => {
      var H;
      return ((H = e(xt)) == null ? void 0 : H.productPersonalisation) && (p().blockLayout === "horizontal" || p().blockLayout === "grid");
    }), un = h(() => e(xt) ? e(xt).dealBarType === void 0 || e(xt).dealBarType === "quantity-break" ? S() || Number(e(xt).quantity) || 1 : e(xt).dealBarType === "bxgy" ? S() || e(xt).buyQuantity + e(xt).getQuantity : e(xt).dealBarType === "bundle" ? 1 : S() || 1 : S() || 1), yn = h(() => e(C).flatMap(({ variant: H, quantity: ke }) => Array(ke).fill(H.id))), Vn = h(() => {
      if (e(me).length === 0) return [];
      const H = e(me).reduce((Ce, Te) => Math.max(Ce, Te.productIndex), -1), ke = Array.from({ length: H + 1 }, () => "");
      for (const Ce of e(me)) ke[Ce.productIndex] = Ce.text;
      return ke;
    });
    var kr = { selectedVariants: function() {
      return ye().map((H) => ({ variantId: H.id, quantity: H.quantity, properties: H.properties }));
    }, items: ye, pricing: function() {
      const H = e(ge).discountedPrice + e(ae), ke = e(ge).fullPrice + e(R);
      return { discountedPrice: { amount: H / 100, formatted: u()(H) }, fullPrice: { amount: ke / 100, formatted: u()(ke) }, discountedPricePerItem: { amount: e(ge).discountedPricePerItem / 100, formatted: u()(e(ge).discountedPricePerItem) }, fullPricePerItem: { amount: e(ge).fullPricePerItem / 100, formatted: u()(e(ge).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: e(ge).discountedPriceWithoutSellingPlan / 100, formatted: u()(e(ge).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(ge).discountedPricesForSellingPlans.map((Ce) => ({ sellingPlanId: Ce.sellingPlanId, amount: Ce.discountedPrice / 100, formatted: u()(Ce.discountedPrice) })) };
    }, deal: function() {
      return { subscriptionsEnabled: p().subscriptionsEnabled || p().dealBars.some((H) => H.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: H, allItemsSelected: ke } = e(X);
      return !H || ke;
    }, validateItemSelection: function() {
      var H, ke;
      const { requiresItemSelection: Ce, allItemsSelected: Te } = e(X);
      return Ce && !Te ? (xa(!0), { valid: !1, message: ((ke = (H = p().collectionBreaks) == null ? void 0 : H.requireItemSelectionAlert) == null ? void 0 : ke.text) || null }) : (xa(!1), { valid: !0, message: null });
    }, get component() {
      return d();
    }, set component(H) {
      d(H), k();
    }, get config() {
      return g();
    }, set config(H) {
      g(H), k();
    }, get translations() {
      return f();
    }, set translations(H = {}) {
      f(H), k();
    }, get dealBlock() {
      return p();
    }, set dealBlock(H) {
      p(H), k();
    }, get product() {
      return _();
    }, set product(H) {
      _(H), k();
    }, get currentVariantId() {
      return B();
    }, set currentVariantId(H) {
      B(H), k();
    }, get sellingPlanId() {
      return y();
    }, set sellingPlanId(H) {
      y(H), k();
    }, get selectedDealBarId() {
      return w();
    }, set selectedDealBarId(H) {
      w(H), k();
    }, get quantity() {
      return S();
    }, set quantity(H) {
      S(H), k();
    }, get mediaImages() {
      return $();
    }, set mediaImages(H = []) {
      $(H), k();
    }, get otherProducts() {
      return A();
    }, set otherProducts(H = []) {
      A(H), k();
    }, get collectionBreaksProducts() {
      return I();
    }, set collectionBreaksProducts(H = []) {
      I(H), k();
    }, get complementaryProducts() {
      return q();
    }, set complementaryProducts(H = []) {
      q(H), k();
    }, get nativeBundleProductIds() {
      return L();
    }, set nativeBundleProductIds(H = []) {
      L(H), k();
    }, get compact() {
      return z();
    }, set compact(H = !1) {
      z(H), k();
    } }, kt = Pv(), Qt = ve(kt), en = P(Qt);
    let _n;
    var Pn = P(en), Dt = (H) => {
      var ke = xv(), Ce = ve(ke), Te = (bt) => {
        var pt = yv();
        Me(P(pt), () => e(ue)), x(pt), v(bt, pt);
      };
      T(Ce, (bt) => {
        e(ue) && bt(Te);
      });
      var Ye = G(Ce, 2), Ee = (bt) => {
        xu(bt, { get timer() {
          return p().timer;
        } });
      };
      T(Ye, (bt) => {
        p().timerEnabled && p().timer && bt(Ee);
      }), v(H, ke);
    };
    T(Pn, (H) => {
      z() || H(Dt);
    });
    var pe = G(Pn, 2), et = (H) => {
      ws(H, { get subscriptions() {
        return p().subscriptions;
      }, get sellingPlans() {
        return e(lt);
      }, get selectedSellingPlan() {
        return e(nt);
      }, get hideSellingPlanSelector() {
        return e(It);
      }, onChange: rt });
    };
    T(pe, (H) => {
      var ke;
      e(ct) && ((ke = p().subscriptions) == null ? void 0 : ke.position) === "above" && H(et);
    });
    var He = G(pe, 2);
    let se;
    Ut(He, 21, () => p().dealBars, (H) => H.id, (H, ke) => {
      var Ce = De(), Te = ve(Ce), Ye = (bt) => {
        {
          let pt = h(() => e(ke).id === w()), $t = h(() => e(ke).id === w() ? e(Vn) : []);
          du(bt, { get selectedDealBarIndex() {
            return e(St);
          }, get dealBlock() {
            return p();
          }, get dealBar() {
            return e(ke);
          }, get product() {
            return e(ce);
          }, get otherProducts() {
            return e(N);
          }, get complementaryProducts() {
            return e(re);
          }, get selected() {
            return e(pt);
          }, get currentVariantId() {
            return B();
          }, get componentId() {
            return b;
          }, get sellingPlan() {
            return e(ut);
          }, onProgressiveGiftsChange: je, onDealBarSelect: qe, onDealBarDeselect: be, onVariantSelect: ze, onVariantsChange: Oe, onPersonalisationsChange: it, get personalisationInitialValues() {
            return e($t);
          } });
        }
      }, Ee = (bt) => {
        var pt = De(), $t = ve(pt), tn = (At) => {
          {
            let Kt = h(() => e(ke).id === w()), jt = h(() => {
              var Et;
              return (Et = e(nt)) == null ? void 0 : Et.id;
            }), ln = h(() => e(ke).id === w() ? e(Vn) : []);
            Iu(At, { get dealBlock() {
              return p();
            }, get dealBar() {
              return e(ke);
            }, get selectedDealBarIndex() {
              return e(St);
            }, get otherProducts() {
              return e(N);
            }, get complementaryProducts() {
              return e(re);
            }, get componentId() {
              return b;
            }, get selected() {
              return e(Kt);
            }, get sellingPlanId() {
              return e(jt);
            }, onProgressiveGiftsChange: je, onDealBarSelect: qe, onDealBarDeselect: be, onVariantsChange: dt, onPersonalisationsChange: it, get personalisationInitialValues() {
              return e(ln);
            } });
          }
        }, Bt = (At) => {
          var Kt = De(), jt = ve(Kt), ln = (Nt) => {
            {
              let kn = h(() => e(ke).id === w() ? S() && Number(S()) : void 0), mn = h(() => e(ke).id === w()), hi = h(() => e(ke).id === w() ? e(Vn) : []);
              pu(Nt, { get dealBlock() {
                return p();
              }, get dealBar() {
                return e(ke);
              }, get selectedDealBarIndex() {
                return e(St);
              }, get product() {
                return e(ce);
              }, get collectionBreaksProducts() {
                return e(Q);
              }, get otherProducts() {
                return e(N);
              }, get complementaryProducts() {
                return e(re);
              }, get customQuantity() {
                return e(kn);
              }, get selected() {
                return e(mn);
              }, onProgressiveGiftsChange: je, get currentVariantId() {
                return B();
              }, get componentId() {
                return b;
              }, get globalSellingPlan() {
                return e(ut);
              }, onDealBarSelect: qe, onDealBarDeselect: be, onVariantSelect: ze, onVariantsChange: xe, onPersonalisationsChange: it, get personalisationInitialValues() {
                return e(hi);
              } });
            }
          }, Et = (Nt) => {
            {
              let kn = h(() => e(ke).id === w() ? S() && Number(S()) : void 0), mn = h(() => e(ke).id === w()), hi = h(() => e(ke).id === w() ? e(Vn) : []);
              ps(Nt, { get selectedDealBarIndex() {
                return e(St);
              }, get dealBlock() {
                return p();
              }, get dealBar() {
                return e(ke);
              }, get product() {
                return e(ce);
              }, get otherProducts() {
                return e(N);
              }, get complementaryProducts() {
                return e(re);
              }, get customQuantity() {
                return e(kn);
              }, get selected() {
                return e(mn);
              }, get currentVariantId() {
                return B();
              }, get componentId() {
                return b;
              }, get globalSellingPlan() {
                return e(ut);
              }, onProgressiveGiftsChange: je, onDealBarSelect: qe, onDealBarDeselect: be, onVariantSelect: ze, onVariantsChange: Ne, onPersonalisationsChange: it, get personalisationInitialValues() {
                return e(hi);
              } });
            }
          };
          T(jt, (Nt) => {
            !p().collectionBreaksEnabled || !p().collectionBreaks || e(ke).dealBarType && e(ke).dealBarType !== "quantity-break" && e(ke).dealBarType !== "bxgy" ? Nt(Et, !1) : Nt(ln);
          }, !0), v(At, Kt);
        };
        T($t, (At) => {
          e(ke).dealBarType === "sku" ? At(tn) : At(Bt, !1);
        }, !0), v(bt, pt);
      };
      T(Te, (bt) => {
        e(ke).dealBarType === "bundle" ? bt(Ye) : bt(Ee, !1);
      }), v(H, Ce);
    }), x(He);
    var Ge = G(He, 2), Qe = (H) => {
      Li(H, { get product() {
        return e(ot);
      }, get productPersonalisation() {
        return e(xt).productPersonalisation;
      }, get selectedVariantIds() {
        return e(yn);
      }, get quantity() {
        return e(un);
      }, get addPersonalisationModal() {
        return p().addPersonalisationModal;
      }, onPersonalisationsChange: it, get initialValues() {
        return e(Vn);
      } });
    };
    T(Ge, (H) => {
      var ke;
      e(rn) && ((ke = e(xt)) != null && ke.productPersonalisation) && H(Qe);
    });
    var Re = G(Ge, 2), We = (H) => {
      ws(H, { get subscriptions() {
        return p().subscriptions;
      }, get sellingPlans() {
        return e(lt);
      }, get selectedSellingPlan() {
        return e(nt);
      }, get hideSellingPlanSelector() {
        return e(It);
      }, onChange: rt });
    };
    T(Re, (H) => {
      var ke;
      e(ct) && ((ke = p().subscriptions) == null ? void 0 : ke.position) === "below" && H(We);
    });
    var zt = G(Re, 2), Ot = (H) => {
      var ke = wv();
      Me(P(ke), () => o()("system.out_of_stock")), x(ke), v(H, ke);
    };
    T(zt, (H) => {
      e(Se) && (e(C).length > 1 || e(C)[0].quantity > 1) && H(Ot);
    });
    var Mt = G(zt, 2), _t = (H) => {
      yu(H, { get checkboxUpsells() {
        return p().checkboxUpsells;
      }, get dealBlock() {
        return p();
      }, get otherProducts() {
        return e(N);
      }, get complementaryProducts() {
        return e(re);
      }, get dealSellingPlan() {
        return e(nt);
      }, get dealBarQuantity() {
        return e(Ft);
      }, onChange: st });
    };
    T(Mt, (H) => {
      !z() && p().checkboxUpsellsEnabled && p().checkboxUpsells && H(_t);
    });
    var vt = G(Mt, 2), Wt = (H) => {
      ku(H, { get progressiveGifts() {
        return p().progressiveGifts;
      }, get dealBlock() {
        return p();
      }, get otherProducts() {
        return e(N);
      }, get selectedDealBarIndex() {
        return e(St);
      }, onChange: je, onUnlock: Ie });
    };
    T(vt, (H) => {
      p().progressiveGiftsEnabled && p().progressiveGifts && p().progressiveGifts.layout !== "deal-bar" && H(Wt);
    });
    var Lt = G(vt, 2), Jt = (H) => {
      {
        let ke = h(() => e(X).missingItemsCount > 0);
        Du(H, { get collectionBreaks() {
          return p().collectionBreaks;
        }, get hasItemsToSelect() {
          return e(ke);
        } });
      }
    };
    T(Lt, (H) => {
      p().collectionBreaksEnabled && H(Jt);
    }), x(en), x(Qt);
    var an = G(Qt, 2), Sn = (H) => {
      wu(H, { get shopCustomStyles() {
        return g().shopCustomStyles;
      }, get customStyles() {
        return p().customStyles;
      }, get dealBlockId() {
        return p().id;
      } });
    };
    T(an, (H) => {
      p().customStylesEnabled && H(Sn);
    }), fe((H, ke, Ce) => {
      var Te;
      _n = qt(en, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, _n, H), Pe(en, "data-deal-block-id", p().id), Pe(en, "data-ab-test-variant-id", p().abTestVariantId), Pe(en, "data-ab-test-variant", ke), Pe(en, "data-selling-plan-id", (Te = e(nt)) == null ? void 0 : Te.id), Ht(en, e(Ve)), se = qt(He, 1, "kaching-bundles__bars", null, se, Ce);
    }, [() => ({ "kaching-bundles__block--horizontal": p().blockLayout === "horizontal", "kaching-bundles__block--grid": p().blockLayout === "grid", "kaching-bundles__block--plain": p().blockLayout === "plain" }), () => p().abTestVariantNumber ? bc(p().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": p().blockLayout === "horizontal", "kaching-bundles__bars--grid": p().blockLayout === "grid", "kaching-bundles__bars--plain": p().blockLayout === "plain" })]), v(t, kt);
    var Cn = Ze(kr);
    return c(), Cn;
  }
  customElements.define("kaching-bundles-block", Le(zu, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, component: {} }, [], ["selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this, this.innerHTML && (_r(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var Sv = D('<div class="kaching-bundles"><!></div>');
  function $u(t, n) {
    Je(n, !0);
    const r = m(n, "config", 7), i = m(n, "product", 7), l = m(n, "translations", 7), s = m(n, "addPersonalisationModal", 7), { setConfig: u } = Fi(r()), { setTranslations: o } = Ti(l());
    Xe(() => {
      u(r()), o(l());
    });
    const a = h(() => {
      var g, f;
      return (f = (g = i()) == null ? void 0 : g.variants) != null && f[0] ? [{ variant: i().variants[0], index: 0 }, { variant: i().variants[0], index: 1 }] : [];
    });
    var c = { get config() {
      return r();
    }, set config(g) {
      r(g), k();
    }, get product() {
      return i();
    }, set product(g) {
      i(g), k();
    }, get translations() {
      return l();
    }, set translations(g) {
      l(g), k();
    }, get addPersonalisationModal() {
      return s();
    }, set addPersonalisationModal(g) {
      s(g), k();
    } }, d = Sv();
    return gs(P(d), { get product() {
      return i();
    }, get selectedVariants() {
      return e(a);
    }, get addPersonalisationModal() {
      return s();
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), x(d), v(t, d), Ze(c);
  }
  customElements.define("kaching-bundles-personalisation-modal", Le($u, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this;
    }
  }));
  function Cv(t, n) {
    n().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var Bv = D('<img class="kaching-bundles-sticky-atc__image"/>'), Iv = D('<button class="kaching-bundles-sticky-atc__button"><!></button>'), Dv = D('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function Au(t, n) {
    var r;
    Je(n, !0);
    const i = () => $e(wa, "$selectedDealBarStore", s), l = () => $e(_, "$translate", s), [s, u] = Pt(), o = m(n, "component", 7), a = m(n, "config", 7), c = m(n, "stickyAtc", 7), d = m(n, "translations", 7), g = m(n, "product", 7), f = m(n, "dealBlock", 7), { setConfig: p } = Fi(a()), { translate: _, setTranslations: B } = Ti(d()), { formatPrice: y, setMoneyFormat: w } = pa(a().moneyFormat, (r = f()) == null ? void 0 : r.showPricesWithoutDecimals);
    Xe(() => {
      p(a());
    }), Xe(() => {
      var V;
      w(a().moneyFormat, !!((V = f()) != null && V.showPricesWithoutDecimals));
    }), Xe(() => {
      B(d());
    });
    const S = h(() => ((V) => pn({ "kaching-bundles-sticky-atc-background-color": Fe(V.backgroundColor), "kaching-bundles-sticky-atc-title-color": Fe(V.titleColor), "kaching-bundles-sticky-atc-button-color": Fe(V.buttonColor), "kaching-bundles-sticky-atc-button-text-color": Fe(V.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": V.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": V.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": Hn(V.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": Un(V.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": Hn(V.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": Un(V.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": V.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": V.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": V.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": V.buttonCornerRadius + "px" }))(c())), $ = h(() => {
      var V;
      return ((V = i()) == null ? void 0 : V.totalFullPrice) || g().variants[0].compareAtPrice || g().variants[0].price;
    }), A = h(() => {
      var V;
      return ((V = i()) == null ? void 0 : V.totalDiscountedPrice) || g().variants[0].price;
    }), I = h(() => {
      var V;
      return ((V = i()) == null ? void 0 : V.quantity) || 1;
    }), q = h(() => vn({ priceFormatter: $e(y, "$formatPrice", s), product: g(), totalFullPrice: e($), totalDiscountedPrice: e(A), quantity: e(I), unitQuantity: null })), L = h(() => e(q)(l()(c().title)));
    var z = { get component() {
      return o();
    }, set component(V) {
      o(V), k();
    }, get config() {
      return a();
    }, set config(V) {
      a(V), k();
    }, get stickyAtc() {
      return c();
    }, set stickyAtc(V) {
      c(V), k();
    }, get translations() {
      return d();
    }, set translations(V) {
      d(V), k();
    }, get product() {
      return g();
    }, set product(V) {
      g(V), k();
    }, get dealBlock() {
      return f();
    }, set dealBlock(V) {
      f(V), k();
    } }, ce = Dv(), N = P(ce), re = P(N), Q = P(re), Y = (V) => {
      var ee = Bv();
      fe(() => {
        Pe(ee, "src", g().image), Pe(ee, "alt", g().title);
      }), v(V, ee);
    };
    T(Q, (V) => {
      c().productPhotoSize > 0 && V(Y);
    });
    var K = G(Q, 2);
    Me(P(K), () => e(L)), x(K), x(re);
    var U = G(re, 2), J = (V) => {
      var ee = Iv();
      ee.__click = [Cv, o], Me(P(ee), () => l()(c().buttonText)), x(ee), v(V, ee);
    };
    T(U, (V) => {
      c().buttonText && V(J);
    }), x(N), x(ce), fe(() => Ht(N, e(S))), v(t, ce);
    var Z = Ze(z);
    return u(), Z;
  }
  $n(["click"]), customElements.define("kaching-bundles-sticky-atc", Le(Au, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (t) => class extends t {
    constructor() {
      super(), on(this, "component"), this.component = this;
    }
  }));
  const zv = Fc, $v = zc, Av = zu, qv = $u, Mv = Au, Vv = iu.element, Gv = zv.element, Tv = $v.element, Fv = Av.element, Ov = qv.element, Lv = Mv.element;
  return Ct.ChooseMultipleGifts = Tv, Ct.ChooseProduct = Gv, Ct.DealBar = Vv, Ct.DealBlock = Fv, Ct.PersonalisationModal = Ov, Ct.StickyAtc = Lv, Object.defineProperty(Ct, Symbol.toStringTag, { value: "Module" }), Ct;
})({});
