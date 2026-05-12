import Link from "next/link";
import pseoData from "../../../pseo-data.json";
import styles from "./PopularDownloaders.module.css";

const INSTAGRAM_LIMIT = 8;

/* ---------- Curated tools per platform -------------------------------- */

const INSTAGRAM_MAIN_TOOLS = [
  {
    slug: "instagram-reel-downloader-free",
    title: "Instagram Reel Downloader",
    type: "Reel",
    href: "/instagram-reel-downloader-free",
  },
  {
    slug: "instagram-photo-downloader",
    title: "Instagram Photo Downloader",
    type: "Photo",
    href: "/instagram-photo-downloader",
  },
  {
    slug: "instagram-story-downloader",
    title: "Instagram Story Downloader",
    type: "Story",
    href: "/instagram-story-downloader",
  },
  {
    slug: "instagram-video-downloader",
    title: "Instagram Video Downloader",
    type: "Video",
    href: "/instagram-video-downloader",
  },
];

const FACEBOOK_TOOLS = [
  {
    slug: "free-facebook-video-downloader",
    title: "Facebook Video Downloader",
    type: "Video",
    href: "/free-facebook-video-downloader",
  },
  {
    slug: "facebook-hd-video",
    title: "Facebook HD Video Saver",
    type: "HD Video",
    href: "/free-facebook-video-downloader",
  },
  {
    slug: "facebook-reels-downloader",
    title: "Facebook Reels Downloader",
    type: "Reel",
    href: "/free-facebook-video-downloader",
  },
];

const PINTEREST_TOOLS = [
  {
    slug: "pinterest-video-downloader-free",
    title: "Pinterest Video Downloader",
    type: "Video",
    href: "/pinterest-video-downloader-free",
  },
  {
    slug: "pinterest-image-saver",
    title: "Pinterest Image Saver",
    type: "Photo",
    href: "/pinterest-video-downloader-free",
  },
  {
    slug: "pinterest-gif-downloader",
    title: "Pinterest GIF Downloader",
    type: "GIF",
    href: "/pinterest-video-downloader-free",
  },
];

/**
 * Picks a balanced mix of Instagram pSEO tools — one per content_type
 * first (Reel, Photo, Story, Video, etc.) then top up with the next items
 * in source order so the grid stays diverse.
 */
function pickInstagramPseoTools(items, max) {
  if (!Array.isArray(items)) return [];

  const seenTypes = new Set();
  const primary = [];
  const fallback = [];

  for (const item of items) {
    if (!item) continue;
    if (item.platform && item.platform !== "Instagram") continue;
    const slug = (item.slug || item.Slug || "").trim();
    if (!slug) continue;

    const type = item.content_type || "Other";
    const normalized = {
      slug,
      title: item.h1_title || item.primary_keyword || slug,
      type,
      href: `/download/${slug}`,
    };

    if (!seenTypes.has(type)) {
      seenTypes.add(type);
      primary.push(normalized);
    } else {
      fallback.push(normalized);
    }
  }

  return [...primary, ...fallback].slice(0, max);
}

const instagramTools = [
  ...INSTAGRAM_MAIN_TOOLS,
  ...pickInstagramPseoTools(pseoData, INSTAGRAM_LIMIT - INSTAGRAM_MAIN_TOOLS.length),
];

/* ---------- Platform icons (theme-aware, no external requests) ------- */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <defs>
        <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igGrad)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#1877F2" />
      <path
        d="M15.5 8.5h-1.6c-.25 0-.4.16-.4.43V10.6h2l-.3 2.1h-1.7V19h-2.3v-6.3H9.5v-2.1h1.7V9c0-1.6.9-2.6 2.5-2.6h1.8v2.1Z"
        fill="#fff"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#E60023" />
      <path
        d="M12.2 5.5c-3.7 0-5.7 2.4-5.7 5 0 1.2.7 2.7 1.8 3.2.17.08.26.04.3-.12.03-.12.18-.7.25-.97.02-.09 0-.16-.06-.24-.36-.43-.65-1.22-.65-1.96 0-1.9 1.45-3.74 3.92-3.74 2.13 0 3.62 1.43 3.62 3.47 0 2.3-1.18 3.9-2.71 3.9-.85 0-1.48-.69-1.28-1.54.25-1 .72-2.08.72-2.81 0-.65-.36-1.19-1.1-1.19-.87 0-1.57.88-1.57 2.06 0 .75.26 1.26.26 1.26L9 16.62c-.34 1.4.05 3.06.08 3.22.02.1.14.13.2.05.08-.1 1.16-1.41 1.52-2.78.1-.39.6-2.3.6-2.3.3.55 1.15 1.04 2.05 1.04 2.7 0 4.65-2.44 4.65-5.45 0-2.91-2.4-5.08-5.49-5.08Z"
        fill="#fff"
      />
    </svg>
  );
}

const CATEGORIES = [
  {
    id: "instagram",
    name: "Instagram",
    tagline: "Reels, Stories, Photos and HD videos — straight from any public profile.",
    Icon: InstagramIcon,
    tools: instagramTools,
  },
  {
    id: "facebook",
    name: "Facebook",
    tagline: "Save public Facebook videos and Reels in HD without watermarks.",
    Icon: FacebookIcon,
    tools: FACEBOOK_TOOLS,
  },
  {
    id: "pinterest",
    name: "Pinterest",
    tagline: "Download Pinterest videos, images and GIFs in original quality.",
    Icon: PinterestIcon,
    tools: PINTEREST_TOOLS,
  },
];

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

export default function PopularDownloaders() {
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
          Hand-picked downloaders organised by platform — save Reels, Stories,
          Photos and HD videos instantly, no watermarks or sign-ups.
        </p>

        <div className={styles.categoryStack}>
          {CATEGORIES.map(({ id, name, tagline, Icon, tools }) => {
            if (!tools.length) return null;
            return (
              <section
                key={id}
                className={`${styles.category} ${styles[`category_${id}`]}`}
                aria-labelledby={`pd-cat-${id}`}
              >
                <header className={styles.categoryHead}>
                  <span className={styles.categoryIcon}>
                    <Icon />
                  </span>
                  <div className={styles.categoryText}>
                    <h3 id={`pd-cat-${id}`} className={styles.categoryName}>
                      {name}
                    </h3>
                    <p className={styles.categoryTagline}>{tagline}</p>
                  </div>
                </header>

                <ul className={styles.grid}>
                  {tools.map((item) => (
                    <li key={`${id}-${item.slug}`} className={styles.cell}>
                      <Link
                        href={item.href}
                        className={styles.card}
                        prefetch={false}
                      >
                        <span className={`${styles.cardBadge} ${styles[`badge_${id}`]}`}>
                          {item.type}
                        </span>
                        <span className={styles.cardTitle}>{item.title}</span>
                        <span className={styles.cardArrow} aria-hidden="true">
                          <ArrowIcon />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
