"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ücretsiz site taraması (SEO · GEO · AEO) — lead magnet.
 *
 * 1) Ziyaretçi yalnızca adres yazar → Growth /api/scan siteyi 10 alanda ~75 sinyalle tarar.
 * 2) Puan, alanlar, bot tablosu, hız ve ilk 6 bulgunun "neden önemli" açıklaması açık.
 *    Çözüm adımları ve kalan bulgular e-postayla gelir (o an panele talep düşer).
 * 3) Aynı site 7 gün içinde tekrar taranırsa kayıtlı sonuç döner; yeniden tarama yok.
 */
const API = "https://woodstonestudio-growth.vercel.app/api/scan";

type Locale = "tr" | "en";
type Status = "pass" | "partial" | "fail" | "na" | "unknown";
interface Signal {
  id: string;
  area: string;
  sev: 5 | 3 | 2 | 1;
  status: Status;
  label: string;
  detail?: string;
  why?: string;
  fix?: string;
  locked?: boolean;
}
interface Area {
  id: string;
  name: string;
  weight: number;
  score: number | null;
  counts: { pass: number; partial: number; fail: number; skipped: number };
  cap?: number;
}
interface Bot {
  token: string;
  name: string;
  kind: "search" | "ai_search" | "training";
  robots: "allowed" | "blocked" | "unspecified" | "unknown";
  live: "reached" | "failed" | "not_tested";
  status?: number;
}
interface Result {
  url: string;
  finalUrl: string;
  domain: string;
  scannedAt: string;
  score: number | null;
  bandLabel: string | null;
  provisional: boolean;
  blocked: boolean;
  gates: { id: string; cap: number; label: string }[];
  areas: Area[];
  signals: Signal[];
  bots: Bot[];
  speed: {
    source: "pagespeed" | "none";
    mobile?: { perf?: number; lcpMs?: number; cls?: number; tbtMs?: number; fcpMs?: number };
    desktop?: { perf?: number };
    field?: { lcpMs?: number; cls?: number; inpMs?: number; category?: string };
  };
  ttfbMs: number | null;
  title: string | null;
  counts: { total: number; measured: number; pass: number; partial: number; fail: number };
}
interface View {
  ok: boolean;
  scanId: string;
  cached: boolean;
  unlocked: boolean;
  result: Result;
  emailed?: boolean;
  error?: string;
}

