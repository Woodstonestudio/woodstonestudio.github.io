import { Reveal } from "@/components/motion/reveal";
import { trSections, type SectionsDict } from "@/lib/i18n";

/**
 * SSS — GEO/AI keşfedilebilirliği için soru-cevap yapısı.
 * Native <details> ile açılır-kapanır (JS gerektirmez, erişilebilir).
 * FAQPage şeması aynı içerikten türetilir; tek kaynak.
 */

export function FAQ({ t = trSections.faq }: { t?: SectionsDict["faq"] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="sss" className="relative scroll-mt-16 border-t border-line">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                {t.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {t.t1}
                <br />
                {t.t2}
              </h2>
            </Reveal>
          </div>

          <div className="space-y-px">
            {t.faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.05}>
                <details className="group border-t border-line py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-light leading-snug tracking-tight text-bone [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden
                      className="shrink-0 text-gray-warm transition-transform duration-300 ease-soft group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-gray-warm">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
