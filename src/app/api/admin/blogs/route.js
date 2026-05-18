import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Blog from "@/models/Blog";
import { getAdminSession } from "@/lib/auth";
import { slugify } from "@/lib/slugify";
import { prepareBlogHtml, normalizeBlogImageUrl } from "@/lib/blog-html";
import { submitBlogPostToIndexNow } from "@/lib/indexnow";

export const dynamic = "force-dynamic";

async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

/**
 * GET /api/admin/blogs
 *   ?q=        search query (matches title / metaTitle / metaKeywords)
 *   ?page=     1-based page index (default 1)
 *   ?limit=    rows per page (default 10, max 1000)
 *   ?all=1     ignore pagination and return everything matching
 */
export async function GET(req) {
  const denied = await requireAdmin();
  if (denied) return denied;

  await dbConnect();

  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const all = searchParams.get("all") === "1";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const limit = Math.min(
    2000,
    Math.max(1, parseInt(searchParams.get("limit") || "10", 10) || 10)
  );

  const filter = {};
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
  let cursor = Blog.find(filter).sort({ createdAt: -1 });

  if (all) {
    // Return every matching document (used for admin search).
    cursor = cursor.limit(2000);
  } else {
    cursor = cursor.skip((page - 1) * limit).limit(limit);
  }

  const items = await cursor.lean();

  return NextResponse.json({
    ok: true,
    items,
    total,
    page: all ? 1 : page,
    limit: all ? items.length : limit,
    pages: all ? 1 : Math.max(1, Math.ceil(total / limit)),
  });
}

/**
 * POST /api/admin/blogs — create a new blog post.
 */
export async function POST(req) {
  const denied = await requireAdmin();
  if (denied) return denied;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  await dbConnect();

  const title = String(body.title || "").trim();
  if (!title) {
    return NextResponse.json({ ok: false, error: "Title is required" }, { status: 400 });
  }

  let slug = slugify(body.slug || title);
  if (!slug) slug = `post-${Date.now().toString(36)}`;

  // Ensure slug uniqueness by appending -2, -3, ... if needed.
  const baseSlug = slug;
  let suffix = 2;
  while (await Blog.exists({ slug })) {
    slug = `${baseSlug}-${suffix++}`;
  }

  const faqs = Array.isArray(body.faqs)
    ? body.faqs
        .map((f) => ({
          question: String(f?.question || "").trim(),
          answer: String(f?.answer || "").trim(),
        }))
        .filter((f) => f.question || f.answer)
    : [];

  const longDescription = await prepareBlogHtml(
    String(body.longDescription || ""),
    slug
  );
  const image = normalizeBlogImageUrl(String(body.image || "").trim());
  const published = body.published !== false;

  const doc = await Blog.create({
    metaTitle: String(body.metaTitle || "").trim(),
    metaDescription: String(body.metaDescription || "").trim(),
    metaKeywords: String(body.metaKeywords || "").trim(),
    title,
    slug,
    longDescription,
    image,
    imageAlt: String(body.imageAlt || "").trim(),
    faqs,
    published,
  });

  if (published) {
    submitBlogPostToIndexNow(slug);
  }

  return NextResponse.json({ ok: true, item: doc.toJSON() }, { status: 201 });
}
