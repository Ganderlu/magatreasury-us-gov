const fs = require('fs');
const path = require('path');

const files = [
  'c:/project/official/maga/products/qfs-gold-bill.html',
  'c:/project/official/sellers/collections.html',
  'c:/project/official/sellers/collections/medallions.html',
  'c:/project/official/policies/terms-of-service.html',
  'c:/project/official/policies/shipping-policy.html',
  'c:/project/official/policies/refund-policy.html',
  'c:/project/official/policies/privacy-policy.html',
  'c:/project/official/policies/contact.html',
  'c:/project/official/maga/products/qfs-gold-bill-1.html',
  'c:/project/official/apparel/collections/apparel.html',
  'c:/project/official/continue/collections/all.html',
  'c:/project/official/accessorie/collections/accessories.html',
  'c:/project/official/medallions/collections/medallions.html',
  'c:/project/official/sellers/collections/frontpage.html',
  'c:/project/official/sellers/collections/all.html',
  'c:/project/official/sellers/collections/apparel.html',
  'c:/project/official/sellers/collections/accessories.html'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  // 1. Change "Sign up" to "Continue" in buttons - handles multiline and whitespace
  // Matches <button ...> followed by any whitespace, "Sign up", and more whitespace before </button>
  content = content.replace(/(<button[^>]*>)\s*Sign up\s*(<\/button>)/gi, '$1Continue$2');

  // 2. Double check the script logic for saving to Firebase
  // Ensure we didn't duplicate the fetch call if the script runs twice
  if (content.includes('fetch(\'/api/subscribe\'') && !content.includes('Sign up')) {
      console.log(`File ${file} already seems to have the fetch logic and "Continue" button.`);
  }

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
