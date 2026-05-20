import { promises as fs } from "node:fs";
import path from "node:path";
import pseoAll from "../../pseo-data.json";
import { dbConnect } from "@/lib/db";
import Blog from "@/models/Blog";

export const BASE_URL = "https://fastvidl.com";

const PAGE_FILE_RE = /^page\.(js|jsx|ts|tsx)$/;
const SITEMAP_SKIP_FOLDERS = new Set(["api", "admin-dashboard"]);

/** Always include, nav-critical pages that must never drop from discovery. */
const REQUIRED_STATIC_PATHS = [
  "/instagram-photo-downloader-free",
  "/instagram-video-downloader",
];

export function getPseoSlugs() {
  if (!Array.isArray(pseoAll)) return [];
  return pseoAll
    .map((item) => (item && typeof item.slug === "string" ? item.slug.trim() : ""))
    .filter(Boolean);
}

export function getPseoEntries() {
  if (!Array.isArray(pseoAll)) return [];
  return pseoAll.filter((item) => item && typeof item.slug === "string" && item.slug.trim());
}

async function discoverRouteFolders(appRootAbs, relativePosix = "") {
  const dirAbs = relativePosix ? path.join(appRootAbs, ...relativePosix.split("/")) : appRootAbs;
  const entries = await fs.readdir(dirAbs, { withFileTypes: true });

  const routes = [];

  const hasPage = entries.some((e) => e.isFile() && PAGE_FILE_RE.test(e.name));
  if (hasPage) {
    routes.push(relativePosix);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (SITEMAP_SKIP_FOLDERS.has(entry.name)) continue;

    const childRel = relativePosix ? `${relativePosix}/${entry.name}` : entry.name;
    const nested = await discoverRouteFolders(appRootAbs, childRel);
    routes.push(...nested);
  }

  return routes;
}

function toPublicPath(routeFolder) {
  if (!routeFolder) return "/";
  const segments = routeFolder.split("/").filter(Boolean);
  const urlSegments = [];
  for (const seg of segments) {
    if (seg.startsWith("(") && seg.endsWith(")")) continue;
    if (seg.startsWith("[")) {
      urlSegments.push(seg);
      continue;
    }
    urlSegments.push(seg);
  }
  if (urlSegments.some((s) => s.startsWith("["))) {
    return null;
  }
  return `/${urlSegments.join("/")}`;
}

function expandDynamicRoutes(routeFolder, pseoSlugs) {
  if (routeFolder === "download/[slug]") {
    return pseoSlugs.map((slug) => `/download/${slug}`);
  }
  return [];
}

/**
 * @returns {Promise<string[]>}
 */
export async function collectStaticUrlPaths() {
  const appRoot = path.join(process.cwd(), "src", "app");
  const pseoSlugs = getPseoSlugs();
  const folderRoutes = await discoverRouteFolders(appRoot);
  const urlPathsSet = new Set(REQUIRED_STATIC_PATHS);

  for (const folder of folderRoutes) {
    const staticPath = toPublicPath(folder);
    if (staticPath) {
      urlPathsSet.add(staticPath);
      continue;
    }
    for (const expanded of expandDynamicRoutes(folder, pseoSlugs)) {
      urlPathsSet.add(expanded);
    }
  }

  return [...urlPathsSet].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

/**
 * @returns {Promise<Array<{ slug: string, title: string, metaTitle: string, metaDescription: string, createdAt: Date, updatedAt: Date }>>}
 */
export async function getPublishedBlogsForDiscovery() {
  try {
    await dbConnect();
    return Blog.find(
      { published: true },
      {
        slug: 1,
        title: 1,
        metaTitle: 1,
        metaDescription: 1,
        createdAt: 1,
        updatedAt: 1,
      }
    )
      .sort({ createdAt: -1 })
      .lean();
  } catch {
    return [];
  }
}

export function getRouteMetadata(urlPath) {
  if (urlPath === "/") {
    return { changeFrequency: "weekly", priority: 1.0 };
  }

  const legalPaths = new Set([
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/disclaimer",
  ]);

  if (legalPaths.has(urlPath)) {
    return { changeFrequency: "yearly", priority: 0.5 };
  }

  if (urlPath === "/dmca-takedown") {
    return { changeFrequency: "yearly", priority: 0.55 };
  }

  if (urlPath === "/about-us" || urlPath === "/contact-us") {
    return { changeFrequency: "monthly", priority: 0.7 };
  }

  if (urlPath === "/faqs") {
    return { changeFrequency: "monthly", priority: 0.65 };
  }

  if (urlPath === "/blogs") {
    return { changeFrequency: "weekly", priority: 0.85 };
  }

  if (urlPath.startsWith("/blogs/")) {
    return { changeFrequency: "monthly", priority: 0.7 };
  }

  if (urlPath.startsWith("/download/")) {
    return { changeFrequency: "monthly", priority: 0.8 };
  }

  const downloaderRoots = [
    "/instagram-reel-downloader-free",
    "/instagram-photo-downloader-free",
    "/instagram-story-downloader",
    "/instagram-video-downloader",
    "/pinterest-video-downloader-free",
    "/free-facebook-video-downloader",
  ];
  if (downloaderRoots.includes(urlPath)) {
    return { changeFrequency: "weekly", priority: 0.95 };
  }

  if (urlPath.startsWith("/author/")) {
    return { changeFrequency: "monthly", priority: 0.6 };
  }

  return { changeFrequency: "monthly", priority: 0.9 };
}

export function toAbsoluteUrl(urlPath) {
  return urlPath === "/" ? BASE_URL : `${BASE_URL}${urlPath}`;
}
