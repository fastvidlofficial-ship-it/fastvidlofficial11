import Link from "next/link";
import pseoData from "../../../pseo-data.json";
import styles from "./PopularDownloaders.module.css";

/* ===================================================================
   Group every pSEO entry by content_type so the section is organised
   into Reels / Videos / Photos / Stories / IGTV / Highlights buckets.
   Source of truth: pseo-data.json — nothing else is added.
   =================================================================== */

const TYPE_ORDER = ["Reel", "Video", "Photo", "Story", "IGTV", "Highlight"];

const TYPE_LABELS = {
  Reel: "Reels",
  Video: "Videos",
  Photo: "Photos",
  Story: "Stories",
  IGTV: "IGTV",
  Highlight: "Highlights",
};

function buildGroups() {
  const buckets = new Map();

  for (const item of pseoData || []) {
    if (!item) continue;
    const slug = (item.slug || item.Slug || "").trim();
    if (!slug) continue;

    const type = item.content_type || "Other";
    const entry = {
      slug,
      title: item.h1_title || item.primary_keyword || slug,
      type,
      href: `/download/${slug}`,
    };

    if (!buckets.has(type)) buckets.set(type, []);
    buckets.get(type).push(entry);
  }

  const known = TYPE_ORDER.filter((t) => buckets.has(t)).map((t) => ({
    type: t,
    label: TYPE_LABELS[t] || t,
    items: buckets.get(t),
  }));

  const extra = [...buckets.keys()]
    .filter((t) => !TYPE_ORDER.includes(t))
    .sort()
    .map((t) => ({ type: t, label: t, items: buckets.get(t) }));

  return [...known, ...extra].filter((g) => g.items.length > 0);
}

const GROUPS = buildGroups();

/* ===================================================================
   Icons — inline SVGs, no network requests
   =================================================================== */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <defs>
        <linearGradient id="pdIg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#pdIg)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="#fff" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function ToolCard({ item }) {
  return (
    <li className={styles.cell}>
      <Link
        href={item.href}
        className={styles.card}
        prefetch={false}
        aria-label={`${item.title} — free ${item.type} downloader`}
      >
        <span className={`${styles.cardBadge} ${styles.badge_instagram}`} aria-hidden="true">
          {item.type}
        </span>
        <span className={styles.cardTitle}>{item.title}</span>
        <span className={styles.cardArrow} aria-hidden="true">
          <ArrowIcon />
        </span>
      </Link>
    </li>
  );
}

/* ===================================================================
   Section
   =================================================================== */

export default function PopularDownloaders() {
  if (!GROUPS.length) return null;

  const total = GROUPS.reduce((sum, g) => sum + g.items.length, 0);

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
          Hand-picked downloaders for Instagram Reels, Stories, Photos and HD
          videos — instant, watermark-free, no sign-up.
        </p>

        <div className={styles.categoryStack}>
          <section
            className={styles.category}
            aria-labelledby="pd-cat-instagram"
          >
            <header className={styles.categoryHead}>
              <span className={styles.categoryIcon}>
                <InstagramIcon />
              </span>
              <div className={styles.categoryText}>
                <h3 id="pd-cat-instagram" className={styles.categoryName}>
                  Instagram
                </h3>
                <p className={styles.categoryTagline}>
                  {total} tools across Reels, Stories, Photos and HD videos.
                </p>
              </div>
            </header>

            {GROUPS.map((group) => (
              <div key={group.type} className={styles.subgroup}>
                <h4 className={styles.subgroupTitle}>
                  <span>{group.label}</span>
                  <span className={styles.subgroupCount}>
                    {group.items.length}
                  </span>
                </h4>
                <ul className={styles.grid}>
                  {group.items.map((item) => (
                    <ToolCard
                      key={`${group.type}-${item.slug}`}
                      item={item}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
 