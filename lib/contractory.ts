/** Contractory ürün sayfasının içerik modeli (Türkçe). */

export const overview =
  "Contractory, Arc için bir dağıtım (deployment) çalışma istasyonudur. Bir akıllı sözleşmenin tüm yaşam döngüsünü — derleme, constructor yapılandırması, dağıtım ve doğrulama — tek ve özenli bir yüzeyde toplar; üretimde iş çıkaran ekipler için tasarlanmıştır.";

export const problem = {
  eyebrow: "Sorun",
  headline: "Dağıtım, bir düzine aracın ritüeline dönüştü.",
  body: "Bir sözleşmeyi yayına almak; bir derleyiciyi, bir script'i, bir cüzdanı, bir blok gezginini ve bir doğrulama adımını birbirine dikmek demek — her birinin kendi hata biçimiyle. Asıl önemli iş, tören altında kaybolur; tek bir eksik constructor argümanı yeniden dağıtıma mal olur.",
};

export const solution = {
  eyebrow: "Çözüm",
  headline: "Tek yüzey: kaynaktan doğrulanmışa.",
  body: "Contractory, constructor girdilerini doğrudan derlenmiş ABI'den okur, tipli varsayılanlar üretir ve bir sözleşmeyi derlemeden doğrulanmış adrese kadar sayfadan çıkmadan taşır. Dağıtım hataları, size maliyet çıkarmadan önce yakalanır.",
};

export const features = [
  {
    n: "01",
    name: "Tipli dağıtım",
    body: "Constructor girdileri derlenmiş ABI'den okunur ve makul varsayılanlarla tipli alanlar olarak sunulur — elle yazılan script yok.",
  },
  {
    n: "02",
    name: "Yerleşik doğrulama",
    body: "Kaynak doğrulaması, sonradan yapılan bir iş değil, dağıtımın parçasıdır. Her adres gezginde doğrulanmış olarak yerini alır.",
  },
  {
    n: "03",
    name: "Hata tespiti",
    body: "Başarısız dağıtımlar, gaz harcamadan önce tespit edilir ve revert sebebi sade biçimde geri okunur.",
  },
  {
    n: "04",
    name: "Standartlar kapsamda",
    body: "ERC-20, ERC-721 ve ERC-1155 kutudan çıktığı gibi — her birinin constructor yapısı anlaşılmış olarak.",
  },
  {
    n: "05",
    name: "Yaşam döngüsü tek yerde",
    body: "Dağıt, doğrula ve son etkinliği tek konsoldan gözden geçir — araçlar arası geçiş yok.",
  },
  {
    n: "06",
    name: "Arc'a özel",
    body: "Circle'ın Arc'ı için kurulmuş — USDC tabanlı gaz, Chain ID 5042002 — ağa özgü ayrıntılar sizin yerinize halledilir.",
  },
];

export const tech = [
  ["Çatı", "Next.js 15 · React 19"],
  ["Dil", "TypeScript"],
  ["Sözleşmeler", "Solidity · ABI tabanlı"],
  ["Zincir", "Arc — Chain ID 5042002"],
  ["Cüzdan", "wagmi · RainbowKit"],
  ["Editör", "Monaco"],
  ["Veri", "Supabase"],
  ["Stil", "Tailwind CSS"],
];

export const architecture = [
  { step: "Derle", detail: "solc sözleşmeyi derler; ABI, girdiler için tek doğruluk kaynağı olur." },
  { step: "Yapılandır", detail: "Constructor alanları ABI'den üretilir ve otomatik olarak tiplenir." },
  { step: "Dağıt", detail: "İşlem Arc'a gönderilir; hatalar gaz harcanmadan önce tespit edilir." },
  { step: "Doğrula", detail: "Kaynak, aynı akış içinde gezginde doğrulanır." },
];

export const roadmap = [
  { when: "v1.0", title: "Dağıtım çalışma istasyonu", detail: "Arc üzerinde ERC-20/721/1155 için tipli dağıtım, doğrulama ve hata tespiti.", done: true },
  { when: "v1.1", title: "Sözleşme zekâsı", detail: "Sık görülen sözleşme sorunları için yönlendirmeli düzeltmeler ve satır içi analiz.", done: false },
  { when: "v1.2", title: "Takım çalışma alanları", detail: "Üretim ekipleri için paylaşılan dağıtım geçmişi ve roller.", done: false },
];

export const faq = [
  { q: "Contractory hangi zinciri hedefliyor?", a: "Circle'ın Arc'ını — USDC tabanlı gaza sahip bir EVM L1, Chain ID 5042002. Ağa özgü ayrıntılar aracın içinde halledilir." },
  { q: "Hangi token standartları destekleniyor?", a: "ERC-20, ERC-721 ve ERC-1155; her birinin constructor yapısı anlaşılmış ve derlenmiş ABI'den üretilmiş olarak." },
  { q: "Contractory açık kaynak mı?", a: "Evet. Depo; README, MIT lisansı ve katkı yönergeleriyle birlikte gelir." },
  { q: "Doğrulama nasıl çalışıyor?", a: "Kaynak doğrulaması dağıtım akışının parçası olarak çalışır; böylece sözleşmeler ayrı bir adım olmadan gezginde doğrulanmış olarak yerini alır." },
];
