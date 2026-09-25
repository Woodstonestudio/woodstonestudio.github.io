import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/mobil-uygulama",
  en: "/en/mobile-apps",
} as const;

export const mobileTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Mobil Uygulama Geliştirme — iOS ve Android",
    description:
      "Mobil uygulama geliştirme stüdyosu. Flutter ile tek kod tabanından iOS ve Android uygulamalar; App Store ve Google Play yayını dahil. Ücretsiz ön görüşme.",
    keywords: [
      "mobil uygulama yaptırmak",
      "mobil uygulama geliştirme firması",
      "mobil uygulama yaptırmak",
      "Flutter uygulama geliştirme",
      "iOS Android uygulama",
      "App Store Google Play yayınlama",
      "uygulama geliştirme firması",
    ],
  },
  eyebrow: "Mobil Uygulama · iOS & Android",
  h1: ["Mobil uygulama:", "fikirden mağazaya"],
  lead: "WoodstoneStudio, Türkiye ve yurt dışındaki müşterilerle uzaktan çalışan bir dijital teknoloji stüdyosudur. Flutter ile tek kod tabanından iOS ve Android uygulamalar geliştiriyor; tasarımdan App Store ve Google Play yayınına kadar tüm süreci üstleniyoruz. Kendi uygulamalarımız mağazalarda yayında — süreci yaşayarak biliyoruz.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Bir uygulama sadece kodlanmaz; mağaza onayından geçer, kullanıcıya ulaşır ve yaşatılır. Hepsini tek elden yürütüyoruz.",
  scope: [
    { title: "iOS ve Android uygulama", desc: "Flutter ile tek kod tabanından her iki platforma yayın; tek ekip, tek bütçe, iki mağaza." },
    { title: "MVP ve ilk sürüm", desc: "Fikrinizi en kısa sürede test edilebilir bir ilk sürüme dönüştürüyoruz; geri bildirimle büyütüyoruz." },
    { title: "Yapay zekâ destekli uygulamalar", desc: "Sohbet, görsel tanıma, içerik üretimi gibi AI özelliklerini uygulamanıza entegre ediyoruz." },
    { title: "Backend ve altyapı", desc: "Kullanıcı yönetimi, veritabanı, bildirimler ve ödeme altyapısı (abonelik, uygulama içi satın alma) kuruyoruz." },
    { title: "Mağaza yayını", desc: "App Store ve Google Play başvurusu, inceleme süreci, mağaza metinleri ve görselleri — onaydan geçene kadar yanınızdayız." },
    { title: "Güncelleme ve bakım", desc: "Yayından sonra sürüm güncellemeleri, hata düzeltmeleri ve yeni özellikler için çalışmaya devam ediyoruz." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "Fikrinizi, hedef kullanıcınızı ve öncelikli özellikleri netleştiriyoruz. Ücretsiz." },
    { step: "02", title: "Tasarım", desc: "Ekran akışlarını ve arayüzü tasarlıyor; onayınızla geliştirmeye geçiyoruz." },
    { step: "03", title: "Geliştirme", desc: "Flutter ile iOS ve Android'i birlikte geliştiriyor, test sürümlerini sizinle paylaşıyoruz." },
    { step: "04", title: "Yayın ve destek", desc: "Mağaza başvurularını yapıp onay sürecini yönetiyoruz; sonrasında bakım sürüyor." },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "Mobil uygulama yaptırmak ne kadar sürer?", a: "Basit bir MVP 4–6 hafta, orta ölçekli bir uygulama 2–3 ay sürer. Kapsama göre ön görüşmede net bir takvim veriyoruz." },
    { q: "Uygulama hem iOS hem Android'de çalışır mı?", a: "Evet. Flutter ile tek kod tabanından her iki platforma yayın yapıyoruz; ayrı ayrı geliştirme maliyetine göre çok daha ekonomiktir." },
    { q: "App Store ve Google Play yayınını siz mi yapıyorsunuz?", a: "Evet. Başvuru, mağaza metinleri, görseller ve inceleme sürecini biz yönetiyoruz. Kendi uygulamalarımızı yayınladığımız için süreci iyi biliyoruz." },
    { q: "Uygulamaya yapay zekâ eklenebilir mi?", a: "Evet. Sohbet asistanı, görsel analiz, kişiselleştirilmiş içerik gibi AI özelliklerini uygulamalara entegre ediyoruz." },
    { q: "Sadece fikrim var, yeterli mi?", a: "Evet. Birçok projeye yalnızca fikirle başlıyoruz; kapsamı birlikte netleştirip bir MVP ile hayata geçiriyoruz." },
    { q: "Yayından sonra destek veriyor musunuz?", a: "Evet. İşletim sistemi güncellemeleri, hata düzeltmeleri ve yeni özellikler için bakım anlaşmasıyla çalışmaya devam ediyoruz." },
  ],
  closingTitle: ["Uygulamanız için", "konuşalım"],
  closingLead: "Fikrinizi anlatın; ücretsiz ön görüşmede kapsamı, süreyi ve maliyeti birlikte netleştirelim.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Mobil uygulama geliştirme (iOS ve Android)",
  areaServed: "Türkiye, Avrupa ve dünya geneli",
  guideEyebrow: "Mobil uygulama rehberi",
  guide: [
    {
      h: "Mobil uygulama mı, mobil uyumlu web sitesi mi?",
      p: [
        "Her iş için uygulama gerekmez. Müşterileriniz sizi ara sıra ziyaret ediyorsa, mobil uyumlu hızlı bir web sitesi çoğu zaman yeterlidir. Uygulama ise kullanıcının düzenli olarak geri döndüğü durumlarda anlam kazanır: takip, alışkanlık, sadakat, bildirim ve cihaz özelliklerine (kamera, konum, sağlık verileri) erişim gerektiğinde.",
        "Ön görüşmede bu soruyu dürüstçe birlikte cevaplıyoruz. İhtiyacınız bir web sitesiyse, uygulama satmaya çalışmayız.",
      ],
    },
    {
      h: "Native mi, çapraz platform mu?",
      p: [
        "iOS ve Android için ayrı ayrı (native) uygulama yazmak iki ayrı kod tabanı, iki ekip ve neredeyse iki kat bütçe demektir. Flutter gibi çapraz platform teknolojilerle ise tek kod tabanından iki mağazaya da yayın yapılır.",
        "İş uygulamalarının, içerik ve takip uygulamalarının ve MVP'lerin büyük çoğunluğu için çapraz platform doğru tercihtir: daha hızlı geliştirilir, daha kolay güncellenir ve kullanıcı farkı hissetmez. Çok ağır grafik veya platforma özel donanım gerektiren nadir durumlarda native geliştirmeyi öneriyoruz.",
      ],
    },
    {
      h: "Fikirden mağazaya: uygulama geliştirme süreci",
      p: ["Bir uygulama projesi genellikle şu aşamalardan geçer:"],
      ul: [
        "Keşif: Hedef kullanıcı, çözülen problem ve ilk sürümde olması gereken özellikler netleşir.",
        "Tasarım: Ekran akışları ve arayüz tasarlanır; tıklanabilir bir prototiple onaylanır.",
        "Geliştirme: Uygulama ve arka uç (backend) birlikte geliştirilir; test sürümleri düzenli olarak sizinle paylaşılır.",
        "Test: Farklı cihaz ve ekran boyutlarında test edilir; TestFlight ve Google Play iç test kanalları kullanılır.",
        "Mağaza yayını: Mağaza metinleri, ekran görüntüleri, gizlilik politikası ve inceleme süreci yönetilir.",
        "Yayın sonrası: Kullanıcı geri bildirimleri, hata düzeltmeleri ve yeni özelliklerle uygulama büyütülür.",
      ],
    },
    {
      h: "MVP ile başlamak neden akıllıca?",
      p: [
        "MVP (minimum uygulanabilir ürün), fikrinizin çekirdeğini içeren ve gerçek kullanıcılarla test edilebilen ilk sürümdür. Tüm özellikleri baştan geliştirmek yerine önce en değerli kısmı yayına almak hem bütçeyi korur hem de hangi özelliklerin gerçekten istendiğini gösterir.",
        "Kendi uygulamalarımızı da bu şekilde geliştiriyoruz: önce çalışan en küçük sürüm, sonra kullanıcı verisiyle büyüme.",
      ],
    },
    {
      h: "App Store ve Google Play yayını: işin görünmeyen kısmı",
      p: [
        "Kod bittiğinde iş bitmez. Apple ve Google'ın inceleme kuralları, gizlilik beyanları, hesap silme zorunluluğu, abonelik kuralları ve mağaza görselleri ciddi bir hazırlık ister. Apple'ın incelemesi özellikle titizdir ve reddedilen başvurular haftalar kaybettirebilir.",
        "Kendi uygulamalarımızı App Store ve Google Play'de yayınladık; ret gerekçelerini, düzeltme yollarını ve mağaza politikalarını yaşayarak öğrendik. Bu tecrübeyi projenize doğrudan aktarıyoruz.",
      ],
    },
    {
      h: "Yapay zekâ destekli uygulamalar",
      p: [
        "Yapay zekâ artık mobil uygulamaların sıradan bir parçası: sohbet asistanları, fotoğraftan analiz, kişiselleştirilmiş öneriler, metin ve görsel üretimi. Örneğin JoVVo'da kullanıcının yemek fotoğrafından kalori ve makro hesaplayan ve kişisel antrenman programı hazırlayan bir yapay zekâ koçu bulunuyor.",
        "AI özelliklerini güvenli bir sunucu katmanı üzerinden entegre ediyoruz; API anahtarları uygulamanın içinde tutulmaz, maliyetler kontrol altında kalır.",
      ],
    },
    {
      h: "Uygulamadan gelir modeli: abonelik, uygulama içi satın alma, reklam",
      p: ["Uygulamanızın nasıl para kazanacağı baştan planlanmalıdır. En yaygın modeller:"],
      ul: [
        "Abonelik: Aylık veya yıllık premium üyelik; ücretsiz deneme süresiyle birlikte.",
        "Uygulama içi satın alma: Tek seferlik özellik ya da içerik satışı.",
        "Reklam: AdMob gibi ağlarla ücretsiz uygulamalarda gelir.",
        "Hibrit: Ücretsiz sürümde reklam, premium sürümde reklamsız deneyim.",
      ],
    },
    {
      h: "Yayın sonrası: bakım, güncelleme ve büyüme",
      p: [
        "iOS ve Android her yıl yeni sürümler çıkarır, mağazalar yeni kurallar getirir. Güncel tutulmayan uygulamalar zamanla hata vermeye başlar ya da mağazada görünürlüğünü kaybeder. Yayından sonra sürüm güncellemeleri, hata düzeltmeleri, performans takibi ve yeni özellik geliştirme için sizinle çalışmaya devam ediyoruz.",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Biz yalnızca müşteri uygulaması geliştirmiyoruz; kendi uygulamalarımızı da tasarlıyor, geliştiriyor, yayınlıyor ve büyütüyoruz. Bir uygulamanın fikirden mağazaya ve sonrasına kadar geçtiği her aşamayı kendi ürünlerimizde yaşadık.",
        "Ücretsiz ön görüşmede fikrinizi dinliyor, gerçekçi bir MVP kapsamı ve yazılı bir maliyet çıkarıyoruz.",
      ],
    },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Mobil uygulama ne kadar tutar?", href: "/blog/mobil-uygulama-maliyeti" },
    { label: "MVP nedir?", href: "/blog/mvp-nedir" },
    { label: "SaaS geliştirme", href: "/saas-gelistirme" },
    { label: "Yapay zekâ çözümleri", href: "/yapay-zeka" },
    { label: "Çalışmalarımız", href: "/calismalar" },
  ],
};

