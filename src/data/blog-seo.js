/** Related blog slugs and titles for internal linking (hub-and-spoke). */
export const BLOG_POST_TITLES = {
  "download-instagram-carousel-photos-phone":
    "How to Download Instagram Carousel Photos on Your Phone",
  "save-instagram-stories-with-music-not-muted":
    "Save Instagram Stories With Music (Not Muted)",
  "instagram-action-block-fix": "Instagram Action Blocked? Quick Fixes",
  "clear-instagram-cache": "How to Clear Instagram Cache on iPhone and Android",
  "download-facebook-live-videos-after-end":
    "Download Facebook Live Videos After the Stream Ends",
  "save-facebook-videos-camera-roll": "Save Facebook Videos to Your Camera Roll",
  "facebook-video-no-sound-quick-fix": "Facebook Video Has No Sound? Quick Fix",
  "facebook-videos-not-playing-loading-fixes":
    "Facebook Videos Not Playing or Loading? Fixes",
  "fix-blurry-facebook-videos": "Fix Blurry Facebook Videos After Download",
  "pinterest-not-saving-pictures-fix": "Pinterest Not Saving Pictures? Fix It",
  "download-hd-wallpapers-pinterest-iphone":
    "Download HD Wallpapers From Pinterest on iPhone",
  "pinterest-gif-not-saving-as-video-fix":
    "Pinterest GIF Not Saving as Video? Fix",
  "save-pinterest-board-offline-viewing-ipad-iphone":
    "Save a Pinterest Board for Offline Viewing on iPad and iPhone",
  "why-downloaded-video-quality-is-bad-fix":
    "Why Downloaded Video Quality Is Bad (and How to Fix It)",
  "transfer-large-downloaded-videos-iphone-to-pc":
    "Transfer Large Downloaded Videos From iPhone to PC",
};

/** Three related blog slugs per post (audit linking map). */
export const BLOG_RELATED_SLUGS = {
  "download-instagram-carousel-photos-phone": [
    "save-instagram-stories-with-music-not-muted",
    "instagram-action-block-fix",
    "clear-instagram-cache",
  ],
  "save-instagram-stories-with-music-not-muted": [
    "download-instagram-carousel-photos-phone",
    "download-hd-wallpapers-pinterest-iphone",
    "clear-instagram-cache",
  ],
  "download-facebook-live-videos-after-end": [
    "save-facebook-videos-camera-roll",
    "facebook-video-no-sound-quick-fix",
    "facebook-videos-not-playing-loading-fixes",
  ],
  "facebook-video-no-sound-quick-fix": [
    "download-facebook-live-videos-after-end",
    "fix-blurry-facebook-videos",
    "save-facebook-videos-camera-roll",
  ],
  "fix-blurry-facebook-videos": [
    "facebook-video-no-sound-quick-fix",
    "save-facebook-videos-camera-roll",
    "facebook-videos-not-playing-loading-fixes",
  ],
  "save-facebook-videos-camera-roll": [
    "fix-blurry-facebook-videos",
    "facebook-videos-not-playing-loading-fixes",
    "download-facebook-live-videos-after-end",
  ],
  "facebook-videos-not-playing-loading-fixes": [
    "facebook-video-no-sound-quick-fix",
    "save-facebook-videos-camera-roll",
    "download-facebook-live-videos-after-end",
  ],
  "pinterest-not-saving-pictures-fix": [
    "download-hd-wallpapers-pinterest-iphone",
    "pinterest-gif-not-saving-as-video-fix",
    "save-pinterest-board-offline-viewing-ipad-iphone",
  ],
  "download-hd-wallpapers-pinterest-iphone": [
    "pinterest-not-saving-pictures-fix",
    "save-pinterest-board-offline-viewing-ipad-iphone",
    "pinterest-gif-not-saving-as-video-fix",
  ],
  "pinterest-gif-not-saving-as-video-fix": [
    "pinterest-not-saving-pictures-fix",
    "download-hd-wallpapers-pinterest-iphone",
    "save-pinterest-board-offline-viewing-ipad-iphone",
  ],
  "save-pinterest-board-offline-viewing-ipad-iphone": [
    "download-hd-wallpapers-pinterest-iphone",
    "pinterest-not-saving-pictures-fix",
    "why-downloaded-video-quality-is-bad-fix",
  ],
  "why-downloaded-video-quality-is-bad-fix": [
    "transfer-large-downloaded-videos-iphone-to-pc",
    "save-pinterest-board-offline-viewing-ipad-iphone",
    "save-instagram-stories-with-music-not-muted",
  ],
  "transfer-large-downloaded-videos-iphone-to-pc": [
    "why-downloaded-video-quality-is-bad-fix",
    "save-facebook-videos-camera-roll",
    "download-instagram-carousel-photos-phone",
  ],
  "instagram-action-block-fix": [
    "clear-instagram-cache",
    "download-instagram-carousel-photos-phone",
    "save-instagram-stories-with-music-not-muted",
  ],
  "clear-instagram-cache": [
    "instagram-action-block-fix",
    "download-instagram-carousel-photos-phone",
    "save-instagram-stories-with-music-not-muted",
  ],
};

