import { Reveal } from "@/components/motion/reveal";
import { Instrument } from "@/components/contractory/instrument";
import { AuthorAIConsole } from "@/components/authorai/console";

const capabilities = [
  { name: "Draft", note: "A focused, distraction-free page" },
  { name: "Suggest", note: "Offered in the margin, on request" },
  { name: "Shape", note: "Structure that stays out of the way" },
];

/**
 * AuthorAI — presented as a single crafted object.
 * Composition alternates back: text left, object right.
 * Same container, eyebrow and type as its siblings.
 */
export function AuthorAISection() {
  return (
    <section
      id="authorai"
      className="relative mx-auto flex min-h-svh max-w-6xl scroll-mt-16 items-center overflow-x-clip px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[0.86fr_1fr] lg:gap-20">
        {/* ── Story (left) ── */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              AuthorAI
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 text-4xl font-light leading-[1.08] tracking-tightest text-bone sm:text-5xl lg:text-[54px]">
              Writing, with the
              <br />
              machine kept quiet.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-gray-warm">
              AuthorAI is a writing instrument, not an autopilot. A focused
              page where suggestions wait to be asked and the words remain
              unmistakably yours.
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
                href="https://woodstonestudio.com"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone transition-colors hover:text-white"
              >
                View Project
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

        {/* ── Object (right) ── */}
        <Reveal delay={0.2} y={28} className="mt-4 lg:mt-0">
          <div className="origin-[left_center] lg:-mr-10 lg:scale-[1.1]">
            <Instrument>
              <AuthorAIConsole />
            </Instrument>
          </div>
          <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8">
            Nº 03 — Writing instrument
          </p>
        </Reveal>
      </div>
    </section>
  );
}
