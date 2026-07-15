/**
 * Contractory — the believable interface behind the glass.
 * A functional-feeling deployment console: chain + wallet, a
 * standard selector, a real form, a live build log and recent
 * deployments with status. Violet appears ONLY here.
 * Server component — all motion is CSS.
 */

const rail = [
  { label: "Dağıt", active: true },
  { label: "Doğrula", active: false },
  { label: "Etkinlik", active: false },
];

const log = [
  { t: "solc 0.8.24 — compiling WoodToken.sol", s: "run" },
  { t: "compiled · 1 file · 1.2s", s: "ok" },
  { t: "constructor(\"WoodToken\", \"WOOD\", 1_000_000, 18)", s: "run" },
  { t: "estimating gas · 0.00042 ETH", s: "run" },
  { t: "deploy tx 0x7f3a…c21e mined @ block 21,904,118", s: "ok" },
  { t: "source verified on explorer", s: "ok" },
];

const recent = [
  { name: "WoodToken", std: "ERC-20", status: "Dağıtıldı", tone: "ok" },
  { name: "AtelierPass", std: "ERC-721", status: "Doğrulanıyor", tone: "run" },
  { name: "EditionsV2", std: "ERC-1155", status: "Beklemede", tone: "wait" },
];

function Dot({ tone }: { tone: string }) {
  const c =
    tone === "ok"
      ? "bg-emerald-400"
      : tone === "run"
        ? "bg-contractory"
        : "bg-zinc-500";
  return <span className={`h-1.5 w-1.5 rounded-full ${c}`} />;
}

export function ContractoryConsole() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0b0e] font-mono text-left text-zinc-300">
      {/* ── Header: brand · chain selector · wallet ── */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-contractory/20 text-[9px] font-semibold text-contractory-soft">
            C
          </span>
          <span className="text-[11px] font-medium tracking-tight text-zinc-100">
            Contractory
          </span>
          <span className="text-[9px] text-zinc-600">/ deploy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Arc
            <span className="text-zinc-600">▾</span>
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-zinc-400">
            0x7f3a…c21e
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* ── Left rail ── */}
        <div className="hidden w-[92px] shrink-0 flex-col gap-0.5 border-r border-white/[0.06] p-2 sm:flex">
          {rail.map((r) => (
            <span
              key={r.label}
              className={`relative rounded-[5px] px-2.5 py-1.5 text-[10px] ${
                r.active
                  ? "bg-white/[0.05] text-zinc-100"
                  : "text-zinc-500"
              }`}
            >
              {r.active && (
                <span className="absolute inset-y-1.5 left-0 w-[2px] rounded-full bg-contractory" />
              )}
              {r.label}
            </span>
          ))}
          <div className="my-1 h-px bg-white/[0.06]" />
          <span className="rounded-[5px] px-2.5 py-1.5 text-[10px] text-zinc-600">
            Sözleşmeler
          </span>
          <span className="rounded-[5px] px-2.5 py-1.5 text-[10px] text-zinc-600">
            Ayarlar
          </span>
        </div>

        {/* ── Main ── */}
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 p-3.5 lg:grid-cols-[1fr_0.92fr]">
          {/* Form column */}
          <div className="flex min-w-0 flex-col gap-2.5">
            {/* Standard selector */}
            <div className="flex gap-1 rounded-md border border-white/[0.07] bg-black/30 p-0.5">
              {["ERC-20", "ERC-721", "ERC-1155"].map((t, i) => (
                <span
                  key={t}
                  className={`flex-1 rounded-[5px] px-2 py-1 text-center text-[9px] ${
                    i === 0
                      ? "bg-contractory/15 text-contractory-soft ring-1 ring-inset ring-contractory/30"
                      : "text-zinc-500"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Fields */}
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Ad", "WoodToken"],
                ["Sembol", "WOOD"],
                ["Arz", "1.000.000"],
                ["Ondalık", "18"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <div className="text-[7px] uppercase tracking-[0.12em] text-zinc-500">
                    {k}
                  </div>
                  <div className="mt-0.5 text-[10px] text-zinc-100">{v}</div>
                </div>
              ))}
            </div>

            {/* Deploy — the only strong violet */}
            <button
              type="button"
              tabIndex={-1}
              className="mt-0.5 flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-b from-contractory to-[#6f5fe0] px-3 py-2 text-[10px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_2px_8px_rgba(139,124,246,0.25)]"
            >
              Deploy to Arc
              <span aria-hidden>→</span>
            </button>
          </div>

          {/* Log + recent column — hidden on mobile for a simplified view */}
          <div className="hidden min-w-0 flex-col gap-2.5 sm:flex">
            {/* Build log */}
            <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-white/[0.07] bg-black/45 p-2.5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[7px] uppercase tracking-[0.14em] text-zinc-500">
                  Derleme günlüğü
                </span>
                <span className="flex items-center gap-1 text-[7px] text-emerald-300">
                  <span className="h-1 w-1 animate-pulse-soft rounded-full bg-emerald-400" />
                  live
                </span>
              </div>
              <div className="space-y-[3px]">
                {log.map((l, i) => (
                  <p
                    key={l.t}
                    className="animate-[logIn_0.5s_ease-out_both] text-[8px] leading-relaxed"
                    style={{ animationDelay: `${0.15 * i + 0.3}s` }}
                  >
                    <span
                      className={
                        l.s === "ok" ? "text-emerald-300" : "text-zinc-500"
                      }
                    >
                      {l.s === "ok" ? "✓ " : "→ "}
                    </span>
                    <span className={l.s === "ok" ? "text-zinc-300" : "text-zinc-400"}>
                      {l.t}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            {/* Recent deployments */}
            <div className="rounded-md border border-white/[0.07] bg-white/[0.02] p-2.5">
              <div className="mb-1.5 text-[7px] uppercase tracking-[0.14em] text-zinc-500">
                Son dağıtımlar
              </div>
              <div className="space-y-1.5">
                {recent.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <Dot tone={d.tone} />
                    <span className="w-20 truncate text-[9px] text-zinc-200">
                      {d.name}
                    </span>
                    <span className="text-[8px] text-zinc-500">{d.std}</span>
                    <span className="ml-auto text-[8px] text-zinc-400">
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logIn { from { opacity:0; transform:translateY(3px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
