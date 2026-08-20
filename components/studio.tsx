import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * Stüdyo — kısa, editoryal bir felsefe ifadesi.
 */
export function Studio({ t = trSections.studio }: { t?: SectionsDict["studio"] }) {
  return (
    <section id="studio" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto flex min-h-[80svh] max-w-6xl items-center px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid w-full gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                {t.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-3xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl lg:text-[56px]">
                {t.t1}
                <br />
                {t.t2}
              </h2>
            </Reveal>
          </div>

          <div className="lg:pt-4">
            <Reveal delay={0.16}>
              <p className="max-w-sm text-[17px] leading-[1.8] text-gray-warm">
                {t.lead}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                {t.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
