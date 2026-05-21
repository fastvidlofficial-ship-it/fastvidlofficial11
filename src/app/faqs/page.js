import FAQSchema from "@/components/FAQSchema";
import FaqSection from "@/components/faq/FaqSection";
import {
  FAQS_PAGE_SECTIONS,
  getFaqsPageFlatList,
} from "@/data/faqs-page-content";
import styles from "./FaqsPage.module.css";

const faqList = getFaqsPageFlatList();

export default function FAQSPage() {
  return (
    <>
      <FAQSchema faqList={faqList} />
      <div
        className="container-blog"
        style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}
      >
        <header className={styles.header}>
          <h1 id="faqs-page-heading" className="home-blog-article-h2">
            Frequently Asked Questions
          </h1>
          <p className="home-blog-article-p">
            Answers about downloading Instagram, Facebook, and Pinterest content
            with FastVidl — plus links to our{" "}
            <a href="/blogs" className="home-blog-article-link">
              download guides
            </a>{" "}
            and tool pages.
          </p>
        </header>

        {FAQS_PAGE_SECTIONS.map((section) => (
          <section
            key={section.id}
            className={styles.section}
            aria-labelledby={`faq-section-${section.id}`}
          >
            <h2 id={`faq-section-${section.id}`} className="home-blog-article-h2">
              {section.title}
            </h2>
            <FaqSection
              items={section.items}
              headingId={`faq-list-${section.id}`}
              showFaqsPageLink={false}
              showHeading={false}
            />
          </section>
        ))}

        <p className={styles.footerNote}>
          Still stuck? Try our{" "}
          <a href="/instagram-reel-downloader-free" className="home-blog-article-link">
            Instagram Reel Downloader
          </a>
          ,{" "}
          <a href="/free-facebook-video-downloader" className="home-blog-article-link">
            Facebook Video Downloader
          </a>
          , or{" "}
          <a href="/pinterest-video-downloader-free" className="home-blog-article-link">
            Pinterest Downloader
          </a>
          .
        </p>
      </div>
    </>
  );
}
