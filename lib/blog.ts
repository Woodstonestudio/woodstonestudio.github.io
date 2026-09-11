import type { Locale } from "@/components/service-page";

export type BlogPost = {
  slug: string; // dil-bağımsız kısa kimlik (URL'de dile göre önek eklenir)
  locales: Locale[]; // bu yazının yayınlandığı diller (pazar hedefli içerik için)
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
  sq: "/sq/blog",
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
  sq: {
    eyebrow: "Blog",
    title: ["Shënime mbi softuerin,", "produktin dhe dixhitalen."],
    lead: "Shkrime të qarta dhe të dobishme mbi web, mobile, AI dhe zhvillimin e produkteve. Ndajmë përvojën tonë dhe atë që mësojmë.",
    readSuffix: "min lexim",
    back: "Të gjitha shkrimet",
    allPosts: "Faqja kryesore",
  },
};

// ─────────────────────────────────────────────────────────────
// YAZILAR
// ─────────────────────────────────────────────────────────────

export const posts: BlogPost[] = [
  {
    slug: "web-sitesi-maliyeti",
    locales: ["tr", "en", "sq"],
    date: "2026-09-08",
    readMin: 5,
    category: { tr: "Web", en: "Web", sq: "Web" },
    title: {
      tr: "Web sitesi yaptırmak ne kadar tutar? Fiyatı belirleyen 6 etken",
      en: "How much does a website cost? The 6 factors that set the price",
      sq: "Sa kushton një faqe interneti? 6 faktorët që përcaktojnë çmimin",
    },
    excerpt: {
      tr: "Web sitesi fiyatları neden bu kadar değişken? Bir teklifin arkasındaki gerçek etkenleri ve bütçenizi nasıl doğru planlayacağınızı açıklıyoruz.",
      en: "Why do website prices vary so much? We explain the real factors behind a quote and how to plan your budget correctly.",
      sq: "Pse ndryshojnë kaq shumë çmimet e faqeve? Shpjegojmë faktorët realë pas një oferte dhe si të planifikoni saktë buxhetin.",
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
      sq: [
        { type: "p", text: "\"Sa kushton një faqe interneti?\" nuk ka një përgjigje të vetme — ashtu si \"sa kushton një shtëpi?\". Çmimi varet nga çfarë doni. Por kjo pasiguri nuk duhet t'ju humbasë kur shqyrtoni një ofertë. Kur i njihni faktorët që përcaktojnë çmimin, mund të planifikoni saktë buxhetin dhe të gjykoni nëse një ofertë është e drejtë." },
        { type: "h2", text: "1. Numri i faqeve dhe fushëveprimi" },
        { type: "p", text: "Një faqe e vetme dhe një faqe korporative me dhjetëra faqe nuk mund të kushtojnë njësoj. Sa faqe, sa seksione dhe sa përmbajtje përcaktojnë drejtpërdrejt madhësinë e punës." },
        { type: "h2", text: "2. Dizajni: shabllon apo i personalizuar?" },
        { type: "p", text: "Një temë e gatshme është e lirë, por mijëra faqe i ngjajnë. Një dizajn i personalizuar kushton më shumë, por ju dallon dhe ndërton më shumë besim. Cili ju përshtatet varet nga sa konkurrues është tregu juaj." },
        { type: "h2", text: "3. Funksionet e veçanta" },
        { type: "p", text: "Një formular i thjeshtë kontakti dhe këto janë kosto shumë të ndryshme:" },
        { type: "ul", items: ["Strukturë shumëgjuhëshe (çdo gjuhë është punë shtesë)", "E-commerce: produkte, shportë, integrim pagese", "Sistem anëtarësimi / hyrjeje", "Mjete rezervimi, termini ose llogaritjeje", "Panel administrimi (që ta përditësoni vetë përmbajtjen)"] },
        { type: "h2", text: "4. Përmbajtja: kush jep tekstin dhe imazhet?" },
        { type: "p", text: "A do t'i jepni ju tekstet dhe fotot, apo duhet të krijohen? Prodhimi i përmbajtjes (shkrimi, dizajni vizual, fotografia) është punë e veçantë, dhe duhet të jetë e qartë nëse përfshihet." },
        { type: "h2", text: "5. SEO dhe performanca" },
        { type: "p", text: "Që një faqe të dalë në Google dhe të ngarkohet shpejt nuk ndodh vetvetiu; kërkon SEO teknike, optimizim shpejtësie dhe bazën e duhur. Një ofertë e mirë e përfshin këtë si standard; ofertat e lira shpesh e anashkalojnë dhe shkakton probleme më vonë." },
        { type: "h2", text: "6. Pas publikimit: mirëmbajtja dhe mbështetja" },
        { type: "p", text: "Puna nuk mbaron me publikimin. Pyesni që në fillim nëse ka një marrëveshje mirëmbajtjeje për përditësime, ndryshime të vogla dhe mbështetje teknike. Ky është një nga zërat që bën diferencën më të madhe afatgjatë." },
        { type: "h2", text: "Atëherë çfarë të bëni?" },
        { type: "p", text: "Para se të kërkoni çmim, qartësoni çfarë doni: sa faqe, cilat funksione, kush jep përmbajtjen. Pastaj merrni oferta me shkrim nga më shumë se një vend dhe kontrolloni nëse secili nga gjashtë pikat më sipër është përfshirë. Oferta më e qartë dhe më e ndershme — jo më e lira — zakonisht është zgjedhja e duhur." },
        { type: "p", text: "Nëse po mendoni për një projekt faqeje interneti, mund të qartësojmë fushëveprimin dhe koston së bashku në një konsultë falas — pa zëra të fshehur." },
      ],
    },
  },
  {
    slug: "mvp-nedir",
    locales: ["tr", "en", "sq"],
    date: "2026-09-06",
    readMin: 4,
    category: { tr: "Ürün", en: "Product", sq: "Produkt" },
    title: {
      tr: "MVP nedir ve neden fikrinizi önce küçük başlatmalısınız?",
      en: "What is an MVP, and why you should start your idea small",
      sq: "Çfarë është një MVP dhe pse duhet ta nisni idenë tuaj të vogël",
    },
    excerpt: {
      tr: "Bir ürünü aylarca geliştirip sonra \"acaba tutar mı?\" demek yerine, MVP ile erken çıkıp gerçek kullanıcıdan öğrenmek neden daha akıllıca?",
      en: "Instead of building for months and then asking \"will it work?\", why is launching early with an MVP and learning from real users smarter?",
      sq: "Në vend që të ndërtoni për muaj e pastaj të pyesni \"a do të funksionojë?\", pse është më e zgjuar të dilni herët me një MVP?",
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
      sq: [
        { type: "p", text: "Keni një ide të re produkti dhe jeni të entuziazmuar. Dëshira më e natyrshme është të përfshini çdo veçori që mendoni dhe të nxirrni versionin \"perfekt\". Por shumica e ekipeve me përvojë nuk e bëjnë këtë — nisin me një MVP. Ja pse." },
        { type: "h2", text: "Çfarë është saktësisht një MVP?" },
        { type: "p", text: "Një MVP (Minimum Viable Product) është versioni i parë që ofron vetëm vlerën thelbësore të idesë suaj. Përmban thelbin, jo të gjithë ëndrrën. Qëllimi është ta çoni produktin te përdoruesit realë sa më shpejt." },
        { type: "h2", text: "Pse të mos ndërtohet gjithçka që në fillim?" },
        { type: "p", text: "Sepse mësoni nëse ideja juaj funksionon vërtet vetëm kur e përdorin përdoruesit realë. Gjysma e dhjetëra veçorive që i ndërtuat për muaj mund të mbeten të papërdorura. Një MVP e minimizon këtë rrezik:" },
        { type: "ul", items: ["Filloni me kosto më të ulët", "E testoni idenë herët dhe nuk humbni muaj në drejtimin e gabuar", "Investoni në veçoritë e duhura bazuar në reagime reale", "Arrini tregun më shpejt"] },
        { type: "h2", text: "A do të thotë MVP \"cilësi e ulët\"?" },
        { type: "p", text: "Jo — dhe ky është keqkuptimi më i shpeshtë. Një MVP ka më pak veçori, por ato që ka funksionojnë mirë dhe duken mirë. \"Minimum\" nuk do të thotë \"i pakujdesshëm\"; do të thotë \"i pastruar nga e panevojshmja\". Përshtypja e parë ka rëndësi, ndaj edhe një MVP duhet të jetë i kujdesshëm." },
        { type: "h2", text: "Çfarë ndodh më pas?" },
        { type: "p", text: "Kur MVP është live, punoni me të dhëna reale: cila veçori përdoret, ku ngecin përdoruesit, çfarë kërkojnë. Versionet e ardhshme i planifikoni nga këto të dhëna. Produkti rritet mbi fakte, jo mbi hamendje." },
        { type: "p", text: "Nëse keni një ide SaaS ose aplikacioni, mund të hartojmë së bashku fushëveprimin e MVP-së në një vlerësim falas: cilat veçori hyjnë në versionin e parë dhe cilat mund të presin." },
      ],
    },
  },
  {
    slug: "yapay-zeka-kucuk-isletme",
    locales: ["tr", "en", "sq"],
    date: "2026-09-04",
    readMin: 4,
    category: { tr: "Yapay Zekâ", en: "AI", sq: "Inteligjencë Artificiale" },
    title: {
      tr: "Yapay zekâ küçük işletmeler için gerçekten işe yarar mı?",
      en: "Does AI actually help small businesses?",
      sq: "A ndihmon vërtet inteligjenca artificiale bizneset e vogla?",
    },
    excerpt: {
      tr: "Yapay zekâ sadece büyük şirketler için değil. Küçük bir işletmenin bugün AI'dan somut olarak nasıl fayda sağlayabileceğini örneklerle anlatıyoruz.",
      en: "AI isn't just for big companies. With concrete examples, we explain how a small business can benefit from AI today.",
      sq: "AI nuk është vetëm për kompanitë e mëdha. Me shembuj konkretë shpjegojmë si mund të përfitojë sot një biznes i vogël nga AI.",
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
      sq: [
        { type: "p", text: "AI përmendet vazhdimisht krahas kompanive të mëdha në lajme, dhe kjo u jep shumë pronarëve të bizneseve të vogla ndjesinë se \"kjo nuk është për mua\". Megjithatë, përfitimet më praktike të AI shfaqen pikërisht aty ku ekipet e vogla kanë pak kohë. Ja disa shembuj konkretë." },
        { type: "h2", text: "1. Përgjigje automatike ndaj pyetjeve të klientëve" },
        { type: "p", text: "Nëse u përgjigjeni të njëjtave pyetje çdo ditë (çmimi, oraret, stoku), një asistent i trajnuar me të dhënat tuaja mund t'i trajtojë ato për ju — në faqen tuaj ose në WhatsApp. Ju kushtoni kohë vetëm asaj që ka vërtet rëndësi." },
        { type: "h2", text: "2. Përshpejtimi i prodhimit të përmbajtjes" },
        { type: "p", text: "Përshkrime produktesh, tekste për rrjete sociale, drafte emailesh — në vend që t'i shkruani nga zero, mund të draftoni dhe përmirësoni shpejt me AI. Puna që zgjaste orë bie në minuta." },
        { type: "h2", text: "3. Përpunimi i dokumenteve dhe të dhënave" },
        { type: "p", text: "Fatura, formularë, PDF... AI mund të nxjerrë, klasifikojë dhe përmbledhë informacion prej tyre. Nëse keni një ekip që bën futje manuale të të dhënave, kursimi i kohës këtu është i konsiderueshëm." },
        { type: "h2", text: "Nga të fillohet?" },
        { type: "p", text: "Mos u përpiqni t'ia dorëzoni gjithë biznesin AI-t menjëherë. Në vend të kësaj, përgjigjuni një pyetjeje: \"Cila detyrë e përsëritur i merr më shumë kohë ekipit tim?\" Përgjigjja zakonisht është gjëja e parë për t'u automatizuar. Të nisësh me një pilot të vogël dhe të zgjerosh kur funksionon është rruga më e shëndetshme." },
        { type: "p", text: "Nëse nuk jeni të sigurt cilën detyrë mund ta përshpejtoni, mund të përcaktojmë së bashku një rast konkret përdorimi në një konsultë falas — dhe nëse nuk përshtatet, ua themi hapur." },
      ],
    },
  },
  {
    slug: "faqe-interneti-shqiperi-cmimi",
    locales: ["sq", "en"],
    date: "2026-09-10",
    readMin: 6,
    category: { tr: "Web", en: "Web", sq: "Web" },
    title: {
      tr: "Faqe interneti në Shqipëri: sa kushton?",
      en: "How much does a website cost in Albania?",
      sq: "Sa kushton një faqe interneti në Shqipëri?",
    },
    excerpt: {
      tr: "",
      en: "What does a website really cost in Albania, and what drives the price? A clear, honest guide for businesses in Tirana, Durrës and beyond.",
      sq: "Sa kushton vërtet një faqe interneti në Shqipëri dhe çfarë e përcakton çmimin? Një udhëzues i qartë dhe i ndershëm për bizneset në Tiranë, Durrës dhe më gjerë.",
    },
    body: {
      tr: [],
      en: [
        { type: "p", text: "\"How much does a website cost?\" is one of the most common questions from business owners in Albania — and it rarely gets a straight answer. Prices in Tirana and beyond range from a few hundred euros to several thousand, and that spread confuses everyone. Here is an honest breakdown of what actually sets the price." },
        { type: "h2", text: "Why prices vary so much" },
        { type: "p", text: "A website is not a single product; it's a range. A one-page site for a small shop and a multi-page corporate site with online booking are simply different amounts of work. Before comparing quotes, it helps to know the factors below." },
        { type: "h2", text: "1. Scope and number of pages" },
        { type: "p", text: "A landing page, a 5-page business site and a 20-page corporate site are very different jobs. The more pages, sections and content, the higher the cost." },
        { type: "h2", text: "2. Template vs custom design" },
        { type: "p", text: "A ready-made theme is cheap but looks like thousands of others. A custom design costs more but sets your brand apart — which matters if you compete for customers online." },
        { type: "h2", text: "3. Features" },
        { type: "p", text: "The base price rises with each custom feature:" },
        { type: "ul", items: ["Multiple languages (Albanian, English, Italian…)", "E-commerce: products, cart, online payment", "Booking or appointment system", "Admin panel to update content yourself"] },
        { type: "h2", text: "4. SEO and speed" },
        { type: "p", text: "A site that shows up on Google and loads fast doesn't happen by accident. Technical SEO and performance should be part of the price — cheap builds usually skip them and cost you later." },
        { type: "h2", text: "5. Maintenance after launch" },
        { type: "p", text: "Ask whether updates, small changes and support are included after launch. This is where many cheap offers fall short." },
        { type: "h2", text: "So, a realistic range for Albania" },
        { type: "p", text: "As a rough guide: a simple, professional business site typically starts in the low hundreds of euros; a custom, multi-page or multilingual site with SEO runs higher; e-commerce and custom features raise it further. The right question isn't \"what's the cheapest?\" but \"what do I actually need, and is the quote clear about it?\"" },
        { type: "p", text: "We work with clients across Albania and Kosovo, in Albanian, English and Turkish. If you're planning a website, we can clarify the scope and cost in a free consultation — with no hidden items." },
      ],
      sq: [
        { type: "p", text: "\"Sa kushton një faqe interneti?\" është një nga pyetjet më të shpeshta të pronarëve të bizneseve në Shqipëri — dhe rrallë merr një përgjigje të drejtpërdrejtë. Çmimet në Tiranë e më gjerë shkojnë nga disa qindra euro deri në disa mijëra, dhe kjo diferencë i hutón të gjithë. Ja një ndarje e ndershme e asaj që vërtet e përcakton çmimin." },
        { type: "h2", text: "Pse ndryshojnë kaq shumë çmimet" },
        { type: "p", text: "Një faqe interneti nuk është një produkt i vetëm; është një gamë e tërë. Një faqe e vetme për një dyqan të vogël dhe një faqe korporative me shumë faqe e me rezervim online janë thjesht sasi të ndryshme pune. Para se të krahasoni oferta, ndihmon të njihni faktorët e mëposhtëm." },
        { type: "h2", text: "1. Fushëveprimi dhe numri i faqeve" },
        { type: "p", text: "Një landing page, një faqe biznesi me 5 faqe dhe një faqe korporative me 20 faqe janë punë shumë të ndryshme. Sa më shumë faqe, seksione dhe përmbajtje, aq më i lartë kostoja." },
        { type: "h2", text: "2. Shabllon apo dizajn i personalizuar" },
        { type: "p", text: "Një temë e gatshme është e lirë, por u ngjan mijëra faqeve të tjera. Një dizajn i personalizuar kushton më shumë, por e dallon markën tuaj — gjë që ka rëndësi nëse konkurroni për klientë online." },
        { type: "h2", text: "3. Funksionet" },
        { type: "p", text: "Çmimi bazë rritet me çdo funksion të veçantë:" },
        { type: "ul", items: ["Shumë gjuhë (shqip, anglisht, italisht…)", "E-commerce: produkte, shportë, pagesë online", "Sistem rezervimi ose termini", "Panel administrimi për ta përditësuar vetë përmbajtjen"] },
        { type: "h2", text: "4. SEO dhe shpejtësia" },
        { type: "p", text: "Që një faqe të dalë në Google dhe të ngarkohet shpejt nuk ndodh rastësisht. SEO teknike dhe performanca duhet të jenë pjesë e çmimit — ndërtimet e lira zakonisht i anashkalojnë dhe ju kushtojnë më vonë." },
        { type: "h2", text: "5. Mirëmbajtja pas publikimit" },
        { type: "p", text: "Pyesni nëse përditësimet, ndryshimet e vogla dhe mbështetja përfshihen pas publikimit. Këtu shumë oferta të lira lënë për të dëshiruar." },
        { type: "h2", text: "Atëherë, një gamë realiste për Shqipërinë" },
        { type: "p", text: "Si udhëzues i përafërt: një faqe biznesi e thjeshtë dhe profesionale zakonisht nis nga disa qindra euro; një faqe e personalizuar, me shumë faqe ose shumëgjuhëshe me SEO shkon më lart; e-commerce dhe funksionet e veçanta e rrisin edhe më. Pyetja e duhur nuk është \"cila është më e lira?\" por \"çfarë më duhet vërtet, dhe a është oferta e qartë për këtë?\"" },
        { type: "p", text: "Punojmë me klientë në Shqipëri dhe Kosovë, në shqip, anglisht dhe turqisht. Nëse po planifikoni një faqe interneti, mund të qartësojmë fushëveprimin dhe koston në një konsultë falas — pa zëra të fshehur." },
      ],
    },
  },
  {
    slug: "biznesi-online-shqiperi",
    locales: ["sq"],
    date: "2026-09-09",
    readMin: 5,
    category: { tr: "", en: "", sq: "Biznes" },
    title: {
      tr: "",
      en: "",
      sq: "Pse çdo biznes në Shqipëri ka nevojë për një prani online",
    },
    excerpt: {
      tr: "",
      en: "",
      sq: "Klientët tuaj po ju kërkojnë në Google dhe Instagram çdo ditë. Ja pse një prani online profesionale nuk është më luks, por domosdoshmëri për bizneset shqiptare.",
    },
    body: {
      tr: [], en: [],
      sq: [
        { type: "p", text: "Dikur, një biznes i vogël në Shqipëri mund të mbijetonte vetëm me një tabelë të mirë dhe fjalën gojë më gojë. Sot, gjëja e parë që bën një klient para se të zgjedhë një restorant, një klinikë apo një dyqan është të kërkojë në Google ose Instagram. Nëse nuk ju gjejnë atje, ju kanë humbur para se t'ju njohin." },
        { type: "h2", text: "Ku ju kërkojnë klientët sot" },
        { type: "p", text: "Sjellja e blerësit ka ndryshuar. Para se të marrin një vendim, njerëzit kërkojnë, krahasojnë dhe lexojnë. Nëse biznesi juaj nuk shfaqet kur dikush kërkon \"restorant në Tiranë\" ose \"klinikë estetike Durrës\", ai klient shkon te konkurrenti që shfaqet." },
        { type: "h2", text: "Prania online nuk është vetëm një faqe interneti" },
        { type: "p", text: "Një prani e plotë online ka disa pjesë që punojnë së bashku:" },
        { type: "ul", items: ["Një faqe interneti profesionale — shtëpia juaj dixhitale, që e kontrolloni ju", "Google Business Profile — që të shfaqeni në Google Maps dhe kërkime lokale", "Rrjete sociale aktive — Instagram dhe Facebook ku klientët ju gjejnë dhe ju besojnë", "Përmbajtje e rregullt — që tregon se biznesi juaj është i gjallë dhe serioz"] },
        { type: "h2", text: "Pse një faqe interneti mbetet thelbësore" },
        { type: "p", text: "Shumë biznese shqiptare mbështeten vetëm në Instagram. Kjo është një fillim i mirë, por ka një problem: llogaria juaj në Instagram nuk është e juaja — algoritmi vendos kush e sheh, dhe rregullat ndryshojnë. Një faqe interneti është e vetmja pronë dixhitale që kontrolloni plotësisht. Aty ndodhen shërbimet, çmimet, kontakti dhe besueshmëria juaj, gjithmonë të disponueshme dhe të gjegjshme në Google." },
        { type: "h2", text: "Besimi vjen nga profesionalizmi" },
        { type: "p", text: "Një faqe e ngadaltë, e vjetruar ose që nuk funksionon në celular i largon klientët. Në të kundërt, një prani e pastër dhe profesionale ndërton besim që në sekondën e parë. Në një treg ku shumë konkurrentë ende nuk e kanë këtë, një prani e mirë online ju vendos menjëherë përpara." },
        { type: "h2", text: "Nga të fillohet?" },
        { type: "p", text: "Nuk keni nevojë të bëni gjithçka menjëherë. Filloni me një faqe interneti të thjeshtë dhe profesionale që shpjegon qartë çfarë bëni, ku ndodheni dhe si t'ju kontaktojnë. Pastaj ndërtoni mbi të: Google Maps, rrjete sociale, përmbajtje. Hap pas hapi, prania juaj online bëhet burimi juaj më i qëndrueshëm i klientëve." },
        { type: "p", text: "Nëse doni ta ndërtoni ose ta përmirësoni praninë tuaj online, mund të flasim në një konsultë falas dhe të gjejmë hapin e parë të duhur për biznesin tuaj." },
      ],
    },
  },
  {
    slug: "aplikacion-mobile-shqiperi",
    locales: ["sq", "en"],
    date: "2026-09-08",
    readMin: 5,
    category: { tr: "Mobile", en: "Mobile", sq: "Mobile" },
    title: {
      tr: "",
      en: "Developing a mobile app in Albania: what to know before you start",
      sq: "Si të zhvilloni një aplikacion mobile në Shqipëri: çfarë duhet të dini",
    },
    excerpt: {
      tr: "",
      en: "Thinking of building an app for the Albanian market? Here's a practical guide to costs, timelines and the choices that matter most.",
      sq: "Po mendoni të ndërtoni një aplikacion për tregun shqiptar? Ja një udhëzues praktik për kostot, afatet dhe zgjedhjet që kanë më shumë rëndësi.",
    },
    body: {
      tr: [],
      en: [
        { type: "p", text: "The Albanian market is increasingly mobile-first. Whether it's food delivery, services, booking or a product idea, a well-made app can reach customers directly on their phones. But before you start, a few decisions shape the whole project — and its cost." },
        { type: "h2", text: "1. iOS, Android, or both?" },
        { type: "p", text: "In Albania, Android has the larger share, but iOS users are often higher-value. The good news: with modern tools like Flutter, you can build both platforms from a single codebase — far cheaper than building each separately." },
        { type: "h2", text: "2. Start with an MVP" },
        { type: "p", text: "Don't try to build every feature at once. Start with a Minimum Viable Product — the core features that prove your idea works. Launch, learn from real users, then grow. This saves money and reduces risk." },
        { type: "h2", text: "3. What drives the cost" },
        { type: "ul", items: ["Number and complexity of features", "Backend needs (accounts, database, notifications)", "Payments or subscriptions", "Design complexity", "Store publishing and maintenance"] },
        { type: "h2", text: "4. Publishing and upkeep" },
        { type: "p", text: "Getting an app onto the App Store and Google Play involves review processes, store listings and ongoing updates. Factor maintenance in from the start — an app is a living product, not a one-time build." },
        { type: "h2", text: "Where we fit in" },
        { type: "p", text: "We build iOS and Android apps from a single Flutter codebase and handle everything from design to store release. Our own apps are live in the stores, so we know the process first-hand — and we work with clients across Albania and Kosovo. If you have an app idea, we can map the MVP scope together in a free assessment." },
      ],
      sq: [
        { type: "p", text: "Tregu shqiptar po bëhet gjithnjë e më shumë mobile-first. Qoftë shpërndarje ushqimi, shërbime, rezervime apo një ide produkti, një aplikacion i bërë mirë mund t'i arrijë klientët drejtpërdrejt në telefonat e tyre. Por para se të filloni, disa vendime e formësojnë të gjithë projektin — dhe koston e tij." },
        { type: "h2", text: "1. iOS, Android, apo të dyja?" },
        { type: "p", text: "Në Shqipëri, Android ka pjesën më të madhe, por përdoruesit e iOS shpesh janë me vlerë më të lartë. Lajmi i mirë: me mjete moderne si Flutter, mund të ndërtoni të dyja platformat nga një kod i vetëm — shumë më lirë se t'i ndërtoni veç e veç." },
        { type: "h2", text: "2. Filloni me një MVP" },
        { type: "p", text: "Mos u përpiqni të ndërtoni çdo veçori menjëherë. Filloni me një Minimum Viable Product — veçoritë thelbësore që provojnë se ideja juaj funksionon. Publikoni, mësoni nga përdoruesit realë, pastaj rriteni. Kjo kursen para dhe ul rrezikun." },
        { type: "h2", text: "3. Çfarë e përcakton koston" },
        { type: "ul", items: ["Numri dhe kompleksiteti i veçorive", "Nevojat e backend-it (llogari, bazë të dhënash, njoftime)", "Pagesa ose abonime", "Kompleksiteti i dizajnit", "Publikimi në dyqane dhe mirëmbajtja"] },
        { type: "h2", text: "4. Publikimi dhe mirëmbajtja" },
        { type: "p", text: "Nxjerrja e një aplikacioni në App Store dhe Google Play përfshin procese rishikimi, tekste dyqani dhe përditësime të vazhdueshme. Llogariteni mirëmbajtjen që në fillim — një aplikacion është produkt i gjallë, jo një ndërtim një herë e mirë." },
        { type: "h2", text: "Ku hyjmë ne" },
        { type: "p", text: "Ndërtojmë aplikacione iOS dhe Android nga një kod i vetëm Flutter dhe kujdesemi për gjithçka, nga dizajni te publikimi në dyqane. Aplikacionet tona janë live në dyqane, ndaj procesin e njohim nga përvoja — dhe punojmë me klientë në Shqipëri dhe Kosovë. Nëse keni një ide aplikacioni, mund të hartojmë së bashku fushëveprimin e MVP-së në një vlerësim falas." },
      ],
    },
  },

  {
    slug: "izmir-web-tasarim-fiyatlari",
    locales: ["tr"],
    date: "2026-09-07",
    readMin: 5,
    category: { tr: "Web", en: "", sq: "" },
    title: {
      tr: "İzmir'de web tasarım fiyatları: neye göre değişir?",
      en: "",
      sq: "",
    },
    excerpt: {
      tr: "İzmir'de web sitesi yaptırmak isteyenlerin en çok merak ettiği soru: fiyat. Bir teklifin arkasındaki gerçek etkenleri ve doğru bütçeyi nasıl planlayacağınızı anlatıyoruz.",
      en: "", sq: "",
    },
    body: {
      en: [], sq: [],
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
    locales: ["tr"],
    date: "2026-09-05",
    readMin: 5,
    category: { tr: "Dijital", en: "", sq: "" },
    title: {
      tr: "KOBİ'ler için dijital dönüşüm: nereden başlamalı?",
      en: "", sq: "",
    },
    excerpt: {
      tr: "Dijital dönüşüm büyük şirketlere özel bir şey değil. Küçük ve orta ölçekli bir işletmenin bugün somut olarak atabileceği adımları, karmaşaya boğulmadan anlatıyoruz.",
      en: "", sq: "",
    },
    body: {
      en: [], sq: [],
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