const T = {
  tr: {
    url: "Site adresi",
    urlPh: "ornek.com",
    run: "Tara",
    trust: ["Ücretsiz, kayıt yok", "Yalnızca herkese açık sayfalar okunur", "IP adresiniz saklanmaz"],
    steps: ["Ana sayfa açılıyor…", "robots.txt ve site haritası okunuyor…", "Google ve AI botlarıyla canlı test…", "Yapısal veri ve içerik inceleniyor…", "Güvenlik başlıkları kontrol ediliyor…", "Google PageSpeed ölçülüyor (en uzun adım)…", "Puan hesaplanıyor…"],
    wait: "Genelde 20–45 saniye sürer.",
    errs: {
      invalid_url: "Bu adres taranamıyor. Herkese açık bir alan adı yazın (ör. ornek.com).",
      rate_limited: "Günlük ücretsiz tarama sınırına ulaştınız. Sitenizi birlikte inceleyelim:",
      not_found: "Rapor bulunamadı ya da süresi doldu. Siteyi yeniden tarayın.",
      generic: "Tarama yapılamadı. Biraz sonra tekrar deneyin ya da bize yazın:",
    },
    score: "Puan",
    provisional: "geçici",
    provisionalNote: "Bazı sinyaller ölçülemedi; puan ölçülebilenlere göre hesaplandı.",
    signals: "sinyal",
    pass: "sağlam",
    partial: "kısmi",
    fail: "açık",
    na: "uygulanmaz",
    unknown: "ölçülemedi",
    sev: { 5: "Kritik", 3: "Önemli", 2: "Orta", 1: "Küçük" } as Record<number, string>,
    gates: "Puanı sınırlayan temel sorunlar",
    gateCap: "puan en fazla",
    areas: "Alanlar",
    findings: "Bulgular",
    findingsLead: "Önem sırasına göre, her birinin neden önemli olduğuyla.",
    why: "Neden önemli",
    fix: "Nasıl düzelir",
    lockedTitle: (n: number) => `${n} bulgunun tamamı ve nasıl düzeleceği`,
    lockedList: (n: number) => `Bu ${n} bulgunun başlıklarını göster`,
    lockedLead: "Tam raporu e-postanıza gönderelim: her bulgunun çözüm adımı ve önceliği. İsterseniz düzeltmeyi biz yapalım.",
    email: "E-posta",
    name: "Ad (isteğe bağlı)",
    consent: "Raporun bana gönderilmesi ve gerekirse dönüş yapılması için bilgilerimin işlenmesini kabul ediyorum.",
    unlock: "Tam raporu gönder",
    unlocking: "Gönderiliyor…",
    unlockInvalid: "Geçerli bir e-posta ve onay gerekli.",
    emailed: "Rapor e-postanıza gönderildi.",
    bots: "Bot erişimi",
    botsLead: "robots.txt kuralı (belirtilmemiş = izinli sayılır) ve botun kimliğiyle ana sayfaya yapılan canlı istek. Canlı test bir ipucudur: bazı güvenlik duvarları sahte bot kimliğini haklı olarak reddeder.",
    botCols: ["Bot", "Tür", "robots.txt", "Canlı test"],
    kinds: { search: "arama", ai_search: "AI arama", training: "AI eğitim" },
    robots: { allowed: "izinli", blocked: "engelli", unspecified: "belirtilmemiş", unknown: "okunamadı" },
    live: { reached: "erişti", failed: "erişemedi", not_tested: "—" },
    speed: "Hız (Google PageSpeed)",
    mobile: "Mobil",
    desktop: "Masaüstü",
    field: "Gerçek kullanıcı verisi (son 28 gün)",
    noSpeed: "PageSpeed bu sefer ölçüm yapamadı; hız puana katılmadı.",
    server: "Sunucu yanıtı",
    passing: "Sağlam olanlar",
    notMeasured: "Ölçülemeyen / uygulanmayanlar",
    blockedTitle: "Siteniz otomatik okumayı engelliyor",
    blockedLead: "Bot koruması (ör. Cloudflare doğrulama sayfası) taramayı durdurdu. Bu, Google ve AI botlarının da aynı engele takılıyor olabileceği anlamına gelir. Elle inceleyelim:",
    cached: "Kayıtlı sonuç (7 gün geçerli)",
    another: "Başka site tara",
    cta: "Bunları sizin için düzeltelim",
    ctaLead: "Kritik ve önemli maddelerin çoğu birkaç günde, mevcut siteyi bozmadan düzelir.",
    ctaQuote: "Teklif isteyin",
    ctaWa: "WhatsApp'tan yazın",
    scannedAt: "Tarama",
  },
  en: {
    url: "Website address",
    urlPh: "example.com",
    run: "Scan",
    trust: ["Free, no sign-up", "Only public pages are read", "Your IP address isn't stored"],
    steps: ["Opening the homepage…", "Reading robots.txt and sitemap…", "Live test with Google and AI bots…", "Checking structured data and content…", "Checking security headers…", "Measuring Google PageSpeed (longest step)…", "Calculating score…"],
    wait: "Usually takes 20–45 seconds.",
    errs: {
      invalid_url: "This address can't be scanned. Enter a public domain (e.g. example.com).",
      rate_limited: "You've reached the daily free scan limit. Let's review your site together:",
      not_found: "Report not found or expired. Scan the site again.",
      generic: "The scan failed. Try again later or write to us:",
    },
    score: "Score",
    provisional: "provisional",
    provisionalNote: "Some signals couldn't be measured; the score is based on those that could.",
    signals: "signals",
    pass: "pass",
    partial: "partial",
    fail: "fail",
    na: "n/a",
    unknown: "not measured",
    sev: { 5: "Critical", 3: "Important", 2: "Medium", 1: "Minor" } as Record<number, string>,
    gates: "Core issues capping the score",
    gateCap: "score at most",
    areas: "Areas",
    findings: "Findings",
    findingsLead: "By priority, with why each one matters.",
    why: "Why it matters",
    fix: "How to fix",
    lockedTitle: (n: number) => `All ${n} findings and how to fix them`,
    lockedList: (n: number) => `Show the titles of these ${n} findings`,
    lockedLead: "We'll email you the full report: fix steps and priority for every finding. Or let us fix them for you.",
    email: "Email",
    name: "Name (optional)",
    consent: "I agree to my details being processed to send the report and follow up if needed.",
    unlock: "Send the full report",
    unlocking: "Sending…",
    unlockInvalid: "A valid email and consent are required.",
    emailed: "The report has been sent to your email.",
    bots: "Bot access",
    botsLead: "robots.txt rule (unspecified = treated as allowed) and a live homepage request with each bot's identity. The live test is a hint: some firewalls rightly reject spoofed bot identities.",
    botCols: ["Bot", "Type", "robots.txt", "Live test"],
    kinds: { search: "search", ai_search: "AI search", training: "AI training" },
    robots: { allowed: "allowed", blocked: "blocked", unspecified: "unspecified", unknown: "unreadable" },
    live: { reached: "reached", failed: "failed", not_tested: "—" },
    speed: "Speed (Google PageSpeed)",
    mobile: "Mobile",
    desktop: "Desktop",
    field: "Real-user data (last 28 days)",
    noSpeed: "PageSpeed couldn't measure this time; speed wasn't counted in the score.",
    server: "Server response",
    passing: "Passing",
    notMeasured: "Not measured / not applicable",
    blockedTitle: "Your site blocks automated reading",
    blockedLead: "Bot protection (e.g. a Cloudflare challenge page) stopped the scan. Google and AI bots may hit the same wall. Let us review it manually:",
    cached: "Saved result (valid for 7 days)",
    another: "Scan another site",
    cta: "Let us fix these for you",
    ctaLead: "Most critical and important items are fixed within days without breaking the current site.",
    ctaQuote: "Request a quote",
    ctaWa: "Message on WhatsApp",
    scannedAt: "Scanned",
  },
} as const;

