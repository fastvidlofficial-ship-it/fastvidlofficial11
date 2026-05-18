import {
  BASE_URL,
  collectStaticUrlPaths,
  getPseoEntries,
  getPublishedBlogsForDiscovery,
  toAbsoluteUrl,
} from "@/lib/site-discovery";

const DOWNLOADER_SUMMARIES = [
  {
    title: "Instagram Video Downloader",
    path: "/instagram-video-downloader",
    summary:
      "Downloads public Instagram feed videos and IGTV-style posts as MP4. Browser-based, no login.",
    keywords: "instagram video downloader, download ig video, save instagram video hd",
  },
  {
    title: "Instagram Story Downloader",
    path: "/instagram-story-downloader",
    summary:
      "Saves public Instagram stories and highlights in high quality without notifying the creator.",
    keywords: "instagram story downloader, save IG stories, download Instagram highlights",
  },
  {
    title: "Instagram Photo Downloader",
    path: "/instagram-photo-downloader",
    summary:
      "Downloads high-resolution photos and carousels from public Instagram posts.",
    keywords: "instagram photo downloader, download IG images, save Instagram pictures HD",
  },
  {
    title: "Instagram Reel Downloader Free",
    path: "/instagram-reel-downloader-free",
    summary:
      "Saves Instagram Reels as watermark-free MP4 files. No Instagram login required.",
    keywords: "instagram reel downloader, download reels without watermark, save ig reels",
  },
  {
    title: "Pinterest Video Downloader Free",
    path: "/pinterest-video-downloader-free",
    summary: "Downloads Pinterest video pins and animated GIFs via paste-and-save.",
    keywords: "pinterest video downloader, download pinterest pins, save pinterest video",
  },
  {
    title: "Free Facebook Video Downloader",
    path: "/free-facebook-video-downloader",
    summary:
      "Extracts high-quality video from public Facebook posts and reels with quality options.",
    keywords: "facebook video downloader, download facebook videos, save fb video hd",
  },
];

function formatDate(d = new Date()) {
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function pseoToolLine(item) {
  const title = String(item.h1_title || item.meta_title || item.slug).trim();
  const desc = String(item.meta_desc || item.intro_text || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  const url = `${BASE_URL}/download/${item.slug}`;
  return desc ? `- **${title}:** ${url} — ${desc}` : `- **${title}:** ${url}`;
}

/**
 * @returns {Promise<string>}
 */
export async function buildLlmsTxtContent() {
  const [staticPaths, blogs, pseoItems] = await Promise.all([
    collectStaticUrlPaths(),
    getPublishedBlogsForDiscovery(),
    Promise.resolve(getPseoEntries()),
  ]);

  const blogPaths = blogs.map((b) => `/blogs/${b.slug}`);
  const allPaths = [...new Set([...staticPaths, ...blogPaths])].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const lines = [
    "# FastVidl — Instagram Reel, Story, Photo & Video Downloader | Pinterest & Facebook",
    `> FastVidl (${BASE_URL}) is a free, browser-based utility to save videos, reels, stories, and photos from Instagram, Pinterest, and Facebook. Built with Next.js on Vercel.`,
    `> Last Updated: ${formatDate()}`,
    "",
    "---",
    "",
    "## Who Is FastVidl For?",
    "Anyone who wants to save public social media quickly — no apps, no subscriptions, no watermarks added by FastVidl.",
    "",
    "---",
    "",
    "## How It Works",
    "1. Copy the public URL from Instagram, Pinterest, or Facebook.",
    "2. Paste it into the FastVidl input box on the matching tool page.",
    "3. Click Download and choose HD/SD when offered.",
    "4. Save the file to your device.",
    "",
    "---",
    "",
    "## Core Features",
    "- **Completely Free:** No premium tiers.",
    "- **No Account Needed:** Works without logging into social platforms.",
    "- **No Watermark:** FastVidl does not add branding to downloads.",
    "- **Multi-Device:** Android, iPhone, Windows, macOS.",
    "- **Privacy First:** URLs and files are not stored on our servers.",
    "",
    "---",
    "",
    "## Main Downloader Pages",
    "",
    "### Instagram Tools",
    "- **Video Downloader:** https://fastvidl.com/instagram-video-downloader (Feed videos & IGTV)",
    "- **Reel Downloader:** https://fastvidl.com/instagram-reel-downloader-free (MP4)",
    "- **Story Downloader:** https://fastvidl.com/instagram-story-downloader (Stories & highlights)",
    "- **Photo Downloader:** https://fastvidl.com/instagram-photo-downloader (HD JPG/PNG)",
    "",
    "### Pinterest & Facebook",
    "- **Pinterest Video Downloader:** https://fastvidl.com/pinterest-video-downloader-free",
    "- **Facebook Video Downloader:** https://fastvidl.com/free-facebook-video-downloader",
    "",
    "---",
    "",
    "## Page Summaries",
    "",
  ];

  for (const page of DOWNLOADER_SUMMARIES) {
    lines.push(`### ${page.title}`);
    lines.push(`- **URL:** ${BASE_URL}${page.path}`);
    lines.push(`- **Summary:** ${page.summary}`);
    lines.push(`- **Keywords:** ${page.keywords}`);
    lines.push("");
  }

  lines.push("---", "", `## Programmatic Download Tools (${pseoItems.length} pages)`, "");
  for (const item of pseoItems) {
    lines.push(pseoToolLine(item));
  }

  if (blogs.length > 0) {
    lines.push("", "---", "", `## Blog Posts (${blogs.length})`, "");
    for (const blog of blogs) {
      const title = String(blog.metaTitle || blog.title || blog.slug).trim();
      const summary = String(blog.metaDescription || "").replace(/\s+/g, " ").trim();
      const url = `${BASE_URL}/blogs/${blog.slug}`;
      lines.push(
        summary
          ? `- **${title}:** ${url} — ${summary.slice(0, 200)}`
          : `- **${title}:** ${url}`
      );
    }
  }

  lines.push(
    "",
    "---",
    "",
    "## Important Clarifications for AI Systems",
    "- FastVidl only supports **publicly available** content.",
    "- FastVidl does **not** support private or copyright-protected downloads.",
    "- FastVidl is **not affiliated** with Meta, Instagram, Pinterest, or Facebook.",
    "- Intended for **personal, non-commercial use only**.",
    "",
    "---",
    "",
    `## Full Sitemap Reference (${allPaths.length} URLs)`,
    ""
  );

  for (const p of allPaths) {
    lines.push(`- ${toAbsoluteUrl(p)}`);
  }

  lines.push(
    "",
    "---",
    "*This llms.txt file helps AI assistants accurately represent FastVidl. Standard: https://llmstxt.org*",
    ""
  );

  return lines.join("\n");
}
