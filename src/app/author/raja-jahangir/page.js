import Image from "next/image";
import Link from "next/link";
import { rajaJahangirProfile } from "@/data/raja-jahangir-profile";
import "@/content/Blog.css";
import "./AuthorPage.css";

const SITE_URL = "https://fastvidl.com";
const PAGE_URL = `${SITE_URL}/author/raja-jahangir`;
const PAGE_DESCRIPTION =
  "Raja Jahangir is an SEO & Growth Specialist at FastVidl with 3 years of hands-on SEO experience across technical SEO, content strategy, and organic growth.";
const PAGE_TITLE = "Raja Jahangir — SEO & Growth Specialist | FastVidl";
const PROFILE_IMAGE = "/images/jahangir1.jpeg";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "profile",
    images: [PROFILE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PROFILE_IMAGE],
  },
  robots: { index: true, follow: true },
};

function PersonSchema() {
  const { name, linkedInUrl } = rajaJahangirProfile;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: "SEO & Growth Specialist",
    url: PAGE_URL,
    image: `${SITE_URL}${PROFILE_IMAGE}`,
    sameAs: [linkedInUrl],
    worksFor: {
      "@type": "Organization",
      name: "FastVidl",
      url: SITE_URL,
    },
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

      <div className="container-blog author-content">
        <section className="home-blog-article author-article">
          <h2 className="home-blog-article-h2" id="about-heading">
            About Me
          </h2>
          <p className="home-blog-article-p">{profile.aboutSummary}</p>

          <h2 className="home-blog-article-h2" id="expertise-heading">
            Core Expertise &amp; Skills
          </h2>
          <p className="home-blog-article-p">
            Below is how Raja applies SEO, content, and growth skills day to day
            on FastVidl—grouped by area so you can see both the skill and what it
            means in practice.
          </p>

          {profile.skillGroups.map((group) => (
            <div key={group.title} className="author-skill-group">
              <h3 className="home-blog-article-h3">{group.title}</h3>
              <ul className="author-skill-detail-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="author-skill-detail-item">
                    <strong className="author-skill-name">{skill.name}</strong>
                    <p className="home-blog-article-p author-skill-desc">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="home-blog-article-h2" id="journey-heading">
            Professional Journey
          </h2>
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

          <h2 className="home-blog-article-h2" id="tools-heading">
            Tools I Work On
          </h2>
          {profile.projects.map((project) => (
            <div key={project.name} className="author-project-block">
              <h3 className="home-blog-article-h3">{project.name}</h3>
              <p className="home-blog-article-p">{project.description}</p>
              <Link
                href={project.href}
                className="author-inline-link home-blog-article-link"
              >
                {project.cta} →
              </Link>
            </div>
          ))}

          <h2 className="home-blog-article-h2" id="connect-heading">
            Connect
          </h2>
          <p className="home-blog-article-p">
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-blog-article-link"
            >
              Connect with me on LinkedIn
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
