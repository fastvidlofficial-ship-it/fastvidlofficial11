import { getSiteUrl, toAbsoluteUrl } from "@/lib/site-url";

const AUTHOR_URL = "https://fastvidl.com/author/raja-jahangir";
const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/raja-jahangir";

/**
 * Article JSON-LD for blog posts (E-E-A-T).
 */
export default function BlogArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  slug,
}) {
  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/blogs/${slug}`;
  const imageUrl = toAbsoluteUrl(image);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: description || undefined,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: {
      "@type": "Person",
      name: "Raja Jahangir",
      url: AUTHOR_URL,
      sameAs: [AUTHOR_LINKEDIN],
    },
    publisher: {
      "@type": "Organization",
      name: "FastVidl",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/weblogo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
