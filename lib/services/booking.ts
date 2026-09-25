import type { ServiceContent } from "@/components/service-page";

/**
 * Salon paketi — kuaför, berber, güzellik salonu, spa, estetik ve
 * tırnak stüdyoları için "web sitesi" değil, sonuç odaklı paket:
 * online randevu + Google'da görünürlük + yorum toplama.
 */

const alternates = {
  tr: "/randevu-sistemi",
  en: "/en/online-booking",
} as const;

export const bookingTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Kuaför ve Güzellik Salonu için Online Randevu + Google Görünürlüğü",
    description:
      "Kuaför, berber, güzellik salonu ve spa'lar için online randevu sistemi, Google İşletme Profili optimizasyonu ve yorum toplama tek pakette. Telefonla randevu trafiğine son. Ücretsiz ön görüşme.",
    keywords: [
      "kuaför online randevu sistemi",
      "güzellik salonu randevu sistemi",
      "berber randevu sistemi",
      "online randevu sayfası",
      "Google İşletme Profili optimizasyonu",
      "Google Haritalar'da üst sıralar",
      "salon randevu programı",
    ],
  },
  eyebrow: "Salonlar için",
  h1: ["Online randevu +", "Google'da bulunma."],
  lead: "Kuaför, berber, güzellik salonu, spa ve tırnak stüdyoları için bir web sitesi değil, sonuç odaklı bir paket kuruyoruz: müşterileriniz sizi Google Haritalar'da bulur, tek dokunuşla 7/24 randevu alır, siz de gününüzü telefona cevap vermek yerine müşterinize ayırırsınız.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Pakette", "neler var?"],
  scopeLead: "Amaç güzel bir site değil; daha dolu bir randevu defteri. Paketteki her parça bu sonuca hizmet eder.",
  scope: [
    { title: "Online randevu sayfası", desc: "Hizmet, çalışan, gün ve saat seçilerek 7/24 randevu alınır. Size ve müşteriye otomatik onay gider; çakışan randevu oluşmaz." },
    { title: "Google İşletme Profili", desc: "Profilinizi eksiksiz kurar ya da düzeltiriz: kategori, hizmetler, fiyatlar, çalışma saatleri, fotoğraflar ve Google Haritalar'daki \"Randevu al\" bağlantısı." },
    { title: "Yorum toplama", desc: "Randevudan sonra memnun müşterilere Google yorumu bırakmaları için kısa bir bağlantı ve salonunuza QR kodlu bir kart. Yorum sayısı yerel sıralamanın en güçlü sinyallerinden biridir." },
    { title: "Mini tanıtım sayfası", desc: "Hizmetleriniz, fiyatlarınız, çalışanlarınız, fotoğraflarınız ve konumunuz; mobilde hızlı açılan, Google'da bulunabilen tek sayfalık bir vitrin." },
    { title: "Instagram ve WhatsApp bağlantısı", desc: "Instagram profilinize ve WhatsApp'a randevu bağlantısı eklenir; \"müsait misiniz?\" mesajları doğrudan randevuya döner." },
    { title: "Hatırlatma ve takip", desc: "Randevu öncesi e-posta hatırlatması gelmemeleri azaltır. SMS ya da WhatsApp hatırlatması isteğe bağlı olarak eklenebilir." },
  ],
  processTitle: ["Nasıl", "kuruyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "Hizmetlerinizi, çalışanlarınızı, çalışma saatlerinizi ve bugünkü randevu düzeninizi dinliyoruz. Ücretsiz." },
    { step: "02", title: "Kurulum", desc: "Randevu sayfasını, Google İşletme Profilinizi ve tanıtım sayfanızı hazırlıyoruz." },
    { step: "03", title: "Bağlantılar", desc: "Google Haritalar, Instagram ve WhatsApp'a randevu bağlantısını ekliyor; yorum kartınızı basıma hazırlıyoruz." },
    { step: "04", title: "Yayın ve takip", desc: "Birlikte test randevusu alıp yayına çıkıyoruz; ilk haftalarda görünürlüğü ve randevuları takip ediyoruz." },
  ],
  guideEyebrow: "Salonlar için rehber",
  guide: [
    {
      h: "Neden web sitesi değil de randevu + Google?",
      p: [
        "Bir kuaför ya da güzellik salonu için yeni müşterinin yolu çoğu zaman aynıdır: telefonda \"yakınımdaki kuaför\" ya da \"[semt] güzellik salonu\" diye aranır, Google Haritalar'daki ilk birkaç sonuca bakılır, yorumlar okunur ve randevu alınmaya çalışılır. Bu yolculukta çok sayfalı bir web sitesinin rolü küçüktür; belirleyici olan Google'da görünmek, iyi yorumlar ve randevuyu hemen alabilmektir.",
        "Bu yüzden salonlara ayrı bir web sitesi yerine, bu üç şeyi birlikte çözen bir paket öneriyoruz.",
      ],
    },
    {
      h: "Telefonla randevu size ne kaybettiriyor?",
      p: ["Telefon ve mesajla yürüyen randevu düzeninin görünmeyen maliyetleri vardır:"],
      ul: [
        "Müşterinin elindeyken çalan telefon: ya işi bölersiniz ya da aramayı kaçırırsınız.",
        "Mesai dışı talepler: akşam ya da gece randevu almak isteyen müşteri, cevap bekleyemez ve başka salona yazar.",
        "\"Müsait misiniz?\" yazışmaları: tek bir randevu için birkaç mesaj gidip gelir.",
        "Gelmeyen randevular: hatırlatma olmadığında boş kalan koltuk doğrudan kayıptır.",
      ],
    },
    {
      h: "Google Haritalar'da üst sıralara çıkmak",
      p: [
        "Yerel aramalarda sıralamayı büyük ölçüde üç şey belirler: işletmenin aramayla ilgisi (doğru kategori ve hizmetler), aramayı yapan kişiye uzaklığı ve işletmenin öne çıkma düzeyi (yorum sayısı ve puanı, fotoğraflar, profilin güncelliği). Uzaklığı değiştiremezsiniz; ama diğer ikisini önemli ölçüde iyileştirebilirsiniz.",
        "Paket kapsamında Google İşletme Profilinizi eksiksiz hâle getiriyor, hizmet ve fiyatlarınızı ekliyor, fotoğraflarınızı düzenliyor ve düzenli yorum akışı için sistem kuruyoruz. Sonuç garanti edilemez, çünkü sıralamayı Google belirler; ama doğru kurulmuş ve yorum alan bir profil, eksik bir profile göre belirgin şekilde daha çok görünür.",
      ],
    },
    {
      h: "Yorumlar: en güçlü yerel sinyal",
      p: [
        "Müşterilerin büyük kısmı bir salonu seçmeden önce yorumlara bakar. Memnun müşteriler çoğu zaman yorum bırakmayı unutur; sorun istememekte değil, kolaylaştırmamaktadır. Randevu sonrası gönderilen kısa bir bağlantı ve kasadaki QR kodlu kart, yorum sayısını düzenli olarak artırmanın en basit yoludur.",
        "Sahte ya da satın alınmış yorumlarla çalışmıyoruz; hem Google'ın kurallarına aykırıdır hem de profilin cezalandırılmasına yol açabilir.",
      ],
    },
    {
      h: "Kimler için uygun?",
      p: ["Randevuyla çalışan ve müşterisini yakın çevresinden kazanan her işletme için uygundur:"],
      ul: [
        "Kadın ve erkek kuaförleri, berberler",
        "Güzellik salonları, cilt bakım ve estetik merkezleri",
        "Tırnak, kirpik ve kaş stüdyoları",
        "Spa, masaj ve wellness merkezleri",
        "Randevuyla çalışan diğer hizmet işletmeleri (diyetisyen, fizyoterapist, dövme stüdyosu vb.)",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Randevu sistemini, Google profilini ve sayfanızı ayrı ayrı firmalarla değil, tek elden kuruyoruz. Web, SEO ve yazılımı birlikte yaptığımız için randevu akışını işletmenize göre uyarlayabiliyor, ihtiyaç büyüdükçe genişletebiliyoruz. Lumen konsept çalışmamızda, randevu formu olan bir klinik sayfasının bizde nasıl göründüğünü inceleyebilirsiniz.",
        "Ücretsiz ön görüşmede salonunuzun bugünkü Google görünürlüğüne birlikte bakıyor, paketi ve maliyeti yazılı olarak netleştiriyoruz.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular."],
  faq: [
    { q: "Ayrıca bir web sitesine ihtiyacım var mı?", a: "Çoğu salon için hayır. Paketteki tek sayfalık tanıtım ve randevu sayfası, Google profilinizle birlikte yeterlidir. Daha kapsamlı bir site isterseniz ayrıca hazırlayabiliriz." },
    { q: "Müşterilerim randevuyu nasıl alacak?", a: "Google Haritalar'daki \"Randevu al\" bağlantısından, Instagram profilinizden, WhatsApp'tan ya da doğrudan randevu sayfanızdan; hizmet, çalışan, gün ve saat seçerek birkaç dokunuşta." },
    { q: "Randevuları nereden takip edeceğim?", a: "Randevular size anlık bildirimle gelir ve telefonunuzdan görüntüleyip yönetebileceğiniz bir takvimde toplanır. Mevcut takviminizle (ör. Google Takvim) eşitlenebilir." },
    { q: "Birden fazla çalışanım var, her birinin takvimi ayrı olabilir mi?", a: "Evet. Her çalışanın hizmetleri, çalışma saatleri ve izin günleri ayrı tanımlanabilir; müşteri isterse çalışanı seçerek randevu alır." },
    { q: "Google'da ilk sıraya çıkmayı garanti ediyor musunuz?", a: "Hayır, kimse edemez; sıralamayı Google belirler. Profilinizi eksiksiz kurmayı, yorum akışını başlatmayı ve görünürlüğünüzü şeffaf şekilde takip etmeyi garanti ediyoruz." },
    { q: "Kurulum ne kadar sürer?", a: "Hizmet listeniz ve fotoğraflarınız hazırsa genellikle 1–2 hafta içinde yayındasınız. Google profil doğrulaması gerekiyorsa bu süre Google'ın doğrulama süresine bağlıdır." },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "SEO hizmeti", href: "/seo" },
    { label: "Sosyal medya yönetimi", href: "/sosyal-medya" },
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "Çalışmalarımız", href: "/calismalar" },
  ],
  closingTitle: ["Randevu defterinizi", "doldurmaya başlayalım."],
  closingLead: "Salonunuzun adını ve bulunduğu semti yazın; ücretsiz ön görüşmede Google'daki bugünkü durumunuza birlikte bakalım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Salonlar için online randevu sistemi ve Google İşletme Profili optimizasyonu",
  areaServed: "Türkiye",
};

