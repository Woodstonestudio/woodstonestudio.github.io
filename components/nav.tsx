"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trNav, type NavDict } from "@/lib/i18n";

/**
 * Sabit navigasyon. Sayfanın üstünde şeffaf; 12px kaydırmadan
 * sonra bulanık, ince çizgili bir yüzey kazanır.
 * Sağ üstte üç dilli (TR / EN / SQ) açılır dil seçici.
 */

const LOCALES: { code: string; label: string; href: string }[] = [
  { code: "tr", label: "Türkçe", href: "/" },
  { code: "en", label: "English", href: "/en" },
  { code: "sq", label: "Shqip", href: "/sq" },
];

const HOME_HREF: Record<string, string> = { tr: "/", en: "/en", sq: "/sq" };

export function Nav({ t = trNav }: { t?: NavDict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const current = LOCALES.find((l) => l.code === t.locale) ?? LOCALES[0];

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
          href={HOME_HREF[t.locale] ?? "/"}
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
            <div ref={menuRef} className="relative ml-2">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t.switchAria}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-warm transition-colors duration-300 hover:border-[rgba(38,35,30,0.24)] hover:text-bone"
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
                {current.code.toUpperCase()}
                <svg
                  aria-hidden
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {open && (
                <ul
                  role="listbox"
                  className="absolute right-0 top-[calc(100%+8px)] min-w-[132px] overflow-hidden rounded-xl border border-line bg-surface/95 py-1 shadow-[0_12px_32px_-12px_rgba(38,35,30,0.28)] backdrop-blur-xl"
                >
                  {LOCALES.map((l) => {
                    const active = l.code === t.locale;
                    return (
                      <li key={l.code} role="option" aria-selected={active}>
                        <a
                          href={l.href}
                          className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                            active
                              ? "text-bone"
                              : "text-gray-warm hover:bg-[rgba(38,35,30,0.05)] hover:text-bone"
                          }`}
                        >
                          {l.label}
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-warm">
                            {l.code}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
