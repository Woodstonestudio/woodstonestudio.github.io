/** Contractory ürün sayfası içeriği — üç dilli (tr/en/sq). */

import type { Locale } from "@/components/service-page";

export type ProductContent = {
  meta: { title: string; description: string };
  h1: [string, string, string];
  heroStrip1: string;
  heroStrip2: string;
  heroOpen: string;
  heroAll: string;
  heroCaption: string;
  overviewEyebrow: string;
  overview: string;
  galleryEyebrow: string;
  galleryHead: string;
  galleryCap1: string;
  galleryCap2: string;
  studioBtn: string;
  problem: { eyebrow: string; headline: string; body: string };
  solution: { eyebrow: string; headline: string; body: string };
  featuresEyebrow: string;
  featuresHead: string;
  features: { n: string; name: string; body: string }[];
  techEyebrow: string;
  techHead: string;
  tech: [string, string][];
  archEyebrow: string;
  archHead: string;
  architecture: { step: string; detail: string }[];
  roadmapEyebrow: string;
  roadmapHead: string;
  roadmap: { when: string; title: string; detail: string; done: boolean }[];
  faqEyebrow: string;
  faqHead: string;
  faq: { q: string; a: string }[];
  ctaHead: string;
  ctaBody: string;
  ctaButton: string;
  backLabel: string;
  liveLabel: string;
  visitLabel: string;
};

