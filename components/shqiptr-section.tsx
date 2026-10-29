import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * ShqipTR — kendi dil öğrenme uygulamamızın vitrini (iOS + Android).
 * Solda özellikler ve iki mağaza butonu; sağda uygulamanın tanıtım görseli.
 * ShqipTR'nin kırmızı kimliği yalnızca görselde; bölüm sitenin sade diliyle kalır.
 */
const IMG = "/work/shqiptr-banner.webp";

export function ShqipTR({ t = trSections.shqiptr }: { t?: SectionsDict["shqiptr"] }) {
  return (
    <section id="shqiptr" className="relative scroll-mt-16 border-t border-line">
      {/* Uygulama şeması: AI cevapları ve arama sonuçları için ad, platform, fiyat */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "@id": "https://woodstonestudio.com/#shqiptr",
            name: "ShqipTR",
            operatingSystem: "iOS, Android",
            applicationCategory: "EducationalApplication",
            inLanguage: ["tr", "sq"],
            description: t.lead,
            url: t.url,
            downloadUrl: [t.url, t.playUrl],
            sameAs: [t.url, t.playUrl],
            screenshot: [
              "https://woodstonestudio.com/work/shqiptr-banner.webp",
              "https://woodstonestudio.com/work/shqiptr-phone.webp",
            ],
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: t.freeNote },
            author: { "@id": "https://woodstonestudio.com/#organization" },
            publisher: { "@id": "https://woodstonestudio.com/#organization" },
          }),
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-16">
          {/* Sol — görsel (masaüstünde solda; JoVVo'nun aynası) */}
          <Reveal delay={0.12} y={28} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-[rgba(38,35,30,0.14)] shadow-[0_30px_60px_-30px_rgba(38,35,30,0.45)]">
              <Image src={IMG} alt={t.imgAlt} width={1600} height={900} className="h-auto w-full" />
            </div>
          </Reveal>

          {/* Sağ — anlatı */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 text-4xl font-light leading-[1.05] tracking-tightest text-bone sm:text-5xl">
                {t.t1}
                {" "}<br />
                {t.t2}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-md text-[17px] leading-[1.8] text-gray-warm">{t.lead}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                {t.features.map((f) => (
                  <li key={f.name} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6">
                    <span className="text-[15px] font-medium text-bone">{f.name}</span>
                    <span className="text-[14px] leading-[1.6] text-gray-warm">{f.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#3A342B] to-[#26231E] px-7 py-3.5 text-sm font-medium text-surface shadow-[0_1px_2px_rgba(38,35,30,0.25)] transition-all duration-300 ease-soft hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_rgba(38,35,30,0.35)] active:translate-y-0 active:scale-[0.98]"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16.365 1.43c.09 1.14-.36 2.27-1.01 3.08-.7.87-1.86 1.54-2.98 1.45-.11-1.1.42-2.25 1.05-3 .7-.83 1.9-1.46 2.94-1.53zM20.5 17.02c-.55 1.28-.82 1.85-1.53 2.98-.99 1.58-2.38 3.55-4.1 3.56-1.53.02-1.92-1-4-.99-2.07.01-2.5 1-4.03.99-1.72-.02-3.04-1.79-4.03-3.37-2.77-4.42-3.06-9.6-1.35-12.36 1.21-1.96 3.13-3.11 4.93-3.11 1.84 0 2.99 1.01 4.51 1.01 1.47 0 2.37-1.01 4.5-1.01 1.6 0 3.3.87 4.51 2.38-3.96 2.17-3.32 7.82.12 9.32z" />
                  </svg>
                  {t.cta}
                  <span aria-hidden className="text-surface/70 transition-transform duration-300 ease-soft group-hover:translate-x-0.5">↗</span>
                </a>
                <a
                  href={t.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[rgba(38,35,30,0.22)] px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:-translate-y-px hover:border-[rgba(38,35,30,0.4)] active:translate-y-0 active:scale-[0.98]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1L13.6 12.4v-.2L3.7 1.7l-.1.1zm13.3 13.9-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1zm-.1.1L13.4 12.4 3.6 22.2c.4.4 1 .4 1.7.1l11.5-6.5m0-7.6L5.3 1.7c-.7-.4-1.3-.3-1.7.1l9.8 9.8 3.4-3.4z" />
                  </svg>
                  {t.playCta}
                  <span aria-hidden className="text-gray-warm transition-transform duration-300 ease-soft group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">{t.freeNote}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
