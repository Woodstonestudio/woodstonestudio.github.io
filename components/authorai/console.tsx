/**
 * AuthorAI — the believable interface behind the glass.
 * A precision writing workstation: a document rail, a focused
 * manuscript column with live caret, and a margin where a
 * suggestion waits to be asked. Warm amber/gold appears ONLY
 * here. Server component, CSS motion.
 */

const outline = [
  { t: "I · Sessiz Makine", active: true },
  { t: "II · Ölçülü Olmak Üzerine", active: false },
  { t: "III · Kenar", active: false },
  { t: "IV · Ölçülü Sessizlik", active: false },
];

export function AuthorAIConsole() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0b0a08] text-left text-zinc-300">
      {/* Header — editor bar */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-3.5 py-2.5 font-mono">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#c79a4e]/20 text-[9px] font-semibold text-[#e0b877]">
            A
          </span>
          <span className="text-[11px] font-medium tracking-tight text-zinc-100">
            AuthorAI
          </span>
          <span className="text-[9px] text-zinc-600">/ el yazması</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-zinc-500">
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1">
            Taslak
          </span>
          <span className="tabular-nums">1.284 kelime</span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Outline rail */}
        <div className="hidden w-[116px] shrink-0 flex-col gap-0.5 border-r border-white/[0.06] p-2 font-mono sm:flex">
          <span className="px-2 pb-1 text-[7px] uppercase tracking-[0.14em] text-zinc-600">
            İçindekiler
          </span>
          {outline.map((o) => (
            <span
              key={o.t}
              className={`relative rounded-[5px] px-2.5 py-1.5 text-[9px] leading-tight ${
                o.active ? "bg-white/[0.05] text-zinc-100" : "text-zinc-500"
              }`}
            >
              {o.active && (
                <span className="absolute inset-y-1.5 left-0 w-[2px] rounded-full bg-[#c79a4e]" />
              )}
              {o.t}
            </span>
          ))}
        </div>

        {/* Manuscript + margin */}
        <div className="grid min-w-0 flex-1 grid-cols-1 sm:grid-cols-[1fr_0.66fr]">
          {/* The page */}
          <div className="flex min-w-0 flex-col justify-center px-5 py-4">
            <div className="font-serif text-[14px] font-medium tracking-tight text-zinc-100">
              Sessiz Makine
            </div>
            <div className="mt-3 space-y-2 text-[10px] leading-[1.75] text-zinc-400">
              <p>
                İyi araçlar görünmez olur. En iyileri, dikkatinizle
                yarışmak yerine onu size geri verir.
              </p>
              <p>
                Bu, her yapımcının verdiği ama azının tuttuğu bir sözdür
                <span className="ml-[1px] inline-block h-[12px] w-[1.5px] translate-y-[2px] animate-pulse-soft bg-[#e0b877]" />
              </p>
            </div>
          </div>

          {/* Margin — suggestion on request. Hidden on mobile. */}
          <div className="hidden min-w-0 flex-col justify-center border-l border-white/[0.06] px-3.5 py-4 sm:flex">
            <div className="animate-[riseIn_0.9s_cubic-bezier(0.22,1,0.36,1)_1s_both] border-l-2 border-[#c79a4e]/45 pl-2.5">
              <div className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#e0b877]/80">
                Öneri
              </div>
              <p className="mt-1.5 text-[9.5px] italic leading-[1.65] text-zinc-500">
                …ve daha da azı ölçer. Sessizliğini hissettiğiniz ama
                hiç fark etmediğiniz bir aracı düşünün.
              </p>
              <div className="mt-2.5 flex gap-1.5 font-mono">
                <span className="rounded-[4px] bg-[#c79a4e] px-2 py-1 text-[8px] font-medium text-[#1a1509]">
                  Accept
                </span>
                <span className="rounded-[4px] border border-white/10 px-2 py-1 text-[8px] text-zinc-500">
                  Dismiss
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes riseIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
