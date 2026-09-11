import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * Ürünler — kısa editoryal giriş + üç kompakt ürün kartı.
 * Uzun ürün bölümlerinin yerini alır; detay her ürünün kendi sayfasında.
 */
export function ProductsIntro({ t = trSections.productsIntro }: { t?: SectionsDict["productsIntro"] }) {
  return (
    <section id="products" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {t.t1}
                <br />
                {t.t2}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">{t.lead}</p>
          </Reveal>
        </div>

        {/* Ürün kartları */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:mt-20">
          {t.cards.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.08}>
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-300 hover:bg-[rgba(38,35,30,0.03)]"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">{card.tag}</span>
                  <h3 className="mt-4 text-2xl font-light tracking-tight text-bone">{card.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-gray-warm">{card.desc}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim transition-colors group-hover:text-bone">
                  {t.cardCta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
