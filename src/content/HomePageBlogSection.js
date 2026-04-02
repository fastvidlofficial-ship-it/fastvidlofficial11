"use client";

import FAQSchema from "@/components/FAQSchema";
import InstagramReelDownloaderBlogContent, {
  INSTAGRAM_BLOG_FAQ_LIST,
} from "@/content/instagram-reel-downloader-free/InstagramReelDownloaderBlogContent";
import "@/content/Blog.css";

const HOME_PAGE_FAQ_LIST = INSTAGRAM_BLOG_FAQ_LIST;

export default function HomePageBlogSection() {
  return (
    <div className="app">
      <FAQSchema faqList={HOME_PAGE_FAQ_LIST} />
      <div className="container-blog">
        <section className="home-blog-article">
          <InstagramReelDownloaderBlogContent variant="home" faqList={HOME_PAGE_FAQ_LIST} />
        </section>
      </div>
    </div>
  );
}
