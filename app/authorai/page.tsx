import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { Instrument } from "@/components/contractory/instrument";
import { AuthorAIConsole } from "@/components/authorai/console";
import { Band, SectionHead, Eyebrow } from "@/components/contractory/page/parts";
import {
  overview,
  problem,
  solution,
  features,
  workflow,
  assistance,
  tech,
  roadmap,
  faq,
} from "@/lib/authorai";

const AMBER = "text-[#c79a4e]";

export const metadata: Metadata = {
  title: "AuthorAI — Yazmanın daha sakin yolu",
  description:
    "AuthorAI bir yazma aracıdır, otopilot değil — yardımın kenarda beklediği ve kelimelerin sizin kaldığı odaklı bir sayfa.",
  alternates: { canonical: "/authorai" },
};

export default function AuthorAIPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero (object RIGHT) ── */}
        <section className="relative mx-auto flex min-h-svh max-w-6xl items-center overflow-x-clip px-6 pb-24 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.86fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>AuthorAI</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 text-[54px] font-light leading-[1.03] tracking-tightest text-bone sm:text-[64px] lg:text-[76px]">
                  Yazmanın
                  <br />
                  daha sakin
                  <br />
                  yolu.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-9 flex max-w-md items-center gap-4">
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    Bir yazma aracı
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-line" />
                  <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.2em] text-gray-warm">
                    Otopilot değil
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-11 flex flex-wrap items-center gap-4">
                  <a
                    href="https://woodstonestudio.com"
                    className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                  >
                    Erken erişim isteyin
                  </a>
                  <Link
                    href="/#products"
                    className="rounded-full border border-line px-7 py-3 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                  >
                    Tüm ürünler
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Object right */}
            <Reveal delay={0.2} y={28} className="mt-4 lg:mt-0">
              <div className="origin-[left_center] lg:-mr-10 lg:scale-[1.08]">
                <Instrument>
                  <AuthorAIConsole />
                </Instrument>
              </div>
              <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm lg:mt-8">
                Nº 03 — Yazma aracı
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Overview ── */}
        <Band>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Genel bakış</Eyebrow>
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

        {/* ── Core Features ── */}
        <Band>
          <Reveal>
            <Eyebrow>Temel özellikler</Eyebrow>
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-px sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.n} delay={(i % 2) * 0.06}>
                <div className="border-t border-line py-8">
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-sm ${AMBER}`}>{f.n}</span>
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

        {/* ── Writing Workflow ── */}
        <Band>
          <SectionHead eyebrow="Yazma akışı" headline="Taslaktan yayına, kesintisiz." />
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {workflow.map((w, i) => (
              <Reveal key={w.step} delay={i * 0.06}>
                <div className="h-full border-t border-line py-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pr-4">
                  <span className={`font-mono text-sm ${AMBER}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-normal tracking-tight text-bone">
                    {w.step}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-gray-warm">
                    {w.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── AI Assistance ── */}
        <Band>
          <SectionHead
            eyebrow="AI yardımı"
            headline="İstenene kadar bekleyen yardım."
            body="AuthorAI'nin el uzattığı üç yol — her biri kenarda bir teklif, asla sizin adınıza yapılan bir değişiklik değil."
          />
          <div className="mt-14 grid gap-x-16 gap-y-px sm:grid-cols-3">
            {assistance.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.06}>
                <div className="border-t border-line py-8">
                  <h3 className="text-lg font-normal tracking-tight text-bone">
                    {a.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-gray-warm">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>

        {/* ── Gallery / Product Screens ── */}
        <Band>
          <SectionHead eyebrow="Ürün ekranları" headline="Sayfa, yakından." />
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal y={24}>
              <Instrument>
                <AuthorAIConsole />
              </Instrument>
              <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                El yazması — odaklı sayfa, canlı imleç
              </p>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <div className="lg:mt-16">
                <Instrument>
                  <AuthorAIConsole />
                </Instrument>
                <p className="mt-6 pl-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-warm">
                  Kenar — istendiğinde sunulan bir öneri
                </p>
              </div>
            </Reveal>
          </div>
        </Band>

        {/* ── Technology ── */}
        <Band>
          <SectionHead eyebrow="Teknoloji" headline="Sakin, özenle seçilmiş bir yığın." />
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
          <SectionHead eyebrow="Yol haritası" headline="Sayfadan yayına." />
          <div className="mt-14 space-y-px">
            {roadmap.map((r, i) => (
              <Reveal key={r.when} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-7 sm:grid-cols-[100px_1fr]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        r.done ? "bg-[#c79a4e]" : "bg-gray-warm/50"
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
          <SectionHead eyebrow="SSS" headline="Sorular, yanıtlar." />
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
                Makineyi sessiz tutarak
                <br />
                yazın.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://woodstonestudio.com"
                  className="rounded-full bg-gradient-to-b from-[#F4F0E7] to-[#E2DCCF] px-7 py-3.5 text-sm font-medium text-[#14120e] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ease-soft hover:-translate-y-px active:scale-[0.98]"
                >
                  Erken erişim isteyin
                </a>
                <Link
                  href="/#contact"
                  className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-soft hover:border-[rgba(239,234,224,0.24)] hover:bg-[rgba(239,234,224,0.04)]"
                >
                  Stüdyoyla konuşun
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
