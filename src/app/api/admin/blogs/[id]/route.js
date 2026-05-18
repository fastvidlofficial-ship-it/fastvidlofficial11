import { NextResponse } from "next/server";
import mongoose from "mongoose";
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

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function GET(_req, { params }) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  await dbConnect();
  const item = await Blog.findById(id).lean();
  if (!item) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, item });
}

export async function PUT(req, { params }) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  await dbConnect();

  const current = await Blog.findById(id);
  if (!current) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const title = body.title !== undefined ? String(body.title).trim() : current.title;
  if (!title) {
    return NextResponse.json({ ok: false, error: "Title is required" }, { status: 400 });
  }

  let slug = current.slug;
  if (body.slug !== undefined) {
    let nextSlug = slugify(body.slug || title) || current.slug;
    if (nextSlug !== current.slug) {
      const baseSlug = nextSlug;
      let suffix = 2;
      while (await Blog.exists({ slug: nextSlug, _id: { $ne: current._id } })) {
        nextSlug = `${baseSlug}-${suffix++}`;
      }
      slug = nextSlug;
    }
  }

  const faqs = Array.isArray(body.faqs)
    ? body.faqs
        .map((f) => ({
          question: String(f?.question || "").trim(),
          answer: String(f?.answer || "").trim(),
        }))
        .filter((f) => f.question || f.answer)
    : current.faqs;

  current.metaTitle = body.metaTitle !== undefined ? String(body.metaTitle).trim() : current.metaTitle;
  current.metaDescription =
    body.metaDescription !== undefined ? String(body.metaDescription).trim() : current.metaDescription;
  current.metaKeywords =
    body.metaKeywords !== undefined ? String(body.metaKeywords).trim() : current.metaKeywords;
  current.title = title;
  current.slug = slug;
  if (body.longDescription !== undefined) {
    current.longDescription = await prepareBlogHtml(
      String(body.longDescription),
      slug
    );
  }
  if (body.image !== undefined) {
    current.image = normalizeBlogImageUrl(String(body.image).trim());
  }
  current.imageAlt = body.imageAlt !== undefined ? String(body.imageAlt).trim() : current.imageAlt;
  current.faqs = faqs;
  if (body.published !== undefined) current.published = !!body.published;

  await current.save();

  if (current.published) {
    submitBlogPostToIndexNow(current.slug);
  }

  return NextResponse.json({ ok: true, item: current.toJSON() });
}

export async function DELETE(_req, { params }) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { id } = await params;
  if (!isValidId(id)) {
    return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  await dbConnect();
  const res = await Blog.findByIdAndDelete(id).lean();
  if (!res) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
