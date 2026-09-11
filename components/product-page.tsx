import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { Band, SectionHead, Eyebrow } from "@/components/contractory/page/parts";
import { trNav, enNav, sqNav, trSections, enSections, sqSections } from "@/lib/i18n";
import type { ProductContent } from "@/lib/contractory-i18n";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav, sq: sqNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer, sq: sqSections.footer } as const;
const HOME = { tr: "/", en: "/en", sq: "/sq" } as const;
const SITE = "https://woodstonestudio.com";

type Props = {
  c: ProductContent;
  locale: Locale;
  slug: string; // "contractory"
  externalUrl: string; // "https://contractory.xyz"
  accentClass: string; // "text-contractory-soft" / "bg-contractory"
  console: ReactNode; // <Instrument><Console/></Instrument>
};

export function ProductPage({ c, locale, slug, externalUrl, accentClass, console: consoleNode }: Props) {
  const softClass = accentClass.startsWith("text-") ? accentClass : "text-contractory-soft";
  return (
    <>
      <Nav t={NAV[locale]} />
      <main>
        {/* Hero */}
        <section className="relative mx-auto flex min-h-svh max-w-6xl items-center overflow-x-clip px-6 pb-24 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.86fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>{c.meta.title.split(" — ")[0]}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 text-[54px] font-light leading-[1.03] tracking-tightest text-bone sm:text-[64px] lg:text-[76px]">
                  {c.h1[0]}
                  <br />
                  {c.h1[1]}
                  <br />
                  {c.h1[2]}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex max-w-md items-center gap-4">
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    {c.heroStrip1}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    {c.heroStrip2}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-11 flex flex-wrap items-center gap-4">
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                  >
                    {c.heroOpen}
                  </a>
                  <Link
                    href={`${HOME[locale]}#products`}
                    className="rounded-full border border-line px-7 py-3 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                  >
                    {c.heroAll}
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} y={28} className="mt-4 lg:mt-0">
              <div className="origin-[left_center] lg:-mr-10 lg:scale-[1.08]">{consoleNode}</div>
              <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8">
                {c.heroCaption}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <Band>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <Eyebrow>{c.overviewEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-light leading-[1.5] tracking-tight text-bone">{c.overview}</p>
            </Reveal>
          </div>
        </Band>

        {/* Problem */}
        <Band>
          <SectionHead eyebrow={c.problem.eyebrow} headline={c.problem.headline} body={c.problem.body} />
        </Band>

        {/* Solution */}
        <Band>
          <SectionHead eyebrow={c.solution.eyebrow} headline={c.solution.headline} body={c.solution.body} />
        </Band>

        {/* Features */}
        <Band>
          <Reveal>
            <Eyebrow>{c.featuresEyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-px sm:grid-cols-2">
            {c.features.map((f, i) => (
              <Reveal key={f.n} delay={(i % 2) * 0.06}>
                <div className="border-t border-line py-8">
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-sm ${softClass}`}>{f.n}</span>
                    <h3 className="text-xl font-normal tracking-tight text-bone">{f.name}</h3>
                  </div>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-gray-warm">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* Technology */}
        <Band>
          <SectionHead eyebrow={c.techEyebrow} headline={c.techHead} />
          <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
            {c.tech.map(([k, v], i) => (
              <Reveal key={k} delay={(i % 2) * 0.05}>
                <div className="flex items-baseline justify-between gap-6 border-t border-line py-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-warm">{k}</span>
                  <span className="text-right text-[15px] tracking-tight text-bone">{v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* Gallery */}
        <Band>
          <SectionHead eyebrow={c.galleryEyebrow} headline={c.galleryHead} />
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal y={24}>
              {consoleNode}
              <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">{c.galleryCap1}</p>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <div className="lg:mt-16">
                {consoleNode}
                <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">{c.galleryCap2}</p>
              </div>
            </Reveal>
          </div>
        </Band>

        {/* Architecture */}
        <Band>
          <SectionHead eyebrow={c.archEyebrow} headline={c.archHead} />
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {c.architecture.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.06}>
                <div className="h-full border-t border-line py-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pr-4">
                  <span className={`font-mono text-sm ${softClass}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-normal tracking-tight text-bone">{a.step}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-gray-warm">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* Roadmap */}
        <Band>
          <SectionHead eyebrow={c.roadmapEyebrow} headline={c.roadmapHead} />
          <div className="mt-14 space-y-px">
            {c.roadmap.map((r, i) => (
              <Reveal key={r.when} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-7 sm:grid-cols-[100px_1fr]">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${r.done ? "bg-contractory" : "bg-gray-warm/50"}`} />
                    <span className="font-mono text-[13px] tracking-tight text-bone">{r.when}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal tracking-tight text-bone">{r.title}</h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-[1.7] text-gray-warm">{r.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* FAQ */}
        <Band>
          <SectionHead eyebrow={c.faqEyebrow} headline={c.faqHead} />
          <div className="mt-14 grid gap-x-16 gap-y-px lg:grid-cols-2">
            {c.faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 2) * 0.06}>
                <div className="border-t border-line py-8">
                  <h3 className="text-lg font-normal tracking-tight text-bone">{item.q}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-gray-warm">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* CTA */}
        <Band>
          <div className="flex flex-col items-start gap-10">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-light leading-[1.08] tracking-tightest text-bone sm:text-5xl lg:text-[60px]">
                {c.ctaHead}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-[17px] leading-[1.7] text-gray-warm">{c.ctaBody}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3.5 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                >
                  {c.heroOpen}
                </a>
                <Link
                  href={`${HOME[locale]}#contact`}
                  className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                >
                  {c.studioBtn}
                </Link>
              </div>
            </Reveal>
          </div>
        </Band>
      </main>
      <Footer t={FOOTER[locale]} />
    </>
  );
}

export function productMetadata(c: ProductContent, slug: string, locale: Locale) {
  const paths = {
    contractory: { tr: "/contractory", en: "/en/contractory", sq: "/sq/contractory" },
    alphaos: { tr: "/alphaos", en: "/en/alphaos", sq: "/sq/alphaos" },
    authorai: { tr: "/authorai", en: "/en/authorai", sq: "/sq/authorai" },
  } as Record<string, Record<Locale, string>>;
  const p = paths[slug];
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: p[locale],
      languages: { tr: `${SITE}${p.tr}`, en: `${SITE}${p.en}`, sq: `${SITE}${p.sq}` },
    },
    openGraph: { title: c.meta.title, description: c.meta.description, url: `${SITE}${p[locale]}`, type: "website" },
  };
}
