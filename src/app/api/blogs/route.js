import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

/**
 * GET /api/blogs — public listing.
 *   ?q=     optional search query
 *   ?page=  1-based page index (default 1)
 *   ?limit= rows per page (default 10, max 50)
 */
export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const limit = Math.min(
    50,
    Math.max(1, parseInt(searchParams.get("limit") || "10", 10) || 10)
  );

  const filter = { published: true };
  if (q) {
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    filter.$or = [
      { title: re },
      { slug: re },
      { metaTitle: re },
      { metaKeywords: re },
      { metaDescription: re },
    ];
  }

  const total = await Blog.countDocuments(filter);

  const useAll = !!q;

  let cursor = Blog.find(filter, {
    title: 1,
    slug: 1,
    metaTitle: 1,
    metaDescription: 1,
    image: 1,
    imageAlt: 1,
    createdAt: 1,
  }).sort({ createdAt: -1 });

  if (useAll) {
    cursor = cursor.limit(500);
  } else {
    cursor = cursor.skip((page - 1) * limit).limit(limit);
  }

  const items = await cursor.lean();

  return NextResponse.json({
    ok: true,
    items,
    total,
    page: useAll ? 1 : page,
    limit: useAll ? items.length : limit,
    pages: useAll ? 1 : Math.max(1, Math.ceil(total / limit)),
  });
}
