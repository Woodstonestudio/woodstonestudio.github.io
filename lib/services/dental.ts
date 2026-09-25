import type { ServiceContent } from "@/components/service-page";

/**
 * Sektör sayfası: diş klinikleri.
 * Hedef aramalar: "diş kliniği web sitesi", "diş hekimi web tasarım", "diş kliniği seo".
 * Kliniklerin çoğunun sitesi var; sorun yavaşlık, tedavi sayfası eksikliği ve
 * randevunun telefona bağlı olması. Sayfa bunu çözen paketi anlatır.
 */

const alternates = {
  tr: "/dis-klinigi-web-sitesi",
  en: "/en/dental-clinic-website",
} as const;

export const dentalTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Diş Kliniği Web Sitesi Tasarımı — Hasta Kazandıran Klinik Siteleri",
    description:
      "Diş klinikleri ve diş hekimleri için web sitesi tasarımı: tedavi sayfaları, online randevu, Google'da bulunma, çok dilli sağlık turizmi altyapısı. Hızlı, mobil uyumlu, KVKK'ya uygun. Ücretsiz ön görüşme.",
    keywords: [
      "diş kliniği web sitesi",
      "diş hekimi web tasarım",
      "diş kliniği web tasarımı",
      "dental web sitesi",
      "diş kliniği seo",
      "diş kliniği online randevu",
      "sağlık turizmi web sitesi",
    ],
  },
  eyebrow: "Diş klinikleri için",
  h1: ["Kliniğinizin kalitesini", "dijitale taşıyın"],
  lead: "Hastanın yolu bellidir: Google'a \"izmir implant\" ya da \"[semt] diş kliniği\" yazar, ilk çıkan birkaç kliniğe bakar, yorumları okur ve en kolay randevu alabildiği yere gider. Diş klinikleri için tedavi sayfaları, online randevu ve Google görünürlüğü üzerine kurulu, hızlı ve mobilde kusursuz siteler yapıyoruz.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Sitenizi Analiz Edin",
  ctaSecondaryHref: "/site-analizi",
  scopeTitle: ["Klinik sitesinde", "neler olmalı?"],
  scopeLead: "Güzel bir vitrin değil; hastayı arayıştan randevuya taşıyan bir yol. Her parça bu yolun bir adımıdır.",
  scope: [
    { title: "Tedavi sayfaları", desc: "İmplant, zirkonyum, ortodonti, diş beyazlatma, kanal tedavisi… Her tedavi için ayrı, hastanın sorularını cevaplayan bir sayfa. Google'da \"izmir zirkonyum\" araması genel ana sayfayı değil, o tedavinin sayfasını bulur." },
    { title: "Online randevu", desc: "Hekim, gün ve saat seçilerek 7/24 randevu alınır; hastaya ve kliniğe otomatik onay gider. Telefon meşgulken ya da mesai dışında kaybedilen hasta kalmaz." },
    { title: "Google'da bulunma", desc: "Teknik SEO, Google İşletme Profili düzeni ve tedavi sayfalarının doğru başlıklandırılması. \"Yakınımdaki diş kliniği\" aramalarında görünmek için gereken altyapı." },
    { title: "Hekim ve klinik güveni", desc: "Hekim profilleri, klinik fotoğrafları, teknoloji ve hijyen anlatımı, Google yorumlarının sitede gösterimi. Hasta siteye güven için gelir." },
    { title: "Sağlık turizmi (çok dilli)", desc: "Yurt dışından hasta alan klinikler için İngilizce, Almanca, Arapça vb. dillerde ayrı sayfalar; fiyat aralığı, konaklama ve süreç bilgisi; WhatsApp ile hızlı iletişim." },
    { title: "KVKK ve hız", desc: "Onam ve aydınlatma metinleri, çerez yönetimi, hasta verisinin güvenli işlenmesi. 2 saniyenin altında açılan, mobilde önce düşünülmüş sayfalar." },
  ],
  processTitle: ["Nasıl", "ilerliyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "Kliniğinizi, öne çıkan tedavilerinizi ve hedef hastanızı (yerel / yurt dışı) dinliyoruz. Mevcut sitenizi ve Google görünürlüğünüzü birlikte inceliyoruz. Ücretsiz." },
    { step: "02", title: "Yapı ve içerik", desc: "Tedavi sayfalarının listesini ve site yapısını çıkarıyor, hekimlerinizle içerikleri netleştiriyoruz. Sağlık mevzuatına uygun, abartısız bir dil kullanıyoruz." },
    { step: "03", title: "Tasarım ve geliştirme", desc: "Kliniğinize özel, sade ve güven veren bir tasarım; modern altyapıyla (Next.js) hızlı ve güvenli kodlama. Randevu ve WhatsApp entegrasyonu." },
    { step: "04", title: "Yayın ve takip", desc: "Alan adı, barındırma, Google Search Console ve İşletme Profili bağlantısı. Yayından sonra ilk aylarda hangi tedavi sayfalarının hasta getirdiğini birlikte izliyoruz." },
  ],
  guideEyebrow: "Klinikler için rehber",
  guide: [
    {
      h: "Neden her tedavi için ayrı sayfa?",
      p: [
        "Hastalar \"diş kliniği\" diye değil, derdiyle arar: \"implant fiyatları\", \"zirkonyum kaplama\", \"şeffaf plak\", \"diş beyazlatma\". Tek sayfalık bir klinik sitesi bu aramaların hiçbirinde güçlü değildir. Her tedavi için tedaviyi, süreci, süreyi, kimlere uygun olduğunu ve sık sorulanları anlatan bir sayfa, hem Google'da o aramada çıkar hem de hastanın kafasındaki soruları randevudan önce cevaplar.",
        "Bu yüzden klinik sitelerinde en çok zamanı tedavi sayfalarına ayırıyoruz; tasarım bunun etrafında kurulur.",
      ],
    },
    {
      h: "Yerel arama: \"yakınımdaki diş kliniği\"",
      p: [
        "Yerel aramaların büyük kısmı telefondan yapılır ve Google Haritalar'daki ilk üç sonuç aramaların çoğunu alır. Burada belirleyici olanlar: doğru kategori ve hizmet listesiyle kurulmuş bir Google İşletme Profili, yorum sayısı ve puanı, sitenin profille tutarlı olması (aynı ad, adres, telefon) ve sitenin hızlı, mobil uyumlu olması.",
        "Siteyi bu profille birlikte düşünüyoruz: adres ve çalışma saatleri yapılandırılmış veriyle işaretlenir, tedavi sayfaları profildeki hizmetlerle eşleşir, randevu bağlantısı Haritalar'a eklenir.",
      ],
    },
    {
      h: "Sağlık turizmi için çok dilli site",
      p: [
        "Yurt dışından gelen hasta, kliniği seçmeden önce çok daha fazla araştırır: fiyat aralığı, süreç, kaç gün kalacağı, konaklama, önce/sonra örnekleri, hekimlerin deneyimi. Bu hastanın kendi dilinde, bu soruların hepsini cevaplayan sayfalar görmesi gerekir. Türkçe siteyi otomatik çeviriye vermek güven kaybettirir.",
        "Sağlık turizmi yapan klinikler için dil başına ayrı sayfa yapısı, WhatsApp ile ilk temas, tedavi planı isteme formu ve gerekiyorsa çevrimiçi ön konsültasyon akışı kuruyoruz.",
      ],
    },
    {
      h: "Hız ve mobil: hastanın sabrı kısa",
      p: ["Klinik sitelerinde en sık gördüğümüz sorunlar:"],
      ul: [
        "Büyük, sıkıştırılmamış fotoğraflar yüzünden 5–8 saniyede açılan sayfalar; hasta beklemeden rakibe geçer.",
        "Masaüstünde güzel, telefonda bozuk ya da küçük görünen sayfalar — oysa ziyaretçilerin çoğu telefondan gelir.",
        "Telefon numarasının tıklanamaması, randevu için form yerine \"bizi arayın\" yazması.",
        "Tedavi sayfası olmayan, her şeyi ana sayfaya sığdıran yapı.",
      ],
    },
    {
      h: "KVKK, onam ve sağlık reklam kuralları",
      p: [
        "Hasta bilgisi alan her form KVKK aydınlatma metniyle ve açık rızayla çalışmalıdır; önce/sonra fotoğrafları için hastadan yazılı izin gerekir. Sağlık alanında reklam ve tanıtımın da sınırları vardır: karşılaştırmalı, garanti veren ya da yönlendirici ifadelerden kaçınıyor, bilgilendirici bir dil kullanıyoruz. Hukuki metinlerin son hâlini kliniğinizin danışmanıyla teyit etmenizi öneriyoruz.",
      ],
    },
    {
      h: "Mevcut sitenizi yenilemek",
      p: [
        "Siteniz varsa sıfırdan başlamanız gerekmez. Ücretsiz site analizi aracımızla hız, mobil uyum ve temel SEO durumunu 20 saniyede görebilir; ön görüşmede hangi tedavi sayfalarının eksik olduğuna birlikte bakabiliriz. Yenilemede mevcut Google sıralamalarınızı korumak için eski adresleri yeni sayfalara yönlendiriyoruz.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "Diş kliniği web sitesi ne kadar sürer?", a: "Tedavi sayfası sayısına göre değişir: 6–8 tedavi sayfalı tek dilli bir klinik sitesi genellikle 3–4 haftada yayındadır. Çok dilli sağlık turizmi siteleri içerik hazırlığına bağlı olarak 5–8 hafta sürer." },
    { q: "Fiyat nasıl belirleniyor?", a: "Tedavi sayfası sayısı, dil sayısı, online randevu ve özel işlevlere (tedavi planı formu, hekim takvimi) göre yazılı teklif hazırlıyoruz. Gizli maliyet yoktur." },
    { q: "Online randevu hangi sistemle çalışır?", a: "Kliniğin kullandığı yazılıma göre değişir: mevcut randevu programınıza bağlanabilir ya da hekim, gün ve saat seçimli kendi randevu sayfanızı kurarız. Randevular size bildirim ve takvim olarak gelir." },
    { q: "Google'da ilk sayfaya çıkmayı garanti ediyor musunuz?", a: "Hayır; sıralamayı Google belirler ve kimse garanti veremez. Doğru kurulmuş tedavi sayfaları, hızlı bir site ve eksiksiz bir Google İşletme Profiliyle görünürlüğün belirgin şekilde artmasını hedefliyor, sonucu şeffaf olarak birlikte izliyoruz." },
    { q: "Önce/sonra fotoğrafları koyabilir miyiz?", a: "Hastadan yazılı izin alınmış olması şartıyla evet. İzin metnini ve galerinin KVKK'ya uygun yapısını birlikte hazırlıyoruz." },
    { q: "Yurt dışı hastalar için hangi diller?", a: "En sık İngilizce, Almanca ve Arapça. Hedef ülkelerinize göre dil listesini birlikte belirliyor, her dili ayrı sayfa yapısıyla kuruyoruz; otomatik çeviri kullanmıyoruz." },
  ],
  relatedTitle: "İlgili hizmetler ve araçlar",
  related: [
    { label: "Ücretsiz site analizi", href: "/site-analizi" },
    { label: "SEO hizmeti", href: "/seo" },
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "Çalışmalarımız", href: "/calismalar" },
  ],
  closingTitle: ["Kliniğinizin sitesini", "konuşalım"],
  closingLead: "Kliniğinizin adını ve öne çıkan tedavilerinizi yazın; ücretsiz ön görüşmede mevcut sitenize ve Google'daki durumunuza birlikte bakalım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Diş klinikleri için web sitesi tasarımı, online randevu ve SEO",
  areaServed: "Türkiye ve yurt dışı (sağlık turizmi)",
};

