import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

/**
 * Ana sayfa — salonlara özel paket bandı (online randevu + Google).
 */

const T = {
  tr: {
    eyebrow: "Kuaför · Berber · Güzellik salonu · Spa",
    t1: "Web sitesi değil,",
    t2: "dolu bir randevu defteri",
    lead: "Salonlar için online randevu, Google Haritalar'da görünürlük ve yorum toplamayı tek pakette kuruyoruz. Müşteriniz sizi bulur, 7/24 randevu alır; telefon sizi işten koparmaz.",
    points: ["7/24 online randevu", "Google İşletme Profili", "Yorum toplama", "Instagram & WhatsApp bağlantısı"],
    cta: "Paketi İnceleyin",
    href: "/randevu-sistemi",
  },
  en: {
    eyebrow: "Hair salons · Barbers · Beauty · Spa",
    t1: "Not a website —",
    t2: "a full appointment book",
    lead: "For salons we set up online booking, Google Maps visibility and review collection in one package. Clients find you, book 24/7, and the phone stops pulling you away from work.",
    points: ["24/7 online booking", "Google Business Profile", "Review collection", "Instagram & WhatsApp links"],
    cta: "See the Package",
    href: "/en/online-booking",
  },
} as const;

export function SalonBand({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const t = T[locale];
  return (
    <section id="salons" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 rounded-2xl border border-line bg-[rgba(246,239,228,0.35)] p-8 sm:p-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone-dim">{t.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                {t.t1}
                <br />
                {t.t2}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-lg text-[16.5px] leading-[1.8] text-gray-warm">{t.lead}</p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <div>
              <ul className="space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 border-b border-line pb-3 text-[15.5px] text-bone">
                    <span aria-hidden className="text-gray-warm">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3.5 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
              >
                {t.cta}
                <span aria-hidden className="text-[#F3F0EA]/70 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
