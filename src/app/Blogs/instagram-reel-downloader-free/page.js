"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../Blog.css";
import FAQSchema from "@/components/FAQSchema";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import InstagramReelDownloaderBlogContent, { INSTAGRAM_BLOG_FAQ_LIST } from "./InstagramReelDownloaderBlogContent";

function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
  }, [title, description, keywords]);

  return null;
}

export default function InstagramReelDownloaderFreePage() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FAQSchema faqList={INSTAGRAM_BLOG_FAQ_LIST} />
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://www.linkedin.com/in/raja-jahangir"
        organizationName="Auroxa Tech"
        organizationUrl="https://auroxatech.com"
        articleUrl="https://fastvidl.com/Blogs/instagram-reel-downloader-free"
        headline="Instagram Reel Downloader Free: Download Reels Without Watermark (2026)"  
        datePublished="2026-02-27"  
        dateModified="2026-04-02"  
      />
      <SEO
        title="Instagram Reel Downloader Free 2026: Download Reels Without Watermark | FastVidl"
        description="Download Instagram Reels for free with FastVidl – no watermark, no login, no app installation. Save IG Reels in HD 1080p on iPhone, Android & desktop in seconds. 100% secure, browser-based tool for public reels only."
        keywords="instagram reel downloader free, download instagram reels, save instagram reels, instagram downloader online, IGTV downloader, instagram story downloader"
      />

      <div className="blog-page">
        <button className="back-btn" onClick={() => router.push("/")}>
          ← Back to Home
        </button>

        <div className="blog-header">
          <p style={{ fontStyle: "italic", color: "#666", marginBottom: "1rem" }}>
            Last Updated: 2 April 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <InstagramReelDownloaderBlogContent variant="standalone" />
          </div>
        </div>
      </div>
    </>
  );
}
