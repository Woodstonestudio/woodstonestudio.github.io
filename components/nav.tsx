"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trNav, type NavDict } from "@/lib/i18n";

/**
 * Sabit navigasyon. Sayfanın üstünde şeffaf; 12px kaydırmadan
 * sonra bulanık, ince çizgili bir yüzey kazanır.
 */
export function Nav({ t = trNav }: { t?: NavDict }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-soft ${
        scrolled
          ? "border-b border-line bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={t.ariaLabel}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <Link
          href={t.switchHref === "/en" ? "/" : "/en"}
          className="group flex items-center gap-3 text-[17px] font-medium tracking-tight text-bone"
        >
          <Image
            src="/brand/monogram.png"
            alt=""
            width={32}
            height={32}
            priority
            className="rounded-full ring-1 ring-[rgba(239,234,224,0.22)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-soft group-hover:scale-105"
          />
          <span className="hidden sm:inline">Woodstone Studio</span>
        </Link>

        <ul className="flex items-center gap-0.5">
          {t.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-gray-warm transition-colors duration-300 hover:text-bone sm:px-4"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={t.switchHref}
              aria-label={t.switchAria}
              className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-warm transition-colors duration-300 hover:border-[rgba(38,35,30,0.24)] hover:text-bone"
            >
              <svg
                aria-hidden
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {t.switchLabel}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
