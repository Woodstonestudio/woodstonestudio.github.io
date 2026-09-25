import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PriceCalculator } from "@/components/price-calculator";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";
const PATH = { tr: "/fiyat-hesaplama", en: "/en/pricing-calculator" } as const;

const C = {
  tr: {
    eyebrow: "Fiyat hesaplayıcı",
    t1: "Projeniz",
    t2: "ne kadar tutar?",
    lead: "Birkaç seçimle tahmini fiyat aralığını ve süreyi anında görün. Kayıt yok; yazılı teklif isterseniz seçimleriniz bize gelir.",
    back: "Ana sayfa",
    faqTitle: "Fiyatlar hakkında",
    faqs: [
      { q: "Neden aralık, neden net fiyat değil?", a: "Aynı 'kurumsal site' bir firmada 6 sayfa ve hazır metinken başka bir firmada 20 sayfa, üç dil ve sıfırdan içerik olabilir. Aralık gerçekçi bir başlangıç noktasıdır; kapsam netleşince tek bir rakamla yazılı teklif veririz." },
      { q: "Fiyata neler dahil?", a: "Tasarım, geliştirme, mobil uyum, teknik SEO, alan adı ve barındırma kurulumu, yayına alma ve yayından sonra 30 gün düzeltme desteği. Alan adı ve barındırma ücretleri (yıllık, sağlayıcıya ödenir) hariçtir." },
      { q: "Ödeme nasıl?", a: "Genellikle %40 başlangıçta, %60 yayında. Büyük projelerde aşamalı ödeme planı yapıyoruz." },
      { q: "Aylık bakım ne kapsıyor?", a: "Güncellemeler, küçük içerik değişiklikleri, yedekleme, güvenlik ve hız takibi, öncelikli destek. Zorunlu değildir; isteyen müşteriler için ayrı bir aylık plandır." },
    ],
  },
  en: {
    eyebrow: "Pricing calculator",
    t1: "What will",
    t2: "your project cost?",
    lead: "A few choices show you an estimated price range and timeline instantly. No sign-up; if you request a written quote, your selections come with it.",
    back: "Home",
    faqTitle: "About pricing",
    faqs: [
      { q: "Why a range and not a fixed price?", a: "The same 'corporate website' can be 6 pages with ready copy for one company and 20 pages, three languages and content from scratch for another. The range is a realistic starting point; once the scope is clear we send a written quote with a single figure." },
      { q: "What's included?", a: "Design, development, mobile-friendliness, technical SEO, domain and hosting setup, launch, and 30 days of post-launch fixes. Domain and hosting fees (yearly, paid to the provider) are excluded." },
      { q: "How is payment structured?", a: "Usually 40% upfront and 60% at launch. For larger projects we set up milestone payments." },
      { q: "What does monthly care cover?", a: "Updates, small content changes, backups, security and speed monitoring, priority support. Optional — a separate monthly plan for clients who want it." },
    ],
  },
} as const;

export function PricingPage({ locale }: { locale: Locale }) {
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
        <section>
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{c.eyebrow}</p>
            <h1 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
              {c.t1}
              <br />
              {c.t2}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-gray-warm">{c.lead}</p>
            <div className="mt-12">
              <PriceCalculator locale={l} />
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

export function pricingMetadata(locale: Locale) {
  const l = locale === "en" ? "en" : "tr";
  const titles = {
    tr: "Web Sitesi Fiyat Hesaplama — Tahmini Fiyat ve Süre | WoodstoneStudio",
    en: "Website Pricing Calculator — Estimated Cost and Timeline | WoodstoneStudio",
  } as const;
  const descs = {
    tr: "Web sitesi, e-ticaret, mobil uygulama ve SaaS projeleri için tahmini fiyat aralığını ve süreyi birkaç seçimle görün. Yazılı teklif için seçimlerinizi gönderin.",
    en: "See an estimated price range and timeline for websites, e-commerce, mobile apps and SaaS projects with a few choices. Send your selections for a written quote.",
  } as const;
  return {
    title: titles[l],
    description: descs[l],
    alternates: { canonical: PATH[l], languages: { tr: `${SITE}${PATH.tr}`, en: `${SITE}${PATH.en}` } },
    openGraph: { title: titles[l], description: descs[l], url: `${SITE}${PATH[l]}`, type: "website", images: ["/og-cover.jpg"] },
  };
}
