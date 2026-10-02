import type { ServiceContent } from "@/components/service-page";

/**
 * Şehir sayfası: İzmir web tasarım.
 * Hedef aramalar: "izmir web tasarım", "izmir web sitesi yapan firmalar",
 * "izmir kurumsal web sitesi", "izmir web tasarım fiyatları".
 * Kural: ofis/adres iddiası YOK (uzaktan çalışıyoruz); uydurma müşteri YOK.
 * İçerik İzmir'e özgü olmalı (semt/sektör ihtiyaçları), şablon şehir sayfası değil.
 * Yalnızca Türkçe: alternates.en boş → hreflang üretilmez.
 */

const alternates = { tr: "/izmir-web-tasarim", en: "" } as const;

export const izmirTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  updated: "2026-10-02",
  meta: {
    title: "İzmir Web Tasarım — Kurumsal Site, E-Ticaret, SEO",
    description:
      "İzmir'deki işletmeler için web tasarım: kurumsal site, e-ticaret, online randevu ve Google'da bulunma. Şeffaf fiyat (15.000 TL'den), hızlı ve mobil uyumlu siteler. Ücretsiz ön görüşme.",
    keywords: [
      "izmir web tasarım",
      "izmir web sitesi yapan firmalar",
      "izmir kurumsal web sitesi",
      "izmir web tasarım fiyatları",
      "izmir e-ticaret sitesi",
      "izmir seo",
      "bornova web tasarım",
      "karşıyaka web tasarım",
    ],
  },
  eyebrow: "İzmir'deki işletmeler için",
  h1: ["İzmir'de işinizi", "Google'da öne çıkaralım"],
  lead: "WoodstoneStudio, İzmir'deki işletmelere kurumsal web sitesi, e-ticaret, online randevu ve SEO hizmeti veren bir dijital teknoloji stüdyosudur. Alsancak'taki bir kafeden Kemalpaşa'daki bir üreticiye, Çeşme'deki bir butik otelden Karşıyaka'daki bir kuaföre kadar her işin ihtiyacı farklıdır; siteyi o ihtiyaca göre kuruyor, fiyatı baştan yazılı veriyoruz.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Sitenizi Analiz Edin",
  ctaSecondaryHref: "/site-analizi",
  scopeTitle: ["İzmir'de en çok", "neye ihtiyaç var?"],
  scopeLead: "İzmir'in ekonomisi tek tip değil. Turizm, üretim ve ihracat, sağlık ve yerel hizmetler aynı şehirde yan yana; her biri farklı bir site ister.",
  scope: [
    { title: "Kurumsal web sitesi", desc: "Bayraklı ve Konak'taki ofisler, danışmanlık ve hukuk büroları, mimarlık ve mühendislik firmaları için güven veren, hızlı, 5–10 sayfalık kurumsal siteler." },
    { title: "Turizm ve doğrudan rezervasyon", desc: "Çeşme, Urla, Seferihisar ve Foça'daki otel, pansiyon, butik otel ve bağ evleri için rezervasyon alan, çok dilli siteler. Her doğrudan rezervasyon, platform komisyonundan kurtarılan paradır." },
    { title: "Üretici ve ihracatçılar için İngilizce site", desc: "Atatürk OSB, Kemalpaşa OSB ve Gaziemir Serbest Bölge'deki üreticiler için yabancı alıcının aradığı bilgiyi (ürün, kapasite, sertifika, iletişim) veren Türkçe-İngilizce siteler." },
    { title: "Salon ve klinikler için randevu", desc: "Karşıyaka, Bornova ve Buca'daki kuaför, güzellik salonu ve diş klinikleri için komisyonsuz online randevu, Google İşletme Profili düzeni ve yorum toplama." },
    { title: "E-ticaret", desc: "Kendi markasıyla satış yapmak isteyen İzmirli üretici ve butikler için ödeme altyapılı online mağaza; Trendyol ve Hepsiburada'ya bağımlılığı azaltan kendi kanalınız." },
    { title: "Google'da yerel görünürlük", desc: "\"Bornova diş kliniği\", \"Alsancak kafe\", \"Çeşme butik otel\" gibi semt ve sektör aramalarında görünmek için teknik SEO, yerel sayfalar ve Google İşletme Profili uyumu." },
  ],
  processTitle: ["Nasıl", "ilerliyoruz?"],
  process: [
    { step: "01", title: "Ön görüşme", desc: "WhatsApp ya da görüntülü görüşmeyle işinizi, müşterinizi ve mevcut sitenizi dinliyoruz. Ofise gelmeniz gerekmez. Ücretsiz." },
    { step: "02", title: "Yazılı teklif", desc: "Sayfa listesi, özellikler, süre ve fiyat tek bir yazılı teklifte. Gizli kalem yok; ödeme yarısı başta, yarısı teslimde." },
    { step: "03", title: "Tasarım ve geliştirme", desc: "İşinize özel tasarım, modern altyapı (Next.js) ile hızlı ve güvenli kod. Her aşamada önizleme bağlantısıyla siteyi telefonunuzda görürsünüz." },
    { step: "04", title: "Yayın ve Google", desc: "Alan adı, barındırma, Search Console ve Google İşletme Profili bağlantısı. Yayından sonra hangi aramalardan ziyaretçi geldiğini birlikte izliyoruz." },
  ],
  guideEyebrow: "İzmir için rehber",
  guide: [
    {
      h: "İzmir'de web sitesi ne kadar tutar?",
      p: [
        "Kısa cevap: kapsamına göre. WoodstoneStudio'nun 2026 başlangıç fiyatları şöyle; hepsi tahmini aralıktır, kesin rakam yazılı teklifte netleşir:",
      ],
      ul: [
        "Tek sayfalık tanıtım sitesi (landing): 15.000–25.000 TL",
        "Kurumsal web sitesi (5–10 sayfa): 30.000–50.000 TL",
        "Salon veya klinik sitesi + online randevu: 20.000–35.000 TL",
        "E-ticaret sitesi: 50.000–100.000 TL",
        "Yayın sonrası bakım ve güncelleme: aylık 2.500 TL'den",
      ],
    },
    {
      h: "Teklifleri karşılaştırırken nelere bakmalı?",
      p: [
        "İzmir'de aynı site için 5.000 TL de 150.000 TL de teklif alabilirsiniz. Fark çoğu zaman tasarımda değil, teklifin içinde yazmayan işlerdedir. Teklif alırken şu soruları sorun:",
      ],
      ul: [
        "Alan adı ve barındırma kimin adına kayıtlı olacak? (Sizin adınıza olmalı.)",
        "Site telefonda kaç saniyede açılıyor? Google PageSpeed puanı kaç?",
        "Teknik SEO (başlıklar, site haritası, yapılandırılmış veri) fiyata dahil mi?",
        "Yayından sonra küçük değişiklikler ücretli mi, ne kadar sürede yapılıyor?",
        "Kendi içeriğinizi (fiyat, fotoğraf, duyuru) kendiniz güncelleyebilecek misiniz?",
      ],
    },
    {
      h: "Hazır şablon mu, özel tasarım mı?",
      p: [
        "Wix veya hazır WordPress temasıyla açılan site ilk ay ucuz görünür; ancak aylık abonelik, eklenti lisansları ve yavaşlık zamanla maliyete dönüşür. Rakiplerinizle aynı görünen bir site de sizi ayırmaz. Tek sayfalık basit bir tanıtım için hazır araç yeterli olabilir; Google'dan müşteri bekleyen bir işletme için hızlı, işe özel ve SEO'su baştan kurulmuş bir site uzun vadede daha ucuza gelir.",
      ],
    },
    {
      h: "Turizm işletmeleri: Booking komisyonu mu, kendi siteniz mi?",
      p: [
        "Çeşme ve Urla'daki butik otel ve pansiyonların çoğu rezervasyonun büyük kısmını Booking.com ve benzeri platformlardan alır ve her rezervasyonda komisyon öder. Platformlardan tamamen çıkmak gerçekçi değildir; ancak sizi bir kez bulan misafirin tekrar gelişini ve Instagram'dan gelen talebi kendi sitenize yönlendirmek mümkündür. Kendi rezervasyon sayfanız, Google Otel aramalarına bağlantı ve WhatsApp ile hızlı iletişim bu payı büyütür.",
      ],
    },
    {
      h: "Google'da İzmir aramalarında nasıl çıkılır?",
      p: [
        "\"İzmir\" ile başlayan aramalarda Google iki ayrı sonuç gösterir: üstte haritadaki işletmeler, altında web siteleri. Harita sonuçları için eksiksiz bir Google İşletme Profili, doğru kategori ve düzenli yorum gerekir. Web sonuçları için de her hizmetin ve hizmet verdiğiniz semtin ayrı, gerçek bilgi içeren bir sayfası olmalıdır. Sitenizdeki ad, adres ve telefon, profildekiyle birebir aynı olmalıdır.",
        "Ücretsiz site analizi aracımızla sitenizin hızını ve temel SEO durumunu 20 saniyede görebilirsiniz.",
      ],
    },
  ],
  faqTitle: ["Sık sorulan", "sorular"],
  faq: [
    { q: "İzmir'de ofisiniz var mı, yüz yüze görüşüyor musunuz?", a: "Uzaktan çalışıyoruz. Ön görüşme, onaylar ve teslim WhatsApp ve görüntülü görüşmeyle ilerler; siteyi her aşamada önizleme bağlantısıyla telefonunuzdan görürsünüz. Bu sayede ofis maliyeti fiyata yansımaz." },
    { q: "Web sitesi kaç günde hazır olur?", a: "Tek sayfalık tanıtım sitesi genellikle 1–2 haftada, 5–10 sayfalık kurumsal site 3–4 haftada, e-ticaret sitesi 4–8 haftada yayına girer. Süreyi en çok içeriğin (metin, fotoğraf) hazır olması belirler." },
    { q: "Fiyata neler dahil?", a: "Tasarım, geliştirme, mobil uyum, temel teknik SEO, Google Search Console kurulumu ve yayın. Alan adı ve barındırma sizin adınıza açılır; maliyeti teklifte ayrıca yazılır." },
    { q: "Mevcut sitemi yeniletebilir miyim?", a: "Evet. Yenilemede eski sayfa adreslerini yenilerine yönlendirerek mevcut Google sıralamalarınızı koruyoruz. Önce ücretsiz site analiziyle sorunlu noktaları birlikte görüyoruz." },
    { q: "Google'da ilk sayfayı garanti ediyor musunuz?", a: "Hayır. Sıralamayı Google belirler ve kimse garanti veremez. Hızlı bir site, doğru kurulmuş sayfalar ve eksiksiz bir Google İşletme Profiliyle görünürlüğü artırmayı hedefliyor, sonucu şeffaf şekilde birlikte izliyoruz." },
    { q: "Sadece İzmir'deki işletmelerle mi çalışıyorsunuz?", a: "Hayır. Türkiye'nin her yerinden ve yurt dışından işletmelerle çalışıyoruz; bu sayfa İzmir'deki işletmelerin sık sorduğu soruları ve şehre özgü ihtiyaçları anlatır." },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Fiyat hesaplama", href: "/fiyat-hesaplama" },
    { label: "İzmir web tasarım fiyatları", href: "/blog/izmir-web-tasarim-fiyatlari" },
    { label: "Ücretsiz site analizi", href: "/site-analizi" },
    { label: "Otel ve pansiyon web sitesi", href: "/otel-pansiyon-web-sitesi" },
    { label: "Salonlar için randevu paketi", href: "/randevu-sistemi" },
    { label: "Diş kliniği web sitesi", href: "/dis-klinigi-web-sitesi" },
    { label: "E-ticaret sitesi", href: "/e-ticaret" },
    { label: "Çalışmalarımız", href: "/calismalar" },
  ],
  closingTitle: ["İzmir'deki işiniz için", "konuşalım"],
  closingLead: "İşletmenizin adını ve ne istediğinizi yazın; ücretsiz ön görüşmede kapsamı ve fiyatı birlikte netleştirelim.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "İzmir'deki işletmeler için web tasarım, e-ticaret, online randevu ve SEO",
  areaServed: "İzmir",
};
