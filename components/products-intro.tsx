import { Reveal } from "@/components/motion/reveal";

/**
 * Ürünler girişi — ürünleri, stüdyonun tek amacı değil,
 * yeteneğinin kanıtı olarak konumlandıran kısa bir editoryal giriş.
 */
export function ProductsIntro() {
  return (
    <section id="products" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                Ürünler
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                Müşterilerimiz için geliştiriyoruz.
                <br />
                Kendimiz için de.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">
              Kendi ürünlerimiz, mühendislik gücümüzü keskinleştirdiğimiz
              yerdir. Müşteri projelerimize taşıdığımız disiplini önce
              kendi işlerimizde sınarız. Üç örneği aşağıda.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
