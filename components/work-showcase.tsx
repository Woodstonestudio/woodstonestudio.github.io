import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

/**
 * Örnek Çalışmalar — konsept/örnek işlerin sunulduğu bölüm.
 * Gerçek müşteri işi değil; yeteneği gösteren örnek çalışmalar
 * olarak dürüstçe etiketlenir. Mevcut editoryal dil korunur.
 */

const workMeta = [
  { href: "https://koz-demo-nu.vercel.app", img: "/work/koz-preview.jpg" },
  { href: "https://lumen-demo-amber.vercel.app", img: "/work/lumen-preview.jpg" },
  { href: "https://mona-demo-rho.vercel.app", img: "/work/mona-preview.jpg" },
  { href: "https://zentarado-demo-ecru.vercel.app", img: "/work/zentarado-preview.jpg" },
];

import { trSections, type SectionsDict } from "@/lib/i18n";

export function WorkShowcase({ t = trSections.work }: { t?: SectionsDict["work"] }) {
  return (
    <section id="work" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
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
          <Reveal delay={0.16}>
            <p className="max-w-md text-[17px] leading-[1.8] text-gray-warm lg:pt-4">
              Aşağıdaki çalışmalar, farklı sektörler için hazırladığımız örnek
              ve konsept projeler. Bir işin bizde nasıl göründüğünü anlatmak
              yerine, doğrudan gösteriyoruz.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-28">
          {t.works.map((w, i) => (
            <Reveal key={w.title} y={24}>
              <a
                href={workMeta[i].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-line bg-[rgba(246,239,228,0.02)] transition-all duration-500 ease-soft hover:border-[rgba(239,234,224,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={workMeta[i].img}
                    alt={`${w.title} — ${t.kind}`}
                    width={880}
                    height={545}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-line bg-base/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim backdrop-blur-md">
                    {t.kind}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 p-7">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-2xl font-light tracking-tight text-bone">
                        {w.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-warm">
                        {w.field}
                      </span>
                    </div>
                    <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-gray-warm">
                      {w.desc}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-gray-warm transition-all duration-300 ease-soft group-hover:translate-x-1 group-hover:text-bone"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
