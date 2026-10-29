import { MacBook } from "@/components/mockups/macbook";
import { trHero, type HeroDict } from "@/lib/i18n";

/**
 * Hero — Direction B ("Machined").
 * Türkçe, tek dil. Marka ve teknik terimler orijinal bırakılır.
 * Hero bilerek animasyonsuz: H1 sayfanın en büyük öğesi (LCP); JS yüklenmeden
 * görünmesi mobil hızı belirler. Diğer bölümler Reveal ile açılmaya devam eder.
 */
export function Hero({ t = trHero }: { t?: HeroDict }) {
  return (
    <section className="relative mx-auto flex min-h-svh max-w-6xl items-center overflow-x-clip px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:px-8">
      <div className="grid w-full items-center gap-20 lg:grid-cols-[0.92fr_1.4fr] lg:gap-12">
        <div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              {t.eyebrow}
            </p>
          </div>

          <div>
            <h1 className="mt-8 text-[54px] font-light leading-[1.03] tracking-tightest text-bone sm:text-[67px] lg:text-[80px]">
              {t.titleLine1}
              {" "}<br />
              {t.titleLine2}
            </h1>
          </div>

          <div>
            <div className="mt-9 flex max-w-lg items-center gap-4">
              <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                {t.strip1}
              </span>
              <span aria-hidden className="h-px flex-1 bg-line" />
              <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                {t.strip2}
              </span>
            </div>
          </div>

          <div>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-gray-warm">
              {t.lead}
            </p>
          </div>

          <div>
            <div className="mt-11 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-gradient-to-b from-[#3A342B] to-[#26231E] px-7 py-3 text-sm font-medium text-surface shadow-[0_1px_2px_rgba(38,35,30,0.25)] transition-all duration-300 ease-soft hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_rgba(38,35,30,0.35)] active:translate-y-0 active:scale-[0.98]"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98] active:scale-[0.98]"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <MacBook>
            {/* Görsel yalnızca md+ ekranlarda görünüyor; mobilde 1 piksellik boş görsel
                indirilir, kapak görseli mobil bant genişliğini harcamaz. Masaüstünde
                yüksek öncelikle, gecikmesiz yüklenir. */}
            <picture>
              <source media="(max-width: 767px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              <img
                src="/work/crossfit-bahcesehir.webp"
                alt="CrossFit Bahçeşehir web sitesi"
                width={1600}
                height={726}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-left-top"
              />
            </picture>
          </MacBook>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-[rgba(239,234,224,0.28)] to-transparent" />
      </div>
    </section>
  );
}