const WA = "https://wa.me/905331932068";
const INPUT =
  "w-full rounded-2xl border border-line bg-transparent px-5 py-3.5 text-[15px] text-bone placeholder:text-gray-warm transition-colors focus:border-bone-dim focus:outline-none";
const BTN =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98] disabled:opacity-60";
const GHOST = "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] text-bone transition-colors hover:border-bone-dim disabled:opacity-50";

const C_BAD = "#B4452E";
const C_WARN = "#C9962B";
const C_OK = "#4E7D4A";
const C_MUTED = "#8C867C";
const statusColor = (s: Status) => (s === "fail" ? C_BAD : s === "partial" ? C_WARN : s === "pass" ? C_OK : C_MUTED);
const scoreColor = (n: number | null) => (n == null ? C_MUTED : n >= 80 ? C_OK : n >= 60 ? C_WARN : C_BAD);

function Ring({ value, label, size = 120 }: { value: number | null; label: string; size?: number }) {
  const r = size / 2 - 10;
  const c = 2 * Math.PI * r;
  const color = scoreColor(value);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label} ${value ?? "–"}/100`} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(38,35,30,0.12)" strokeWidth="8" />
      {value != null && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      )}
      <text x="50%" y="50%" dy="0.1em" textAnchor="middle" fontSize={size * 0.26} fontWeight="300" fill="#26231E">
        {value ?? "–"}
      </text>
      <text x="50%" y="50%" dy="1.7em" textAnchor="middle" fontSize="11" fill="#6B665D">
        /100
      </text>
    </svg>
  );
}

function Pill({ status, text }: { status: Status; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line px-2.5 py-0.5 text-[12px] text-gray-warm">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor(status) }} />
      {text}
    </span>
  );
}

export function SiteScan({ locale = "tr" }: { locale?: Locale }) {
  const t = T[locale];
  const openedAt = useRef<number>(Date.now());
  const [phase, setPhase] = useState<"idle" | "running" | "done" | "error">("idle");
  const [step, setStep] = useState(0);
  const [error, setError] = useState<keyof typeof t.errs>("generic");
  const [v, setV] = useState<View | null>(null);
  const [lastUrl, setLastUrl] = useState("");
  const [unlockState, setUnlockState] = useState<"idle" | "sending" | "invalid" | "error">("idle");
  const [flash, setFlash] = useState<string | null>(null);
  const contactHref = locale === "tr" ? "/?service=web#contact" : "/en?service=web#contact";

  // Paylaşılan rapor linki (?r=…)
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("r");
    if (!id) return;
    setPhase("running");
    fetch(`${API}?id=${encodeURIComponent(id)}`)
      .then(async (r) => {
        const data = (await r.json().catch(() => null)) as View | null;
        if (r.ok && data?.ok) {
          setV(data);
          setLastUrl(data.result.url);
          setPhase("done");
        } else {
          setError(r.status === 404 ? "not_found" : "generic");
          setPhase("error");
        }
      })
      .catch(() => {
        setError("generic");
        setPhase("error");
      });
  }, []);

  useEffect(() => {
    if (phase !== "running") return;
    setStep(0);
    const iv = setInterval(() => setStep((s) => Math.min(s + 1, t.steps.length - 1)), 5500);
    return () => clearInterval(iv);
  }, [phase, t.steps.length]);

  function showFlash(s: string) {
    setFlash(s);
    setTimeout(() => setFlash(null), 3000);
  }

  async function runScan(url: string, honeypot = "") {
    setPhase("running");
    setLastUrl(url);
    try {
      const r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "scan", url, locale, website: honeypot, elapsedMs: Date.now() - openedAt.current }),
      });
      const data = (await r.json().catch(() => null)) as View | null;
      if (r.ok && data?.ok) {
        setV(data);
        setPhase("done");
        const u = new URL(window.location.href);
        u.searchParams.set("r", data.scanId);
        window.history.replaceState(null, "", u.toString());
        return;
      }
      setError(r.status === 429 ? "rate_limited" : data?.error === "invalid_url" || r.status === 400 ? "invalid_url" : "generic");
      setPhase("error");
    } catch {
      setError("generic");
      setPhase("error");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const url = String(f.get("url") ?? "").trim();
    if (url.length < 4) {
      setError("invalid_url");
      setPhase("error");
      return;
    }
    await runScan(url, String(f.get("website") ?? ""));
  }

  async function onUnlock(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!v) return;
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "").trim();
    const consent = f.get("consent") === "on";
    if (!consent || !/^\S+@\S+\.\S+$/.test(email)) {
      setUnlockState("invalid");
      return;
    }
    setUnlockState("sending");
    try {
      const r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "unlock",
          scanId: v.scanId,
          email,
          name: String(f.get("name") ?? "").trim(),
          consent: true,
          locale,
          pageUrl: window.location.href,
          website: String(f.get("website") ?? ""),
        }),
      });
      const data = (await r.json().catch(() => null)) as View | null;
      if (r.ok && data?.ok) {
        setV(data);
        setUnlockState("idle");
        if (data.emailed) showFlash(t.emailed);
        return;
      }
      setUnlockState("error");
    } catch {
      setUnlockState("error");
    }
  }

  function reset() {
    setV(null);
    setPhase("idle");
    openedAt.current = Date.now();
    const u = new URL(window.location.href);
    u.searchParams.delete("r");
    window.history.replaceState(null, "", u.toString());
  }

  // ───────── form / yükleniyor / hata
  if (phase !== "done" || !v) {
    return (
      <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8" noValidate>
        <label className="sr-only" htmlFor="sc-url">
          {t.url}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[15px] text-gray-warm">https://</span>
            <input
              id="sc-url"
              name="url"
              required
              inputMode="url"
              autoComplete="url"
              defaultValue={lastUrl.replace(/^https?:\/\//, "")}
              placeholder={t.urlPh}
              className={INPUT + " pl-[78px]"}
              disabled={phase === "running"}
            />
          </div>
          <button type="submit" disabled={phase === "running"} className={BTN}>
            {phase === "running" ? "…" : t.run} <span aria-hidden>→</span>
          </button>
        </div>
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <input name="website" tabIndex={-1} autoComplete="off" />
        </div>
        {phase === "running" ? (
          <div className="mt-6" role="status" aria-live="polite">
            <div className="h-1 w-full overflow-hidden rounded-full bg-line-soft">
              <div className="h-full rounded-full bg-bone-dim transition-all duration-[5000ms] ease-linear" style={{ width: `${Math.round(((step + 1) / t.steps.length) * 92)}%` }} />
            </div>
            <p className="mt-3 text-[14px] text-bone">{t.steps[step]}</p>
            <p className="mt-1 text-[13px] text-gray-warm">{t.wait}</p>
          </div>
        ) : (
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-gray-warm">
            {t.trust.map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4E7D4A]" />
                {x}
              </li>
            ))}
          </ul>
        )}
        {phase === "error" && (
          <p className="mt-4 text-[14px] leading-[1.6] text-[#8a3a2a]" role="alert">
            {t.errs[error]}{" "}
            {error === "generic" && (
              <a className="underline" href="mailto:info@woodstonestudio.com">
                info@woodstonestudio.com
              </a>
            )}
            {error === "rate_limited" && (
              <a className="underline" href={WA}>
                {t.ctaWa}
              </a>
            )}
          </p>
        )}
      </form>
    );
  }

  const r = v.result;

  if (r.blocked) {
    return (
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8" role="status">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{r.domain}</p>
        <h3 className="mt-4 text-2xl font-light tracking-tight text-bone">{t.blockedTitle}</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-gray-warm">{t.blockedLead}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={WA} className={BTN}>
            {t.ctaWa} →
          </a>
          <button type="button" onClick={reset} className={GHOST}>
            {t.another}
          </button>
        </div>
      </div>
    );
  }

  const findings = r.signals.filter((s) => s.status === "fail" || s.status === "partial");
  const open = findings.filter((s) => !s.locked);
  const locked = findings.filter((s) => s.locked);
  const passing = r.signals.filter((s) => s.status === "pass");
  const skipped = r.signals.filter((s) => s.status === "na" || s.status === "unknown");
  const fmtS = (ms?: number) => (ms == null ? "–" : `${(ms / 1000).toFixed(1)} ${locale === "tr" ? "sn" : "s"}`);

  return (
    <div className="min-w-0 space-y-4" role="status">
      {/* Özet */}
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-6">
          <Ring value={r.score} label={t.score} />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.score}</p>
            <p className="mt-2 text-2xl font-light tracking-tight" style={{ color: scoreColor(r.score) }}>
              {r.bandLabel}
              {r.provisional && <span className="ml-2 align-middle text-[12px] uppercase tracking-[0.15em] text-gray-warm">· {t.provisional}</span>}
            </p>
            <p className="mt-1 truncate text-[15px] text-bone">{r.finalUrl.replace(/^https?:\/\//, "")}</p>
            <p className="mt-1 text-[13px] text-gray-warm">
              {r.counts.total} {t.signals} · {t.pass} {r.counts.pass} · {t.partial} {r.counts.partial} · {t.fail} {r.counts.fail}
            </p>
            <p className="mt-1 text-[12px] text-gray-warm">
              {t.scannedAt}: {new Date(r.scannedAt).toLocaleString(locale === "tr" ? "tr-TR" : "en-GB", { dateStyle: "medium", timeStyle: "short" })}
              {v.cached ? ` · ${t.cached}` : ""}
            </p>
          </div>
        </div>
        {r.provisional && <p className="mt-4 text-[13px] text-gray-warm">{t.provisionalNote}</p>}

        {r.gates.length > 0 && (
          <div className="mt-6 rounded-2xl border border-[#B4452E]/30 p-4">
            <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#8a3a2a]">{t.gates}</p>
            <ul className="mt-2 space-y-1 text-[14px] text-bone">
              {r.gates.map((g) => (
                <li key={g.id}>
                  {g.label} <span className="text-gray-warm">· {t.gateCap} {g.cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={reset} className="px-1 text-[13px] text-gray-warm underline-offset-4 hover:underline">
            {t.another}
          </button>
        </div>
        {flash && <p className="mt-3 text-[13px] text-[#4E7D4A]">{flash}</p>}
      </div>

      {/* Alanlar */}
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
        <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.areas}</h3>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {r.areas.map((a) => (
            <li key={a.id}>
              <div className="flex items-baseline justify-between gap-3 text-[14px]">
                <span className="text-bone">{a.name}</span>
                <span className="tabular-nums text-gray-warm">{a.score ?? "–"}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line-soft">
                <div className="h-full rounded-full" style={{ width: `${a.score ?? 0}%`, background: scoreColor(a.score) }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bulgular */}
      {findings.length > 0 && (
        <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
          <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">
            {t.findings} · {findings.length}
          </h3>
          <p className="mt-2 text-[14px] text-gray-warm">{t.findingsLead}</p>
          <ul className="mt-4 space-y-3">
            {open.map((s) => (
              <li key={s.id} className="rounded-2xl border border-line p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: s.sev >= 5 ? C_BAD : s.sev >= 3 ? C_WARN : C_MUTED }}>
                    {t.sev[s.sev]}
                  </span>
                  <Pill status={s.status} text={t[s.status]} />
                </div>
                <p className="mt-2 text-[16px] text-bone">
                  {s.label}
                  {s.detail && <span className="text-[13px] text-gray-warm"> · {s.detail}</span>}
                </p>
                {s.why && (
                  <p className="mt-2 text-[14px] leading-[1.7] text-gray-warm">
                    <span className="text-bone-dim">{t.why}:</span> {s.why}
                  </p>
                )}
                {s.fix && (
                  <p className="mt-1 text-[14px] leading-[1.7] text-gray-warm">
                    <span className="text-bone-dim">{t.fix}:</span> {s.fix}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {!v.unlocked && (
            <div className="mt-4">
              <form onSubmit={onUnlock} className="rounded-2xl border border-bone-dim/40 bg-[#F3F0EA] p-5" noValidate>
                <p className="text-[17px] text-bone">{t.lockedTitle(findings.length)}</p>
                <p className="mt-1 text-[13px] text-gray-warm">
                  {([5, 3, 2, 1] as const)
                    .map((sv) => [sv, findings.filter((x) => x.sev === sv).length] as const)
                    .filter(([, n]) => n > 0)
                    .map(([sv, n]) => `${t.sev[sv]} ${n}`)
                    .join(" · ")}
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-gray-warm">{t.lockedLead}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input name="email" type="email" required autoComplete="email" placeholder={t.email + " *"} className={INPUT} aria-label={t.email} />
                  <input name="name" autoComplete="name" placeholder={t.name} className={INPUT} aria-label={t.name} />
                  <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                </div>
                <label className="mt-3 flex items-start gap-3 text-[13px] leading-[1.6] text-gray-warm">
                  <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#26231E]" />
                  <span>{t.consent}</span>
                </label>
                {unlockState === "invalid" && <p className="mt-2 text-[13px] text-[#8a3a2a]">{t.unlockInvalid}</p>}
                {unlockState === "error" && <p className="mt-2 text-[13px] text-[#8a3a2a]">{t.errs.generic} info@woodstonestudio.com</p>}
                <button type="submit" disabled={unlockState === "sending"} className={"mt-4 " + BTN}>
                  {unlockState === "sending" ? t.unlocking : t.unlock} <span aria-hidden>→</span>
                </button>
              </form>
              {locked.length > 0 && (
              <details className="mt-3">
                <summary className="cursor-pointer list-none px-1 text-[13px] text-gray-warm underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
                  {t.lockedList(locked.length)}
                </summary>
                <ul className="mt-3 divide-y divide-line-soft">
                  {locked.map((s) => (
                    <li key={s.id} className="flex items-baseline gap-3 py-2 text-[14px]">
                      <span className="w-16 shrink-0 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: s.sev >= 5 ? C_BAD : s.sev >= 3 ? C_WARN : C_MUTED }}>
                        {t.sev[s.sev]}
                      </span>
                      <span className="min-w-0 flex-1 text-bone">{s.label}</span>
                      <span className="shrink-0 text-[12px]" style={{ color: statusColor(s.status) }}>
                        {t[s.status]}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
              )}
            </div>
          )}
        </div>
      )}

      {/* Botlar */}
      {r.bots.length > 0 && (
        <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
          <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.bots}</h3>
          <p className="mt-2 text-[14px] leading-[1.7] text-gray-warm">{t.botsLead}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-[14px]">
              <thead>
                <tr className="text-[12px] uppercase tracking-[0.12em] text-gray-warm">
                  {t.botCols.map((c) => (
                    <th key={c} className="pb-2 pr-4 font-normal">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {r.bots.map((b) => (
                  <tr key={b.token} className="border-t border-line-soft">
                    <td className="py-2 pr-4 text-bone">
                      {b.name}
                      <span className="block font-mono text-[11px] text-gray-warm">{b.token}</span>
                    </td>
                    <td className="whitespace-nowrap py-2 pr-4 text-gray-warm">{t.kinds[b.kind]}</td>
                    <td className="whitespace-nowrap py-2 pr-4">
                      <Pill status={b.robots === "blocked" ? (b.kind === "training" ? "na" : "fail") : b.robots === "unknown" ? "unknown" : "pass"} text={t.robots[b.robots]} />
                    </td>
                    <td className="whitespace-nowrap py-2 pr-4">
                      {b.live === "not_tested" ? (
                        <span className="text-gray-warm">—</span>
                      ) : (
                        <Pill status={b.live === "reached" ? "pass" : "partial"} text={`${t.live[b.live]}${b.status ? ` · ${b.status}` : ""}`} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Hız */}
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
        <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim">{t.speed}</h3>
        {r.speed.mobile ? (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Ring value={r.speed.mobile.perf ?? null} label={t.mobile} size={84} />
                <span className="text-[14px] text-bone">{t.mobile}</span>
              </div>
              {r.speed.desktop?.perf != null && (
                <div className="flex items-center gap-3">
                  <Ring value={r.speed.desktop.perf} label={t.desktop} size={84} />
                  <span className="text-[14px] text-bone">{t.desktop}</span>
                </div>
              )}
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-[14px] sm:grid-cols-4">
              {[
                ["LCP", fmtS(r.speed.mobile.lcpMs)],
                ["CLS", r.speed.mobile.cls != null ? r.speed.mobile.cls.toFixed(2) : "–"],
                ["TBT", r.speed.mobile.tbtMs != null ? `${Math.round(r.speed.mobile.tbtMs)} ms` : "–"],
                [t.server, r.ttfbMs != null ? `${r.ttfbMs} ms` : "–"],
              ].map(([k, val]) => (
                <div key={k} className="rounded-2xl border border-line-soft p-3">
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-gray-warm">{k}</dt>
                  <dd className="mt-1 tabular-nums text-bone">{val}</dd>
                </div>
              ))}
            </dl>
            {r.speed.field && (
              <p className="mt-3 text-[13px] text-gray-warm">
                {t.field}: LCP {fmtS(r.speed.field.lcpMs)} · CLS {r.speed.field.cls?.toFixed(2) ?? "–"} · INP {r.speed.field.inpMs != null ? `${r.speed.field.inpMs} ms` : "–"}
              </p>
            )}
          </>
        ) : (
          <p className="mt-3 text-[14px] text-gray-warm">
            {t.noSpeed}
            {r.ttfbMs != null && ` ${t.server}: ${r.ttfbMs} ms.`}
          </p>
        )}
      </div>

      {/* Sağlamlar + ölçülemeyenler */}
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
        <details>
          <summary className="cursor-pointer list-none text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim [&::-webkit-details-marker]:hidden">
            {t.passing} · {passing.length} <span className="text-gray-warm">+</span>
          </summary>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {passing.map((s) => (
              <li key={s.id} className="flex gap-2 text-[14px] leading-[1.5] text-gray-warm">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E7D4A]" />
                <span>
                  {s.label}
                  {s.detail && <span className="text-[12px]"> · {s.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </details>
        {skipped.length > 0 && (
          <details className="mt-4 border-t border-line-soft pt-4">
            <summary className="cursor-pointer list-none text-[13px] font-medium uppercase tracking-[0.2em] text-bone-dim [&::-webkit-details-marker]:hidden">
              {t.notMeasured} · {skipped.length} <span className="text-gray-warm">+</span>
            </summary>
            <ul className="mt-4 space-y-1.5">
              {skipped.map((s) => (
                <li key={s.id} className="text-[14px] text-gray-warm">
                  {s.label} <span className="text-[12px]">· {t[s.status]}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>

      {/* CTA */}
      <div className="rounded-3xl border border-line bg-[#26231E] p-6 text-[#F3F0EA] sm:p-8">
        <p className="text-xl font-light tracking-tight">{t.cta}</p>
        <p className="mt-2 text-[14px] leading-[1.7] text-[#F3F0EA]/70">{t.ctaLead}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={WA} className="inline-flex items-center gap-2 rounded-full bg-[#F3F0EA] px-6 py-3 text-sm font-medium text-[#26231E] transition-transform hover:-translate-y-px">
            {t.ctaWa} →
          </a>
          <a href={contactHref} className="inline-flex items-center gap-2 rounded-full border border-[#F3F0EA]/30 px-6 py-3 text-sm text-[#F3F0EA] transition-colors hover:border-[#F3F0EA]/60">
            {t.ctaQuote}
          </a>
        </div>
      </div>
    </div>
  );
}
