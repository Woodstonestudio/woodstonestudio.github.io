import type { ReactNode } from "react";

/**
 * The product as a crafted physical object: warm anodized aluminium
 * with milled edges, a single overhead key light, one glass reflection.
 * No colored glow — the environment light is the page's warm source.
 */
export function MacBook({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative [perspective:2000px]">
      {/* Overhead key light falling onto the object */}
      <div className="absolute -inset-x-12 -top-28 bottom-0 bg-[radial-gradient(52%_58%_at_50%_0%,rgba(255,244,224,0.06),transparent_74%)]" />

      <div className="animate-[float_11s_ease-in-out_infinite] [transform:rotateY(-13deg)_rotateX(5.5deg)] [transform-style:preserve-3d]">
        {/* Lid — milled aluminium shell */}
        <div className="relative rounded-[15px] rounded-b-none bg-gradient-to-b from-[#413d35] via-[#2b2822] to-[#191712] p-[7px] pb-0 shadow-[0_56px_112px_-30px_rgba(0,0,0,0.85)]">
          {/* Top edge catching the key light — chamfer highlight */}
          <div className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full bg-[rgba(255,247,232,0.4)]" />
          {/* Left/right anodized edge reflections */}
          <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-gradient-to-b from-[rgba(255,247,232,0.22)] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-y-3 right-0 w-px bg-gradient-to-b from-[rgba(255,247,232,0.14)] via-transparent to-[rgba(0,0,0,0.4)]" />
          {/* Outer machined bezel line */}
          <div className="absolute inset-0 rounded-[15px] rounded-b-none ring-1 ring-inset ring-[rgba(255,246,230,0.1)]" />

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[9px] rounded-b-none border border-b-0 border-black/70 bg-[#0f1219] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6),inset_0_2px_14px_rgba(0,0,0,0.55)]">
            {children}
            {/* Glass: single diagonal reflection from the key light */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(255,247,232,0.07)_0%,rgba(255,247,232,0.015)_18%,transparent_42%)]" />
            {/* Subtle screen vignette to seat the panel into glass */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
            {/* Slow, near-invisible light sweep */}
            <div className="pointer-events-none absolute inset-x-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-[rgba(255,246,230,0.012)] to-transparent" />
          </div>

          {/* Camera */}
          <div className="absolute left-1/2 top-[3px] h-[3px] w-12 -translate-x-1/2 rounded-b-md bg-black/85" />
          {/* Hinge recess */}
          <div className="h-[6px] w-full bg-gradient-to-b from-black/55 to-transparent" />
        </div>

        {/* Deck — brushed aluminium base with front lip */}
        <div className="relative -mt-px">
          <div className="mx-[-3%] h-[11px] rounded-b-[11px] rounded-t-[2px] bg-gradient-to-b from-[#524d43] via-[#2c2922] to-[#111010] shadow-[0_26px_50px_-16px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(255,247,232,0.2)]">
            {/* Front thumb notch */}
            <div className="mx-auto h-[5px] w-[76px] rounded-b-[6px] bg-black/60" />
            {/* Base front-edge reflection */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-[rgba(255,247,232,0.12)]" />
          </div>
          {/* Contact shadow on the surface */}
          <div className="mx-[7%] h-2 rounded-[50%] bg-black/40 blur-lg" />
        </div>
      </div>

      {/* Warm ground reflection — restrained, no color cast */}
      <div className="absolute -bottom-12 left-1/2 h-20 w-[82%] -translate-x-1/2 rounded-full bg-[#f4e9d6]/[0.045] blur-3xl" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: rotateY(-13deg) rotateX(5.5deg) translateY(0); }
          50% { transform: rotateY(-13deg) rotateX(5.5deg) translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
