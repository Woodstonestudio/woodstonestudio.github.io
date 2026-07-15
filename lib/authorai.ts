/** AuthorAI ürün sayfasının içerik modeli (Türkçe). */

export const overview =
  "AuthorAI bir yazma aracıdır, otopilot değil. Yapının aradan çekildiği, önerilerin istenene kadar beklediği ve kelimelerin tartışmasız sizin kaldığı odaklı bir sayfa — ilk taslaktan bitmiş metne kadar.";

export const problem = {
  eyebrow: "Sorun",
  headline: "Çoğu AI yazma aracı sayfayı boğar.",
  body: "Sözünüzü keser, sesinizin üstüne otomatik tamamlama yapar ve yazmayı bir makineyle pazarlığa çevirir. Sonuç herkesinkine benzer — yetkin, sıradan ve artık tam olarak sizin değil.",
};

export const solution = {
  eyebrow: "Çözüm",
  headline: "Yardım, kenarda tutulur.",
  body: "AuthorAI sayfayı açık, yardımı ise kol mesafesinde tutar. Öneriler yalnızca istediğinizde kenarda belirir, yapı dayatılmaz sunulur ve her cümle kabul etmek, yeniden yazmak ya da görmezden gelmek üzere sizin kalır.",
};

export const features = [
  { n: "01", name: "Odaklı sayfa", body: "Canlı imleçli, geniş kenar boşluklu, dikkat dağıtmayan sakin bir editör — hızlı yanıtlar için değil, uzun metinler için kurulmuş." },
  { n: "02", name: "İstendiğinde öneri", body: "Devam ve yeniden yazma önerileri yalnızca istendiğinde kenarda belirir; makine sesinizin üstüne asla yazmaz." },
  { n: "03", name: "Sunulan yapı", body: "Benimseyebileceğiniz ya da yok sayabileceğiniz bölüm ve başlık taslakları — asla kafese dönüşmeyen bir iskele." },
  { n: "04", name: "Sesiniz korunur", body: "Her öneri bir tekliftir. Kabul et, yeniden yaz ya da reddet — bitmiş metin tartışmasız sizin kalır." },
  { n: "05", name: "Taslaktan yayına", body: "Boş sayfadan bitmiş esere kadar tek yerde ilerleyin; el yazması hep gözünüzün önünde." },
  { n: "06", name: "Varsayılan sessizlik", body: "Açılır pencere yok, önden koşan otomatik tamamlama yok — siz uzanana kadar yardım kenarda durur." },
];

export const workflow = [
  { step: "Yaz", detail: "Temiz bir sayfa açın ve yazın. Editör sessiz ve aradan çekilmiş kalır." },
  { step: "İste", detail: "Bir devam ya da yeniden yazma isteyin; öneri satırda değil, kenarda belirir." },
  { step: "Biçimlendir", detail: "Yardımı olduğu yerde bir taslağı benimseyin; yerinizi kaybetmeden serbestçe yeniden düzenleyin." },
  { step: "Yayımla", detail: "Bitmiş el yazmasını aynı yüzeyde taslaktan yayımlanmış esere taşıyın." },
];

export const assistance = [
  { name: "Devam et", body: "Sizin sesinizde önerilen bir sonraki pasaj; kabul etmeniz ya da inceltmeniz için kenarda sunulur." },
  { name: "Yeniden yaz", body: "Seçili bir pasajın daha yumuşak ya da daha keskin bir hâli; siz seçene kadar orijinalin üstüne yazılmaz." },
  { name: "Taslak çıkar", body: "Parça parça benimseyebileceğiniz, bölümler ve başlıklar için yapısal bir öneri." },
];

export const tech = [
  ["Çatı", "Next.js 15 · React 19"],
  ["Dil", "TypeScript"],
  ["Yardım", "OpenAI"],
  ["Veri", "Supabase"],
  ["Kimlik", "Supabase Auth"],
  ["Editör", "Odaklı el yazması yüzeyi"],
  ["Stil", "Tailwind CSS"],
  ["Durum", "Aktif geliştirmede"],
];

export const roadmap = [
  { when: "Şimdi", title: "Odaklı editör", detail: "Kenar önerileri ve sunulan yapıya sahip, dikkat dağıtmayan bir el yazması yüzeyi.", done: true },
  { when: "Sıradaki", title: "Yayımlama akışı", detail: "Bitmiş taslaktan yayımlanmış esere, sayfadan çıkmadan.", done: false },
  { when: "İleride", title: "Uzun soluklu projeler", detail: "Bir kitabın tamamında tutarlı kalan yapıyla çok bölümlü el yazmaları.", done: false },
];

export const faq = [
  { q: "AuthorAI kullanıma hazır mı?", a: "AuthorAI aktif geliştirmede. Odaklı editör ve kenar yardımı şekilleniyor; yayımlama ve uzun soluklu proje desteği sıradaki adımlar." },
  { q: "AI benim yerime mi yazacak?", a: "Yalnızca istediğinizde. Öneriler kenarda birer teklif olarak belirir — makine sesinizin üstüne yazmaz, satırda otomatik tamamlama yapmaz." },
  { q: "Yazdıklarım bana ait kalıyor mu?", a: "Evet. Her öneri kabul, yeniden yaz ya da reddet seçeneğidir. Bitmiş metin tartışmasız sizin kalır." },
  { q: "AuthorAI neyin üstüne kurulu?", a: "Veri ve kimlik için Supabase, isteğe bağlı yardım için OpenAI ile birlikte Next.js 15 ve TypeScript üzerine." },
];
