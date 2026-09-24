import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * JoVVo — kendi iOS uygulamamızın vitrini. Solda özellikler ve App Store
 * çağrısı; sağda koyu bir panelde uygulamanın gerçek ekran görüntüleri.
 * JoVVo'nun neon-mint kimliği yalnızca bu panelde kullanılır.
 */
const shots = [
  { src: "/work/jovvo-chat.png", label: "David — yapay zekâ koçu" },
  { src: "/work/jovvo-meal.png", label: "Fotoğrafla öğün analizi" },
  { src: "/work/jovvo-program.png", label: "Branşına özel program" },
];

export function JoVVo({ t = trSections.jovvo }: { t?: SectionsDict["jovvo"] }) {
  return (
    <section id="jovvo" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          {/* Sol — anlatı */}
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 text-4xl font-light leading-[1.05] tracking-tightest text-bone sm:text-5xl">
                {t.t1}
                <br />
                {t.t2}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-md text-[17px] leading-[1.8] text-gray-warm">{t.lead}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                {t.features.map((f) => (
                  <li key={f.name} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6">
                    <span className="text-[15px] font-medium text-bone">{f.name}</span>
                    <span className="text-[14px] leading-[1.6] text-gray-warm">{f.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#3A342B] to-[#26231E] px-7 py-3.5 text-sm font-medium text-surface shadow-[0_1px_2px_rgba(38,35,30,0.25)] transition-all duration-300 ease-soft hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_rgba(38,35,30,0.35)] active:translate-y-0 active:scale-[0.98]"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16.365 1.43c.09 1.14-.36 2.27-1.01 3.08-.7.87-1.86 1.54-2.98 1.45-.11-1.1.42-2.25 1.05-3 .7-.83 1.9-1.46 2.94-1.53zM20.5 17.02c-.55 1.28-.82 1.85-1.53 2.98-.99 1.58-2.38 3.55-4.1 3.56-1.53.02-1.92-1-4-.99-2.07.01-2.5 1-4.03.99-1.72-.02-3.04-1.79-4.03-3.37-2.77-4.42-3.06-9.6-1.35-12.36 1.21-1.96 3.13-3.11 4.93-3.11 1.84 0 2.99 1.01 4.51 1.01 1.47 0 2.37-1.01 4.5-1.01 1.6 0 3.3.87 4.51 2.38-3.96 2.17-3.32 7.82.12 9.32z" />
                  </svg>
                  {t.cta}
                  <span aria-hidden className="text-surface/70 transition-transform duration-300 ease-soft group-hover:translate-x-0.5">↗</span>
                </a>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2EE6A4]" />
                  {t.freeNote}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Sağ — koyu vitrin paneli + telefonlar */}
          <Reveal delay={0.18} y={28}>
            <div className="relative overflow-hidden rounded-3xl border border-[rgba(38,35,30,0.14)] bg-[#0E0D0C] px-5 py-10 sm:px-8">
              <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#2EE6A4] opacity-[0.16] blur-[90px]" />
              <div className="relative flex items-end justify-center gap-3 overflow-x-auto pb-1 sm:gap-4">
                {shots.map((s, i) => (
                  <figure
                    key={s.src}
                    className={`w-1/3 min-w-[112px] max-w-[180px] shrink-0 ${i === 1 ? "-translate-y-6 sm:-translate-y-8" : ""}`}
                  >
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
                      <Image
                        src={s.src}
                        alt={`JoVVo — ${s.label}`}
                        width={640}
                        height={1386}
                        className="h-auto w-full"
                      />
                    </div>
                  </figure>
                ))}
              </div>
              <p className="relative mt-8 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(239,234,224,0.55)]">
                {t.caption}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
