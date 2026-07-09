import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { Instrument } from "@/components/contractory/instrument";
import { AlphaOSConsole } from "@/components/alphaos/console";
import { Band, SectionHead, Eyebrow } from "@/components/contractory/page/parts";
import {
  overview,
  problem,
  solution,
  features,
  tech,
  architecture,
  roadmap,
  faq,
} from "@/lib/alphaos";

const BLUE = "text-[#7fa0ff]";

export const metadata: Metadata = {
  title: "AlphaOS — Reputation you can verify",
  description:
    "AlphaOS is a reputation layer for Base — quests, XP, badges and Founder Pass, every operator resolved to a Basename and ranked in the open.",
  alternates: { canonical: "/alphaos" },
};

export default function AlphaOSPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero (object LEFT — opposite of Contractory) ── */}
        <section className="relative mx-auto flex min-h-svh max-w-6xl items-center overflow-x-clip px-6 pb-24 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.86fr] lg:gap-20">
            {/* Object left */}
            <Reveal delay={0.2} y={28} className="order-2 mt-4 lg:order-1 lg:mt-0">
              <div className="origin-[right_center] lg:-ml-10 lg:scale-[1.08]">
                <Instrument>
                  <AlphaOSConsole />
                </Instrument>
              </div>
              <p className="mt-6 pl-1 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8 lg:pr-1">
                Nº 02 — Reputation instrument · Base
              </p>
            </Reveal>

            {/* Copy right */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow>AlphaOS</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 text-[54px] font-light leading-[1.03] tracking-tightest text-bone sm:text-[64px] lg:text-[76px]">
                  Reputation
                  <br />
                  you can
                  <br />
                  verify.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex max-w-md items-center gap-4">
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    On-chain reputation
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    Built on Base
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-11 flex flex-wrap items-center gap-4">
                  <a
                    href="https://alphaos.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                  >
                    Launch AlphaOS
                  </a>
                  <Link
                    href="/#products"
                    className="rounded-full border border-line px-7 py-3 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                  >
                    All products
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Overview ── */}
        <Band>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-light leading-[1.5] tracking-tight text-bone">
                {overview}
              </p>
            </Reveal>
          </div>
        </Band>

        {/* ── Problem ── */}
        <Band>
          <SectionHead eyebrow={problem.eyebrow} headline={problem.headline} body={problem.body} />
        </Band>

        {/* ── Solution ── */}
        <Band>
          <SectionHead eyebrow={solution.eyebrow} headline={solution.headline} body={solution.body} />
        </Band>

        {/* ── Features ── */}
        <Band>
          <Reveal>
            <Eyebrow>Features</Eyebrow>
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-px sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.n} delay={(i % 2) * 0.06}>
                <div className="border-t border-line py-8">
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-sm ${BLUE}`}>{f.n}</span>
                    <h3 className="text-xl font-normal tracking-tight text-bone">
                      {f.name}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-gray-warm">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── Architecture ── */}
        <Band>
          <SectionHead eyebrow="Architecture" headline="Activity to reputation, in four moves." />
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {architecture.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.06}>
                <div className="h-full border-t border-line py-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pr-4">
                  <span className={`font-mono text-sm ${BLUE}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-normal tracking-tight text-bone">
                    {a.step}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-gray-warm">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── Gallery ── */}
        <Band>
          <SectionHead eyebrow="Product screens" headline="The instrument, up close." />
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal y={24}>
              <Instrument>
                <AlphaOSConsole />
              </Instrument>
              <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                Leaderboard — Basename-resolved, all-time
              </p>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <div className="lg:mt-16">
                <Instrument>
                  <AlphaOSConsole />
                </Instrument>
                <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                  Operator proof — quests, badges, verified
                </p>
              </div>
            </Reveal>
          </div>
        </Band>

        {/* ── Technology ── */}
        <Band>
          <SectionHead eyebrow="Technology" headline="Base-native, verifiable by design." />
          <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
            {tech.map(([k, v], i) => (
              <Reveal key={k} delay={(i % 2) * 0.05}>
                <div className="flex items-baseline justify-between gap-6 border-t border-line py-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-warm">
                    {k}
                  </span>
                  <span className="text-right text-[15px] tracking-tight text-bone">
                    {v}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── Roadmap ── */}
        <Band>
          <SectionHead eyebrow="Roadmap" headline="From reputation to rewards." />
          <div className="mt-14 space-y-px">
            {roadmap.map((r, i) => (
              <Reveal key={r.when} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-7 sm:grid-cols-[100px_1fr]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        r.done ? "bg-[#3b6bff]" : "bg-gray-warm/50"
                      }`}
                    />
                    <span className="font-mono text-[13px] tracking-tight text-bone">
                      {r.when}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal tracking-tight text-bone">
                      {r.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-[1.7] text-gray-warm">
                      {r.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── FAQ ── */}
        <Band>
          <SectionHead eyebrow="FAQ" headline="Questions, answered." />
          <div className="mt-14 grid gap-x-16 gap-y-px lg:grid-cols-2">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 2) * 0.06}>
                <div className="border-t border-line py-8">
                  <h3 className="text-lg font-normal tracking-tight text-bone">
                    {item.q}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-gray-warm">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── CTA ── */}
        <Band>
          <div className="flex flex-col items-start gap-10">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-light leading-[1.08] tracking-tightest text-bone sm:text-5xl lg:text-[60px]">
                Earn a reputation
                <br />
                you can prove.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://alphaos.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3.5 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                >
                  Launch AlphaOS
                </a>
                <Link
                  href="/#contact"
                  className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                >
                  Talk to the studio
                </Link>
              </div>
            </Reveal>
          </div>
        </Band>
      </main>
      <Footer />
    </>
  );
}
