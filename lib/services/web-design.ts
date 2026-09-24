import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/web-tasarim",
  en: "/en/web-design",
} as const;

export const webDesignTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "İzmir Web Tasarım ve Kurumsal Web Sitesi",
    description:
      "İzmir merkezli web tasarım stüdyosu. Kurumsal web siteleri, tanıtım siteleri ve e-ticaret; hızlı, mobil uyumlu ve arama motoru dostu. Ücretsiz ön görüşme.",
    keywords: [
      "İzmir web tasarım",
      "İzmir web tasarım firması",
      "kurumsal web sitesi İzmir",
      "web sitesi yaptırmak",
      "web tasarım ajansı",
      "Next.js web sitesi",
      "mobil uyumlu web sitesi",
    ],
  },
  eyebrow: "Web Tasarım · İzmir",
  h1: ["Web tasarım:", "hızlı, sade, satan siteler."],
  lead: "WoodstoneStudio, İzmir merkezli bir dijital teknoloji stüdyosudur; Türkiye'nin her yerinden ve yurt dışından müşterilerle çalışıyoruz. Kurumsal web siteleri, tanıtım siteleri ve e-ticaret arayüzlerini tasarlıyor ve geliştiriyoruz — her biri hız, mobil uyumluluk ve Google'da görünürlük düşünülerek kurulur.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Bir web sitesi sadece güzel görünmez; işinize müşteri getirir. Tasarımı, yazılımı ve arama motoru uyumluluğunu tek elden ele alıyoruz.",
  scope: [
    { title: "Kurumsal web sitesi", desc: "Şirketinizi doğru anlatan, güven veren ve mobilde kusursuz çalışan kurumsal siteler. Hizmet sayfaları, referanslar ve iletişim akışı dahil." },
    { title: "Tanıtım ve landing sayfaları", desc: "Tek bir ürünü, hizmeti ya da kampanyayı anlatan, dönüşüme odaklı sayfalar. Reklam trafiğini müşteriye çevirmek için tasarlanır." },
    { title: "E-ticaret arayüzü", desc: "Ürün listeleme, sepet ve ödeme akışıyla satışa hazır mağaza arayüzleri; hızlı yüklenen, mobilde rahat alışveriş deneyimi." },
    { title: "Yeniden tasarım", desc: "Eski, yavaş ya da mobilde bozulan sitenizi modern altyapıya taşıyoruz. Mevcut içerik ve arama sıralamalarınız korunur." },
    { title: "SEO uyumlu altyapı", desc: "Her site teknik SEO ile teslim edilir: hızlı yükleme, doğru başlık yapısı, yapılandırılmış veri ve arama motorlarının kolay tarayacağı temiz kod." },
    { title: "Bakım ve destek", desc: "Yayından sonra da yanınızdayız; güncellemeler, küçük değişiklikler ve teknik destek için sizinle çalışmaya devam ediyoruz." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "İşinizi, hedef müşterinizi ve beklentinizi dinliyoruz. Ücretsiz ve yükümlülük yok." },
    { step: "02", title: "Tasarım", desc: "Marka dilinize uygun, sade ve modern bir arayüz tasarlıyor; onayınızla ilerliyoruz." },
    { step: "03", title: "Geliştirme", desc: "Modern teknolojilerle (Next.js, React) hızlı, güvenli ve mobil uyumlu olarak kodluyoruz." },
    { step: "04", title: "Yayın ve destek", desc: "Alan adı, barındırma ve Google kaydını yapıp yayına alıyoruz; sonrasında destek sürüyor." },
  ],
  faqTitle: ["Sık sorulan", "sorular."],
  faq: [
    { q: "Web sitesi yaptırmak ne kadar sürer?", a: "Kapsama göre değişir: bir tanıtım sitesi genellikle 1–2 hafta, çok sayfalı kurumsal bir site 3–5 hafta sürer. Ön görüşmede net bir takvim veriyoruz." },
    { q: "Web tasarım fiyatları nasıl belirleniyor?", a: "Sayfa sayısı, özel işlevler (form, çoklu dil, e-ticaret) ve içerik ihtiyacına göre teklif hazırlıyoruz. Gizli maliyet yoktur; teklif yazılı ve nettir." },
    { q: "Site mobil uyumlu olacak mı?", a: "Evet. Tüm sitelerimiz önce mobil düşünülerek tasarlanır; telefon, tablet ve masaüstünde kusursuz çalışır." },
    { q: "Google'da çıkması için ne yapıyorsunuz?", a: "Teknik SEO standart olarak dahildir: hızlı yükleme, doğru başlık yapısı, yapılandırılmış veri, site haritası ve Google Search Console kurulumu." },
    { q: "İzmir dışından da çalışıyor musunuz?", a: "Evet. İzmir merkezliyiz ancak Türkiye genelinde ve yurt dışında müşterilerle uzaktan çalışıyoruz; siteniz tek dilde ya da istediğiniz kadar dilde (çok dilli) hazırlanabilir." },
    { q: "Mevcut sitemi yenileyebilir misiniz?", a: "Evet. Eski ya da yavaş sitenizi modern altyapıya taşırken mevcut içeriğinizi ve arama sıralamalarınızı koruyoruz." },
  ],
  closingTitle: ["Yeni siteniz için", "konuşalım."],
  closingLead: "Fikrinizi ya da mevcut sitenizi bize anlatın; ücretsiz ön görüşmede kapsamı, süreyi ve maliyeti netleştirelim.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Web tasarım ve kurumsal web sitesi geliştirme",
  areaServed: "İzmir, Türkiye",
  guideEyebrow: "Web tasarım rehberi",
  guide: [
    {
      h: "Kurumsal web sitesi neden hâlâ en önemli dijital varlığınız?",
      p: [
        "Sosyal medya hesapları, pazar yerleri ve harita kayıtları önemlidir; ama hepsi başkasının platformudur. Kuralları değişebilir, erişiminiz daralabilir, hesabınız bir gün kapanabilir. Kurumsal web siteniz ise tamamen size aittir. Müşteriniz sizi Google'da aradığında, bir teklifi değerlendirirken ya da sizi bir rakiple karşılaştırırken baktığı ilk yer çoğunlukla sitenizdir.",
        "İyi bir kurumsal site üç işi aynı anda yapar: ne yaptığınızı birkaç saniyede anlatır, güven verir ve ziyaretçiyi bir sonraki adıma (arama, mesaj, teklif talebi) yönlendirir. Bu üçünden biri eksikse site güzel görünse bile iş getirmez.",
      ],
    },
    {
      h: "Hazır şablon mu, özel tasarım mı?",
      p: [
        "Hazır temalar hızlı ve ucuzdur; fakat binlerce site aynı iskeleti kullanır, gereksiz kodlarla yavaşlar ve markanıza tam oturmaz. Özel tasarımda ise her sayfa sizin içeriğinize, hedef kitlenize ve satış sürecinize göre kurgulanır.",
        "WoodstoneStudio'da hazır tema kullanmıyoruz. Arayüzü sıfırdan tasarlıyor, Next.js ve React ile kodluyoruz. Sonuç: yalnızca ihtiyacınız olan kodu içeren, hızlı açılan ve rakiplerinizden ayrışan bir site.",
      ],
    },
    {
      h: "İyi bir web sitesinde olması gerekenler",
      p: ["Her proje farklıdır; ancak başarılı sitelerin neredeyse hepsinde şu temel unsurlar bulunur:"],
      ul: [
        "Net bir ana mesaj: Ziyaretçi ilk ekranda ne yaptığınızı ve kime hizmet verdiğinizi anlamalı.",
        "Hizmet sayfaları: Her hizmet için ayrı, detaylı bir sayfa hem müşteriye bilgi verir hem de Google'da o hizmetle ilgili aramalarda görünmenizi sağlar.",
        "Güven unsurları: Referanslar, müşteri yorumları, gerçek proje örnekleri ve şeffaf iletişim bilgileri.",
        "Kolay iletişim: WhatsApp, e-posta ve teklif butonu her sayfadan tek dokunuşla erişilebilir olmalı.",
        "Mobil uyum: Ziyaretçilerin büyük çoğunluğu telefondan gelir; site önce mobil için tasarlanmalı.",
        "Hız: Birkaç saniyede açılmayan bir site, ziyaretçisinin önemli bir kısmını ilk ekranda kaybeder.",
      ],
    },
    {
      h: "SEO uyumlu web tasarım: Google'da görünmek baştan planlanır",
      p: [
        "Arama motoru optimizasyonu (SEO), site yayına girdikten sonra eklenen bir süs değildir; altyapının parçasıdır. Doğru başlık hiyerarşisi, anlamlı sayfa başlıkları ve açıklamalar, temiz URL yapısı, site haritası, yapılandırılmış veri (schema) ve hızlı yükleme; hepsi tasarım ve geliştirme sırasında kurulur.",
        "Teslim ettiğimiz her sitede teknik SEO standarttır: sayfa başlıkları ve açıklamaları, Open Graph görselleri, otomatik site haritası, robots.txt, yapılandırılmış veri, Google Search Console ve Bing Webmaster Tools kurulumu. Aynı altyapıyı kendi sitemizde de kullanıyoruz.",
      ],
    },
    {
      h: "Hız ve performans neden bu kadar önemli?",
      p: [
        "Google, sayfa hızını ve kullanıcı deneyimini (Core Web Vitals) sıralama sinyali olarak kullanır. Daha da önemlisi, yavaş bir site müşteri kaybettirir: ziyaretçi beklemez, geri dönüp bir sonraki sonuca tıklar.",
        "Sitelerimizi statik olarak üretilen sayfalar, optimize edilmiş görseller ve minimum JavaScript ile kuruyoruz. Bu yaklaşım hem hızlı açılır hem de sunucu maliyetini düşük tutar; birçok sitede barındırma maliyeti neredeyse sıfıra iner.",
      ],
    },
    {
      h: "Güvenlik ve bakım",
      p: [
        "Eklenti tabanlı sistemlerde en sık görülen sorun, güncellenmeyen eklentilerden kaynaklanan güvenlik açıklarıdır. Statik altyapıda saldırı yüzeyi çok daha küçüktür: veritabanı ya da yönetim paneli açığı olmadığı için risk azalır.",
        "Yayından sonra da yanınızdayız. İçerik güncellemeleri, yeni sayfalar, küçük tasarım değişiklikleri ve teknik kontroller için bakım desteği sunuyoruz.",
      ],
    },
    {
      h: "Çok dilli web sitesi",
      p: [
        "Yurt dışına satış yapıyor ya da yabancı müşterilere hizmet veriyorsanız, sitenizin İngilizce (ve gerekirse başka dillerde) sürümü ciddi bir fark yaratır. Doğru kurulmuş çok dilli bir sitede her dilin kendi adresi olur (örneğin /en), arama motorlarına hreflang etiketleriyle dil ilişkisi bildirilir ve her dil ayrı ayrı Google'da sıralanabilir.",
        "Kendi sitemiz de Türkçe ve İngilizce olarak bu yapıyla çalışıyor. Çevirileri makine çevirisi olarak bırakmıyor, her dili o dilin okuruna göre düzenliyoruz.",
      ],
    },
    {
      h: "Kullandığımız teknolojiler",
      p: ["Modern, hızlı ve uzun ömürlü bir altyapı için şu teknolojilerle çalışıyoruz:"],
      ul: [
        "Next.js ve React: Hızlı, SEO dostu ve ölçeklenebilir web arayüzleri.",
        "Tailwind CSS: Tutarlı, hafif ve kolay güncellenen tasarım sistemi.",
        "TypeScript: Daha az hata, daha kolay bakım.",
        "Vercel, GitHub Pages ve Cloudflare: Hızlı ve güvenilir barındırma.",
        "Google Analytics 4, Search Console ve Bing Webmaster Tools: Ölçüm ve arama motoru takibi.",
      ],
    },
    {
      h: "Web sitesi yaptırırken nelere dikkat etmelisiniz?",
      p: ["Teklif alırken aşağıdaki soruların cevabını mutlaka netleştirin:"],
      ul: [
        "Tasarım özel mi, hazır tema mı?",
        "Alan adı, barındırma ve e-posta kimin adına kayıtlı olacak? (Her zaman sizin adınıza olmalı.)",
        "Teknik SEO ve hız optimizasyonu fiyata dahil mi?",
        "Metin ve görselleri kim hazırlayacak?",
        "Yayından sonra değişiklik ve bakım nasıl ücretlendiriliyor?",
        "Kaynak kodu ve tüm erişimler size teslim edilecek mi?",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Bağımsız bir ürün stüdyosuyuz. Projenizle doğrudan, işi yapan kişi ilgilenir; aracı katmanlar ve kaybolan mesajlar yoktur. Web sitelerinin yanında mobil uygulamalar ve yapay zekâ çözümleri de geliştirdiğimiz için sitenizi yalnızca bir vitrin olarak değil, büyüyebilecek bir dijital ürün olarak kurgularız.",
        "Ücretsiz ön görüşmede ihtiyacınızı dinliyor, kapsamı ve maliyeti yazılı olarak netleştiriyoruz. Gizli kalem yok, teslimde tüm erişimler sizde.",
      ],
    },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "E-ticaret sitesi", href: "/e-ticaret" },
    { label: "SEO hizmeti", href: "/seo" },
    { label: "Mobil uygulama", href: "/mobil-uygulama" },
    { label: "Web sitesi ne kadar tutar?", href: "/blog/web-sitesi-maliyeti" },
    { label: "İzmir web tasarım fiyatları", href: "/blog/izmir-web-tasarim-fiyatlari" },
  ],
};

