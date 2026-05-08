"use client";

import Link from "next/link";
import pseoData from "../../../pseo-data.json";
import styles from "./PopularDownloaders.module.css";

const MAX_TOOLS = 12;

/**
 * Pick a visually balanced subset:
 *  1. First, take one item per content_type so the grid feels diverse.
 *  2. Then top up with remaining items in source order.
 */
function pickBalancedTools(items, max) {
  if (!Array.isArray(items)) return [];

  const seenTypes = new Set();
  const primary = [];
  const fallback = [];

  for (const item of items) {
    if (!item) continue;
    const slug = (item.slug || item.Slug || "").trim();
    if (!slug) continue;

    const type = item.content_type || "Other";
    if (!seenTypes.has(type)) {
      seenTypes.add(type);
      primary.push(item);
    } else {
      fallback.push(item);
    }
  }

  return [...primary, ...fallback].slice(0, max);
}

const tools = pickBalancedTools(pseoData, MAX_TOOLS);

export default function PopularDownloaders() {
  if (!tools.length) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="popular-downloaders-title"
    >
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Discover</span>
        <h2 id="popular-downloaders-title" className={styles.title}>
          Explore More <span className={styles.titleAccent}>Free Tools</span>
        </h2>
        <p className={styles.subtitle}>
          Hand-picked downloaders to help you save Reels, Stories, Photos, and
          more — instantly, in HD, without watermarks or sign-ups.
        </p>

        <ul className={styles.grid}>
          {tools.map((item) => {
            const slug = item.slug || item.Slug;
            const title = item.h1_title || item.primary_keyword || slug;
            const type = item.content_type || "Tool";
            const platform = item.platform || type;

            return (
              <li key={slug} className={styles.cell}>
                <Link
                  href={`/download/${slug}`}
                  className={styles.card}
                  prefetch={false}
                >
                  <span className={styles.cardBadge}>{platform}</span>
                  <span className={styles.cardTitle}>{title}</span>
                  <span className={styles.cardMeta}>{type}</span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