export const bookingEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Online Booking + Google Visibility for Salons, Barbers & Spas",
    description:
      "Online booking, Google Business Profile optimisation and review collection in one package for hair salons, barbers, beauty salons and spas. Stop taking bookings by phone. Free consultation.",
    keywords: [
      "salon online booking system",
      "hair salon booking page",
      "barber booking system",
      "beauty salon appointment booking",
      "Google Business Profile optimisation",
      "rank on Google Maps",
      "salon review collection",
    ],
  },
  eyebrow: "For salons",
  h1: ["Online booking +", "getting found on Google."],
  lead: "For hair salons, barbers, beauty salons, spas and nail studios we don't build \"a website\" — we set up a results-focused package: customers find you on Google Maps, book 24/7 in one tap, and you spend your day with clients instead of answering the phone.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What's in", "the package?"],
  scopeLead: "The goal isn't a pretty site; it's a fuller appointment book. Every part of the package serves that outcome.",
  scope: [
    { title: "Online booking page", desc: "Clients pick a service, staff member, day and time and book 24/7. Automatic confirmation goes to you and the client; no double bookings." },
    { title: "Google Business Profile", desc: "We set up or fix your profile: category, services, prices, opening hours, photos and the \"Book\" link on Google Maps." },
    { title: "Review collection", desc: "A short link sent to happy clients after their visit, plus a QR-code card for your front desk. Review count is one of the strongest local ranking signals." },
    { title: "Mini showcase page", desc: "Your services, prices, team, photos and location on a single fast, mobile-first page that can be found on Google." },
    { title: "Instagram & WhatsApp links", desc: "A booking link on your Instagram profile and in WhatsApp, so \"are you free?\" messages turn straight into bookings." },
    { title: "Reminders & follow-up", desc: "Email reminders before each appointment reduce no-shows. SMS or WhatsApp reminders can be added as an option." },
  ],
  processTitle: ["How we", "set it up."],
  process: [
    { step: "01", title: "Consultation", desc: "We learn your services, team, opening hours and how you take bookings today. Free." },
    { step: "02", title: "Setup", desc: "We build your booking page, Google Business Profile and showcase page." },
    { step: "03", title: "Connections", desc: "We add the booking link to Google Maps, Instagram and WhatsApp, and prepare your review card for print." },
    { step: "04", title: "Launch & follow-up", desc: "We make a test booking together, go live and track visibility and bookings over the first weeks." },
  ],
  guideEyebrow: "Guide for salons",
  guide: [
    {
      h: "Why booking + Google instead of a website?",
      p: [
        "For a salon, the path of a new client is almost always the same: they search \"hair salon near me\" or \"[neighbourhood] beauty salon\" on their phone, look at the first few results on Google Maps, read the reviews and try to book. A multi-page website plays a small role in that journey; what decides it is being visible on Google, having good reviews and being able to book right away.",
        "That's why, instead of a separate website, we offer salons a package that solves these three things together.",
      ],
    },
    {
      h: "What taking bookings by phone costs you",
      p: ["A booking routine run by phone and messages has hidden costs:"],
      ul: [
        "The phone rings while you're with a client: you either interrupt the work or miss the call.",
        "After-hours requests: a client who wants to book in the evening won't wait for a reply and messages another salon.",
        "\"Are you free?\" threads: several messages back and forth for a single booking.",
        "No-shows: without reminders, an empty chair is lost revenue.",
      ],
    },
    {
      h: "Ranking higher on Google Maps",
      p: [
        "Local rankings are largely decided by three things: relevance (the right category and services), distance from the person searching, and prominence (number and rating of reviews, photos, how up to date the profile is). You can't change distance, but you can improve the other two significantly.",
        "In the package we complete your Google Business Profile, add your services and prices, organise your photos and set up a steady flow of reviews. Results can't be guaranteed because Google decides rankings, but a well-built profile that keeps getting reviews is noticeably more visible than an incomplete one.",
      ],
    },
    {
      h: "Reviews: the strongest local signal",
      p: [
        "Most clients check reviews before choosing a salon. Happy clients often forget to leave one; the problem isn't asking, it's not making it easy. A short link sent after the visit and a QR-code card at the front desk are the simplest ways to grow your review count steadily.",
        "We don't work with fake or bought reviews; they break Google's rules and can get your profile penalised.",
      ],
    },
    {
      h: "Who is it for?",
      p: ["It fits any appointment-based business that wins clients from its local area:"],
      ul: [
        "Hair salons and barbers",
        "Beauty salons, skincare and aesthetic clinics",
        "Nail, lash and brow studios",
        "Spas, massage and wellness centres",
        "Other appointment-based businesses (dietitians, physiotherapists, tattoo studios and more)",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "We set up the booking system, the Google profile and your page in one place, not through separate vendors. Because we do web, SEO and software together, we can adapt the booking flow to your business and extend it as you grow. Our Lumen concept shows what a clinic page with an appointment form looks like when we build it.",
        "In a free consultation we look at your salon's current Google visibility together and put the package and cost in writing.",
      ],
    },
  ],
  faqTitle: ["Frequently asked", "questions."],
  faq: [
    { q: "Do I also need a website?", a: "For most salons, no. The one-page showcase and booking page in the package, together with your Google profile, is enough. If you want a fuller site, we can build one separately." },
    { q: "How will clients book?", a: "From the \"Book\" link on Google Maps, your Instagram profile, WhatsApp or directly on your booking page — picking a service, staff member, day and time in a few taps." },
    { q: "Where do I manage bookings?", a: "Bookings reach you as instant notifications and collect in a calendar you can view and manage from your phone. It can sync with your existing calendar (e.g. Google Calendar)." },
    { q: "I have several staff; can each have their own calendar?", a: "Yes. Each staff member's services, working hours and days off can be set separately, and clients can choose who they book with." },
    { q: "Do you guarantee first place on Google?", a: "No, and nobody can; Google decides rankings. We guarantee a complete profile setup, a working review flow and transparent tracking of your visibility." },
    { q: "How long does setup take?", a: "If your service list and photos are ready, you're usually live within 1–2 weeks. If the Google profile needs verification, that part depends on Google's verification time." },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "SEO services", href: "/en/seo" },
    { label: "Social media management", href: "/en/social-media" },
    { label: "Web design", href: "/en/web-design" },
    { label: "Our work", href: "/en/work" },
  ],
  closingTitle: ["Let's start filling", "your appointment book."],
  closingLead: "Tell us your salon's name and area; in a free consultation we'll look at where you stand on Google today.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "Online booking system and Google Business Profile optimisation for salons",
  areaServed: "Worldwide",
};
