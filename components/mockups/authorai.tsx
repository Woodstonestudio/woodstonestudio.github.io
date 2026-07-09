/**
 * AuthorAI — the writing instrument.
 * Warm paper, editorial serif-like restraint, generous margin.
 * The suggestion is asked for, never imposed. Server-safe.
 */

export function AuthorAIUI() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f4f1e9] text-left text-[#1c1a15]">
      {/* Slim editor bar */}
      <div className="flex items-center justify-between border-b border-black/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-medium tracking-tight">AuthorAI</span>
          <span className="font-mono text-[8px] tracking-wide text-black/40">
            DRAFT · CHAPTER III
          </span>
        </div>
        <span className="font-mono text-[8px] text-black/40">1,284 WORDS</span>
      </div>

      {/* The page */}
      <div className="flex min-h-0 flex-1 flex-col justify-center px-8 py-5">
        <div className="text-[15px] font-medium tracking-tight">
          The Quiet Machine
        </div>
        <div className="mt-3 space-y-2 text-[10.5px] leading-[1.7] text-black/70">
          <p>
            Good tools disappear. The best of them return your attention
            rather than competing for it.
          </p>
          <p>
            That is the promise every maker makes and few keep
            <span className="ml-[1px] inline-block h-[13px] w-[1.5px] translate-y-[2px] animate-pulse-soft bg-[#1c1a15]" />
          </p>
        </div>

        {/* Suggestion — offered, in the margin, on request */}
        <div className="mt-5 animate-[riseIn_0.9s_cubic-bezier(0.22,1,0.36,1)_1.1s_both] border-l-2 border-black/25 pl-3">
          <div className="font-mono text-[7.5px] tracking-[0.14em] text-black/40">
            SUGGESTED CONTINUATION
          </div>
          <p className="mt-1.5 text-[10.5px] italic leading-[1.65] text-black/55">
            …and fewer still measure. Consider an example — a tool whose
            silence you have felt but never noticed.
          </p>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-sm bg-[#1c1a15] px-2.5 py-1 text-[8px] font-medium text-[#f4f1e9]">
              Accept
            </span>
            <span className="rounded-sm border border-black/15 px-2.5 py-1 text-[8px] text-black/50">
              Dismiss
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes riseIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
