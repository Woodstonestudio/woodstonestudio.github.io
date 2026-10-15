// IndexNow + sitemap lastmod: içeriği değişen sayfaları Bing, Yandex vb. motorlara bildirir
// ve sitemap.xml'deki <lastmod> değerini sayfanın gerçek içerik değişim tarihi yapar.
//
//   node scripts/indexnow.mjs prepare   → build sonrası (deploy'dan ÖNCE)
//   node scripts/indexnow.mjs submit    → deploy SONRASI
//
// prepare: out/ içindeki her sayfanın görünen metninden hash üretir, out/indexnow-state.json
// olarak yayına koyar; canlıdaki önceki state ile karşılaştırıp değişen URL'leri
// indexnow-urls.txt dosyasına yazar. Yalnızca sitemap'teki URL'ler gönderilir.
// submit: indexnow-urls.txt'deki URL'leri tek istekte api.indexnow.org'a yollar.
// Not: Google IndexNow'a katılmıyor; Google için sitemap + Search Console geçerli.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative } from "node:path";

const HOST = "woodstonestudio.com";
const BASE = `https://${HOST}`;
const KEY = "b6ba1db4f0787728274aa6db340c5b86";
const OUT = "out";
const STATE_FILE = "indexnow-state.json";
const URLS_FILE = "indexnow-urls.txt";

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "_next") continue;
      files.push(...walk(p));
    } else if (name.endsWith(".html")) files.push(p);
  }
  return files;
}

function fileToUrl(file) {
  const rel = relative(OUT, file).replace(/\\/g, "/").replace(/\.html$/, "");
  if (rel === "index") return `${BASE}/`;
  return `${BASE}/${rel.replace(/\/index$/, "")}`;
}

// Build'den build'e değişen kimlikleri (script, style, attribute) atıp yalnızca görünen metni hash'ler
function contentHash(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(text).digest("hex").slice(0, 16);
}

function today() {
  // Europe/Istanbul tarihi (YYYY-MM-DD)
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(new Date());
}

// Sitemap'teki her <url> için <lastmod>'u gerçek içerik değişim tarihiyle yazar
function writeLastmod(sitemap, state) {
  return sitemap.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
    const loc = (inner.match(/<loc>([^<]+)<\/loc>/) || [])[1]?.trim();
    const d = loc && state[loc]?.d;
    if (!d) return block;
    const cleaned = inner.replace(/\s*<lastmod>[^<]*<\/lastmod>/g, "");
    return "<url>" + cleaned.replace(/(<loc>[^<]+<\/loc>)/, `$1\n<lastmod>${d}</lastmod>`) + "</url>";
  });
}

async function prepare() {
  const sitemapPath = join(OUT, "sitemap.xml");
  const sitemap = readFileSync(sitemapPath, "utf8");
  const inSitemap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
  // Next'in yazdığı tarih (ör. blog yayın tarihi): ilk kayıtta geçmişi korumak için
  const nextDate = {};
  for (const m of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1]?.trim();
    const lm = (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
    if (loc && lm) nextDate[loc] = lm.slice(0, 10);
  }

  let prev = null;
  try {
    const res = await fetch(`${BASE}/${STATE_FILE}`, { cache: "no-store" });
    if (res.ok) prev = await res.json();
  } catch {}

  // state: { url: { h: içerik hash'i, d: içeriğin son değiştiği gün } }
  // Eski biçim { url: hash } da okunur (geçiş: tarih bilinmiyorsa bugün)
  const now = today();
  const state = {};
  const changed = [];
  for (const f of walk(OUT)) {
    const url = fileToUrl(f);
    if (!inSitemap.has(url)) continue;
    const h = contentHash(readFileSync(f, "utf8"));
    const p = prev?.[url];
    const ph = typeof p === "string" ? p : p?.h;
    const pd = typeof p === "object" && p ? p.d : null;
    if (ph === h) state[url] = { h, d: pd || now };
    else {
      state[url] = { h, d: p ? now : nextDate[url] || now };
      changed.push(url);
    }
  }
  writeFileSync(join(OUT, STATE_FILE), JSON.stringify(state));
  writeFileSync(sitemapPath, writeLastmod(sitemap, state));

  writeFileSync(URLS_FILE, changed.join("\n"));
  console.log(`IndexNow: ${Object.keys(state).length} sayfa, ${changed.length} değişmiş${prev ? "" : " (ilk çalıştırma)"}`);
  for (const u of changed.slice(0, 50)) console.log("  " + u);
}

async function submit() {
  if (!existsSync(URLS_FILE)) return console.log("IndexNow: URL listesi yok, atlandı");
  const urlList = readFileSync(URLS_FILE, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
  if (!urlList.length) return console.log("IndexNow: değişen sayfa yok");

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList: urlList.slice(0, 10000) }),
  });
  console.log(`IndexNow: ${urlList.length} URL gönderildi → HTTP ${res.status}`);
  // 200/202 başarılı. Hata deploy'u bozmasın diye yalnızca uyarı verilir.
  if (res.status >= 300) console.log("::warning::IndexNow yanıtı: " + res.status + " " + (await res.text()).slice(0, 300));
}

const cmd = process.argv[2];
if (cmd === "prepare") await prepare();
else if (cmd === "submit") await submit();
else console.log("Kullanım: node scripts/indexnow.mjs prepare|submit");
