"use client";

/**
 * Renders Person (author), Organization (publisher), and BlogPosting JSON-LD schema
 * for rich results and author/organization attribution.
 * @param {Object} props
 * @param {string} [props.authorName] - Author full name
 * @param {string} [props.authorUrl] - Author profile URL (e.g. LinkedIn)
 * @param {string} [props.organizationName] - Organization name
 * @param {string} [props.organizationUrl] - Organization website URL
 * @param {string} [props.articleUrl] - Canonical URL of the article
 * @param {string} [props.headline] - Article headline
 * @param {string} [props.datePublished] - ISO date (e.g. "2026-02-27")
 * @param {string} [props.dateModified] - ISO date (e.g. "2026-02-27")
 */
export default function AuthorOrganizationSchema({
  authorName = "Raja Jahangir",
  authorUrl = "https://www.linkedin.com/in/raja-jahangir",
  organizationName = "Auroxa Tech",
  organizationUrl = "https://auroxatech.com",
  articleUrl,
  headline,
  datePublished,
  dateModified,
}) {
  const author = {
    "@type": "Person",
    name: authorName,
    ...(authorUrl && { url: authorUrl, sameAs: [authorUrl] }),
  };

  const publisher = {
    "@type": "Organization",
    name: organizationName,
    ...(organizationUrl && { url: organizationUrl }),
  };

  const graph = [
    author,
    publisher,
    ...(articleUrl && headline && datePublished
      ? [
          {
            "@type": "BlogPosting",
            headline,
            datePublished,
            ...(dateModified && { dateModified }),
            author: { "@id": "#author" },
            publisher: { "@id": "#publisher" },
            mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
          },
        ]
      : []),
  ];

  // Assign @id so BlogPosting can reference author and publisher
  const schema = {
    "@context": "https://schema.org",
    "@graph": graph.map((item, i) => {
      if (item["@type"] === "Person") return { ...item, "@id": "#author" };
      if (item["@type"] === "Organization") return { ...item, "@id": "#publisher" };
      return item;
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
