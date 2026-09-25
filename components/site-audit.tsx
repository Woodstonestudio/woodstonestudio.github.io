"use client";

import { useRef, useState } from "react";

/**
 * Ücretsiz site analizi — lead magnet.
 * Ziyaretçi site adresi + e-posta bırakır; Growth'taki /api/audit siteyi
 * anında kontrol eder (HTTPS, mobil, hız, SEO temelleri, form, altyapı) ve
 * sonuç burada gösterilir. Her analiz panele "Talepler" olarak düşer.
 */
const AUDIT_ENDPOINT = "https://woodstonestudio-growth.vercel.app/api/audit";

type Locale = "tr" | "en";

interface AuditItem {
  code: string;
  severity: "bad" | "warn" | "good" | "info";
  label: string;
  detail?: string;
  why?: string;
  fix?: string;
}
interface AuditResult {
  url: string;
  health: number;
  grade: "A" | "B" | "C" | "D" | "F";
  title: string | null;
  loadMs: number | null;
  items: AuditItem[];
}

const T = {
  tr: {
    url: "Site adresiniz",
    urlPh: "ornek.com",
    email: "E-posta",
    name: "Ad (isteğe bağlı)",
    consent: "Sonucun bana ulaşması ve dönüş yapılması için bilgilerimin işlenmesini kabul ediyorum.",
    run: "Analiz et",
    running: "Site inceleniyor… (10–20 sn)",
    err: "Analiz yapılamadı. Adresi kontrol edin ya da bize yazın:",
    limited: "Çok fazla deneme. Biraz sonra tekrar deneyin ya da bize yazın:",
    invalid: "Geçerli bir site adresi, e-posta ve onay gerekli.",
    score: "Sağlık puanı",
    checked: "Kontrol edilen sayfa",
    load: "yükleme",
    issues: "Düzeltilmesi gerekenler",
    goods: "İyi olanlar",
    why: "Neden önemli",
    fix: "Nasıl düzelir",
    clean: "Temel kontroller temiz görünüyor. Bir sonraki adım içerik ve Google görünürlüğü — bunun için de yardımcı olabiliriz.",
    cta: "Bunları bizim düzeltmemizi ister misiniz?",
    ctaBtn: "Teklif isteyin",
    again: "Başka bir site analiz et",
    note: "Bu analiz sitenizin ana sayfasına otomatik bakar; tasarım, içerik kalitesi ve sıralama gibi konular için görüşmede detaylı rapor çıkarırız.",
  },
  en: {
    url: "Your website",
    urlPh: "example.com",
    email: "Email",
    name: "Name (optional)",
    consent: "I agree to my details being processed so you can send the result and follow up.",
    run: "Run audit",
    running: "Checking your site… (10–20 s)",
    err: "Couldn't run the audit. Check the address or write to us:",
    limited: "Too many attempts. Try again later or write to us:",
    invalid: "A valid website address, email and consent are required.",
    score: "Health score",
    checked: "Page checked",
    load: "load",
    issues: "Needs fixing",
    goods: "Looking good",
    why: "Why it matters",
    fix: "How to fix",
    clean: "Basic checks look clean. The next step is content and Google visibility — we can help with that too.",
    cta: "Want us to fix these for you?",
    ctaBtn: "Request a quote",
    again: "Audit another site",
    note: "This audit looks at your homepage automatically; for design, content quality and rankings we prepare a detailed report in a call.",
  },
} as const;

const INPUT =
  "w-full rounded-2xl border border-line bg-transparent px-5 py-3.5 text-[15px] text-bone placeholder:text-gray-warm transition-colors focus:border-bone-dim focus:outline-none";
const BTN =
  "inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-8 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98] disabled:opacity-60";

const SEV: Record<AuditItem["severity"], { dot: string; ring: string }> = {
  bad: { dot: "bg-[#B4452E]", ring: "border-[#B4452E]/30" },
  warn: { dot: "bg-[#C9962B]", ring: "border-[#C9962B]/30" },
  good: { dot: "bg-[#4E7D4A]", ring: "border-line" },
  info: { dot: "bg-gray-warm", ring: "border-line" },
};

function scoreColor(h: number): string {
  if (h >= 75) return "#4E7D4A";
  if (h >= 55) return "#C9962B";
  return "#B4452E";
}

