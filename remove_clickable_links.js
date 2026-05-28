const fs = require('fs');
const file = 'c:/project/official/medallions/collections/medallions.html';
let content = fs.readFileSync(file, 'utf8');

// Pattern for links in card headings that we want to turn into spans
// <h3 class="card__heading ..."><a href="..." ...>TITLE</a></h3>
// We want: <h3 class="card__heading ..."><span ...>TITLE</span></h3>

// Replace the anchor tags within card headings with span tags
// We look for <a> tags inside <h3 class="card__heading">
content = content.replace(/(<h3[^>]*class="[^"]*card__heading[^"]*"[^>]*>)\s*<a\s+href="\/products\/[^"]*"\s+id="([^"]*)"\s+class="full-unstyled-link"\s+aria-labelledby="([^"]*)"\s*>([\s\S]*?)<\/a>\s*(<\/h3>)/gi, (match, h3Start, id, aria, title, h3End) => {
    return `${h3Start}<span id="${id}" class="full-unstyled-link" aria-labelledby="${aria}">${title}</span>${h3End}`;
});

fs.writeFileSync(file, content);
console.log('Successfully updated medallions.html to remove clickable product titles/prices.');