const tr: ProductContent = {
  meta: {
    title: "Contractory — Akıllı sözleşmeleri hassasiyetle dağıtın",
    description:
      "Contractory, Arc için bir dağıtım çalışma istasyonudur — tipli dağıtımlar, yerleşik doğrulama ve ERC-20, 721 ve 1155 için hata tespiti.",
  },
  h1: ["Akıllı sözleşmeleri", "hassasiyetle", "dağıtın."],
  heroStrip1: "Geliştirici OS",
  heroStrip2: "Arc için",
  heroOpen: "Contractory'yi Aç",
  heroAll: "Tüm ürünler",
  heroCaption: "Nº 01 — Dağıtım konsolu · Arc",
  overviewEyebrow: "Genel bakış",
  galleryEyebrow: "Ürün ekranları",
  galleryHead: "Konsol, yakından.",
  galleryCap1: "Dağıt — tipli constructor, canlı derleme günlüğü",
  galleryCap2: "Etkinlik — son dağıtımlar ve durum",
  studioBtn: "Stüdyoyla konuşun",
  overview:
    "Contractory, Arc için bir dağıtım (deployment) çalışma istasyonudur. Bir akıllı sözleşmenin tüm yaşam döngüsünü — derleme, constructor yapılandırması, dağıtım ve doğrulama — tek ve özenli bir yüzeyde toplar; üretimde iş çıkaran ekipler için tasarlanmıştır.",
  problem: {
    eyebrow: "Sorun",
    headline: "Dağıtım, bir düzine aracın ritüeline dönüştü.",
    body: "Bir sözleşmeyi yayına almak; bir derleyiciyi, bir script'i, bir cüzdanı, bir blok gezginini ve bir doğrulama adımını birbirine dikmek demek — her birinin kendi hata biçimiyle. Asıl önemli iş, tören altında kaybolur; tek bir eksik constructor argümanı yeniden dağıtıma mal olur.",
  },
  solution: {
    eyebrow: "Çözüm",
    headline: "Tek yüzey: kaynaktan doğrulanmışa.",
    body: "Contractory, constructor girdilerini doğrudan derlenmiş ABI'den okur, tipli varsayılanlar üretir ve bir sözleşmeyi derlemeden doğrulanmış adrese kadar sayfadan çıkmadan taşır. Dağıtım hataları, size maliyet çıkarmadan önce yakalanır.",
  },
  featuresEyebrow: "Özellikler",
  featuresHead: "Dağıtımın her adımı, tek yerde.",
  features: [
    { n: "01", name: "Tipli dağıtım", body: "Constructor girdileri derlenmiş ABI'den okunur ve makul varsayılanlarla tipli alanlar olarak sunulur — elle yazılan script yok." },
    { n: "02", name: "Yerleşik doğrulama", body: "Kaynak doğrulaması, sonradan yapılan bir iş değil, dağıtımın parçasıdır. Her adres gezginde doğrulanmış olarak yerini alır." },
    { n: "03", name: "Hata tespiti", body: "Başarısız dağıtımlar, gaz harcamadan önce tespit edilir ve revert sebebi sade biçimde geri okunur." },
    { n: "04", name: "Standartlar kapsamda", body: "ERC-20, ERC-721 ve ERC-1155 kutudan çıktığı gibi — her birinin constructor yapısı anlaşılmış olarak." },
    { n: "05", name: "Yaşam döngüsü tek yerde", body: "Dağıt, doğrula ve son etkinliği tek konsoldan gözden geçir — araçlar arası geçiş yok." },
    { n: "06", name: "Arc'a özel", body: "Circle'ın Arc'ı için kurulmuş — USDC tabanlı gaz, Chain ID 5042002 — ağa özgü ayrıntılar sizin yerinize halledilir." },
  ],
  techEyebrow: "Teknoloji",
  techHead: "Neyle kurulmuş?",
  tech: [
    ["Çatı", "Next.js 15 · React 19"],
    ["Dil", "TypeScript"],
    ["Sözleşmeler", "Solidity · ABI tabanlı"],
    ["Zincir", "Arc — Chain ID 5042002"],
    ["Cüzdan", "wagmi · RainbowKit"],
    ["Editör", "Monaco"],
    ["Veri", "Supabase"],
    ["Stil", "Tailwind CSS"],
  ],
  archEyebrow: "Nasıl çalışır",
  archHead: "Kaynaktan doğrulanmışa, dört adım.",
  architecture: [
    { step: "Derle", detail: "solc sözleşmeyi derler; ABI, girdiler için tek doğruluk kaynağı olur." },
    { step: "Yapılandır", detail: "Constructor alanları ABI'den üretilir ve otomatik olarak tiplenir." },
    { step: "Dağıt", detail: "İşlem Arc'a gönderilir; hatalar gaz harcanmadan önce tespit edilir." },
    { step: "Doğrula", detail: "Kaynak, aynı akış içinde gezginde doğrulanır." },
  ],
  roadmapEyebrow: "Yol haritası",
  roadmapHead: "Nereye gidiyor?",
  roadmap: [
    { when: "v1.0", title: "Dağıtım çalışma istasyonu", detail: "Arc üzerinde ERC-20/721/1155 için tipli dağıtım, doğrulama ve hata tespiti.", done: true },
    { when: "v1.1", title: "Sözleşme zekâsı", detail: "Sık görülen sözleşme sorunları için yönlendirmeli düzeltmeler ve satır içi analiz.", done: false },
    { when: "v1.2", title: "Takım çalışma alanları", detail: "Üretim ekipleri için paylaşılan dağıtım geçmişi ve roller.", done: false },
  ],
  faqEyebrow: "Sık sorulan sorular",
  faqHead: "Merak edilenler.",
  faq: [
    { q: "Contractory hangi zinciri hedefliyor?", a: "Circle'ın Arc'ını — USDC tabanlı gaza sahip bir EVM L1, Chain ID 5042002. Ağa özgü ayrıntılar aracın içinde halledilir." },
    { q: "Hangi token standartları destekleniyor?", a: "ERC-20, ERC-721 ve ERC-1155; her birinin constructor yapısı anlaşılmış ve derlenmiş ABI'den üretilmiş olarak." },
    { q: "Contractory açık kaynak mı?", a: "Evet. Depo; README, MIT lisansı ve katkı yönergeleriyle birlikte gelir." },
    { q: "Doğrulama nasıl çalışıyor?", a: "Kaynak doğrulaması dağıtım akışının parçası olarak çalışır; böylece sözleşmeler ayrı bir adım olmadan gezginde doğrulanmış olarak yerini alır." },
  ],
  ctaHead: "Contractory'yi deneyin.",
  ctaBody: "Arc üzerinde akıllı sözleşmelerinizi tek bir yüzeyden derleyin, dağıtın ve doğrulayın.",
  ctaButton: "Projeyi İncele",
  backLabel: "Ana sayfa",
  liveLabel: "Canlı",
  visitLabel: "Ziyaret Et",
};

