/**
 * Contractory — rendered product UI.
 * Pure markup + CSS animation, so it stays a Server Component.
 */

const logLines = [
  { t: "→ compiling WoodToken.sol", d: "0s" },
  { t: "✓ compiled in 1.2s", d: "0.9s" },
  { t: "→ constructor args: [\"WoodToken\", \"WOOD\", 1000000]", d: "1.8s" },
  { t: "→ deploying to Arc…", d: "2.7s" },
  { t: "✓ deployed 0x7f3a…c21e", d: "3.8s" },
  { t: "✓ verified on explorer", d: "4.6s" },
];

export function ContractoryUI() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0b0d12] text-left">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
        </div>
        <span className="ml-2 font-mono text-[9px] tracking-wide text-zinc-400">
          contractory.xyz — deploy
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] text-zinc-400">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          Arc · connected
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <div className="hidden w-[104px] shrink-0 flex-col gap-0.5 border-r border-line p-2 sm:flex">
          {["Contracts", "Deploy", "Verify", "Activity", "Settings"].map(
            (item, i) => (
              <span
                key={item}
                className={`rounded-md px-2 py-1.5 text-[10px] ${
                  i === 1
                    ? "bg-white/[0.09] text-white"
                    : "text-zinc-500"
                }`}
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Main panel */}
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-3.5">
          <div className="flex items-center gap-2">
            {["ERC-20", "ERC-721", "ERC-1155"].map((t, i) => (
              <span
                key={t}
                className={`rounded-full border px-2.5 py-1 font-mono text-[9px] ${
                  i === 0
                    ? "border-contractory/40 bg-contractory/10 text-contractory-soft"
                    : "border-line text-zinc-500"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              ["Name", "WoodToken"],
              ["Symbol", "WOOD"],
              ["Supply", "1,000,000"],
              ["Decimals", "18"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-lg border border-line bg-white/[0.045] px-2.5 py-2"
              >
                <div className="text-[8px] uppercase tracking-wider text-zinc-400">
                  {k}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-zinc-100">
                  {v}
                </div>
              </div>
            ))}
          </div>

          {/* Deploy log */}
          <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-line bg-black/55 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-wider text-zinc-400">
                Deployment log
              </span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[8px] text-emerald-300">
                live
              </span>
            </div>
            <div className="space-y-1 font-mono text-[9px] leading-relaxed">
              {logLines.map((l) => (
                <p
                  key={l.t}
                  className="animate-[logIn_0.5s_ease-out_both] text-zinc-300"
                  style={{ animationDelay: l.d }}
                >
                  {l.t.startsWith("✓") ? (
                    <span className="text-emerald-300">{l.t}</span>
                  ) : (
                    l.t
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
