import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { postsForLocale, BLOG_BASE } from "@/lib/blog";
import type { Locale } from "@/components/service-page";

/**
 * Ana sayfa — son 3 blog yazısı. İç linklemeyi güçlendirir,
 * yeni yazıların arama motorlarınca daha hızlı bulunmasını sağlar.
 */

const L = {
  tr: { eyebrow: "Blog", t1: "Son", t2: "yazılar", all: "Tüm yazılar", read: "dk okuma" },
  en: { eyebrow: "Blog", t1: "Latest", t2: "articles", all: "All articles", read: "min read" },
} as const;

export function LatestPosts({ locale = "tr" }: { locale?: Locale }) {
  const t = L[locale];
  const base = BLOG_BASE[locale];
  const latest = postsForLocale(locale).slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section id="blog" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {t.t1} {t.t2}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              href={base}
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:text-bone"
            >
              {t.all}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link href={`${base}/${post.slug}`} className="group flex h-full flex-col bg-surface p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
                  {post.category[locale]}
                </span>
                <h3 className="mt-4 text-[20px] font-light leading-snug tracking-tight text-bone transition-colors group-hover:text-gray-warm">
                  {post.title[locale]}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.75] text-gray-warm">{post.excerpt[locale]}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
                  {post.readMin} {t.read}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
