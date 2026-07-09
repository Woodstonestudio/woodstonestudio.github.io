import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { projects, type ProjectSlug } from "@/lib/projects";
import { DeviceFrame } from "@/components/mockups/device-frame";
import { ContractoryUI } from "@/components/mockups/contractory";
import { AlphaOSUI } from "@/components/mockups/alphaos";
import { AuthorAIUI } from "@/components/mockups/authorai";

const screens: Record<ProjectSlug, ReactNode> = {
  contractory: <ContractoryUI />,
  alphaos: <AlphaOSUI />,
  authorai: <AuthorAIUI />,
};

const material: Record<ProjectSlug, "dark" | "paper"> = {
  contractory: "dark",
  alphaos: "dark",
  authorai: "paper",
};

// Per-product accent tint for the index numeral + rule — the only
// place each identity shows color. Contractory keeps purple.
const tint: Record<ProjectSlug, string> = {
  contractory: "text-contractory-soft",
  alphaos: "text-[#7fa0ff]",
  authorai: "text-[#b58a5a]",
};

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        {/* Section opener */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              Selected Work
            </span>
            <span aria-hidden className="h-px w-16 bg-line" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-warm">
              Three products
            </span>
          </div>
          <h2 className="mt-8 max-w-2xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
            Built with the same care,
            <br />
            each with its own character.
          </h2>
        </Reveal>

        {/* Products */}
        <div className="mt-28 space-y-32 lg:mt-36 lg:space-y-48">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={p.slug}
                className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
              >
                {/* Object */}
                <Reveal y={24} className={flipped ? "lg:order-2" : undefined}>
                  <div className="group">
                    <div className="transition-transform duration-700 ease-soft group-hover:-translate-y-1">
                      <DeviceFrame material={material[p.slug]}>
                        {screens[p.slug]}
                      </DeviceFrame>
                    </div>
                  </div>
                </Reveal>

                {/* Story */}
                <Reveal
                  delay={0.1}
                  className={flipped ? "lg:order-1" : undefined}
                >
                  {/* Index + label */}
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-sm ${tint[p.slug]}`}
                      aria-hidden
                    >
                      {p.index}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                      {p.label}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-light leading-[1.14] tracking-tightest text-bone sm:text-[40px]">
                    {p.headline}
                  </h3>

                  <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-gray-warm">
                    {p.story}
                  </p>

                  {/* Proof spec line */}
                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-2xl font-light tracking-tight text-bone">
                      {p.stat.value}
                    </span>
                    <span aria-hidden className="h-8 w-px bg-line" />
                    <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-gray-warm">
                      {p.stat.unit}
                    </span>
                  </div>

                  {/* Technologies */}
                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[11px] tracking-tight text-bone-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-10">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone transition-colors hover:text-white"
                      >
                        {p.cta}
                        <span
                          aria-hidden
                          className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2.5 text-sm text-gray-warm">
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#b58a5a]"
                        />
                        {p.status}
                      </span>
                    )}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
