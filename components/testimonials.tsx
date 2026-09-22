import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * Referanslar — yayına alınan gerçek işin (canlı proje) öne çıkarıldığı
 * bölüm ve kısa müşteri yorumları. Mevcut editoryal dil korunur.
 */
export function Testimonials({ t = trSections.testimonials }: { t?: SectionsDict["testimonials"] }) {
  return (
    <section id="testimonials" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
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

        {/* Öne çıkan canlı proje */}
        <Reveal delay={0.14} y={24}>
          <a
            href={t.featuredUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 grid gap-8 overflow-hidden rounded-2xl border border-line bg-[rgba(246,239,228,0.02)] p-7 transition-all duration-500 ease-soft hover:border-[rgba(239,234,224,0.2)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-base/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.17_150)]" />
                {t.featuredTag}
              </span>
              <h3 className="mt-6 text-3xl font-light tracking-tight text-bone sm:text-4xl">{t.featuredTitle}</h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-gray-warm">{t.featuredField}</p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-gray-warm">{t.featuredDesc}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-bone">
                {t.featuredCta}
                <span aria-hidden className="text-gray-warm transition-all duration-300 ease-soft group-hover:translate-x-0.5 group-hover:text-bone">↗</span>
              </span>
            </div>
            {/* Tarayıcı çerçevesi — canlı proje ekran görüntüsü buraya konabilir */}
            <div className="overflow-hidden rounded-xl border border-line bg-base/50">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(239,234,224,0.18)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(239,234,224,0.18)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[rgba(239,234,224,0.18)]" />
                <span className="ml-3 truncate font-mono text-[11px] text-gray-warm">{t.featuredHost}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-base">
                <Image
                  src="/work/crossfit-bahcesehir.png"
                  alt={`${t.featuredTitle} — ${t.featuredTag}`}
                  width={1891}
                  height={858}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </a>
        </Reveal>

        {/* Yorumlar */}
        <div className="mt-10 grid max-w-xl gap-6">
          {t.items.map((it, i) => (
            <Reveal key={it.name} delay={0.1 + i * 0.06} y={20}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-[rgba(246,239,228,0.02)] p-7">
                <div aria-hidden className="text-sm tracking-[0.2em] text-bone">★★★★★</div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-[1.7] text-bone/90">“{it.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="text-sm font-medium text-bone">{it.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-warm">{it.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
