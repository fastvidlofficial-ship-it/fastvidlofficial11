import { getSiteUrl } from "@/lib/site-url";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * @returns {string | null}
 */
export function getIndexNowKey() {
  const key = (process.env.INDEXNOW_KEY || "").trim();
  return key || null;
}

/**
 * Submit URLs to IndexNow (Bing, Yandex, etc.).
 * @param {string[]} urlList absolute URLs
 */
export async function submitIndexNow(urlList) {
  const key = getIndexNowKey();
  if (!key || !Array.isArray(urlList) || urlList.length === 0) return;

  const host = new URL(getSiteUrl()).host;

  try {
    await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `${getSiteUrl()}/${key}.txt`,
        urlList: urlList.slice(0, 10000),
      }),
    });
  } catch (err) {
    console.error("[IndexNow]", err?.message || err);
  }
}

/**
 * @param {string} slug blog slug
 */
export function submitBlogPostToIndexNow(slug) {
  const base = getSiteUrl();
  submitIndexNow([`${base}/blogs/${slug}`]);
}
