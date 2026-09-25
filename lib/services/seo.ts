import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/seo",
  en: "/en/seo",
} as const;

export const seoTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "SEO Hizmeti — Teknik SEO, İçerik ve Google Görünürlüğü",
    description:
      "SEO hizmeti: teknik SEO denetimi, site hızı, yapılandırılmış veri, içerik stratejisi, yerel SEO ve yapay zekâ aramalarında görünürlük. Şeffaf raporlama, ücretsiz ön görüşme.",
    keywords: [
      "SEO hizmeti",
      "SEO ajansı",
      "teknik SEO",
      "Google'da üst sıralara çıkmak",
      "web sitesi SEO",
      "yerel SEO",
      "SEO danışmanlığı",
    ],
  },
  eyebrow: "SEO",
  h1: ["SEO:", "Google'da bulunun, müşteri kazanın"],
  lead: "Müşterileriniz sizi arıyor; mesele, aradıklarında sizi bulmaları. Teknik altyapıdan içerik stratejisine kadar sitenizin Google'da ve yapay zekâ destekli aramalarda görünür olması için çalışıyoruz — abartılı vaatler olmadan, ölçülebilir adımlarla.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "SEO tek seferlik bir ayar değil; teknik temel, doğru içerik ve güven sinyallerinin birlikte çalıştığı bir süreçtir.",
  scope: [
    { title: "Teknik SEO denetimi", desc: "Taranabilirlik, dizine eklenme sorunları, kırık linkler, yönlendirmeler, site haritası ve robots.txt kontrolü." },
    { title: "Hız ve Core Web Vitals", desc: "Sayfa hızını ve kullanıcı deneyimi metriklerini iyileştiriyoruz; hem sıralamaya hem dönüşüme etki eder." },
    { title: "Yapılandırılmış veri", desc: "Organizasyon, hizmet, ürün, SSS ve makale şemalarıyla Google'a sitenizi doğru anlatıyoruz." },
    { title: "Anahtar kelime ve içerik", desc: "Müşterilerinizin gerçekten aradığı sorguları buluyor, bunlara cevap veren sayfa ve blog içerikleri planlıyoruz." },
    { title: "Yerel SEO", desc: "Google İşletme Profili, harita görünürlüğü ve şehir odaklı aramalar için optimizasyon." },
    { title: "AI arama görünürlüğü", desc: "ChatGPT, Copilot ve Google AI özetleri gibi yapay zekâ destekli aramalarda kaynak gösterilebilir bir site yapısı." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Analiz", desc: "Sitenizin mevcut durumunu, rakiplerinizi ve hedef aramaları inceliyoruz." },
    { step: "02", title: "Teknik düzeltmeler", desc: "Önce altyapıdaki sorunları gideriyoruz; içerik ancak sağlam bir temel üzerinde işe yarar." },
    { step: "03", title: "İçerik ve sayfalar", desc: "Hedef aramalara cevap veren hizmet sayfaları ve blog içerikleri üretiyoruz." },
    { step: "04", title: "Takip ve rapor", desc: "Search Console ve Analytics verileriyle ilerlemeyi ölçüyor, düzenli ve anlaşılır raporlar paylaşıyoruz." },
  ],
  guideEyebrow: "SEO rehberi",
  guide: [
    {
      h: "SEO nedir ve neden hâlâ en değerli kanal?",
      p: [
        "SEO (arama motoru optimizasyonu), sitenizin Google gibi arama motorlarında ilgili aramalarda üst sıralarda görünmesi için yapılan çalışmaların bütünüdür. Reklamda her tıklama için ödeme yaparsınız ve bütçe bittiğinde trafik durur; organik trafik ise emek verildikçe birikir ve kalıcıdır.",
        "Arama yapan kişi zaten bir ihtiyacı olduğu için arar. Bu yüzden organik aramadan gelen ziyaretçi, genellikle en yüksek niyetli ve en değerli ziyaretçidir.",
      ],
    },
    {
      h: "SEO'nun üç ayağı: teknik, içerik ve otorite",
      p: ["Kalıcı sonuç için üç alanın birlikte çalışması gerekir:"],
      ul: [
        "Teknik SEO: Google'ın sitenizi sorunsuz tarayıp anlayabilmesi — hız, mobil uyum, site haritası, doğru yönlendirmeler, yapılandırılmış veri.",
        "İçerik: Hedef kitlenizin sorularına gerçekten cevap veren, derin ve özgün sayfalar.",
        "Otorite ve güven: Sitenize verilen kaliteli bağlantılar, tutarlı işletme bilgileri, müşteri yorumları ve marka bilinirliği.",
      ],
    },
    {
      h: "Teknik SEO: görünmeyen ama belirleyici temel",
      p: [
        "En iyi içerik bile teknik sorunlar yüzünden dizine eklenmeyebilir. Yanlış canonical etiketleri, site haritasında kalan silinmiş sayfalar, yavaş yükleme, mobilde bozulan düzen ya da yanlış yönlendirmeler sıralamayı sessizce düşürür.",
        "Kendi sitemizde de bu kontrolleri düzenli yapıyoruz. Örneğin eski ve silinmiş sayfaları içeren elle tutulan bir site haritasını, her yayında gerçek sayfalardan otomatik üretilen bir yapıya geçirdik. Bu tür küçük ama kritik düzeltmeler, SEO çalışmasının ilk adımıdır.",
      ],
    },
    {
      h: "İçerik stratejisi: doğru soruya doğru cevap",
      p: [
        "Rastgele blog yazısı yazmak SEO değildir. Önce müşterilerinizin hangi kelimelerle, hangi niyetle aradığını buluruz: bilgi mi arıyor, fiyat mı karşılaştırıyor, satın almaya mı hazır? Sonra her niyet için doğru sayfayı kurgularız: hizmet sayfaları satın alma niyetine, rehber yazılar bilgi arayışına cevap verir.",
      ],
    },
    {
      h: "Yerel SEO: bulunduğunuz şehirde görünmek",
      p: [
        "Fiziksel bir işletmeniz ya da belirli bir bölgeye hizmetiniz varsa, Google Haritalar ve \"yakınımdaki\" aramaları kritik önemdedir. Google İşletme Profili'nin eksiksiz doldurulması, kategori ve hizmetlerin doğru seçilmesi, düzenli fotoğraf ve gönderiler, müşteri yorumlarının yönetilmesi ve işletme bilgilerinin her yerde tutarlı olması yerel sıralamayı belirler.",
      ],
    },
    {
      h: "Yapay zekâ aramalarında görünürlük (GEO)",
      p: [
        "İnsanlar artık soruları yalnızca Google'a değil, ChatGPT, Copilot ve Google'ın AI özetlerine de soruyor. Bu sistemler cevap üretirken net, iyi yapılandırılmış ve güvenilir kaynaklardan yararlanır.",
        "Sitenizi bu yeni aramalara da hazırlıyoruz: yapay zekâ tarayıcılarına açık robots.txt ayarları, llms.txt dosyası, soru-cevap formatında içerik, yapılandırılmış veri ve tutarlı marka bilgileri.",
      ],
    },
    {
      h: "SEO ne kadar sürede sonuç verir?",
      p: [
        "Dürüst cevap: SEO hızlı sonuç veren bir kanal değildir. Teknik düzeltmelerin etkisi birkaç hafta içinde görülebilir; rekabetli aramalarda kalıcı sıralama ise genellikle birkaç ay düzenli çalışma ister. \"Bir haftada Google'da birinci sıra\" vaadi veren birinden uzak durun; hiç kimse Google'ın sıralamasını garanti edemez.",
        "Biz garanti yerine şeffaflık sunuyoruz: ne yaptığımızı, neden yaptığımızı ve sonuçların nasıl değiştiğini düzenli olarak raporluyoruz.",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Web sitelerini kendimiz geliştirdiğimiz için SEO'yu yalnızca eklenti ayarı olarak değil, kod seviyesinde ele alıyoruz. Teknik düzeltmeler için başka bir ekibe ihtiyacınız olmaz; tespit eden ve düzelten aynı ekiptir.",
        "Ücretsiz ön görüşmede sitenizin mevcut durumuna bakıyor, önceliklendirilmiş bir yol haritası ve yazılı bir teklif sunuyoruz.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "SEO hizmeti neleri kapsıyor?", a: "Teknik SEO denetimi ve düzeltmeleri, hız optimizasyonu, yapılandırılmış veri, anahtar kelime araştırması, içerik planı ve üretimi, yerel SEO ve düzenli raporlama. Kapsamı sitenizin ihtiyacına göre belirliyoruz." },
    { q: "Google'da ilk sıraya çıkmayı garanti ediyor musunuz?", a: "Hayır, ve kimse edemez. Sıralamayı Google belirler. Biz doğru teknik temeli, kaliteli içeriği ve şeffaf raporlamayı garanti ediyoruz." },
    { q: "Sonuçlar ne zaman görülür?", a: "Teknik düzeltmelerin etkisi genellikle birkaç hafta içinde görülür; rekabetli aramalarda kalıcı sonuç birkaç ay düzenli çalışma gerektirir." },
    { q: "Sitemi siz yapmadıysanız da SEO yapabilir misiniz?", a: "Evet. Önce mevcut sitenizi denetliyor, düzeltilebilecek sorunları ve gerekiyorsa altyapı önerilerini raporluyoruz." },
    { q: "Hangi araçları kullanıyorsunuz?", a: "Google Search Console, Google Analytics 4, Bing Webmaster Tools, PageSpeed Insights ve Rich Results Test başta olmak üzere resmi araçlarla çalışıyoruz; raporları size de açık tutuyoruz." },
    { q: "Blog yazısı yazıyor musunuz?", a: "Evet. Hedef aramalara göre planlanmış, özgün ve bilgilendirici Türkçe ve İngilizce blog içerikleri hazırlıyoruz." },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "E-ticaret sitesi", href: "/e-ticaret" },
    { label: "Sosyal medya yönetimi", href: "/sosyal-medya" },
    { label: "Web sitesi ne kadar tutar?", href: "/blog/web-sitesi-maliyeti" },
  ],
  closingTitle: ["Sitenizin görünürlüğü için", "konuşalım"],
  closingLead: "Sitenizin adresini gönderin; ücretsiz ön görüşmede mevcut durumu ve atılabilecek ilk adımları birlikte konuşalım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "SEO hizmeti ve arama motoru optimizasyonu",
  areaServed: "Türkiye ve yurt dışı",
};

export const seoEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "SEO Services — Technical SEO, Content & Search Visibility",
    description:
      "SEO services: technical SEO audits, site speed, structured data, content strategy, local SEO and visibility in AI-powered search. Transparent reporting, free consultation.",
    keywords: [
      "SEO services",
      "technical SEO",
      "SEO audit",
      "SEO consultant",
      "local SEO",
      "AI search optimisation",
      "website SEO",
    ],
  },
  eyebrow: "SEO",
  h1: ["SEO:", "get found, win customers"],
  lead: "Your customers are searching; the question is whether they find you. From technical foundations to content strategy, we work to make your site visible on Google and in AI-powered search — with measurable steps, not inflated promises.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do"],
  scopeLead: "SEO is not a one-off setting; it is a process where a technical foundation, the right content and trust signals work together.",
  scope: [
    { title: "Technical SEO audit", desc: "Crawlability, indexing issues, broken links, redirects, sitemap and robots.txt checks." },
    { title: "Speed & Core Web Vitals", desc: "We improve page speed and user-experience metrics, which affect both rankings and conversions." },
    { title: "Structured data", desc: "Organisation, service, product, FAQ and article schemas that describe your site correctly to Google." },
    { title: "Keywords & content", desc: "We find the queries your customers actually use and plan pages and articles that answer them." },
    { title: "Local SEO", desc: "Google Business Profile, map visibility and optimisation for city-focused searches." },
    { title: "AI search visibility", desc: "A site structure that AI-powered search — ChatGPT, Copilot, Google AI Overviews — can cite as a source." },
  ],
  processTitle: ["How we", "work"],
  process: [
    { step: "01", title: "Analysis", desc: "We review your site's current state, your competitors and your target searches." },
    { step: "02", title: "Technical fixes", desc: "We fix the foundation first; content only works on solid ground." },
    { step: "03", title: "Content & pages", desc: "We create service pages and articles that answer your target searches." },
    { step: "04", title: "Tracking & reports", desc: "We measure progress with Search Console and Analytics and share regular, readable reports." },
  ],
  guideEyebrow: "SEO guide",
  guide: [
    {
      h: "What is SEO and why is it still the most valuable channel?",
      p: [
        "SEO (search engine optimisation) is the work that helps your site rank for relevant searches on engines like Google. With ads you pay for every click and traffic stops when the budget does; organic traffic compounds with effort and lasts.",
        "People search because they already have a need. That's why visitors from organic search are usually the highest-intent and most valuable visitors you get.",
      ],
    },
    {
      h: "The three pillars of SEO: technical, content and authority",
      p: ["Lasting results need all three working together:"],
      ul: [
        "Technical SEO: Google can crawl and understand your site without friction — speed, mobile-friendliness, sitemap, correct redirects, structured data.",
        "Content: deep, original pages that genuinely answer your audience's questions.",
        "Authority and trust: quality links to your site, consistent business information, customer reviews and brand awareness.",
      ],
    },
    {
      h: "Technical SEO: the invisible foundation that decides everything",
      p: [
        "Even the best content may never get indexed because of technical problems. Wrong canonical tags, deleted pages left in the sitemap, slow loading, layouts that break on mobile or wrong redirects quietly pull rankings down.",
        "We run these checks on our own site too. For example, we replaced a hand-maintained sitemap that still listed deleted pages with one generated automatically from the real pages on every deploy. Small but critical fixes like this are the first step of any SEO work.",
      ],
    },
    {
      h: "Content strategy: the right answer to the right question",
      p: [
        "Writing random blog posts is not SEO. First we find which words your customers use and with what intent: are they looking for information, comparing prices or ready to buy? Then we build the right page for each intent — service pages answer buying intent, guides answer research intent.",
      ],
    },
    {
      h: "Local SEO: being visible in your city",
      p: [
        "If you have a physical business or serve a specific area, Google Maps and \"near me\" searches are critical. A complete Google Business Profile, correct categories and services, regular photos and posts, managed customer reviews and consistent business information everywhere determine local rankings.",
      ],
    },
    {
      h: "Visibility in AI search (GEO)",
      p: [
        "People now ask questions not only on Google but also in ChatGPT, Copilot and Google's AI Overviews. These systems draw on clear, well-structured and trustworthy sources when they generate answers.",
        "We prepare your site for these new searches too: robots.txt settings that allow AI crawlers, an llms.txt file, question-and-answer content, structured data and consistent brand information.",
      ],
    },
    {
      h: "How long does SEO take?",
      p: [
        "The honest answer: SEO is not a fast channel. The effect of technical fixes can show within a few weeks; lasting rankings for competitive searches usually take a few months of consistent work. Stay away from anyone promising \"first place on Google in a week\" — nobody can guarantee Google's rankings.",
        "Instead of guarantees we offer transparency: we report regularly on what we did, why we did it and how the results are changing.",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "Because we build websites ourselves, we treat SEO at the code level, not just as plugin settings. You don't need a separate team for technical fixes — the team that finds the problem is the team that fixes it.",
        "In a free consultation we look at your site's current state and give you a prioritised roadmap and a written quote.",
      ],
    },
  ],
  faqTitle: ["Frequently asked", "questions"],
  faq: [
    { q: "What does your SEO service include?", a: "Technical SEO audits and fixes, speed optimisation, structured data, keyword research, content planning and writing, local SEO and regular reporting. We set the scope based on what your site needs." },
    { q: "Do you guarantee first place on Google?", a: "No, and nobody can. Google decides rankings. We guarantee a correct technical foundation, quality content and transparent reporting." },
    { q: "When will I see results?", a: "Technical fixes usually show an effect within a few weeks; lasting results for competitive searches take a few months of consistent work." },
    { q: "Can you do SEO for a site you didn't build?", a: "Yes. We start by auditing your current site and report the issues we can fix and, where needed, platform recommendations." },
    { q: "Which tools do you use?", a: "Mainly official tools: Google Search Console, Google Analytics 4, Bing Webmaster Tools, PageSpeed Insights and the Rich Results Test — and we keep the reports open to you." },
    { q: "Do you write blog content?", a: "Yes. We write original, informative articles in English and Turkish, planned around your target searches." },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "Web design", href: "/en/web-design" },
    { label: "E-commerce websites", href: "/en/ecommerce" },
    { label: "Social media management", href: "/en/social-media" },
    { label: "How much does a website cost?", href: "/en/blog/web-sitesi-maliyeti" },
  ],
  closingTitle: ["Let's talk about", "your site's visibility"],
  closingLead: "Send us your site's address; in a free consultation we'll look at where it stands and the first steps worth taking.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "SEO services and search engine optimisation",
  areaServed: "Worldwide",
};
