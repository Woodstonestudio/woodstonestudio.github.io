import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

/** Shared building blocks for product pages — one family, reused. */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  headline,
  body,
}: {
  eyebrow: string;
  headline: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-7 text-3xl font-light leading-[1.1] tracking-tightest text-bone sm:text-4xl lg:text-[44px]">
          {headline}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="mt-7 text-[17px] leading-[1.8] text-gray-warm">{body}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Consistent section shell — same container + rhythm as the homepage. */
export function Band({
  children,
  className = "",
  divide = true,
}: {
  children: ReactNode;
  className?: string;
  divide?: boolean;
}) {
  return (
    <section
      className={`relative overflow-x-clip ${divide ? "border-t border-line" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {children}
      </div>
    </section>
  );
}
