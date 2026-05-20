"use client";

import Link from "next/link";
import styles from "./FaqSection.module.css";

/**
 * FAQ accordion matching /download/[slug] styling (native <details>).
 * @param {Array<{ question: string, answer: string }>} items
 */
export default function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  headingId = "frequently-asked-questions",
  subtitle,
  showHeading = true,
  showFaqsPageLink = false,
  firstOpenIndex = 0,
  className,
}) {
  const list = (items || []).filter((x) => x && x.question && x.answer);
  if (list.length === 0) return null;

  const inner = (
    <div className={styles.faqWrap}>
      <div className={styles.faqList}>
        {list.map((faq, index) => (
          <details key={`faq-${index}`} className={styles.faqItem} open={index === firstOpenIndex}>
            <summary className={styles.faqSummary}>{faq.question}</summary>
            <p className={styles.faqAnswer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );

  if (!showHeading) {
    return (
      <div className={`${styles.embedded} ${className || ""}`.trim()}>
        {inner}
        {showFaqsPageLink ? (
          <p className={styles.faqsPageLink}>
            For more answers, see our <Link href="/faqs">full FAQ page</Link>.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <section
      className={`${styles.sectionWhite} ${className || ""}`.trim()}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className={styles.sectionHeading}>
        {heading}
      </h2>
      {subtitle ? <p className={styles.sectionSubtitle}>{subtitle}</p> : null}
      {inner}
      {showFaqsPageLink ? (
        <p className={styles.faqsPageLink}>
          Have more questions?{" "}
          <Link href="/faqs">Visit our complete FAQ page</Link>.
        </p>
      ) : null}
    </section>
  );
}