const en: ProductContent = {
  meta: {
    title: "Contractory — Deploy smart contracts with precision",
    description:
      "Contractory is a deployment workstation for Arc — typed deployments, built-in verification and error detection for ERC-20, 721 and 1155.",
  },
  h1: ["Deploy smart", "contracts with", "precision."],
  heroStrip1: "Developer OS",
  heroStrip2: "For Arc",
  heroOpen: "Open Contractory",
  heroAll: "All products",
  heroCaption: "Nº 01 — Deployment console · Arc",
  overviewEyebrow: "Overview",
  galleryEyebrow: "Product screens",
  galleryHead: "The console, up close.",
  galleryCap1: "Deploy — typed constructor, live compile log",
  galleryCap2: "Activity — recent deployments and status",
  studioBtn: "Talk to the studio",
  overview:
    "Contractory is a deployment workstation for Arc. It brings the entire lifecycle of a smart contract — compilation, constructor configuration, deployment and verification — onto a single, careful surface, built for teams shipping in production.",
  problem: {
    eyebrow: "Problem",
    headline: "Deployment has become a ritual of a dozen tools.",
    body: "Shipping a contract means stitching together a compiler, a script, a wallet, a block explorer and a verification step — each with its own way of failing. The work that matters gets lost under the ceremony, and a single missing constructor argument costs you a redeploy.",
  },
  solution: {
    eyebrow: "Solution",
    headline: "One surface: from source to verified.",
    body: "Contractory reads constructor inputs straight from the compiled ABI, generates typed defaults and moves a contract from compilation to verified address without leaving the page. Deployment errors are caught before they cost you.",
  },
  featuresEyebrow: "Features",
  featuresHead: "Every step of deployment, in one place.",
  features: [
    { n: "01", name: "Typed deployment", body: "Constructor inputs are read from the compiled ABI and presented as typed fields with sensible defaults — no hand-written scripts." },
    { n: "02", name: "Built-in verification", body: "Source verification is part of deployment, not an afterthought. Every address lands verified on the explorer." },
    { n: "03", name: "Error detection", body: "Failed deployments are detected before spending gas, and the revert reason is read back plainly." },
    { n: "04", name: "Standards covered", body: "ERC-20, ERC-721 and ERC-1155 out of the box — each with its constructor shape understood." },
    { n: "05", name: "Lifecycle in one place", body: "Deploy, verify and review recent activity from a single console — no switching between tools." },
    { n: "06", name: "Built for Arc", body: "Built for Circle's Arc — USDC-based gas, Chain ID 5042002 — network-specific details handled for you." },
  ],
  techEyebrow: "Technology",
  techHead: "What it's built with.",
  tech: [
    ["Framework", "Next.js 15 · React 19"],
    ["Language", "TypeScript"],
    ["Contracts", "Solidity · ABI-based"],
    ["Chain", "Arc — Chain ID 5042002"],
    ["Wallet", "wagmi · RainbowKit"],
    ["Editor", "Monaco"],
    ["Data", "Supabase"],
    ["Styling", "Tailwind CSS"],
  ],
  archEyebrow: "How it works",
  archHead: "From source to verified, in four steps.",
  architecture: [
    { step: "Compile", detail: "solc compiles the contract; the ABI becomes the single source of truth for inputs." },
    { step: "Configure", detail: "Constructor fields are generated from the ABI and typed automatically." },
    { step: "Deploy", detail: "The transaction is sent to Arc; errors are detected before gas is spent." },
    { step: "Verify", detail: "Source is verified on the explorer within the same flow." },
  ],
  roadmapEyebrow: "Roadmap",
  roadmapHead: "Where it's headed.",
  roadmap: [
    { when: "v1.0", title: "Deployment workstation", detail: "Typed deployment, verification and error detection for ERC-20/721/1155 on Arc.", done: true },
    { when: "v1.1", title: "Contract intelligence", detail: "Guided fixes for common contract issues and inline analysis.", done: false },
    { when: "v1.2", title: "Team workspaces", detail: "Shared deployment history and roles for production teams.", done: false },
  ],
  faqEyebrow: "Frequently asked questions",
  faqHead: "Good to know.",
  faq: [
    { q: "Which chain does Contractory target?", a: "Circle's Arc — an EVM L1 with USDC-based gas, Chain ID 5042002. Network-specific details are handled inside the tool." },
    { q: "Which token standards are supported?", a: "ERC-20, ERC-721 and ERC-1155, each with its constructor shape understood and generated from the compiled ABI." },
    { q: "Is Contractory open source?", a: "Yes. The repository comes with a README, MIT license and contribution guidelines." },
    { q: "How does verification work?", a: "Source verification runs as part of the deployment flow, so contracts land verified on the explorer without a separate step." },
  ],
  ctaHead: "Try Contractory.",
  ctaBody: "Compile, deploy and verify your smart contracts on Arc from a single surface.",
  ctaButton: "View Project",
  backLabel: "Home",
  liveLabel: "Live",
  visitLabel: "Visit",
};

