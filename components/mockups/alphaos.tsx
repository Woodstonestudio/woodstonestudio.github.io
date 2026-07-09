/**
 * AlphaOS — the technical instrument.
 * Clean, precise, Base-blue restraint. Reads like an on-chain
 * measurement panel, not a crypto landing page. Server-safe (CSS motion).
 */

const rows = [
  { rank: "01", name: "atlas.base.eth", score: 2840, w: "94%" },
  { rank: "02", name: "kavak.base.eth", score: 2615, w: "86%" },
  { rank: "03", name: "nomad.base.eth", score: 2390, w: "78%" },
  { rank: "04", name: "0x91b2…4af7", score: 2114, w: "69%" },
  { rank: "05", name: "lumen.base.eth", score: 1987, w: "64%" },
];

export function AlphaOSUI() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0c10] text-left font-mono">
      {/* Header rail */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#2151ff]/15 text-[9px] font-semibold text-[#7fa0ff]">
            α
          </span>
          <span className="text-[11px] font-medium tracking-tight text-zinc-100">
            AlphaOS
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#3b6bff]" />
          BASE · BLOCK 21,904,118
        </div>
      </div>

      {/* Measurement stats */}
      <div className="grid grid-cols-3 border-b border-white/[0.06]">
        {[
          ["OPERATORS", "10+"],
          ["QUESTS", "24"],
          ["VERIFIED", "100%"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`px-4 py-3 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}
          >
            <div className="text-[7.5px] tracking-[0.14em] text-zinc-500">
              {k}
            </div>
            <div className="mt-1 text-[15px] font-medium tracking-tight text-zinc-100">
              {v}
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard — precise, tabular */}
      <div className="min-h-0 flex-1 px-4 py-3">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[7.5px] tracking-[0.16em] text-zinc-500">
            OPERATOR REPUTATION
          </span>
          <span className="text-[7.5px] text-zinc-600">ALL-TIME</span>
        </div>
        <div className="space-y-[7px]">
          {rows.map((r, i) => (
            <div key={r.rank} className="flex items-center gap-3">
              <span
                className={`w-5 text-[9px] tabular-nums ${
                  i === 0 ? "text-[#7fa0ff]" : "text-zinc-500"
                }`}
              >
                {r.rank}
              </span>
              <span className="w-24 truncate text-[9px] text-zinc-300">
                {r.name}
              </span>
              <span className="relative h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                <span
                  className="absolute inset-y-0 left-0 origin-left animate-[barGrow_1.2s_cubic-bezier(0.22,1,0.36,1)_both] rounded-full bg-gradient-to-r from-[#3b6bff] to-[#3b6bff]/40"
                  style={{ width: r.w, animationDelay: `${0.12 * i + 0.2}s` }}
                />
              </span>
              <span className="w-9 text-right text-[9px] tabular-nums text-zinc-400">
                {r.score.toLocaleString("en-US")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
