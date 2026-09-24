import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/sosyal-medya",
  en: "/en/social-media",
} as const;

export const socialTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Sosyal Medya Yönetimi — Instagram ve YouTube",
    description:
      "Sosyal medya yönetimi: Instagram ve YouTube hesap yönetimi, içerik üretimi (Reels, video), profil düzenleme ve organik büyüme. Kalıcı görünürlük için düzenli, planlı içerik.",
    keywords: [
      "sosyal medya yönetimi hizmeti",
      "sosyal medya ajansı",
      "Instagram hesap yönetimi",
      "YouTube kanal yönetimi",
      "içerik üretimi Reels",
      "organik takipçi büyüme",
      "sosyal medya danışmanlığı",
    ],
  },
  eyebrow: "Sosyal Medya · Instagram & YouTube",
  h1: ["Sosyal medya yönetimi:", "düzenli içerik, kalıcı görünürlük."],
  lead: "WoodstoneStudio, uzaktan çalışan bir dijital teknoloji stüdyosudur. Instagram ve YouTube hesaplarınızı yönetiyor, markanıza uygun içerik üretiyor ve organik büyümeyi destekliyoruz. Odağımız kısa vadeli rakamlar değil; markanızı doğru kitleye ulaştıran, kalıcı bir sosyal medya varlığı.",
  ctaPrimary: "Ücretsiz Profil Değerlendirmesi",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Sosyal medya, düzen ister: net bir profil, tutarlı bir dil ve sürekli içerik. Bunları planlıyor, üretiyor ve yönetiyoruz.",
  scope: [
    { title: "Instagram hesap yönetimi", desc: "İçerik takvimi, paylaşım, hikâye, yorum ve mesaj yönetimi — hesabınız her gün canlı ve tutarlı kalır." },
    { title: "YouTube kanal yönetimi", desc: "Kanal düzeni, video başlıkları, açıklamalar, kapak görselleri ve yayın planı; izlenebilir bir kanal yapısı." },
    { title: "İçerik üretimi", desc: "Reels ve kısa videolar, görsel tasarımlar, metinler; markanızın diline uygun, paylaşıma hazır içerik." },
    { title: "Profil düzenleme ve optimizasyon", desc: "Bio, öne çıkanlar, profil görseli, kanal tanıtımı — profiliniz ilk bakışta ne yaptığınızı anlatır." },
    { title: "Organik büyüme", desc: "Doğru hashtag ve konu seçimi, etkileşim yönetimi ve tutarlı yayın ritmiyle gerçek takipçi kazanımı." },
    { title: "Raporlama", desc: "Aylık performans raporu: erişim, etkileşim, takipçi değişimi ve öne çıkan içerikler; birlikte yön belirliyoruz." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Profil değerlendirmesi", desc: "Mevcut hesaplarınızı, kitlenizi ve hedefinizi inceliyoruz. Ücretsiz." },
    { step: "02", title: "Strateji ve takvim", desc: "Marka dilini, içerik türlerini ve aylık paylaşım takvimini belirliyoruz." },
    { step: "03", title: "Üretim ve yayın", desc: "İçerikleri üretiyor, onayınızla yayınlıyor ve etkileşimi yönetiyoruz." },
    { step: "04", title: "Ölçüm ve iyileştirme", desc: "Aylık raporla neyin işe yaradığını görüyor, planı buna göre güncelliyoruz." },
  ],
  faqTitle: ["Sık sorulan", "sorular."],
  faq: [
    { q: "Takipçi satın alıyor musunuz?", a: "Hayır. Satın alınan ya da bot takipçi hesabınıza zarar verir ve platform kurallarına aykırıdır. Biz düzenli içerik ve etkileşimle gerçek, organik büyüme sağlıyoruz." },
    { q: "Ne kadar sürede sonuç alınır?", a: "Organik büyüme birikimli çalışır: ilk 4–6 haftada düzen ve etkileşim artışı, 3–6 ayda belirgin takipçi ve erişim büyümesi görülür. Net bir vaat yerine ölçülebilir hedefler koyuyoruz." },
    { q: "İçerikleri kim üretiyor?", a: "Biz üretiyoruz; sizden yalnızca marka bilgisi, ürün/hizmet detayı ve gerektiğinde ham görsel alıyoruz. Her içerik yayınlanmadan önce onayınıza sunulur." },
    { q: "Hangi platformlarda çalışıyorsunuz?", a: "Ağırlıklı olarak Instagram ve YouTube; ihtiyaca göre TikTok ve LinkedIn de yönetiyoruz." },
    { q: "Hesabımın şifresini vermem gerekiyor mu?", a: "Instagram için Meta Business ile yetkili erişim, YouTube için kanal yöneticisi yetkisi yeterlidir; şifre paylaşımı gerekmez." },
    { q: "Fiyatlandırma nasıl?", a: "Platform sayısı, aylık içerik adedi ve yönetim kapsamına göre aylık paket olarak teklif hazırlıyoruz; istediğiniz zaman durdurabilirsiniz." },
  ],
  closingTitle: ["Sosyal medyanız için", "konuşalım."],
  closingLead: "Hesaplarınızı gönderin; ücretsiz profil değerlendirmesinde neyin iyi çalıştığını ve neyi geliştirebileceğimizi paylaşalım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Sosyal medya yönetimi ve içerik üretimi",
  areaServed: "Türkiye, Avrupa ve dünya geneli",
  guideEyebrow: "Sosyal medya rehberi",
  guide: [
    {
      h: "Sosyal medya yönetimi tam olarak neyi kapsar?",
      p: [
        "Sosyal medya yönetimi yalnızca paylaşım yapmak değildir. Hesabın neyi, kime ve hangi dille anlattığını belirleyen bir strateji; bu stratejiye göre üretilen içerik; yorum ve mesajlarla kurulan ilişki ve sonuçların düzenli ölçülmesi birlikte bu işi oluşturur.",
        "Standart bir hizmette neyin olup neyin ek iş sayıldığını 'Sosyal medya yönetimi hizmetleri' yazımızda ayrıntılı anlattık.",
      ],
    },
    {
      h: "Organik büyüme mi, reklam mı?",
      p: [
        "Reklam hızlıdır ama bütçe durduğunda etkisi de durur. Organik büyüme yavaştır ama birikir: düzenli ve değerli içerik, hesabın zamanla daha fazla kişiye gösterilmesini sağlar ve bu kitle size gerçekten ilgi duyan insanlardan oluşur.",
        "Sağlıklı olan, organik temel üzerine gerektiğinde reklam eklemektir. Zayıf bir profile reklamla trafik göndermek, ziyaretçiyi ikna edecek bir şey olmadığı için bütçeyi boşa harcatır.",
      ],
    },
    {
      h: "İçerik planı nasıl hazırlanır?",
      p: [
        "İyi bir içerik planı birkaç ana başlık üzerine kurulur ve her paylaşım bunlardan birine hizmet eder:",
      ],
      ul: [
        "Tanıtım: ne yaptığınızı ve kimin için yaptığınızı gösteren içerikler",
        "Değer: kitlenin işine yarayan ipuçları, rehberler ve cevaplar",
        "Güven: müşteri deneyimleri, perde arkası ve süreç görüntüleri",
        "Dönüşüm: teklif, randevu ya da iletişime yönlendiren net çağrılar",
      ],
    },
    {
      h: "Reels ve kısa video neden öne çıkıyor?",
      p: [
        "Instagram ve YouTube, kısa videoları sizi henüz takip etmeyen kişilere de gösteriyor. Bu da kısa videoyu yeni kitleye ulaşmanın en etkili yollarından biri yapıyor. İyi bir kısa videonun ilk birkaç saniyesi izleyiciyi yakalar, tek bir fikri anlatır ve tek bir aksiyonla biter.",
        "Önemli olan pahalı prodüksiyon değil, düzen ve netliktir. Telefonla çekilmiş ama iyi kurgulanmış içerik, çoğu zaman ağır prodüksiyondan daha iyi performans gösterir.",
      ],
    },
    {
      h: "Başarı nasıl ölçülür?",
      p: [
        "Takipçi sayısı tek başına yanıltıcıdır. Asıl bakılması gerekenler:",
      ],
      ul: [
        "Erişim ve gösterimler: içerik yeni kişilere ulaşıyor mu?",
        "Etkileşim: kaydetme, paylaşma ve yorumlar",
        "Profil ziyaretleri ve link tıklamaları",
        "Sosyal medyadan gelen mesaj, teklif ve satış talepleri",
      ],
    },
    {
      h: "Neden WoodstoneStudio?",
      p: [
        "Bir yazılım ve tasarım stüdyosu olarak sosyal medyayı web sitenizden ve dijital ürünlerinizden ayrı düşünmüyoruz. Profil, içerik ve web sitesi aynı dili konuştuğunda, sosyal medyadan gelen ilgi gerçek müşteriye dönüşür. Takipçi satın almıyor, bot kullanmıyoruz; büyümeyi düzenli içerik ve gerçek etkileşimle sağlıyoruz.",
      ],
    },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Sosyal medya yönetimi hizmetleri: ne beklemeli?", href: "/blog/sosyal-medya-yonetimi-hizmetleri" },
    { label: "Web tasarım", href: "/web-tasarim" },
    { label: "SEO hizmeti", href: "/seo" },
  ],
};

