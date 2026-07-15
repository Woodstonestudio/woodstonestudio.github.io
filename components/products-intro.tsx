import { Reveal } from "@/components/motion/reveal";

/**
 * Products intro — a short editorial lead-in that reframes the
 * product sections as proof of capability, not the studio's sole
 * purpose. No new UI language; same eyebrow + headline rhythm.
 */
export function ProductsIntro() {
  return (
    <section id="products" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                Products
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                We build for others.
                <br />
                We also build our own.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">
              Our own products are where we prove the craft — the same
              engineering we bring to client work, held to our own standard.
              Three of them follow.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
