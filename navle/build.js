#!/usr/bin/env node
/**
 * Bundles index.html + data/*.js into a single self-contained file at
 * dist/navle-hub.html — for offline use, sharing, or embedding where a
 * multi-file deploy isn't practical.
 *
 * Usage:  node build.js
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const bundled = html.replace(
  /<script src="data\/([^"]+)"><\/script>/g,
  (_, file) => {
    const src = fs.readFileSync(path.join(root, 'data', file), 'utf8');
    return '<script>\n/* ---- data/' + file + ' ---- */\n' + src + '\n</script>';
  }
);

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
const out = path.join(root, 'dist', 'navle-hub.html');
fs.writeFileSync(out, bundled);

// The PDFs stay external — inlining ~3 MB of base64 would bloat the bundle.
// Copy them beside it so the document viewer works from dist/ as well.
const docsSrc = path.join(root, 'docs');
if (fs.existsSync(docsSrc)) {
  const docsOut = path.join(root, 'dist', 'docs');
  fs.mkdirSync(docsOut, { recursive: true });
  for (const f of fs.readdirSync(docsSrc)) {
    fs.copyFileSync(path.join(docsSrc, f), path.join(docsOut, f));
  }
  console.log(`Copied ${fs.readdirSync(docsSrc).length} source PDFs to dist/docs/`);
}

const kb = (Buffer.byteLength(bundled) / 1024).toFixed(1);
console.log(`Built ${path.relative(root, out)} (${kb} KB)`);
