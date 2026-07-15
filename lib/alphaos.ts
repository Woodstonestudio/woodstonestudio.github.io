/** AlphaOS ürün sayfasının içerik modeli (Türkçe). */

export const overview =
  "AlphaOS, Base için bir itibar katmanıdır. Zincir üstü etkinliği herkesin denetleyebileceği bir puana dönüştürür — tamamlanan görevler, kazanılan XP, sahip olunan rozetler ve doğrulanmış Founder Pass'ler; her operatör bir Basename'e çözümlenir ve açıkça sıralanır.";

export const problem = {
  eyebrow: "Sorun",
  headline: "Zincir üstü güven, çoğunlukla bir iddiadan ibaret.",
  body: "Cüzdanlar varsayılan olarak anonimdir; itibar ise ekran görüntülerinde ve takipçi sayılarında yaşar. Kimin gerçekten emek verdiğini, katkı sunduğunu ve bir ağda konum kazandığını gösteren ortak, doğrulanabilir bir ölçü yoktur.",
};

export const solution = {
  eyebrow: "Çözüm",
  headline: "İtibar, zincir üstünde ölçülür.",
  body: "AlphaOS katkıyı oluştuğu anda kaydeder — Base'e işlenen görevler, XP ve rozetler — ve operatörleri Basename'lere çözümlenmiş bir lider tablosunda sıralar. Her puan bir işleme kadar izlenebilir; yani konum iddia edilmez, kazanılır.",
};

export const features = [
  { n: "01", name: "İtibar puanı", body: "Operatör başına tek, denetlenebilir bir puan; zincir üstü etkinlikten hesaplanır ve işleme kadar doğrulanabilir." },
  { n: "02", name: "Görevler", body: "Tamamlandığında XP ve rozet kazandıran yapılandırılmış zincir üstü görevler — katkıyı ölçülebilir bir eyleme dönüştürür." },
  { n: "03", name: "XP ve seviyeler", body: "Operatörler katıldıkça deneyim birikir; kademeler tek bir anı değil, süregelen konumu yansıtır." },
  { n: "04", name: "Founder Pass", body: "Erken konumu doğrulayan ve imzalı bir kontrolle ağ genelinde ücretsiz erişim açan bir ERC-721 pass." },
  { n: "05", name: "Zincir üstü kimlik", body: "Her operatör TTL önbellekli bir Basename'e çözümlenir; böylece lider tablosu hex değil, kişiler olarak okunur." },
  { n: "06", name: "Canlı lider tablosu", body: "Puanlar Base'e işlendikçe güncellenen açık bir sıralama — itibar tüm ağa görünür." },
];

export const tech = [
  ["Çatı", "Next.js · React"],
  ["Zincir", "Base (mainnet)"],
  ["Kimlik", "Basename · TTL önbellek"],
  ["Pass'ler", "ERC-721 · ERC-8021 dataSuffix"],
  ["Erişim", "x402 · imzalı doğrulama"],
  ["Veri", "Supabase analitiği"],
  ["Arayüz", "MCP sunucusu"],
  ["Stil", "Tailwind CSS"],
];

export const architecture = [
  { step: "Katıl", detail: "Operatörler Base üzerinde görev tamamlar ve katkı sunar; etkinlik zincir üstüne işlenir." },
  { step: "Çözümle", detail: "Her adres bir Basename'e çözümlenir, hızlı okuma için TTL ile önbelleğe alınır." },
  { step: "Puanla", detail: "XP, rozetler ve Founder Pass durumu denetlenebilir bir itibar puanına dönüşür." },
  { step: "Sırala", detail: "Puanlar, tüm ağın okuyabildiği canlı ve açık bir lider tablosunda yayımlanır." },
];

export const roadmap = [
  { when: "Canlı", title: "Base üzerinde itibar", detail: "Görevler, XP, rozetler, Founder Pass ve Basename'e çözümlenen lider tablosu — Base mainnet'te canlı.", done: true },
  { when: "Sıradaki", title: "Builder Network", detail: "Deployer eşleştirmeli doğrulama ve yalnızca eklenen (append-only) katkı defteriyle proje profilleri.", done: false },
  { when: "İleride", title: "Koşullu ödüller", detail: "Earnout altyapısı — ödüller, doğrulanmış zincir üstü katkıya karşılık serbest bırakılır.", done: false },
];

export const faq = [
  { q: "AlphaOS hangi ağı kullanıyor?", a: "Base mainnet. Puanlar, görevler ve pass'ler zincir üstüne işlenir; lider tablosu doğrudan Base'den okunur." },
  { q: "Founder Pass nedir?", a: "Erken konumu doğrulayan bir ERC-721 pass. Sahip olmak, imzalı ve süreli bir kontrolle ağ genelinde ücretsiz erişim açar." },
  { q: "İtibar nasıl hesaplanıyor?", a: "Zincir üstü etkinlikten — tamamlanan görevler, kazanılan XP ve sahip olunan rozetler — işlemlere kadar izlenebilen tek bir puanda birleştirilerek." },
  { q: "Operatörler nasıl tanımlanıyor?", a: "Her adres TTL önbellekli bir Basename'e çözümlenir; böylece lider tablosu ham adresler yerine isimler gösterir." },
];
