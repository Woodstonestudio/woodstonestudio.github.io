import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { trNav, enNav, sqNav, trSections, enSections, sqSections } from "@/lib/i18n";
import { posts, postsForLocale, BLOG_BASE, BLOG_LABELS, type BlogPost } from "@/lib/blog";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav, sq: sqNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer, sq: sqSections.footer } as const;
const HOME = { tr: "/", en: "/en", sq: "/sq" } as const;
const SITE = "https://woodstonestudio.com";

function fmtDate(iso: string, locale: Locale) {
  const map = { tr: "tr-TR", en: "en-GB", sq: "sq-AL" } as const;
  return new Date(iso).toLocaleDateString(map[locale], { day: "numeric", month: "long", year: "numeric" });
}

// ── Blog liste sayfası ──
export function BlogList({ locale }: { locale: Locale }) {
  const L = BLOG_LABELS[locale];
  const base = BLOG_BASE[locale];
  const sorted = postsForLocale(locale);

  return (
    <>
      <Nav t={NAV[locale]} />
      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-44">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{L.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-3xl text-[42px] font-light leading-[1.05] tracking-tightest text-bone sm:text-[54px] lg:text-[62px]">
              {L.title[0]}
              <br />
              {L.title[1]}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-gray-warm">{L.lead}</p>
          </Reveal>
        </section>

        <section className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`${base}/${post.slug}`}
                  className="group grid gap-4 border-b border-line py-10 transition-colors lg:grid-cols-[0.2fr_0.8fr] lg:gap-10 lg:py-12"
                >
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
                      {post.category[locale]}
                    </span>
                    <span className="font-mono text-[11px] text-gray-warm">
                      {fmtDate(post.date, locale)}
                    </span>
                  </div>
                  <div>
                    <h2 className="max-w-2xl text-[24px] font-light leading-snug tracking-tight text-bone transition-colors group-hover:text-gray-warm sm:text-[28px]">
                      {post.title[locale]}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.8] text-gray-warm">
                      {post.excerpt[locale]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
                      {post.readMin} {L.readSuffix}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <Link href={HOME[locale]} className="text-sm text-gray-warm transition-colors hover:text-bone">
            ← {L.allPosts}
          </Link>
        </section>
      </main>
      <Footer t={FOOTER[locale]} />
    </>
  );
}

// ── Tekil yazı sayfası ──
export function BlogPostPage({ post, locale }: { post: BlogPost; locale: Locale }) {
  const L = BLOG_LABELS[locale];
  const base = BLOG_BASE[locale];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: post.date,
    inLanguage: locale,
    author: { "@type": "Organization", name: "WoodstoneStudio", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "WoodstoneStudio",
      logo: { "@type": "ImageObject", url: `${SITE}/brand/logo.png` },
    },
    mainEntityOfPage: `${SITE}${base}/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav t={NAV[locale]} />
      <main>
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:pb-32 lg:pt-44">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
              <span>{post.category[locale]}</span>
              <span aria-hidden className="text-gray-warm">·</span>
              <span className="text-gray-warm">{fmtDate(post.date, locale)}</span>
              <span aria-hidden className="text-gray-warm">·</span>
              <span className="text-gray-warm">{post.readMin} {L.readSuffix}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[34px] font-light leading-[1.12] tracking-tightest text-bone sm:text-[44px]">
              {post.title[locale]}
            </h1>
          </Reveal>

          <div className="mt-12 space-y-6">
            {post.body[locale].map((block, i) => {
              if (block.type === "h2") {
                return (
                  <Reveal key={i}>
                    <h2 className="pt-6 text-[24px] font-light leading-snug tracking-tight text-bone sm:text-[28px]">
                      {block.text}
                    </h2>
                  </Reveal>
                );
              }
              if (block.type === "ul") {
                return (
                  <Reveal key={i}>
                    <ul className="space-y-2.5 pl-1">
                      {block.items.map((it) => (
                        <li key={it} className="flex gap-3 text-[16.5px] leading-[1.75] text-gray-warm">
                          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-warm" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i}>
                  <p className="text-[16.5px] leading-[1.85] text-gray-warm">{block.text}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-5 border-t border-line pt-10">
            <a
              href={`${HOME[locale]}#contact`}
              className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(38,35,30,0.24)] hover:bg-[rgba(38,35,30,0.04)]"
            >
              {locale === "tr" ? "Bize Ulaşın" : locale === "en" ? "Get in Touch" : "Na Kontaktoni"}
            </a>
            <Link href={base} className="text-sm text-gray-warm transition-colors hover:text-bone">
              ← {L.back}
            </Link>
          </div>
        </article>
      </main>
      <Footer t={FOOTER[locale]} />
    </>
  );
}

export function blogListMetadata(locale: Locale) {
  const L = BLOG_LABELS[locale];
  const titles = { tr: "Blog", en: "Blog", sq: "Blog" };
  return {
    title: titles[locale],
    description: L.lead,
    alternates: {
      canonical: BLOG_BASE[locale],
      languages: {
        tr: `${SITE}/blog`,
        en: `${SITE}/en/blog`,
        sq: `${SITE}/sq/blog`,
      },
    },
    openGraph: { title: titles[locale], description: L.lead, url: `${SITE}${BLOG_BASE[locale]}`, type: "website" },
  };
}

export function blogPostMetadata(post: BlogPost, locale: Locale) {
  const langs: Record<string, string> = {};
  if (post.locales.includes("tr")) langs.tr = `${SITE}/blog/${post.slug}`;
  if (post.locales.includes("en")) langs.en = `${SITE}/en/blog/${post.slug}`;
  if (post.locales.includes("sq")) langs.sq = `${SITE}/sq/blog/${post.slug}`;
  return {
    title: post.title[locale],
    description: post.excerpt[locale],
    alternates: {
      canonical: `${BLOG_BASE[locale]}/${post.slug}`,
      languages: langs,
    },
    openGraph: {
      title: post.title[locale],
      description: post.excerpt[locale],
      url: `${SITE}${BLOG_BASE[locale]}/${post.slug}`,
      type: "article",
    },
  };
}
