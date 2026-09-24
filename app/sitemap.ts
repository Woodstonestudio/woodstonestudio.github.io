import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

// Statik export için gerekli: sitemap build sırasında üretilir.
export const dynamic = "force-static";

const BASE = "https://woodstonestudio.com";

// Sabit sayfalar: [TR yolu, EN yolu, öncelik]
const PAGES: [string, string, number][] = [
  ["/", "/en", 1.0],
  ["/web-tasarim", "/en/web-design", 0.9],
  ["/mobil-uygulama", "/en/mobile-apps", 0.9],
  ["/saas-gelistirme", "/en/saas-development", 0.9],
  ["/yapay-zeka", "/en/ai-solutions", 0.9],
  ["/sosyal-medya", "/en/social-media", 0.9],
  ["/e-ticaret", "/en/ecommerce", 0.9],
  ["/seo", "/en/seo", 0.9],
  ["/calismalar", "/en/work", 0.8],
  ["/hakkimizda", "/en/about", 0.7],
  ["/sss", "/en/faq", 0.7],
  ["/blog", "/en/blog", 0.8],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [tr, en, priority] of PAGES) {
    const languages = { tr: BASE + (tr === "/" ? "" : tr), en: BASE + en };
    entries.push({ url: BASE + (tr === "/" ? "/" : tr), changeFrequency: "monthly", priority, alternates: { languages } });
    entries.push({ url: BASE + en, changeFrequency: "monthly", priority, alternates: { languages } });
  }

  // Blog yazıları: yalnızca yayınlandıkları dillerde listelenir
  for (const p of posts) {
    const hasTr = p.locales.includes("tr");
    const hasEn = p.locales.includes("en");
    const languages: Record<string, string> = {};
    if (hasTr) languages.tr = `${BASE}/blog/${p.slug}`;
    if (hasEn) languages.en = `${BASE}/en/blog/${p.slug}`;
    const alternates = hasTr && hasEn ? { languages } : undefined;
    if (hasTr) entries.push({ url: languages.tr, lastModified: p.date, changeFrequency: "yearly", priority: 0.6, alternates });
    if (hasEn) entries.push({ url: languages.en, lastModified: p.date, changeFrequency: "yearly", priority: 0.6, alternates });
  }

  return entries;
}
