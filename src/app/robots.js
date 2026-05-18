import { BASE_URL } from "@/lib/site-discovery";

/** Paths crawlers should reach (prefix rules apply for trailing-slash paths). */
const PUBLIC_ALLOW = [
  "/",
  "/download/",
  "/blogs",
  "/author/",
  "/instagram-reel-downloader-free",
  "/instagram-photo-downloader",
  "/instagram-story-downloader",
  "/instagram-video-downloader",
  "/pinterest-video-downloader-free",
  "/free-facebook-video-downloader",
  "/faqs",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/dmca-takedown",
  "/cookie-policy",
  "/images/",
  "/llms.txt",
  "/sitemap.xml",
];

const COMMON_DISALLOW = ["/api/", "/_next/", "/admin-dashboard/", "/admin/"];

const AI_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot-Extended",
  "meta-externalagent",
  "Applebot",
];

const SEARCH_USER_AGENTS = ["Googlebot", "Bingbot", "DuckDuckBot"];

const SOCIAL_USER_AGENTS = [
  "FacebookBot",
  "Pinterest",
  "Twitterbot",
  "LinkedInBot",
];

const BLOCKED_USER_AGENTS = [
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "SeznamBot",
  "Exabot",
  "360Spider",
  "SiteExplorer",
  "ScrapyBot",
  "PetalBot",
  "DataForSeoBot",
  "ZoominfoBot",
];

function allowRules(userAgent, { allow = PUBLIC_ALLOW, disallow = COMMON_DISALLOW } = {}) {
  return { userAgent, allow, disallow };
}

/**
 * Dynamic robots.txt — replaces public/robots.txt so rules stay in sync with the app.
 *
 * @returns {import("next").MetadataRoute.Robots}
 */
export default function robots() {
  const rules = [
    allowRules("*"),
    ...SEARCH_USER_AGENTS.map((ua) => allowRules(ua)),
    ...AI_USER_AGENTS.map((ua) => allowRules(ua)),
    ...SOCIAL_USER_AGENTS.map((ua) =>
      allowRules(ua, {
        allow: [
          "/",
          "/download/",
          "/blogs",
          "/instagram-photo-downloader",
          "/instagram-story-downloader",
          "/instagram-reel-downloader-free",
          "/instagram-video-downloader",
          "/images/",
          "/og-image.png",
        ],
        disallow: ["/api/", "/_next/"],
      })
    ),
    ...BLOCKED_USER_AGENTS.map((ua) => ({
      userAgent: ua,
      disallow: "/",
    })),
  ];

  return {
    rules,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
