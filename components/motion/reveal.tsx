"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Sitenin tek hareket öğesi: yumuşak fade + yükselme + blur açılması.
 *
 * Neden framer-motion değil: framer, sunucu HTML'ine `style="opacity:0"`
 * yazıyordu. JS çalıştırmayan tarayıcılar ve yapay zekâ botları (GPTBot,
 * PerplexityBot…) bu metni GİZLİ görüyor; geo audit bunu "hidden text /
 * prompt injection riski" olarak işaretliyordu (49 öğe).
 *
 * Şimdi: HTML'de içerik her zaman görünür. Gizleme yalnızca CSS'te ve
 * yalnızca <html class="js"> varken yapılır (layout'taki küçük betik ekler).
 * Botlar ve JS'siz ziyaretçiler metni doğrudan görür.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style = { "--ry": `${y}px`, "--rd": `${delay}s` } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal=""
      style={style}
      className={[className, inView ? "is-in" : ""].filter(Boolean).join(" ") || undefined}
    >
      {children}
    </div>
  );
}
