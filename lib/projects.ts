/**
 * Project data model.
 *
 * Structured so each entry can later back a dedicated /work/[slug]
 * page (hero → overview → challenge → solution → technology →
 * gallery → next project) without reshaping data.
 *
 * `story` is a two-beat editorial narrative, not a feature list.
 * `stat` is a single quiet proof point shown as a spec line.
 */

export type ProjectSlug = "contractory" | "alphaos" | "authorai";

export interface Project {
  slug: ProjectSlug;
  index: string;
  name: string;
  label: string;
  headline: string;
  story: string;
  tech: string[];
  stat: { value: string; unit: string };
  url?: string;
  cta: string;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "contractory",
    index: "01",
    name: "Contractory",
    label: "Developer OS for Arc",
    headline: "Deployment, without the ceremony.",
    story:
      "Shipping a contract used to mean a dozen tools and a held breath. Contractory folds compilation, constructor args, deployment and verification into one calm surface — the ritual reduced to a single, deliberate motion.",
    tech: ["Next.js", "TypeScript", "Solidity", "Arc"],
    stat: { value: "1", unit: "Interface, end to end" },
    url: "https://contractory.xyz",
    cta: "Visit Contractory",
  },
  {
    slug: "alphaos",
    index: "02",
    name: "AlphaOS",
    label: "On-chain reputation · Base",
    headline: "Reputation you can verify.",
    story:
      "Trust on-chain is usually a claim. AlphaOS makes it a measurement — quests completed, badges earned, every operator resolved to a Basename and ranked by a score that anyone can audit down to the transaction.",
    tech: ["Next.js", "Base", "Basenames", "MCP"],
    stat: { value: "10+", unit: "Operators, live on Base" },
    url: "https://alphaos.site",
    cta: "Visit AlphaOS",
  },
  {
    slug: "authorai",
    index: "03",
    name: "AuthorAI",
    label: "A writing instrument",
    headline: "A quieter way to write.",
    story:
      "Most AI writing tools crowd the page. AuthorAI keeps the margin — a focused editor where suggestions wait to be asked, structure stays out of the way, and the words remain unmistakably yours.",
    tech: ["Next.js 15", "Supabase", "OpenAI"],
    stat: { value: "0", unit: "Distractions on the page" },
    cta: "In development",
    status: "In development",
  },
];
