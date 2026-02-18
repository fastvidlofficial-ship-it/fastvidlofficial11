"use client";

/**
 * Renders FAQPage JSON-LD schema in the document for rich results / SEO.
 * Rendered in the component tree so it is present in initial HTML (SSR-friendly).
 * @param {Array<{ question: string, answer: string }>} faqList - List of FAQ items
 */
export default function FAQSchema({ faqList }) {
  if (!faqList || !Array.isArray(faqList) || faqList.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
