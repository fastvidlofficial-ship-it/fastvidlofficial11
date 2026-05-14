import { NextResponse } from "next/server";
import { get } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Public-facing proxy for blog images stored in a private Vercel Blob store.
 *
 * Why this exists:
 * - Private blob URLs cannot be embedded directly in <img src>.
 * - Blog thumbnails / featured images are public site content.
 * - We still restrict access to the `blogs/` prefix so this route can't be
 *   used to fetch unrelated private blobs from the same store.
 */
export async function GET(req) {
  const pathname = req.nextUrl.searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json(
      { ok: false, error: "Missing pathname" },
      { status: 400 }
    );
  }

  if (!pathname.startsWith("blogs/")) {
    return NextResponse.json(
      { ok: false, error: "Invalid blob path" },
      { status: 400 }
    );
  }

  try {
    const result = await get(pathname, {
      access: "private",
      ifNoneMatch: req.headers.get("if-none-match") ?? undefined,
    });

    if (!result) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.blob.etag,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    if (result.statusCode !== 200 || !result.stream) {
      return new NextResponse("Not found", { status: 404 });
    }

    return new NextResponse(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        ETag: result.blob.etag,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Blob fetch failed" },
      { status: 500 }
    );
  }
}
