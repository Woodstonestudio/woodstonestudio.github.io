import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";
import { LeadForm } from "@/components/lead-form";

/**
 * İletişim — büyük tipografi, sade. Projeye başlamaya bir davet.
 */
export function Contact({
  t = trSections.contact,
  locale = "tr",
}: {
  t?: SectionsDict["contact"];
  locale?: "tr" | "en";
}) {
  const channels = [
    { label: t.channel, href: "mailto:info@woodstonestudio.com" },
    { label: "Instagram", href: "https://www.instagram.com/woodstonestudio35" },
    { label: "WhatsApp", href: "https://wa.me/905438520257" },
  ];

  return (
    <section id="contact" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto flex min-h-[80svh] max-w-6xl items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid w-full gap-14 lg:grid-cols-[1fr_minmax(0,480px)] lg:gap-16">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
              {t.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-tightest text-bone sm:text-6xl lg:text-[64px]">
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
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                  >
                    {c.label}
                    <span
                      aria-hidden
                      className="text-[#F3F0EA]/70 transition-all duration-300 ease-soft group-hover:translate-x-0.5 group-hover:text-[#F3F0EA]"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.22}>
          <div className="relative">
            <LeadForm locale={locale} />
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
