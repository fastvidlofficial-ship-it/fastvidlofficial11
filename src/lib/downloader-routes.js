/** Canonical main downloader paths (single source of truth for nav + SEO). */
export const DOWNLOADER_CANONICAL = {
  instagramPhoto: "/instagram-photo-downloader-free",
  instagramStory: "/instagram-story-downloader",
  instagramVideo: "/instagram-video-downloader",
  instagramReel: "/instagram-reel-downloader-free",
  facebookVideo: "/free-facebook-video-downloader",
  pinterestVideo: "/pinterest-video-downloader-free",
};

/**
 * Parent downloader for a /download/* PSEO page.
 * @param {{ platform?: string, content_type?: string }} entry
 */
export function getParentDownloaderPath(entry) {
  const platform = String(entry?.platform || "").toLowerCase();
  const contentType = String(entry?.content_type || "").toLowerCase();

  if (platform.includes("instagram") || platform === "ig" || platform === "insta") {
    if (contentType.includes("reel")) return DOWNLOADER_CANONICAL.instagramReel;
    if (contentType.includes("story") || contentType.includes("highlight")) {
      return DOWNLOADER_CANONICAL.instagramStory;
    }
    if (contentType.includes("photo") || contentType.includes("image")) {
      return DOWNLOADER_CANONICAL.instagramPhoto;
    }
    return DOWNLOADER_CANONICAL.instagramVideo;
  }

  if (platform.includes("facebook") || platform.includes("fb")) {
    return DOWNLOADER_CANONICAL.facebookVideo;
  }

  if (platform.includes("pinterest") || platform.includes("pin")) {
    return DOWNLOADER_CANONICAL.pinterestVideo;
  }

  return DOWNLOADER_CANONICAL.instagramReel;
}
