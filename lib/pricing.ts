/**
 * Fiyat hesaplayıcı — TEK AYAR DOSYASI.
 * Rakamları buradan değiştir; sayfa ve hesap otomatik güncellenir.
 * TR pazarı TL, EN pazarı EUR. Tüm rakamlar "tahmini aralık", teklif değil.
 */

export type Locale = "tr" | "en";
export type ProjectKey = "landing" | "corporate" | "ecommerce" | "booking" | "mobile" | "saas";
export type FeatureKey =
  | "booking"
  | "blog"
  | "payment"
  | "crm"
  | "content"
  | "seo"
  | "photos"
  | "care";

export interface Range {
  min: number;
  max: number;
}

/** Proje tipi taban fiyatı (tek dil, standart sayfa sayısı) */
export const BASE: Record<Locale, Record<ProjectKey, Range>> = {
  tr: {
    landing: { min: 15000, max: 25000 },
    corporate: { min: 30000, max: 50000 },
    ecommerce: { min: 50000, max: 100000 },
    booking: { min: 20000, max: 35000 },
    mobile: { min: 150000, max: 300000 },
    saas: { min: 200000, max: 400000 },
  },
  en: {
    landing: { min: 500, max: 800 },
    corporate: { min: 700, max: 1200 },
    ecommerce: { min: 1000, max: 2000 },
    booking: { min: 400, max: 700 },
    mobile: { min: 3000, max: 6000 },
    saas: { min: 4000, max: 8000 },
  },
};

/** Sayfa sayısı çarpanı (sadece site tipi projelerde) */
export const PAGES_MULT: Record<string, number> = {
  "1-5": 1,
  "6-10": 1.25,
  "11-20": 1.6,
  "20+": 2,
};

/** Her ek dil taban fiyata bu oranda ekler */
export const LANG_EXTRA = 0.15;

/** Ek özellikler (sabit tutar) */
export const FEATURES: Record<Locale, Record<FeatureKey, Range>> = {
  tr: {
    booking: { min: 8000, max: 15000 },
    blog: { min: 4000, max: 8000 },
    payment: { min: 8000, max: 15000 },
    crm: { min: 6000, max: 15000 },
    content: { min: 6000, max: 15000 },
    seo: { min: 8000, max: 15000 },
    photos: { min: 5000, max: 10000 },
    care: { min: 0, max: 0 }, // aylık, ayrı gösterilir
  },
  en: {
    booking: { min: 150, max: 300 },
    blog: { min: 80, max: 150 },
    payment: { min: 150, max: 300 },
    crm: { min: 100, max: 300 },
    content: { min: 100, max: 300 },
    seo: { min: 150, max: 300 },
    photos: { min: 80, max: 150 },
    care: { min: 0, max: 0 },
  },
};

/** Aylık bakım/destek (ayrı satır) */
export const CARE_MONTHLY: Record<Locale, Range> = {
  tr: { min: 2500, max: 6000 },
  en: { min: 50, max: 120 },
};

/** Bu tiplerde aralık değil "…'den başlar" gösterilir; kesin fiyat kapsama göre teklifle */
export const FROM_ONLY: ProjectKey[] = ["mobile", "saas"];

/** Tahmini süre (hafta) */
export const WEEKS: Record<ProjectKey, Range> = {
  landing: { min: 1, max: 2 },
  corporate: { min: 3, max: 5 },
  ecommerce: { min: 5, max: 8 },
  booking: { min: 1, max: 2 },
  mobile: { min: 8, max: 14 },
  saas: { min: 10, max: 16 },
};

const SITE_TYPES: ProjectKey[] = ["landing", "corporate", "ecommerce"];

export interface Selection {
  project: ProjectKey;
  pages: keyof typeof PAGES_MULT;
  languages: number; // 1..4
  features: FeatureKey[];
}

export interface Estimate {
  oneTime: Range;
  monthly: Range | null;
  weeks: Range;
}

function round(n: number, locale: Locale): number {
  const step = locale === "tr" ? 1000 : 10;
  return Math.round(n / step) * step;
}

export function estimate(sel: Selection, locale: Locale): Estimate {
  const base = BASE[locale][sel.project];
  const pagesMult = SITE_TYPES.includes(sel.project) ? (PAGES_MULT[sel.pages] ?? 1) : 1;
  const langMult = 1 + Math.max(0, sel.languages - 1) * LANG_EXTRA;

  let min = base.min * pagesMult * langMult;
  let max = base.max * pagesMult * langMult;
  let monthly: Range | null = null;

  for (const f of sel.features) {
    if (f === "care") {
      monthly = CARE_MONTHLY[locale];
      continue;
    }
    // Randevu paketinde randevu zaten dahil
    if (f === "booking" && sel.project === "booking") continue;
    const r = FEATURES[locale][f];
    min += r.min;
    max += r.max;
  }

  const weeks = { ...WEEKS[sel.project] };
  if (sel.languages > 1) weeks.max += sel.languages - 1;
  if (sel.features.length >= 3) weeks.max += 1;

  return { oneTime: { min: round(min, locale), max: round(max, locale) }, monthly, weeks };
}

export function formatMoney(n: number, locale: Locale): string {
  if (locale === "tr") return `${n.toLocaleString("tr-TR")} ₺`;
  return `€${n.toLocaleString("en-US")}`;
}
