import type { ServiceContent } from "@/components/service-page";

/**
 * Sektör sayfası: otel, pansiyon, guesthouse, apart ve villa kiralama.
 * Öncelikli pazar Arnavutluk (Tiran, Durrës, Vlorë, Sarandë) — EN ana dil;
 * TR sürümü Türkiye'deki butik otel / pansiyonlar için.
 * Ana mesaj: Booking.com komisyonu yerine doğrudan rezervasyon.
 */

const alternates = {
  tr: "/otel-pansiyon-web-sitesi",
  en: "/en/hotel-website-design",
} as const;

export const hotelTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Otel ve Pansiyon Web Sitesi — Komisyonsuz Doğrudan Rezervasyon",
    description:
      "Butik otel, pansiyon, apart ve villa kiralama için web sitesi: doğrudan rezervasyon motoru, Google'da bulunma, çok dilli sayfalar, WhatsApp ile hızlı iletişim. Booking komisyonundan kurtulun. Ücretsiz ön görüşme.",
    keywords: [
      "otel web sitesi",
      "pansiyon web sitesi",
      "butik otel web tasarım",
      "otel rezervasyon sistemi",
      "doğrudan rezervasyon",
      "villa kiralama web sitesi",
      "apart otel web sitesi",
    ],
  },
  eyebrow: "Oteller ve pansiyonlar için",
  h1: ["Misafiriniz sizi bulsun,", "komisyonu siz kazanın"],
  lead: "Booking.com ve Airbnb her rezervasyondan %15–18 alır ve misafir sizin değil onların müşterisi olur. Butik otel, pansiyon, apart ve villalar için doğrudan rezervasyon alan, Google'da bulunan, misafirin kendi dilinde okuduğu siteler yapıyoruz; platformlar vitrin olarak kalır, rezervasyon size gelir.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Sitenizi Analiz Edin",
  ctaSecondaryHref: "/site-analizi",
  scopeTitle: ["Otel sitesinde", "neler olmalı?"],
  scopeLead: "Bir otel sitesinin tek görevi vardır: misafir siteye geldiğinde platforma dönmeden rezervasyonu burada yapsın",
  scope: [
    { title: "Doğrudan rezervasyon", desc: "Tarih ve oda seçilir, müsaitlik görünür, ödeme ya da ön ödeme alınır; onay misafire ve size anında gider. Mevcut kanal yöneticinizle (channel manager) eşitlenir, çifte rezervasyon olmaz" },
    { title: "\"Doğrudan rezervasyon avantajı\"", desc: "Sitede rezervasyon yapana küçük bir fark: ücretsiz kahvaltı, geç çıkış, %5 indirim. Misafir platformdan değil sizden almayı seçer; komisyonun bir kısmı ona, kalanı size kalır" },
    { title: "Google'da bulunma", desc: "\"Tiran butik otel\", \"Sarandë guesthouse\" gibi aramalarda çıkmak için teknik SEO, Google İşletme Profili ve Google'ın otel listeleme kutusuna ücretsiz rezervasyon bağlantısı" },
    { title: "Çok dilli sayfalar", desc: "Misafirlerinizin geldiği ülkelere göre İngilizce, İtalyanca, Almanca, Arnavutça, Türkçe… Her dil ayrı sayfa; otomatik çeviri yok" },
    { title: "Fotoğraf ve konum", desc: "Odalar, manzara, kahvaltı, çevre: büyük ama hızlı yüklenen görseller. Harita, ulaşım ve yakındaki yerler; misafir gelmeden önce kendini orada görsün" },
    { title: "WhatsApp ve yorumlar", desc: "Tek dokunuşla WhatsApp; Google ve Booking yorumlarının sitede görünmesi; konaklama sonrası yorum isteme akışı" },
  ],
  processTitle: ["Nasıl", "ilerliyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "Tesisinizi, oda tiplerinizi, sezonunuzu ve bugün rezervasyonların hangi kanaldan geldiğini dinliyoruz. Ücretsiz" },
    { step: "02", title: "Yapı ve diller", desc: "Sayfa yapısını, dilleri ve rezervasyon akışını (kendi motorumuz ya da mevcut sisteminize bağlantı) netleştiriyoruz" },
    { step: "03", title: "Tasarım ve geliştirme", desc: "Tesisinizin havasına uygun, fotoğrafı öne çıkaran sade bir tasarım; hızlı ve mobil öncelikli kodlama" },
    { step: "04", title: "Yayın ve takip", desc: "Alan adı, barındırma, Google kayıtları ve otel listesine rezervasyon bağlantısı. İlk sezonda doğrudan rezervasyon oranını birlikte izliyoruz" },
  ],
  guideEyebrow: "Oteller için rehber",
  guide: [
    {
      h: "Platform komisyonu gerçekte ne kadar?",
      p: [
        "Booking.com'un standart komisyonu %15 civarındadır; görünürlük programlarıyla %18–20'ye çıkar. Gecelik 60 € alan 8 odalı bir pansiyon, %60 dolulukla yılda yaklaşık 105.000 € ciro yapar; bunun platformdan gelen kısmı için ödenen komisyon 12–18.000 € arasındadır. Bu rezervasyonların yalnızca dörtte biri doğrudan siteye kaydırılsa, site kendini ilk sezonda amorti eder.",
        "Platformlardan çıkmak gerekmez; onlar yeni misafiri getirir. Amaç, sizi bir kez bulan ya da tekrar gelen misafirin sizden almasıdır.",
      ],
    },
    {
      h: "Misafir neden sitede rezervasyon yapsın?",
      p: ["Misafir Booking'i güvenli ve kolay bulduğu için kullanır. Sitenin bunu geçmesi gerekir:"],
      ul: [
        "Rezervasyon en fazla üç adımda bitmeli; üye olma zorunluluğu olmamalı",
        "Fiyat platformdakinden yüksek olmamalı; küçük bir doğrudan rezervasyon avantajı olmalı",
        "İptal koşulları ve ödeme güvenliği açıkça yazmalı",
        "Sorusu olan misafir WhatsApp'tan bir dokunuşla ulaşabilmeli",
      ],
    },
    {
      h: "Google'da otel araması nasıl çalışır?",
      p: [
        "\"[şehir] otel\" aramalarında Google kendi otel kutusunu gösterir: harita, fiyatlar ve rezervasyon bağlantıları. Bu kutuya tesisin resmi sitesi ücretsiz olarak eklenebilir (Google Hotel Center); böylece misafir Google'da fiyatları karşılaştırırken \"resmi site\" seçeneğini komisyonsuz görür. Bunun için doğru kurulmuş bir Google İşletme Profili ve site üzerinde çalışan bir rezervasyon akışı gerekir.",
        "Kutunun altında ise klasik arama sonuçları vardır; \"Sarandë deniz manzaralı pansiyon\" gibi uzun aramalarda iyi yazılmış oda ve konum sayfaları burada çıkar.",
      ],
    },
    {
      h: "Çok dilli site: hangi diller?",
      p: [
        "Dil listesini misafirlerinizin geldiği ülkeler belirler; Arnavutluk kıyısı için genellikle İngilizce, İtalyanca, Almanca ve Arnavutça; Türkiye'de butik oteller için Türkçe, İngilizce ve pazara göre Rusça ya da Almanca. Her dilin kendi sayfası olur; Google her dili ayrı indeksler. Tarayıcı eklentisiyle otomatik çeviri, hem güven kaybettirir hem Google'da çıkmaz.",
      ],
    },
    {
      h: "Fotoğraf: en çok satan şey",
      p: [
        "Otel sitesinde metin değil fotoğraf satar. Telefonla çekilmiş loş oda fotoğrafı sitenin geri kalanını değersizleştirir. Profesyonel çekim mümkün değilse, gündüz doğal ışıkta, düzenli odada, geniş açıyla çekilmiş 15–20 fotoğraf yeterlidir. Biz görselleri hızlı yüklenecek şekilde işler, mobilde de büyük ve net gösteririz.",
      ],
    },
    {
      h: "Mevcut siteniz varsa",
      p: [
        "Ücretsiz site analizi aracımızla hız, mobil uyum ve temel SEO durumunu 20 saniyede görebilirsiniz. Yenilemede eski adresleri yeni sayfalara yönlendirerek Google'daki mevcut konumunuzu koruruz; rezervasyon motorunuz varsa ona bağlanırız.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "Booking.com'dan çıkmam mı gerekiyor?", a: "Hayır. Platformlar yeni misafir kaynağı olarak kalır; site, sizi bulan ya da tekrar gelen misafirin komisyonsuz rezervasyon yapmasını sağlar. İkisi birlikte çalışır." },
    { q: "Rezervasyon sistemi kanal yöneticimle çalışır mı?", a: "Evet. Mevcut kanal yöneticiniz (ör. Beds24, SiteMinder, Cloudbeds) varsa siteyi ona bağlarız; müsaitlik tek yerden yönetilir, çifte rezervasyon olmaz. Yoksa küçük tesisler için basit bir müsaitlik takvimi kurarız." },
    { q: "Ödeme sitede mi alınacak?", a: "İsteğinize göre: tam ödeme, ön ödeme ya da sadece kart bilgisiyle garanti. Ödeme altyapısı (Stripe, iyzico vb.) ülkenize göre seçilir." },
    { q: "Kaç dil olmalı?", a: "Misafirlerinizin geldiği ilk 3–4 ülke yeterlidir. Her dil ayrı sayfa olarak kurulur; sonradan dil eklemek kolaydır." },
    { q: "Ne kadar sürer, ne kadar tutar?", a: "Tek dilli, 3–5 oda tipli bir pansiyon sitesi genellikle 2–3 haftada yayındadır. Fiyat oda tipi sayısı, dil sayısı ve rezervasyon entegrasyonuna göre yazılı teklif olarak verilir." },
    { q: "Arnavutluk'taki tesisler için de çalışıyor musunuz?", a: "Evet, Arnavutluk'ta bulunuyoruz; Tiran, Durrës, Vlorë ve Sarandë'deki tesislerle yüz yüze de görüşebiliriz." },
  ],
  relatedTitle: "İlgili hizmetler ve araçlar",
  related: [
    { label: "Ücretsiz site analizi", href: "/site-analizi" },
    { label: "SEO hizmeti", href: "/seo" },
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "Çalışmalarımız", href: "/calismalar" },
  ],
  closingTitle: ["Doğrudan rezervasyonu", "konuşalım"],
  closingLead: "Tesisinizin adını ve bulunduğu yeri yazın; ücretsiz ön görüşmede Google'daki durumunuza ve platform komisyonunuzun ne kadarının size kalabileceğine birlikte bakalım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Oteller ve pansiyonlar için web sitesi ve doğrudan rezervasyon sistemi",
  areaServed: "Arnavutluk ve Türkiye",
};

