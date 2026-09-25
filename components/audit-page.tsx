import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SiteAudit } from "@/components/site-audit";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";
const PATH = { tr: "/site-analizi", en: "/en/site-audit" } as const;

const C = {
  tr: {
    eyebrow: "Ücretsiz site analizi",
    t1: "Siteniz müşteri",
    t2: "kaybettiriyor mu?",
    lead: "Adresinizi yazın; 20 saniyede HTTPS, mobil uyum, hız, temel SEO, iletişim formu ve altyapı kontrolü yapıp puanınızı ve düzeltme listenizi gösterelim. Kayıt yok, ücret yok.",
    bullets: [
      "Google'ın sıralamada kullandığı temel sinyaller",
      "Telefondan gelen ziyaretçinin gördüğü sorunlar",
      "Her madde için 'neden önemli' ve 'nasıl düzelir'",
    ],
    back: "Ana sayfa",
    faqTitle: "Sık sorulanlar",
    faqs: [
      { q: "Ne kontrol ediliyor?", a: "Ana sayfanız otomatik olarak açılır: HTTPS, mobil uyum (viewport), yükleme süresi, başlık / açıklama / H1, iletişim formu varlığı ve altyapının güncelliği. Tasarım ve içerik kalitesi otomatik ölçülemez; onları görüşmede elle inceleriz." },
      { q: "E-postamı neden istiyorsunuz?", a: "Sonucu size de gönderebilmek ve isterseniz düzeltme teklifi yapabilmek için. Liste satmıyoruz, bülten göndermiyoruz." },
      { q: "Puan düşükse ne yapmalıyım?", a: "Listedeki 'nasıl düzelir' adımlarını kendi ekibinizle uygulayabilirsiniz. İsterseniz teklif isteyin; çoğu sorun birkaç günde, mobil uyumsuzluk gibi yapısal sorunlar ise yeniden tasarımla çözülür." },
    ],
  },
  en: {
    eyebrow: "Free site audit",
    t1: "Is your website",
    t2: "losing customers?",
    lead: "Enter your address; in 20 seconds we check HTTPS, mobile-friendliness, speed, basic SEO, contact form and stack, then show your score and fix list. No sign-up, no cost.",
    bullets: [
      "The basic signals Google uses for ranking",
      "The problems visitors on phones actually see",
      "'Why it matters' and 'how to fix' for every item",
    ],
    back: "Home",
    faqTitle: "Frequently asked",
    faqs: [
      { q: "What is checked?", a: "Your homepage is opened automatically: HTTPS, mobile-friendliness (viewport), load time, title / description / H1, presence of a contact form and how current the stack is. Design and content quality can't be measured automatically; we review those manually in a call." },
      { q: "Why do you ask for my email?", a: "So we can send you the result and, if you want, a quote to fix the issues. We don't sell lists or send newsletters." },
      { q: "My score is low — what now?", a: "You can apply the 'how to fix' steps with your own team. Or request a quote: most issues take a few days; structural ones like mobile-friendliness are solved with a redesign." },
    ],
  },
} as const;

export function AuditPage({ locale }: { locale: Locale }) {
  const l = locale === "en" ? "en" : "tr";
  const c = C[l];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <Nav t={NAV[l]} />
      <main className="pt-20 lg:pt-28">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-20">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{c.eyebrow}</p>
                <h1 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {c.t1}
                  <br />
                  {c.t2}
                </h1>
                <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-gray-warm">{c.lead}</p>
                <ul className="mt-6 space-y-2 text-[15px] leading-[1.7] text-gray-warm">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-bone-dim" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-4">
                <SiteAudit locale={l} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <h2 className="text-2xl font-light tracking-tight text-bone">{c.faqTitle}</h2>
            <div className="mt-6 max-w-3xl space-y-px">
              {c.faqs.map((f) => (
                <details key={f.q} className="group border-t border-line py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-light leading-snug tracking-tight text-bone [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-gray-warm transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.8] text-gray-warm">{f.a}</p>
                </details>
              ))}
            </div>
            <Link href={HOME[l]} className="mt-10 inline-block text-sm text-gray-warm transition-colors hover:text-bone">
              ← {c.back}
            </Link>
          </div>
        </section>
      </main>
      <Footer t={FOOTER[l]} />
    </>
  );
}

export function auditMetadata(locale: Locale) {
  const l = locale === "en" ? "en" : "tr";
  const titles = {
    tr: "Ücretsiz Site Analizi — 20 Saniyede Web Sitesi Kontrolü | WoodstoneStudio",
    en: "Free Website Audit — Check Your Site in 20 Seconds | WoodstoneStudio",
  } as const;
  const descs = {
    tr: "Web sitenizi ücretsiz analiz edin: HTTPS, mobil uyum, hız, SEO temelleri, iletişim formu ve altyapı kontrolü. Puanınızı ve düzeltme listenizi anında görün.",
    en: "Audit your website for free: HTTPS, mobile-friendliness, speed, SEO basics, contact form and stack. See your score and fix list instantly.",
  } as const;
  return {
    title: titles[l],
    description: descs[l],
    alternates: {
      canonical: PATH[l],
      languages: { tr: `${SITE}${PATH.tr}`, en: `${SITE}${PATH.en}` },
    },
    openGraph: { title: titles[l], description: descs[l], url: `${SITE}${PATH[l]}`, type: "website", images: ["/og-cover.jpg"] },
  };
}