/** Helpful blog guides per main downloader page. */
export const DOWNLOADER_HELPFUL_GUIDES = {
  "/instagram-reel-downloader-free": [
    {
      slug: "why-downloaded-video-quality-is-bad-fix",
      label: "Why Is My Downloaded Video Quality So Bad?",
    },
    {
      slug: "clear-instagram-cache",
      label: "How to Clear Instagram Cache",
    },
    {
      slug: "save-instagram-stories-with-music-not-muted",
      label: "Save Instagram stories with music not muted",
    },
  ],
  "/instagram-story-downloader": [
    {
      slug: "save-instagram-stories-with-music-not-muted",
      label: "Save Instagram stories with audio intact",
    },
    {
      slug: "clear-instagram-cache",
      label: "Clear Instagram cache when saves fail",
    },
    {
      slug: "instagram-action-block-fix",
      label: "Fix Instagram action blocked errors",
    },
  ],
  "/instagram-photo-downloader": [
    {
      slug: "download-instagram-carousel-photos-phone",
      label: "Download Instagram carousel photos step by step",
    },
    {
      slug: "clear-instagram-cache",
      label: "Clear Instagram cache on iPhone and Android",
    },
    {
      slug: "instagram-action-block-fix",
      label: "Instagram action blocked? Quick fixes",
    },
  ],
  "/instagram-video-downloader": [
    {
      slug: "why-downloaded-video-quality-is-bad-fix",
      label: "Improve downloaded Instagram video quality",
    },
    {
      slug: "save-instagram-stories-with-music-not-muted",
      label: "Save stories and clips with sound",
    },
    {
      slug: "transfer-large-downloaded-videos-iphone-to-pc",
      label: "Transfer large videos from iPhone to PC",
    },
  ],
  "/free-facebook-video-downloader": [
    {
      slug: "download-facebook-live-videos-after-end",
      label: "Download Facebook Live videos after the stream ends",
    },
    {
      slug: "facebook-video-no-sound-quick-fix",
      label: "Facebook video has no sound? Quick fix",
    },
    {
      slug: "save-facebook-videos-camera-roll",
      label: "Save Facebook videos to your camera roll",
    },
  ],
  "/pinterest-video-downloader-free": [
    {
      slug: "download-hd-wallpapers-pinterest-iphone",
      label: "Download HD Pinterest wallpapers on iPhone",
    },
    {
      slug: "save-pinterest-board-offline-viewing-ipad-iphone",
      label: "Save a Pinterest board for offline viewing",
    },
    {
      slug: "pinterest-not-saving-pictures-fix",
      label: "Pinterest not saving pictures? Troubleshooting guide",
    },
  ],
};

import { getParentDownloaderPath } from "@/lib/downloader-routes";

/** First helpful guide for a /download/* PSEO page. */
export function getPseoBlogGuide(entry) {
  const parent = getParentDownloaderPath(entry);
  return DOWNLOADER_HELPFUL_GUIDES[parent]?.[0] || null;
}

export function getRelatedBlogPosts(slug) {
  const related = BLOG_RELATED_SLUGS[slug];
  if (!related?.length) return [];

  return related.map((relatedSlug) => ({
    slug: relatedSlug,
    title:
      BLOG_POST_TITLES[relatedSlug] ||
      relatedSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
}
