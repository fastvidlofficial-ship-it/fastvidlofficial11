import { getBlogOgImageAbsolute } from "@/lib/blog-assets";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Static SEO metadata when MongoDB is unavailable or a post record is missing fields.
 * Ensures crawlers always receive canonical, OG, and Twitter tags.
 */
export const BLOG_METADATA_FALLBACKS = {
  "save-instagram-stories-with-music-not-muted": {
    title: "How to Save Instagram Stories with Music (Without It Muting)",
    description:
      "Are your saved Instagram stories completely silent? Learn exactly how to bypass the mute restriction and download IG stories with their original music intact.",
  },
  "download-instagram-carousel-photos-phone": {
    title: "How to Download an Instagram Carousel (Multiple Photos) on Phone",
    description:
      "Want to save multiple photos from an Instagram post? Learn the easiest, safest way to download a full Instagram carousel directly to your iPhone or Android gallery.",
  },
  "instagram-action-block-fix": {
    title: "What is Instagram Action Block & How to Fix It Fast",
    description:
      "Instagram action blocked your account? Learn why it happens and proven fixes to restore likes, follows, and saves without risking another ban.",
  },
  "clear-instagram-cache": {
    title: "How to Clear Instagram Cache on iPhone & Android (2026)",
    description:
      "Instagram stores temporary files that slow down your phone over time. Step-by-step guide for clearing Instagram cache on iPhone and Android in under 2 minutes.",
  },
  "why-downloaded-video-quality-is-bad-fix": {
    title: "Why Downloaded Video Quality Is Bad (and How to Fix It)",
    description:
      "Blurry or low-resolution downloads? Learn why social apps compress video and how to save Instagram and Facebook clips in better quality.",
  },
  "facebook-video-no-sound-quick-fix": {
    title: "Why Downloaded Facebook Video Has No Sound (Quick Fix)",
    description:
      "Downloaded Facebook videos often play silently due to split audio tracks. This guide explains why it happens and how to fix it on iPhone and Android.",
  },
  "fix-blurry-facebook-videos": {
    title: "Why Facebook Videos Are Blurry After Download",
    description:
      "Facebook compresses uploads heavily. Learn why your saved videos look soft and how to download clearer copies when possible.",
  },
  "save-facebook-videos-camera-roll": {
    title: "How to Save Facebook Videos to Your Camera Roll",
    description:
      "Step-by-step guide to saving public Facebook videos to your iPhone or Android camera roll for offline viewing.",
  },
  "download-facebook-live-videos-after-end": {
    title: "How to Download Facebook Live Videos After They End",
    description:
      "Missed a live stream? Learn how to save a Facebook Live replay after the broadcast ends using public links.",
  },
  "facebook-videos-not-playing-loading-fixes": {
    title: "Facebook Videos Not Playing or Loading? Fixes",
    description:
      "Facebook videos stuck buffering or failing to play? Troubleshoot network, cache, and format issues on mobile and desktop.",
  },
  "pinterest-not-saving-pictures-fix": {
    title: "Pinterest Not Saving Pictures? Fix It",
    description:
      "Pinterest save button greyed out or failing? Common causes and fixes for saving pins on iPhone, Android, and iPad.",
  },
  "download-hd-wallpapers-pinterest-iphone": {
    title: "Download HD Wallpapers From Pinterest on iPhone",
    description:
      "Save full-resolution Pinterest wallpapers to your iPhone gallery without losing quality.",
  },
  "pinterest-gif-not-saving-as-video-fix": {
    title: "Pinterest GIF Not Saving as Video? Fix",
    description:
      "Animated Pinterest pins saving as still images? Learn how to download GIFs and video pins correctly.",
  },
  "save-pinterest-board-offline-viewing-ipad-iphone": {
    title: "Save a Pinterest Board for Offline Viewing on iPad and iPhone",
    description:
      "Want to view your Pinterest inspiration without internet? Learn how to save a full board for offline viewing on iPad and iPhone.",
  },
  "transfer-large-downloaded-videos-iphone-to-pc": {
    title: "Transfer Large Downloaded Videos From iPhone to PC",
    description:
      "Moving big video files from iPhone to Windows or Mac? Compare AirDrop, cable, and cloud methods that actually work.",
  },
};

/**
 * @param {string} slug
 * @param {import('next').Metadata} [fromBlog]
 */
export function buildBlogPageMetadata(slug, fromBlog = null) {
  const key = String(slug || "").toLowerCase();
  const fallback = BLOG_METADATA_FALLBACKS[key];
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blogs/${key}`;
  const ogUrl = getBlogOgImageAbsolute(key, siteUrl);

  const title =
    fromBlog?.metaTitle ||
    fromBlog?.title ||
    fallback?.title ||
    "FastVidl Blog Article";
  const description =
    fromBlog?.metaDescription ||
    fallback?.description ||
    `${title}. Read the full guide on FastVidl.`;

  return {
    metadataBase: fromBlog?.metadataBase,
    title,
    description,
    keywords: fromBlog?.metaKeywords || undefined,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: fromBlog?.imageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}
