/**
 * i18n sözlükleri — elle çevrilmiş, kaliteli içerik.
 * Her bölümün metinleri tek kaynakta; bileşenler bu sözlükleri
 * prop olarak alır (varsayılan: Türkçe).
 */

export const trNav = {
  ariaLabel: "Ana menü",
  links: [
    { href: "/#products", label: "Ürünler" },
    { href: "/#services", label: "Hizmetler" },
    { href: "/#work", label: "Çalışmalar" },
    { href: "/#studio", label: "Stüdyo" },
    { href: "/#contact", label: "İletişim" },
  ],
  switchHref: "/en",
  switchLabel: "EN",
  switchAria: "Switch to English",
};

export const enNav = {
  ariaLabel: "Main menu",
  links: [
    { href: "/en#products", label: "Products" },
    { href: "/en#services", label: "Services" },
    { href: "/en#work", label: "Work" },
    { href: "/en#studio", label: "Studio" },
    { href: "/en#contact", label: "Contact" },
  ],
  switchHref: "/",
  switchLabel: "TR",
  switchAria: "Türkçe'ye geç",
};

export const trHero = {
  eyebrow: "Dijital Teknoloji Stüdyosu",
  titleLine1: "Dijital fikirleri güçlü",
  titleLine2: "ürünlere dönüştürüyoruz.",
  strip1: "Tasarım · Yazılım",
  strip2: "Otomasyon",
  lead: "Web siteleri, web ve mobil uygulamalar, yapay zekâ çözümleri, iş süreçleri otomasyonu ve özel yazılım — hepsini bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
  ctaPrimary: "Çalışmalarımızı Görün",
  ctaSecondary: "Bize Ulaşın",
};

export const enHero = {
  eyebrow: "Digital Technology Studio",
  titleLine1: "We turn digital ideas",
  titleLine2: "into powerful products.",
  strip1: "Design · Software",
  strip2: "Automation",
  lead: "Websites, web and mobile applications, AI solutions, business process automation and custom software — all designed and built with the discipline of a product team.",
  ctaPrimary: "See Our Work",
  ctaSecondary: "Get in Touch",
};

export type NavDict = typeof trNav;
export type HeroDict = typeof trHero;

