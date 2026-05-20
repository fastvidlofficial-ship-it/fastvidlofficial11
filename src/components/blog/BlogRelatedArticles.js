import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";
import { getRelatedBlogPosts } from "@/data/blog-seo";
import styles from "./BlogRelatedArticles.module.css";

export default function BlogRelatedArticles({ slug }) {
  const posts = getRelatedBlogPosts(slug);
  if (posts.length === 0) return null;

  const siteUrl = getSiteUrl();

  return (
    <section className={styles.section} aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className={styles.heading}>
        Related Articles
      </h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              href={`${siteUrl}/blogs/${post.slug}`}
              className={styles.link}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
