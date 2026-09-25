import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/saas-gelistirme",
  en: "/en/saas-development",
} as const;

export const saasTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "SaaS ve MVP Geliştirme — Fikirden Ürüne",
    description:
      "SaaS ürünü ve MVP geliştirme stüdyosu. Abonelik tabanlı web uygulamaları, kullanıcı yönetimi, ödeme altyapısı ve ölçeklenebilir mimari; fikrinizi hızla test edilebilir bir ürüne dönüştürüyoruz.",
    keywords: [
      "SaaS geliştirme",
      "MVP geliştirme",
      "SaaS yazılım geliştirme",
      "startup MVP yaptırmak",
      "web uygulaması geliştirme",
      "abonelik sistemi yazılım",
      "Next.js SaaS",
    ],
  },
  eyebrow: "SaaS ve MVP",
  h1: ["SaaS fikrinizi", "gerçek bir ürüne çevirin"],
  lead: "WoodstoneStudio, SaaS ürünlerini fikirden yayına kadar geliştiren bir dijital teknoloji stüdyosudur. Önce çekirdek özellikleri içeren bir MVP kuruyor, gerçek kullanıcı geri bildirimiyle büyütüyoruz. Kendi SaaS ürünlerimizi de geliştiriyoruz — ürün düşüncesini içeriden biliyoruz.",
  ctaPrimary: "Ücretsiz Ön Değerlendirme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Bir SaaS ürünü sadece arayüz değildir; abonelik, kullanıcı, ödeme ve ölçeklenebilirlik demektir. Hepsini birlikte kuruyoruz.",
  scope: [
    { title: "MVP geliştirme", desc: "Fikrinizin en kritik özelliklerini içeren, haftalar içinde yayına alınabilecek ilk sürüm; pazarı erken test etmek için." },
    { title: "Abonelik tabanlı uygulamalar", desc: "Plan yapısı, deneme süresi, abonelik yönetimi ve faturalandırma; Stripe gibi altyapılarla ödeme entegrasyonu." },
    { title: "Kullanıcı ve yetki yönetimi", desc: "Kayıt, giriş, ekip/organizasyon yapısı, roller ve izinler — çok kullanıcılı ürünler için sağlam temel." },
    { title: "Kontrol paneli ve raporlama", desc: "Kullanıcıların işini yönettiği paneller, veri tabloları, grafikler ve dışa aktarma." },
    { title: "API ve entegrasyonlar", desc: "Üçüncü taraf servislerle (ödeme, e-posta, CRM, AI) entegrasyon ve kendi API'nizin tasarımı." },
    { title: "Ölçeklenebilir mimari", desc: "Next.js, React ve modern bulut altyapısıyla büyüdükçe sizi yavaşlatmayan bir teknik temel." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Ön değerlendirme", desc: "Fikri, hedef kullanıcıyı ve gelir modelini netleştiriyoruz. Ücretsiz." },
    { step: "02", title: "MVP kapsamı", desc: "İlk sürüme girecek çekirdek özellikleri belirleyip yol haritası çıkarıyoruz." },
    { step: "03", title: "Geliştirme", desc: "Haftalık teslimatlarla ürünü kuruyor, her adımda sizinle test ediyoruz." },
    { step: "04", title: "Yayın ve büyütme", desc: "Yayına alıyor, gerçek kullanıcı verisiyle sonraki sürümleri planlıyoruz." },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "MVP nedir, neden önce MVP?", a: "MVP, ürünün yalnızca çekirdek özelliklerini içeren ilk sürümüdür. Tüm özellikleri aylarca geliştirmek yerine erken yayına alıp gerçek kullanıcıdan öğrenmenizi sağlar; hem maliyeti hem riski düşürür." },
    { q: "Bir MVP ne kadar sürer?", a: "Kapsama göre 4–8 hafta. Ön değerlendirmede çekirdek özellikleri belirleyip net bir takvim veriyoruz." },
    { q: "Hangi teknolojileri kullanıyorsunuz?", a: "Web tarafında Next.js ve React, mobilde Flutter; veritabanı ve kimlik doğrulama için modern bulut servisleri; ödeme için Stripe gibi altyapılar." },
    { q: "Ödeme ve abonelik sistemi kuruyor musunuz?", a: "Evet. Plan yapısı, deneme süresi, abonelik yönetimi ve faturalandırmayı ürüne entegre ediyoruz." },
    { q: "Teknik bilgim yok, sorun olur mu?", a: "Hayır. Ürün düşüncesini birlikte kuruyor, teknik kararları biz alıyor ve size sade bir dille açıklıyoruz." },
    { q: "MVP sonrası devam ediyor musunuz?", a: "Evet. Yayından sonra kullanıcı verisine göre yeni sürümler geliştirmeye ve ürünü büyütmeye devam ediyoruz." },
  ],
  closingTitle: ["SaaS fikriniz için", "konuşalım"],
  closingLead: "Fikrinizi anlatın; ücretsiz ön değerlendirmede MVP kapsamını, süreyi ve maliyeti birlikte netleştirelim.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "SaaS ve MVP geliştirme",
  areaServed: "Türkiye, Avrupa ve dünya geneli",
  guideEyebrow: "SaaS ve MVP rehberi",
  guide: [
    {
      h: "SaaS nedir, klasik yazılımdan farkı ne?",
      p: [
        "SaaS (Software as a Service), kullanıcının kurmadan, tarayıcı ya da uygulama üzerinden abonelikle kullandığı yazılımdır. Muhasebe programınızı bilgisayara yüklemek yerine her ay küçük bir ücret ödeyip internetten kullanmak buna örnektir.",
        "İşletme açısından farkı gelir modelindedir: tek seferlik satış yerine düzenli, tekrar eden gelir. Bu da ürünün hiç bitmediği anlamına gelir. Kullanıcı her ay 'devam edeyim mi?' diye karar verir; bu yüzden SaaS'ta asıl iş yayından sonra başlar.",
      ],
    },
    {
      h: "Neden önce MVP?",
      p: [
        "Çoğu SaaS fikri kâğıt üzerinde kusursuz görünür; gerçek kullanıcıyla karşılaşınca bambaşka ihtiyaçlar ortaya çıkar. Aylarca her özelliği geliştirmek, yanlış varsayımlara bütçe harcamak demektir.",
        "MVP, fikrin en kritik değerini sunan ilk sürümdür. Amaç az özellikle, iyi çalışan bir ürünü erken yayına almak ve gerçek kullanım verisiyle sonraki adımları belirlemektir. Bunun mantığını 'MVP nedir' yazımızda ayrıntılı anlattık.",
      ],
    },
    {
      h: "Bir SaaS ürününün teknik temeli",
      p: [
        "Arayüz ürünün görünen kısmıdır; bir SaaS'ı ayakta tutan ise altındaki yapıdır. İlk sürümden itibaren şunların doğru kurulması gerekir:",
      ],
      ul: [
        "Kimlik doğrulama: kayıt, giriş, şifre sıfırlama ve güvenli oturum yönetimi",
        "Çok kiracılı (multi-tenant) yapı: her müşterinin verisi diğerlerinden kesin olarak ayrılmalı",
        "Abonelik ve ödeme: plan yapısı, deneme süresi, yenileme, iptal ve fatura akışı",
        "Roller ve yetkiler: ekip içinde kimin neyi görüp değiştirebileceği",
        "Yedekleme, hata takibi ve izleme: sorun kullanıcıdan önce fark edilmeli",
      ],
    },
    {
      h: "Abonelik modeli nasıl kurgulanmalı?",
      p: [
        "Fiyatlandırma ürünün bir parçasıdır, sonradan eklenecek bir detay değildir. Aylık/yıllık plan, kullanıcı başına ya da kullanım bazlı ücret, ücretsiz deneme veya kısıtlı ücretsiz plan gibi seçenekler, ürünün kime ve nasıl değer ürettiğine göre belirlenir.",
        "Teknik tarafta bunlar Stripe gibi ödeme altyapılarıyla kurulur. Önemli olan, planlar arası geçişin, deneme süresi bitişinin ve başarısız ödemelerin kullanıcıyı kaybetmeden yönetilmesidir.",
      ],
    },
    {
      h: "Yayından sonra hangi metriklere bakılır?",
      p: [
        "SaaS'ın sağlığını ziyaretçi sayısı değil, kullanıcıların kalıp kalmadığı gösterir. İlk günden takip edilmesi gerekenler:",
      ],
      ul: [
        "Aktivasyon: yeni kullanıcıların ne kadarı ürünün temel değerine ulaşıyor?",
        "Elde tutma: kullanıcılar haftalar ve aylar sonra hâlâ kullanıyor mu?",
        "Abonelik iptali (churn): kimler, hangi noktada ve neden ayrılıyor?",
        "Deneme süresinden ücretliye geçiş oranı",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Kendi SaaS ürünlerimizi geliştiriyor ve yayında tutuyoruz; kimlik doğrulama, çok kiracılı veri yapısı, arka plan işleri ve yapay zekâ entegrasyonu gibi konuları üretimde yaşayarak öğrendik. Sizinle de aynı şekilde çalışıyoruz: önce doğru kapsam, sonra hızlı ve sağlam bir ilk sürüm, ardından veriyle büyüme.",
      ],
    },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "MVP nedir?", href: "/blog/mvp-nedir" },
    { label: "Dijital ürün geliştirme rehberi", href: "/blog/dijital-urun-gelistirme" },
    { label: "Yapay zekâ çözümleri", href: "/yapay-zeka" },
    { label: "Web tasarım", href: "/web-tasarim" },
  ],
};

