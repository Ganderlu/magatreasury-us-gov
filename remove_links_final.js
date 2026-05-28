const fs = require('fs');
const file = 'c:/project/official/medallions/collections/medallions.html';
let content = fs.readFileSync(file, 'utf8');

// The goal is to remove all <a> tags that wrap product titles/names, 
// and potentially images if they are clickable, leaving only the "Add to cart" button clickable.

// 1. Convert all <a> tags within card headings to <span>
// This handles the product titles.
content = content.replace(/<a\s+href="\/products\/[^"]*"\s+id="([^"]*)"\s+class="full-unstyled-link"\s+aria-labelledby="([^"]*)"\s*>([\s\S]*?)<\/a>/gi, (match, id, aria, title) => {
    return `<span id="${id}" class="full-unstyled-link" aria-labelledby="${aria}">${title}</span>`;
});

// 2. Remove any other <a> tags that might be wrapping product cards or images
// Often there's a "full card link" or similar.
// Looking at the provided snippet, there are card__inner, card__media, etc.
// If there are any <a> tags wrapping the media or card content, we should convert them or remove them.

// Based on the provided snippet, the product name was inside <h3> and was an <a>.
// I've already converted those to <span>.

fs.writeFileSync(file, content);
console.log('Successfully removed clickable product titles from medallions.html.');
