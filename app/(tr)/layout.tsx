import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { posts } from "@/lib/blog";
import { BASE } from "@/lib/pricing";

// Sitenin son güncellenme tarihi = en yeni blog yazısı (dateModified sinyali)
const SITE_UPDATED = posts
  .map((p) => p.updated ?? p.date)
  .sort()
  .pop();

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "WoodstoneStudio — Fikrinizi ürüne, işinizi dijitale taşıyoruz",
    template: "%s — WoodstoneStudio",
  },
  description:
    "WoodstoneStudio; web siteleri, mobil uygulamalar, yapay zekâ çözümleri, iş süreçleri otomasyonu ve özel yazılım geliştiren bir dijital teknoloji stüdyosudur.",
  keywords: [
    "WoodstoneStudio",
    "web tasarım",
    "kurumsal web sitesi",
    "mobil uygulama geliştirme",
    "özel yazılım",
    "yapay zeka çözümleri",
    "yapay zeka otomasyonu",
    "SaaS geliştirme",
    "yazılım stüdyosu",
  ],
  openGraph: {
    title: "WoodstoneStudio — Fikrinizi ürüne, işinizi dijitale taşıyoruz",
    description:
      "Web, mobil, yapay zekâ ve özel yazılım — dijital ürünleri bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
    url: "https://woodstonestudio.com",
    siteName: "WoodstoneStudio",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "WoodstoneStudio — Fikrinizi ürüne, işinizi dijitale taşıyoruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodstoneStudio — Fikrinizi ürüne, işinizi dijitale taşıyoruz",
    description:
      "Web, mobil, yapay zekâ ve özel yazılım — dijital ürünleri bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    other: {
      "msvalidate.01": "6AE471271FBF2DD5F1F7B6A70C3E5C3D",
    },
  },
};

// Tarayıcı çubuğu ve "ana ekrana ekle" rengi (site zemin rengi)
export const viewport: Viewport = { themeColor: "#E9E5DD" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Reveal animasyonu yalnızca JS varken içerik saklar; botlar metni görünür alır */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="alternate" type="application/rss+xml" title="WoodstoneStudio Blog" href="/feed.xml" />
      </head>
      {/* GA4 yalnızca çerez onayından sonra yüklenir: components/cookie-consent.tsx */}
      <body className="font-sans bg-base text-bone antialiased">
        {/* Ambient background layers */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-keylight" />
          <div className="absolute inset-0 bg-grain" />
          <div className="absolute inset-0 bg-noise" />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://woodstonestudio.com/#organization",
              name: "WoodstoneStudio",
              url: "https://woodstonestudio.com",
              logo: "https://woodstonestudio.com/brand/logo.png",
              image: "https://woodstonestudio.com/og-cover.jpg",
              description:
                "Web siteleri, mobil uygulamalar, yapay zekâ çözümleri, otomasyon ve özel yazılım geliştiren bir dijital teknoloji stüdyosu.",
              email: "info@woodstonestudio.com",
              telephone: "+905331932068",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@woodstonestudio.com",
                contactType: "customer support",
                availableLanguage: ["Turkish", "English"],
              },
              // Müşteri yorumu — yapılandırılmış veri (site içindeki gerçek referans;
              // puan verilmediği için reviewRating YOK, uydurma yıldız yok).
              review: {
                "@type": "Review",
                author: { "@type": "Person", name: "Serpil Kurd" },
                datePublished: "2026-09-20",
                inLanguage: "tr-TR",
                reviewBody: "Aklımızdaki salonu tam olarak ekrana taşıdılar; siteyi ilk açtığımızda 'İşte biz buyuz' dedik. Hızlı, sade ve tam bize benziyor. Çalışmak da gerçekten keyifliydi.",
                itemReviewed: { "@id": "https://woodstonestudio.com/#organization" },
              },
              areaServed: [
                { "@type": "Country", name: "Turkey" },
                { "@type": "Country", name: "Albania" },
                { "@type": "Place", name: "Worldwide" },
              ],
              knowsAbout: ["Web tasarım", "Kurumsal web sitesi", "E-ticaret", "Mobil uygulama geliştirme", "SaaS geliştirme", "Next.js", "Flutter", "SEO", "Yapay zekâ ile arama görünürlüğü (GEO/AEO)", "Yapay zekâ otomasyonu", "Sosyal medya yönetimi", "Online randevu sistemleri"],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Tanıtım sitesi" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.landing.min, priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Kurumsal web sitesi" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.corporate.min, priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "E-ticaret sitesi" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.ecommerce.min, priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Online randevu sistemi" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.booking.min, priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Mobil uygulama" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.mobile.min, priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "SaaS / MVP geliştirme" },
                  priceSpecification: { "@type": "PriceSpecification", minPrice: BASE.tr.saas.min, priceCurrency: "TRY" },
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/woodstonestudio/",
                "https://github.com/Woodstonestudio",
                "https://github.com/izmiradami",
                "https://www.instagram.com/woodstonestudio35",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://woodstonestudio.com/#website",
              name: "WoodstoneStudio",
              alternateName: ["Woodstone Studio", "Woodstone"],
              url: "https://woodstonestudio.com",
              inLanguage: "tr-TR",
              ...(SITE_UPDATED ? { dateModified: SITE_UPDATED } : {}),
              publisher: { "@id": "https://woodstonestudio.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: [
                "Web tasarım",
                "Kurumsal web sitesi",
                "Mobil uygulama geliştirme",
                "SaaS geliştirme",
                "MVP geliştirme",
                "Özel yazılım geliştirme",
                "Yapay zekâ çözümleri",
                "AI otomasyonu",
                "AI ajan geliştirme",
                "Sosyal medya yönetimi",
                "İçerik üretimi",
              ],
              provider: { "@id": "https://woodstonestudio.com/#organization" },
              areaServed: "Worldwide",
              availableLanguage: ["Turkish", "English"],
            }),
          }}
        />
        <Spotlight />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton label="WhatsApp'tan yazın" />
        <BackToTop label="Yukarı çık" />
        <CookieConsent locale="tr" />
      </body>
    </html>
  );
}
