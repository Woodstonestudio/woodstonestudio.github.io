import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "WoodstoneStudio — Dijital Teknoloji Stüdyosu",
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
    "İzmir yazılım",
  ],
  openGraph: {
    title: "WoodstoneStudio — Dijital Teknoloji Stüdyosu",
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
        alt: "WoodstoneStudio — Dijital Teknoloji Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodstoneStudio — Dijital Teknoloji Stüdyosu",
    description:
      "Web, mobil, yapay zekâ ve özel yazılım — dijital ürünleri bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
    images: ["/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      "msvalidate.01": "6AE471271FBF2DD5F1F7B6A70C3E5C3D",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* Google Analytics 4 (GA4) — resmi Google tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V7NRECZQ92"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V7NRECZQ92');
        `}
      </Script>
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
              name: "WoodstoneStudio",
              url: "https://woodstonestudio.com",
              logo: "https://woodstonestudio.com/brand/logo.png",
              image: "https://woodstonestudio.com/og-cover.jpg",
              description:
                "Web siteleri, mobil uygulamalar, yapay zekâ çözümleri, otomasyon ve özel yazılım geliştiren bir dijital teknoloji stüdyosu.",
              email: "info@woodstonestudio.com",
              foundingLocation: "İzmir, Türkiye",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İzmir",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@woodstonestudio.com",
                contactType: "customer support",
                availableLanguage: ["Turkish", "English"],
              },
              sameAs: [
                "https://github.com/Woodstonestudio",
                "https://instagram.com/woodstonestudio35",
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
              name: "WoodstoneStudio",
              url: "https://woodstonestudio.com",
              inLanguage: "tr-TR",
              publisher: {
                "@type": "Organization",
                name: "WoodstoneStudio",
              },
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
              provider: {
                "@type": "Organization",
                name: "WoodstoneStudio",
                url: "https://woodstonestudio.com",
              },
              areaServed: { "@type": "Country", name: "Türkiye" },
              availableLanguage: ["Turkish", "English"],
            }),
          }}
        />
        <Spotlight />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton label="WhatsApp'tan yazın" />
        <BackToTop label="Yukarı çık" />
      </body>
    </html>
  );
}
