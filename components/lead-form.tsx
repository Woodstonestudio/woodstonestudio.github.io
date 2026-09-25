"use client";

import { useEffect, useRef, useState } from "react";

/**
 * İletişim / teklif formu.
 * Statik site olduğu için gönderim, WoodstoneStudio Growth'taki /api/lead
 * uç noktasına gider: talep panelde "Talepler" sekmesine düşer ve e-posta
 * bildirimi gönderilir. Spam koruması sunucu tarafında (origin, bal kabı,
 * minimum süre, IP sınırı).
 */
const LEAD_ENDPOINT = "https://woodstonestudio-growth.vercel.app/api/lead";

type Locale = "tr" | "en";

const SERVICES: { key: string; tr: string; en: string }[] = [
  { key: "web", tr: "Web sitesi", en: "Website" },
  { key: "ecommerce", tr: "E-ticaret", en: "E-commerce" },
  { key: "mobile", tr: "Mobil uygulama", en: "Mobile app" },
  { key: "saas", tr: "SaaS / MVP", en: "SaaS / MVP" },
  { key: "ai", tr: "Yapay zekâ / otomasyon", en: "AI / automation" },
  { key: "seo", tr: "SEO", en: "SEO" },
  { key: "social", tr: "Sosyal medya", en: "Social media" },
  { key: "other", tr: "Diğer", en: "Other" },
];

const T = {
  tr: {
    title: "Projenizi anlatın",
    lead: "Formu doldurun, en geç bir iş günü içinde dönüş yapalım. Ön görüşme ücretsizdir.",
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon (isteğe bağlı)",
    company: "Firma (isteğe bağlı)",
    service: "İlgilendiğiniz hizmet",
    choose: "Seçin",
    message: "Kısaca projeniz",
    messagePh: "Ne yapmak istiyorsunuz? Varsa örnek siteler, hedef tarih ve bütçe aralığı.",
    consentPre: "",
    consentLink: "Aydınlatma Metni",
    consentHref: "/gizlilik",
    consent: "'ni okudum; talebime dönüş yapılması için bilgilerimin işlenmesini ve bu amaçla yurt dışındaki hizmet sağlayıcılara aktarılmasını kabul ediyorum.",
    send: "Gönder",
    sending: "Gönderiliyor…",
    ok: "Teşekkürler! Talebiniz bize ulaştı, en kısa sürede dönüş yapacağız.",
    err: "Gönderilemedi. Lütfen tekrar deneyin ya da doğrudan e-posta / WhatsApp ile yazın:",
    limited: "Çok fazla deneme yapıldı. Lütfen biraz sonra tekrar deneyin ya da e-posta ile yazın:",
    invalid: "Lütfen zorunlu alanları kontrol edin (ad, geçerli e-posta, en az birkaç kelimelik mesaj ve onay).",
  },
  en: {
    title: "Tell us about your project",
    lead: "Fill in the form and we'll get back to you within one business day. The first consultation is free.",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    company: "Company (optional)",
    service: "Service you're interested in",
    choose: "Select",
    message: "Your project in brief",
    messagePh: "What would you like to build? Example sites, target date and budget range if you have them.",
    consentPre: "I have read the ",
    consentLink: "Privacy Notice",
    consentHref: "/en/privacy",
    consent: " and agree to my details being processed, including by service providers abroad, so you can respond to my request.",
    send: "Send",
    sending: "Sending…",
    ok: "Thank you! We've received your request and will get back to you shortly.",
    err: "Couldn't send. Please try again or reach us directly by email / WhatsApp:",
    limited: "Too many attempts. Please try again later or email us:",
    invalid: "Please check the required fields (name, valid email, a short message and consent).",
  },
} as const;

const INPUT =
  "w-full rounded-2xl border border-line bg-transparent px-5 py-3.5 text-[15px] text-bone placeholder:text-gray-warm transition-colors focus:border-bone-dim focus:outline-none";

export function LeadForm({ locale = "tr" }: { locale?: Locale }) {
  const t = T[locale];
  const openedAt = useRef<number>(Date.now());
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err" | "limited" | "invalid">("idle");
  const [service, setService] = useState("");

  // Hizmet sayfasından gelindiyse (?service=web) hizmeti önceden seç
  useEffect(() => {
    try {
      const s = new URLSearchParams(window.location.search).get("service");
      if (s && SERVICES.some((x) => x.key === s)) setService(s);
    } catch {
      /* yok */
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const svc = SERVICES.find((x) => x.key === service);
    const body = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      company: String(f.get("company") ?? ""),
      service: svc ? svc.tr : "",
      message: String(f.get("message") ?? ""),
      consent: f.get("consent") === "on",
      website: String(f.get("website") ?? ""), // bal kabı
      locale,
      pageUrl: window.location.href,
      elapsedMs: Date.now() - openedAt.current,
    };
    if (!body.consent || body.name.trim().length < 2 || body.message.trim().length < 10) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const r = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (r.ok) {
        setState("ok");
        return;
      }
      setState(r.status === 429 ? "limited" : r.status === 400 ? "invalid" : "err");
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-3xl border border-line bg-surface/60 p-8 text-[17px] leading-[1.7] text-bone" role="status">
        ✓ {t.ok}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8" noValidate>
      <h3 className="text-2xl font-light tracking-tight text-bone">{t.title}</h3>
      <p className="mt-2 text-[15px] leading-[1.7] text-gray-warm">{t.lead}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="lf-name">{t.name}</label>
        <input id="lf-name" name="name" required autoComplete="name" placeholder={t.name + " *"} className={INPUT} />
        <label className="sr-only" htmlFor="lf-email">{t.email}</label>
        <input id="lf-email" name="email" type="email" required autoComplete="email" placeholder={t.email + " *"} className={INPUT} />
        <label className="sr-only" htmlFor="lf-phone">{t.phone}</label>
        <input id="lf-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phone} className={INPUT} />
        <label className="sr-only" htmlFor="lf-company">{t.company}</label>
        <input id="lf-company" name="company" autoComplete="organization" placeholder={t.company} className={INPUT} />
        <label className="sr-only" htmlFor="lf-service">{t.service}</label>
        <select
          id="lf-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={INPUT + " sm:col-span-2 " + (service ? "" : "text-gray-warm")}
        >
          <option value="">{t.service} — {t.choose}</option>
          {SERVICES.map((s) => (
            <option key={s.key} value={s.key}>
              {s[locale]}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="lf-message">{t.message}</label>
        <textarea
          id="lf-message"
          name="message"
          required
          rows={5}
          placeholder={t.messagePh}
          className={INPUT + " sm:col-span-2 resize-y"}
        />
        {/* Bal kabı — ekranda görünmez, botlar doldurur */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <input name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <label className="mt-4 flex items-start gap-3 text-[13px] leading-[1.6] text-gray-warm">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#26231E]" />
        <span>
          {t.consentPre}
          <a href={t.consentHref} target="_blank" rel="noopener" className="text-bone underline underline-offset-2">
            {t.consentLink}
          </a>
          {t.consent}
        </span>
      </label>

      {(state === "err" || state === "limited" || state === "invalid") && (
        <p className="mt-4 text-[14px] leading-[1.6] text-[#8a3a2a]" role="alert">
          {state === "invalid" ? t.invalid : state === "limited" ? t.limited : t.err}{" "}
          {state !== "invalid" && (
            <>
              <a className="underline" href="mailto:info@woodstonestudio.com">info@woodstonestudio.com</a>
              {" · "}
              <a className="underline" href="https://wa.me/355696018457" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-8 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98] disabled:opacity-60"
      >
        {state === "sending" ? t.sending : t.send} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
