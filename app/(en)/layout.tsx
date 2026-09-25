import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "WoodstoneStudio — Digital Technology Studio",
    template: "%s — WoodstoneStudio",
  },
  description:
    "WoodstoneStudio is a digital technology studio building websites, mobile applications, AI solutions, business process automation and custom software.",
  keywords: [
    "WoodstoneStudio",
    "web design",
    "corporate website",
    "mobile app development",
    "custom software",
    "AI solutions",
    "AI automation",
    "SaaS development",
    "software studio Turkey",
  ],
  openGraph: {
    title: "WoodstoneStudio — Digital Technology Studio",
    description:
      "Web, mobile, AI and custom software — we design and build digital products with the discipline of a product team.",
    url: "https://woodstonestudio.com",
    siteName: "WoodstoneStudio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "WoodstoneStudio — Digital Technology Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodstoneStudio — Digital Technology Studio",
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
              name: "WoodstoneStudio",
              url: "https://woodstonestudio.com",
              logo: "https://woodstonestudio.com/brand/logo.png",
              image: "https://woodstonestudio.com/og-cover.jpg",
              description:
                "A digital technology studio building websites, mobile applications, AI solutions, automation and custom software.",
              email: "info@woodstonestudio.com",
              telephone: "+905331932068",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@woodstonestudio.com",
                contactType: "customer support",
                availableLanguage: ["Turkish", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/in/woodstone-studio-5263a343a/",
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
              name: "WoodstoneStudio",
              url: "https://woodstonestudio.com",
              inLanguage: "en-US",
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
                "Web design",
                "Corporate websites",
                "Mobile app development",
                "SaaS development",
                "MVP development",
                "Custom software development",
                "AI solutions",
                "AI automation",
                "AI agent development",
                "Social media management",
                "Content production",
              ],
              provider: {
                "@type": "Organization",
                name: "WoodstoneStudio",
                url: "https://woodstonestudio.com",
              },
              areaServed: "Worldwide",
              availableLanguage: ["Turkish", "English"],
            }),
          }}
        />
        <Spotlight />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton label="Message us on WhatsApp" />
        <BackToTop label="Back to top" />
        <CookieConsent locale="en" />
      </body>
    </html>
  );
}
