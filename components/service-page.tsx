import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { trNav, enNav, sqNav, trSections, enSections, sqSections } from "@/lib/i18n";

/**
 * Hizmet sayfası şablonu — SEO odaklı, üç dilli.
 * Her hizmet için lib/services.ts içindeki içerik sözlüğüyle beslenir.
 * Hero → kapsam → süreç → SSS (FAQPage şeması) → CTA.
 */

export type Locale = "tr" | "en" | "sq";

export type ServiceContent = {
  locale: Locale;
  slug: string; // bu dildeki URL yolu, örn. "/web-tasarim" | "/en/web-design" | "/sq/dizajn-web"
  alternates: Record<Locale, string>; // hreflang için 3 dilin tam yolu
  meta: { title: string; description: string; keywords: string[] };
  eyebrow: string;
  h1: [string, string];
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scopeTitle: [string, string];
  scopeLead: string;
  scope: { title: string; desc: string }[];
  processTitle: [string, string];
  process: { step: string; title: string; desc: string }[];
  faqTitle: [string, string];
  faq: { q: string; a: string }[];
  closingTitle: [string, string];
  closingLead: string;
  closingCta: string;
  backLabel: string;
  serviceType: string; // Service şeması için
  areaServed: string;
};

const NAV = { tr: trNav, en: enNav, sq: sqNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer, sq: sqSections.footer } as const;
const HOME = { tr: "/", en: "/en", sq: "/sq" } as const;
const SITE = "https://woodstonestudio.com";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
      {children}
    </p>
  );
}

export function ServicePage({ c }: { c: ServiceContent }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.meta.title,
    serviceType: c.serviceType,
    description: c.meta.description,
    url: `${SITE}${c.slug}`,
    areaServed: c.areaServed,
    provider: { "@type": "Organization", name: "Woodstone Studio", url: SITE },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Woodstone Studio", item: `${SITE}${HOME[c.locale]}` },
      { "@type": "ListItem", position: 2, name: c.eyebrow, item: `${SITE}${c.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav t={NAV[c.locale]} />
      <main>
        {/* ── Hero ── */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>{c.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 text-[46px] font-light leading-[1.05] tracking-tightest text-bone sm:text-[58px] lg:text-[68px]">
                  {c.h1[0]}
                  <br />
                  {c.h1[1]}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <div className="lg:pt-14">
                <p className="max-w-lg text-[17px] leading-[1.8] text-gray-warm">{c.lead}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={`${HOME[c.locale]}#contact`}
                    className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                  >
                    {c.ctaPrimary}
                  </a>
                  <Link
                    href={`${HOME[c.locale]}#work`}
                    className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone"
                  >
                    {c.ctaSecondary}
                    <span aria-hidden className="text-gray-warm transition-transform duration-300 ease-soft group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Kapsam ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <div>
                <Reveal>
                  <h2 className="text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                    {c.scopeTitle[0]}
                    <br />
                    {c.scopeTitle[1]}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-6 max-w-md text-[16px] leading-[1.8] text-gray-warm">{c.scopeLead}</p>
                </Reveal>
              </div>
              <div>
                {c.scope.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 0.05}>
                    <div className="grid gap-3 border-t border-line py-7 sm:grid-cols-[0.36fr_0.64fr] sm:gap-8">
                      <h3 className="text-[19px] font-light tracking-tight text-bone">{s.title}</h3>
                      <p className="text-[15px] leading-[1.8] text-gray-warm">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Süreç ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <Reveal>
              <h2 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {c.processTitle[0]}
                <br />
                {c.processTitle[1]}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {c.process.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="h-full bg-surface p-8">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-gray-warm">{p.step}</span>
                    <h3 className="mt-4 text-[19px] font-light tracking-tight text-bone">{p.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-[1.75] text-gray-warm">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SSS ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <Reveal>
                <h2 className="text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {c.faqTitle[0]}
                  <br />
                  {c.faqTitle[1]}
                </h2>
              </Reveal>
              <div>
                {c.faq.map((f, i) => (
                  <Reveal key={f.q} delay={(i % 2) * 0.05}>
                    <details className="group border-t border-line py-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-light leading-snug tracking-tight text-bone [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span aria-hidden className="shrink-0 text-gray-warm transition-transform duration-300 ease-soft group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-gray-warm">{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Kapanış CTA ── */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
              <Reveal>
                <h2 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {c.closingTitle[0]}
                  <br />
                  {c.closingTitle[1]}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="lg:pt-3">
                  <p className="max-w-md text-[16px] leading-[1.8] text-gray-warm">{c.closingLead}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a
                      href={`${HOME[c.locale]}#contact`}
                      className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(38,35,30,0.24)] hover:bg-[rgba(38,35,30,0.04)]"
                    >
                      {c.closingCta}
                    </a>
                    <Link href={HOME[c.locale]} className="text-sm text-gray-warm transition-colors hover:text-bone">
                      ← {c.backLabel}
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer t={FOOTER[c.locale]} />
    </>
  );
}

/** Next.js metadata üretici — 3 yönlü hreflang dahil. */
export function serviceMetadata(c: ServiceContent) {
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: c.slug,
      languages: {
        tr: `${SITE}${c.alternates.tr}`,
        en: `${SITE}${c.alternates.en}`,
        sq: `${SITE}${c.alternates.sq}`,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${SITE}${c.slug}`,
      type: "website",
    },
  };
}