export const hotelEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Hotel & Guesthouse Website Design — Commission-Free Direct Bookings",
    description:
      "Websites for boutique hotels, guesthouses, apartments and villas in Albania and beyond: direct booking engine, Google visibility, multilingual pages, WhatsApp contact. Keep the commission you pay to Booking.com. Free consultation.",
    keywords: [
      "hotel website design",
      "guesthouse website",
      "boutique hotel website",
      "direct booking website",
      "hotel booking engine",
      "villa rental website",
      "hotel website Albania",
      "Tirana web design hotel",
    ],
  },
  eyebrow: "For hotels and guesthouses",
  h1: ["Let guests find you,", "and keep the commission"],
  lead: "Booking.com and Airbnb take 15–18% of every reservation, and the guest becomes their customer, not yours. For boutique hotels, guesthouses, apartments and villas we build websites that take direct bookings, show up on Google and speak the guest's language — the platforms stay as a shop window, the booking comes to you.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "Audit Your Site",
  ctaSecondaryHref: "/en/site-audit",
  scopeTitle: ["What a hotel", "website needs"],
  scopeLead: "A hotel website has one job: when a guest lands on it, they book here instead of going back to the platform",
  scope: [
    { title: "Direct booking", desc: "Guests pick dates and a room, see availability, pay or prepay; confirmation goes to both sides instantly. Syncs with your channel manager, so no double bookings" },
    { title: "\"Book direct\" advantage", desc: "A small perk for booking on the site: free breakfast, late checkout, 5% off. Guests choose you over the platform; part of the commission goes to them, the rest stays with you" },
    { title: "Google visibility", desc: "Technical SEO, Google Business Profile and a free official-site link in Google's hotel box, so you appear for \"boutique hotel Tirana\" or \"Sarandë guesthouse\"" },
    { title: "Multilingual pages", desc: "English, Italian, German, Albanian, Turkish… based on where your guests come from. Each language is its own page; no automatic translation" },
    { title: "Photos and location", desc: "Rooms, views, breakfast, surroundings: large images that still load fast. Map, how to get there, what's nearby — guests picture themselves there before arriving" },
    { title: "WhatsApp and reviews", desc: "One-tap WhatsApp; Google and Booking reviews shown on the site; a post-stay review request flow" },
  ],
  processTitle: ["How we", "work"],
  process: [
    { step: "01", title: "Consultation", desc: "We learn about your property, room types, season and which channels bookings come from today. Free" },
    { step: "02", title: "Structure and languages", desc: "We define the pages, languages and booking flow (our engine or a link to your existing system)" },
    { step: "03", title: "Design and build", desc: "A calm, photo-first design that fits your property; fast, mobile-first code" },
    { step: "04", title: "Launch and follow-up", desc: "Domain, hosting, Google listings and the booking link in the hotel box. In the first season we track your direct-booking share together" },
  ],
  guideEyebrow: "Guide for hotels",
  guide: [
    {
      h: "What does platform commission really cost?",
      p: [
        "Booking.com's standard commission is around 15%, rising to 18–20% with visibility programmes. An 8-room guesthouse charging €60 a night at 60% occupancy turns over roughly €105,000 a year; the commission on the platform share of that is €12–18,000. Shift just a quarter of those bookings to your own site and the website pays for itself in the first season.",
        "You don't need to leave the platforms — they bring new guests. The goal is that a guest who found you once, or is coming back, books with you.",
      ],
    },
    {
      h: "Why would a guest book on your site?",
      p: ["Guests use Booking because it feels safe and easy. Your site has to beat that:"],
      ul: [
        "Booking in three steps at most, no account required",
        "Never pricier than the platform, plus a small book-direct perk",
        "Clear cancellation terms and secure payment",
        "A guest with a question reaches you on WhatsApp in one tap",
      ],
    },
    {
      h: "How hotel search works on Google",
      p: [
        "For \"[city] hotel\" searches Google shows its own hotel box: map, prices and booking links. A property's official website can be added to that box for free (Google Hotel Center), so when guests compare prices on Google they see an \"official site\" option with no commission. That requires a properly set up Google Business Profile and a working booking flow on the site.",
        "Below the box are classic search results; well-written room and location pages appear there for long searches like \"sea view guesthouse Sarandë\".",
      ],
    },
    {
      h: "Multilingual site: which languages?",
      p: [
        "Your guests' home countries decide the list; for the Albanian coast usually English, Italian, German and Albanian; for boutique hotels in Türkiye, Turkish, English and Russian or German depending on the market. Each language gets its own pages, and Google indexes each one separately. Browser auto-translation both loses trust and never ranks.",
      ],
    },
    {
      h: "Photos: what actually sells",
      p: [
        "On a hotel website photos sell, not text. A dim phone photo of a room cheapens everything else on the page. If a professional shoot isn't possible, 15–20 wide shots in daylight of a tidy room are enough. We process the images to load fast and show them large and sharp on phones too.",
      ],
    },
    {
      h: "If you already have a site",
      p: [
        "Our free site audit shows speed, mobile-friendliness and basic SEO in 20 seconds. When rebuilding we redirect old URLs to the new pages to keep your Google position, and connect to your existing booking engine if you have one.",
      ],
    },
  ],
  faqTitle: ["Frequently asked", "questions"],
  faq: [
    { q: "Do I have to leave Booking.com?", a: "No. Platforms stay as a source of new guests; the website lets guests who found you or are returning book commission-free. The two work together." },
    { q: "Does the booking system work with my channel manager?", a: "Yes. If you use a channel manager (e.g. Beds24, SiteMinder, Cloudbeds) we connect the site to it, so availability is managed in one place with no double bookings. If not, we set up a simple availability calendar for small properties." },
    { q: "Are payments taken on the site?", a: "Your choice: full payment, deposit, or card guarantee only. The payment provider (Stripe and others) is chosen based on your country." },
    { q: "How many languages should we have?", a: "The top 3–4 countries your guests come from is enough. Each language is built as separate pages; adding one later is easy." },
    { q: "How long does it take and what does it cost?", a: "A single-language guesthouse site with 3–5 room types is usually live in 2–3 weeks. Pricing is a written quote based on room types, languages and booking integration." },
    { q: "Do you work with properties in Albania?", a: "Yes — we're based in Albania and can meet in person with properties in Tirana, Durrës, Vlorë and Sarandë." },
  ],
  relatedTitle: "Related services and tools",
  related: [
    { label: "Free site audit", href: "/en/site-audit" },
    { label: "SEO services", href: "/en/seo" },
    { label: "Web design", href: "/en/web-design" },
    { label: "Our work", href: "/en/work" },
  ],
  closingTitle: ["Let's talk about", "direct bookings"],
  closingLead: "Tell us your property's name and location; in a free consultation we'll look at your Google presence and how much of your platform commission could stay with you.",
  closingCta: "Contact Us",
  backLabel: "Home",
  serviceType: "Website and direct booking system for hotels and guesthouses",
  areaServed: "Albania and Türkiye",
};
