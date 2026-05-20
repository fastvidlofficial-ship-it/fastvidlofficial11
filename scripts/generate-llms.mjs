/**
 * Regenerate public/llms.txt (no Next.js path aliases required).
 * Run: node scripts/generate-llms.mjs
 */
import { writeFile, readFile } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import mongoose from "mongoose";

const BASE_URL = "https://fastvidl.com";
const envPath = resolve(process.cwd(), ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) {
      process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

const INDEXABLE_STATIC = [
  "/",
  "/about-us",
  "/author/raja-jahangir",
  "/blogs",
  "/contact-us",
  "/cookie-policy",
  "/disclaimer",
  "/dmca-takedown",
  "/faqs",
  "/free-facebook-video-downloader",
  "/instagram-photo-downloader",
  "/instagram-reel-downloader-free",
  "/instagram-story-downloader",
  "/instagram-video-downloader",
  "/pinterest-video-downloader-free",
  "/privacy-policy",
  "/terms-and-conditions",
].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const DOWNLOADER_SUMMARIES = [
  {
    title: "Instagram Video Downloader",
    path: "/instagram-video-downloader",
    summary:
      "Downloads public Instagram feed videos and IGTV-style posts as MP4. Browser-based, no login.",
  },
  {
    title: "Instagram Reel Downloader Free",
    path: "/instagram-reel-downloader-free",
    summary:
      "Saves Instagram Reels as watermark-free MP4 files. No Instagram login required.",
  },
  {
    title: "Instagram Story Downloader",
    path: "/instagram-story-downloader",
    summary:
      "Saves public Instagram stories and highlights in high quality.",
  },
  {
    title: "Instagram Photo Downloader",
    path: "/instagram-photo-downloader",
    summary:
      "Downloads high-resolution photos and carousels from public Instagram posts.",
  },
  {
    title: "Pinterest Video Downloader Free",
    path: "/pinterest-video-downloader-free",
    summary: "Downloads Pinterest video pins and animated GIFs via paste-and-save.",
  },
  {
    title: "Free Facebook Video Downloader",
    path: "/free-facebook-video-downloader",
    summary:
      "Extracts high-quality video from public Facebook posts and reels.",
  },
];

function formatDate() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

async function fetchBlogs() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return [];
  const BlogSchema = new mongoose.Schema({}, { strict: false, collection: "blogs" });
  const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
  await mongoose.connect(uri);
  const blogs = await Blog.find(
    { published: true },
    { slug: 1, title: 1, metaTitle: 1, metaDescription: 1 }
  )
    .sort({ createdAt: -1 })
    .lean();
  await mongoose.disconnect();
  return blogs;
}

const pseoRaw = await readFile(resolve(process.cwd(), "pseo-data.json"), "utf8");
const pseoItems = JSON.parse(pseoRaw).filter((i) => i?.slug);

const blogs = await fetchBlogs();
const blogPaths = blogs.map((b) => `/blogs/${b.slug}`);
const indexablePaths = [...new Set([...INDEXABLE_STATIC, ...blogPaths])].sort(
  (a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  }
);

const lines = [
  "---",
  "# FastVidl, Free Instagram, Pinterest & Facebook Downloader",
  `> FastVidl (${BASE_URL}) is a free, browser-based utility to save videos, reels, stories, and photos from Instagram, Pinterest, and Facebook. Built with Next.js on Vercel.`,
  `> Last Updated: ${formatDate()}`,
  "",
  "---",
  "",
  "## About FastVidl",
  "",
  "FastVidl is a free online media downloader for saving publicly available social media content. The tool runs entirely in the browser: no app installation, no account creation, no watermark added by FastVidl.",
  "",
  "**Key Facts:**",
  "- Free to use with no subscription",
  "- No social media login required",
  "- No watermark added to downloaded files",
  "- Works on iPhone, Android, Windows, and Mac",
  "- Does not store user URLs or downloaded files on servers",
  "- HTTPS for all connections",
  "- Cookie consent before optional ads/analytics (Ezoic, Google tag)",
  "",
  "**Organization:** Auroxa Tech, Rawalpindi, Pakistan (launched August 2025).",
  "**Author:** Raja Jahangir, https://fastvidl.com/author/raja-jahangir",
  "**Contact:** fastvidlofficial@gmail.com",
  "**About:** https://fastvidl.com/about-us",
  "",
  "---",
  "",
  "## Main Downloader Pages (canonical)",
  "",
];

for (const page of DOWNLOADER_SUMMARIES) {
  lines.push(
    `- [${page.title}](${BASE_URL}${page.path}), ${page.summary}`
  );
}

lines.push(
  "",
  "---",
  "",
  `## Specialized Download Tools (${pseoItems.length} pages)`,
  "",
  "Supplementary keyword pages under `/download/*`. Each page sets **noindex** and a **canonical** URL to the main downloader above. These URLs are **not** in sitemap.xml; robots.txt disallows `/download/` for crawl efficiency.",
  ""
);

for (const item of pseoItems) {
  const title = String(item.h1_title || item.meta_title || item.slug).trim();
  const desc = String(item.meta_desc || item.intro_text || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  const url = `${BASE_URL}/download/${item.slug}`;
  lines.push(desc ? `- [${title}](${url}), ${desc}` : `- [${title}](${url})`);
}

if (blogs.length > 0) {
  lines.push("", "---", "", `## Blog Posts & Tutorials (${blogs.length})`, "");
  for (const blog of blogs) {
    const title = String(blog.metaTitle || blog.title || blog.slug).trim();
    const summary = String(blog.metaDescription || "").replace(/\s+/g, " ").trim();
    const url = `${BASE_URL}/blogs/${blog.slug}`;
    lines.push(
      summary
        ? `- [${title}](${url}), ${summary.slice(0, 200)}`
        : `- [${title}](${url})`
    );
  }
}

lines.push(
  "",
  "---",
  "",
  "## Important Notes for AI Systems",
  "",
  "- Public content only; private profiles are not supported.",
  "- FastVidl is not affiliated with Meta, Instagram, Facebook, or Pinterest.",
  "- Personal, non-commercial use; users must respect copyright and platform Terms.",
  "- Legacy URLs redirect: `/instagram-photo-downloader-free` → `/instagram-photo-downloader`; `/instagram-video-downloader-free` → `/instagram-video-downloader`.",
  "",
  "---",
  "",
  `## Indexable URLs (sitemap.xml, ${indexablePaths.length} URLs)`,
  ""
);

for (const p of indexablePaths) {
  lines.push(p === "/" ? BASE_URL : `${BASE_URL}${p}`);
}

lines.push(
  "",
  "---",
  "*Standard: https://llmstxt.org. Sitemap: https://fastvidl.com/sitemap.xml | Robots: https://fastvidl.com/robots.txt*",
  ""
);

const out = resolve(process.cwd(), "public", "llms.txt");
await writeFile(out, lines.join("\n"), "utf8");
console.log(`Wrote ${out}`);
console.log(`Indexable URLs: ${indexablePaths.length}, PSEO tools: ${pseoItems.length}, Blogs: ${blogs.length}`);
