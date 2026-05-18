import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublishedBlogBySlug } from "@/lib/blog-queries";
import AuthorOrganizationSchema from "@/components/AuthorOrganizationSchema";
import BlogArticleSchema from "@/components/BlogArticleSchema";
import FaqSection from "@/components/faq/FaqSection";
import { getSiteUrl, getMetadataBase, toAbsoluteUrl } from "@/lib/site-url";
import "@/content/Blog.css";
import styles from "./BlogShow.module.css";

export const dynamic = "force-dynamic";

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
  const imageAbs = toAbsoluteUrl(blog.image);

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
      images: imageAbs ? [{ url: imageAbs }] : undefined,
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

  const articleUrl = `${getSiteUrl()}/blogs/${blog.slug}`;
  const imageAbs = toAbsoluteUrl(blog.image);
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

  const featuredSrc =
    blog.image && !blog.image.startsWith("data:") ? blog.image : null;

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
