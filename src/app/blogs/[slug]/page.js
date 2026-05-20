import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublishedBlogBySlug } from "@/lib/blog-queries";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import BlogArticleSchema from "@/components/BlogArticleSchema";
import BlogBreadcrumbSchema from "@/components/blog/BlogBreadcrumbSchema";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import FaqSection from "@/components/faq/FaqSection";
import { getSiteUrl, getMetadataBase } from "@/lib/site-url";
import { getBlogOgImageAbsolute, getBlogOgImagePath } from "@/lib/blog-assets";
import "@/content/Blog.css";
import styles from "./BlogShow.module.css";

export const dynamic = "force-dynamic";

const BLOG_TOOL_LINKS = {
  "save-pinterest-board-offline-viewing-ipad-iphone": {
    href: "/pinterest-video-downloader-free",
    name: "Pinterest Video Downloader",
    anchor: "Pinterest video downloader",
    sentence:
      "If the board includes video pins you want to keep for offline viewing, use our",
  },
  "save-instagram-stories-with-music-not-muted": {
    href: "/instagram-story-downloader",
    name: "Instagram Story Downloader",
    anchor: "Instagram story downloader",
    sentence:
      "For public stories where audio matters, the quickest route is our",
  },
  "why-downloaded-video-quality-is-bad-fix": {
    href: "/instagram-reel-downloader-free",
    name: "Instagram Reel Downloader",
    anchor: "free Instagram reel downloader",
    sentence:
      "For Reels, start with a clean public link and try the",
  },
  "facebook-video-no-sound-quick-fix": {
    href: "/free-facebook-video-downloader",
    name: "Facebook Video Downloader",
    anchor: "Facebook video downloader",
    sentence:
      "If you need to re-download a public Facebook clip with audio intact, use our",
  },
  "download-hd-wallpapers-pinterest-iphone": {
    href: "/pinterest-video-downloader-free",
    name: "Pinterest Downloader",
    anchor: "Pinterest downloader",
    sentence:
      "For Pinterest saves from public pins, you can also use the",
  },
  "download-instagram-carousel-photos-phone": {
    href: "/download/instagram-carousel-downloader",
    name: "Instagram Carousel Downloader",
    anchor: "Instagram carousel downloader",
    sentence:
      "For multi-photo posts and carousels, the dedicated",
  },
  "pinterest-not-saving-pictures-fix": {
    href: "/pinterest-video-downloader-free",
    name: "Pinterest Video Downloader",
    anchor: "Pinterest video downloader",
    sentence:
      "When Pinterest save buttons fail on public pins, try the",
  },
  "download-facebook-live-videos-after-end": {
    href: "/free-facebook-video-downloader",
    name: "Facebook Video Downloader",
    anchor: "Facebook video downloader",
    sentence:
      "After a public live video is available as a replay, our",
  },
};

function getRelatedBlogTool(slug) {
  if (BLOG_TOOL_LINKS[slug]) return BLOG_TOOL_LINKS[slug];
  if (slug.includes("pinterest")) {
    return {
      href: "/pinterest-video-downloader-free",
      name: "Pinterest Video Downloader",
      anchor: "Pinterest video downloader",
      sentence: "For public Pinterest pins and videos, try the",
    };
  }
  if (slug.includes("facebook")) {
    return {
      href: "/free-facebook-video-downloader",
      name: "Facebook Video Downloader",
      anchor: "Facebook video downloader",
      sentence: "For public Facebook videos and reels, try the",
    };
  }
  if (slug.includes("story") || slug.includes("stories")) {
    return {
      href: "/instagram-story-downloader",
      name: "Instagram Story Downloader",
      anchor: "Instagram story downloader",
      sentence: "For public Instagram stories and highlights, try the",
    };
  }
  if (slug.includes("photo") || slug.includes("carousel")) {
    return {
      href: "/instagram-photo-downloader",
      name: "Instagram Photo Downloader",
      anchor: "Instagram photo downloader",
      sentence: "For public Instagram photos and carousel posts, try the",
    };
  }
  return {
    href: "/instagram-reel-downloader-free",
    name: "Instagram Reel Downloader",
    anchor: "free Instagram reel downloader",
    sentence: "For public Instagram reels, try the",
  };
}

