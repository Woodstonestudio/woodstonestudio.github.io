import { Reveal } from "@/components/motion/reveal";

/**
 * SSS — GEO/AI keşfedilebilirliği için soru-cevap yapısı.
 * Native <details> ile açılır-kapanır (JS gerektirmez, erişilebilir).
 * FAQPage şeması aynı içerikten türetilir; tek kaynak.
 */

const faqs = [
  {
    q: "Sadece bir fikrim var, yardımcı olabilir misiniz?",
    a: "Evet. Birçok projeye yalnızca bir fikirle başlıyoruz. Fikri birlikte tanımlıyor, kapsamını netleştiriyor ve bir MVP ile hayata geçiriyoruz.",
  },
  {
    q: "SaaS geliştiriyor musunuz?",
    a: "Evet. Abonelik tabanlı web uygulamaları dâhil, fikirden yayına kadar SaaS ürünleri geliştiriyoruz. Kullanıcı yönetimi, ödeme altyapısı ve ölçeklenebilir mimari kuruyoruz.",
  },
  {
    q: "MVP geliştirebilir misiniz?",
    a: "Evet. Bir ürünü en kısa sürede test edilebilir hâle getirmek için önce çekirdek özellikleri içeren bir MVP geliştiriyor, ardından geri bildirimle büyütüyoruz.",
  },
  {
    q: "Mobil uygulama geliştiriyor musunuz?",
    a: "Evet. iOS ve Android için mobil uygulamalar geliştiriyoruz. Tek kod tabanıyla her iki platforma yayın için Flutter kullanıyoruz.",
  },
  {
    q: "AI ajan (AI agent) geliştirebilir misiniz?",
    a: "Evet. Yapay zekâ destekli otomasyonlar ve belirli görevleri yürüten AI ajanları geliştiriyoruz; mevcut iş süreçlerinize entegre ediyoruz.",
  },
  {
    q: "Flutter kullanıyor musunuz?",
    a: "Evet. Mobil uygulama geliştirmede Flutter kullanıyoruz. Web tarafında ise ağırlıklı olarak React ve Next.js ile çalışıyoruz.",
  },
  {
    q: "Web sitesi yapıyor musunuz?",
    a: "Evet. Kurumsal web siteleri ve premium tanıtım siteleri tasarlıyor ve geliştiriyoruz. Hız, erişilebilirlik ve arama motoru uyumluluğunu temel alıyoruz.",
  },
  {
    q: "Kurumsal yazılım geliştiriyor musunuz?",
    a: "Evet. İşletmelere özel yazılımlar, iç araçlar ve API entegrasyonları geliştiriyoruz. İhtiyaca göre özelleştirilmiş, ölçeklenebilir çözümler kuruyoruz.",
  },
  {
    q: "Blockchain projesi geliştirebilir misiniz?",
    a: "Evet. Blockchain uygulamaları ve akıllı sözleşme (smart contract) geliştirme konusunda deneyimliyiz; kendi Web3 ürünlerimizi de geliştiriyoruz.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function FAQ() {
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
                Sık sorulan sorular
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                Aklınızdaki
                <br />
                sorular.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-px">
            {faqs.map((f, i) => (
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
