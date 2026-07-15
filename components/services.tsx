import { Reveal } from "@/components/motion/reveal";

/**
 * Services — the studio's disciplines, told editorially.
 * Not cards or feature boxes: four capability groups as ruled
 * lists, matching the language used across the site. Grouped by
 * discipline so breadth reads as depth, not a menu.
 */

const groups = [
  {
    n: "01",
    title: "Design",
    line: "The surface and the system.",
    items: ["Premium websites", "UI / UX design", "Branding"],
  },
  {
    n: "02",
    title: "Build",
    line: "Software that holds up in production.",
    items: [
      "Web applications",
      "SaaS development",
      "Mobile apps",
      "Game development",
      "API integrations",
    ],
  },
  {
    n: "03",
    title: "Automate",
    line: "Work that runs itself.",
    items: ["AI agents", "AI automation", "Business automation"],
  },
  {
    n: "04",
    title: "Sustain",
    line: "The part that comes after launch.",
    items: ["Technical consulting", "SEO & performance", "Maintenance & support"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        {/* Opener */}
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                Services
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                Four disciplines,
                <br />
                one studio.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">
              We design, build and automate digital products end to end. Most
              work draws on more than one of these — which is the point of
              keeping them under one roof.
            </p>
          </Reveal>
        </div>

        {/* Disciplines */}
        <div className="mt-24 space-y-px lg:mt-32">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.05}>
              <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:py-12">
                {/* Left: index + discipline */}
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-gray-warm">{g.n}</span>
                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-bone sm:text-3xl">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-warm">
                      {g.line}
                    </p>
                  </div>
                </div>

                {/* Right: the capabilities as an inline ruled list */}
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
