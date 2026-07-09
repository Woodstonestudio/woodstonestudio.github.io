/** Content model for the AlphaOS product page. */

export const overview =
  "AlphaOS is a reputation layer for Base. It turns on-chain activity into a score anyone can audit — quests completed, XP earned, badges held and Founder Passes verified, every operator resolved to a Basename and ranked in the open.";

export const problem = {
  eyebrow: "The problem",
  headline: "On-chain trust is mostly a claim.",
  body: "Wallets are anonymous by default and reputation lives in screenshots and follower counts. There is no shared, verifiable measure of who has actually shown up, contributed and earned standing in a network.",
};

export const solution = {
  eyebrow: "The solution",
  headline: "Reputation, measured on-chain.",
  body: "AlphaOS records contribution as it happens — quests, XP and badges settled to Base — and ranks operators on a leaderboard resolved to Basenames. Every score traces back to a transaction, so standing is earned, not asserted.",
};

export const features = [
  { n: "01", name: "Reputation score", body: "A single, auditable score per operator, computed from on-chain activity and verifiable down to the transaction." },
  { n: "02", name: "Quests", body: "Structured on-chain tasks that grant XP and badges on completion — contribution turned into a measurable act." },
  { n: "03", name: "XP & levels", body: "Experience accrues as operators participate, with tiers that reflect sustained standing rather than a single moment." },
  { n: "04", name: "Founder Pass", body: "An ERC-721 pass that verifies early standing and unlocks free access across the network via a signed check." },
  { n: "05", name: "On-chain identity", body: "Every operator is resolved to a Basename with a TTL cache, so the leaderboard reads as people, not hex." },
  { n: "06", name: "Live leaderboard", body: "An open ranking that updates as scores settle on Base — reputation visible to the whole network." },
];

export const tech = [
  ["Framework", "Next.js · React"],
  ["Chain", "Base (mainnet)"],
  ["Identity", "Basenames · TTL cache"],
  ["Passes", "ERC-721 · ERC-8021 dataSuffix"],
  ["Access", "x402 · signed verification"],
  ["Data", "Supabase analytics"],
  ["Interface", "MCP server"],
  ["Styling", "Tailwind CSS"],
];

export const architecture = [
  { step: "Act", detail: "Operators complete quests and contribute on Base; activity settles on-chain." },
  { step: "Resolve", detail: "Each address resolves to a Basename, cached with a TTL for fast reads." },
  { step: "Score", detail: "XP, badges and Founder Pass status compute into an auditable reputation score." },
  { step: "Rank", detail: "Scores publish to a live, open leaderboard readable by the whole network." },
];

export const roadmap = [
  { when: "Live", title: "Reputation on Base", detail: "Quests, XP, badges, Founder Pass and a Basename-resolved leaderboard, live on Base mainnet.", done: true },
  { when: "Next", title: "Builder Network", detail: "Project profiles with deployer-match verification and an append-only contribution ledger.", done: false },
  { when: "Later", title: "Conditional rewards", detail: "Earnout infrastructure — rewards released against verified on-chain contribution.", done: false },
];

export const faq = [
  { q: "Which network does AlphaOS use?", a: "Base mainnet. Scores, quests and passes all settle on-chain, and the leaderboard reads directly from Base." },
  { q: "What is the Founder Pass?", a: "An ERC-721 pass that verifies early standing. Holding it unlocks free access across the network through a signed, time-limited check." },
  { q: "How is reputation calculated?", a: "From on-chain activity — quests completed, XP earned and badges held — combined into a single score that traces back to transactions." },
  { q: "How are operators identified?", a: "Each address is resolved to a Basename with a TTL cache, so the leaderboard shows names rather than raw addresses." },
];
