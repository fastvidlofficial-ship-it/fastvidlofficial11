import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import heroStyles from "../../DownloaderHero.module.css";
import saasStyles from "./downloadSlugSaas.module.css";
import UserInput from "@/components/input/UserInput";
import FaqSection from "@/components/faq/FaqSection";
import pseoAll from "../../../../pseo-data.json";

export const dynamicParams = true;
export const runtime = "nodejs";

const pseoData = (Array.isArray(pseoAll) ? pseoAll : []).filter(
  (item) => item && typeof item.slug === "string" && item.slug.length > 0
);

async function getSlugFromParams(params) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams?.slug;
}

const PLATFORM_WORDS = new Set(["instagram", "facebook", "pinterest", "ig", "insta"]);

const DEFAULT_CONTENT_WORDS = new Set([
  "video",
  "reel",
  "photo",
  "story",
  "highlight",
  "igtv",
  "pin",
  "pins",
  "stories",
  "photos",
  "reels",
  "videos",
  "images",
]);

const ACTION_WORDS = new Set(["downloader", "saver"]);

function contentKeywordsFromType(contentType) {
  const ct = String(contentType || "").toLowerCase().trim();
  const set = new Set(DEFAULT_CONTENT_WORDS);
  if (ct) {
    set.add(ct);
    if (ct.endsWith("y")) {
      set.add(`${ct.slice(0, -1)}ies`);
    } else {
      set.add(`${ct}s`);
    }
  }
  return set;
}

function tokenNormalized(word) {
  return word.replace(/[^\w]/g, "").toLowerCase();
}

function renderStyledHeading(title, contentType) {
  const contentWords = contentKeywordsFromType(contentType);
  const words = title.split(/\s+/);

  return words.map((word, index) => {
    const norm = tokenNormalized(word);

    let className = saasStyles.wordPlain;

    if (PLATFORM_WORDS.has(norm)) {
      className = saasStyles.wordPlain;
    } else if (ACTION_WORDS.has(norm)) {
      className = saasStyles.wordAction;
    } else if (contentWords.has(norm)) {
      className = saasStyles.wordContent;
    }

    return (
      <span key={`${word}-${index}`} className={className}>
        {word}
        {index < words.length - 1 ? " " : ""}
      </span>
    );
  });
}

export async function generateStaticParams() {
  return pseoData.map((entry) => ({ slug: entry.slug }));
}

function normalizeFaqs(entry) {
  if (Array.isArray(entry.faqs) && entry.faqs.length > 0) {
    return entry.faqs.filter((item) => item && item.question && item.answer);
  }
  if (entry.faq_q && entry.faq_a) {
    return [{ question: entry.faq_q, answer: entry.faq_a }];
  }
  return [];
}

function parseHowToSteps(raw) {
  return String(raw || "")
    .split("|")
    .map((step) => step.trim())
    .filter(Boolean);
}

function buildFaqJsonLd(faqs) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export default async function DownloadSlugPage({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const entry = pseoData.find((item) => item.slug === slug);
  if (!entry) {
    notFound();
  }

  const faqs = normalizeFaqs(entry);
  const faqLd = buildFaqJsonLd(faqs);
  const steps = parseHowToSteps(entry.how_to_use);

  const relatedTools = pseoData
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const scoreA = a.platform === entry.platform ? 1 : 0;
      const scoreB = b.platform === entry.platform ? 1 : 0;
      return scoreB - scoreA;
    })
    .slice(0, 6);

  const howToHeading =
    entry.platform && entry.content_type
      ? `How to Download ${entry.content_type}s from ${entry.platform}`
      : "How to Use FastVidl";

  return (
    <div className={styles.page}>
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}

      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle} style={{ marginBottom: "0.35rem" }}>
            {renderStyledHeading(entry.h1_title, entry.content_type)}
          </h1>
          <p className={saasStyles.subTag}>
            {entry.platform} · {entry.content_type} · Public links only
          </p>
        </div>

        <UserInput />

        <div className={saasStyles.body}>
          <p className={saasStyles.intro}>{entry.intro_text}</p>

          {steps.length > 0 ? (
            <section className={saasStyles.sectionMuted} aria-labelledby="how-to-heading">
              <h2 id="how-to-heading" className={saasStyles.sectionHeading}>
                {howToHeading}
              </h2>
              <div className={saasStyles.stepsGrid}>
                {steps.map((stepText, index) => (
                  <article key={`step-${index}`} className={saasStyles.stepCard}>
                    <span className={saasStyles.stepNum} aria-hidden="true">
                      {index + 1}
                    </span>
                    <p className={saasStyles.stepBody}>{stepText}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {faqs.length > 0 ? (
            <FaqSection items={faqs} headingId="faq-heading" />
          ) : null}

          {relatedTools.length > 0 ? (
            <section className={saasStyles.relatedSection} aria-labelledby="related-heading">
              <h2 id="related-heading" className={saasStyles.relatedHeading}>
                More Free Tools
              </h2>
              <div className={saasStyles.relatedGrid}>
                {relatedTools.map((item) => (
                  <Link key={item.slug} href={`/download/${item.slug}`} className={saasStyles.relatedLink}>
                    {item.h1_title || item.meta_title || item.slug}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  );
}
