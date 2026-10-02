import type { Locale } from "@/components/service-page";
import { BLOG_BASE, postsForLocale } from "@/lib/blog";

const BASE = "https://woodstonestudio.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Blog için RSS 2.0 akışı (statik export'ta build sırasında üretilir). */
export function buildRss(locale: Locale): string {
  const list = [...postsForLocale(locale)].sort((a, b) =>
    (b.updated ?? b.date).localeCompare(a.updated ?? a.date),
  );
  const home = locale === "tr" ? `${BASE}/` : `${BASE}/en`;
  const title = locale === "tr" ? "WoodstoneStudio Blog" : "WoodstoneStudio Blog (English)";
  const desc =
    locale === "tr"
      ? "Web sitesi, mobil uygulama, yapay zekâ ve dijital büyüme üzerine rehberler."
      : "Guides on websites, mobile apps, AI and digital growth.";
  const items = list
    .map((p) => {
      const url = `${BASE}${BLOG_BASE[locale]}/${p.slug}`;
      return `    <item>
      <title>${esc(p.title[locale])}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category[locale])}</category>
      <description>${esc(p.excerpt[locale])}</description>
    </item>`;
    })
    .join("\n");
  const last = list[0] ? new Date(list[0].updated ?? list[0].date).toUTCString() : new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${home}</link>
    <atom:link href="${BASE}${locale === "tr" ? "" : "/en"}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${desc}</description>
    <language>${locale === "tr" ? "tr-TR" : "en"}</language>
    <lastBuildDate>${last}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}
