import type { Locale } from "@/components/service-page";

export type BlogPost = {
  slug: string; // dil-bağımsız kısa kimlik (URL'de dile göre önek eklenir)
  locales: Locale[]; // bu yazının yayınlandığı diller (pazar hedefli içerik için)
  relatedService?: string; // ilgili hizmet slug-kökü: "web" | "mobile" | "saas" | "ai" | "social"
  date: string; // ISO
  readMin: number;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  // gövde: paragraf ve alt başlıklardan oluşan bloklar
  body: Record<Locale, Block[]>;
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export const BLOG_BASE: Record<Locale, string> = {
  tr: "/blog",
  en: "/en/blog",
};

export const BLOG_LABELS: Record<Locale, { eyebrow: string; title: [string, string]; lead: string; readSuffix: string; back: string; allPosts: string }> = {
  tr: {
    eyebrow: "Blog",
    title: ["Yazılım, ürün", "ve dijital notlar."],
    lead: "Web, mobil, yapay zekâ ve ürün geliştirme üzerine sade, işe yarar yazılar. Deneyimlerimizi ve öğrendiklerimizi paylaşıyoruz.",
    readSuffix: "dk okuma",
    back: "Tüm yazılar",
    allPosts: "Ana sayfa",
  },
  en: {
    eyebrow: "Blog",
    title: ["Notes on software,", "product and digital."],
    lead: "Clear, useful writing on web, mobile, AI and product development. We share our experience and what we learn.",
    readSuffix: "min read",
    back: "All posts",
    allPosts: "Home",
  },
};

// ─────────────────────────────────────────────────────────────
// YAZILAR
// ─────────────────────────────────────────────────────────────

export const posts: BlogPost[] = [
  {
    slug: "sosyal-medya-yonetimi-hizmetleri",
    relatedService: "social",
    locales: ["tr", "en"],
    date: "2026-09-22",
    readMin: 9,
    category: { tr: "Sosyal Medya", en: "Social Media" },
    title: {
      tr: "Sosyal Medya Yönetimi Hizmetleri: Ne Beklemeli, Ne Talep Etmeli?",
      en: "Social Media Management Services: What to Expect, What to Ask For",
    },
    excerpt: {
      tr: "\"Sosyal medya yönetimi\" tam olarak neyi kapsar? Standart pakette ne var, ne ekstra sayılır — doğru teklif almak ve gerçekçi hedef koymak için bilmeniz gerekenler.",
      en: "What does \"social media management\" actually cover? What is in a standard package and what counts as extra — what you need to know to get the right quote and set realistic goals.",
    },
    body: {
      tr: [
        { type: "p", text: "Bir ajansa \"sosyal medya yönetimi\" dediğinizde iki taraf genellikle farklı şeyleri anlar. İşletme sahibi her gün düzenli paylaşım, yorumlara hızlı yanıt ve satışa yansıyan sonuçlar beklerken, ajans tarafı içerik takvimi, marka kimliği çalışması ve aylık raporlamadan bahseder. Bu kopukluk, bütçe ve beklenti çatışmalarının başlıca nedenidir. Hangi görevlerin standart pakette yer aldığını, hangilerinin ekstra hizmet sayıldığını bilmek; hem doğru teklif almak hem de gerçekçi hedef koymak için şarttır." },
        { type: "h2", text: "Sosyal medya yönetimi hizmetlerinin temel bileşenleri" },
        { type: "p", text: "Pazarda \"sosyal medya yönetimi\" diye sunulan hizmetler genellikle beş ana işlevi kapsar: içerik üretimi, yayın planlaması, topluluk etkileşimi, performans takibi ve düzenli raporlama. Her birinin alt görevleri ve iş yükü farklıdır." },
        { type: "h2", text: "İçerik üretimi ve planlama" },
        { type: "p", text: "Aylık paylaşım sayısı, hizmetin fiyatını belirleyen birinci etkendir. Ortalama bir paket hafta başına 3–5 gönderi anlamına gelir (ayda yaklaşık 12–20 içerik). Bu gönderileri oluşturmak için şunlar gerekir:" },
        { type: "ul", items: ["Fotoğraf/video çekimi: ürün fotoğrafları, ofis arkası kareler veya ekip tanıtımları. Profesyonel çekim mi yoksa telefon görseli mi olacağı maliyeti iki katına çıkarabilir.", "Görsel tasarım: görsellere metin, logo veya marka renk paletinin eklenmesi. Canva gibi araçlar yeterli mi, yoksa özel tasarım mı gerekiyor — fark burada başlar.", "Metin yazımı: caption, hashtag ve birinci yorum. Ton belirleyicidir; resmi mi, samimi mi, esprili mi? Önceden tanımlı bir sosyal medya stratejisi yoksa ajans bu tonu bulma sürecini ekstra ücretlendirebilir.", "İçerik takvimi: hangi gün, hangi platform, hangi saat. LinkedIn'de pazartesi sabahları, Instagram'da cuma akşamları daha çok etkileşim geliyorsa takvim buna göre kurgulanmalıdır."] },
        { type: "p", text: "Bir uyarı: \"ayda 30 paylaşım\" her zaman iyi sonuç anlamına gelmez. Kalitesiz ya da hedef kitleye uymayan gönderilerin sayısı artsa da algoritma onları göstermeyebilir." },
        { type: "h2", text: "Yayın planlaması ve platform yönetimi" },
        { type: "p", text: "İçerik hazır olduğunda her platformun kendi arayüzüne girilip görselin yüklenmesi, metinlerin yapıştırılması ve yayın saatinin ayarlanması gerekir. Birden fazla platform (Instagram, Facebook, LinkedIn, X) yönetiyorsanız her biri için ayrı format uyarlaması yapılmalıdır:" },
        { type: "ul", items: ["Instagram: kare ya da 4:5 oran, hikâye, reel", "LinkedIn: profesyonel dil, belge/PDF paylaşımı", "Facebook: topluluk gruplarına çapraz paylaşım, etkinlik duyuruları", "X (Twitter): kısa metin, güncel hashtag'ler"] },
        { type: "p", text: "Buffer, Hootsuite veya Later gibi planlama araçları bu süreci hızlandırır; ama araç maliyetini kim karşılıyor? Bazı ajanslar aracı kendi hesabına alır, bazıları faturaya ekler." },
        { type: "h2", text: "Topluluk yönetimi (community management)" },
        { type: "p", text: "Yayınlanan içeriğe gelen yorumları yanıtlamak, mesajları cevaplamak, şikâyetleri yönlendirmek. Bu görev genellikle hafife alınır ama en çok zaman alan kısımdır. Aktif bir hesap günde 10–50 yorum, 5–20 mesaj alabilir." },
        { type: "ul", items: ["Yorum moderasyonu: spam, hakaret ya da uygunsuz içeriği gizleme veya silme.", "Müşteri soruları: \"Bu ürün stokta mı?\", \"Kargo ne zaman gelir?\" gibi sorular. Ajans tek başına cevap veremiyorsa işletmeyle koordinasyon şarttır.", "Etkileşim tetikleme: ilgili hesapları etiketleme, beğenme, yorum yapma. Organik erişimi artırmanın en basit ama en emek yoğun yolu."] },
        { type: "p", text: "Bir ajans \"topluluk yönetimi dahil değildir\" diyorsa, bu kısım size kalıyor demektir." },
        { type: "h2", text: "Reklam yönetimi (opsiyonel)" },
        { type: "p", text: "Organik içerikle sınırlı kalmak istemiyorsanız ücretli kampanya yönetimi ayrı bir hizmettir. Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads gibi platformlarda şunlar yapılır:" },
        { type: "ul", items: ["Hedef kitle tanımı (yaş, cinsiyet, ilgi alanı, konum)", "Bütçe dağılımı (günlük/toplam)", "A/B test kurulumu (farklı görsel veya metin varyasyonları)", "Reklam metni ve görseli (bazı ajanslar organik içerikten ayrı özel tasarlar)", "Performans optimizasyonu (düşük dönüşüm veren reklamı duraklatmak)"] },
        { type: "p", text: "Reklam yönetim ücreti genellikle harcanan bütçenin %10–20'si kadar ya da sabit aylık ücret olarak alınır." },
        { type: "h2", text: "Analiz ve raporlama" },
        { type: "p", text: "Aylık veya haftalık rapor: erişim, etkileşim, takipçi artışı, en başarılı gönderi ve demografik dağılım. Raporun biçimi ajanslar arasında büyük fark gösterir:" },
        { type: "ul", items: ["Platform içi rapor: Instagram ya da Facebook Insights ekran görüntüsü (en basit)", "Google Sheets özeti: manuel girilmiş tablo", "Görsel rapor: grafik, yorum ve öneri içeren PDF", "Dashboard: canlı güncellenen Looker Studio ya da benzeri araç"] },
        { type: "p", text: "Raporlama yalnızca sayı göstermek değildir; o sayılardan çıkarım yapıp bir sonraki ay ne yapılacağını önermektir." },
        { type: "h2", text: "Hangi hizmet modelini seçmeli?" },
        { type: "p", text: "Pazarda üç temel fiyatlandırma modeli var: paket bazlı, saat bazlı ve proje bazlı." },
        { type: "h2", text: "Paket bazlı (Temel / Orta / Üst)" },
        { type: "p", text: "Sabit içerik sayısı, belirli platformlar, belirli hizmetler. Örneğin:" },
        { type: "ul", items: ["Temel paket: ayda 12 gönderi, 2 platform, topluluk yönetimi yok, basit rapor.", "Orta paket: ayda 20 gönderi, 3 platform, yorum yanıtlama dahil, haftalık özet.", "Üst paket: ayda 30+ gönderi, sınırsız platform, profesyonel çekim, video kurgu, canlı dashboard."] },
        { type: "p", text: "Bu model küçük işletmeler için öngörülebilir bütçe sağlar ama özelleştirme sınırlıdır." },
        { type: "h2", text: "Saat bazlı" },
        { type: "p", text: "Ajans aylık belirli bir saat ayırır; hangi göreve ne kadar harcanacağını siz belirlersiniz. Bir ay içerik ağırlıklı, ertesi ay reklam kurulumu olabilir. Esneklik yüksektir ama takibi zordur." },
        { type: "h2", text: "Proje bazlı" },
        { type: "p", text: "Belirli bir kampanya veya dönem için: ürün lansmanı, etkinlik, sezon indirimi. Süreklilik gerektirmeyen, kısa süreli çalışmalarda mantıklıdır." },
        { type: "h2", text: "Sık karşılaşılan beklenti kopuklukları" },
        { type: "h2", text: "\"Viral olacak içerik üretin\"" },
        { type: "p", text: "Viral olmak kontrol edilebilir bir metrik değildir. Ajans kaliteli ve alakalı içerik üretir; hangisinin viral olacağını garanti edemez. İyi bir hizmet, viral patlamayı değil tutarlı etkileşim artışını hedefler." },
        { type: "h2", text: "\"Hemen takipçi artışı bekliyorum\"" },
        { type: "p", text: "Organik büyüme aylar alır. Bir ay 50 takipçi, sonraki ay 100, altı ay sonra 500 olabilir. Hızlı büyüme için reklam veya influencer iş birliği gerekir." },
        { type: "h2", text: "\"Satışlarım neden artmıyor?\"" },
        { type: "p", text: "Sosyal medya yönetimi, satış hunisinin yalnızca bir parçasıdır. Web sitenizin kullanıcı deneyimi kötüyse, fiyatınız rekabetçi değilse ya da teslimat yavaşsa sosyal medya tek başına satış çözmez. Sosyal medya farkındalık yaratır ve güven inşa eder; satış dönüşümü ise dijital pazarlama bütününde ele alınmalıdır." },
        { type: "h2", text: "\"Haftada 7 gün yayın yapın\"" },
        { type: "p", text: "Günlük paylaşım her zaman daha iyi sonuç vermez. Kalitesiz içerik algoritma tarafından cezalandırılabilir. Kimi markalar haftada 3 güçlü gönderiyle daha fazla etkileşim alır." },
        { type: "h2", text: "Doğru hizmet sağlayıcısını seçerken kontrol listesi" },
        { type: "ul", items: ["Portföy ve referanslar: benzer sektörde deneyim var mı? Örnek hesapları görebiliyor musunuz?", "Süreç netliği: içerik onay akışı nasıl? Kaç kez revizyon hakkı var?", "Araç ve erişim: planlama aracını kim alacak, hesap şifrelerini nasıl paylaşacaksınız?", "Kriz yönetimi: negatif yorum veya kriz durumunda kim ne yapacak?", "Sözleşme süresi: minimum bağlılık kaç ay? Erken çıkışta ceza var mı?", "Sahiplik: üretilen içeriklerin telif hakkı kime ait? Sözleşme bitince görseller sizde kalıyor mu?"] },
        { type: "h2", text: "Kendi ekibiniz mi, dışarıdan hizmet mi?" },
        { type: "p", text: "Sosyal medyayı kendi içinizde mi yoksa ajansa mı yaptırmanız gerektiği bütçe, uzmanlık ve süreklilik ihtiyacına bağlıdır. Kendi ekibinizin avantajları:" },
        { type: "ul", items: ["Markanızı içten tanır, karar süreci hızlıdır.", "Anlık gelişmelere (stok değişikliği, kampanya) hemen yanıt verebilir.", "Uzun vadede maliyet düşebilir."] },
        { type: "p", text: "Dışarıdan hizmetin avantajları:" },
        { type: "ul", items: ["Geniş araç ve uzmanlık portföyü (grafik tasarım, video kurgu, reklam stratejisi).", "Birden fazla sektör deneyimi ve trend takibi.", "İşe alım, eğitim, izin gibi yönetim yükü yoktur."] },
        { type: "p", text: "Küçük işletmeler genellikle ajansla başlayıp büyüdükçe içselleştirir. Orta ve büyük işletmeler ise hibrit model kullanır: strateji ve içerik ajansa, topluluk yönetimi kendi ekibine." },
        { type: "h2", text: "Ölçülebilir hedefler nasıl konur?" },
        { type: "p", text: "Hizmet alırken \"başarı\" kriterini baştan tanımlamak şarttır. Somut hedefler:" },
        { type: "ul", items: ["Etkileşim oranı: her 1000 gösterim başına kaç beğeni/yorum. Sektöre göre %1–3 normal sayılır.", "Takipçi artış hızı: aylık %5–10 organik büyüme gerçekçi bir hedeftir.", "Erişim: takipçi dışındaki hesaplara ulaşma; algoritma değişimleriyle oynayabilir.", "Web trafiği: sosyal medyadan siteye yönlendirme (UTM parametreleriyle ölçülür).", "Dönüşüm: form doldurma, sepete ekleme, satış. Doğrudan satış kanalı olmasa da katkısı izlenebilir."] },
        { type: "p", text: "Her ayın sonunda bu metriklere bakıp \"neden arttı, neden azaldı?\" sorusunu sormak, hizmetin kalitesini değerlendirmenin yoludur." },
        { type: "h2", text: "Platform seçiminde nelere dikkat etmeli?" },
        { type: "p", text: "Tüm platformları yönetmek kaynak israfı olabilir. Hedef kitlenizin nerede olduğunu bilmek kritiktir:" },
        { type: "ul", items: ["Instagram: görsel ağırlıklı, genç kitle (18–35), lifestyle, moda, yemek, seyahat.", "Facebook: daha olgun kitle (30+), topluluk grupları, etkinlik duyuruları.", "LinkedIn: B2B satış, profesyonel hizmetler, iş ilanları, düşünce liderliği.", "TikTok: Z kuşağı, video içerik, trend takibi, eğlence.", "X (Twitter): anlık haber, müşteri hizmetleri, teknoloji, medya."] },
        { type: "p", text: "Örneğin bir hukuk bürosu Instagram'da günde 3 gönderi yerine LinkedIn'de haftada 2 kaliteli makale paylaşmalıdır. Bir kafe ise TikTok videolarına yatırım yapıp LinkedIn'i boş bırakabilir." },
        { type: "h2", text: "Sonuç: net beklentiler, ölçülebilir sonuçlar" },
        { type: "p", text: "Sosyal medya yönetimi hizmeti almadan önce kendinize üç soru sorun:" },
        { type: "ul", items: ["Ne istiyorum? Marka bilinirliği mi, web trafiği mi, doğrudan satış mı?", "Ne kadar kaynak ayırabilirim? Bütçe ve zaman olarak hangi modele uygunum?", "Nasıl ölçeceğim? Hangi rakamlara bakıp \"işe yarıyor\" diyeceğim?"] },
        { type: "p", text: "Bu üç soruya net yanıt verebiliyorsanız, doğru ajansla çalışmak hem bütçenizi korur hem de sonuca odaklanmanızı sağlar. Aksi hâlde \"sosyal medya yönetimi\" geniş ve belirsiz bir harcama kalemi olarak kalır." },
      ],
      en: [
        { type: "p", text: "When you say \"social media management\" to an agency, the two sides often mean different things. The business owner expects regular daily posts, fast replies to comments and results that show up in sales; the agency talks about a content calendar, brand identity work and monthly reporting. That gap is the main source of budget and expectation clashes. Knowing which tasks are part of a standard package and which count as extra is essential both to get the right quote and to set realistic goals." },
        { type: "h2", text: "The core components of social media management" },
        { type: "p", text: "What the market sells as \"social media management\" usually covers five main functions: content production, publishing/scheduling, community engagement, performance tracking and regular reporting. Each has its own sub-tasks and workload." },
        { type: "h2", text: "Content production and planning" },
        { type: "p", text: "The number of monthly posts is the number-one factor that sets the price. An average package means 3–5 posts per week (roughly 12–20 pieces a month). Producing those posts requires:" },
        { type: "ul", items: ["Photo/video shoots: product photos, behind-the-scenes shots or team intros. Whether it is a professional shoot or a phone photo can double the cost.", "Visual design: adding text, logo or brand colour palette to the visuals. Are tools like Canva enough, or is custom design needed — the difference starts here.", "Copywriting: caption, hashtags and the first comment. Tone is decisive; formal, friendly or witty? Without a defined social media strategy, the agency may charge extra for the process of finding that tone.", "Content calendar: which day, which platform, which time. If Monday mornings work on LinkedIn and Friday evenings on Instagram, the calendar should be built around that."] },
        { type: "p", text: "A warning: \"30 posts a month\" does not always mean good results. Even if you increase the number of low-quality or off-target posts, the algorithm may simply not show them." },
        { type: "h2", text: "Publishing and platform management" },
        { type: "p", text: "Once the content is ready, someone has to open each platform, upload the visual, paste the text and set the publish time. If you manage several platforms (Instagram, Facebook, LinkedIn, X), each needs its own format adaptation:" },
        { type: "ul", items: ["Instagram: square or 4:5 ratio, stories, reels", "LinkedIn: professional tone, document/PDF posts", "Facebook: cross-posting to community groups, event announcements", "X (Twitter): short text, current hashtags"] },
        { type: "p", text: "Scheduling tools like Buffer, Hootsuite or Later speed this up — but who pays for the tool? Some agencies buy it on their own account, others add it to the invoice." },
        { type: "h2", text: "Community management" },
        { type: "p", text: "Replying to comments, answering messages, routing complaints. This task is usually underestimated but takes the most time. An active account can get 10–50 comments and 5–20 messages a day." },
        { type: "ul", items: ["Comment moderation: hiding or deleting spam, insults or inappropriate content.", "Customer questions: \"Is this in stock?\", \"When will it ship?\" and the like. If the agency cannot answer alone, coordination with the business is a must.", "Engagement triggers: tagging, liking and commenting on relevant accounts. The simplest but most labour-intensive way to grow organic reach."] },
        { type: "p", text: "If an agency says \"community management is not included,\" that part is left to you." },
        { type: "h2", text: "Ad management (optional)" },
        { type: "p", text: "If you do not want to stay limited to organic content, paid campaign management is a separate service. On platforms like Meta Ads (Facebook/Instagram), LinkedIn Ads and TikTok Ads, this involves:" },
        { type: "ul", items: ["Audience definition (age, gender, interests, location)", "Budget allocation (daily/total)", "A/B test setup (different visual or copy variations)", "Ad copy and creative (some agencies design these separately from organic content)", "Performance optimisation (pausing ads with low conversion)"] },
        { type: "p", text: "The ad management fee is usually 10–20% of the spend or a fixed monthly rate." },
        { type: "h2", text: "Analytics and reporting" },
        { type: "p", text: "A monthly or weekly report: reach (impressions), engagement, follower growth, top post and demographic breakdown. The format varies widely between agencies:" },
        { type: "ul", items: ["In-platform report: a screenshot of Instagram or Facebook Insights (the simplest)", "Google Sheets summary: a manually filled table", "Visual report: a PDF with charts, commentary and recommendations", "Dashboard: a live-updating Looker Studio or similar tool"] },
        { type: "p", text: "Reporting is not just showing numbers; it is drawing conclusions from them and recommending what to do next month." },
        { type: "h2", text: "Which service model should you choose?" },
        { type: "p", text: "There are three main pricing models on the market: package-based, hourly and project-based." },
        { type: "h2", text: "Package-based (Basic / Mid / Premium)" },
        { type: "p", text: "A fixed number of posts, specific platforms, specific services. For example:" },
        { type: "ul", items: ["Basic: 12 posts a month, 2 platforms, no community management, a simple report.", "Mid: 20 posts a month, 3 platforms, comment replies included, a weekly summary.", "Premium: 30+ posts a month, unlimited platforms, professional shoots, video editing, a live dashboard."] },
        { type: "p", text: "This model gives small businesses a predictable budget, but customisation is limited." },
        { type: "h2", text: "Hourly" },
        { type: "p", text: "The agency sets aside a certain number of hours a month; you decide how much goes to each task. One month can be content-heavy, the next ad-campaign setup. Flexibility is high but it is harder to track." },
        { type: "h2", text: "Project-based" },
        { type: "p", text: "For a specific campaign or period: a product launch, an event, a seasonal sale. It makes sense for short-term work that does not need continuity." },
        { type: "h2", text: "Common expectation gaps" },
        { type: "h2", text: "\"Make content that goes viral\"" },
        { type: "p", text: "Going viral is not a controllable metric. An agency produces quality, relevant content; it cannot guarantee which piece will go viral. A good service targets consistent engagement growth, not a viral spike." },
        { type: "h2", text: "\"I want follower growth right now\"" },
        { type: "p", text: "Organic growth takes months. It might be 50 followers one month, 100 the next, 500 after six months. Fast growth requires ads or influencer collaboration." },
        { type: "h2", text: "\"Why aren't my sales going up?\"" },
        { type: "p", text: "Social media management is only one part of the sales funnel. If your website's user experience is poor, your price is not competitive or delivery is slow, social media alone cannot fix sales. Social media builds awareness and trust; sales conversion has to be handled as part of your overall digital marketing." },
        { type: "h2", text: "\"Post 7 days a week\"" },
        { type: "p", text: "Daily posting does not always produce better results. Low-quality content can be penalised by the algorithm. Some brands get more engagement with 3 strong posts a week." },
        { type: "h2", text: "A checklist for choosing the right provider" },
        { type: "ul", items: ["Portfolio and references: do they have experience in a similar sector? Can you see example accounts?", "Process clarity: how does content approval flow? How many rounds of revisions?", "Tools and access: who buys the scheduling tool, and how will you share account passwords?", "Crisis management: who does what in case of a negative comment or a crisis?", "Contract length: what is the minimum commitment in months? Is there a penalty for leaving early?", "Ownership: who owns the copyright of the content produced? Do you keep the visuals when the contract ends?"] },
        { type: "h2", text: "Your own team or an outside service?" },
        { type: "p", text: "Whether you should run social media in-house or with an agency depends on your budget, expertise and need for continuity. The advantages of your own team:" },
        { type: "ul", items: ["They know your brand from the inside and decide quickly.", "They can respond instantly to sudden changes (stock, a campaign).", "Cost can drop in the long run."] },
        { type: "p", text: "The advantages of an outside service:" },
        { type: "ul", items: ["A broad set of tools and expertise (graphic design, video editing, ad strategy).", "Experience across several sectors and trend tracking.", "No management burden of hiring, training or time off."] },
        { type: "p", text: "Small businesses often start with an agency and bring it in-house as they grow. Mid-size and large businesses use a hybrid model: strategy and content to the agency, community management to their own team." },
        { type: "h2", text: "How to set measurable goals" },
        { type: "p", text: "When you buy the service, defining \"success\" up front is essential. Concrete goals:" },
        { type: "ul", items: ["Engagement rate: how many likes/comments per 1,000 impressions. Depending on the sector, 1–3% is considered normal.", "Follower growth rate: 5–10% organic growth a month is a realistic target.", "Reach: getting to accounts beyond your followers; this can swing with algorithm changes.", "Web traffic: referrals from social media to the site (measured with UTM parameters).", "Conversion: form fills, add-to-cart, sales. Even if it is not a direct sales channel, its contribution can be tracked."] },
        { type: "p", text: "Looking at these metrics at the end of each month and asking \"why did it go up or down?\" is how you judge the quality of the service." },
        { type: "h2", text: "What to watch when choosing platforms" },
        { type: "p", text: "Managing every platform can waste resources. Knowing where your audience is matters:" },
        { type: "ul", items: ["Instagram: visual-heavy, younger audience (18–35), lifestyle, fashion, food, travel.", "Facebook: an older audience (30+), community groups, event announcements.", "LinkedIn: B2B sales, professional services, job posts, thought leadership.", "TikTok: Gen Z, video content, trend tracking, entertainment.", "X (Twitter): breaking news, customer service, tech, media."] },
        { type: "p", text: "For example, a law firm should post 2 quality articles a week on LinkedIn rather than 3 posts a day on Instagram. A café should invest in TikTok videos and can leave LinkedIn aside." },
        { type: "h2", text: "Conclusion: clear expectations, measurable results" },
        { type: "p", text: "Before buying social media management, ask yourself three questions:" },
        { type: "ul", items: ["What do I want? Brand awareness, web traffic or direct sales?", "How much can I invest? Which model fits me in terms of budget and time?", "How will I measure it? Which numbers will tell me it is working?"] },
        { type: "p", text: "If you can answer these three clearly, working with the right agency protects your budget and keeps you focused on results. Otherwise \"social media management\" stays a broad, vague line item." },
      ],
    },
  },
  {
    slug: "web-sitesi-maliyeti",
    relatedService: "web",
    locales: ["tr", "en"],
    date: "2026-09-08",
    readMin: 5,
    category: { tr: "Web", en: "Web" },
    title: {
      tr: "Web sitesi yaptırmak ne kadar tutar? Fiyatı belirleyen 6 etken",
      en: "How much does a website cost? The 6 factors that set the price",
    },
    excerpt: {
      tr: "Web sitesi fiyatları neden bu kadar değişken? Bir teklifin arkasındaki gerçek etkenleri ve bütçenizi nasıl doğru planlayacağınızı açıklıyoruz.",
      en: "Why do website prices vary so much? We explain the real factors behind a quote and how to plan your budget correctly.",
    },
    body: {
      tr: [
        { type: "p", text: "\"Web sitesi ne kadar?\" sorusunun tek bir cevabı yoktur — tıpkı \"ev ne kadar?\" sorusu gibi. Fiyat, ne istediğinize göre değişir. Ama bu belirsizlik, bir teklifi değerlendirirken sizi kaybetmemeli. Fiyatı belirleyen etkenleri bilirseniz, hem doğru bütçe ayırır hem de aldığınız teklifin adil olup olmadığını anlarsınız." },
        { type: "h2", text: "1. Sayfa sayısı ve kapsam" },
        { type: "p", text: "Tek sayfalık bir tanıtım sitesi ile onlarca sayfalı kurumsal bir site aynı fiyatta olamaz. Kaç sayfa, kaç bölüm ve ne kadar içerik olacağı, işin büyüklüğünü doğrudan belirler." },
        { type: "h2", text: "2. Tasarım: hazır şablon mu, özel mi?" },
        { type: "p", text: "Hazır bir tema ucuzdur ama binlerce site ona benzer. Markanıza özel tasarım daha pahalıdır ama sizi rakiplerinizden ayırır ve daha çok güven verir. Hangisinin size uygun olduğu, işinizin rekabet düzeyine bağlıdır." },
        { type: "h2", text: "3. Özel işlevler" },
        { type: "p", text: "Basit bir iletişim formu ile şunlar çok farklı maliyetlerdir:" },
        { type: "ul", items: ["Çok dilli yapı (her dil ek iş demektir)", "E-ticaret: ürün, sepet, ödeme entegrasyonu", "Üyelik / giriş sistemi", "Rezervasyon, randevu ya da hesaplama araçları", "Yönetim paneli (içeriği kendiniz güncellemek için)"] },
        { type: "h2", text: "4. İçerik: metin ve görseller kimden?" },
        { type: "p", text: "Metinleri ve fotoğrafları siz mi vereceksiniz, yoksa üretilecek mi? İçerik üretimi (metin yazımı, görsel tasarım, fotoğraf) ayrı bir emektir ve fiyata dahil olup olmadığı net olmalıdır." },
        { type: "h2", text: "5. SEO ve performans" },
        { type: "p", text: "Bir sitenin Google'da çıkması ve hızlı açılması kendiliğinden olmaz; teknik SEO, hız optimizasyonu ve doğru altyapı ister. İyi bir teklif bunu standart içerir; ucuz tekliflerde çoğu zaman atlanır ve sonradan sorun çıkarır." },
        { type: "h2", text: "6. Yayın sonrası: bakım ve destek" },
        { type: "p", text: "Site yayına girince iş bitmez. Güncellemeler, küçük değişiklikler ve teknik destek için bir bakım anlaşması olup olmadığını baştan sorun. Bu, uzun vadede en çok fark yaratan kalemlerden biridir." },
        { type: "h2", text: "Peki ne yapmalı?" },
        { type: "p", text: "Fiyat sormadan önce ne istediğinizi netleştirin: kaç sayfa, hangi işlevler, içerik kimden. Sonra birden fazla yerden yazılı teklif alın ve yukarıdaki altı başlığın her birinin teklifte olup olmadığına bakın. En ucuz teklif değil, en net ve dürüst teklif genellikle en doğru seçimdir." },
        { type: "p", text: "Bir web sitesi projesi düşünüyorsanız, ücretsiz ön görüşmede kapsamı ve maliyeti birlikte netleştirebiliriz — gizli kalem olmadan." },
      ],
      en: [
        { type: "p", text: "\"How much is a website?\" has no single answer — much like \"how much is a house?\". The price depends on what you want. But that uncertainty shouldn't lose you when you're reviewing a quote. Once you know the factors that set the price, you can budget correctly and judge whether a quote is fair." },
        { type: "h2", text: "1. Number of pages and scope" },
        { type: "p", text: "A single-page site and a corporate site with dozens of pages can't cost the same. How many pages, sections and how much content directly determine the size of the job." },
        { type: "h2", text: "2. Design: template or custom?" },
        { type: "p", text: "A ready-made theme is cheap, but thousands of sites look like it. A custom design costs more but sets you apart and builds more trust. Which one fits you depends on how competitive your market is." },
        { type: "h2", text: "3. Custom features" },
        { type: "p", text: "A simple contact form and the following are very different costs:" },
        { type: "ul", items: ["Multilingual structure (each language is extra work)", "E-commerce: products, cart, payment integration", "Membership / login system", "Booking, appointment or calculation tools", "Admin panel (so you can update content yourself)"] },
        { type: "h2", text: "4. Content: who provides text and images?" },
        { type: "p", text: "Will you provide the text and photos, or do they need to be created? Content production (copywriting, visual design, photography) is separate work, and whether it's included should be clear." },
        { type: "h2", text: "5. SEO and performance" },
        { type: "p", text: "A site ranking on Google and loading fast doesn't happen by itself; it requires technical SEO, speed optimisation and the right foundation. A good quote includes this as standard; cheap quotes often skip it and it causes problems later." },
        { type: "h2", text: "6. After launch: maintenance and support" },
        { type: "p", text: "The work doesn't end at launch. Ask upfront whether there's a maintenance agreement for updates, small changes and technical support. This is one of the items that makes the biggest difference long-term." },
        { type: "h2", text: "So what should you do?" },
        { type: "p", text: "Before asking for a price, clarify what you want: how many pages, which features, who provides content. Then get written quotes from more than one place and check whether each of the six points above is covered. The clearest and most honest quote — not the cheapest — is usually the right choice." },
        { type: "p", text: "If you're considering a website project, we can clarify scope and cost together in a free consultation — with no hidden items." },
      ],
    },
  },
  {
    slug: "mvp-nedir",
    relatedService: "saas",
    locales: ["tr", "en"],
    date: "2026-09-06",
    readMin: 4,
    category: { tr: "Ürün", en: "Product" },
    title: {
      tr: "MVP nedir ve neden fikrinizi önce küçük başlatmalısınız?",
      en: "What is an MVP, and why you should start your idea small",
    },
    excerpt: {
      tr: "Bir ürünü aylarca geliştirip sonra \"acaba tutar mı?\" demek yerine, MVP ile erken çıkıp gerçek kullanıcıdan öğrenmek neden daha akıllıca?",
      en: "Instead of building for months and then asking \"will it work?\", why is launching early with an MVP and learning from real users smarter?",
    },
    body: {
      tr: [
        { type: "p", text: "Yeni bir ürün fikriniz var ve heyecanlısınız. En doğal istek, aklınızdaki her özelliği baştan koyup \"mükemmel\" versiyonu piyasaya sürmek. Ama deneyimli ürün ekiplerinin çoğu bunu yapmaz — MVP ile başlarlar. İşte nedeni." },
        { type: "h2", text: "MVP tam olarak nedir?" },
        { type: "p", text: "MVP (Minimum Viable Product / Asgari Uygulanabilir Ürün), fikrinizin yalnızca en temel değerini sunan ilk sürümdür. Tüm hayalinizi değil, çekirdeğini içerir. Amaç, ürünü mümkün olan en kısa sürede gerçek kullanıcının eline vermektir." },
        { type: "h2", text: "Neden her şeyi baştan yapmamalı?" },
        { type: "p", text: "Çünkü fikrinizin gerçekten işe yarayıp yaramayacağını, ancak gerçek kullanıcılar kullanınca öğrenirsiniz. Aylarca geliştirdiğiniz onlarca özelliğin yarısını kimse kullanmayabilir. MVP bu riski en aza indirir:" },
        { type: "ul", items: ["Daha az maliyetle başlarsınız", "Fikri erken test eder, yanlış yöne aylar harcamazsınız", "Gerçek kullanıcı geri bildirimiyle doğru özelliklere yatırım yaparsınız", "Pazara daha hızlı çıkarsınız"] },
        { type: "h2", text: "MVP \"kalitesiz\" demek mi?" },
        { type: "p", text: "Hayır — ve bu en sık yapılan yanlış anlama. MVP az özellik içerir ama içerdiği özellikler iyi çalışır ve iyi görünür. \"Minimum\", \"özensiz\" demek değildir; \"gereksizden arınmış\" demektir. İlk izlenim önemlidir, o yüzden MVP de özenli olmalıdır." },
        { type: "h2", text: "Sonra ne olur?" },
        { type: "p", text: "MVP yayına girdikten sonra gerçek veriyle çalışırsınız: hangi özellik kullanılıyor, kullanıcılar nerede takılıyor, ne talep ediyor. Sonraki sürümleri bu verilere göre planlarsınız. Yani ürün, tahminlerle değil, gerçeklerle büyür." },
        { type: "p", text: "Bir SaaS ya da uygulama fikriniz varsa, ücretsiz ön değerlendirmede MVP kapsamını birlikte çıkarabiliriz: hangi özellikler ilk sürüme girmeli, hangileri beklemeli." },
      ],
      en: [
        { type: "p", text: "You have a new product idea and you're excited. The most natural urge is to include every feature you can think of and launch the \"perfect\" version. But most experienced product teams don't do that — they start with an MVP. Here's why." },
        { type: "h2", text: "What exactly is an MVP?" },
        { type: "p", text: "An MVP (Minimum Viable Product) is the first version that delivers only the core value of your idea. It contains the essence, not the whole dream. The goal is to get the product into real users' hands as fast as possible." },
        { type: "h2", text: "Why not build everything upfront?" },
        { type: "p", text: "Because you only learn whether your idea truly works once real users use it. Half of the dozens of features you spent months on may go unused. An MVP minimises that risk:" },
        { type: "ul", items: ["You start at a lower cost", "You test the idea early and don't waste months going the wrong way", "You invest in the right features based on real feedback", "You reach the market faster"] },
        { type: "h2", text: "Does MVP mean \"low quality\"?" },
        { type: "p", text: "No — and this is the most common misunderstanding. An MVP has fewer features, but the features it has work well and look good. \"Minimum\" doesn't mean \"careless\"; it means \"stripped of the unnecessary\". First impressions matter, so an MVP should be polished too." },
        { type: "h2", text: "What happens next?" },
        { type: "p", text: "Once the MVP is live, you work with real data: which feature is used, where users get stuck, what they ask for. You plan the next releases from this data. The product grows on facts, not guesses." },
        { type: "p", text: "If you have a SaaS or app idea, we can map the MVP scope together in a free assessment: which features go in the first release, and which can wait." },
      ],
    },
  },
  {
    slug: "yapay-zeka-kucuk-isletme",
    relatedService: "ai",
    locales: ["tr", "en"],
    date: "2026-09-04",
    readMin: 4,
    category: { tr: "Yapay Zekâ", en: "AI" },
    title: {
      tr: "Yapay zekâ küçük işletmeler için gerçekten işe yarar mı?",
      en: "Does AI actually help small businesses?",
    },
    excerpt: {
      tr: "Yapay zekâ sadece büyük şirketler için değil. Küçük bir işletmenin bugün AI'dan somut olarak nasıl fayda sağlayabileceğini örneklerle anlatıyoruz.",
      en: "AI isn't just for big companies. With concrete examples, we explain how a small business can benefit from AI today.",
    },
    body: {
      tr: [
        { type: "p", text: "Yapay zekâ haberlerde sürekli büyük şirketlerle anılıyor ve bu, birçok küçük işletme sahibine \"bu benim için değil\" hissi veriyor. Oysa AI'ın en pratik faydaları, tam da küçük ekiplerin zamanının kısıtlı olduğu yerlerde ortaya çıkıyor. İşte somut örnekler." },
        { type: "h2", text: "1. Müşteri sorularını otomatik yanıtlama" },
        { type: "p", text: "Aynı soruları her gün cevaplıyorsanız (fiyat, çalışma saati, stok durumu), kendi verinizle eğitilmiş bir asistan bunları sizin yerinize yanıtlayabilir — web sitenizde ya da WhatsApp'ta. Siz sadece gerçekten önemli konulara zaman ayırırsınız." },
        { type: "h2", text: "2. İçerik üretimini hızlandırma" },
        { type: "p", text: "Ürün açıklamaları, sosyal medya metinleri, e-posta taslakları — bunları sıfırdan yazmak yerine AI ile hızlıca taslak çıkarıp düzenleyebilirsiniz. Saatlerce süren iş, dakikalara iner." },
        { type: "h2", text: "3. Belgeleri ve verileri işleme" },
        { type: "p", text: "Faturalar, formlar, PDF'ler... AI bunlardan bilgi çıkarabilir, sınıflandırabilir ve özetleyebilir. Elle veri girişi yapan bir ekibiniz varsa, buradaki zaman kazancı ciddidir." },
        { type: "h2", text: "Nereden başlamalı?" },
        { type: "p", text: "Bütün işinizi bir anda AI'a devretmeye çalışmayın. Bunun yerine tek bir soruyu yanıtlayın: \"Ekibimin en çok zamanını hangi tekrar eden iş alıyor?\" Cevap genellikle otomatikleştirilebilecek ilk şeydir. Küçük bir pilotla başlayıp işe yaradığını görünce genişletmek en sağlıklı yoldur." },
        { type: "p", text: "Hangi işinizi hızlandırabileceğinizden emin değilseniz, ücretsiz ön görüşmede somut bir kullanım alanı birlikte belirleyebiliriz — uymuyorsa bunu da açıkça söyleriz." },
      ],
      en: [
        { type: "p", text: "AI is constantly mentioned alongside big companies in the news, and that gives many small business owners the feeling that \"this isn't for me\". Yet AI's most practical benefits appear exactly where small teams are short on time. Here are concrete examples." },
        { type: "h2", text: "1. Answering customer questions automatically" },
        { type: "p", text: "If you answer the same questions every day (price, opening hours, stock), an assistant trained on your own data can handle them for you — on your website or WhatsApp. You only spend time on what truly matters." },
        { type: "h2", text: "2. Speeding up content production" },
        { type: "p", text: "Product descriptions, social media copy, email drafts — instead of writing from scratch, you can quickly draft and refine with AI. Work that took hours drops to minutes." },
        { type: "h2", text: "3. Processing documents and data" },
        { type: "p", text: "Invoices, forms, PDFs... AI can extract, classify and summarise information from them. If you have a team doing manual data entry, the time saved here is significant." },
        { type: "h2", text: "Where to start?" },
        { type: "p", text: "Don't try to hand your whole business to AI at once. Instead, answer a single question: \"Which repetitive task takes most of my team's time?\" The answer is usually the first thing to automate. Starting with a small pilot and expanding once it works is the healthiest path." },
        { type: "p", text: "If you're not sure which task you could speed up, we can identify a concrete use case together in a free consultation — and if it doesn't fit, we'll say so." },
      ],
    },
  },

  {
    slug: "izmir-web-tasarim-fiyatlari",
    relatedService: "web",
    locales: ["tr"],
    date: "2026-09-07",
    readMin: 5,
    category: { tr: "Web", en: "" },
    title: {
      tr: "İzmir'de web tasarım fiyatları: neye göre değişir?",
      en: "",
    },
    excerpt: {
      tr: "İzmir'de web sitesi yaptırmak isteyenlerin en çok merak ettiği soru: fiyat. Bir teklifin arkasındaki gerçek etkenleri ve doğru bütçeyi nasıl planlayacağınızı anlatıyoruz.",
      en: "",
    },
    body: {
      en: [],
      tr: [
        { type: "p", text: "İzmir'de bir işletme sahibiyseniz ve web sitesi yaptırmayı düşünüyorsanız, aklınızdaki ilk soru büyük ihtimalle şudur: \"Ne kadar tutar?\" Aldığınız teklifler birbirinden çok farklı çıkabilir ve bu kafa karıştırıcıdır. İşte fiyatı belirleyen gerçek etkenler." },
        { type: "h2", text: "Fiyatlar neden bu kadar farklı?" },
        { type: "p", text: "Çünkü \"web sitesi\" tek bir şey değil. Tek sayfalık bir tanıtım sitesiyle, onlarca sayfalı, çok dilli, e-ticaretli bir kurumsal site arasında dağlar kadar fark vardır. Teklifleri karşılaştırmadan önce aşağıdaki etkenleri bilmek işinizi kolaylaştırır." },
        { type: "h2", text: "1. Kapsam ve sayfa sayısı" },
        { type: "p", text: "Tek sayfalık landing, 5 sayfalık kurumsal site, 20 sayfalık büyük kurumsal site — hepsi farklı iş yüküdür. Ne kadar çok sayfa ve içerik, o kadar yüksek maliyet." },
        { type: "h2", text: "2. Hazır tema mı, özel tasarım mı?" },
        { type: "p", text: "Hazır bir şablon ucuzdur ama binlerce siteye benzer. Markanıza özel tasarım daha pahalıdır ama sizi rakiplerinizden ayırır. İzmir gibi rekabetin yoğun olduğu bir pazarda, özel tasarım çoğu zaman kendini amorti eder." },
        { type: "h2", text: "3. Özel işlevler" },
        { type: "p", text: "Temel fiyatın üstüne, her özel işlev maliyeti artırır:" },
        { type: "ul", items: ["Çok dilli yapı (Türkçe, İngilizce, ihtiyaca göre başka diller)", "E-ticaret: ürün, sepet, online ödeme", "Randevu / rezervasyon sistemi", "Kendi içeriğinizi güncelleyebileceğiniz yönetim paneli"] },
        { type: "h2", text: "4. SEO ve hız" },
        { type: "p", text: "Sitenin Google'da çıkması ve hızlı açılması kendiliğinden olmaz. Teknik SEO ve performans, iyi bir teklife dahil olmalıdır. Ucuz tekliflerde bunlar genellikle atlanır ve sonradan \"neden Google'da çıkmıyorum?\" derdine dönüşür." },
        { type: "h2", text: "5. Yayın sonrası bakım" },
        { type: "p", text: "Site yayına girince iş bitmez. Güncelleme, küçük değişiklik ve teknik destek için bir anlaşma olup olmadığını baştan sorun. Ucuz tekliflerin çoğu burada eksik kalır." },
        { type: "h2", text: "İzmir için gerçekçi bir bakış" },
        { type: "p", text: "Kaba bir rehber: sade ama profesyonel bir kurumsal site birkaç yüz eurodan (ya da TL karşılığından) başlar; özel tasarımlı, çok sayfalı veya çok dilli, SEO'lu bir site daha yukarıdadır; e-ticaret ve özel işlevler fiyatı daha da artırır. Doğru soru \"en ucuz hangisi?\" değil, \"bana gerçekten ne lazım ve teklif bunu net anlatıyor mu?\" olmalı." },
        { type: "p", text: "İzmir merkezliyiz ama Türkiye'nin her yerinden müşteriyle çalışıyoruz. Bir web sitesi düşünüyorsanız, ücretsiz ön görüşmede kapsamı ve maliyeti birlikte netleştirebiliriz — gizli kalem olmadan." },
      ],
    },
  },
  {
    slug: "kobi-dijital-donusum",
    relatedService: "ai",
    locales: ["tr"],
    date: "2026-09-05",
    readMin: 5,
    category: { tr: "Dijital", en: "" },
    title: {
      tr: "KOBİ'ler için dijital dönüşüm: nereden başlamalı?",
      en: "",
    },
    excerpt: {
      tr: "Dijital dönüşüm büyük şirketlere özel bir şey değil. Küçük ve orta ölçekli bir işletmenin bugün somut olarak atabileceği adımları, karmaşaya boğulmadan anlatıyoruz.",
      en: "",
    },
    body: {
      en: [],
      tr: [
        { type: "p", text: "\"Dijital dönüşüm\" kulağa büyük şirketlere özel, pahalı ve karmaşık bir şey gibi geliyor. Oysa küçük ve orta ölçekli bir işletme için dijital dönüşüm, aslında birkaç somut ve ulaşılabilir adımdan ibarettir. Amacı da tek: daha az emekle daha çok iş yapmak ve müşteriye daha kolay ulaşmak." },
        { type: "h2", text: "Dijital dönüşüm aslında ne demek?" },
        { type: "p", text: "Karmaşık tanımları bir kenara bırakalım: işinizin elle, kağıtla ya da dağınık şekilde yürüyen kısımlarını, dijital araçlarla daha hızlı ve düzenli hale getirmektir. Hepsini bir anda değil, en çok zaman kaybettiğiniz yerden başlayarak." },
        { type: "h2", text: "1. Görünürlük: sizi bulabiliyorlar mı?" },
        { type: "p", text: "İlk adım genellikle profesyonel bir web sitesi ve Google'da bulunabilirliktir. Müşteri sizi ararken bulamıyorsa, en iyi ürün bile satılmaz. Web sitesi + Google Business Profili, en yüksek etkili ilk yatırımdır." },
        { type: "h2", text: "2. Süreçleri otomatikleştirme" },
        { type: "p", text: "Her gün tekrar eden işler — randevu takibi, sipariş kaydı, müşteri sorularına aynı cevaplar — otomatikleştirilebilir. Bu, hem zaman kazandırır hem hata azaltır. Küçük bir başlangıç bile büyük fark yaratır." },
        { type: "h2", text: "3. Müşteri iletişimini dijitalleştirme" },
        { type: "p", text: "WhatsApp, e-posta, sosyal medya — müşterinizin olduğu yerde olmak. Düzenli ve profesyonel bir iletişim, güven ve tekrar eden müşteri demektir." },
        { type: "h2", text: "4. Veriyle karar verme" },
        { type: "p", text: "Sitenize kim geliyor, nereden geliyor, ne arıyor? Basit analiz araçları (örneğin Google Analytics) bu soruların cevabını verir. Tahminle değil, gerçek veriyle karar vermek, kaynağınızı doğru yere ayırmanızı sağlar." },
        { type: "h2", text: "Nereden başlamalı?" },
        { type: "p", text: "Hepsini birden yapmaya çalışmayın. Tek bir soruyla başlayın: \"İşimde en çok zamanımı ne alıyor ya da en çok müşteriyi nerede kaybediyorum?\" Cevap, ilk dijital adımınızın ne olması gerektiğini söyler. Küçük başlayıp işe yaradığını görünce büyütmek en sağlıklı yoldur." },
        { type: "p", text: "İşletmeniz için dijital dönüşümün nereden başlaması gerektiğinden emin değilseniz, ücretsiz ön görüşmede birlikte en yüksek etkili ilk adımı belirleyebiliriz." },
      ],
    },
  },

];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Belirli bir dilde yayınlanan yazılar (tarihe göre yeni→eski). */
export function postsForLocale(locale: Locale) {
  return posts
    .filter((p) => p.locales.includes(locale))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Bir yazının belirli dilde yayınlanıp yayınlanmadığı. */
export function postInLocale(slug: string, locale: Locale) {
  const p = findPost(slug);
  return p ? p.locales.includes(locale) : false;
}
