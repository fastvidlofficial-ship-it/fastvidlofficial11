import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublishedBlogBySlug } from "@/lib/blog-queries";
import FaqSection from "@/components/faq/FaqSection";
import "@/content/Blog.css";
import styles from "./BlogShow.module.css";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fastvidl.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let blog = null;
  try {
    blog = await getPublishedBlogBySlug(slug);
  } catch {
    /* swallow — handled below */
  }

  if (!blog) {
    return { title: "Blog not found · FastVidl", robots: { index: false } };
  }

  const title = blog.metaTitle || blog.title;
  const description =
    blog.metaDescription ||
    `${blog.title} — read the full guide on FastVidl.`;
  const url = `${SITE_URL.replace(/\/$/, "")}/blogs/${blog.slug}`;
  const imageAbs = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${SITE_URL.replace(/\/$/, "")}${blog.image}`
    : undefined;

  return {
    title,
    description,
    keywords: blog.metaKeywords || undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: imageAbs ? [imageAbs] : undefined,
    },
    twitter: {
      card: imageAbs ? "summary_large_image" : "summary",
      title,
      description,
      images: imageAbs ? [imageAbs] : undefined,
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

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || undefined,
    image: blog.image
      ? blog.image.startsWith("http")
        ? blog.image
        : `${SITE_URL.replace(/\/$/, "")}${blog.image}`
      : undefined,
    datePublished: blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined,
    dateModified: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL.replace(/\/$/, "")}/blogs/${blog.slug}`,
    },
    author: { "@type": "Organization", name: "FastVidl" },
    publisher: {
      "@type": "Organization",
      name: "FastVidl",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL.replace(/\/$/, "")}/assets/weblogo.png`,
      },
    },
  };

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

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
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
          {blog.createdAt && (
            <p className={styles.heroMeta}>
              Published{" "}
              <time dateTime={new Date(blog.createdAt).toISOString()}>
                {new Date(blog.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          )}
        </div>
      </header>

      <article className={styles.article}>
        {blog.image && (
          <figure className={styles.featuredImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.image} alt={blog.imageAlt || blog.title} />
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
          </section>
        </div>

        {cleanFaqs.length > 0 && (
          <div className={styles.faqWrap}>
            <FaqSection items={cleanFaqs} />
          </div>
        )}

        <div className={styles.footerActions}>
          <Link href="/blogs" className={styles.footerLink}>
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
