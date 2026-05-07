import { promises as fs } from "node:fs";
import path from "node:path";
import pseoAll from "../../pseo-data.json";

const BASE_URL = "https://fastvidl.com";

const PAGE_FILE_RE = /^page\.(js|jsx|ts|tsx)$/;

/** Slugs for programmatic /download/[slug] pages */
function getPseoSlugs() {
  if (!Array.isArray(pseoAll)) return [];
  return pseoAll
    .map((item) => (item && typeof item.slug === "string" ? item.slug.trim() : ""))
    .filter(Boolean);
}

/**
 * Walk src/app and collect route folder paths (posix) that contain a page file.
 * Examples: "", "about-us", "download/[slug]"
 */
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
    const name = entry.name;
    if (name === "api") continue;

    const childRel = relativePosix ? `${relativePosix}/${name}` : name;
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

function getRouteMetadata(urlPath) {
  if (urlPath === "/") {
    return { changeFrequency: "daily", priority: 1.0 };
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
    return { changeFrequency: "weekly", priority: 0.8 };
  }

  if (urlPath.startsWith("/download/")) {
    return { changeFrequency: "weekly", priority: 0.8 };
  }

  return { changeFrequency: "weekly", priority: 0.9 };
}

function toSitemapEntry(urlPath, lastModified) {
  const { changeFrequency, priority } = getRouteMetadata(urlPath);
  const url = urlPath === "/" ? BASE_URL : `${BASE_URL}${urlPath}`;
  return {
    url,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default async function sitemap() {
  const lastModified = new Date();
  const appRoot = path.join(process.cwd(), "src", "app");
  const pseoSlugs = getPseoSlugs();

  const folderRoutes = await discoverRouteFolders(appRoot);
  const urlPathsSet = new Set();

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

  const sortedPaths = [...urlPathsSet].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  return sortedPaths.map((p) => toSitemapEntry(p, lastModified));
}
