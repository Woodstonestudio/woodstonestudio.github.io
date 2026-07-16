import { Reveal } from "@/components/motion/reveal";
import { Instrument } from "@/components/contractory/instrument";
import { AlphaOSConsole } from "@/components/alphaos/console";

const capabilities = [
  { name: "Ölç", note: "Etkinlikten itibara" },
  { name: "Sırala", note: "Canlı operatör lider tablosu" },
  { name: "Doğrula", note: "Her puan zincir üstünde denetlenebilir" },
];

/**
 * AlphaOS — presented as a single crafted object.
 * Flipped composition: object left, text right — keynote rhythm
 * alternating from Contractory. Same container, eyebrow and type.
 */
export function AlphaOSSection() {
  return (
    <section
      id="alphaos"
      className="relative mx-auto flex min-h-svh max-w-6xl scroll-mt-16 items-center overflow-x-clip px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.86fr] lg:gap-20">
        {/* ── Object (left) ── */}
        <Reveal delay={0.2} y={28} className="order-2 mt-4 lg:order-1 lg:mt-0">
          <div className="origin-[right_center] lg:-ml-10 lg:scale-[1.1]">
            <Instrument>
              <AlphaOSConsole />
            </Instrument>
          </div>
          <p className="mt-6 pl-1 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8 lg:pr-1">
            Nº 02 — İtibar aracı · Base
          </p>
        </Reveal>

        {/* ── Story (right) ── */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              AlphaOS
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 text-4xl font-light leading-[1.08] tracking-tightest text-bone sm:text-5xl lg:text-[54px]">
              Doğrulanabilir
              <br />
              dijital itibar.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-gray-warm">
              AlphaOS, zincir üstü katkıyı ölçülebilir bir itibara dönüştürür.
              Görevler, rozetler ve canlı bir lider tablosu; her operatör bir
              Basename'e çözümlenir, her puan işleme kadar izlenebilir.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-11 max-w-sm divide-y divide-line border-y border-line">
              {capabilities.map((c) => (
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
                href="https://alphaos.site"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone transition-colors hover:text-bone"
              >
                Projeyi İncele
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
      </div>
    </section>
  );
}