export const socialEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "Social Media Management — Instagram & YouTube",
    description:
      "Social media management: Instagram and YouTube account management, content production (Reels, video), profile optimisation and organic growth. Consistent content for lasting visibility.",
    keywords: [
      "social media management",
      "Instagram account management",
      "YouTube channel management",
      "content production Reels",
      "organic social media growth",
      "social media agency",
      "social media consulting",
    ],
  },
  eyebrow: "Social Media",
  h1: ["Social media management:", "consistent content, lasting visibility."],
  lead: "WoodstoneStudio is a remote-first digital technology studio. We manage your Instagram and YouTube accounts, produce content in your brand's voice and support organic growth. Our focus is not short-term numbers but a lasting social presence that reaches the right audience.",
  ctaPrimary: "Free Profile Review",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do."],
  scopeLead: "Social media needs discipline: a clear profile, a consistent voice and continuous content. We plan, produce and manage all three.",
  scope: [
    { title: "Instagram account management", desc: "Content calendar, posting, stories, comment and message handling — your account stays active and consistent every day." },
    { title: "YouTube channel management", desc: "Channel layout, video titles, descriptions, thumbnails and a publishing plan — a channel structure people can follow." },
    { title: "Content production", desc: "Reels and short videos, visual designs and copy, in your brand's voice and ready to publish." },
    { title: "Profile setup & optimisation", desc: "Bio, highlights, profile image, channel trailer — your profile explains what you do at first glance." },
    { title: "Organic growth", desc: "The right hashtags and topics, engagement management and a consistent publishing rhythm to win real followers." },
    { title: "Reporting", desc: "Monthly performance report: reach, engagement, follower change and top content; we set direction together." },
  ],
  processTitle: ["How we", "work."],
  process: [
    { step: "01", title: "Profile review", desc: "We review your current accounts, audience and goals. Free." },
    { step: "02", title: "Strategy & calendar", desc: "We define brand voice, content types and a monthly publishing calendar." },
    { step: "03", title: "Production & publishing", desc: "We produce content, publish it with your approval and manage engagement." },
    { step: "04", title: "Measure & improve", desc: "A monthly report shows what works; we update the plan accordingly." },
  ],
  faqTitle: ["Frequently asked", "questions."],
  faq: [
    { q: "Do you buy followers?", a: "No. Bought or bot followers damage your account and violate platform rules. We deliver real, organic growth through consistent content and engagement." },
    { q: "How quickly do results come?", a: "Organic growth compounds: better structure and engagement in the first 4–6 weeks, noticeable follower and reach growth in 3–6 months. We set measurable goals rather than empty promises." },
    { q: "Who produces the content?", a: "We do; we only need brand information, product/service details and raw visuals where needed. Every piece is submitted for your approval before publishing." },
    { q: "Which platforms do you work on?", a: "Primarily Instagram and YouTube; we also manage TikTok and LinkedIn where needed." },
    { q: "Do I have to share my password?", a: "No. Delegated access via Meta Business for Instagram and channel manager permissions for YouTube are enough." },
    { q: "How is it priced?", a: "A monthly package based on platform count, content volume and management scope; you can pause at any time." },
  ],
  closingTitle: ["Let's talk about", "your social media."],
  closingLead: "Send us your accounts; in a free profile review we'll share what works well and what we can improve.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "Social media management and content production",
  areaServed: "Worldwide",
  guideEyebrow: "Social media guide",
  guide: [
    {
      h: "What exactly does social media management cover?",
      p: [
        "Social media management is more than posting. It combines a strategy that defines what the account says, to whom and in what voice; content produced for that strategy; relationships built through comments and messages; and regular measurement of results.",
        "We explain what a standard package includes and what counts as extra in our post on social media management services.",
      ],
    },
    {
      h: "Organic growth or ads?",
      p: [
        "Ads are fast, but their effect stops when the budget stops. Organic growth is slower but compounds: consistent, valuable content gets the account shown to more people over time, and that audience is made of people genuinely interested in you.",
        "The healthy approach is to add ads on top of an organic foundation when needed. Sending paid traffic to a weak profile wastes budget, because there is nothing there to convince the visitor.",
      ],
    },
    {
      h: "How to build a content plan",
      p: [
        "A good content plan rests on a few pillars, and every post serves one of them:",
      ],
      ul: [
        "Introduction: content that shows what you do and who it's for",
        "Value: tips, guides and answers that help your audience",
        "Trust: customer experiences, behind the scenes and process",
        "Conversion: clear calls to request a quote, book or get in touch",
      ],
    },
    {
      h: "Why Reels and short video stand out",
      p: [
        "Instagram and YouTube show short videos to people who don't follow you yet, which makes short video one of the most effective ways to reach a new audience. A good short video hooks the viewer in the first seconds, makes one point and ends with one action.",
        "What matters is consistency and clarity, not expensive production. Well-edited content shot on a phone often performs better than heavy production.",
      ],
    },
    {
      h: "How to measure success",
      p: [
        "Follower count alone is misleading. Look at:",
      ],
      ul: [
        "Reach and impressions: is content reaching new people?",
        "Engagement: saves, shares and comments",
        "Profile visits and link clicks",
        "Messages, quote requests and sales that come from social media",
      ],
    },
    {
      h: "Why WoodstoneStudio?",
      p: [
        "As a software and design studio, we don't treat social media separately from your website and digital products. When your profile, content and website speak the same language, interest from social media turns into real customers. We never buy followers or use bots; growth comes from consistent content and genuine engagement.",
      ],
    },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "Social media management services: what to expect", href: "/en/blog/sosyal-medya-yonetimi-hizmetleri" },
    { label: "Web design", href: "/en/web-design" },
    { label: "SEO services", href: "/en/seo" },
  ],
};

