"use client";

import { useEffect } from "react";

const SCRIPT_ID = "faq-schema-ld-json";

/**
 * Injects FAQPage JSON-LD schema into document head for rich results / SEO.
 * @param {Array<{ question: string, answer: string }>} faqList - List of FAQ items
 */
export default function FAQSchema({ faqList }) {
  useEffect(() => {
    if (!faqList || !Array.isArray(faqList) || faqList.length === 0) return;

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

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
    };
  }, [faqList]);

  return null;
}
