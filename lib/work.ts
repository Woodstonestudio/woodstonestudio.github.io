import type { Locale } from "@/components/service-page";

/**
 * Çalışmalar sayfası içeriği. Gerçek müşteri işi, kendi yayındaki
 * ürünlerimiz ve konsept çalışmalar ayrı ve dürüstçe etiketlenir.
 */

export const WORK_PATH: Record<Locale, string> = { tr: "/calismalar", en: "/en/work" };

export type WorkPageDict = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: [string, string];
  lead: string;
  clientEyebrow: string;
  /** Müşteri projeleri — en yeni en üstte. Yorum (quote) varsa gösterilir. */
  clients: { title: string; field: string; desc: string; quote?: string; author?: string; url: string; host: string; cta: string; img: string; imgW: number; imgH: number }[];
  productsEyebrow: string;
  productsTitle: [string, string];
  productsLead: string;
  products: { title: string; platform: string; desc: string; tags: string[]; url: string; cta: string; img?: string; links?: { label: string; url: string }[] }[];
  closingTitle: [string, string];
  closingLead: string;
  closingCta: string;
};

export const workPage: Record<Locale, WorkPageDict> = {
  tr: {
    meta: {
      title: "Çalışmalar — Referanslar, Uygulamalar ve Projeler",
      description:
        "WoodstoneStudio çalışmaları: yayındaki müşteri projeleri, App Store ve Google Play'deki kendi uygulamalarımız ve farklı sektörler için konsept web siteleri.",
    },
    eyebrow: "Çalışmalar",
    h1: ["Yaptıklarımız,", "yayında olanlar."],
    lead: "Burada üç tür iş göreceksiniz: müşterilerimiz için yayına aldığımız projeler, mağazalarda yayında olan kendi uygulamalarımız ve bir işin bizde nasıl göründüğünü göstermek için hazırladığımız konsept çalışmalar. Her birini ne olduğuyla etiketliyoruz.",
    clientEyebrow: "Müşteri projeleri",
    clients: [
    {
      title: "İzmir Classic Cars",
      field: "Klasik Otomobil Topluluğu · Web Sitesi",
      desc: "İzmir'in klasik otomobil topluluğu için tasarlayıp geliştirdiğimiz site. Etkinlik takvimi, fotoğraf galerisi, garaj, parça ve restorasyon hizmetleri, marka iş birlikleri ve basında çıkan haberler tek sayfada. Çerez ve form kullanmayan, hızlı ve mobil uyumlu bir yapı.",
      url: "https://izmirclassiccars.com",
      host: "izmirclassiccars.com",
      cta: "Siteyi Ziyaret Et",
      img: "/work/izmir-classic-cars-v2.webp",
      imgW: 1600,
      imgH: 1000,
    },
    {
      title: "CrossFit Bahçeşehir",
      field: "Spor Salonu · Web Sitesi",
      desc: "Bahçeşehir'deki bir CrossFit salonu için baştan sona tasarlayıp geliştirdiğimiz tanıtım sitesi. Ders programı, üyelik bilgileri, mobilde hızlı gezinme ve tek dokunuşla iletişim akışı.",
      quote: "Aklımızdaki salonu tam olarak ekrana taşıdılar; siteyi ilk açtığımızda 'İşte biz buyuz' dedik. Hızlı, sade ve tam bize benziyor. Çalışmak da gerçekten keyifliydi.",
      author: "Serpil KURD · Salon Sahibi",
      url: "https://crossfitbahcesehir.fit",
      host: "crossfitbahcesehir.fit",
      cta: "Siteyi Ziyaret Et",
      img: "/work/crossfit-bahcesehir.webp",
      imgW: 1600,
      imgH: 726,
    },
    ],
    productsEyebrow: "Kendi ürünlerimiz",
    productsTitle: ["Mağazalarda", "yayında."],
    productsLead: "Müşteri projelerinin yanında kendi uygulamalarımızı da tasarlıyor, geliştiriyor, yayınlıyor ve büyütüyoruz. Bir uygulamanın fikirden mağazaya giden yolunu bu ürünlerde yaşayarak öğrendik.",
    products: [
      {
        title: "JoVVo",
        platform: "iOS · Android",
        desc: "Cebinizdeki yapay zekâ fitness ve beslenme koçu. Spora özel antrenman programları, fotoğraftan kalori ve makro analizi, su ve adım takibi ve 7/24 sohbet eden koç David.",
        tags: ["Mobil uygulama", "Yapay zekâ", "Abonelik"],
        url: "https://apps.apple.com/tr/app/jovvo/id6794609486?l=tr",
        cta: "App Store'da Gör",
        img: "/work/jovvo-meal.webp",
        links: [
          { label: "App Store", url: "https://apps.apple.com/tr/app/jovvo/id6794609486?l=tr" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.jovvo.app" },
        ],
      },
      {
        title: "ShqipTR",
        platform: "iOS · Android",
        desc: "Türkçe konuşanlara Arnavutça, Arnavutça konuşanlara Türkçe öğreten dil uygulaması. A1'den B2'ye dersler, yapay zekâ konuşma partneri Mira ve kelime kelime puan veren telaffuz koçu.",
        tags: ["Mobil uygulama", "Yapay zekâ", "Eğitim"],
        url: "https://apps.apple.com/app/id6806021486",
        cta: "App Store'da Gör",
        img: "/work/shqiptr-phone.webp",
        links: [
          { label: "App Store", url: "https://apps.apple.com/app/id6806021486" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.shqiptr.app" },
        ],
      },
    ],
    closingTitle: ["Sıradaki proje", "sizinki olsun."],
    closingLead: "Bir web sitesi, online mağaza ya da mobil uygulama fikriniz varsa anlatın; ücretsiz ön görüşmede kapsamı ve maliyeti birlikte netleştirelim.",
    closingCta: "Bize Ulaşın",
  },
  en: {
    meta: {
      title: "Work — Client Projects, Apps and Concepts",
      description:
        "WoodstoneStudio work: live client projects, our own apps on the App Store and Google Play, and concept websites for different industries.",
    },
    eyebrow: "Work",
    h1: ["What we've built,", "and what's live."],
    lead: "You'll find three kinds of work here: projects we launched for clients, our own apps live in the stores, and concept work we built to show what a project looks like with us. Each one is labelled for what it is.",
    clientEyebrow: "Client projects",
    clients: [
    {
      title: "İzmir Classic Cars",
      field: "Classic Car Community · Website",
      desc: "A site we designed and built for İzmir's classic car community. Event calendar, photo gallery, garage, parts and restoration services, brand partnerships and press coverage on a single page. Cookie-free and form-free, fast and mobile-friendly.",
      url: "https://izmirclassiccars.com",
      host: "izmirclassiccars.com",
      cta: "Visit the Site",
      img: "/work/izmir-classic-cars-v2.webp",
      imgW: 1600,
      imgH: 1000,
    },
    {
      title: "CrossFit Bahçeşehir",
      field: "Gym · Website",
      desc: "A marketing site we designed and built end to end for a CrossFit gym in Bahçeşehir, Istanbul. Class schedule, membership details, fast mobile navigation and a one-tap contact flow.",
      quote: "They put exactly the gym we had in our heads onto the screen; the first time we opened the site we said 'yes, this is us.' Fast, clean and truly ours — and a real joy to work with.",
      author: "Serpil KURD · Gym Owner",
      url: "https://crossfitbahcesehir.fit",
      host: "crossfitbahcesehir.fit",
      cta: "Visit the Site",
      img: "/work/crossfit-bahcesehir.webp",
      imgW: 1600,
      imgH: 726,
    },
    ],
    productsEyebrow: "Our own products",
    productsTitle: ["Live in", "the stores."],
    productsLead: "Alongside client work we design, build, publish and grow our own apps. These products taught us, first-hand, the whole road an app travels from idea to store.",
    products: [
      {
        title: "JoVVo",
        platform: "iOS · Android",
        desc: "An AI fitness and nutrition coach in your pocket. Sport-specific training programs, calorie and macro analysis from a photo, water and step tracking, and David, a coach you can chat with 24/7.",
        tags: ["Mobile app", "AI", "Subscriptions"],
        url: "https://apps.apple.com/tr/app/jovvo/id6794609486?l=tr",
        cta: "View on the App Store",
        img: "/work/jovvo-meal.webp",
        links: [
          { label: "App Store", url: "https://apps.apple.com/tr/app/jovvo/id6794609486?l=tr" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.jovvo.app" },
        ],
      },
      {
        title: "ShqipTR",
        platform: "iOS · Android",
        desc: "A language app that teaches Albanian to Turkish speakers and Turkish to Albanian speakers. Lessons from A1 to B2, Mira, an AI conversation partner, and a pronunciation coach that scores you word by word.",
        tags: ["Mobile app", "AI", "Education"],
        url: "https://apps.apple.com/app/id6806021486",
        cta: "View on the App Store",
        img: "/work/shqiptr-phone.webp",
        links: [
          { label: "App Store", url: "https://apps.apple.com/app/id6806021486" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.shqiptr.app" },
        ],
      },
    ],
    closingTitle: ["Make the next project", "yours."],
    closingLead: "If you have an idea for a website, an online store or a mobile app, tell us about it; in a free consultation we'll clarify scope and cost together.",
    closingCta: "Get in Touch",
  },
};
