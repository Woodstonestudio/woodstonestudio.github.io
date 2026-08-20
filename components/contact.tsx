import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * İletişim — büyük tipografi, sade. Projeye başlamaya bir davet.
 */
export function Contact({ t = trSections.contact }: { t?: SectionsDict["contact"] }) {
  const channels = [{ label: t.channel, href: "mailto:info@woodstonestudio.com" }];

  return (
    <section id="contact" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto flex min-h-[80svh] max-w-6xl items-center px-6 py-28 lg:px-8 lg:py-40">
        <div className="w-full">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              {t.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-tightest text-bone sm:text-6xl lg:text-[80px]">
              {t.t1}
              <br />
              {t.t2}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-md text-[17px] leading-[1.8] text-gray-warm">
              {t.lead}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-14 flex flex-wrap gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                  >
                    {c.label}
                    <span
                      aria-hidden
                      className="text-gray-warm transition-all duration-300 ease-soft group-hover:translate-x-0.5 group-hover:text-bone"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
