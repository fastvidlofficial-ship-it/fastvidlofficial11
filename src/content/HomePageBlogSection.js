"use client";

import FAQSchema from "@/components/FAQSchema";
import InstagramReelDownloaderBlogContent, {
  INSTAGRAM_BLOG_FAQ_LIST,
} from "@/content/instagram-reel-downloader-free/InstagramReelDownloaderBlogContent";
import { useLocaleCatalog } from "@/contexts/LocaleContext";
import "@/content/Blog.css";

const HOME_PAGE_FAQ_LIST = INSTAGRAM_BLOG_FAQ_LIST;

export default function HomePageBlogSection() {
  const { locale, catalog } = useLocaleCatalog();
  const arArticle = catalog?.homeArticle;

  if (locale === "ar" && arArticle?.html && Array.isArray(arArticle.faq)) {
    return (
      <div className="app">
        <FAQSchema faqList={arArticle.faq} />
        <div className="container-blog">
          <section className="home-blog-article">
            <div dangerouslySetInnerHTML={{ __html: arArticle.html }} />
            <h2
              id="frequently-asked-questions"
              className="home-blog-article-h2"
            >
              {arArticle.faqSectionTitle}
            </h2>
            <div className="blog-content">
              <div className="faq-section">
                {arArticle.faq.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <FAQSchema faqList={HOME_PAGE_FAQ_LIST} />
      <div className="container-blog">
        <section className="home-blog-article">
          <InstagramReelDownloaderBlogContent
            variant="home"
            faqList={HOME_PAGE_FAQ_LIST}
          />
        </section>
      </div>
    </div>
  );
}
