/**
 * AlphaOS — the believable interface behind the glass.
 * A technical on-chain reputation instrument: measurement cells,
 * a precise operator leaderboard, and a verifiable operator proof
 * panel. Base-blue appears ONLY here. Server component, CSS motion.
 */

const cells = [
  ["OPERATORS", "10+"],
  ["QUESTS", "24"],
  ["VERIFIED", "100%"],
];

const board = [
  { r: "01", name: "atlas.base.eth", score: 2840, w: "94%", me: true },
  { r: "02", name: "kavak.base.eth", score: 2615, w: "86%" },
  { r: "03", name: "nomad.base.eth", score: 2390, w: "78%" },
  { r: "04", name: "0x91b2…4af7", score: 2114, w: "69%" },
  { r: "05", name: "lumen.base.eth", score: 1987, w: "64%" },
];

export function AlphaOSConsole() {
  return (
    <div className="flex h-full w-full flex-col bg-[#090b0f] font-mono text-left text-zinc-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#3b6bff]/20 text-[10px] font-semibold text-[#7fa0ff]">
            α
          </span>
          <span className="text-[11px] font-medium tracking-tight text-zinc-100">
            AlphaOS
          </span>
          <span className="text-[9px] text-zinc-600">/ leaderboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b6bff]" />
            Base
          </span>
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-zinc-400">
            block 21,904,118
          </span>
        </div>
      </div>

      {/* Measurement cells */}
      <div className="grid grid-cols-3 border-b border-white/[0.06]">
        {cells.map(([k, v], i) => (
          <div
            key={k}
            className={`px-3.5 py-2.5 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}
          >
            <div className="text-[7px] tracking-[0.14em] text-zinc-500">{k}</div>
            <div className="mt-0.5 text-[14px] font-medium tracking-tight text-zinc-100">
              {v}
            </div>
          </div>
        ))}
      </div>

      {/* Body: leaderboard + operator proof */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 p-3.5 sm:grid-cols-[1fr_0.82fr]">
        {/* Leaderboard */}
        <div className="flex min-w-0 flex-col">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[7px] tracking-[0.16em] text-zinc-500">
              OPERATOR REPUTATION
            </span>
            <span className="text-[7px] text-zinc-600">ALL-TIME</span>
          </div>
          <div className="space-y-[7px]">
            {board.map((b, i) => (
              <div key={b.r} className="flex items-center gap-2.5">
                <span
                  className={`w-4 text-[9px] tabular-nums ${
                    b.me ? "text-[#7fa0ff]" : "text-zinc-500"
                  }`}
                >
                  {b.r}
                </span>
                <span
                  className={`w-[92px] truncate text-[9px] ${
                    b.me ? "text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  {b.name}
                </span>
                <span className="relative h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                  <span
                    className="absolute inset-y-0 left-0 origin-left animate-[barGrow_1.1s_cubic-bezier(0.22,1,0.36,1)_both] rounded-full bg-gradient-to-r from-[#3b6bff] to-[#3b6bff]/35"
                    style={{ width: b.w, animationDelay: `${0.1 * i + 0.25}s` }}
                  />
                </span>
                <span className="w-9 text-right text-[9px] tabular-nums text-zinc-400">
                  {b.score.toLocaleString("en-US")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operator proof — hidden on mobile (simplified view) */}
        <div className="hidden min-w-0 flex-col rounded-md border border-white/[0.07] bg-white/[0.02] p-3 sm:flex">
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-[#3b6bff]/60 to-[#1a2340]" />
            <div className="min-w-0">
              <div className="truncate text-[10px] text-zinc-100">
                atlas.base.eth
              </div>
              <div className="text-[7.5px] text-zinc-500">RANK 01 · 2,840</div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {[
              ["Quests", "18 / 24"],
              ["Badges", "6"],
              ["Since", "block 19.2M"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <span className="text-[8px] text-zinc-500">{k}</span>
                <span className="text-[8px] tabular-nums text-zinc-300">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-1.5 pt-3 text-[8px] text-[#7fa0ff]">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#3b6bff]" />
            Verified on Base
          </div>
        </div>
      </div>

      <style>{`
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
