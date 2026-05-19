import { dbConnect } from "@/lib/db";
import Blog from "@/models/Blog";
import {
  normalizeBlogDocument,
  normalizeBlogImageUrl,
} from "@/lib/blog-html";

function buildSearchFilter(q) {
  const filter = {};
  if (!q) return filter;
  const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  filter.$or = [
    { title: re },
    { slug: re },
    { metaTitle: re },
    { metaKeywords: re },
    { metaDescription: re },
  ];
  return filter;
}

/**
 * @param {{ q?: string, page?: number, limit?: number }} opts
 */
export async function getPublishedBlogs({ q = "", page = 1, limit = 10 } = {}) {
  await dbConnect();

  const filter = { published: true, ...buildSearchFilter(q) };
  const total = await Blog.countDocuments(filter);

  const useAll = !!q.trim();
  const safeLimit = Math.min(50, Math.max(1, limit));
  const safePage = Math.max(1, page);

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
    cursor = cursor.skip((safePage - 1) * safeLimit).limit(safeLimit);
  }

  const items = await cursor.lean();

  return {
    items: items.map((item) => ({
      ...item,
      image: item.image ? normalizeBlogImageUrl(item.image) : "",
    })),
    total,
    page: useAll ? 1 : safePage,
    limit: useAll ? items.length : safeLimit,
    pages: useAll ? 1 : Math.max(1, Math.ceil(total / safeLimit)),
  };
}

export async function getPublishedBlogBySlug(slug) {
  await dbConnect();
  const doc = await Blog.findOne({
    slug: String(slug || "").toLowerCase(),
    published: true,
  }).lean();

  if (!doc) return null;
  const normalized = await normalizeBlogDocument(doc);

  if (
    normalized?.longDescription &&
    normalized.longDescription !== doc.longDescription
  ) {
    await Blog.updateOne(
      { _id: doc._id },
      { $set: { longDescription: normalized.longDescription } }
    );
  }

  return normalized;
}
