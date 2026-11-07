import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "@/lib/fonts/mono";
import "../globals.css";
import { Spotlight } from "@/components/fx/spotlight";
import { InstagramButton } from "@/components/instagram-button";
import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { VisitTracker } from "@/components/visit-tracker";

/**
 * Arnavutça (sq) kök düzen — şimdilik tek sayfa: /sq/dizajn-web (Arnavutluk fiyat sayfası).
 * Kurum şeması TR/EN düzenlerinde; burada @id ile ona bağlanılır.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://woodstonestudio.com"),
  title: { default: "WoodstoneStudio", template: "%s — WoodstoneStudio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export const viewport: Viewport = { themeColor: "#E9E5DD" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans bg-base text-bone antialiased">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-keylight" />
          <div className="absolute inset-0 bg-grain" />
          <div className="absolute inset-0 bg-noise" />
        </div>
        <Spotlight />
        <div className="relative z-10">{children}</div>
        <InstagramButton label="Na shkruani në Instagram" />
        <BackToTop label="Kthehu lart" />
        <VisitTracker />
        <CookieConsent locale="en" />
      </body>
    </html>
  );
}
