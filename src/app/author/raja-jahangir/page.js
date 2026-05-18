import Image from "next/image";
import Link from "next/link";
import { rajaJahangirProfile } from "@/data/raja-jahangir-profile";
import "./AuthorPage.css";

const SITE_URL = "https://fastvidl.com";
const PAGE_URL = `${SITE_URL}/author/raja-jahangir`;
const PAGE_DESCRIPTION =
  "Raja Jahangir is an SEO & Growth Specialist and Content Author focused on search visibility, content strategy, and sustainable organic growth.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Raja Jahangir - SEO & Growth Specialist | Author",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Raja Jahangir - SEO & Growth Specialist | Author",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "profile",
    images: [rajaJahangirProfile.profileImage],
  },
  robots: { index: true, follow: true },
};

function PersonSchema() {
  const { name, titles, linkedInUrl, profileImage, aboutSummary, skills } =
    rajaJahangirProfile;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: PAGE_URL,
    image: `${SITE_URL}${profileImage}`,
    jobTitle: titles[0],
    description: aboutSummary || PAGE_DESCRIPTION,
    sameAs: [linkedInUrl],
    knowsAbout: skills.length > 0 ? skills : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RajaJahangirAuthorPage() {
  const profile = rajaJahangirProfile;
  const hasAbout = Boolean(profile.aboutSummary?.trim());
  const hasSkills = profile.skills.length > 0;
  const hasExperience = profile.experience.length > 0;

  return (
    <article className="author-page">
      <PersonSchema />

      <header className="author-hero">
        <div className="author-hero-inner">
          <div className="author-avatar-wrap">
            <Image
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              width={148}
              height={148}
              className="author-avatar"
              priority
            />
          </div>
          <h1 className="author-name">{profile.name}</h1>
          <p className="author-title">{profile.titles[0]}</p>
          {profile.titles[1] ? (
            <p className="author-title-secondary">{profile.titles[1]}</p>
          ) : null}
        </div>
      </header>

      <main className="author-main">
        <section className="author-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="author-section-h2">
            About Me
          </h2>
          {hasAbout ? (
            <p className="author-section-p">{profile.aboutSummary}</p>
          ) : (
            <p className="author-pending" role="status">
              Professional summary will be published here from verified profile
              sources.
            </p>
          )}
        </section>

        <section
          className="author-section"
          aria-labelledby="expertise-heading"
        >
          <h2 id="expertise-heading" className="author-section-h2">
            Core Expertise &amp; Skills
          </h2>
          {hasSkills ? (
            <ul className="author-skills" aria-label="Skills">
              {profile.skills.map((skill) => (
                <li key={skill}>
                  <span className="author-skill-badge">{skill}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="author-pending" role="status">
              Core skills will be listed here from verified profile sources.
            </p>
          )}
        </section>

        <section
          className="author-section"
          aria-labelledby="journey-heading"
        >
          <h2 id="journey-heading" className="author-section-h2">
            Professional Journey
          </h2>
          {hasExperience ? (
            <ol className="author-timeline">
              {profile.experience.map((item) => (
                <li
                  key={`${item.company}-${item.role}-${item.period}`}
                  className="author-timeline-item"
                >
                  <p className="author-timeline-role">{item.role}</p>
                  <p className="author-timeline-company">{item.company}</p>
                  <p className="author-timeline-period">{item.period}</p>
                  {item.description ? (
                    <p className="author-timeline-desc">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : (
            <p className="author-pending" role="status">
              Professional experience will appear in this timeline from verified
              profile sources.
            </p>
          )}
        </section>

        <section
          className="author-section"
          aria-labelledby="tools-heading"
        >
          <h2 id="tools-heading" className="author-section-h2">
            Tools I Work On
          </h2>
          <div className="author-project-card">
            <h3 className="author-project-title">Online Spin Wheel</h3>
            <p className="author-section-p">
              I apply SEO and growth strategies to the Online Spin Wheel so
              the tool stays fast, intuitive, and easy to discover. That
              includes clear page structure, helpful on-page copy, mobile-friendly
              UX, and content that answers what users actually search for—so
              more people can find and use the tool with confidence.
            </p>
            <div className="author-cta-row">
              <Link href="/" className="author-btn author-btn-primary">
                Try the Spin Wheel
              </Link>
            </div>
          </div>
        </section>

        <section
          className="author-section author-social-section"
          aria-labelledby="connect-heading"
        >
          <h2 id="connect-heading" className="author-section-h2">
            Connect
          </h2>
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="author-btn author-btn-linkedin"
          >
            Connect with me on LinkedIn
          </a>
        </section>
      </main>
    </article>
  );
}
