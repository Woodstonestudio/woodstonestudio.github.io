import { Reveal } from "@/components/motion/reveal";

/**
 * Hizmetler — stüdyonun disiplinleri, editoryal bir dille.
 * Kart değil: dört yetkinlik grubu, siteyle tutarlı çizgili listeler.
 */

import { trSections, type SectionsDict } from "@/lib/i18n";

export function Services({ t = trSections.services }: { t?: SectionsDict["services"] }) {
  return (
    <section id="services" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
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
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">
              Dijital ürünleri fikirden yayına kadar tasarlıyor, geliştiriyor
              ve otomatikleştiriyoruz. Çoğu iş bu disiplinlerin birkaçına aynı
              anda dokunur; hepsini tek çatı altında tutmamızın sebebi de bu.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-px lg:mt-32">
          {t.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.05}>
              <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:py-12">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-gray-warm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-bone sm:text-3xl">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-warm">
                      {g.line}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-3 lg:justify-end lg:self-center">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[13px] tracking-tight text-bone-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
