import { buildRss } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildRss("tr"), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
