import type { ReactNode } from "react";

/**
 * A crafted display vessel for a product screen. Two material modes,
 * one family: `dark` is the anodized aluminium panel (Contractory,
 * AlphaOS); `paper` is a warm sheet on a soft surface (AuthorAI).
 * Static object — CSS only, no colored glow.
 */
export function DeviceFrame({
  children,
  material = "dark",
}: {
  children: ReactNode;
  material?: "dark" | "paper";
}) {
  if (material === "paper") {
    return (
      <div className="relative">
        {/* Soft overhead light on the surface */}
        <div className="absolute -inset-x-8 -top-14 bottom-0 bg-[radial-gradient(50%_55%_at_50%_0%,rgba(255,248,235,0.08),transparent_72%)]" />
        {/* The sheet */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[#f4f1e9] shadow-[0_2px_2px_rgba(0,0,0,0.15),0_30px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-black/[0.06]">
          {/* Top edge catching light */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/70" />
          {children}
          {/* Faint paper sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.35)_0%,transparent_28%)]" />
        </div>
        {/* Contact shadow */}
        <div className="mx-[10%] mt-1 h-2 rounded-[50%] bg-black/25 blur-lg" />
      </div>
    );
  }

  // dark anodized panel
  return (
    <div className="relative">
      <div className="absolute -inset-x-8 -top-16 bottom-0 bg-[radial-gradient(48%_54%_at_50%_0%,rgba(255,244,224,0.05),transparent_74%)]" />
      <div className="relative rounded-[13px] bg-gradient-to-b from-[#3a3730] via-[#232019] to-[#171410] p-[6px] shadow-[0_44px_88px_-28px_rgba(0,0,0,0.82)]">
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full bg-[rgba(255,247,232,0.32)]" />
        <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-gradient-to-b from-[rgba(255,247,232,0.18)] via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-[13px] ring-1 ring-inset ring-[rgba(255,246,230,0.08)]" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-black/70 bg-[#0a0c10] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6),inset_0_2px_14px_rgba(0,0,0,0.5)]">
          {children}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(255,247,232,0.055)_0%,rgba(255,247,232,0.01)_18%,transparent_42%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.38)]" />
        </div>
      </div>
      <div className="mx-[9%] mt-1.5 h-2 rounded-[50%] bg-black/35 blur-lg" />
    </div>
  );
}
