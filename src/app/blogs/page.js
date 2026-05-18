import Link from "next/link";
import { getPublishedBlogs } from "@/lib/blog-queries";
import { getMetadataBase, getSiteUrl } from "@/lib/site-url";
import BlogSearch from "./BlogSearch";
import styles from "./BlogsPage.module.css";

export const dynamic = "force-dynamic";

const BLOG_LIST_TITLE = "FastVidl Blog: Tutorials for Instagram, Facebook & Pinterest";
const BLOG_LIST_DESCRIPTION =
  "Step-by-step tutorials, tips, and guides for downloading videos, reels, stories, and photos from Instagram, Facebook, and Pinterest.";

export const metadata = {
  metadataBase: getMetadataBase(),
  title: "Blog · FastVidl",
  description: BLOG_LIST_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}/blogs` },
  openGraph: {
    title: BLOG_LIST_TITLE,
    description: BLOG_LIST_DESCRIPTION,
    url: `${getSiteUrl()}/blogs`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_LIST_TITLE,
    description: BLOG_LIST_DESCRIPTION,
  },
};

const PER_PAGE = 10;

export default async function BlogsListingPage({ searchParams }) {
  const params = await searchParams;
  const rawPage = parseInt(params?.page || "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;
  const q = (params?.q || "").toString().trim();

  let data = { items: [], total: 0, page: 1, pages: 1 };
  let loadError = null;
  try {
    data = await getPublishedBlogs({ q, page, limit: PER_PAGE });
  } catch (err) {
    loadError = err?.message || "Could not load blogs.";
  }

  const { items, total, pages } = data;
  const showPagination = !q && pages > 1;

  function pageHref(p) {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (p > 1) sp.set("page", String(p));
    const qs = sp.toString();
    return qs ? `/blogs?${qs}` : "/blogs";
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>FastVidl Blogs</h1>
          <p className={styles.heroSubtitle}>
            Tutorials, tips, and step-by-step guides for downloading social-media
            content the easy way.
          </p>
          <div className={styles.searchWrap}>
            <BlogSearch initialQuery={q} />
          </div>
        </div>
      </header>

      <section className={styles.container}>
        {loadError && (
          <div className={styles.notice} role="alert">
            <strong>Could not load blogs:</strong> {loadError}
            <div className={styles.noticeHint}>
              Make sure <code>MONGODB_URI</code> is set in <code>.env.local</code>.
            </div>
          </div>
        )}

        {!loadError && q && items.length > 0 && (
          <p className={styles.meta}>
            Showing {items.length} result{items.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;.{" "}
            <Link href="/blogs" className={styles.clearLink}>
              Clear search
            </Link>
          </p>
        )}

        {!loadError && !q && total > 0 && (
          <p className={styles.meta}>
            {total} article{total === 1 ? "" : "s"} published
          </p>
        )}

        {!loadError && items.length === 0 && (
          <div className={styles.emptyState} role="status">
            <div className={styles.emptyIcon} aria-hidden>
              <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
                <rect
                  x="8"
                  y="10"
                  width="42"
                  height="48"
                  rx="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M18 22h22M18 30h22M18 38h14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="var(--card-bg)"
                />
                <path
                  d="M44 48l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className={styles.emptyTitle}>No blogs found</h2>
            <p className={styles.emptySubtitle}>
              {q
                ? `We couldn't find any articles matching "${q}". Try a different search term.`
                : "There aren't any blog posts published yet. Check back soon for tutorials, tips, and guides."}
            </p>
            {q && (
              <Link href="/blogs" className={styles.emptyCta}>
                Clear search
              </Link>
            )}
          </div>
        )}

        <ul className={styles.grid}>
          {items.map((b) => (
            <li key={b._id?.toString?.() || b.slug} className={styles.card}>
              <Link href={`/blogs/${b.slug}`} className={styles.cardLink}>
                <div className={styles.thumb}>
                  {b.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.image} alt={b.imageAlt || b.title} />
                  ) : (
                    <div className={styles.thumbFallback}>
                      <span>{(b.title || "F").slice(0, 1).toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardBody}>
                  {b.createdAt && (
                    <time
                      dateTime={new Date(b.createdAt).toISOString()}
                      className={styles.cardDate}
                    >
                      {new Date(b.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className={styles.cardTitle}>{b.title}</h2>
                  {b.metaDescription && (
                    <p className={styles.cardDesc}>{b.metaDescription}</p>
                  )}
                  <span className={styles.cardCta}>
                    Read article <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {showPagination && (
          <nav className={styles.pagination} aria-label="Blog pagination">
            {page > 1 ? (
              <Link className={styles.pageBtn} href={pageHref(page - 1)}>
                ← Prev
              </Link>
            ) : (
              <span className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>
                ← Prev
              </span>
            )}

            <span className={styles.pageInfo}>
              Page <strong>{page}</strong> of {pages}
            </span>

            {page < pages ? (
              <Link className={styles.pageBtn} href={pageHref(page + 1)}>
                Next →
              </Link>
            ) : (
              <span className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>
                Next →
              </span>
            )}
          </nav>
        )}
      </section>
    </div>
  );
}
