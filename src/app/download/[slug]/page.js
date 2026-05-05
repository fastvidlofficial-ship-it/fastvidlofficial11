import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import heroStyles from "../../DownloaderHero.module.css";
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

function getInputPlaceholder(contentType) {
  const normalized = contentType.toLowerCase();

  if (normalized === "video" || normalized === "reel" || normalized === "igtv") {
    return "Paste Video URL here";
  }
  if (normalized === "photo" || normalized === "image") {
    return "Paste Photo URL here";
  }
  if (normalized === "pin") {
    return "Paste Pin URL here";
  }
  if (normalized === "story") {
    return "Paste Story URL here";
  }

  return "Paste Video/Photo/Pin URL here";
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

export async function generateMetadata({ params }) {
  const slug = await getSlugFromParams(params);
  if (!slug) {
    notFound();
  }

  const data = await readPseoData();
  const entry = data.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  const canonical = `https://fastvidl.com/download/${entry.slug}`;

  return {
    title: entry.meta_title,
    description: entry.meta_desc,
    alternates: { canonical },
    openGraph: {
      title: entry.meta_title,
      description: entry.meta_desc,
      url: canonical,
      siteName: "FastVidl",
      images: ["/assets/weblogo.png"],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.meta_title,
      description: entry.meta_desc,
    },
  };
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

  const placeholder = getInputPlaceholder(entry.content_type);
  const cardStyle = {
    border: "1px solid var(--border-subtle, #e2e8f0)",
    borderRadius: "16px",
    background: "var(--card-bg, #ffffff)",
    padding: "24px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  };

  const sectionStyle = {
    marginTop: "1.25rem",
    ...cardStyle,
  };

  const chipStyle = {
    display: "inline-flex",
    borderRadius: "999px",
    background: "var(--subtle-bg, #f1f5f9)",
    padding: "4px 10px",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "var(--text-muted, #64748b)",
    marginBottom: "10px",
  };

  return (
    <main className="app">
      <section className="container-blog" style={{ paddingTop: "1.25rem", paddingBottom: "2.5rem" }}>
        <div style={cardStyle}>
          <p style={chipStyle}>
            {entry.platform} {entry.content_type} Downloader
          </p>
          <h1
            className={heroStyles.heroTitle}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              textAlign: "center",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            {renderStyledHeading(entry.h1_title)}
          </h1>
          <p className="home-blog-article-p" style={{ color: "var(--text-secondary, #4a5568)", marginBottom: "1rem" }}>
            {entry.intro_text}
          </p>

          <div style={{ border: "1px solid var(--border-subtle, #e2e8f0)", borderRadius: "12px", padding: "16px" }}>
            <label
              htmlFor="download-url"
              style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", fontWeight: 600, color: "var(--heading-color, #1a202c)" }}
            >
              Start download
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <input
                id="download-url"
                type="url"
                placeholder={placeholder}
                style={{
                  height: "46px",
                  flex: "1 1 320px",
                  borderRadius: "10px",
                  border: "1px solid var(--border-subtle, #cbd5e1)",
                  background: "var(--card-bg, #fff)",
                  padding: "0 14px",
                  fontSize: "0.92rem",
                  color: "var(--text-body, #334155)",
                }}
              />
              <button
                type="button"
                style={{
                  height: "46px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(to right, #ff512f, #24afff)",
                  color: "#fff",
                  padding: "0 22px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>

        <section style={sectionStyle}>
          <h2 className="home-blog-article-h2" style={{ marginTop: 0 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ marginTop: "10px" }}>
            <article className="faq-item">
              <h3 className="faq-question">{entry.faq_q}</h3>
              <p className="faq-answer">{entry.faq_a}</p>
            </article>
          </div>
        </section>

        <section style={{ ...sectionStyle, textAlign: "center" }}>
          <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--heading-color, #1a202c)" }}>
            Written by Raja Jahangir | Powered by Auroxa Tech
          </p>
        </section>
      </section>
    </main>
  );
}