export const mobileEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Mobile App Development — iOS & Android with Flutter",
    description:
      "Remote-first mobile app development studio. iOS and Android apps from a single Flutter codebase, App Store and Google Play publishing included. Free consultation.",
    keywords: [
      "mobile app development",
      "Flutter app development",
      "iOS Android app development",
      "mobile app studio Turkey",
      "MVP app development",
      "App Store Google Play publishing",
      "AI mobile app",
    ],
  },
  eyebrow: "Mobile Apps",
  h1: ["Mobile apps,", "from idea to the store"],
  lead: "WoodstoneStudio is a remote-first digital technology studio working with clients worldwide. We build iOS and Android apps from a single Flutter codebase and handle everything from design to App Store and Google Play release. Our own apps are live in both stores — we know the process first-hand.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do"],
  scopeLead: "An app is not just written; it passes store review, reaches users and stays alive. We run the whole journey under one roof.",
  scope: [
    { title: "iOS & Android apps", desc: "One Flutter codebase, both platforms — one team, one budget, two stores." },
    { title: "MVP & first release", desc: "We turn your idea into a testable first version fast, then grow it with real user feedback." },
    { title: "AI-powered apps", desc: "Chat assistants, image recognition, content generation — we integrate AI features into your app." },
    { title: "Backend & infrastructure", desc: "User accounts, database, push notifications and payments (subscriptions, in-app purchases)." },
    { title: "Store publishing", desc: "App Store and Google Play submission, review process, store listings and screenshots — with you until approval." },
    { title: "Updates & maintenance", desc: "Version updates, bug fixes and new features after launch." },
  ],
  processTitle: ["How we", "work"],
  process: [
    { step: "01", title: "Consultation", desc: "We clarify your idea, target users and priority features. Free." },
    { step: "02", title: "Design", desc: "Screen flows and interface, developed further with your approval." },
    { step: "03", title: "Development", desc: "iOS and Android built together in Flutter, with test builds shared along the way." },
    { step: "04", title: "Launch & support", desc: "Store submissions and review handled; maintenance continues after release." },
  ],
  faqTitle: ["Frequently asked", "questions"],
  faq: [
    { q: "How long does a mobile app take?", a: "A simple MVP takes 4–6 weeks, a mid-sized app 2–3 months. We give a clear timeline at the consultation." },
    { q: "Will the app run on both iOS and Android?", a: "Yes. We build both platforms from a single Flutter codebase, which is far more economical than developing them separately." },
    { q: "Do you handle App Store and Google Play publishing?", a: "Yes. We manage submission, store listings, screenshots and the review process. We publish our own apps, so we know it well." },
    { q: "Can AI be added to the app?", a: "Yes. We integrate features like chat assistants, image analysis and personalised content." },
    { q: "I only have an idea — is that enough?", a: "Yes. Many projects start with just an idea; we define the scope together and bring it to life with an MVP." },
    { q: "Do you provide support after launch?", a: "Yes. We continue with a maintenance agreement for OS updates, bug fixes and new features." },
  ],
  closingTitle: ["Let's talk about", "your app"],
  closingLead: "Tell us your idea; in a free consultation we'll clarify scope, timeline and cost together.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "Mobile app development (iOS and Android)",
  areaServed: "Worldwide",
  guideEyebrow: "Mobile app guide",
  guide: [
    {
      h: "Mobile app or mobile-friendly website?",
      p: [
        "Not every business needs an app. If customers visit you occasionally, a fast mobile-friendly website is often enough. An app makes sense when users come back regularly: tracking, habits, loyalty, notifications, or when you need device features such as the camera, location or health data.",
        "We answer this question honestly with you in the consultation. If what you need is a website, we won't try to sell you an app.",
      ],
    },
    {
      h: "Native or cross-platform?",
      p: [
        "Writing separate native apps for iOS and Android means two codebases, two teams and almost twice the budget. With cross-platform technology such as Flutter, one codebase ships to both stores.",
        "For most business apps, content and tracking apps and MVPs, cross-platform is the right choice: faster to build, easier to update, and users can't tell the difference. We recommend native development only in rare cases that need very heavy graphics or platform-specific hardware.",
      ],
    },
    {
      h: "From idea to app store: the development process",
      p: ["An app project usually goes through these stages:"],
      ul: [
        "Discovery: the target user, the problem being solved and the must-have features of the first version are defined.",
        "Design: screen flows and the interface are designed and approved through a clickable prototype.",
        "Development: the app and its backend are built together, with regular test builds shared with you.",
        "Testing: tested across devices and screen sizes using TestFlight and Google Play internal testing.",
        "Store launch: store copy, screenshots, privacy policy and the review process are handled.",
        "After launch: the app grows through user feedback, bug fixes and new features.",
      ],
    },
    {
      h: "Why starting with an MVP is smart",
      p: [
        "An MVP (minimum viable product) is the first version that contains the core of your idea and can be tested with real users. Shipping the most valuable part first instead of building every feature upfront protects your budget and shows which features people actually want.",
        "We build our own apps the same way: first the smallest version that works, then growth driven by user data.",
      ],
    },
    {
      h: "App Store and Google Play publishing: the invisible part of the job",
      p: [
        "The work isn't done when the code is. Apple's and Google's review rules, privacy disclosures, account-deletion requirements, subscription rules and store assets all take real preparation. Apple's review is especially strict, and a rejected submission can cost weeks.",
        "We have published our own apps on the App Store and Google Play, and learned rejection reasons, fixes and store policies first-hand. We bring that experience straight into your project.",
      ],
    },
    {
      h: "AI-powered apps",
      p: [
        "AI is now an ordinary part of mobile apps: chat assistants, photo analysis, personalised recommendations, text and image generation. JoVVo, for example, has an AI coach that estimates calories and macros from a meal photo and builds personal training programs.",
        "We integrate AI features through a secure server layer, so API keys never live inside the app and costs stay under control.",
      ],
    },
    {
      h: "Monetisation: subscriptions, in-app purchases, ads",
      p: ["How your app will make money should be planned from the start. The most common models:"],
      ul: [
        "Subscriptions: monthly or yearly premium membership, usually with a free trial.",
        "In-app purchases: one-off feature or content sales.",
        "Ads: revenue from free apps through networks such as AdMob.",
        "Hybrid: ads in the free tier, an ad-free premium experience.",
      ],
    },
    {
      h: "After launch: maintenance, updates and growth",
      p: [
        "iOS and Android release new versions every year and the stores keep adding rules. Apps that aren't kept up to date start to break or lose visibility in the store. After launch we keep working with you on version updates, bug fixes, performance monitoring and new features.",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "We don't only build client apps; we design, build, publish and grow our own. We have been through every stage an app goes through, from idea to the store and beyond, with our own products.",
        "In a free consultation we listen to your idea and put together a realistic MVP scope and a written cost estimate.",
      ],
    },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "How much does an app cost?", href: "/en/blog/mobil-uygulama-maliyeti" },
    { label: "What is an MVP?", href: "/en/blog/mvp-nedir" },
    { label: "SaaS development", href: "/en/saas-development" },
    { label: "AI solutions", href: "/en/ai-solutions" },
    { label: "Our work", href: "/en/work" },
  ],
};

