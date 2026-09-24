import type { ServiceContent } from "@/components/service-page";

const alternates = {
  tr: "/yapay-zeka",
  en: "/en/ai-solutions",
} as const;

export const aiTR: ServiceContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Yapay Zekâ Çözümleri ve AI Otomasyon — İşletmeler İçin",
    description:
      "İşletmeler için yapay zekâ çözümleri: AI ajanları, sohbet asistanları, iş süreçleri otomasyonu ve mevcut yazılımlara AI entegrasyonu. Türkiye geneli ve yurt dışı, uzaktan.",
    keywords: [
      "yapay zeka çözümleri",
      "AI otomasyon",
      "AI ajan geliştirme",
      "yapay zeka entegrasyonu",
      "chatbot geliştirme",
      "iş süreçleri otomasyonu",
      "yapay zeka yazılım firması",
    ],
  },
  eyebrow: "Yapay Zekâ",
  h1: ["Yapay zekâyı", "işinizin içine kuruyoruz."],
  lead: "WoodstoneStudio, işletmeler için yapay zekâ çözümleri geliştiren bir dijital teknoloji stüdyosudur. Sohbet asistanları, belirli görevleri yürüten AI ajanları ve tekrar eden işleri ortadan kaldıran otomasyonlar kuruyor; bunları mevcut yazılımlarınıza ve süreçlerinize entegre ediyoruz. Kendi ürünlerimizde AI'ı üretimde kullanıyoruz.",
  ctaPrimary: "Ücretsiz Ön Görüşme",
  ctaSecondary: "Çalışmaları Görün",
  scopeTitle: ["Neler", "yapıyoruz?"],
  scopeLead: "Yapay zekâ bir gösteri değil, bir araçtır. Somut bir iş problemini çözdüğünde değerlidir — biz oradan başlıyoruz.",
  scope: [
    { title: "AI sohbet asistanları", desc: "Müşteri sorularını yanıtlayan, siparişe yönlendiren ya da iç ekibe destek olan, kendi verinizle eğitilmiş asistanlar." },
    { title: "AI ajanları", desc: "Belirli bir görevi baştan sona yürüten ajanlar: veri toplama, rapor hazırlama, e-posta sınıflandırma, içerik üretimi." },
    { title: "İş süreçleri otomasyonu", desc: "Tekrar eden manuel işleri otomatikleştiriyoruz; bir adım bitince sıradaki kendiliğinden başlar." },
    { title: "Mevcut yazılıma AI entegrasyonu", desc: "Kullandığınız uygulamaya ya da web sitesine yapay zekâ özellikleri ekliyoruz — sıfırdan yazmadan." },
    { title: "Görsel ve belge analizi", desc: "Fotoğraf, belge ve PDF'lerden bilgi çıkaran, sınıflandıran ve özetleyen çözümler." },
    { title: "AI destekli ürünler", desc: "Yapay zekâyı merkezine alan yeni web ve mobil ürünleri fikirden yayına geliştiriyoruz." },
  ],
  processTitle: ["Nasıl", "çalışıyoruz?"],
  process: [
    { step: "01", title: "Problem tanımı", desc: "Hangi işin, ne kadar zaman ya da maliyet yarattığını netleştiriyoruz. Ücretsiz." },
    { step: "02", title: "Pilot", desc: "Küçük bir kapsamda çalışan bir prototip kurup gerçek veriyle test ediyoruz." },
    { step: "03", title: "Entegrasyon", desc: "Çözümü mevcut sistemlerinize ve ekibinizin akışına bağlıyoruz." },
    { step: "04", title: "Yaygınlaştırma", desc: "Sonuçları ölçüyor, kapsamı genişletiyor ve bakımını sürdürüyoruz." },
  ],
  faqTitle: ["Sık sorulan", "sorular."],
  faq: [
    { q: "Yapay zekâ benim işime gerçekten uyar mı?", a: "Tekrar eden, kural tabanlı ya da metin/görsel işleyen her iş için büyük ihtimalle evet. Ön görüşmede somut bir kullanım alanı belirliyoruz; uymuyorsa bunu açıkça söylüyoruz." },
    { q: "Hangi AI modellerini kullanıyorsunuz?", a: "İhtiyaca göre OpenAI, Anthropic ve Google modellerini kullanıyoruz; gerektiğinde kendi verinizle özelleştiriyoruz." },
    { q: "Verilerim güvende olur mu?", a: "Evet. Veri işleme kurallarını baştan belirliyor, hassas verinin nasıl saklanıp işleneceğini sizinle netleştiriyoruz." },
    { q: "Mevcut yazılımıma eklenebilir mi?", a: "Evet. Çoğu durumda sıfırdan yazmaya gerek kalmadan, kullandığınız sisteme AI özellikleri entegre ediyoruz." },
    { q: "Bir AI projesi ne kadar sürer?", a: "Küçük bir pilot 2–4 hafta; tam entegrasyon kapsama göre 1–3 ay. Ön görüşmede net bir takvim veriyoruz." },
    { q: "Maliyeti nasıl belirleniyor?", a: "Kapsama ve entegrasyon derinliğine göre yazılı teklif hazırlıyoruz; model kullanım maliyetlerini de şeffaf şekilde paylaşıyoruz." },
  ],
  closingTitle: ["Yapay zekâ fikriniz için", "konuşalım."],
  closingLead: "Hangi işi hızlandırmak istediğinizi anlatın; ücretsiz ön görüşmede somut bir kullanım alanı ve yol haritası çıkaralım.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
  serviceType: "Yapay zekâ çözümleri ve AI otomasyon",
  areaServed: "Türkiye, Avrupa ve dünya geneli",
  guideEyebrow: "Yapay zekâ rehberi",
  guide: [
    {
      h: "İşletmede yapay zekâ nerede gerçekten işe yarar?",
      p: [
        "Yapay zekâ en çok, bugün insanların tekrar tekrar yaptığı ve metin, belge ya da görselle ilgili işlerde değer üretir. Genel kural şu: iş sık tekrarlanıyorsa, belirli bir kalıbı varsa ve hatası tolere edilebilir ya da kontrol edilebilirse, yapay zekâ için iyi bir adaydır.",
      ],
      ul: [
        "Müşteri sorularına ilk yanıt ve doğru kişiye yönlendirme",
        "Gelen e-posta, form ve taleplerin sınıflandırılması",
        "Fatura, sözleşme ve belgelerden bilgi çıkarma",
        "Rapor, özet ve ilk taslak içerik üretimi",
        "Ürün açıklamaları, çeviriler ve katalog düzenleme",
      ],
    },
    {
      h: "Chatbot, AI ajanı ve otomasyon arasındaki fark",
      p: [
        "Chatbot bir soruya yanıt verir. AI ajanı ise bir hedef için birden fazla adımı kendisi yürütür: veriyi toplar, karar verir, başka bir sisteme yazar. Otomasyon da kuralları önceden belli olan akışları insan müdahalesi olmadan çalıştırır.",
        "Çoğu işletme için doğru çözüm bunların birleşimidir: kurallı kısımlar klasik otomasyonla, yorum gerektiren kısımlar yapay zekâyla yapılır. Her şeyi yapay zekâya bırakmak hem pahalı hem de gereksiz olabilir.",
      ],
    },
    {
      h: "Kendi verinizle çalışan asistanlar",
      p: [
        "Genel bir sohbet modeli sizin ürünlerinizi, fiyat politikanızı ya da iç prosedürlerinizi bilmez. Asistanın sizin verinizle doğru yanıt vermesi için dokümanlarınız, sık sorulan sorularınız ve ürün bilgileriniz modele güvenli şekilde bağlanır.",
        "Bunun iyi kurulmuş hali, asistanın yanıtı hangi kaynaktan aldığını gösterebilmesi ve bilmediği konuda uydurmak yerine 'bilmiyorum' deyip bir insana yönlendirebilmesidir.",
      ],
    },
    {
      h: "Veri gizliliği ve güvenlik",
      p: [
        "Yapay zekâ projelerinde ilk sorulması gereken soru, hangi verinin nereye gittiğidir. Kişisel ve hassas veriler için şu kararlar baştan netleşmelidir:",
      ],
      ul: [
        "Hangi veriler modele gönderilecek, hangileri asla gönderilmeyecek",
        "Verinin nerede saklanacağı ve ne kadar tutulacağı",
        "Sağlayıcının veriyi model eğitiminde kullanıp kullanmadığı",
        "KVKK ve GDPR yükümlülüklerinin nasıl karşılanacağı",
      ],
    },
    {
      h: "Maliyeti ne belirler?",
      p: [
        "Bir yapay zekâ çözümünün maliyeti iki parçadan oluşur: bir kerelik geliştirme ve kullanım başına ödenen model ücreti. Model ücreti işlem hacmine, seçilen modele ve her istekte işlenen metin miktarına bağlıdır.",
        "Bu yüzden pilot aşamasında gerçek veriyle ölçüm yapıyor, aylık kullanım maliyetini tahmin değil hesap olarak paylaşıyoruz. Çoğu zaman her iş için en büyük modele ihtiyaç yoktur; doğru model seçimi maliyeti belirgin şekilde düşürür.",
      ],
    },
    {
      h: "Küçük başlayın: pilot yaklaşımı",
      p: [
        "Tek seferde tüm şirketi dönüştürmeye çalışmak yerine, net ölçülebilir tek bir işle başlamak en sağlıklısıdır. Pilot gerçek veriyle çalışır, sonucu ölçülür, işe yarıyorsa yaygınlaştırılır. Hangi sorun için hangi yaklaşımın uygun olduğunu 'Yapay zekâ uygulamaları' yazımızda ayrıntılı anlattık.",
      ],
    },
  ],
  relatedTitle: "İlgili hizmetler ve yazılar",
  related: [
    { label: "Yapay zekâ uygulamaları: hangi sorun için hangi teknoloji?", href: "/blog/yapay-zeka-uygulamalari" },
    { label: "Yapay zekâ küçük işletmelere yarar mı?", href: "/blog/yapay-zeka-kucuk-isletme" },
    { label: "SaaS ve MVP geliştirme", href: "/saas-gelistirme" },
    { label: "Mobil uygulama", href: "/mobil-uygulama" },
  ],
};

