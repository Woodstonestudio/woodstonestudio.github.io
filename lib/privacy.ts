import type { Locale } from "@/components/service-page";

/**
 * Gizlilik ve Çerez Politikası / Aydınlatma Metni (KVKK + GDPR).
 * Sitede gerçekten kullanılan araçlara göre yazıldı. Araç eklenir ya da
 * çıkarılırsa bu metin de güncellenmelidir.
 */

export const PRIVACY_PATH: Record<Locale, string> = { tr: "/gizlilik", en: "/en/privacy" };

export type PrivacyDict = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  updated: string;
  intro: string;
  sections: { h: string; p?: string[]; ul?: string[] }[];
  settingsLabel: string;
  settingsNote: string;
};

export const privacy: Record<Locale, PrivacyDict> = {
  tr: {
    meta: {
      title: "Gizlilik ve Çerez Politikası (KVKK Aydınlatma Metni)",
      description:
        "WoodstoneStudio gizlilik ve çerez politikası: hangi kişisel verileri, hangi amaçla işlediğimiz, çerezler, saklama süreleri ve KVKK/GDPR kapsamındaki haklarınız.",
    },
    eyebrow: "Yasal",
    h1: "Gizlilik ve Çerez Politikası",
    updated: "Son güncelleme: 25 Eylül 2026",
    intro:
      "Bu metin, woodstonestudio.com'u ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl işlendiğini, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında açıklar. Yalnızca gerçekten ihtiyaç duyduğumuz verileri topluyoruz.",
    sections: [
      {
        h: "1. Veri sorumlusu",
        p: [
          "Veri sorumlusu WoodstoneStudio'dur. Kişisel verilerinizle ilgili her türlü soru ve talebiniz için info@woodstonestudio.com adresine yazabilirsiniz.",
        ],
      },
      {
        h: "2. Hangi verileri topluyoruz?",
        ul: [
          "İletişim formu: ad soyad, e-posta adresi, isteğe bağlı olarak telefon ve firma adı, ilgilendiğiniz hizmet ve mesajınız. Kötüye kullanımı ve spam'i önlemek için gönderim sırasında IP adresiniz ve gönderim zamanı da kaydedilir.",
          "E-posta ve WhatsApp yazışmaları: bize doğrudan yazdığınızda paylaştığınız iletişim bilgileri ve mesaj içeriği.",
          "Analitik veriler (yalnızca onay verirseniz): ziyaret edilen sayfalar, ziyaret süresi, cihaz ve tarayıcı türü, yaklaşık konum (ülke/şehir) gibi kimliğinizi doğrudan belirlemeyen kullanım verileri.",
          "Teknik kayıtlar: sitenin barındırıldığı altyapı, güvenlik ve işletim amacıyla IP adresi ve istek bilgilerini içeren standart sunucu kayıtları tutabilir.",
        ],
      },
      {
        h: "3. Verileri hangi amaçla ve hangi hukuki sebeple işliyoruz?",
        ul: [
          "Talebinize dönüş yapmak, teklif hazırlamak ve olası bir iş ilişkisini kurmak: KVKK md. 5/2-c (bir sözleşmenin kurulmasıyla doğrudan ilgili olması), GDPR md. 6/1-b.",
          "Formun ve sitenin güvenliğini sağlamak, spam ve kötüye kullanımı önlemek: KVKK md. 5/2-f (meşru menfaat), GDPR md. 6/1-f.",
          "Sitenin nasıl kullanıldığını ölçmek ve geliştirmek (Google Analytics): yalnızca açık rızanızla, KVKK md. 5/1, GDPR md. 6/1-a. Rızanızı istediğiniz zaman geri alabilirsiniz.",
        ],
      },
      {
        h: "4. Çerezler",
        p: [
          "Sitemiz kendi çerezlerini kullanmaz. Çerez tercihiniz, çerez olarak değil tarayıcınızın yerel depolamasında (\"wss-consent\" anahtarıyla) saklanır; bu kayıt yalnızca seçiminizi hatırlamak için kullanılır.",
          "Analitik çerezler yalnızca \"Kabul Et\" seçeneğini işaretlerseniz yüklenir. Onay vermezseniz Google Analytics hiç yüklenmez ve Google'a veri gönderilmez.",
        ],
        ul: [
          "_ga — Google Analytics; ziyaretçileri birbirinden ayırt etmek için kullanılır. Süre: 2 yıl.",
          "_ga_<kimlik> — Google Analytics; oturum durumunu tutmak için kullanılır. Süre: 2 yıl.",
        ],
      },
      {
        h: "5. Verileri kimlerle paylaşıyoruz?",
        p: [
          "Kişisel verilerinizi satmıyor ve reklam amacıyla paylaşmıyoruz. Hizmeti sunabilmek için yalnızca aşağıdaki hizmet sağlayıcılarla, gerektiği ölçüde paylaşılır:",
        ],
        ul: [
          "Vercel Inc. — iletişim formunu karşılayan sunucu altyapısı.",
          "Supabase Inc. — form taleplerinin saklandığı veritabanı.",
          "E-posta hizmet sağlayıcısı — yeni talep bildirimlerinin ve yazışmaların iletilmesi.",
          "GitHub Inc. (GitHub Pages) — sitenin barındırılması.",
          "Google LLC (Google Analytics) — yalnızca onay verirseniz, site kullanım ölçümü.",
          "Yasal zorunluluk hâlinde yetkili kamu kurum ve kuruluşları.",
        ],
      },
      {
        h: "6. Yurt dışına aktarım",
        p: [
          "Yukarıdaki hizmet sağlayıcıların sunucuları Türkiye dışında (Avrupa Birliği ve Amerika Birleşik Devletleri) bulunabilir. Bu nedenle verileriniz yurt dışına aktarılabilir. Aktarım, KVKK md. 9 ve GDPR'daki güvencelere (ör. standart sözleşme hükümleri) uygun olarak yapılır; iletişim formunda onay kutusunu işaretleyerek ve analitik çerezleri kabul ederek bu aktarıma rıza vermiş olursunuz.",
        ],
      },
      {
        h: "7. Saklama süreleri",
        ul: [
          "Form talepleri ve yazışmalar: bir iş ilişkisi kurulmazsa en fazla 2 yıl; kurulursa ilgili mevzuatın öngördüğü süre boyunca.",
          "Analitik veriler: Google Analytics'te en fazla 14 ay.",
          "Çerez tercihiniz: siz silene ya da değiştirene kadar tarayıcınızda.",
        ],
      },
      {
        h: "8. Haklarınız",
        p: ["KVKK md. 11 ve GDPR kapsamında şu haklara sahipsiniz:"],
        ul: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,",
          "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
          "Verilerin aktarıldığı üçüncü kişileri bilme,",
          "Eksik veya yanlış işlenmiş verilerin düzeltilmesini, silinmesini ya da yok edilmesini isteme,",
          "Verilerinizin taşınmasını ve işlemeye itiraz etmeyi talep etme,",
          "Açık rızanızı dilediğiniz zaman geri alma,",
          "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
        ],
      },
      {
        h: "9. Başvuru",
        p: [
          "Taleplerinizi info@woodstonestudio.com adresine iletebilirsiniz. Başvurunuzu en geç 30 gün içinde ücretsiz olarak yanıtlarız. Yanıtımızdan memnun kalmazsanız Kişisel Verileri Koruma Kurulu'na ya da bulunduğunuz ülkedeki veri koruma otoritesine şikâyette bulunabilirsiniz.",
        ],
      },
      {
        h: "10. Değişiklikler",
        p: [
          "Bu metni, kullandığımız araçlar veya mevzuat değiştiğinde güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayımlanır; son güncelleme tarihi sayfanın başında yer alır.",
        ],
      },
    ],
    settingsLabel: "Çerez tercihlerimi değiştir",
    settingsNote: "Analitik çerezlere verdiğiniz onayı istediğiniz zaman değiştirebilir ya da geri alabilirsiniz.",
  },
  en: {
    meta: {
      title: "Privacy & Cookie Policy",
      description:
        "WoodstoneStudio privacy and cookie policy: what personal data we process and why, cookies, retention periods and your rights under the GDPR and Turkey's KVKK.",
    },
    eyebrow: "Legal",
    h1: "Privacy & Cookie Policy",
    updated: "Last updated: 25 September 2026",
    intro:
      "This notice explains how your personal data is processed when you visit woodstonestudio.com and when you contact us, under the EU General Data Protection Regulation (GDPR) and Turkey's Personal Data Protection Law No. 6698 (KVKK). We only collect the data we actually need.",
    sections: [
      {
        h: "1. Data controller",
        p: [
          "The data controller is WoodstoneStudio. For any question or request about your personal data, write to info@woodstonestudio.com.",
        ],
      },
      {
        h: "2. What data we collect",
        ul: [
          "Contact form: full name, email address, optionally phone number and company name, the service you are interested in and your message. To prevent abuse and spam, your IP address and the submission time are also recorded.",
          "Email and WhatsApp messages: the contact details and message content you share when you write to us directly.",
          "Analytics data (only if you consent): usage data that does not directly identify you, such as pages visited, visit duration, device and browser type and approximate location (country/city).",
          "Technical logs: the hosting infrastructure may keep standard server logs, including IP address and request details, for security and operation.",
        ],
      },
      {
        h: "3. Why we process data and on what legal basis",
        ul: [
          "To respond to your request, prepare a quote and establish a possible business relationship: GDPR Art. 6(1)(b), KVKK Art. 5/2-c.",
          "To keep the form and the site secure and prevent spam and abuse: legitimate interest, GDPR Art. 6(1)(f), KVKK Art. 5/2-f.",
          "To measure and improve how the site is used (Google Analytics): only with your consent, GDPR Art. 6(1)(a), KVKK Art. 5/1. You can withdraw your consent at any time.",
        ],
      },
      {
        h: "4. Cookies",
        p: [
          "Our site does not set cookies of its own. Your cookie choice is stored in your browser's local storage (under the key \"wss-consent\"), not as a cookie, and is used only to remember your choice.",
          "Analytics cookies are loaded only if you choose \"Accept\". If you don't consent, Google Analytics is never loaded and no data is sent to Google.",
        ],
        ul: [
          "_ga — Google Analytics; used to distinguish visitors. Duration: 2 years.",
          "_ga_<id> — Google Analytics; used to keep session state. Duration: 2 years.",
        ],
      },
      {
        h: "5. Who we share data with",
        p: [
          "We do not sell your personal data or share it for advertising. It is shared only with the following service providers, and only as far as needed to run the service:",
        ],
        ul: [
          "Vercel Inc. — server infrastructure that receives the contact form.",
          "Supabase Inc. — database where form requests are stored.",
          "Email service provider — delivery of new-request notifications and correspondence.",
          "GitHub Inc. (GitHub Pages) — website hosting.",
          "Google LLC (Google Analytics) — site usage measurement, only if you consent.",
          "Competent public authorities where required by law.",
        ],
      },
      {
        h: "6. International transfers",
        p: [
          "The servers of the providers above may be located outside your country, including in the European Union and the United States, so your data may be transferred internationally. Transfers are made with the safeguards required by the GDPR and KVKK Art. 9 (such as standard contractual clauses); by ticking the consent box on the contact form and accepting analytics cookies you consent to these transfers.",
        ],
      },
      {
        h: "7. Retention",
        ul: [
          "Form requests and correspondence: up to 2 years if no business relationship is established; otherwise for the period required by applicable law.",
          "Analytics data: up to 14 months in Google Analytics.",
          "Your cookie choice: in your browser until you delete or change it.",
        ],
      },
      {
        h: "8. Your rights",
        p: ["Under the GDPR and KVKK Art. 11 you have the right to:"],
        ul: [
          "know whether your personal data is processed and request information about it,",
          "know the purpose of processing and whether it is used accordingly,",
          "know the third parties your data is transferred to,",
          "request rectification, erasure or destruction of incomplete or inaccurate data,",
          "request data portability and object to processing,",
          "withdraw your consent at any time,",
          "claim compensation for damage caused by unlawful processing.",
        ],
      },
      {
        h: "9. How to make a request",
        p: [
          "Send your request to info@woodstonestudio.com. We respond free of charge within 30 days at the latest. If you are not satisfied with our response, you can lodge a complaint with the data protection authority in your country or with Turkey's Personal Data Protection Authority (KVKK).",
        ],
      },
      {
        h: "10. Changes",
        p: [
          "We may update this notice when the tools we use or the law change. The current version is always published on this page, with the last-updated date at the top.",
        ],
      },
    ],
    settingsLabel: "Change my cookie preferences",
    settingsNote: "You can change or withdraw your consent to analytics cookies at any time.",
  },
};