export function SiteAudit({ locale = "tr" }: { locale?: Locale }) {
  const t = T[locale];
  const openedAt = useRef<number>(Date.now());
  const [state, setState] = useState<"idle" | "running" | "done" | "err" | "limited" | "invalid">("idle");
  const [result, setResult] = useState<AuditResult | null>(null);
  const contactHref = locale === "tr" ? "/?service=web#contact" : "/en?service=web#contact";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = {
      url: String(f.get("url") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      name: String(f.get("name") ?? "").trim(),
      consent: f.get("consent") === "on",
      website: String(f.get("website") ?? ""), // bal kabı
      locale,
      pageUrl: window.location.href,
      elapsedMs: Date.now() - openedAt.current,
    };
    if (!body.consent || body.url.length < 4 || !/^\S+@\S+\.\S+$/.test(body.email)) {
      setState("invalid");
      return;
    }
    setState("running");
    try {
      const r = await fetch(AUDIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await r.json().catch(() => null)) as { ok?: boolean; result?: AuditResult; error?: string } | null;
      if (r.ok && data?.ok && data.result) {
        setResult(data.result);
        setState("done");
        return;
      }
      setState(r.status === 429 ? "limited" : r.status === 400 ? "invalid" : "err");
    } catch {
      setState("err");
    }
  }

  if (state === "done" && result) {
    const issues = result.items.filter((i) => i.severity !== "good");
    const goods = result.items.filter((i) => i.severity === "good");
    const color = scoreColor(result.health);
    const r = 44;
    const c = 2 * Math.PI * r;
    return (
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8" role="status">
        <div className="flex flex-wrap items-center gap-6">
          <svg width="112" height="112" viewBox="0 0 112 112" aria-label={`${t.score} ${result.health}/100`}>
            <circle cx="56" cy="56" r={r} fill="none" stroke="rgba(38,35,30,0.12)" strokeWidth="8" />
            <circle
              cx="56"
              cy="56"
              r={r}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - result.health / 100)}
              transform="rotate(-90 56 56)"
            />
            <text x="56" y="52" textAnchor="middle" fontSize="26" fontWeight="300" fill="#26231E">
              {result.health}
            </text>
            <text x="56" y="72" textAnchor="middle" fontSize="11" fill="#6B665D">
              {result.grade}
            </text>
          </svg>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.score}</p>
            <p className="mt-2 truncate text-[15px] text-bone">
              {t.checked}: <span className="text-gray-warm">{result.url.replace(/^https?:\/\//, "")}</span>
              {result.loadMs != null && (
                <span className="text-gray-warm">
                  {" "}
                  · {(result.loadMs / 1000).toFixed(1)} sn {t.load}
                </span>
              )}
            </p>
            {result.title && <p className="mt-1 truncate text-[13px] text-gray-warm">“{result.title}”</p>}
          </div>
        </div>

        {issues.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.issues}</h3>
            <ul className="mt-3 space-y-3">
              {issues.map((i) => (
                <li key={i.code} className={`rounded-2xl border ${SEV[i.severity].ring} p-4`}>
                  <div className="flex items-center gap-2.5 text-[16px] text-bone">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${SEV[i.severity].dot}`} />
                    {i.label}
                    {i.detail && <span className="text-[13px] text-gray-warm">· {i.detail}</span>}
                  </div>
                  {i.why && (
                    <p className="mt-2 text-[14px] leading-[1.7] text-gray-warm">
                      <span className="text-bone-dim">{t.why}:</span> {i.why}
                    </p>
                  )}
                  {i.fix && (
                    <p className="mt-1 text-[14px] leading-[1.7] text-gray-warm">
                      <span className="text-bone-dim">{t.fix}:</span> {i.fix}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-8 text-[15px] leading-[1.7] text-gray-warm">{t.clean}</p>
        )}

        {goods.length > 0 && (
          <div className="mt-6">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.goods}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {goods.map((i) => (
                <li key={i.code} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[13px] text-gray-warm">
                  <span className="h-2 w-2 rounded-full bg-[#4E7D4A]" />
                  {i.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <p className="text-[16px] text-bone">{t.cta}</p>
          <a href={contactHref} className={BTN}>
            {t.ctaBtn} <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setState("idle");
              openedAt.current = Date.now();
            }}
            className="text-[14px] text-gray-warm underline-offset-4 hover:underline"
          >
            {t.again}
          </button>
        </div>
        <p className="mt-4 text-[13px] leading-[1.6] text-gray-warm">{t.note}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="sa-url">{t.url}</label>
        <input id="sa-url" name="url" required inputMode="url" autoComplete="url" placeholder={t.url + " * — " + t.urlPh} className={INPUT + " sm:col-span-2"} />
        <label className="sr-only" htmlFor="sa-email">{t.email}</label>
        <input id="sa-email" name="email" type="email" required autoComplete="email" placeholder={t.email + " *"} className={INPUT} />
        <label className="sr-only" htmlFor="sa-name">{t.name}</label>
        <input id="sa-name" name="name" autoComplete="name" placeholder={t.name} className={INPUT} />
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <input name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <label className="mt-4 flex items-start gap-3 text-[13px] leading-[1.6] text-gray-warm">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#26231E]" />
        <span>{t.consent}</span>
      </label>
      {(state === "err" || state === "limited" || state === "invalid") && (
        <p className="mt-4 text-[14px] leading-[1.6] text-[#8a3a2a]" role="alert">
          {state === "invalid" ? t.invalid : state === "limited" ? t.limited : t.err}{" "}
          {state !== "invalid" && (
            <a className="underline" href="mailto:info@woodstonestudio.com">info@woodstonestudio.com</a>
          )}
        </p>
      )}
      <button type="submit" disabled={state === "running"} className={"mt-6 " + BTN}>
        {state === "running" ? t.running : t.run} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
