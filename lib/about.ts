import type { Locale } from "@/components/service-page";

export type AboutContent = {
  locale: Locale;
  slug: string;
  alternates: Record<Locale, string>;
  meta: { title: string; description: string; keywords: string[] };
  eyebrow: string;
  h1: [string, string];
  lead: string;
  storyTitle: [string, string];
  story: string[];
  valuesTitle: [string, string];
  values: { title: string; desc: string }[];
  stackTitle: [string, string];
  stackLead: string;
  stack: { group: string; items: string }[];
  closingTitle: [string, string];
  closingLead: string;
  closingCta: string;
  backLabel: string;
};

const alternates = {
  tr: "/hakkimizda",
  en: "/en/about",
  sq: "/sq/rreth-nesh",
} as const;

export const aboutTR: AboutContent = {
  locale: "tr",
  slug: alternates.tr,
  alternates,
  meta: {
    title: "Hakkımızda",
    description:
      "Woodstone Studio, İzmir merkezli bağımsız bir dijital teknoloji stüdyosudur. Web, mobil, yapay zekâ ve özel yazılım geliştiriyor; kendi ürünlerimizi de yayınlıyoruz. Kim olduğumuzu ve nasıl çalıştığımızı okuyun.",
    keywords: [
      "Woodstone Studio hakkında",
      "İzmir yazılım stüdyosu",
      "dijital teknoloji stüdyosu",
      "bağımsız yazılım ekibi",
      "İzmir web ve mobil geliştirme",
    ],
  },
  eyebrow: "Hakkımızda",
  h1: ["Fikirlerinizi", "ürünlere dönüştürüyoruz."],
  lead: "Woodstone Studio, İzmir merkezli bağımsız bir dijital teknoloji stüdyosudur. Web siteleri, mobil uygulamalar, yapay zekâ çözümleri ve özel yazılım geliştiriyoruz — hem müşterilerimiz için hem de kendimiz için.",
  storyTitle: ["Neye", "inanıyoruz?"],
  story: [
    "Woodstone bir ajanstan çok bir stüdyo gibi çalışır. Tasarım, yazılım ve otomasyonu ayrı departmanlar olarak değil, tek bir zanaat olarak ele alıyoruz; çünkü gerçek problemler bu ayrımları tanımaz.",
    "Kendi ürünlerimiz, mühendislik gücümüzü keskinleştirdiğimiz yerdir. Uygulama mağazalarında yayında olan kendi uygulamalarımız var — yani bir fikri mağazaya taşımanın, kullanıcı bulmanın ve bir ürünü yaşatmanın ne demek olduğunu yaşayarak biliyoruz. Müşteri projelerimize taşıdığımız disiplini önce kendi işlerimizde sınıyoruz.",
    "Büyük vaatler yerine çalışan işler üretmeyi tercih ediyoruz. Her projeyi, kendi ürünümüzmüş gibi bir standartla ele alıyor; abartılı sözler yerine net, dürüst ve ölçülebilir sonuçlar sunmaya çalışıyoruz.",
  ],
  valuesTitle: ["Nasıl", "çalışıyoruz?"],
  values: [
    { title: "Dürüstlük", desc: "Ne yapabileceğimizi ve yapamayacağımızı açıkça söyleriz. Gizli maliyet, boş vaat ve abartılı rakam yoktur." },
    { title: "Sadelik", desc: "En küçük çalışan versiyonu önce kurar, gereksiz karmaşadan kaçınırız. İyi ürün, az ama doğru özellikle başlar." },
    { title: "Süreklilik", desc: "Yayına almak bitiş değil, başlangıçtır. Yayından sonra da geliştirmeye ve destek vermeye devam ederiz." },
    { title: "Ürün bakışı", desc: "Sadece kod yazmayız; işinizi, kullanıcınızı ve hedefinizi anlayıp ona göre karar veririz." },
  ],
  stackTitle: ["Hangi teknolojilerle", "çalışıyoruz?"],
  stackLead: "Doğru işi doğru araçla yapıyoruz. Kullandığımız temel teknolojiler:",
  stack: [
    { group: "Web", items: "Next.js · React · TypeScript · Tailwind CSS" },
    { group: "Mobil", items: "Flutter · iOS · Android" },
    { group: "Backend & Altyapı", items: "Node.js · Firebase · Supabase · REST API" },
    { group: "Yapay Zekâ", items: "OpenAI · Anthropic · Google AI" },
    { group: "Blockchain", items: "Akıllı sözleşme · Web3 · Base" },
  ],
  closingTitle: ["Birlikte çalışmaya", "hazır mısınız?"],
  closingLead: "Bir fikriniz, bir projeniz ya da sadece bir sorunuz mu var? Dinlemekten memnuniyet duyarız.",
  closingCta: "Bize Ulaşın",
  backLabel: "Ana sayfa",
};

