import { promises as fs } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import heroStyles from "../../DownloaderHero.module.css";
import UserInput from "@/components/input/UserInput";
import FAQSchema from "@/components/FAQSchema";
import premiumStyles from "./page-premium.module.css";
import "@/content/Blog.css";

export const dynamicParams = true;
export const runtime = "nodejs";

async function readPseoData() {
  const filePath = path.join(process.cwd(), "pseo-data.json");
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed.filter((item) => item && typeof item.slug === "string" && item.slug.length > 0);
}

async function getSlugFromParams(params) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams?.slug;
}

function renderStyledHeading(title) {
  const platformWords = new Set(["instagram", "facebook", "pinterest"]);
  const contentWords = new Set(["video", "photo", "reel"]);
  const downloaderWord = "downloader";
  const words = title.split(/\s+/);

  const plainWordStyle = {
    color: "var(--heading-color, #1a202c)",
    fontWeight: 700,
  };

  const contentGradientStyle = {
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, #FF5C2A, #FF2D6F)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontWeight: 800,
  };

  const downloaderGradientStyle = {
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, #17FF79, #01CBFF)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontWeight: 800,
  };

  return words.map((word, index) => {
    const normalized = word.replace(/[^\w]/g, "").toLowerCase();

    let style = plainWordStyle;

    if (contentWords.has(normalized)) {
      style = contentGradientStyle;
    } else if (normalized === downloaderWord) {
      style = downloaderGradientStyle;
    } else if (platformWords.has(normalized)) {
      style = plainWordStyle;
    }

    return (
      <span key={`${word}-${index}`} style={style}>
        {word}
        {index < words.length - 1 ? " " : ""}
      </span>
    );
  });
}

export async function generateStaticParams() {
  const data = await readPseoData();
  return data.map((entry) => ({ slug: entry.slug }));
}

export default async function DownloadSlugPage({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const data = await readPseoData();
  const entry = data.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const faqList = [
    { question: entry.faq_q, answer: entry.faq_a },
    { question: "Is this tool completely free?", answer: "Yes. FastVidl is free to use with no hidden subscription for standard downloads." },
    { question: "Where are files saved?", answer: "Downloaded files are saved to your device's default Downloads folder unless you choose a different location." },
    { question: "Do you store my download history?", answer: "No. We do not require login for basic use and we do not store personal download history." },
  ];
  const relatedTools = data
    .filter((item) => item.slug !== entry.slug)
    .sort((a, b) => {
      const aScore = a.platform === entry.platform ? 1 : 0;
      const bScore = b.platform === entry.platform ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 6);

  return (
    <div className={styles.page}>
      <FAQSchema faqList={faqList} />
      <main className={styles.main}>
        <div className={heroStyles.heroWrap}>
          <h1 className={heroStyles.heroTitle} style={{ marginBottom: "0.5rem" }}>
            {renderStyledHeading(entry.h1_title)}
          </h1>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "var(--muted-text, #64748b)",
              fontWeight: 500,
            }}
          >
            {entry.platform} · {entry.content_type} · Public links only
          </p>
        </div>

        <UserInput />

        <div className={premiumStyles.premiumWrap}>
          <section className={premiumStyles.introSection}>
            <p className={premiumStyles.introText}>{entry.intro_text}</p>
          </section>

          <section className={premiumStyles.howSection}>
            <h2 className={premiumStyles.sectionHeading}>
              How to Download {entry.content_type}s from {entry.platform}
            </h2>
            <div className={premiumStyles.howGrid}>
              <article className={premiumStyles.stepCard}>
                <span className={premiumStyles.stepBadge}>1</span>
                <h3 className={premiumStyles.cardTitle}>Paste the Link</h3>
                <p className={premiumStyles.cardText}>
                  Copy the public {entry.platform} URL and paste it into the downloader box above.
                </p>
              </article>
              <article className={premiumStyles.stepCard}>
                <span className={premiumStyles.stepBadge}>2</span>
                <h3 className={premiumStyles.cardTitle}>Analyze Instantly</h3>
                <p className={premiumStyles.cardText}>
                  FastVidl detects available formats and prepares the best quality file in seconds.
                </p>
              </article>
              <article className={premiumStyles.stepCard}>
                <span className={premiumStyles.stepBadge}>3</span>
                <h3 className={premiumStyles.cardTitle}>Download & Save</h3>
                <p className={premiumStyles.cardText}>
                  Click download to save the file directly to your device with no watermark added.
                </p>
              </article>
            </div>
          </section>

          <section className={premiumStyles.featuresSection}>
            <h2 className={premiumStyles.sectionHeading}>Why Use Our {entry.platform} Downloader?</h2>
            <div className={premiumStyles.featuresGrid}>
              <article className={premiumStyles.featureCard}>
                <h3 className={premiumStyles.cardTitle}>Lightning Fast & Free</h3>
                <p className={premiumStyles.cardText}>Instant downloads without signup, subscriptions, or hidden paywalls.</p>
              </article>
              <article className={premiumStyles.featureCard}>
                <h3 className={premiumStyles.cardTitle}>Studio Quality (HD)</h3>
                <p className={premiumStyles.cardText}>Get high-quality files, including HD/1080p when the source supports it.</p>
              </article>
              <article className={premiumStyles.featureCard}>
                <h3 className={premiumStyles.cardTitle}>No App Installation</h3>
                <p className={premiumStyles.cardText}>100% web-based workflow that runs on mobile, tablet, and desktop browsers.</p>
              </article>
              <article className={premiumStyles.featureCard}>
                <h3 className={premiumStyles.cardTitle}>Privacy & Security First</h3>
                <p className={premiumStyles.cardText}>No login required, no intrusive tracking, and no permanent history storage.</p>
              </article>
            </div>
          </section>

          <section className={premiumStyles.faqSection} id="frequently-asked-questions">
            <h2 className={premiumStyles.sectionHeading}>Frequently Asked Questions</h2>
            <div className={premiumStyles.faqList}>
              {faqList.map((faq, index) => (
                <details key={`${faq.question}-${index}`} className={premiumStyles.faqItem} open={index === 0}>
                  <summary className={premiumStyles.faqQuestion}>{faq.question}</summary>
                  <p className={premiumStyles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={premiumStyles.relatedSection}>
            <h2 className={premiumStyles.relatedHeading}>Explore More Free Tools</h2>
            <div className={premiumStyles.relatedGrid}>
              {relatedTools.map((item) => (
                <Link key={item.slug} href={`/download/${item.slug}`} className={premiumStyles.relatedCard}>
                  {item.h1_title}
                </Link>
              ))}
            </div>
          </section>

          <section className={premiumStyles.trustSection}>
            <p className={premiumStyles.trustRow}>100% Secure | SSL Encrypted | No Watermarks</p>
            <div className={premiumStyles.authorWrap}>
              <p className={premiumStyles.authorBadge}>Written by Raja Jahangir | Powered by Auroxa Tech</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
