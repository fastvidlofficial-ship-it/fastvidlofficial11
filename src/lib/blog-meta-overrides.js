/** Human-written meta descriptions (override AI-style CMS copy). */
export const BLOG_META_DESCRIPTION_OVERRIDES = {
  "facebook-video-no-sound-quick-fix":
    "Downloaded Facebook videos often play silently due to split audio tracks. This guide explains why it happens and how to fix it on iPhone and Android.",
  "clear-instagram-cache":
    "Instagram stores temporary files that slow down your phone over time. Step-by-step guide for clearing Instagram cache on iPhone and Android in under 2 minutes.",
};

/**
 * @param {string} slug
 * @param {string} [metaDescription]
 */
export function applyBlogMetaOverrides(slug, metaDescription) {
  const key = String(slug || "").toLowerCase();
  return BLOG_META_DESCRIPTION_OVERRIDES[key] || metaDescription;
}
