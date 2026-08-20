import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * Fikir CTA — henüz yazılımı olmayan, elinde yalnızca fikir olan
 * müşterileri karşılayan dönüşüm bölümü. Site diliyle birebir uyumlu:
 * aynı tipografi, renk, spacing ve Reveal animasyonu.
 */
export function IdeaCTA({ t = trSections.idea }: { t?: SectionsDict["idea"] }) {
  return (
    <section
      id="fikir"
      className="relative scroll-mt-16 border-t border-line"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                {t.eyebrow}
              </p>
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
            <div className="lg:pt-4">
              <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm">
                {t.lead}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={t.ctaHref}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(38,35,30,0.24)] hover:bg-[rgba(38,35,30,0.04)]"
                >
                  {t.cta}
                  <span
                    aria-hidden
                    className="text-gray-warm transition-all duration-300 ease-soft group-hover:translate-x-0.5 group-hover:text-bone"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
