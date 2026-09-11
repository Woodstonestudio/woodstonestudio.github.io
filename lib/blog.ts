import type { Locale } from "@/components/service-page";

export type BlogPost = {
  slug: string; // dil-bağımsız kısa kimlik (URL'de dile göre önek eklenir)
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
];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
