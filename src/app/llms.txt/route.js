import { buildLlmsTxtContent } from "@/lib/llms-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const body = await buildLlmsTxtContent();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
