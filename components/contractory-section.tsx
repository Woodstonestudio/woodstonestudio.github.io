import { Reveal } from "@/components/motion/reveal";
import { Instrument } from "@/components/contractory/instrument";
import { ContractoryConsole } from "@/components/contractory/console";

/**
 * Contractory — presented as a single crafted object.
 * Text left, instrument right, near-full viewport, aligned to
 * the Hero's rhythm (same container, eyebrow, type weights).
 */
import { trSections, type SectionsDict } from "@/lib/i18n";

export function ContractorySection({ t = trSections.contractory }: { t?: SectionsDict["contractory"] }) {
  return (
    <section
      className="relative mx-auto flex min-h-svh max-w-6xl scroll-mt-16 items-center overflow-x-clip px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[0.86fr_1fr] lg:gap-20">
        {/* ── Story ── */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              Contractory
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 text-4xl font-light leading-[1.08] tracking-tightest text-bone sm:text-5xl lg:text-[54px]">
              {t.t1}
              <br />
              {t.t2}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-gray-warm">
              {t.lead}
            </p>
          </Reveal>

          {/* Three capabilities — editorial, ruled, not cards */}
          <Reveal delay={0.24}>
            <ul className="mt-11 max-w-sm divide-y divide-line border-y border-line">
              {t.caps.map((c) => (
                <li
                  key={c.name}
                  className="flex items-baseline justify-between gap-6 py-3.5"
                >
                  <span className="text-[15px] font-normal tracking-tight text-bone">
                    {c.name}
                  </span>
                  <span className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-gray-warm">
                    {c.note}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-11">
              <a
                href="https://contractory.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone transition-colors hover:text-bone"
              >
                {t.cta}
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Object ── */}
        <Reveal delay={0.2} y={28} className="mt-4 lg:mt-0">
          <div className="origin-[left_center] lg:-mr-10 lg:scale-[1.1]">
            <Instrument>
              <ContractoryConsole />
            </Instrument>
          </div>
          {/* Etched caption — ties type to object */}
          <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8">
            {t.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