export const aboutEN: AboutContent = {
  locale: "en",
  slug: alternates.en,
  alternates,
  meta: {
    title: "About",
    description:
      "Woodstone Studio is an independent digital technology studio based in İzmir, Turkey. We build web, mobile, AI and custom software, and publish our own products too. Read who we are and how we work.",
    keywords: [
      "about Woodstone Studio",
      "digital technology studio",
      "independent software team",
      "software studio Turkey",
      "web and mobile development studio",
    ],
  },
  eyebrow: "About",
  h1: ["We turn your ideas", "into products."],
  lead: "Woodstone Studio is an independent digital technology studio based in İzmir, Turkey. We build websites, mobile apps, AI solutions and custom software — both for our clients and for ourselves.",
  storyTitle: ["What we", "believe."],
  story: [
    "Woodstone works more like a studio than an agency. We treat design, software and automation as one craft rather than separate departments, because real problems don't respect those boundaries.",
    "Our own products are where we sharpen our engineering. We have our own apps live in the app stores — so we know first-hand what it takes to bring an idea to the store, find users and keep a product alive. The discipline we bring to client work is tested on our own products first.",
    "We prefer shipping working software over making big promises. We hold every project to the standard of our own products, and aim for clear, honest and measurable results instead of hype.",
  ],
  valuesTitle: ["How we", "work."],
  values: [
    { title: "Honesty", desc: "We say clearly what we can and can't do. No hidden costs, no empty promises, no inflated numbers." },
    { title: "Simplicity", desc: "We build the smallest working version first and avoid needless complexity. Good products start with few but right features." },
    { title: "Continuity", desc: "Launch is a beginning, not an end. We keep improving and supporting after go-live." },
    { title: "Product thinking", desc: "We don't just write code; we understand your business, your users and your goals, and decide accordingly." },
  ],
  stackTitle: ["The technologies", "we work with."],
  stackLead: "We do the right job with the right tool. The core technologies we use:",
  stack: [
    { group: "Web", items: "Next.js · React · TypeScript · Tailwind CSS" },
    { group: "Mobile", items: "Flutter · iOS · Android" },
    { group: "Backend & Infrastructure", items: "Node.js · Firebase · Supabase · REST API" },
    { group: "AI", items: "OpenAI · Anthropic · Google AI" },
    { group: "Blockchain", items: "Smart contracts · Web3 · Base" },
  ],
  closingTitle: ["Ready to work", "together?"],
  closingLead: "Have an idea, a project or just a question? We'd be glad to hear from you.",
  closingCta: "Get in Touch",
  backLabel: "Home",
};

export const aboutSQ: AboutContent = {
  locale: "sq",
  slug: alternates.sq,
  alternates,
  meta: {
    title: "Rreth Nesh",
    description:
      "Woodstone Studio është një studio teknologjie dixhitale e pavarur me qendër në İzmir të Turqisë, që punon me klientë në Shqipëri dhe Kosovë. Ndërtojmë web, mobile, AI dhe softuer të personalizuar, dhe publikojmë edhe produktet tona.",
    keywords: [
      "rreth Woodstone Studio",
      "studio teknologjie dixhitale",
      "ekip softueri i pavarur",
      "studio softueri",
      "zhvillim web dhe mobile",
    ],
  },
  eyebrow: "Rreth Nesh",
  h1: ["Idetë tuaja", "i kthejmë në produkte."],
  lead: "Woodstone Studio është një studio teknologjie dixhitale e pavarur me qendër në İzmir të Turqisë, që punon me klientë në Shqipëri, Kosovë dhe rajon. Ndërtojmë faqe interneti, aplikacione mobile, zgjidhje me inteligjencë artificiale dhe softuer të personalizuar — si për klientët tanë, ashtu edhe për veten.",
  storyTitle: ["Në çfarë", "besojmë?"],
  story: [
    "Woodstone punon më shumë si studio sesa si agjenci. Dizajnin, softuerin dhe automatizimin i trajtojmë si një mjeshtëri të vetme, jo si departamente të ndara, sepse problemet e vërteta nuk i njohin këto kufij.",
    "Produktet tona janë vendi ku e mprehim mjeshtërinë tonë inxhinierike. Kemi aplikacionet tona live në dyqanet e aplikacioneve — pra dimë nga përvoja se çfarë duhet për ta sjellë një ide te dyqani, për të gjetur përdorues dhe për ta mbajtur një produkt gjallë. Disiplinën që sjellim në punën me klientë e provojmë fillimisht në produktet tona.",
    "Preferojmë të dorëzojmë softuer që funksionon sesa të bëjmë premtime të mëdha. Çdo projekt e mbajmë në standardin e produkteve tona dhe synojmë rezultate të qarta, të ndershme dhe të matshme, jo bujë.",
  ],
  valuesTitle: ["Si", "punojmë?"],
  values: [
    { title: "Ndershmëri", desc: "Themi qartë çfarë mundemi dhe çfarë nuk mundemi të bëjmë. Pa kosto të fshehura, pa premtime boshe, pa numra të fryrë." },
    { title: "Thjeshtësi", desc: "Ndërtojmë fillimisht versionin më të vogël funksional dhe shmangim ndërlikimin e panevojshëm. Produktet e mira nisin me pak, por veçoritë e duhura." },
    { title: "Vazhdimësi", desc: "Publikimi është një fillim, jo një fund. Vazhdojmë të përmirësojmë dhe të mbështesim edhe pas daljes live." },
    { title: "Mendim produkti", desc: "Nuk shkruajmë vetëm kod; kuptojmë biznesin, përdoruesit dhe qëllimet tuaja dhe vendosim sipas tyre." },
  ],
  stackTitle: ["Teknologjitë me të cilat", "punojmë."],
  stackLead: "Bëjmë punën e duhur me mjetin e duhur. Teknologjitë kryesore që përdorim:",
  stack: [
    { group: "Web", items: "Next.js · React · TypeScript · Tailwind CSS" },
    { group: "Mobile", items: "Flutter · iOS · Android" },
    { group: "Backend & Infrastrukturë", items: "Node.js · Firebase · Supabase · REST API" },
    { group: "Inteligjencë Artificiale", items: "OpenAI · Anthropic · Google AI" },
    { group: "Blockchain", items: "Kontrata inteligjente · Web3 · Base" },
  ],
  closingTitle: ["Gati për të punuar", "së bashku?"],
  closingLead: "Keni një ide, një projekt ose thjesht një pyetje? Do të kishim kënaqësinë t'ju dëgjojmë.",
  closingCta: "Na Kontaktoni",
  backLabel: "Faqja kryesore",
};