export const trSections = {
  productsIntro: {
    eyebrow: "Ürünler",
    t1: "Müşterilerimiz için geliştiriyoruz.",
    t2: "Kendimiz için de.",
    lead: "Kendi ürünlerimiz, mühendislik gücümüzü keskinleştirdiğimiz yerdir. Müşteri projelerimize taşıdığımız disiplini önce kendi işlerimizde sınarız. Üç örneği aşağıda.",
  },
  contractory: {
    t1: "Akıllı sözleşme dağıtımı,",
    t2: "baştan sona tek yerde.",
    lead: "Derlemeden doğrulamaya, akıllı sözleşmenin tüm yaşam döngüsünü tek bir yüzeyde toplar. Üretimde iş çıkaran blockchain ekipleri için kurulmuş, sade ve güvenilir bir araç.",
    caps: [
      { name: "Dağıt", note: "Arc'a ERC-20 · 721 · 1155" },
      { name: "Doğrula", note: "Gezginde kaynak doğrulaması" },
      { name: "Yönet", note: "Tek yüzeyden yaşam döngüsü" },
    ],
    cta: "Projeyi İncele",
    caption: "Nº 01 — Dağıtım konsolu · Arc",
  },
  alphaos: {
    t1: "Doğrulanabilir",
    t2: "dijital itibar.",
    lead: "AlphaOS, zincir üstü katkıyı ölçülebilir bir itibara dönüştürür. Görevler, rozetler ve canlı bir lider tablosu; her operatör bir Basename'e çözümlenir, her puan işleme kadar izlenebilir.",
    caps: [
      { name: "Ölç", note: "Etkinlikten itibara" },
      { name: "Sırala", note: "Canlı operatör lider tablosu" },
      { name: "Doğrula", note: "Her puan zincir üstünde denetlenebilir" },
    ],
    cta: "Projeyi İncele",
    caption: "Nº 02 — İtibar aracı · Base",
  },
  authorai: {
    t1: "Yapay zekâ arka planda,",
    t2: "odak sizde.",
    lead: "AuthorAI bir yazma aracıdır, otomatik pilot değil. Yapay zekâ yalnızca siz istediğinizde devreye girer; sayfa sizin, cümleler sizin, son söz her zaman sizde.",
    caps: [
      { name: "Yaz", note: "Odaklı, dikkat dağıtmayan sayfa" },
      { name: "Öner", note: "İstendiğinde kenarda sunulur" },
      { name: "Biçimlendir", note: "Aradan çekilen yapı" },
    ],
    cta: "Projeyi İncele",
    caption: "Nº 03 — Yazma aracı",
  },
  services: {
    eyebrow: "Hizmetler",
    t1: "Dört disiplin,",
    t2: "tek stüdyo.",
    groups: [
      { title: "Tasarım", line: "Modern, kullanıcı odaklı dijital deneyimler tasarlıyoruz.", items: ["Premium web siteleri", "Kurumsal web sitesi", "UI / UX tasarımı", "Marka kimliği"] },
      { title: "Geliştirme", line: "Web, mobil ve özel yazılım çözümlerini fikirden yayına geliştiriyoruz.", items: ["SaaS geliştirme", "MVP geliştirme", "Web uygulamaları (React, Next.js)", "Mobil uygulamalar (Flutter, iOS, Android)", "Özel yazılım", "API entegrasyonları"] },
      { title: "Otomasyon", line: "Yapay zekâ destekli otomasyonlarla iş süreçlerini hızlandırıyoruz.", items: ["Yapay zekâ çözümleri", "AI ajan geliştirme", "AI otomasyonu", "Blockchain & akıllı sözleşme"] },
      { title: "Süreklilik", line: "Yayına aldıktan sonra da geliştirmeye ve destek vermeye devam ediyoruz.", items: ["Teknik danışmanlık", "SEO & performans", "Bakım & destek"] },
    ],
  },
  work: {
    eyebrow: "Örnek Çalışmalar",
    t1: "Hayal edin.",
    t2: "Biz inşa edelim.",
    kind: "Konsept çalışma",
    works: [
      { title: "Köz", field: "Restoran · Landing", desc: "Modern bir ocakbaşı için tek sayfalık tanıtım sitesi — canlı menü, rezervasyon akışı ve ateş temalı bir arayüz." },
      { title: "Lumen", field: "Klinik · Landing", desc: "Bir estetik ve güzellik kliniği için ferah, güven veren bir tanıtım sitesi — hizmetler, süreç anlatımı ve randevu formu." },
      { title: "Atelier Mona", field: "E-ticaret · Moda", desc: "Bir kadın giyim butiği için sinematik bir mağaza deneyimi — kayan koleksiyon, çalışan sepet ve editoryal bir tasarım." },
      { title: "Zentarado", field: "SaaS · Ürün", desc: "Küçük ekipler için bir proje yönetim aracı — canlı ürün arayüzü, görsel panolar ve fiyatlandırmayla eksiksiz bir SaaS sitesi." },
    ],
  },
  idea: {
    eyebrow: "Fikirden ürüne",
    t1: "Bir fikriniz mi var?",
    t2: "Birlikte geliştirelim.",
    lead: "Elinizde yalnızca bir fikir olması yeterli. Bir SaaS ürünü, bir mobil uygulama ya da yapay zekâ destekli bir çözüm — fikrinizi birlikte tanımlıyor, bir MVP ile başlatıyor ve adım adım büyütüyoruz.",
    cta: "Fikrinizi Anlatın",
    ctaHref: "/#contact",
  },
  studio: {
    eyebrow: "Stüdyo",
    t1: "Çözmeye değer",
    t2: "sorunları çözeriz.",
    lead: "Woodstone bir teknoloji stüdyosu. Tasarım, yazılım ve otomasyonu birlikte ele alıyoruz; çünkü gerçek sorunlar bu ayrımları tanımaz. Her işi, kendi ürünümüzmüş gibi bir standartla ele alıyoruz.",
    signature: "Woodstone Studio tarafından tasarlandı ve geliştirildi",
  },
  faq: {
    eyebrow: "Sık sorulan sorular",
    t1: "Aklınızdaki",
    t2: "sorular.",
    faqs: [
      { q: "Sadece bir fikrim var, yardımcı olabilir misiniz?", a: "Evet. Birçok projeye yalnızca bir fikirle başlıyoruz. Fikri birlikte tanımlıyor, kapsamını netleştiriyor ve bir MVP ile hayata geçiriyoruz." },
      { q: "SaaS geliştiriyor musunuz?", a: "Evet. Abonelik tabanlı web uygulamaları dâhil, fikirden yayına kadar SaaS ürünleri geliştiriyoruz. Kullanıcı yönetimi, ödeme altyapısı ve ölçeklenebilir mimari kuruyoruz." },
      { q: "MVP geliştirebilir misiniz?", a: "Evet. Bir ürünü en kısa sürede test edilebilir hâle getirmek için önce çekirdek özellikleri içeren bir MVP geliştiriyor, ardından geri bildirimle büyütüyoruz." },
      { q: "Mobil uygulama geliştiriyor musunuz?", a: "Evet. iOS ve Android için mobil uygulamalar geliştiriyoruz. Tek kod tabanıyla her iki platforma yayın için Flutter kullanıyoruz." },
      { q: "AI ajan (AI agent) geliştirebilir misiniz?", a: "Evet. Yapay zekâ destekli otomasyonlar ve belirli görevleri yürüten AI ajanları geliştiriyoruz; mevcut iş süreçlerinize entegre ediyoruz." },
      { q: "Flutter kullanıyor musunuz?", a: "Evet. Mobil uygulama geliştirmede Flutter kullanıyoruz. Web tarafında ise ağırlıklı olarak React ve Next.js ile çalışıyoruz." },
      { q: "Web sitesi yapıyor musunuz?", a: "Evet. Kurumsal web siteleri ve premium tanıtım siteleri tasarlıyor ve geliştiriyoruz. Hız, erişilebilirlik ve arama motoru uyumluluğunu temel alıyoruz." },
      { q: "Kurumsal yazılım geliştiriyor musunuz?", a: "Evet. İşletmelere özel yazılımlar, iç araçlar ve API entegrasyonları geliştiriyoruz. İhtiyaca göre özelleştirilmiş, ölçeklenebilir çözümler kuruyoruz." },
      { q: "Blockchain projesi geliştirebilir misiniz?", a: "Evet. Blockchain uygulamaları ve akıllı sözleşme (smart contract) geliştirme konusunda deneyimliyiz; kendi Web3 ürünlerimizi de geliştiriyoruz." },
    ],
  },
  contact: {
    eyebrow: "Projeye başlayın",
    t1: "Bir sonraki projenizi",
    t2: "birlikte hayata geçirelim.",
    lead: "İster bir web sitesi, ister özel yazılım, ister yapay zekâ destekli otomasyon ya da eksiksiz bir dijital ürün — fikrinizi dinlemekten memnuniyet duyarız.",
    channel: "Bize Ulaşın",
  },
  footer: {
    tagline: "Bağımsız Ürün Stüdyosu",
    ariaLabel: "Alt menü",
    links: [
      { href: "/#products", label: "Ürünler" },
      { href: "/#services", label: "Hizmetler" },
      { href: "/#work", label: "Çalışmalar" },
      { href: "/#studio", label: "Stüdyo" },
      { href: "/#contact", label: "İletişim" },
    ],
  },
};

