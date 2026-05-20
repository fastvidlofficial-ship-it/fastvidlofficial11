/**
 * Blog HTML link fixes: author internal links, homepage → tool pages, cluster injections.
 */

const AUTHOR_LINKEDIN_RE =
  /href=["']https?:\/\/(?:www\.)?linkedin\.com\/in\/raja-jahangir\/?["']/gi;

const HOMEPAGE_HREF_RE = /href=["']https?:\/\/(?:www\.)?fastvidl\.com\/?["']/gi;

const PROFILE_VIEWER_BLOCK_RE =
  /<a[^>]*href=["']https?:\/\/(?:www\.)?fastvidl\.com\/?["'][^>]*>\s*FastVidl Profile Picture Viewer\s*<\/a>/gi;

/** @param {string} slug */
function defaultToolHrefForSlug(slug) {
  const s = String(slug || "").toLowerCase();
  if (s.includes("pinterest")) return "/pinterest-video-downloader-free";
  if (s.includes("facebook")) return "/free-facebook-video-downloader";
  if (s.includes("story") || s.includes("stories")) return "/instagram-story-downloader";
  if (s.includes("carousel") || s.includes("photo")) return "/instagram-photo-downloader";
  if (s.includes("cache") || s.includes("action-block")) return "/instagram-reel-downloader-free";
  if (s.includes("quality") || s.includes("transfer")) return "/instagram-video-downloader";
  return "/instagram-reel-downloader-free";
}

/** @type {Record<string, string>} */
const CLUSTER_INJECTIONS = {
  "clear-instagram-cache": `<p data-fastvidl-cluster="1">If clearing the cache does not fix the problem, you might be dealing with a different issue. Read our guide on <a href="/blogs/instagram-action-block-fix">Instagram action block and how to fix it</a>.</p>`,
  "instagram-action-block-fix": `<p data-fastvidl-cluster="1">If you want to safely save your stories without risking a block, our guide on <a href="/blogs/save-instagram-stories-with-music-not-muted">saving Instagram stories with music</a> shows the safest browser-based approach.</p>`,
  "save-instagram-stories-with-music-not-muted": `<p data-fastvidl-cluster="1">If you also want to save multi-photo posts from Instagram, check our guide on <a href="/blogs/download-instagram-carousel-photos-phone">downloading Instagram carousels on phone</a>.</p><p data-fastvidl-cluster="2">For more on why downloads sometimes look blurry, read <a href="/blogs/why-downloaded-video-quality-is-bad-fix">why downloaded video quality is bad and how to fix it</a>.</p>`,
  "download-instagram-carousel-photos-phone": `<p data-fastvidl-cluster="1">If Instagram itself is running slowly while you try to copy links, a quick fix is to <a href="/blogs/clear-instagram-cache">clear your Instagram cache</a>.</p><p data-fastvidl-cluster="2">To ensure your video downloads stay in full HD, see our guide on <a href="/blogs/why-downloaded-video-quality-is-bad-fix">why downloaded video quality is bad and how to fix it</a>.</p>`,
  "why-downloaded-video-quality-is-bad-fix": `<p data-fastvidl-cluster="1">This issue is especially frustrating when saving Instagram stories because the app also removes audio. Our guide on <a href="/blogs/save-instagram-stories-with-music-not-muted">saving Instagram stories with music without muting</a> explains how to get the original file with sound intact.</p><p data-fastvidl-cluster="2">Sometimes poor video quality comes from a corrupted app cache. If videos look blurry inside the app itself, try <a href="/blogs/clear-instagram-cache">clearing your Instagram cache</a> first.</p><p data-fastvidl-cluster="3">The same compression issues affect carousel posts. For the best results, see our guide on <a href="/blogs/download-instagram-carousel-photos-phone">downloading Instagram carousel photos on phone</a>.</p>`,
  "transfer-large-downloaded-videos-iphone-to-pc": `<p data-fastvidl-cluster="1">Before transferring files, make sure you downloaded them in HD. Read our guide on <a href="/blogs/why-downloaded-video-quality-is-bad-fix">why downloaded video quality is sometimes bad</a>.</p><p data-fastvidl-cluster="2">If your iPhone is running low on space before the transfer, <a href="/blogs/clear-instagram-cache">clearing your Instagram cache</a> can quickly free up several gigabytes.</p>`,
  "facebook-video-no-sound-quick-fix": `<p data-fastvidl-cluster="1">If the video plays but looks low quality, read our guide on <a href="/blogs/fix-blurry-facebook-videos">why Facebook videos are blurry and how to fix it</a>.</p><p data-fastvidl-cluster="2">Once the sound issue is resolved, you may want to <a href="/blogs/save-facebook-videos-camera-roll">save the Facebook video to your camera roll</a> for offline access.</p>`,
  "fix-blurry-facebook-videos": `<p data-fastvidl-cluster="1">Blurry video often comes alongside audio problems. If your downloaded Facebook video also has no sound, see our guide on <a href="/blogs/facebook-video-no-sound-quick-fix">why downloaded Facebook video has no sound</a>.</p><p data-fastvidl-cluster="2">After fixing the quality, you can <a href="/blogs/save-facebook-videos-camera-roll">save Facebook videos to your camera roll</a>.</p><p data-fastvidl-cluster="3">If the video is blurry AND not loading properly, see our <a href="/blogs/facebook-videos-not-playing-loading-fixes">Facebook videos not playing fixes guide</a>.</p>`,
  "save-facebook-videos-camera-roll": `<p data-fastvidl-cluster="1">To ensure saved videos are in the best quality before saving, read <a href="/blogs/fix-blurry-facebook-videos">why Facebook videos are blurry after uploading</a>.</p><p data-fastvidl-cluster="2">For saving Facebook Live streams specifically, see <a href="/blogs/download-facebook-live-videos-after-end">how to download Facebook Live videos after they end</a>.</p>`,
  "download-facebook-live-videos-after-end": `<p data-fastvidl-cluster="1">If your downloaded Live video has no audio, see <a href="/blogs/facebook-video-no-sound-quick-fix">why downloaded Facebook video has no sound</a>.</p><p data-fastvidl-cluster="2">The same method works for regular Facebook videos too. Read our guide on <a href="/blogs/save-facebook-videos-camera-roll">saving Facebook videos to camera roll</a>.</p>`,
  "facebook-videos-not-playing-loading-fixes": `<p data-fastvidl-cluster="1">If videos play but appear low quality, read <a href="/blogs/fix-blurry-facebook-videos">why Facebook videos are blurry</a>.</p><p data-fastvidl-cluster="2">Playback issues sometimes include audio problems too. See <a href="/blogs/facebook-video-no-sound-quick-fix">why downloaded Facebook video has no sound</a>.</p>`,
  "save-pinterest-board-offline-viewing-ipad-iphone": `<p data-fastvidl-cluster="1">For individual HD wallpapers from Pinterest, see our guide on <a href="/blogs/download-hd-wallpapers-pinterest-iphone">downloading HD wallpapers from Pinterest on iPhone</a>.</p><p data-fastvidl-cluster="2">If you cannot save Pinterest pins at all, first check our guide on <a href="/blogs/pinterest-not-saving-pictures-fix">why Pinterest is not letting you save pictures</a>.</p>`,
  "download-hd-wallpapers-pinterest-iphone": `<p data-fastvidl-cluster="1">To save an entire Pinterest board for offline viewing, read <a href="/blogs/save-pinterest-board-offline-viewing-ipad-iphone">how to save a Pinterest board for offline viewing</a>.</p><p data-fastvidl-cluster="2">If the Pinterest wallpaper is animated and saves as a static image, see <a href="/blogs/pinterest-gif-not-saving-as-video-fix">Pinterest GIF not saving as video fix</a>.</p>`,
  "pinterest-not-saving-pictures-fix": `<p data-fastvidl-cluster="1">Once the saving issue is fixed, you can <a href="/blogs/save-pinterest-board-offline-viewing-ipad-iphone">save entire Pinterest boards for offline viewing</a>.</p><p data-fastvidl-cluster="2">If GIFs specifically are not saving correctly, see <a href="/blogs/pinterest-gif-not-saving-as-video-fix">Pinterest GIF not saving as video fix</a>.</p>`,
  "pinterest-gif-not-saving-as-video-fix": `<p data-fastvidl-cluster="1">For regular Pinterest images and wallpapers, see <a href="/blogs/download-hd-wallpapers-pinterest-iphone">how to download HD wallpapers from Pinterest on iPhone</a>.</p><p data-fastvidl-cluster="2">If you are having trouble saving any Pinterest content at all, read <a href="/blogs/pinterest-not-saving-pictures-fix">why Pinterest is not letting you save pictures</a>.</p>`,
};

/**
 * @param {string} html
 * @param {string} slug
 */
export function patchBlogLinks(html, slug) {
  if (!html || typeof html !== "string") return html || "";

  let out = html;

  out = out.replace(
    /href=["']https?:\/\/(?:www\.)?fastvidl\.com([^"']*)["']/gi,
    (_match, path = "") => {
      const p = path || "/";
      if (p === "/" || p === "") return `href="${defaultToolHrefForSlug(slug)}"`;
      return `href="${p.startsWith("/") ? p : `/${p}`}"`;
    }
  );

  out = out.replace(PROFILE_VIEWER_BLOCK_RE, "");
  out = out.replace(
    /<a([^>]*)href=["']https?:\/\/(?:www\.)?fastvidl\.com\/?["']([^>]*)>\s*FastVidl Facebook Video Downloader\s*<\/a>/gi,
    `<a$1href="/free-facebook-video-downloader"$2>FastVidl Facebook Video Downloader</a>`
  );
  out = out.replace(
    /<a([^>]*)href=["']https?:\/\/(?:www\.)?fastvidl\.com\/?["']([^>]*)>\s*FastVidl Downloader\s*<\/a>/gi,
    `<a$1href="/instagram-story-downloader"$2>FastVidl Instagram Story Downloader</a>`
  );

  const toolHref = defaultToolHrefForSlug(slug);
  out = out.replace(HOMEPAGE_HREF_RE, `href="${toolHref}"`);

  out = out.replace(AUTHOR_LINKEDIN_RE, 'href="/author/raja-jahangir"');
  out = out.replace(
    />\s*Connect on LinkedIn\s*</gi,
    ">View Author Profile<"
  );

  const injection = CLUSTER_INJECTIONS[slug];
  if (injection && !out.includes("data-fastvidl-cluster")) {
    const meetTeamRe = /<h2[^>]*>\s*Meet the Team/i;
    const faqRe = /<h2[^>]*>\s*Frequently Asked Questions/i;
    if (meetTeamRe.test(out)) {
      out = out.replace(meetTeamRe, (m) => `${injection}${m}`);
    } else if (faqRe.test(out)) {
      out = out.replace(faqRe, (m) => `${injection}${m}`);
    } else {
      out = `${out}${injection}`;
    }
  }

  return out;
}
