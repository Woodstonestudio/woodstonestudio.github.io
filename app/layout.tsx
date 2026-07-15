import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Spotlight } from "@/components/fx/spotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: {
    default: "Woodstone Studio — Independent Product Studio",
    template: "%s — Woodstone Studio",
  },
  description:
    "Woodstone Studio is a technology studio that designs, builds and automates digital businesses — products, software, AI and web.",
  keywords: [
    "product studio",
    "software studio",
    "AI products",
    "Web3",
    "Next.js",
    "Woodstone Studio",
  ],
  openGraph: {
    title: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
    description:
      "A technology studio that designs, builds and automates digital businesses.",
    url: "https://woodstonestudio.com",
    siteName: "Woodstone Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodstone Studio — Dijital Teknoloji Stüdyosu",
    description:
      "A technology studio that designs, builds and automates digital businesses.",
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
              description:
                "Independent product studio building thoughtful AI, Web and Blockchain products.",
              foundingLocation: "İzmir, Türkiye",
            }),
          }}
        />
        <Spotlight />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