export const enSections: typeof trSections = {
  productsIntro: {
    eyebrow: "Products",
    t1: "We build for our clients.",
    t2: "And for ourselves.",
    lead: "Our own products are where we sharpen our engineering. The discipline we bring to client work is tested on our own products first. Three examples below.",
  },
  contractory: {
    t1: "Smart contract deployment,",
    t2: "end to end in one place.",
    lead: "From compilation to verification, it brings the entire smart contract lifecycle onto a single surface. A simple, reliable tool built for blockchain teams shipping in production.",
    caps: [
      { name: "Deploy", note: "ERC-20 · 721 · 1155 to Arc" },
      { name: "Verify", note: "Source verification on the explorer" },
      { name: "Manage", note: "Full lifecycle from one surface" },
    ],
    cta: "View Project",
    caption: "Nº 01 — Deployment console · Arc",
  },
  alphaos: {
    t1: "Verifiable",
    t2: "digital reputation.",
    lead: "AlphaOS turns on-chain contribution into measurable reputation. Quests, badges and a live leaderboard; every operator resolves to a Basename, every point is traceable to a transaction.",
    caps: [
      { name: "Measure", note: "From activity to reputation" },
      { name: "Rank", note: "Live operator leaderboard" },
      { name: "Verify", note: "Every point auditable on-chain" },
    ],
    cta: "View Project",
    caption: "Nº 02 — Reputation tool · Base",
  },
  authorai: {
    t1: "AI in the background,",
    t2: "focus on you.",
    lead: "AuthorAI is a writing tool, not an autopilot. AI steps in only when you ask; the page is yours, the sentences are yours, and the final word is always yours.",
    caps: [
      { name: "Write", note: "A focused, distraction-free page" },
      { name: "Suggest", note: "Offered at the side, on request" },
      { name: "Format", note: "Structure that stays out of the way" },
    ],
    cta: "View Project",
    caption: "Nº 03 — Writing tool",
  },
  services: {
    eyebrow: "Services",
    t1: "Four disciplines,",
    t2: "one studio.",
    groups: [
      { title: "Design", line: "We design modern, user-centred digital experiences.", items: ["Premium websites", "Corporate websites", "UI / UX design", "Brand identity"] },
      { title: "Development", line: "We build web, mobile and custom software from idea to launch.", items: ["SaaS development", "MVP development", "Web applications (React, Next.js)", "Mobile apps (Flutter, iOS, Android)", "Custom software", "API integrations"] },
      { title: "Automation", line: "We accelerate business processes with AI-powered automation.", items: ["AI solutions", "AI agent development", "AI automation", "Blockchain & smart contracts"] },
      { title: "Continuity", line: "We keep improving and supporting your product after launch.", items: ["Technical consulting", "SEO & performance", "Maintenance & support"] },
    ],
  },
  work: {
    eyebrow: "Selected Work",
    t1: "Imagine it.",
    t2: "We will build it.",
    kind: "Concept work",
    works: [
      { title: "Köz", field: "Restaurant · Landing", desc: "A one-page site for a modern grill house — live menu, reservation flow and a fire-themed interface." },
      { title: "Lumen", field: "Clinic · Landing", desc: "A calm, trust-building site for an aesthetic clinic — services, process walkthrough and an appointment form." },
      { title: "Atelier Mona", field: "E-commerce · Fashion", desc: "A cinematic store experience for a womenswear boutique — scrolling collection, working cart and an editorial design." },
      { title: "Zentarado", field: "SaaS · Product", desc: "A project management tool for small teams — a complete SaaS site with a live product UI, visual boards and pricing." },
    ],
  },
  idea: {
    eyebrow: "From idea to product",
    t1: "Have an idea?",
    t2: "Let's build it together.",
    lead: "An idea is all you need. A SaaS product, a mobile app or an AI-powered solution — we define it together, start with an MVP and grow it step by step.",
    cta: "Tell Us Your Idea",
    ctaHref: "/en#contact",
  },
  studio: {
    eyebrow: "Studio",
    t1: "We solve problems",
    t2: "worth solving.",
    lead: "Woodstone is a technology studio. We treat design, software and automation as one craft, because real problems do not respect those boundaries. Every project is held to the standard of our own products.",
    signature: "Designed and built by Woodstone Studio",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    t1: "Questions on",
    t2: "your mind.",
    faqs: [
      { q: "I only have an idea — can you help?", a: "Yes. Many of our projects start with nothing but an idea. We define it together, clarify the scope and bring it to life with an MVP." },
      { q: "Do you build SaaS products?", a: "Yes. We build SaaS products from idea to launch, including subscription-based web applications, with user management, payments and scalable architecture." },
      { q: "Can you build an MVP?", a: "Yes. To get a product testable as quickly as possible, we first build an MVP with the core features, then grow it with feedback." },
      { q: "Do you develop mobile apps?", a: "Yes. We build mobile apps for iOS and Android, using Flutter to ship to both platforms from a single codebase." },
      { q: "Can you build AI agents?", a: "Yes. We build AI-powered automations and task-specific AI agents, and integrate them into your existing workflows." },
      { q: "Do you use Flutter?", a: "Yes. We use Flutter for mobile development. On the web we work primarily with React and Next.js." },
      { q: "Do you build websites?", a: "Yes. We design and build corporate and premium marketing websites, with speed, accessibility and search-engine friendliness as fundamentals." },
      { q: "Do you build enterprise software?", a: "Yes. We build custom software, internal tools and API integrations for businesses — tailored, scalable solutions." },
      { q: "Can you build blockchain projects?", a: "Yes. We are experienced in blockchain applications and smart contract development, and we build our own Web3 products as well." },
    ],
  },
  contact: {
    eyebrow: "Start a project",
    t1: "Let's bring your next project",
    t2: "to life together.",
    lead: "A website, custom software, AI-powered automation or a complete digital product — we would love to hear your idea.",
    channel: "Get in Touch",
  },
  footer: {
    tagline: "Independent Product Studio",
    ariaLabel: "Footer menu",
    links: [
      { href: "/en#products", label: "Products" },
      { href: "/en#services", label: "Services" },
      { href: "/en#work", label: "Work" },
      { href: "/en#studio", label: "Studio" },
      { href: "/en#contact", label: "Contact" },
    ],
  },
};

export type SectionsDict = typeof trSections;
