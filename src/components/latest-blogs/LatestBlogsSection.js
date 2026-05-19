import Link from "next/link";
import { getPublishedBlogs } from "@/lib/blog-queries";
import styles from "./LatestBlogsSection.module.css";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function LatestBlogsSection() {
  let posts = [];

  try {
    const data = await getPublishedBlogs({ page: 1, limit: 3 });
    posts = data.items || [];
  } catch {
    return null;
  }

  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="latest-blogs-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Latest Guides</span>
            <h2 id="latest-blogs-heading" className={styles.title}>
              Fresh Tips From FastVidl Blog
            </h2>
            <p className={styles.subtitle}>
              Read quick tutorials for saving public Instagram, Facebook, and
              Pinterest content in better quality.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post._id?.toString?.() || post.slug}
              href={`/blogs/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.thumb}>
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image} alt={post.imageAlt || post.title} />
                ) : (
                  <div className={styles.thumbFallback} aria-hidden>
                    {(post.title || "F").slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
              <div className={styles.body}>
                {post.createdAt && (
                  <time
                    className={styles.date}
                    dateTime={new Date(post.createdAt).toISOString()}
                  >
                    {formatDate(post.createdAt)}
                  </time>
                )}
                <h3 className={styles.cardTitle}>{post.title}</h3>
                {post.metaDescription && (
                  <p className={styles.desc}>{post.metaDescription}</p>
                )}
                <span className={styles.readLink}>Read guide →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/blogs" className={styles.showMore}>
            Show more blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
