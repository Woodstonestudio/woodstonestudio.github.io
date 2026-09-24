import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import type { AboutContent } from "@/lib/about";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";

export function AboutPage({ c }: { c: AboutContent }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: c.meta.title,
    url: `${SITE}${c.slug}`,
    description: c.meta.description,
    about: { "@type": "Organization", name: "WoodstoneStudio", url: SITE },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Nav t={NAV[c.locale]} />
      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{c.eyebrow}</p>
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
              <p className="max-w-lg text-[17px] leading-[1.8] text-gray-warm lg:pt-16">{c.lead}</p>
            </Reveal>
          </div>
        </section>

        {/* Hikâye */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <Reveal>
                <h2 className="text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {c.storyTitle[0]}
                  <br />
                  {c.storyTitle[1]}
                </h2>
              </Reveal>
              <div className="space-y-6">
                {c.story.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="max-w-2xl text-[16px] leading-[1.85] text-gray-warm">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Değerler */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <Reveal>
              <h2 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {c.valuesTitle[0]}
                <br />
                {c.valuesTitle[1]}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {c.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full bg-surface p-8">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-gray-warm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[19px] font-light tracking-tight text-bone">{v.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-[1.75] text-gray-warm">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Teknolojiler */}
        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
              <div>
                <Reveal>
                  <h2 className="text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                    {c.stackTitle[0]}
                    <br />
                    {c.stackTitle[1]}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-6 max-w-md text-[16px] leading-[1.8] text-gray-warm">{c.stackLead}</p>
                </Reveal>
              </div>
              <div>
                {c.stack.map((s, i) => (
                  <Reveal key={s.group} delay={(i % 3) * 0.05}>
                    <div className="grid gap-2 border-t border-line py-6 sm:grid-cols-[0.34fr_0.66fr] sm:gap-8">
                      <h3 className="text-[16px] font-light tracking-tight text-bone">{s.group}</h3>
                      <p className="font-mono text-[13.5px] leading-[1.7] tracking-tight text-bone-dim">{s.items}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kapanış */}
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

export function aboutMetadata(c: AboutContent) {
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: c.slug,
      languages: {
        tr: `${SITE}${c.alternates.tr}`,
        en: `${SITE}${c.alternates.en}`,
      },
    },
    openGraph: { title: c.meta.title, description: c.meta.description, url: `${SITE}${c.slug}`, type: "website", images: ["/og-cover.jpg"] },
  };
}
