import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/e-ticaret",
  en: "/en/ecommerce",
} as const;

export const ecommerceTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "E-Ticaret Sitesi Kurulumu ve Online Mağaza",
    description:
      "E-ticaret sitesi ve online mağaza kurulumu: özel tasarım, hızlı altyapı, güvenli ödeme entegrasyonu, mobil uyumlu alışveriş ve SEO. Ücretsiz ön görüşme.",
    keywords: [
      "e-ticaret sitesi",
      "e-ticaret sitesi kurmak",
      "online mağaza kurulumu",
      "e-ticaret sitesi yaptırmak",
      "e-ticaret yazılımı",
      "ödeme entegrasyonu",
      "mobil uyumlu e-ticaret",
    ],
  },
  eyebrow: "E-Ticaret",
  h1: ["E-ticaret:", "hızlı, güvenli, satışa hazır."],
  lead: "Ürünlerinizi internetten satmak için hızlı açılan, mobilde rahat alışveriş sunan ve Google'da bulunabilen bir online mağaza kuruyoruz. Tasarımdan ödeme entegrasyonuna, kargo ve stok akışından yayına kadar tüm süreci üstleniyoruz.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Bir e-ticaret sitesi sadece ürün listesi değildir; güven veren, hızlı ve satın almayı kolaylaştıran bir deneyimdir.",
  scope: [
    { title: "Online mağaza kurulumu", desc: "Ürün sayfaları, kategoriler, arama ve filtreleme, sepet ve ödeme akışıyla eksiksiz bir mağaza." },
    { title: "Özel mağaza tasarımı", desc: "Markanıza özel, hazır temadan ayrışan ve ürünlerinizi öne çıkaran bir alışveriş arayüzü." },
    { title: "Ödeme entegrasyonu", desc: "iyzico, PayTR, Stripe gibi güvenli ödeme altyapılarıyla kredi kartı ve taksitli ödeme." },
    { title: "Kargo, stok ve sipariş", desc: "Sipariş yönetimi, stok takibi, kargo entegrasyonu ve müşteri bildirimleri." },
    { title: "E-ticaret SEO", desc: "Ürün ve kategori sayfaları için yapılandırılmış veri, hızlı yükleme ve arama motoru uyumlu yapı." },
    { title: "Mevcut mağazayı yenileme", desc: "Yavaş ya da mobilde zorlanan mağazanızı modern altyapıya taşıyoruz; ürün verileriniz korunur." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "Ürün yapınızı, satış kanallarınızı ve hedeflerinizi netleştiriyoruz. Ücretsiz." },
    { step: "02", title: "Altyapı ve tasarım", desc: "İhtiyacınıza uygun altyapıyı seçiyor, mağaza arayüzünü tasarlıyoruz." },
    { step: "03", title: "Geliştirme ve entegrasyon", desc: "Ödeme, kargo ve stok entegrasyonlarını kurup ürünleri yüklüyoruz." },
    { step: "04", title: "Yayın ve destek", desc: "Test siparişleriyle her şeyi doğruluyor, yayına alıyor ve destek vermeye devam ediyoruz." },
  ],
  guideEyebrow: "E-ticaret rehberi",
  guide: [
    {
      h: "E-ticaret sitesi kurmadan önce karar vermeniz gerekenler",
      p: ["Başarılı bir online mağaza, teknik kurulumdan önce birkaç net kararla başlar:"],
      ul: [
        "Ne satacaksınız ve kaç ürününüz var? Onlarca ürünle binlerce ürün farklı altyapı ister.",
        "Ürünlerinizin varyantları (beden, renk) ve stok takibi var mı?",
        "Hangi ödeme yöntemlerini sunacaksınız: kredi kartı, taksit, havale, kapıda ödeme?",
        "Kargoyu nasıl yöneteceksiniz ve hangi firmalarla çalışacaksınız?",
        "Yurt dışına satış yapacak mısınız? (Çok dil, çok para birimi, uluslararası kargo)",
      ],
    },
    {
      h: "Hazır platform mu, özel e-ticaret yazılımı mı?",
      p: [
        "Shopify gibi hazır platformlar hızlı başlangıç sağlar ancak aylık ücret, işlem komisyonu ve tasarım sınırları getirir. WooCommerce gibi açık kaynak çözümler esnektir ama bakım ve güvenlik güncellemesi ister. Özel geliştirilen bir mağaza ise tam kontrol ve en yüksek performansı sunar.",
        "Doğru seçim ürün sayınıza, bütçenize ve büyüme planınıza bağlıdır. Ön görüşmede bu seçenekleri artı ve eksileriyle birlikte değerlendiriyor, işinize uygun olanı öneriyoruz.",
      ],
    },
    {
      h: "Satış getiren bir mağazada neler olmalı?",
      p: ["Ziyaretçiyi müşteriye dönüştüren mağazaların ortak özellikleri:"],
      ul: [
        "Hızlı yüklenen ürün sayfaları ve kaliteli, optimize görseller.",
        "Net fiyat, stok ve kargo bilgisi; sürpriz maliyet olmaması.",
        "Birkaç adımda tamamlanan, üye olmadan da alışveriş yapılabilen ödeme akışı.",
        "Güven unsurları: SSL, güvenli ödeme logoları, iade ve iletişim bilgileri, müşteri yorumları.",
        "Mobilde rahat gezinme, arama ve filtreleme.",
      ],
    },
    {
      h: "Ödeme altyapısı ve güvenlik",
      p: [
        "Kart bilgileri sizin sunucunuzda tutulmaz; iyzico, PayTR veya Stripe gibi lisanslı ödeme kuruluşları üzerinden 3D Secure ile güvenli şekilde işlenir. Bu hem müşteriniz hem de sizin için yasal ve güvenlik açısından doğru yaklaşımdır.",
        "Türkiye'de satış yapan mağazalar için mesafeli satış sözleşmesi, KVKK aydınlatma metni, iade koşulları gibi yasal sayfaların eksiksiz olması gerekir. Bu sayfaların yapısını kuruyoruz; metinlerin hukuki kontrolünü bir uzmana yaptırmanızı öneriyoruz.",
      ],
    },
    {
      h: "E-ticaret SEO: ürünlerinizin Google'da bulunması",
      p: [
        "Reklam bütçesi bittiğinde durmayan tek trafik kaynağı organik aramadır. Kategori ve ürün sayfalarının doğru başlıklandırılması, ürün yapılandırılmış verisi (fiyat, stok, değerlendirme), hızlı yükleme, temiz URL'ler ve benzersiz ürün açıklamaları, mağazanızın Google'da ve Google Alışveriş sonuçlarında görünmesini sağlar.",
      ],
    },
    {
      h: "Yayından sonra: büyüme ve bakım",
      p: [
        "Mağaza yayına girdiğinde asıl iş başlar: kampanyalar, yeni ürünler, dönüşüm oranının iyileştirilmesi, performans ve güvenlik kontrolleri. Yayından sonra da mağazanızı geliştirmeye ve teknik destek vermeye devam ediyoruz.",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Web, mobil ve yazılımı tek çatı altında geliştiriyoruz; bu sayede mağazanızı ileride bir mobil uygulamaya ya da özel entegrasyonlara kolayca genişletebilirsiniz. Atelier Mona konsept çalışmamızda, çalışan sepetiyle bir moda mağazası deneyiminin bizde nasıl göründüğünü inceleyebilirsiniz.",
        "Ücretsiz ön görüşmede ihtiyacınızı dinliyor, altyapı önerisini ve maliyeti yazılı olarak netleştiriyoruz.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular."],
  faq: [
    { q: "E-ticaret sitesi kurmak ne kadar sürer?", a: "Ürün sayısına ve entegrasyonlara göre değişir; küçük ve orta ölçekli bir mağaza genellikle 3–6 hafta içinde yayına alınır. Ön görüşmede net bir takvim veriyoruz." },
    { q: "Hangi ödeme sistemlerini entegre ediyorsunuz?", a: "iyzico, PayTR ve Stripe başta olmak üzere lisanslı ödeme kuruluşlarıyla çalışıyoruz; kredi kartı, taksit ve 3D Secure desteklenir." },
    { q: "Ürünleri kendim ekleyip düzenleyebilir miyim?", a: "Evet. Mağazanızı ürün, stok, fiyat ve siparişleri kendiniz yönetebileceğiniz bir panel ile teslim ediyoruz." },
    { q: "Mevcut mağazamı taşıyabilir misiniz?", a: "Evet. Ürün verilerinizi ve mümkün olan her yerde URL yapınızı koruyarak mağazanızı yeni altyapıya taşıyoruz; arama sıralamalarınızı kaybetmemeniz için yönlendirmeleri kuruyoruz." },
    { q: "Yurt dışına satış yapabilir miyim?", a: "Evet. Çok dilli ve çok para birimli mağaza yapısı, uluslararası ödeme (Stripe) ve kargo seçenekleri kurulabilir." },
    { q: "Mobil uygulama da yapıyor musunuz?", a: "Evet. İsterseniz mağazanızın iOS ve Android uygulamasını da aynı altyapı üzerine geliştirebiliriz." },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "SEO hizmeti", href: "/seo" },
    { label: "Mobil uygulama", href: "/mobil-uygulama" },
    { label: "Web sitesi ne kadar tutar?", href: "/blog/web-sitesi-maliyeti" },
  ],
  closingTitle: ["Online mağazanız için", "konuşalım."],
  closingLead: "Ne sattığınızı ve nasıl satmak istediğinizi anlatın; ücretsiz ön görüşmede altyapıyı, süreyi ve maliyeti netleştirelim.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "E-ticaret sitesi ve online mağaza geliştirme",
  areaServed: "Türkiye ve yurt dışı",
};

