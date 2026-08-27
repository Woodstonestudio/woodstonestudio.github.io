import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "Woodstone Studio — Digital Technology Studio",
    template: "%s — Woodstone Studio",
  },
  description:
    "Woodstone Studio is a digital technology studio building websites, mobile applications, AI solutions, business process automation and custom software.",
  keywords: [
    "Woodstone Studio",
    "web design",
    "corporate website",
    "mobile app development",
    "custom software",
    "AI solutions",
    "AI automation",
    "SaaS development",
    "blockchain development",
    "software studio Turkey",
  ],
  openGraph: {
    title: "Woodstone Studio — Digital Technology Studio",
    description:
      "Web, mobile, AI and custom software — we design and build digital products with the discipline of a product team.",
    url: "https://woodstonestudio.com",
    siteName: "Woodstone Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Woodstone Studio — Digital Technology Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodstone Studio — Digital Technology Studio",
    description:
      "Web, mobile, AI and custom software — we design and build digital products with the discipline of a product team.",
    images: ["/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
              name: "Woodstone Studio",
              url: "https://woodstonestudio.com",
              logo: "https://woodstonestudio.com/brand/logo.png",
              image: "https://woodstonestudio.com/og-cover.jpg",
              description:
                "A digital technology studio building websites, mobile applications, AI solutions, automation and custom software.",
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
              inLanguage: "en-US",
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
                "Web design",
                "Corporate websites",
                "Mobile app development",
                "SaaS development",
                "MVP development",
                "Custom software development",
                "AI solutions",
                "AI automation",
                "AI agent development",
                "Blockchain and smart contract development",
                "Social media management",
                "Content production",
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
