import Link from "next/link";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

/**
 * Özel 404 sayfası — WoodstoneStudio tasarım diliyle uyumlu.
 * Route grupları yapısında kök layout olmadığı için kendi <html>/<body>'sini taşır.
 * İki dilli (TR + EN), ana sayfaya dönüş butonlu.
 */
export const metadata = {
  title: "Sayfa Bulunamadı (404) — WoodstoneStudio",
  description: "Aradığınız sayfa bulunamadı. WoodstoneStudio ana sayfasına dönebilirsiniz.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-base text-bone antialiased">
        <main className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
          {/* Amblem */}
          <Image
            src="/brand/monogram.png"
            alt="WoodstoneStudio"
            width={64}
            height={64}
            priority
            className="rounded-full ring-1 ring-[rgba(38,35,30,0.12)] drop-shadow-[0_2px_8px_rgba(38,35,30,0.15)]"
          />

          {/* 404 */}
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
            Hata 404 · Error 404
          </p>
          <h1 className="mt-6 text-[64px] font-light leading-[1] tracking-tightest text-bone sm:text-[88px]">
            404
          </h1>

          {/* Açıklama — iki dilli */}
          <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-gray-warm">
            Aradığınız sayfa bulunamadı ya da taşınmış olabilir.
          </p>
          <p className="mt-2 max-w-md text-[15px] leading-[1.7] text-bone-dim">
            The page you're looking for could not be found.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/en"
              className="rounded-full bg-gradient-to-b from-[#26231E] to-[#3A3630] px-7 py-3 text-sm font-medium text-[#F3F0EA] shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
            >
              Back to Home
            </Link>
          </div>

          {/* Alt linkler */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
            <Link href="/#services" className="transition-colors hover:text-bone">
              Hizmetler
            </Link>
            <Link href="/blog" className="transition-colors hover:text-bone">
              Blog
            </Link>
            <Link href="/hakkimizda" className="transition-colors hover:text-bone">
              Hakkımızda
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-bone">
              İletişim
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