export const dentalEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Dental Clinic Website Design — Websites That Bring Patients",
    description:
      "Website design for dental clinics and dentists: treatment pages, online booking, Google visibility and multilingual dental-tourism setup. Fast, mobile-first, privacy-compliant. Free consultation.",
    keywords: [
      "dental clinic website design",
      "dentist website design",
      "dental website",
      "dental clinic SEO",
      "dental online booking",
      "dental tourism website",
      "multilingual dental website",
    ],
  },
  eyebrow: "For dental clinics",
  h1: ["Bring your clinic's quality", "online"],
  lead: "A patient's path is predictable: they search \"implants near me\" or \"[area] dentist\", look at the first few clinics, read the reviews and book where booking is easiest. We build fast, mobile-first websites for dental clinics around treatment pages, online booking and Google visibility.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "Audit Your Site",
  ctaSecondaryHref: "/en/site-audit",
  scopeTitle: ["What a clinic", "website needs"],
  scopeLead: "Not a pretty brochure — a path that takes the patient from search to appointment. Every part is one step of that path.",
  scope: [
    { title: "Treatment pages", desc: "Implants, veneers, orthodontics, whitening, root canal… A dedicated page for each treatment that answers the patient's questions. A search for \"veneers in Tirana\" finds the treatment page, not a generic homepage." },
    { title: "Online booking", desc: "Patients choose dentist, day and time 24/7; both sides get automatic confirmation. No more patients lost while the phone is busy or the clinic is closed." },
    { title: "Google visibility", desc: "Technical SEO, Google Business Profile setup and correctly titled treatment pages — the groundwork for showing up in \"dentist near me\" searches." },
    { title: "Trust signals", desc: "Dentist profiles, clinic photos, technology and hygiene, Google reviews shown on the site. Patients visit the site to decide whether to trust you." },
    { title: "Dental tourism (multilingual)", desc: "For clinics treating patients from abroad: separate pages per language, price ranges, stay and process information, WhatsApp for fast first contact." },
    { title: "Privacy and speed", desc: "Consent and privacy notices, cookie management, secure handling of patient data. Pages that load under two seconds and are designed for phones first." },
  ],
  processTitle: ["How we", "work"],
  process: [
    { step: "01", title: "Consultation", desc: "We learn about your clinic, your key treatments and your target patients (local or international), and review your current site and Google visibility together. Free." },
    { step: "02", title: "Structure and content", desc: "We map the treatment pages and site structure and finalise content with your dentists — informative, compliant, no hype." },
    { step: "03", title: "Design and build", desc: "A calm, trustworthy design specific to your clinic; fast, secure code on a modern stack (Next.js); booking and WhatsApp integration." },
    { step: "04", title: "Launch and follow-up", desc: "Domain, hosting, Google Search Console and Business Profile links. After launch we track together which treatment pages bring patients." },
  ],
  guideEyebrow: "Guide for clinics",
  guide: [
    {
      h: "Why a page for every treatment?",
      p: [
        "Patients don't search for \"dental clinic\"; they search for their problem: \"implant cost\", \"porcelain veneers\", \"clear aligners\", \"teeth whitening\". A one-page clinic site is weak for all of those. A page per treatment — explaining the procedure, timeline, who it suits and common questions — ranks for that search and answers the patient's questions before the appointment.",
        "That's why treatment pages get most of our attention on clinic sites; the design is built around them.",
      ],
    },
    {
      h: "Local search: \"dentist near me\"",
      p: [
        "Most local searches happen on phones, and the top three results in Google Maps take most of the clicks. What matters: a Google Business Profile with the right category and services, review count and rating, a website consistent with the profile (same name, address, phone) and a fast, mobile-friendly site.",
        "We build the site together with that profile: address and hours are marked up with structured data, treatment pages match the listed services, and the booking link is added to Maps.",
      ],
    },
    {
      h: "Multilingual sites for dental tourism",
      p: [
        "A patient travelling from abroad researches far more before choosing: price range, process, how many days to stay, accommodation, before/after examples, dentists' experience. They need pages in their own language that answer all of it. Running a site through automatic translation costs trust.",
        "For clinics serving international patients we set up a separate page structure per language, WhatsApp for first contact, a treatment-plan request form and, where needed, an online pre-consultation flow.",
      ],
    },
    {
      h: "Speed and mobile: patients don't wait",
      p: ["The problems we see most often on clinic websites:"],
      ul: [
        "Large, uncompressed photos making pages take 5–8 seconds to load; the patient moves on to a competitor.",
        "Sites that look fine on desktop but break or shrink on phones — where most visitors come from.",
        "Phone numbers that aren't tappable, and \"call us\" instead of a booking form.",
        "Everything crammed onto the homepage with no treatment pages.",
      ],
    },
    {
      h: "Privacy, consent and healthcare advertising rules",
      p: [
        "Every form that collects patient data needs a privacy notice and explicit consent; before/after photos need written patient permission. Healthcare advertising also has limits: we avoid comparative, guaranteeing or steering language and keep the tone informative. We recommend having the final legal texts confirmed by your clinic's advisor.",
      ],
    },
    {
      h: "Renewing an existing site",
      p: [
        "If you already have a site you don't need to start from scratch. Our free site audit shows speed, mobile-friendliness and basic SEO in 20 seconds, and in the consultation we look at which treatment pages are missing. When rebuilding, we redirect old URLs to the new pages to keep your existing Google rankings.",
      ],
    },
  ],
  faqTitle: ["Frequently asked", "questions"],
  faq: [
    { q: "How long does a dental clinic website take?", a: "It depends on the number of treatment pages: a single-language clinic site with 6–8 treatment pages is usually live in 3–4 weeks. Multilingual dental-tourism sites take 5–8 weeks depending on content preparation." },
    { q: "How is pricing determined?", a: "We prepare a written quote based on the number of treatment pages, languages, online booking and special features (treatment-plan form, dentist calendars). No hidden costs." },
    { q: "Which booking system do you use?", a: "It depends on your clinic software: we can connect to your existing appointment system or build your own booking page with dentist, day and time selection. Bookings arrive as notifications and in a calendar." },
    { q: "Do you guarantee first-page rankings on Google?", a: "No — Google decides rankings and nobody can guarantee them. We aim for a clear increase in visibility through well-built treatment pages, a fast site and a complete Google Business Profile, and we track results transparently with you." },
    { q: "Can we show before/after photos?", a: "Yes, provided the patient has given written permission. We prepare the consent text and a privacy-compliant gallery structure together." },
    { q: "Which languages for international patients?", a: "Most often English, German and Arabic. We define the list based on your target countries and build each language as its own page structure; we don't use automatic translation." },
  ],
  relatedTitle: "Related services and tools",
  related: [
    { label: "Free site audit", href: "/en/site-audit" },
    { label: "SEO services", href: "/en/seo" },
    { label: "Web design", href: "/en/web-design" },
    { label: "Our work", href: "/en/work" },
  ],
  closingTitle: ["Let's talk about", "your clinic's website"],
  closingLead: "Tell us your clinic's name and key treatments; in a free consultation we'll look at your current site and Google presence together.",
  closingCta: "Contact Us",
  backLabel: "Home",
  serviceType: "Website design, online booking and SEO for dental clinics",
  areaServed: "Türkiye, Albania and international (dental tourism)",
};
