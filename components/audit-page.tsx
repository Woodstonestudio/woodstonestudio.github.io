import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SiteScan } from "@/components/site-scan";
import { trNav, enNav, trSections, enSections } from "@/lib/i18n";
import type { Locale } from "@/components/service-page";

const NAV = { tr: trNav, en: enNav } as const;
const FOOTER = { tr: trSections.footer, en: enSections.footer } as const;
const HOME = { tr: "/", en: "/en" } as const;
const SITE = "https://woodstonestudio.com";
const PATH = { tr: "/site-analizi", en: "/en/site-audit" } as const;

const C = {
  tr: {
    eyebrow: "Ücretsiz site taraması · SEO · GEO · AEO",
    t1: "Google ve yapay zekâ",
    t2: "sitenizi görüyor mu?",
    lead: "Adresinizi yazın; sitenizi 10 alanda 75'ten fazla sinyalle tarayalım: Google'da bulunma, ChatGPT, Claude ve Perplexity'nin sitenizi okuyup okuyamadığı, hız, güvenlik ve ziyaretçiyi müşteriye çeviren iletişim adımları. E-posta istemeden puanınızı ve en önemli eksikleri görürsünüz.",
    bullets: [
      "Google ve AI botlarıyla canlı erişim testi",
      "Her bulgu için neden önemli olduğu",
      "Sorunlar önem sırasıyla: kritik, önemli, orta, küçük",
    ],
    areasTitle: "Neye bakıyoruz",
    areasLead: "Her alan kendi içinde önem ağırlıklı puanlanır; site puanı alanların ağırlıklı ortalamasıdır.",
    areas: [
      ["Yapay zekâ erişimi", "robots.txt kuralları, botlarla canlı test, bot ile tarayıcı içerik farkı, JavaScript'e bağımlı sayfa, llms.txt"],
      ["Marka ve kimlik", "Organization/LocalBusiness verisi, marka adının tutarlılığı, sameAs, logo, adres ve iletişim"],
      ["İçerik ve cevaplar", "H1/H2 yapısı, soru biçiminde başlıklar, metin miktarı, SSS, alt metin, güncellik, iç linkler"],
      ["Teknik SEO", "noindex, başlık ve açıklama, canonical, site haritası, soft 404, www yönlendirmesi, mobil görünüm"],
      ["Hız", "Google PageSpeed (mobil + masaüstü), LCP, CLS, TBT, sunucu yanıtı, sıkıştırma, görseller"],
      ["Yapısal veri", "JSON-LD geçerliliği, WebSite, FAQPage, işletme bilgilerinin tamlığı"],
      ["Güvenlik", "HTTPS, kalıcı yönlendirme, HSTS, karışık içerik, güvenlik başlıkları"],
      ["İletişim ve dönüşüm", "Form, tek dokunuşla arama, WhatsApp, eylem çağrısı, harita"],
      ["Paylaşım", "WhatsApp, Instagram ve LinkedIn önizlemesi (Open Graph, X kartı)"],
      ["Dil", "lang etiketi, karakter kodlaması, hreflang karşılıklılığı, x-default"],
    ],
    back: "Ana sayfa",
    faqTitle: "Sık sorulanlar",
    faqs: [
      { q: "Ne kontrol ediliyor?", a: "Ana sayfanız ve onun bağlı olduğu dosyalar (robots.txt, site haritası, llms.txt, uygulama bağlantı dosyaları, paylaşım görseli, dil sürümleri) 10 alanda 75'ten fazla sinyalle kontrol edilir. Googlebot, Bingbot, ChatGPT ve Perplexity botlarının kimliğiyle canlı istek atılır, hız için Google PageSpeed kullanılır. Tasarım beğenisi ve içerik kalitesi otomatik ölçülmez; onları görüşmede elle inceleriz." },
      { q: "Puan nasıl hesaplanıyor?", a: "Her sinyal sağlam (1), kısmi (0,5) ya da açık (0) sayılır ve önemine göre ağırlıklandırılır: kritik 5, önemli 3, orta 2, küçük 1. Alan puanı bu ağırlıklı ortalamadır, site puanı da alanların ağırlıklı ortalamasıdır. Ölçülemeyen ya da sitenize uygulanmayan sinyaller puana katılmaz, ceza da almaz." },
      { q: "Neden bazı sorunlar puanı sınırlıyor?", a: "Bazı sorunlar diğer her şeyi anlamsız kılar: ana sayfa açılmıyorsa puan en fazla 20, noindex varsa 30, HTTPS yoksa ya da tüm arama botları engelliyse 49, sayfa metni yalnızca JavaScript ile oluşuyorsa 59, robots.txt sunucu hatası veriyorsa 70 olabilir. Bunlar raporda ayrıca gösterilir." },
      { q: "'Geçici' puan ne demek?", a: "PageSpeed gibi bazı ölçümler o an yapılamadıysa puan ölçülebilen sinyallerle hesaplanır ve 'geçici' işaretlenir. Tam ölçüm için bize yazın." },
      { q: "AI botlarına izin vermek zorunda mıyım?", a: "Hayır, ama ayrım önemli. ChatGPT, Claude ve Perplexity'nin arama botları (OAI-SearchBot, Claude-SearchBot, PerplexityBot) engellenirse AI cevaplarında kaynak olarak geçmezsiniz. İçeriğinizin model eğitiminde kullanılmasını istemiyorsanız yalnızca eğitim botlarını (GPTBot, ClaudeBot, Google-Extended) engellemeniz yeterli." },
      { q: "Canlı bot testi kesin sonuç mu?", a: "Hayır, güçlü bir ipucu. Biz botun kimliğiyle istek atarız ama gerçek botun IP adresinden gelmeyiz; bazı güvenlik duvarları sahte bot kimliğini haklı olarak reddeder. 'Erişemedi' görürseniz Search Console'daki URL denetimiyle ya da güvenlik duvarı kayıtlarıyla teyit edin." },
      { q: "llms.txt şart mı?", a: "Şart değil ve etkisi henüz sınırlı. Bu yüzden küçük önemde bir sinyal olarak sayılır. Maliyeti olmadığı için eklemenizi öneririz; varsa içindeki linklerin açıldığını da kontrol ederiz." },
      { q: "E-postamı neden istiyorsunuz?", a: "Puanı, alanları, bot tablosunu ve en önemli bulguları e-posta istemeden gösteriyoruz. Bulguların tamamını ve çözüm adımlarını e-postanıza gönderiyoruz; isterseniz düzeltmeyi biz yaparız. Liste satmıyoruz, bülten göndermiyoruz." },
      { q: "Hangi veriler saklanıyor?", a: "Taranan adres, alan adı ve bulgular 90 gün saklanır; aynı adres 7 gün içinde tekrar taranırsa kayıtlı sonuç gösterilir. IP adresiniz saklanmaz, yalnızca kötüye kullanımı sınırlamak için geri döndürülemez bir özeti tutulur. Sayfanızdaki metinler ve kişisel veriler kaydedilmez." },
      { q: "Aynı siteyi tekrar tarayabilir miyim?", a: "Aynı site 7 gün içinde tekrar taranırsa kayıtlı sonuç gösterilir. Düzeltme sonrası yeniden ölçüm ve karşılaştırmalı rapor için bize yazın; düzeltmeyi biz yaptıysak bu ölçüm işin parçasıdır." },
      { q: "Hangi adresler taranamaz?", a: "Yerel ağ ve özel IP adresleri, giriş gerektiren sayfalar ve standart dışı portlar taranmaz. Güçlü bot koruması olan siteler otomatik okunamayabilir; o zaman elle inceleriz." },
      { q: "Puan düşükse ne yapmalıyım?", a: "Kritik ve önemli maddelerden başlamak gerekir. Bize yazın: çoğu madde birkaç günde, mevcut siteyi bozmadan düzelir." },
    ],
  },
  en: {
    eyebrow: "Free site scan · SEO · GEO · AEO",
    t1: "Can Google and AI",
    t2: "actually see your site?",
    lead: "Enter your address and we'll scan your site across 10 areas with 75+ signals: findability on Google, whether ChatGPT, Claude and Perplexity can read it, speed, security and the contact steps that turn visitors into customers. See your score and top findings without giving an email.",
    bullets: [
      "Live access test with Google and AI bots",
      "Why each finding matters",
      "Issues ranked by priority: critical, important, medium, minor",
    ],
    areasTitle: "What we check",
    areasLead: "Each area is scored with severity weights; the site score is the weighted average of the areas.",
    areas: [
      ["AI access", "robots.txt rules, live bot tests, bot vs browser content, JavaScript-only pages, llms.txt"],
      ["Brand and entity", "Organization/LocalBusiness data, consistent brand name, sameAs, logo, address and contact"],
      ["Content and answers", "H1/H2 structure, question headings, amount of text, FAQ, alt text, freshness, internal links"],
      ["Technical SEO", "noindex, title and description, canonical, sitemap, soft 404, www redirect, mobile viewport"],
      ["Speed", "Google PageSpeed (mobile + desktop), LCP, CLS, TBT, server response, compression, images"],
      ["Structured data", "JSON-LD validity, WebSite, FAQPage, completeness of business details"],
      ["Security", "HTTPS, permanent redirect, HSTS, mixed content, security headers"],
      ["Contact and conversion", "Form, tap-to-call, WhatsApp, call to action, map"],
      ["Sharing", "WhatsApp, Instagram and LinkedIn previews (Open Graph, X card)"],
      ["Language", "lang attribute, character encoding, reciprocal hreflang, x-default"],
    ],
    back: "Home",
    faqTitle: "Frequently asked",
    faqs: [
      { q: "What is checked?", a: "Your homepage and the files it relies on (robots.txt, sitemap, llms.txt, app link files, share image, language versions) are checked across 10 areas with 75+ signals. Live requests are made with the identities of Googlebot, Bingbot, ChatGPT and Perplexity bots, and Google PageSpeed measures speed. Design taste and content quality aren't measured automatically; we review those manually in a call." },
      { q: "How is the score calculated?", a: "Each signal counts as pass (1), partial (0.5) or fail (0) and is weighted by severity: critical 5, important 3, medium 2, minor 1. The area score is that weighted average, and the site score is the weighted average of the areas. Signals that can't be measured or don't apply to your site are left out with no penalty." },
      { q: "Why do some issues cap the score?", a: "Some issues make everything else moot: if the homepage doesn't load the score is at most 20, with noindex 30, without HTTPS or with all search bots blocked 49, if page text only appears via JavaScript 59, and if robots.txt returns a server error 70. These are shown separately in the report." },
      { q: "What does a 'provisional' score mean?", a: "If some measurements such as PageSpeed couldn't run at that moment, the score is based on the signals that could be measured and marked 'provisional'. Write to us for a full measurement." },
      { q: "Do I have to allow AI bots?", a: "No, but the distinction matters. If the search bots of ChatGPT, Claude and Perplexity (OAI-SearchBot, Claude-SearchBot, PerplexityBot) are blocked, you won't be cited in AI answers. If you don't want your content used for training, blocking only the training bots (GPTBot, ClaudeBot, Google-Extended) is enough." },
      { q: "Is the live bot test definitive?", a: "No, it's a strong hint. We send the bot's identity but not from the bot's real IP address; some firewalls rightly reject spoofed bot identities. If you see 'failed', confirm with Search Console's URL Inspection or your firewall logs." },
      { q: "Is llms.txt required?", a: "No, and its impact is still limited, so it counts as a minor signal. It costs nothing, so we recommend adding one; if it exists we also check that its links resolve." },
      { q: "Why do you ask for my email?", a: "We show the score, areas, bot table and the top findings without an email. We email all findings with fix steps, and can fix them for you if you want. We don't sell lists or send newsletters." },
      { q: "What data is stored?", a: "The scanned address, domain and findings are kept for 90 days; the same address scanned again within 7 days shows the saved result. Your IP address isn't stored, only an irreversible hash used to limit abuse. Text and personal data on your pages aren't saved." },
      { q: "Can I scan the same site again?", a: "Scanning the same site again within 7 days shows the saved result. For a re-measurement and before/after report after fixes, write to us; if we did the fixes, it's part of the job." },
      { q: "Which addresses can't be scanned?", a: "Local network and private IP addresses, pages behind a login and non-standard ports aren't scanned. Sites with strong bot protection may not be readable automatically; we then review them manually." },
      { q: "My score is low — what now?", a: "Start with the critical and important items. Write to us: most are fixed within days without breaking the current site." },
    ],
  },
} as const;

