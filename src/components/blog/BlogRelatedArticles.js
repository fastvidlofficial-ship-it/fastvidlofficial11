import Link from "next/link";
import { getRelatedBlogPosts } from "@/data/blog-seo";
import styles from "./BlogRelatedArticles.module.css";

export default function BlogRelatedArticles({ slug }) {
  const posts = getRelatedBlogPosts(slug);
  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="home-blog-article-h2">
        Related Articles
      </h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`} className={styles.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
