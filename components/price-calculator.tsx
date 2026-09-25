"use client";

import { useMemo, useRef, useState } from "react";
import {
  estimate,
  formatMoney,
  FROM_ONLY,
  PAGES_MULT,
  type FeatureKey,
  type Locale,
  type ProjectKey,
  type Selection,
} from "@/lib/pricing";

/**
 * Fiyat hesaplayıcı — ikinci lead kaynağı.
 * Ziyaretçi seçim yapar, tahmini aralığı anında görür; "yazılı teklif" için
 * ad + e-posta bırakırsa Growth'taki /api/lead'e gider → Talepler + e-posta.
 * Rakamlar lib/pricing.ts'ten gelir.
 */
const LEAD_ENDPOINT = "https://woodstonestudio-growth.vercel.app/api/lead";

const T = {
  tr: {
    step1: "Ne yaptırmak istiyorsunuz?",
    step2: "Sayfa sayısı",
    step3: "Dil sayısı",
    step4: "Ek özellikler",
    projects: {
      landing: { name: "Tanıtım / landing sayfası", desc: "Tek sayfa, bir ürün ya da kampanya" },
      corporate: { name: "Kurumsal web sitesi", desc: "Hakkımızda, hizmetler, iletişim…" },
      ecommerce: { name: "E-ticaret sitesi", desc: "Ürün, sepet, ödeme" },
      booking: { name: "Klinik / salon web paketi", desc: "Online randevu + Google + mini site" },
      mobile: { name: "Mobil uygulama (MVP)", desc: "iOS + Android, ilk sürüm" },
      saas: { name: "SaaS / web uygulaması (MVP)", desc: "Üyelik, panel, ödeme" },
    } as Record<ProjectKey, { name: string; desc: string }>,
    pages: { "1-5": "1–5", "6-10": "6–10", "11-20": "11–20", "20+": "20+" } as Record<string, string>,
    langs: ["1 dil", "2 dil", "3 dil", "4+ dil"],
    features: {
      booking: "Online randevu / rezervasyon",
      blog: "Blog altyapısı",
      payment: "Online ödeme",
      crm: "CRM / WhatsApp / e-posta entegrasyonu",
      content: "Metinleri biz yazalım",
      seo: "SEO başlangıç paketi",
      photos: "Görsel / fotoğraf düzenleme",
      care: "Aylık bakım ve destek",
    } as Record<FeatureKey, string>,
    estTitle: "Tahmini aralık",
    fromTitle: "Başlangıç fiyatı",
    from: "'den başlar",
    fromNote: "Mobil ve SaaS projelerinde kesin fiyat kapsama göre belirlenir; ücretsiz ön görüşmede birlikte netleştiririz.",
    monthly: "aylık bakım",
    weeks: "hafta",
    time: "Süre",
    note: "Bu bir tahmindir; kesin fiyat kapsam netleşince yazılı teklifle verilir. Gizli maliyet yoktur.",
    quoteTitle: "Yazılı teklif isteyin",
    quoteLead: "Seçimleriniz teklifle birlikte bize gelir; bir iş günü içinde dönüş yaparız.",
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon (isteğe bağlı)",
    notes: "Eklemek istediğiniz not (isteğe bağlı)",
    consent: "Talebime dönüş yapılması için bilgilerimin işlenmesini kabul ediyorum.",
    send: "Teklif iste",
    sending: "Gönderiliyor…",
    ok: "Teşekkürler! Seçimlerinizle birlikte talebiniz bize ulaştı; en geç bir iş günü içinde yazılı teklif göndereceğiz.",
    err: "Gönderilemedi. Lütfen tekrar deneyin ya da bize yazın:",
    invalid: "Ad, geçerli e-posta ve onay gerekli.",
    summaryLabel: { project: "Proje", pages: "Sayfa", langs: "Dil", features: "Ek", estimate: "Tahmin" },
  },
  en: {
    step1: "What do you need?",
    step2: "Number of pages",
    step3: "Languages",
    step4: "Extras",
    projects: {
      landing: { name: "Landing page", desc: "One page, one product or campaign" },
      corporate: { name: "Corporate website", desc: "About, services, contact…" },
      ecommerce: { name: "E-commerce site", desc: "Products, cart, checkout" },
      booking: { name: "Clinic / salon web package", desc: "Online booking + Google + mini site" },
      mobile: { name: "Mobile app (MVP)", desc: "iOS + Android, first release" },
      saas: { name: "SaaS / web app (MVP)", desc: "Accounts, dashboard, payments" },
    } as Record<ProjectKey, { name: string; desc: string }>,
    pages: { "1-5": "1–5", "6-10": "6–10", "11-20": "11–20", "20+": "20+" } as Record<string, string>,
    langs: ["1 language", "2 languages", "3 languages", "4+ languages"],
    features: {
      booking: "Online booking / reservations",
      blog: "Blog",
      payment: "Online payments",
      crm: "CRM / WhatsApp / email integration",
      content: "We write the copy",
      seo: "SEO starter package",
      photos: "Image / photo editing",
      care: "Monthly care & support",
    } as Record<FeatureKey, string>,
    estTitle: "Estimated range",
    fromTitle: "Starting price",
    from: "from",
    fromNote: "For mobile and SaaS projects the final price depends on scope; we define it together in a free consultation.",
    monthly: "monthly care",
    weeks: "weeks",
    time: "Timeline",
    note: "This is an estimate; the final price comes as a written quote once the scope is clear. No hidden costs.",
    quoteTitle: "Request a written quote",
    quoteLead: "Your selections are sent with the request; we reply within one business day.",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    notes: "Anything to add (optional)",
    consent: "I agree to my details being processed so you can respond to my request.",
    send: "Request quote",
    sending: "Sending…",
    ok: "Thank you! Your request and selections have reached us; we'll send a written quote within one business day.",
    err: "Couldn't send. Please try again or write to us:",
    invalid: "Name, a valid email and consent are required.",
    summaryLabel: { project: "Project", pages: "Pages", langs: "Languages", features: "Extras", estimate: "Estimate" },
  },
} as const;

