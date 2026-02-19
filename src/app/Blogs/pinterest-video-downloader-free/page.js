"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../Blog.css';
import PinterestBlogContent from './PinterestBlogContent';

function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
  }, [title, description, keywords]);

  return null;
}

export default function PinterestVideoDownloaderFreePage() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Pinterest Video Downloader Free 2026: Save Pins Without Watermark | FastVidl"
        description="Download Pinterest videos free with FastVidl – no watermark, no login required, no software to install. Save pins in HD 1080p on any device instantly. Secure, browser-based Pinterest video saver for public content only."
        keywords="pinterest video downloader free, download pinterest videos, save pinterest videos, pinterest video downloader online, download pinterest pins, pinterest video saver"
      />

      <div className="blog-page">
        <button className="back-btn" onClick={() => router.push('/Blogs')}>
          ← Back to Blog
        </button>

        <PinterestBlogContent />
      </div>
    </>
  );
}