function toSchemaDate(value) {
  if (!value) return undefined;
  return new Date(value).toISOString();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let blog = null;
  try {
    blog = await getPublishedBlogBySlug(slug);
  } catch {
    /* swallow */
  }

  if (!blog) {
    return { title: "Blog not found · FastVidl", robots: { index: false } };
  }

  const title = blog.metaTitle || blog.title;
  const description =
    blog.metaDescription ||
    `${blog.title}. Read the full guide on FastVidl.`;
  const url = `${getSiteUrl()}/blogs/${blog.slug}`;
  const siteUrl = getSiteUrl();
  const ogUrl = getBlogOgImageAbsolute(blog.slug, siteUrl);

  return {
    metadataBase: getMetadataBase(),
    title,
    description,
    keywords: blog.metaKeywords || undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: blog.imageAlt || blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default async function BlogShowPage({ params }) {
  const { slug } = await params;
  let blog = null;
  let loadError = null;
  try {
    blog = await getPublishedBlogBySlug(slug);
  } catch (err) {
    loadError = err?.message || "Could not load blog.";
  }

  if (loadError) {
    return (
      <div className={styles.errorPage}>
        <div className={styles.errorCard}>
          <h1>Blog temporarily unavailable</h1>
          <p>{loadError}</p>
          <Link href="/blogs" className={styles.backLink}>
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) notFound();

  const cleanFaqs = Array.isArray(blog.faqs)
    ? blog.faqs.filter((f) => f && f.question && f.answer)
    : [];

  const articleUrl = `${getSiteUrl()}/blogs/${blog.slug}`;
  const imageAbs = getBlogOgImageAbsolute(blog.slug, getSiteUrl());
  const publisherLogo = `${getSiteUrl()}/assets/weblogo.png`;
  const publishedIso = blog.createdAt
    ? new Date(blog.createdAt).toISOString()
    : undefined;
  const modifiedIso = blog.updatedAt
    ? new Date(blog.updatedAt).toISOString()
    : publishedIso;

  const faqLd =
    cleanFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: cleanFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const featuredSrc = getBlogOgImagePath(blog.slug);
  const relatedTool = getRelatedBlogTool(blog.slug);

  return (
    <div className={styles.page}>
      <BlogArticleSchema
        headline={blog.metaTitle || blog.title}
        description={blog.metaDescription}
        image={imageAbs}
        datePublished={publishedIso}
        dateModified={modifiedIso}
        slug={blog.slug}
      />
      <BlogBreadcrumbSchema
        slug={blog.slug}
        headline={blog.metaTitle || blog.title}
      />
      <AuthorOrganizationSchema
        authorName="Raja Jahangir"
        authorUrl="https://fastvidl.com/author/raja-jahangir"
        organizationName="FastVidl"
        organizationUrl={getSiteUrl()}
        articleUrl={articleUrl}
        headline={blog.metaTitle || blog.title}
        description={blog.metaDescription || undefined}
        image={imageAbs}
        publisherLogo={publisherLogo}
        datePublished={toSchemaDate(blog.createdAt)}
        dateModified={toSchemaDate(blog.updatedAt || blog.createdAt)}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <header className={styles.heroBanner}>
        <div className={styles.heroInner}>
          <div className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden> / </span>
            <Link href="/blogs">Blog</Link>
          </div>
          <h1 className={styles.heroTitle}>{blog.title}</h1>
          <p className={styles.heroMeta}>
            By{" "}
            <Link href="/author/raja-jahangir" className={styles.authorLink}>
              Raja Jahangir
            </Link>
            {blog.createdAt && (
              <>
                {" "}
                · Published{" "}
                <time dateTime={publishedIso}>
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </>
            )}
          </p>
        </div>
      </header>

      <article className={styles.article}>
        {featuredSrc && (
          <figure className={styles.featuredImage}>
            <Image
              src={featuredSrc}
              alt={blog.imageAlt || blog.title}
              width={1200}
              height={630}
              className={styles.featuredImg}
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              quality={75}
            />
            {blog.imageAlt && (
              <figcaption className={styles.figureCaption}>
                {blog.imageAlt}
              </figcaption>
            )}
          </figure>
        )}

        <div className="container-blog">
          <section className="home-blog-article">
            <div
              className={`blog-content ${styles.body}`}
              dangerouslySetInnerHTML={{ __html: blog.longDescription || "" }}
            />
            <p className={styles.contextualToolLink}>
              {relatedTool.sentence}{" "}
              <Link href={relatedTool.href}>{relatedTool.anchor}</Link>.
            </p>
          </section>
        </div>

        <div className="container-blog">
          <BlogRelatedArticles slug={blog.slug} />
        </div>

        {cleanFaqs.length > 0 && (
          <div className={styles.faqWrap}>
            <FaqSection items={cleanFaqs} showFaqsPageLink />
          </div>
        )}

        <div className={styles.relatedTool}>
          <p>Looking for a fast, free downloader? Try:</p>
          <Link href={relatedTool.href}>{relatedTool.name} →</Link>
        </div>

        <div className={styles.footerActions}>
          <Link href="/blogs" className={styles.footerLink}>
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