const INPUT =
  "w-full rounded-2xl border border-line bg-transparent px-5 py-3.5 text-[15px] text-bone placeholder:text-gray-warm transition-colors focus:border-bone-dim focus:outline-none";
const BTN =
  "inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-8 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98] disabled:opacity-60";
const CHIP_ON = "border-[#26231E] bg-[#26231E] text-[#F3F0EA]";
const CHIP_OFF = "border-line text-bone hover:border-bone-dim";

const SITE_TYPES: ProjectKey[] = ["landing", "corporate", "ecommerce"];
const PROJECT_ORDER: ProjectKey[] = ["landing", "corporate", "ecommerce", "booking", "mobile", "saas"];
const FEATURE_ORDER: FeatureKey[] = ["booking", "blog", "payment", "crm", "content", "seo", "photos", "care"];

export function PriceCalculator({ locale = "tr" }: { locale?: Locale }) {
  const t = T[locale];
  const openedAt = useRef<number>(Date.now());
  const [sel, setSel] = useState<Selection>({ project: "corporate", pages: "6-10", languages: 1, features: [] });
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err" | "invalid">("idle");
  const est = useMemo(() => estimate(sel, locale), [sel, locale]);
  const isSite = SITE_TYPES.includes(sel.project);
  const fromOnly = FROM_ONLY.includes(sel.project);
  const estText = fromOnly
    ? locale === "tr"
      ? `${formatMoney(est.oneTime.min, locale)}${t.from}`
      : `${t.from} ${formatMoney(est.oneTime.min, locale)}`
    : `${formatMoney(est.oneTime.min, locale)} – ${formatMoney(est.oneTime.max, locale)}`;

  const toggleFeature = (f: FeatureKey) =>
    setSel((s) => ({ ...s, features: s.features.includes(f) ? s.features.filter((x) => x !== f) : [...s.features, f] }));

  const summary = () => {
    const L = t.summaryLabel;
    const lines = [
      `${L.project}: ${t.projects[sel.project].name}`,
      isSite ? `${L.pages}: ${t.pages[sel.pages]}` : null,
      `${L.langs}: ${sel.languages}${sel.languages >= 4 ? "+" : ""}`,
      `${L.features}: ${sel.features.length ? sel.features.map((f) => t.features[f]).join(", ") : "-"}`,
      `${L.estimate}: ${estText}` +
        (est.monthly ? ` (+ ${formatMoney(est.monthly.min, locale)}–${formatMoney(est.monthly.max, locale)} / ${t.monthly})` : "") +
        ` · ${est.weeks.min}–${est.weeks.max} ${t.weeks}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const notes = String(f.get("notes") ?? "").trim();
    const body = {
      name: String(f.get("name") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      phone: String(f.get("phone") ?? "").trim(),
      service: locale === "tr" ? "Fiyat hesaplama" : "Pricing calculator",
      message: `${summary()}${notes ? `\n\n${notes}` : ""}`,
      consent: f.get("consent") === "on",
      website: String(f.get("website") ?? ""),
      locale,
      pageUrl: window.location.href,
      elapsedMs: Date.now() - openedAt.current,
    };
    if (!body.consent || body.name.length < 2 || !/^\S+@\S+\.\S+$/.test(body.email)) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      setState(r.ok ? "ok" : r.status === 400 ? "invalid" : "err");
    } catch {
      setState("err");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:gap-12">
      {/* Seçimler */}
      <div className="space-y-8">
        <fieldset>
          <legend className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.step1}</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {PROJECT_ORDER.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setSel((s) => ({ ...s, project: p }))}
                aria-pressed={sel.project === p}
                className={`rounded-2xl border px-4 py-3 text-left transition-colors ${sel.project === p ? CHIP_ON : CHIP_OFF}`}
              >
                <span className="block text-[15px]">{t.projects[p].name}</span>
                <span className={`block text-[13px] ${sel.project === p ? "text-[#F3F0EA]/70" : "text-gray-warm"}`}>{t.projects[p].desc}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {isSite && (
          <fieldset>
            <legend className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.step2}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {Object.keys(PAGES_MULT).map((k) => (
                <button
                  type="button"
                  key={k}
                  onClick={() => setSel((s) => ({ ...s, pages: k }))}
                  aria-pressed={sel.pages === k}
                  className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${sel.pages === k ? CHIP_ON : CHIP_OFF}`}
                >
                  {t.pages[k]}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.step3}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.langs.map((label, i) => (
              <button
                type="button"
                key={label}
                onClick={() => setSel((s) => ({ ...s, languages: i + 1 }))}
                aria-pressed={sel.languages === i + 1}
                className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${sel.languages === i + 1 ? CHIP_ON : CHIP_OFF}`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.step4}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {FEATURE_ORDER.filter((f) => !(f === "booking" && sel.project === "booking")).map((f) => {
              const on = sel.features.includes(f);
              return (
                <button
                  type="button"
                  key={f}
                  onClick={() => toggleFeature(f)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${on ? CHIP_ON : CHIP_OFF}`}
                >
                  {on ? "✓ " : ""}
                  {t.features[f]}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      {/* Sonuç + teklif */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{fromOnly ? t.fromTitle : t.estTitle}</p>
          <p className="mt-3 text-3xl font-light tracking-tight text-bone sm:text-4xl" aria-live="polite">
            {fromOnly ? (
              estText
            ) : (
              <>
                {formatMoney(est.oneTime.min, locale)} <span className="text-gray-warm">–</span> {formatMoney(est.oneTime.max, locale)}
              </>
            )}
          </p>
          {est.monthly && (
            <p className="mt-1 text-[15px] text-gray-warm">
              + {formatMoney(est.monthly.min, locale)}–{formatMoney(est.monthly.max, locale)} / {t.monthly}
            </p>
          )}
          <p className="mt-2 text-[15px] text-gray-warm">
            {t.time}: {est.weeks.min}–{est.weeks.max} {t.weeks}
          </p>
          <p className="mt-4 text-[13px] leading-[1.6] text-gray-warm">{fromOnly ? t.fromNote : t.note}</p>

          {state === "ok" ? (
            <div className="mt-6 rounded-2xl border border-line p-4 text-[15px] leading-[1.7] text-bone" role="status">
              ✓ {t.ok}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 border-t border-line pt-6" noValidate>
              <h3 className="text-xl font-light tracking-tight text-bone">{t.quoteTitle}</h3>
              <p className="mt-1 text-[14px] leading-[1.6] text-gray-warm">{t.quoteLead}</p>
              <div className="mt-4 grid gap-3">
                <label className="sr-only" htmlFor="pc-name">{t.name}</label>
                <input id="pc-name" name="name" required autoComplete="name" placeholder={t.name + " *"} className={INPUT} />
                <label className="sr-only" htmlFor="pc-email">{t.email}</label>
                <input id="pc-email" name="email" type="email" required autoComplete="email" placeholder={t.email + " *"} className={INPUT} />
                <label className="sr-only" htmlFor="pc-phone">{t.phone}</label>
                <input id="pc-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phone} className={INPUT} />
                <label className="sr-only" htmlFor="pc-notes">{t.notes}</label>
                <textarea id="pc-notes" name="notes" rows={2} placeholder={t.notes} className={INPUT + " resize-y"} />
                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </div>
              </div>
              <label className="mt-4 flex items-start gap-3 text-[13px] leading-[1.6] text-gray-warm">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#26231E]" />
                <span>{t.consent}</span>
              </label>
              {(state === "err" || state === "invalid") && (
                <p className="mt-3 text-[14px] leading-[1.6] text-[#8a3a2a]" role="alert">
                  {state === "invalid" ? t.invalid : t.err}{" "}
                  {state === "err" && (
                    <a className="underline" href="mailto:info@woodstonestudio.com">info@woodstonestudio.com</a>
                  )}
                </p>
              )}
              <button type="submit" disabled={state === "sending"} className={"mt-5 w-full justify-center " + BTN}>
                {state === "sending" ? t.sending : t.send} <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
