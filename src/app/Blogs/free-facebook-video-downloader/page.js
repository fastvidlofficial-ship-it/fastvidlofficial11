"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../Blog.css";
import FacebookBlogContent from "./FacebookBlogContent";

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

export default function FacebookVideoDownloaderPage() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Free Facebook Video Downloader 2026: Download FB Videos in HD Without Watermark | FastVidl"
        description="Download Facebook videos for free with FastVidl – no watermark, no login, no app needed. Save FB videos in HD 1080p on iPhone, Android & desktop in 5-10 seconds. 100% secure browser-based tool for public videos only."
        keywords="free facebook video downloader, download facebook videos, save fb videos, facebook video downloader online, download facebook reels, facebook video saver"
      />

      <div className="blog-page">
        <button className="back-btn" onClick={() => router.push("/Blogs")}>
          ← Back to Blog
        </button>

        <FacebookBlogContent />
      </div>
    </>
  );
}
