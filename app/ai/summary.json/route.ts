import { buildSummary } from "@/lib/ai-discovery";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSummary());
}
