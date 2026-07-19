import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Spotlight } from "@/components/fx/spotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
    template: "%s — Woodstone Studio",
  },
  description:
    "Woodstone Studio; web siteleri, mobil uygulamalar, yapay zekâ çözümleri, iş süreçleri otomasyonu ve özel yazılım geliştiren bir dijital teknoloji stüdyosudur.",
  keywords: [
    "Woodstone Studio",
    "web tasarım",
    "kurumsal web sitesi",
    "mobil uygulama geliştirme",
    "özel yazılım",
    "yapay zeka çözümleri",
    "yapay zeka otomasyonu",
    "SaaS geliştirme",
    "blockchain geliştirme",
    "İzmir yazılım",
  ],
  openGraph: {
    title: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
    description:
      "Web, mobil, yapay zekâ ve özel yazılım — dijital ürünleri bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
    url: "https://woodstonestudio.com",
    siteName: "Woodstone Studio",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
    description:
      "Web, mobil, yapay zekâ ve özel yazılım — dijital ürünleri bir ürün ekibinin titizliğiyle tasarlıyor ve geliştiriyoruz.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
              name: "Woodstone Studio",
              url: "https://woodstonestudio.com",
              logo: "https://woodstonestudio.com/brand/logo.png",
              image: "https://woodstonestudio.com/og-image.jpg",
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
              sameAs: ["https://github.com/Woodstonestudio"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Woodstone Studio",
              url: "https://woodstonestudio.com",
              inLanguage: "tr-TR",
              publisher: {
                "@type": "Organization",
                name: "Woodstone Studio",
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
                "Blockchain ve akıllı sözleşme geliştirme",
              ],
              provider: {
                "@type": "Organization",
                name: "Woodstone Studio",
                url: "https://woodstonestudio.com",
              },
              areaServed: { "@type": "Country", name: "Türkiye" },
              availableLanguage: ["Turkish", "English"],
            }),
          }}
        />
        <Spotlight />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
