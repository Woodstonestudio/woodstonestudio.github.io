"use client";

import { useEffect, useState } from "react";

/**
 * Çerez onayı (KVKK / GDPR).
 * - Google Analytics (GA4) YALNIZCA "Kabul Et" sonrası yüklenir; onaysız
 *   hiçbir analitik çerez yazılmaz ve Google'a istek gitmez.
 * - Seçim tarayıcıda saklanır; footer'daki "Çerez ayarları" ile yeniden açılır
 *   (window "wss:cookie-settings" olayı).
 * - Kabul ve Reddet eşit ağırlıkta sunulur.
 */

const GA_ID = "G-V7NRECZQ92";
const KEY = "wss-consent"; // "granted" | "denied"
export const COOKIE_SETTINGS_EVENT = "wss:cookie-settings";

type Locale = "tr" | "en";

const T = {
  tr: {
    title: "Çerez tercihiniz",
    body: "Sitenin nasıl kullanıldığını anlamak için, yalnızca onay verirseniz Google Analytics çerezlerini kullanıyoruz. Zorunlu olmayan hiçbir çerez onayınız olmadan çalışmaz.",
    more: "Gizlilik ve Çerez Politikası",
    href: "/gizlilik",
    accept: "Kabul Et",
    reject: "Reddet",
  },
  en: {
    title: "Your cookie choice",
    body: "We use Google Analytics cookies to understand how the site is used — only if you agree. No non-essential cookie runs without your consent.",
    more: "Privacy & Cookie Policy",
    href: "/en/privacy",
    accept: "Accept",
    reject: "Reject",
  },
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadAnalytics() {
  if (typeof window === "undefined" || document.getElementById("ga4-src")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga4-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

/** Onay geri çekildiğinde GA çerezlerini temizler. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function write(v: "granted" | "denied") {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* depolama kapalıysa bu oturumla sınırlı kalır */
  }
}

export function CookieConsent({ locale = "tr" }: { locale?: Locale }) {
  const t = T[locale];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = read();
    if (v === "granted") loadAnalytics();
    else if (v !== "denied") setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const accept = () => {
    write("granted");
    loadAnalytics();
    setOpen(false);
  };

  const reject = () => {
    const wasGranted = read() === "granted";
    write("denied");
    clearAnalyticsCookies();
    setOpen(false);
    // GA zaten yüklendiyse tamamen durması için sayfayı yenile
    if (wasGranted && document.getElementById("ga4-src")) window.location.reload();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-line bg-surface/95 p-6 shadow-[0_20px_50px_-20px_rgba(38,35,30,0.45)] backdrop-blur-xl sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-[400px]"
    >
      <p className="text-[16px] font-medium tracking-tight text-bone">{t.title}</p>
      <p className="mt-2.5 text-[14px] leading-[1.7] text-gray-warm">
        {t.body}{" "}
        <a href={t.href} className="text-bone underline underline-offset-2">
          {t.more}
        </a>
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={reject}
          className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-5 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
        >
          {t.reject}
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-5 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}

/** "Çerez ayarları" — footer'da metin, politika sayfasında buton olarak. */
export function CookieSettingsButton({ label, variant = "link" }: { label: string; variant?: "link" | "button" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
      className={
        variant === "button"
          ? "rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-6 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
          : "font-mono text-[10px] uppercase tracking-[0.18em] text-gray-warm transition-colors hover:text-bone"
      }
    >
      {label}
    </button>
  );
}
