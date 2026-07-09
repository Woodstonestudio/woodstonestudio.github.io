/** Content model for the AuthorAI product page. */

export const overview =
  "AuthorAI is a writing instrument, not an autopilot. A focused page where structure stays out of the way, suggestions wait to be asked, and the words remain unmistakably yours — from first draft to finished piece.";

export const problem = {
  eyebrow: "The problem",
  headline: "Most AI writing tools crowd the page.",
  body: "They interrupt, autocomplete over your voice, and turn writing into a negotiation with a machine. The result reads like everyone else's — competent, generic, and no longer quite yours.",
};

export const solution = {
  eyebrow: "The solution",
  headline: "Assistance kept in the margin.",
  body: "AuthorAI keeps the page clear and the help at arm's length. Suggestions appear when you ask for them, structure is offered rather than imposed, and every sentence stays yours to accept, rewrite or ignore.",
};

export const features = [
  { n: "01", name: "The focused page", body: "A calm, distraction-free editor with a live caret and generous margin — built for long-form work, not quick replies." },
  { n: "02", name: "Suggestions on request", body: "Continuations and rewrites appear in the margin only when asked, so the machine never writes over your voice." },
  { n: "03", name: "Structure, offered", body: "Chapter and section outlines you can adopt or ignore — a scaffold that never becomes a cage." },
  { n: "04", name: "Your voice, preserved", body: "Every suggestion is a proposal. Accept, rewrite or dismiss — the finished text remains unmistakably yours." },
  { n: "05", name: "Draft to publish", body: "Move from blank page to finished piece in one place, with the manuscript always in view." },
  { n: "06", name: "Quiet by default", body: "No pop-ups, no autocomplete racing ahead — assistance stays out of the way until you reach for it." },
];

export const workflow = [
  { step: "Draft", detail: "Open a clean page and write. The editor stays quiet and out of the way." },
  { step: "Ask", detail: "Request a continuation or rewrite; a suggestion appears in the margin, never on the line." },
  { step: "Shape", detail: "Adopt an outline where it helps; restructure freely without losing your place." },
  { step: "Publish", detail: "Take the finished manuscript from draft to published piece in the same surface." },
];

export const assistance = [
  { name: "Continue", body: "A proposed next passage in your voice, offered in the margin for you to accept or refine." },
  { name: "Rewrite", body: "A gentler or sharper version of a selected passage, without overwriting the original until you choose." },
  { name: "Outline", body: "A structural suggestion for chapters and sections you can adopt piece by piece." },
];

export const tech = [
  ["Framework", "Next.js 15 · React 19"],
  ["Language", "TypeScript"],
  ["Assistance", "OpenAI"],
  ["Data", "Supabase"],
  ["Auth", "Supabase Auth"],
  ["Editor", "Focused manuscript surface"],
  ["Styling", "Tailwind CSS"],
  ["Status", "In active development"],
];

export const roadmap = [
  { when: "Now", title: "The focused editor", detail: "A distraction-free manuscript surface with margin suggestions and offered structure.", done: true },
  { when: "Next", title: "Publishing flow", detail: "From finished draft to published piece without leaving the page.", done: false },
  { when: "Later", title: "Long-form projects", detail: "Multi-chapter manuscripts with structure that holds across a whole book.", done: false },
];

export const faq = [
  { q: "Is AuthorAI available yet?", a: "AuthorAI is in active development. The focused editor and margin assistance are taking shape; publishing and long-form project support come next." },
  { q: "Will AI write for me?", a: "Only when you ask. Suggestions appear in the margin as proposals — the machine never writes over your voice or autocompletes on the line." },
  { q: "Does it keep my writing mine?", a: "Yes. Every suggestion is accept, rewrite or dismiss. The finished text stays unmistakably yours." },
  { q: "What is AuthorAI built on?", a: "A Next.js 15 and TypeScript stack with Supabase for data and auth, and OpenAI powering the optional assistance." },
];
