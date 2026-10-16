// Build sonrası HTML ince ayarı (out/ içindeki tüm sayfalar).
//
// Next.js eski tarayıcılar için <head>'e "noModule" bir polyfills betiği koyar. Modern tarayıcılar
// bu betiği zaten indirmez; ama async/defer olmadığı için tarayıcı denetim araçları (Ruescan,
// Lighthouse türevleri) onu "çizimi engelleyen betik" sayıyor. defer eklemek eski tarayıcıda da
// çalışmasını bozmaz (sayfa ayrıştırıldıktan sonra çalışır) ve uyarıyı kaldırır.
//
//   node scripts/postbuild-html.mjs   → build'den sonra

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== "_next") files.push(...walk(p));
    } else if (name.endsWith(".html")) files.push(p);
  }
  return files;
}

let changed = 0;
for (const f of walk(OUT)) {
  const html = readFileSync(f, "utf8");
  // async veya defer taşımayan, src'li her betiğe defer ekle (inline betiklere dokunma)
  const next = html.replace(/<script(?![^>]*\b(?:async|defer)\b)([^>]*\bsrc=)/g, "<script defer$1");
  if (next !== html) {
    writeFileSync(f, next);
    changed++;
  }
}
console.log(`postbuild-html: ${changed} sayfada engelleyen betiğe defer eklendi`);
