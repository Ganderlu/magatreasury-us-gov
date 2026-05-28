const fs = require("fs");
const path = require("path");

const patterns = [
  { search: /120X QFS GOLD BILLS/g, replace: "120X QFS GOLD BILLS" },
  { search: /180X QFS GOLD BILLS/g, replace: "180X QFS GOLD BILLS" },
  { search: /25X QFS GOLD BILLS/g, replace: "25X QFS GOLD BILLS" },
  { search: /60X QFS GOLD BILLS/g, replace: "60X QFS GOLD BILLS" },
  { search: /400X QFS GOLD BILLS/g, replace: "400X QFS GOLD BILLS" },
  { search: /150X QFS GOLD BILLS/g, replace: "150X QFS GOLD BILLS" },
  { search: /10X QFS GOLD BILLS/g, replace: "10X QFS GOLD BILLS" },
  { search: /90X QFS GOLD BILLS/g, replace: "90X QFS GOLD BILLS" },
  // Generic pattern for "X" followed by digits and "QFS GOLD BILLS"
  { search: /X(\d+) QFS GOLD BILLS/g, replace: "$1X QFS GOLD BILLS" },
  // Also handle "X" followed by digits and other product names if they exist
  { search: /X(\d+) Golden QFS Coins/g, replace: "$1X Golden QFS Coins" },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".html", ".htm", ".js", ".json", ".atom", ".oembed"].includes(ext)) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk("c:/project/official");

files.forEach((file) => {
  // Skip binary or huge files if any
  if (file.includes("node_modules") || file.includes(".git")) return;

  let content = fs.readFileSync(file, "utf8");
  let changed = false;

  patterns.forEach((p) => {
    if (p.search.test(content)) {
      content = content.replace(p.search, p.replace);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