export const aiEN: ServiceContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "AI Solutions & Automation for Businesses",
    description:
      "AI solutions for businesses: AI agents, chat assistants, business process automation and AI integration into existing software. Remote-first studio working worldwide.",
    keywords: [
      "AI solutions for business",
      "AI automation",
      "AI agent development",
      "AI integration",
      "chatbot development",
      "business process automation",
      "AI development studio",
    ],
  },
  eyebrow: "AI Solutions",
  h1: ["We build AI", "into your business."],
  lead: "WoodstoneStudio is a digital technology studio building AI solutions for businesses. Chat assistants, task-running AI agents and automations that remove repetitive work — integrated into your existing software and processes. We run AI in production in our own products.",
  ctaPrimary: "Free Consultation",
  ctaSecondary: "See Our Work",
  scopeTitle: ["What we", "do."],
  scopeLead: "AI is a tool, not a show. It's valuable when it solves a concrete business problem — that's where we start.",
  scope: [
    { title: "AI chat assistants", desc: "Assistants trained on your own data that answer customer questions, guide orders or support your internal team." },
    { title: "AI agents", desc: "Agents that run a specific task end to end: data collection, report generation, email triage, content production." },
    { title: "Business process automation", desc: "We automate repetitive manual work; when one step finishes, the next starts on its own." },
    { title: "AI integration into existing software", desc: "We add AI features to the app or website you already use — without rewriting from scratch." },
    { title: "Image & document analysis", desc: "Solutions that extract, classify and summarise information from photos, documents and PDFs." },
    { title: "AI-powered products", desc: "New web and mobile products with AI at the core, built from idea to launch." },
  ],
  processTitle: ["How we", "work."],
  process: [
    { step: "01", title: "Problem definition", desc: "We pin down which task costs you time or money. Free." },
    { step: "02", title: "Pilot", desc: "A working prototype on a small scope, tested with real data." },
    { step: "03", title: "Integration", desc: "We connect the solution to your existing systems and your team's workflow." },
    { step: "04", title: "Roll-out", desc: "We measure results, expand the scope and keep it maintained." },
  ],
  faqTitle: ["Frequently asked", "questions."],
  faq: [
    { q: "Does AI really fit my business?", a: "For any repetitive, rule-based or text/image-heavy task, most likely yes. At the consultation we identify a concrete use case — and if it doesn't fit, we say so." },
    { q: "Which AI models do you use?", a: "Depending on the need, models from OpenAI, Anthropic and Google, customised with your own data where required." },
    { q: "Is my data safe?", a: "Yes. We define data-handling rules from the start and agree with you how sensitive data is stored and processed." },
    { q: "Can it be added to my existing software?", a: "Yes. In most cases we integrate AI features into the system you already use, without a rewrite." },
    { q: "How long does an AI project take?", a: "A small pilot 2–4 weeks; full integration 1–3 months depending on scope. We give a clear timeline at the consultation." },
    { q: "How is it priced?", a: "A written quote based on scope and integration depth; we also share model usage costs transparently." },
  ],
  closingTitle: ["Let's talk about", "your AI idea."],
  closingLead: "Tell us which task you want to speed up; in a free consultation we'll map a concrete use case and a roadmap.",
  closingCta: "Get in Touch",
  backLabel: "Home",
  serviceType: "AI solutions and automation",
  areaServed: "Worldwide",
  guideEyebrow: "AI guide",
  guide: [
    {
      h: "Where does AI actually help a business?",
      p: [
        "AI creates the most value in work people repeat every day, especially work involving text, documents or images. A useful rule: if a task is frequent, follows a pattern and its errors can be tolerated or reviewed, it is a good candidate for AI.",
      ],
      ul: [
        "First responses to customer questions and routing to the right person",
        "Classifying incoming emails, forms and requests",
        "Extracting information from invoices, contracts and documents",
        "Reports, summaries and first-draft content",
        "Product descriptions, translations and catalogue clean-up",
      ],
    },
    {
      h: "Chatbot, AI agent and automation: what's the difference?",
      p: [
        "A chatbot answers a question. An AI agent carries out several steps towards a goal on its own: it gathers data, makes a decision and writes to another system. Automation runs flows whose rules are known in advance, without human input.",
        "For most businesses the right solution combines them: rule-based parts are handled by classic automation, parts that need judgement by AI. Handing everything to AI can be both expensive and unnecessary.",
      ],
    },
    {
      h: "Assistants that work with your own data",
      p: [
        "A general chat model doesn't know your products, pricing policy or internal procedures. To answer correctly, the assistant is securely connected to your documents, FAQs and product data.",
        "Done well, the assistant can show which source an answer came from, and when it doesn't know, it says so and hands over to a person instead of making something up.",
      ],
    },
    {
      h: "Data privacy and security",
      p: [
        "The first question in any AI project is which data goes where. For personal and sensitive data these decisions must be clear from the start:",
      ],
      ul: [
        "Which data is sent to the model, and which never is",
        "Where data is stored and for how long",
        "Whether the provider uses the data to train its models",
        "How GDPR and local privacy obligations are met",
      ],
    },
    {
      h: "What drives the cost?",
      p: [
        "An AI solution has two cost components: one-off development and the per-use model fee. The model fee depends on volume, the model chosen and how much text each request processes.",
        "That's why we measure with real data during the pilot and share the monthly usage cost as a calculation, not a guess. Not every task needs the largest model; choosing the right one lowers cost noticeably.",
      ],
    },
    {
      h: "Start small: the pilot approach",
      p: [
        "Rather than trying to transform the whole company at once, it's healthiest to start with one clearly measurable task. The pilot runs on real data, results are measured and, if it works, it is rolled out. We cover which approach fits which problem in our post \"AI Applications: Which Technology for Which Problem?\".",
      ],
    },
  ],
  relatedTitle: "Related services and articles",
  related: [
    { label: "AI applications: which technology for which problem?", href: "/en/blog/yapay-zeka-uygulamalari" },
    { label: "Does AI actually help small businesses?", href: "/en/blog/yapay-zeka-kucuk-isletme" },
    { label: "SaaS & MVP development", href: "/en/saas-development" },
    { label: "Mobile apps", href: "/en/mobile-apps" },
  ],
};

