"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The crafted object: a machined graphite console holding a
 * soft-glass display. Elevated for weight and material realism —
 * thicker milled body, brushed texture, dual cast shadow, a
 * grounded surface reflection, and a cursor-tracked specular
 * highlight. All motion disabled under reduced-motion / touch.
 */
export function Instrument({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const glass = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = wrap.current,
      t = tilt.current,
      g = glass.current;
    if (!w || !t || !g) return;

    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    let raf = 0;
    let px = 0.5,
      py = 0.5,
      inside = false;

    const onMove = (e: MouseEvent) => {
      const r = w.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width;
      py = (e.clientY - r.top) / r.height;
      inside = px >= -0.2 && px <= 1.2 && py >= -0.2 && py <= 1.2;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const apply = () => {
      raf = 0;
      g.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      g.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      g.style.opacity = inside ? "1" : "0.4";
      const dx = (px - 0.5) * 2;
      const dy = (py - 0.5) * 2;
      t.style.transform = `translate3d(${(-dx * 4).toFixed(2)}px, ${(-dy * 4).toFixed(2)}px, 0) rotateY(${(dx * 1.4).toFixed(2)}deg) rotateX(${(-dy * 1.4).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      inside = false;
      g.style.opacity = "0.4";
      t.style.transform = "translate3d(0,0,0) rotateY(0) rotateX(0)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    w.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      w.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} className="relative [perspective:2200px]">
      {/* Industrial key light from upper-left */}
      <div
        aria-hidden
        className="absolute -inset-x-14 -top-28 bottom-0 bg-[radial-gradient(44%_54%_at_36%_-6%,rgba(255,244,224,0.07),transparent_72%)]"
      />

      <div
        ref={tilt}
        className="animate-[floatY_14s_ease-in-out_infinite] [transform-style:preserve-3d] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1)] will-change-transform"
      >
        {/* ── Machined graphite body (thicker, weightier) ── */}
        <div className="relative rounded-[20px] bg-gradient-to-b from-[#272419] via-[#17150f] to-[#0b0a07] p-3 shadow-[0_2px_0_rgba(255,247,232,0.05)_inset,0_36px_60px_-24px_rgba(0,0,0,0.7),0_80px_140px_-40px_rgba(0,0,0,0.95)]">
          {/* Brushed-aluminium micro-texture on the body */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.5] [background:repeating-linear-gradient(90deg,rgba(255,247,232,0.018)_0px,rgba(0,0,0,0)_1px,rgba(0,0,0,0.02)_2px,rgba(0,0,0,0)_3px)]"
          />
          {/* Milled top edge — bright chamfer */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-[rgba(255,248,234,0.5)]" />
          <div className="pointer-events-none absolute inset-x-10 top-[1.5px] h-px rounded-full bg-[rgba(255,248,234,0.16)]" />
          {/* Bottom edge — dark, giving thickness */}
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px rounded-full bg-black/70" />
          {/* Side anodized reflections */}
          <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-gradient-to-b from-[rgba(255,247,232,0.26)] via-[rgba(255,247,232,0.04)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-6 right-0 w-px bg-gradient-to-b from-[rgba(255,247,232,0.14)] via-transparent to-[rgba(0,0,0,0.55)]" />
          {/* Fine bevel ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[rgba(255,246,230,0.09)]" />

          {/* Corner set-screws */}
          {["left-2.5 top-2.5", "right-2.5 top-2.5", "left-2.5 bottom-2.5", "right-2.5 bottom-2.5"].map(
            (pos) => (
              <span
                key={pos}
                aria-hidden
                className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#635e52,#1a1813_72%)] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.14),0_1px_1px_rgba(0,0,0,0.5)]`}
              />
            )
          )}

          {/* ── Soft-glass display ── */}
          <div className="relative overflow-hidden rounded-[12px] border border-black/75 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.65),inset_0_2px_20px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-[16/11] w-full">
              {children}

              {/* Cursor-tracked specular reflection */}
              <div
                ref={glass}
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40 [transition:opacity_0.6s_ease] [background:radial-gradient(340px_circle_at_var(--gx,50%)_var(--gy,40%),rgba(255,247,232,0.08),transparent_60%)]"
              />
              {/* Static glass sheen (upper-left) */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(255,247,232,0.07)_0%,rgba(255,247,232,0.014)_16%,transparent_40%)]" />
              {/* Horizon reflection band — a lit room across the glass */}
              <div className="pointer-events-none absolute inset-x-0 top-[14%] h-[10%] bg-gradient-to-b from-transparent via-[rgba(255,247,232,0.03)] to-transparent" />
              {/* Seat vignette */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_58px_rgba(0,0,0,0.42)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Tight contact shadow directly beneath — anchors the weight */}
      <div
        aria-hidden
        className="mx-[12%] mt-3 h-2.5 rounded-[50%] bg-black/55 blur-md"
      />

      {/* Grounded surface reflection — the object mirrored on the desk */}
      <div
        aria-hidden
        className="mx-3 mt-2 h-24 origin-top scale-y-[-1] rounded-[20px] bg-gradient-to-b from-[#201d15] to-transparent opacity-[0.14] blur-[2px] [mask-image:linear-gradient(to_bottom,black,transparent_62%)]"
      />

      {/* Warm ambient bounce — no color cast */}
      <div
        aria-hidden
        className="absolute -bottom-8 left-1/2 h-16 w-[76%] -translate-x-1/2 rounded-full bg-[#f4e9d6]/[0.04] blur-3xl"
      />

      <style>{`
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      `}</style>
    </div>
  );
}
