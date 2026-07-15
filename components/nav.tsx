"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#studio", label: "Studio" },
  { href: "/#contact", label: "Contact" },
];

// Locales prepared for future translation. English active; others queued.
const locales = [
  { code: "EN", label: "English", active: true },
  { code: "TR", label: "Türkçe", active: false },
];

/**
 * Fixed navigation. Transparent at the top of the page; gains a
 * blurred, hairline-bordered surface after 12px of scroll.
 *
 * Primary mark: the central Woodstone monogram, cropped untouched
 * from the official logo (public/brand/monogram.png). The full badge
 * (public/brand/logo.png) is reserved for the footer / about page.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-soft ${
        scrolled
          ? "border-b border-line bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 text-[17px] font-medium tracking-tight text-white"
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

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm text-gray-warm transition-colors duration-300 hover:text-bone sm:px-3.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language selector — UI only; translations not yet wired */}
          <div ref={langRef} className="relative ml-1">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
              className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-gray-warm transition-colors duration-300 hover:border-[rgba(239,234,224,0.22)] hover:text-bone"
            >
              EN
              <span
                aria-hidden
                className={`text-[8px] transition-transform duration-300 ease-soft ${
                  langOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {langOpen && (
              <ul
                role="listbox"
                aria-label="Language"
                className="absolute right-0 top-[calc(100%+8px)] min-w-[132px] overflow-hidden rounded-xl border border-line bg-base/90 py-1 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              >
                {locales.map((loc) => (
                  <li key={loc.code} role="option" aria-selected={loc.active}>
                    <button
                      type="button"
                      disabled={!loc.active}
                      onClick={() => setLangOpen(false)}
                      className={`flex w-full items-center justify-between gap-4 px-3.5 py-2 text-left text-sm transition-colors duration-200 ${
                        loc.active
                          ? "text-bone"
                          : "cursor-not-allowed text-gray-warm/50"
                      } ${loc.active ? "hover:bg-white/[0.04]" : ""}`}
                    >
                      {loc.label}
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-gray-warm">
                        {loc.code}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
