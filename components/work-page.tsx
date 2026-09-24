import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WorkShowcase } from "@/components/work-showcase";
import { Reveal } from "@/components/motion/reveal";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import { workPage, WORK_PATH } from "@/lib/work";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const SECTIONS = { tr: trSections, en: enSections } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{children}</p>;
}

export function WorkPage({ locale }: { locale: Locale }) {
  const t = workPage[locale];
  const S = SECTIONS[locale];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "WoodstoneStudio", item: `${SITE}${HOME[locale]}` },
      { "@type": "ListItem", position: 2, name: t.eyebrow, item: `${SITE}${WORK_PATH[locale]}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav t={NAV[locale]} />
      <main>
        {/* ── Hero ── */}
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 lg:px-8 lg:pb-24 lg:pt-44">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl text-[46px] font-light leading-[1.05] tracking-tightest text-bone sm:text-[58px] lg:text-[68px]">
              {t.h1[0]}
              <br />
              {t.h1[1]}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-gray-warm">{t.lead}</p>
          </Reveal>
        </section>

        {/* ── Müşteri projesi ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <Eyebrow>{t.clientEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} y={24}>
              <a
                href={t.client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 grid gap-8 overflow-hidden rounded-2xl border border-line bg-[rgba(246,239,228,0.02)] p-7 transition-all duration-500 ease-soft hover:border-[rgba(38,35,30,0.2)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
              >
                <div className="overflow-hidden rounded-xl border border-line">
                  <Image
                    src={t.client.img}
                    alt={`${t.client.title} — ${t.client.field}`}
                    width={1891}
                    height={858}
                    className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.02]"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="text-3xl font-light tracking-tight text-bone">{t.client.title}</h2>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-warm">{t.client.field}</span>
                  </div>
                  <p className="mt-4 text-[15.5px] leading-[1.8] text-gray-warm">{t.client.desc}</p>
                  <blockquote className="mt-6 border-l border-line pl-5 text-[15px] italic leading-[1.8] text-bone">
                    “{t.client.quote}”
                    <footer className="mt-3 font-mono text-[11px] not-italic uppercase tracking-[0.14em] text-gray-warm">{t.client.author}</footer>
                  </blockquote>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-bone">
                    {t.client.cta} · {t.client.host}
                    <span aria-hidden className="text-gray-warm transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── Kendi ürünlerimiz ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
              <div>
                <Reveal>
                  <Eyebrow>{t.productsEyebrow}</Eyebrow>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-8 text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                    {t.productsTitle[0]}
                    <br />
                    {t.productsTitle[1]}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">{t.productsLead}</p>
              </Reveal>
            </div>

            <div className={`mt-16 grid gap-8 ${t.products.length > 1 ? "lg:grid-cols-2" : ""}`}>
              {t.products.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06} y={24}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-[rgba(246,239,228,0.02)] transition-all duration-500 ease-soft hover:border-[rgba(38,35,30,0.2)] sm:flex-row"
                  >
                    {p.img && (
                      <div className="relative aspect-[4/3] shrink-0 overflow-hidden border-b border-line bg-surface sm:aspect-auto sm:max-h-[440px] sm:w-[38%] lg:max-w-[320px] sm:border-b-0 sm:border-r">
                        <Image
                          src={p.img}
                          alt={`${p.title} — ${p.platform}`}
                          width={1290}
                          height={2796}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <span className="font-mono text-[11px] tracking-[0.12em] text-bone-dim">{p.platform}</span>
                      <h3 className="mt-3 text-2xl font-light tracking-tight text-bone">{p.title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-[1.75] text-gray-warm">{p.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[10.5px] tracking-tight text-bone-dim">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bone">
                        {p.cta}
                        <span aria-hidden className="text-gray-warm transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Konsept çalışmalar ── */}
        <WorkShowcase t={S.work} />

        {/* ── Kapanış ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
              <Reveal>
                <h2 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {t.closingTitle[0]}
                  <br />
                  {t.closingTitle[1]}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="lg:pt-3">
                  <p className="max-w-md text-[16px] leading-[1.8] text-gray-warm">{t.closingLead}</p>
                  <Link
                    href={`${HOME[locale]}#contact`}
                    className="mt-8 inline-block rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(38,35,30,0.24)] hover:bg-[rgba(38,35,30,0.04)]"
                  >
                    {t.closingCta}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer t={S.footer} />
    </>
  );
}

export function workMetadata(locale: Locale) {
  const t = workPage[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: WORK_PATH[locale],
      languages: { tr: `${SITE}${WORK_PATH.tr}`, en: `${SITE}${WORK_PATH.en}` },
    },
    openGraph: { title: t.meta.title, description: t.meta.description, url: `${SITE}${WORK_PATH[locale]}`, type: "website", images: ["/og-cover.jpg"] },
  };
}