export const webDesignEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Web Design & Corporate Websites",
    description:
      "Web design studio based in İzmir, Turkey, working with clients worldwide. Corporate websites, landing pages and e-commerce — fast, mobile-first and built to rank. Free consultation.",
    keywords: [
      "web design studio",
      "corporate website design",
      "web design Turkey",
      "Next.js website development",
      "landing page design",
      "e-commerce website design",
      "website redesign",
    ],
  },
  eyebrow: "Web Design",
  h1: ["Web design that is fast,", "clean and built to convert."],
  lead: "WoodstoneStudio is a digital technology studio based in İzmir, Turkey, working with clients across Europe and beyond. We design and build corporate websites, landing pages and e-commerce storefronts — each one made for speed, mobile use and visibility on Google.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do."],
  scopeLead: "A website should do more than look good; it should bring you customers. We handle design, development and search-engine readiness under one roof.",
  scope: [
    { title: "Corporate websites", desc: "Sites that explain your company clearly, build trust and work flawlessly on mobile — with service pages, references and a clear contact flow." },
    { title: "Landing pages", desc: "Conversion-focused pages for a single product, service or campaign, designed to turn ad traffic into enquiries." },
    { title: "E-commerce storefronts", desc: "Product listing, cart and checkout flows that are ready to sell — fast-loading and comfortable to shop on a phone." },
    { title: "Website redesign", desc: "We move outdated, slow or mobile-broken sites onto a modern stack while preserving your content and search rankings." },
    { title: "SEO-ready foundation", desc: "Every site ships with technical SEO: fast loading, correct heading structure, structured data and clean code search engines can crawl easily." },
    { title: "Maintenance & support", desc: "We stay with you after launch — updates, small changes and technical support whenever you need them." },
  ],
  processTitle: ["How we", "work."],
  process: [
    { step: "01", title: "Consultation", desc: "We listen to your business, your customers and your goals. Free, with no obligation." },
    { step: "02", title: "Design", desc: "A clean, modern interface in your brand language — we move forward with your approval at each step." },
    { step: "03", title: "Development", desc: "Built with modern technology (Next.js, React) to be fast, secure and mobile-first." },
    { step: "04", title: "Launch & support", desc: "Domain, hosting and Google registration handled; support continues after go-live." },
  ],
  faqTitle: ["Frequently asked", "questions."],
  faq: [
    { q: "How long does a website take?", a: "It depends on scope: a landing page usually takes 1–2 weeks, a multi-page corporate site 3–5 weeks. We give you a clear timeline at the consultation." },
    { q: "How is web design priced?", a: "We quote based on page count, custom features (forms, multiple languages, e-commerce) and content needs. No hidden costs — the quote is written and clear." },
    { q: "Will the site be mobile-friendly?", a: "Yes. Every site is designed mobile-first and works flawlessly on phones, tablets and desktops." },
    { q: "What do you do for Google visibility?", a: "Technical SEO is included as standard: fast loading, proper heading structure, structured data, a sitemap and Google Search Console setup." },
    { q: "Do you work with clients outside Turkey?", a: "Yes. We are based in İzmir but work remotely with clients across Europe and worldwide; sites can be delivered in a single language or in as many languages as you need." },
    { q: "Can you redesign my existing site?", a: "Yes. We move outdated or slow sites onto a modern stack while keeping your existing content and search rankings intact." },
  ],
  closingTitle: ["Let's talk about", "your new site."],
  closingLead: "Tell us about your idea or your current website; in a free consultation we'll clarify scope, timeline and cost.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "Web design and corporate website development",
  areaServed: "Worldwide",
  guideEyebrow: "Web design guide",
  guide: [
    {
      h: "Why a website is still your most important digital asset",
      p: [
        "Social media profiles, marketplaces and map listings matter, but they all belong to someone else. The rules can change, your reach can shrink and an account can be closed overnight. Your website is the one channel you fully own. When a prospect searches for you, weighs a quote or compares you with a competitor, your site is usually the first place they look.",
        "A good company website does three things at once: it explains what you do within seconds, it builds trust, and it moves the visitor to the next step — a message, a call or a quote request. If one of these is missing, the site may look nice but it won't bring in business.",
      ],
    },
    {
      h: "Template or custom design?",
      p: [
        "Templates are quick and cheap, but thousands of sites share the same skeleton, they slow down under unused code and they never quite fit your brand. With a custom design, every page is built around your content, your audience and your sales process.",
        "At WoodstoneStudio we don't use off-the-shelf themes. We design the interface from scratch and build it with Next.js and React. The result is a site that contains only the code you need, loads fast and stands apart from your competitors.",
      ],
    },
    {
      h: "What a good website needs",
      p: ["Every project is different, but almost every successful site has these foundations:"],
      ul: [
        "A clear headline: visitors should understand what you do and who you serve on the first screen.",
        "Service pages: a dedicated, detailed page per service informs customers and helps you rank for searches about that service.",
        "Trust signals: references, client reviews, real project examples and transparent contact details.",
        "Easy contact: WhatsApp, email and a quote button reachable with one tap from every page.",
        "Mobile-first layout: most visitors arrive on a phone, so the site should be designed for mobile first.",
        "Speed: a site that doesn't load within a few seconds loses a large share of its visitors on the first screen.",
      ],
    },
    {
      h: "SEO-ready web design: visibility on Google is planned from day one",
      p: [
        "Search engine optimisation is not a coat of paint added after launch; it is part of the foundation. A correct heading hierarchy, meaningful page titles and descriptions, clean URLs, a sitemap, structured data and fast loading are all set up during design and development.",
        "Technical SEO is standard on every site we deliver: titles and descriptions, Open Graph images, an automatic sitemap, robots.txt, structured data, plus Google Search Console and Bing Webmaster Tools setup. We use the same foundation on our own site.",
      ],
    },
    {
      h: "Why speed and performance matter so much",
      p: [
        "Google uses page speed and user experience (Core Web Vitals) as ranking signals. More importantly, a slow site loses customers: visitors don't wait, they go back and click the next result.",
        "We build sites with statically generated pages, optimised images and minimal JavaScript. That approach loads fast and keeps hosting costs low — on many sites hosting becomes close to free.",
      ],
    },
    {
      h: "Security and maintenance",
      p: [
        "The most common problem with plugin-based systems is security holes from plugins that never get updated. A static foundation has a much smaller attack surface: with no exposed database or admin panel, the risk drops considerably.",
        "We stay with you after launch, with maintenance for content updates, new pages, small design changes and technical checks.",
      ],
    },
    {
      h: "Multilingual websites",
      p: [
        "If you sell abroad or serve international clients, an English version of your site (and other languages where needed) makes a real difference. In a properly built multilingual site each language has its own URL (for example /en), search engines are told about the language relationship through hreflang tags, and each language can rank on Google on its own.",
        "Our own site runs on exactly this structure in Turkish and English. We don't leave translations as machine output; each language is written for its own reader.",
      ],
    },
    {
      h: "The technology we use",
      p: ["For a modern, fast and long-lasting foundation we work with:"],
      ul: [
        "Next.js and React: fast, SEO-friendly and scalable web interfaces.",
        "Tailwind CSS: a consistent, lightweight design system that is easy to update.",
        "TypeScript: fewer bugs and easier maintenance.",
        "Vercel, GitHub Pages and Cloudflare: fast and reliable hosting.",
        "Google Analytics 4, Search Console and Bing Webmaster Tools: measurement and search tracking.",
      ],
    },
    {
      h: "What to check before hiring a web designer",
      p: ["When you collect quotes, make sure you get clear answers to these questions:"],
      ul: [
        "Is the design custom or a ready-made theme?",
        "Whose name will the domain, hosting and email be registered under? (It should always be yours.)",
        "Are technical SEO and speed optimisation included in the price?",
        "Who will write the copy and provide the images?",
        "How are changes and maintenance priced after launch?",
        "Will the source code and all access be handed over to you?",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "We are an independent product studio. The person who builds your project is the person you talk to — no account-manager layers, no lost messages. Because we also build mobile apps and AI solutions, we plan your site not just as a shop window but as a digital product that can grow.",
        "In a free consultation we listen to what you need and put the scope and cost in writing. No hidden items, and all access is yours at handover.",
      ],
    },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "E-commerce websites", href: "/en/ecommerce" },
    { label: "SEO services", href: "/en/seo" },
    { label: "Mobile apps", href: "/en/mobile-apps" },
    { label: "How much does a website cost?", href: "/en/blog/web-sitesi-maliyeti" },
  ],
};

