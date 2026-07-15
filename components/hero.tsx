import { Reveal } from "@/components/motion/reveal";
import { MacBook } from "@/components/mockups/macbook";
import { ContractoryUI } from "@/components/mockups/contractory";

/**
 * Hero — Direction B ("Machined").
 * Türkçe, tek dil. Marka ve teknik terimler orijinal bırakılır.
 */
export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-svh max-w-6xl items-center overflow-x-clip px-6 pb-28 pt-36 lg:px-8">
      <div className="grid w-full items-center gap-20 lg:grid-cols-[0.92fr_1.4fr] lg:gap-12">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              Dijital Teknoloji Stüdyosu
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-[54px] font-light leading-[1.03] tracking-tightest text-bone sm:text-[67px] lg:text-[80px]">
              Dijital fikirleri güçlü
              <br />
              ürünlere dönüştürüyoruz.
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex max-w-lg items-center gap-4">
              <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                Tasarım · Yazılım
              </span>
              <span aria-hidden className="h-px flex-1 bg-line" />
              <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                Otomasyon
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-gray-warm">
              Web siteleri, web ve mobil uygulamalar, yapay zekâ çözümleri,
              iş süreçleri otomasyonu ve özel yazılım — hepsini bir ürün
              ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-11 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_rgba(244,240,231,0.25)] active:translate-y-0 active:scale-[0.98]"
              >
                Çalışmalarımızı Görün
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-7 py-3 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)] active:scale-[0.98]"
              >
                Bize Ulaşın
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} y={24} className="hidden md:block">
          <MacBook>
            <ContractoryUI />
          </MacBook>
        </Reveal>
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
