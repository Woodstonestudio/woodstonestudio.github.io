// Eski (silinmiş) adresler için yönlendirme sayfaları üretir.
//
// GitHub Pages sunucu tarafı 301 desteklemez. Bu yüzden build sonrası out/ içine, eski adreste
// anında yeni adrese giden küçük bir sayfa yazılır (meta refresh 0 + canonical + JS). Google
// gecikmesiz meta refresh'i kalıcı yönlendirme sayar; botların 404 alıp tarama hakkını boşa
// harcaması biter. Cloudflare metriklerinde Googlebot'un en çok 404 aldığı adresler bunlardı:
// silinen Arnavutça bölüm (/sq/...) ve kaldırılan Web3 ürün sayfaları.
//
//   node scripts/legacy-redirects.mjs   → build'den sonra, IndexNow'dan önce
//
// Var olan bir sayfanın üzerine asla yazmaz; hedefi build'de olmayan kural atlanır ve uyarı verir.

import { existsSync, mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

const OUT = "out";
const BASE = "https://woodstonestudio.com";

/** eski yol → yeni yol */
const MAP = {
  // Arnavutça bölüm (Eylül 2026'da kaldırıldı) → İngilizce karşılıkları
  "/sq": "/en",
  "/sq/dizajn-web": "/en/web-design",
  "/sq/aplikacione-mobile": "/en/mobile-apps",
  "/sq/zhvillim-saas": "/en/saas-development",
  "/sq/inteligjence-artificiale": "/en/ai-solutions",
  "/sq/media-sociale": "/en/social-media",
  "/sq/pyetje": "/en/faq",
  "/sq/rreth-nesh": "/en/about",
  "/sq/blog": "/en/blog",
  "/sq/alphaos": "/en/work",
  "/sq/authorai": "/en/work",
  "/sq/contractory": "/en/work",
  // Kaldırılan Web3 ürün sayfaları
  "/en/alphaos": "/en/work",
  "/en/authorai": "/en/work",
  "/en/contractory": "/en/work",
  "/alphaos": "/calismalar",
  "/authorai": "/calismalar",
  "/contractory": "/calismalar",
};

// Arnavutça blog yazıları: İngilizcesi hâlâ varsa ona, yoksa İngilizce blog listesine
const OLD_SQ_POSTS = [
  "sosyal-medya-yonetimi-hizmetleri",
  "web-sitesi-maliyeti",
  "mvp-nedir",
  "yapay-zeka-kucuk-isletme",
  "faqe-interneti-shqiperi-cmimi",
  "biznesi-online-shqiperi",
  "aplikacion-mobile-shqiperi",
];

const fileFor = (path) => join(OUT, path === "/" ? "index.html" : `${path.replace(/^\//, "")}.html`);
const exists = (path) => existsSync(fileFor(path));

for (const slug of OLD_SQ_POSTS) {
  MAP[`/sq/blog/${slug}`] = exists(`/en/blog/${slug}`) ? `/en/blog/${slug}` : "/en/blog";
  // İngilizcesi kaldırılmış eski yazılar da 404 veriyordu
  if (!exists(`/en/blog/${slug}`)) MAP[`/en/blog/${slug}`] = "/en/blog";
}

function page(target) {
  const url = BASE + target;
  return `<!doctype html><html><head><meta charset="utf-8"><title>WoodstoneStudio</title>` +
    `<link rel="canonical" href="${url}"><meta http-equiv="refresh" content="0; url=${url}">` +
    `<script>location.replace(${JSON.stringify(url)})</script></head>` +
    `<body><a href="${url}">${url}</a></body></html>`;
}

if (!existsSync(OUT) || !readdirSync(OUT).length) {
  console.error("legacy-redirects: out/ yok — önce build alın");
  process.exit(1);
}

let written = 0;
const done = [];
for (const [from, to] of Object.entries(MAP)) {
  if (exists(from)) {
    console.log(`  atlandı (sayfa zaten var): ${from}`);
    continue;
  }
  if (!exists(to)) {
    console.log(`::warning::legacy-redirects: hedef build'de yok, atlandı: ${from} → ${to}`);
    continue;
  }
  const f = fileFor(from);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, page(to));
  done.push([f, to]);
  written++;
}
// Aynı adla bir klasör de varsa (ör. /sq ve /sq/...), sunucu /sq/ açabilir: klasöre index.html de yaz
for (const [f, to] of done) {
  const dir = f.replace(/\.html$/, "");
  if (existsSync(dir) && !existsSync(join(dir, "index.html"))) writeFileSync(join(dir, "index.html"), page(to));
}
console.log(`legacy-redirects: ${written} eski adres yönlendirildi`);
