"use client";

import { useLocaleCatalog } from "@/contexts/LocaleContext";
import "@/content/Blog.css";

export default function ToolPageArticle({ arKey, renderEnglish }) {
  const { locale, catalog } = useLocaleCatalog();
  const article = catalog[arKey];

  if (locale === "ar" && article?.html && Array.isArray(article.faq)) {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
        {article.faqAnchorId ? (
          <div
            id={article.faqAnchorId}
            style={{ height: 0, scrollMarginTop: "5rem" }}
            aria-hidden="true"
          />
        ) : null}
        <h2
          id="frequently-asked-questions"
          className="home-blog-article-h2"
        >
          {article.faqSectionTitle}
        </h2>
        <div className="blog-content">
          <div className="faq-section">
            {article.faq.map((item, idx) => (
              <div key={idx} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            ))}
          </div>
        </div>
        {article.appendAfterFaq ? (
          <div dangerouslySetInnerHTML={{ __html: article.appendAfterFaq }} />
        ) : null}
      </>
    );
  }

  if (typeof renderEnglish === "function") return renderEnglish();
  return null;
}