export const saasEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "SaaS & MVP Development — From Idea to Product",
    description:
      "SaaS product and MVP development studio. Subscription web apps, user management, payments and scalable architecture — we turn your idea into a testable product fast.",
    keywords: [
      "SaaS development",
      "MVP development",
      "SaaS development agency",
      "startup MVP development",
      "web application development",
      "subscription software development",
      "Next.js SaaS",
    ],
  },
  eyebrow: "SaaS & MVP",
  h1: ["Turn your SaaS idea", "into a real product"],
  lead: "WoodstoneStudio is a digital technology studio that builds SaaS products from idea to launch. We start with an MVP containing the core features, then grow it with real user feedback. We build our own SaaS products too — product thinking is second nature to us.",
  ctaPrimary: "Free Assessment",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do"],
  scopeLead: "A SaaS product is more than an interface; it means subscriptions, users, payments and scale. We build all of it together.",
  scope: [
    { title: "MVP development", desc: "A first version with your idea's most critical features, ready to launch in weeks — to test the market early." },
    { title: "Subscription-based apps", desc: "Plan structure, free trials, subscription management and billing; payment integration with providers like Stripe." },
    { title: "Users, teams & permissions", desc: "Sign-up, login, team/organisation structure, roles and permissions — a solid base for multi-user products." },
    { title: "Dashboards & reporting", desc: "Panels where users run their work, data tables, charts and exports." },
    { title: "APIs & integrations", desc: "Integration with third-party services (payments, email, CRM, AI) and design of your own API." },
    { title: "Scalable architecture", desc: "Next.js, React and modern cloud infrastructure — a technical foundation that doesn't slow you down as you grow." },
  ],
  processTitle: ["How we", "work"],
  process: [
    { step: "01", title: "Assessment", desc: "We clarify the idea, target users and revenue model. Free." },
    { step: "02", title: "MVP scope", desc: "We define the core features of the first release and draw a roadmap." },
    { step: "03", title: "Development", desc: "Weekly deliveries, tested together with you at every step." },
    { step: "04", title: "Launch & growth", desc: "We go live and plan the next releases from real user data." },
  ],
  faqTitle: ["Frequently asked", "questions"],
  faq: [
    { q: "What is an MVP and why start with one?", a: "An MVP is a first version containing only the product's core features. Instead of building everything for months, you launch early and learn from real users — lowering both cost and risk." },
    { q: "How long does an MVP take?", a: "Typically 4–8 weeks depending on scope. We define the core features and a clear timeline at the assessment." },
    { q: "Which technologies do you use?", a: "Next.js and React on the web, Flutter on mobile; modern cloud services for database and auth; providers like Stripe for payments." },
    { q: "Do you set up payments and subscriptions?", a: "Yes. We integrate plan structure, free trials, subscription management and billing into the product." },
    { q: "I have no technical background — is that a problem?", a: "No. We build the product thinking together, make the technical decisions and explain them in plain language." },
    { q: "Do you continue after the MVP?", a: "Yes. After launch we keep developing new releases based on user data and help grow the product." },
  ],
  closingTitle: ["Let's talk about", "your SaaS idea"],
  closingLead: "Tell us your idea; in a free assessment we'll clarify the MVP scope, timeline and cost together.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "SaaS and MVP development",
  areaServed: "Worldwide",
  guideEyebrow: "SaaS & MVP guide",
  guide: [
    {
      h: "What is SaaS, and how is it different from traditional software?",
      p: [
        "SaaS (Software as a Service) is software people use through a browser or app on a subscription, without installing anything. Paying a small monthly fee to use accounting software online instead of installing it on your computer is a typical example.",
        "For a business, the difference is the revenue model: recurring income instead of one-off sales. It also means the product is never finished. Every month the user decides whether to keep paying, so in SaaS the real work starts after launch.",
      ],
    },
    {
      h: "Why start with an MVP?",
      p: [
        "Most SaaS ideas look flawless on paper; real users quickly reveal different needs. Spending months building every feature means spending budget on assumptions that may be wrong.",
        "An MVP is the first release that delivers the idea's most critical value. The goal is to launch a product with few features that work well, early, and let real usage data decide the next steps. We explain the reasoning in our post \"What is an MVP\".",
      ],
    },
    {
      h: "The technical foundation of a SaaS product",
      p: [
        "The interface is the visible part; what keeps a SaaS running is underneath. These need to be right from the first release:",
      ],
      ul: [
        "Authentication: sign-up, login, password reset and secure session handling",
        "Multi-tenant structure: each customer's data must be strictly separated from everyone else's",
        "Subscriptions and payments: plans, trials, renewals, cancellations and invoicing",
        "Roles and permissions: who in a team can see and change what",
        "Backups, error tracking and monitoring: problems should be caught before users notice them",
      ],
    },
    {
      h: "How should the subscription model work?",
      p: [
        "Pricing is part of the product, not a detail added later. Monthly or annual plans, per-seat or usage-based pricing, a free trial or a limited free tier: the right choice depends on who the product creates value for, and how.",
        "Technically this is built on payment providers such as Stripe. What matters is handling plan changes, trial expiry and failed payments without losing the customer.",
      ],
    },
    {
      h: "Which metrics matter after launch?",
      p: [
        "A SaaS product's health shows in whether users stay, not in visitor counts. Track these from day one:",
      ],
      ul: [
        "Activation: what share of new users reach the product's core value?",
        "Retention: are people still using it weeks and months later?",
        "Churn: who leaves, at what point, and why?",
        "Trial-to-paid conversion",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "We build and run our own SaaS products; authentication, multi-tenant data, background jobs and AI integration are things we have learned in production. We work with you the same way: the right scope first, then a fast and solid first release, then growth driven by data.",
      ],
    },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "What is an MVP?", href: "/en/blog/mvp-nedir" },
    { label: "Digital product development guide", href: "/en/blog/dijital-urun-gelistirme" },
    { label: "AI solutions", href: "/en/ai-solutions" },
    { label: "Web design", href: "/en/web-design" },
  ],
};

