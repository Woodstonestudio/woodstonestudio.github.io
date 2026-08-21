import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "Woodstone Studio — Studio Teknologjie Dixhitale",
    template: "%s — Woodstone Studio",
  },
  description:
    "Woodstone Studio është një studio teknologjie dixhitale që ndërton faqe interneti, aplikacione mobile, zgjidhje me inteligjencë artificiale, automatizim të proceseve të biznesit dhe softuer të personalizuar.",
  keywords: [
    "Woodstone Studio",
    "dizajn web",
    "faqe interneti korporative",
    "zhvillim aplikacionesh mobile",
    "softuer i personalizuar",
    "zgjidhje me inteligjencë artificiale",
    "automatizim AI",
    "zhvillim SaaS",
    "zhvillim blockchain",
    "studio softueri",
  ],
  openGraph: {
    title: "Woodstone Studio — Studio Teknologjie Dixhitale",
    description:
      "Web, mobile, inteligjencë artificiale dhe softuer i personalizuar — dizajnojmë dhe ndërtojmë produkte dixhitale me përkushtimin e një ekipi produkti.",
    url: "https://woodstonestudio.com",
    siteName: "Woodstone Studio",
    type: "website",
    locale: "sq_AL",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Woodstone Studio — Studio Teknologjie Dixhitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodstone Studio — Studio Teknologjie Dixhitale",
    description:
      "Web, mobile, inteligjencë artificiale dhe softuer i personalizuar — dizajnojmë dhe ndërtojmë produkte dixhitale me përkushtimin e një ekipi produkti.",
    images: ["/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
              image: "https://woodstonestudio.com/og-cover.jpg",
              description:
                "Një studio teknologjie dixhitale që ndërton faqe interneti, aplikacione mobile, zgjidhje me inteligjencë artificiale, automatizim dhe softuer të personalizuar.",
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
              inLanguage: "sq-AL",
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
                "Dizajn web",
                "Faqe interneti korporative",
                "Zhvillim aplikacionesh mobile",
                "Zhvillim SaaS",
                "Zhvillim MVP",
                "Zhvillim softueri të personalizuar",
                "Zgjidhje me inteligjencë artificiale",
                "Automatizim AI",
                "Zhvillim agjentësh AI",
                "Zhvillim blockchain dhe kontratash inteligjente",
                "Menaxhim i mediave sociale",
                "Prodhim përmbajtjeje",
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
