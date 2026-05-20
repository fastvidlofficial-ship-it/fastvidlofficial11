import Link from "next/link";
import { DOWNLOADER_HELPFUL_GUIDES } from "@/data/blog-seo";
import styles from "./HelpfulGuidesSection.module.css";

export default function HelpfulGuidesSection({ downloaderPath }) {
  const guides = DOWNLOADER_HELPFUL_GUIDES[downloaderPath];
  if (!guides?.length) return null;

  return (
    <section className={styles.section} aria-labelledby="helpful-guides-heading">
      <h2 id="helpful-guides-heading" className={styles.heading}>
        Helpful Guides
      </h2>
      <ul className={styles.list}>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/blogs/${guide.slug}`} className={styles.link}>
              {guide.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