const sq: ProductContent = {
  meta: {
    title: "Contractory — Vendosni kontrata inteligjente me saktësi",
    description:
      "Contractory është një stacion pune vendosjeje për Arc — vendosje të tipizuara, verifikim i integruar dhe zbulim gabimesh për ERC-20, 721 dhe 1155.",
  },
  h1: ["Vendosni kontrata", "inteligjente me", "saktësi."],
  heroStrip1: "OS për zhvillues",
  heroStrip2: "Për Arc",
  heroOpen: "Hap Contractory",
  heroAll: "Të gjitha produktet",
  heroCaption: "Nº 01 — Konsola e vendosjes · Arc",
  overviewEyebrow: "Vështrim i përgjithshëm",
  galleryEyebrow: "Ekranet e produktit",
  galleryHead: "Konsola, nga afër.",
  galleryCap1: "Vendos — constructor i tipizuar, log kompilimi live",
  galleryCap2: "Aktiviteti — vendosjet e fundit dhe statusi",
  studioBtn: "Fol me studion",
  overview:
    "Contractory është një stacion pune për vendosjen (deployment) në Arc. E sjell të gjithë ciklin jetësor të një kontrate inteligjente — kompilimin, konfigurimin e constructor-it, vendosjen dhe verifikimin — në një sipërfaqe të vetme dhe të kujdesshme, të ndërtuar për ekipe që punojnë në prodhim.",
  problem: {
    eyebrow: "Problemi",
    headline: "Vendosja u kthye në një ritual me një duzinë mjetesh.",
    body: "Të nxjerrësh një kontratë do të thotë të bashkosh një kompilues, një skript, një portofol, një eksplorues blloqesh dhe një hap verifikimi — secili me mënyrën e vet të dështimit. Puna që ka rëndësi humbet nën ceremoni, dhe një argument i vetëm constructor-i që mungon të kushton një rivendosje.",
  },
  solution: {
    eyebrow: "Zgjidhja",
    headline: "Një sipërfaqe: nga burimi te i verifikuari.",
    body: "Contractory i lexon hyrjet e constructor-it drejtpërdrejt nga ABI e kompiluar, gjeneron parazgjedhje të tipizuara dhe e çon një kontratë nga kompilimi te adresa e verifikuar pa dalë nga faqja. Gabimet e vendosjes kapen para se t'ju kushtojnë.",
  },
  featuresEyebrow: "Veçoritë",
  featuresHead: "Çdo hap i vendosjes, në një vend.",
  features: [
    { n: "01", name: "Vendosje e tipizuar", body: "Hyrjet e constructor-it lexohen nga ABI e kompiluar dhe paraqiten si fusha të tipizuara me parazgjedhje të arsyeshme — pa skripte të shkruara me dorë." },
    { n: "02", name: "Verifikim i integruar", body: "Verifikimi i burimit është pjesë e vendosjes, jo një hap i mëvonshëm. Çdo adresë del e verifikuar në eksplorues." },
    { n: "03", name: "Zbulim gabimesh", body: "Vendosjet e dështuara zbulohen para se të shpenzohet gaz, dhe arsyeja e revert-it lexohet qartë." },
    { n: "04", name: "Standardet të mbuluara", body: "ERC-20, ERC-721 dhe ERC-1155 që nga fillimi — secili me strukturën e constructor-it të kuptuar." },
    { n: "05", name: "Cikli jetësor në një vend", body: "Vendos, verifiko dhe shqyrto aktivitetin e fundit nga një konsolë e vetme — pa kaluar mes mjetesh." },
    { n: "06", name: "Ndërtuar për Arc", body: "Ndërtuar për Arc-un e Circle — gaz me bazë USDC, Chain ID 5042002 — detajet specifike të rrjetit trajtohen për ju." },
  ],
  techEyebrow: "Teknologjia",
  techHead: "Me çfarë është ndërtuar.",
  tech: [
    ["Korniza", "Next.js 15 · React 19"],
    ["Gjuha", "TypeScript"],
    ["Kontratat", "Solidity · me bazë ABI"],
    ["Zinxhiri", "Arc — Chain ID 5042002"],
    ["Portofoli", "wagmi · RainbowKit"],
    ["Editori", "Monaco"],
    ["Të dhënat", "Supabase"],
    ["Stili", "Tailwind CSS"],
  ],
  archEyebrow: "Si funksionon",
  archHead: "Nga burimi te i verifikuari, në katër hapa.",
  architecture: [
    { step: "Kompilo", detail: "solc e kompilon kontratën; ABI bëhet burimi i vetëm i së vërtetës për hyrjet." },
    { step: "Konfiguro", detail: "Fushat e constructor-it gjenerohen nga ABI dhe tipizohen automatikisht." },
    { step: "Vendos", detail: "Transaksioni dërgohet në Arc; gabimet zbulohen para se të shpenzohet gaz." },
    { step: "Verifiko", detail: "Burimi verifikohet në eksplorues brenda të njëjtës rrjedhë." },
  ],
  roadmapEyebrow: "Udhërrëfyesi",
  roadmapHead: "Ku po shkon.",
  roadmap: [
    { when: "v1.0", title: "Stacioni i vendosjes", detail: "Vendosje e tipizuar, verifikim dhe zbulim gabimesh për ERC-20/721/1155 në Arc.", done: true },
    { when: "v1.1", title: "Inteligjencë kontrate", detail: "Rregullime të udhëhequra për probleme të zakonshme kontratash dhe analizë inline.", done: false },
    { when: "v1.2", title: "Hapësira ekipesh", detail: "Histori e përbashkët vendosjesh dhe role për ekipe prodhimi.", done: false },
  ],
  faqEyebrow: "Pyetje të bëra shpesh",
  faqHead: "Mirë të dihet.",
  faq: [
    { q: "Cilin zinxhir synon Contractory?", a: "Arc-un e Circle — një EVM L1 me gaz me bazë USDC, Chain ID 5042002. Detajet specifike të rrjetit trajtohen brenda mjetit." },
    { q: "Cilat standarde token-ash mbështeten?", a: "ERC-20, ERC-721 dhe ERC-1155, secili me strukturën e constructor-it të kuptuar dhe të gjeneruar nga ABI e kompiluar." },
    { q: "A është Contractory me kod të hapur?", a: "Po. Depoja vjen me një README, licencë MIT dhe udhëzime kontributi." },
    { q: "Si funksionon verifikimi?", a: "Verifikimi i burimit ekzekutohet si pjesë e rrjedhës së vendosjes, kështu që kontratat dalin të verifikuara në eksplorues pa një hap të veçantë." },
  ],
  ctaHead: "Provoni Contractory.",
  ctaBody: "Kompiloni, vendosni dhe verifikoni kontratat tuaja inteligjente në Arc nga një sipërfaqe e vetme.",
  ctaButton: "Shiko Projektin",
  backLabel: "Faqja kryesore",
  liveLabel: "Live",
  visitLabel: "Vizito",
};

export const contractoryContent: Record<Locale, ProductContent> = { tr, en };