export function AuditPage({ locale }: { locale: Locale }) {
  const l = locale === "en" ? "en" : "tr";
  const c = C[l];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <Nav t={NAV[l]} />
      <main className="pt-20 lg:pt-28">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-20">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">{c.eyebrow}</p>
                <h1 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] tracking-tightest text-bone sm:text-5xl">
                  {c.t1}
                  {" "}<br />
                  {c.t2}
                </h1>
                <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-gray-warm">{c.lead}</p>
                <ul className="mt-6 space-y-2 text-[15px] leading-[1.7] text-gray-warm">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-bone-dim" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0 lg:pt-4">
                <SiteScan locale={l} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <h2 className="text-2xl font-light tracking-tight text-bone">{c.areasTitle}</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-[1.8] text-gray-warm">{c.areasLead}</p>
            <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {c.areas.map(([name, desc], i) => (
                <li key={name} className="flex gap-4">
                  <span className="font-mono text-[12px] text-bone-dim">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[17px] font-light tracking-tight text-bone">{name}</h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-gray-warm">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <h2 className="text-2xl font-light tracking-tight text-bone">{c.faqTitle}</h2>
            <div className="mt-6 max-w-3xl space-y-px">
              {c.faqs.map((f) => (
                <details key={f.q} className="group border-t border-line py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-light leading-snug tracking-tight text-bone [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-gray-warm transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.8] text-gray-warm">{f.a}</p>
                </details>
              ))}
            </div>
            <Link href={HOME[l]} className="mt-10 inline-block text-sm text-gray-warm transition-colors hover:text-bone">
              ← {c.back}
            </Link>
          </div>
        </section>
      </main>
      <Footer t={FOOTER[l]} />
    </>
  );
}

export function auditMetadata(locale: Locale) {
  const l = locale === "en" ? "en" : "tr";
  const titles = {
    tr: "Ücretsiz Site Taraması — SEO, GEO ve AEO Analizi",
    en: "Free Website Scan — SEO, GEO and AEO Audit",
  } as const;
  const descs = {
    tr: "Sitenizi 10 alanda 75+ sinyalle ücretsiz tarayın: Google ve ChatGPT/Claude/Perplexity bot erişimi, teknik SEO, yapısal veri, hız, güvenlik ve iletişim. Kayıt yok, puan ve düzeltme listesi anında.",
    en: "Scan your site for free across 10 areas and 75+ signals: Google and ChatGPT/Claude/Perplexity bot access, technical SEO, structured data, speed, security and contact. No sign-up, instant score and fix list.",
  } as const;
  return {
    title: titles[l],
    description: descs[l],
    alternates: {
      canonical: PATH[l],
      languages: { tr: `${SITE}${PATH.tr}`, en: `${SITE}${PATH.en}`, "x-default": `${SITE}${PATH.tr}` },
    },
    openGraph: { title: titles[l], description: descs[l], url: `${SITE}${PATH[l]}`, type: "website", images: ["/og-cover.jpg"] },
  };
}
