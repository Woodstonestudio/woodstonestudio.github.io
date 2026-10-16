import { WEEKS } from "@/lib/pricing";

/**
 * Kısa cevaplar — ana sayfada soru biçiminde başlıklar (H3) ve hemen altında
 * 1–2 cümlelik doğrudan cevap. Google ve yapay zekâ cevapları bu yapıyı
 * ("soru → ilk cümlede cevap") doğrudan alıntılayabiliyor.
 * Süreler lib/pricing.ts'deki WEEKS'ten gelir; tek kaynak.
 */
type Locale = "tr" | "en";

const C: Record<Locale, { eyebrow: string; title: string; items: { q: string; a: string }[] }> = {
  tr: {
    eyebrow: "Kısa cevaplar",
    title: "En çok sorulanlar, tek cümlede",
    items: [
      {
        q: "WoodstoneStudio ne yapar?",
        a: "WoodstoneStudio; web siteleri, iOS ve Android uygulamaları, e-ticaret siteleri ve SEO hizmetleri geliştiren bağımsız bir dijital ürün stüdyosudur. Klinik, salon, spor salonu, otel ve yerel işletmeler için hızlı ve Google'da bulunan siteler kuruyoruz.",
      },
      {
        q: "Bir web sitesi ne kadar sürede yayına çıkar?",
        a: `Tanıtım siteleri ${WEEKS.landing.min}–${WEEKS.landing.max} haftada, kurumsal web siteleri ${WEEKS.corporate.min}–${WEEKS.corporate.max} haftada, e-ticaret siteleri ${WEEKS.ecommerce.min}–${WEEKS.ecommerce.max} haftada yayına çıkar; mobil uygulamalarda süre ${WEEKS.mobile.min}–${WEEKS.mobile.max} haftadır.`,
      },
      {
        q: "Siteniz Google'da ve ChatGPT gibi yapay zekâ cevaplarında görünür mü?",
        a: "Evet; her sitede teknik SEO, yapısal veri (schema), hızlı yükleme ve arama ile yapay zekâ botlarına açık erişim standart olarak kurulur. Yayından sonra site Google Search Console ve Bing Webmaster'a kaydedilir.",
      },
    ],
  },
  en: {
    eyebrow: "Quick answers",
    title: "The most asked questions, in one line",
    items: [
      {
        q: "What does WoodstoneStudio do?",
        a: "WoodstoneStudio is an independent digital product studio that builds websites, iOS and Android apps, e-commerce sites and SEO. We build fast, findable sites for clinics, salons, gyms, hotels and local businesses.",
      },
      {
        q: "How long does a website take to launch?",
        a: `Landing pages launch in ${WEEKS.landing.min}–${WEEKS.landing.max} weeks, business websites in ${WEEKS.corporate.min}–${WEEKS.corporate.max} weeks and e-commerce sites in ${WEEKS.ecommerce.min}–${WEEKS.ecommerce.max} weeks; mobile apps take ${WEEKS.mobile.min}–${WEEKS.mobile.max} weeks.`,
      },
      {
        q: "Will my site show up on Google and in AI answers like ChatGPT?",
        a: "Yes; every site ships with technical SEO, structured data (schema), fast loading and open access for search and AI crawlers as standard. After launch the site is registered with Google Search Console and Bing Webmaster.",
      },
    ],
  },
};

export function QuickAnswers({ locale = "tr" }: { locale?: Locale }) {
  const c = C[locale];
  return (
    <section id="kisa-cevaplar" aria-labelledby="qa-title" className="relative scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{c.eyebrow}</p>
        <h2 id="qa-title" className="mt-6 max-w-2xl text-3xl font-light leading-[1.15] tracking-tightest text-bone sm:text-4xl">
          {c.title}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {c.items.map((it) => (
            <div key={it.q} className="border-t border-line pt-6">
              <h3 className="text-[17px] font-medium leading-snug tracking-tight text-bone">{it.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-gray-warm">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
