"use client";

import { useEffect, useState } from "react";

/**
 * Yukarı çık — belirli bir kaydırmadan sonra sağ altta (WhatsApp butonunun
 * üstünde) belirir. Tıklayınca sayfa başına yumuşakça döner.
 */
export function BackToTop({ label = "Yukarı çık" }: { label?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[5.5rem] right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-base/80 text-bone shadow-[0_8px_24px_-10px_rgba(38,35,30,0.4)] backdrop-blur-md transition-all duration-300 ease-soft hover:border-[rgba(38,35,30,0.24)] hover:-translate-y-px ${
        show ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