export const ecommerceEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "E-commerce Website Development & Online Stores",
    description:
      "E-commerce website and online store development: custom design, fast foundation, secure payment integration, mobile-first shopping and SEO. Free consultation.",
    keywords: [
      "ecommerce website development",
      "online store development",
      "custom ecommerce design",
      "payment integration",
      "ecommerce SEO",
      "Shopify alternative",
      "mobile ecommerce",
    ],
  },
  eyebrow: "E-commerce",
  h1: ["E-commerce that is fast,", "secure and ready to sell."],
  lead: "We build online stores that load fast, are comfortable to shop on a phone and can be found on Google. From design and payment integration to shipping, stock and launch, we handle the whole process.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do."],
  scopeLead: "An online store is more than a product list; it's a fast, trustworthy experience that makes buying easy.",
  scope: [
    { title: "Online store setup", desc: "Product pages, categories, search and filtering, cart and checkout — a complete store." },
    { title: "Custom store design", desc: "A shopping interface built around your brand that stands apart from templates and puts your products first." },
    { title: "Payment integration", desc: "Card payments and instalments through secure providers such as Stripe, iyzico and PayTR." },
    { title: "Shipping, stock & orders", desc: "Order management, stock tracking, shipping integration and customer notifications." },
    { title: "E-commerce SEO", desc: "Structured data for products and categories, fast loading and a search-friendly structure." },
    { title: "Store rebuilds", desc: "We move slow or mobile-unfriendly stores onto a modern stack while keeping your product data." },
  ],
  processTitle: ["How we", "work."],
  process: [
    { step: "01", title: "Consultation", desc: "We clarify your product structure, sales channels and goals. Free." },
    { step: "02", title: "Platform & design", desc: "We pick the right foundation for your needs and design the storefront." },
    { step: "03", title: "Build & integrate", desc: "We set up payments, shipping and stock integrations and load your products." },
    { step: "04", title: "Launch & support", desc: "We verify everything with test orders, go live and keep supporting you." },
  ],
  guideEyebrow: "E-commerce guide",
  guide: [
    {
      h: "What to decide before building an online store",
      p: ["A successful store starts with a few clear decisions before any technical setup:"],
      ul: [
        "What will you sell and how many products? Dozens and thousands of products need different foundations.",
        "Do your products have variants (size, colour) and stock tracking?",
        "Which payment methods will you offer: cards, instalments, bank transfer, cash on delivery?",
        "How will you handle shipping and which carriers will you use?",
        "Will you sell internationally? (Multiple languages, currencies, international shipping)",
      ],
    },
    {
      h: "Hosted platform or custom e-commerce?",
      p: [
        "Hosted platforms like Shopify get you started quickly but bring monthly fees, transaction commissions and design limits. Open-source options like WooCommerce are flexible but need ongoing maintenance and security updates. A custom-built store gives full control and the best performance.",
        "The right choice depends on your product count, budget and growth plans. In the consultation we weigh these options with you and recommend the one that fits your business.",
      ],
    },
    {
      h: "What a store that sells needs",
      p: ["Stores that turn visitors into customers have these in common:"],
      ul: [
        "Fast product pages with high-quality, optimised images.",
        "Clear price, stock and shipping information — no surprise costs.",
        "A checkout completed in a few steps, with guest checkout available.",
        "Trust signals: SSL, secure payment badges, returns and contact information, customer reviews.",
        "Comfortable browsing, search and filtering on mobile.",
      ],
    },
    {
      h: "Payments and security",
      p: [
        "Card details are never stored on your server; they are processed securely with 3D Secure through licensed payment providers such as Stripe. That is the right approach for both your customers and you, legally and in terms of security.",
        "Every store needs complete legal pages — terms of sale, privacy policy, returns policy. We build the structure of these pages; we recommend having the texts reviewed by a legal professional in your market.",
      ],
    },
    {
      h: "E-commerce SEO: getting your products found on Google",
      p: [
        "Organic search is the one traffic source that doesn't stop when the ad budget runs out. Well-titled category and product pages, product structured data (price, availability, ratings), fast loading, clean URLs and unique product descriptions help your store appear on Google and in Google Shopping results.",
      ],
    },
    {
      h: "After launch: growth and maintenance",
      p: [
        "The real work starts when the store goes live: campaigns, new products, conversion-rate improvements, performance and security checks. We keep developing your store and providing technical support after launch.",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "We build web, mobile and custom software under one roof, so your store can later grow into a mobile app or custom integrations without starting over. Our Atelier Mona concept shows what a fashion store with a working cart looks like when we build it.",
        "In a free consultation we listen to your needs and put the recommended platform and cost in writing.",
      ],
    },
  ],
  faqTitle: ["Frequently asked", "questions."],
  faq: [
    { q: "How long does it take to build an online store?", a: "It depends on product count and integrations; a small to mid-sized store usually goes live within 3–6 weeks. We give you a clear timeline in the consultation." },
    { q: "Which payment providers do you integrate?", a: "We work with licensed providers, mainly Stripe, iyzico and PayTR; card payments, instalments and 3D Secure are supported." },
    { q: "Can I add and edit products myself?", a: "Yes. We deliver the store with a panel where you manage products, stock, prices and orders yourself." },
    { q: "Can you migrate my existing store?", a: "Yes. We move your store to the new foundation while keeping your product data and, wherever possible, your URL structure, with redirects in place so you don't lose rankings." },
    { q: "Can I sell internationally?", a: "Yes. We can set up a multilingual, multi-currency store with international payments (Stripe) and shipping options." },
    { q: "Do you also build mobile apps?", a: "Yes. If you want, we can build iOS and Android apps for your store on the same foundation." },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "Web design", href: "/en/web-design" },
    { label: "SEO services", href: "/en/seo" },
    { label: "Mobile apps", href: "/en/mobile-apps" },
    { label: "How much does a website cost?", href: "/en/blog/web-sitesi-maliyeti" },
  ],
  closingTitle: ["Let's talk about", "your online store."],
  closingLead: "Tell us what you sell and how you want to sell it; in a free consultation we'll clarify platform, timeline and cost.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "E-commerce website and online store development",
  areaServed: "Worldwide",
};
