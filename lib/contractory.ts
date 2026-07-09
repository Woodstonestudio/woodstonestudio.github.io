/** Content model for the Contractory product page. */

export const overview =
  "Contractory is a deployment workstation for Arc. It folds the whole lifecycle of a smart contract — compilation, constructor configuration, deployment and verification — into a single, deliberate surface built for teams who ship in production.";

export const problem = {
  eyebrow: "The problem",
  headline: "Deployment became a ritual of a dozen tools.",
  body: "Shipping a contract means stitching together a compiler, a script, a wallet, a block explorer and a verification step — each with its own failure mode. The work that matters gets buried under ceremony, and a single missed constructor argument can cost a redeploy.",
};

export const solution = {
  eyebrow: "The solution",
  headline: "One surface, from source to verified.",
  body: "Contractory reads constructor inputs straight from the compiled ABI, generates typed defaults, and takes a contract from compilation to a verified address without leaving the page. Deployment reverts are caught before they cost you.",
};

export const features = [
  {
    n: "01",
    name: "Typed deployment",
    body: "Constructor inputs are read from the compiled ABI and rendered as typed fields with sensible defaults — no hand-written scripts.",
  },
  {
    n: "02",
    name: "Verification, built in",
    body: "Source verification runs as part of deployment, not as an afterthought. Every address lands verified on the explorer.",
  },
  {
    n: "03",
    name: "Revert detection",
    body: "Failing deploys are detected and surfaced before they consume gas, with the revert reason read back plainly.",
  },
  {
    n: "04",
    name: "Standards, covered",
    body: "ERC-20, ERC-721 and ERC-1155 out of the box, each with its constructor shape understood.",
  },
  {
    n: "05",
    name: "Lifecycle in one place",
    body: "Deploy, verify and review recent activity from a single console — no context-switching between tools.",
  },
  {
    n: "06",
    name: "Arc-native",
    body: "Built for Circle's Arc — USDC-native gas, Chain ID 5042002 — with the network's specifics handled for you.",
  },
];

export const tech = [
  ["Framework", "Next.js 15 · React 19"],
  ["Language", "TypeScript"],
  ["Contracts", "Solidity · ABI-driven"],
  ["Chain", "Arc — Chain ID 5042002"],
  ["Wallet", "wagmi · RainbowKit"],
  ["Editor", "Monaco"],
  ["Data", "Supabase"],
  ["Styling", "Tailwind CSS"],
];

export const architecture = [
  { step: "Compile", detail: "solc compiles the contract; the ABI becomes the source of truth for inputs." },
  { step: "Configure", detail: "Constructor fields are generated from the ABI and typed automatically." },
  { step: "Deploy", detail: "The transaction is submitted to Arc; reverts are detected before gas is spent." },
  { step: "Verify", detail: "Source is verified on the explorer as part of the same flow." },
];

export const roadmap = [
  { when: "v1.0", title: "Deployment workstation", detail: "Typed deploys, verification and revert detection for ERC-20/721/1155 on Arc.", done: true },
  { when: "v1.1", title: "Contract intelligence", detail: "Guided fixes and inline analysis for common contract issues.", done: false },
  { when: "v1.2", title: "Team workspaces", detail: "Shared deployment history and roles for production teams.", done: false },
];

export const faq = [
  { q: "Which chain does Contractory target?", a: "Circle's Arc — an EVM L1 with USDC-native gas, Chain ID 5042002. The network's specifics are handled inside the tool." },
  { q: "Which token standards are supported?", a: "ERC-20, ERC-721 and ERC-1155, each with its constructor shape understood and generated from the compiled ABI." },
  { q: "Is Contractory open source?", a: "Yes. The repository ships with a README, MIT licence and contribution guidelines." },
  { q: "How does verification work?", a: "Source verification runs as part of the deployment flow, so contracts land verified on the explorer without a separate step." },
];
