/**
 * Author profile for Raja Jahangir.
 * Facts below are aligned with FastVidl site author bios and About Us team listing.
 * Do NOT add CEO, Founder, Co-Founder, or Auroxa Tech roles here.
 */

export const rajaJahangirProfile = {
  name: "Raja Jahangir",
  titles: ["SEO & Growth Specialist", "Content Author"],
  linkedInUrl: "https://www.linkedin.com/in/raja-jahangir",
  profileImage: "/images/jahangir1.jpeg",
  profileImageAlt: "Raja Jahangir — SEO & Growth Specialist",

  aboutSummary:
    "Raja Jahangir is an SEO & Growth Specialist and Content Author for FastVidl. With three years of hands-on SEO experience, he helps keep the platform user-centric, privacy-focused, and easy to find for people searching for reliable ways to save public Instagram, Facebook, and Pinterest media. His work spans technical SEO, long-form guides, and growth-focused UX across the site’s downloader tools and blog.",

  skillGroups: [
    {
      title: "Search Engine Optimization",
      skills: [
        {
          name: "Technical SEO",
          description:
            "Implements clean URL structures, canonical tags, JSON-LD schema (FAQ, Article, Person), sitemap hygiene, and mobile-friendly performance so tool and blog pages are crawlable and indexable.",
        },
        {
          name: "On-Page SEO",
          description:
            "Optimizes title tags, meta descriptions, heading hierarchy (H1–H3), and internal links so each downloader page targets the right intent without keyword stuffing.",
        },
        {
          name: "Programmatic SEO",
          description:
            "Supports FastVidl’s programmatic download landing pages with consistent metadata, unique intros, and structured content that scales across Instagram Reels, Stories, Photos, and related queries.",
        },
      ],
    },
    {
      title: "Content & E-E-A-T",
      skills: [
        {
          name: "Content Strategy",
          description:
            "Plans and edits in-depth guides that match real user questions—step-by-step downloads, device-specific tips, and responsible-use notices—so content is helpful, not thin.",
        },
        {
          name: "Author & Trust Signals",
          description:
            "Builds clear author attribution, LinkedIn profiles, and policy-aligned copy so readers and search engines understand who wrote the content and how to use tools responsibly.",
        },
        {
          name: "Blog & Editorial SEO",
          description:
            "Shapes FastVidl’s blog with strong summaries, FAQs, and cross-links between tools to improve discoverability and keep users on-site with useful next steps.",
        },
      ],
    },
    {
      title: "Growth & Product",
      skills: [
        {
          name: "Conversion-Focused UX",
          description:
            "Works on clear hero messaging, download flows, and mobile navigation so visitors can paste a link and save media quickly without unnecessary friction.",
        },
        {
          name: "Organic Growth",
          description:
            "Focuses on sustainable traffic through search visibility and helpful content rather than misleading claims—aligned with platform terms and copyright respect.",
        },
        {
          name: "Analytics & Iteration",
          description:
            "Uses measurement tags and search feedback to refine pages, fix broken metadata, and improve CTR on titles and descriptions over time.",
        },
      ],
    },
  ],

  experience: [
    {
      role: "SEO & Growth Specialist",
      company: "FastVidl",
      period: "Present",
      description:
        "Owns organic search strategy, on-page optimization, and growth experiments for FastVidl’s multi-platform downloader tools and supporting content.",
    },
    {
      role: "Content Author",
      company: "FastVidl",
      period: "Present",
      description:
        "Writes and reviews SEO guides, FAQs, and tool-page copy for Instagram, Facebook, and Pinterest download workflows.",
    },
  ],

  projects: [
    {
      name: "FastVidl",
      description:
        "Free browser-based downloader for public Instagram, Facebook, and Pinterest media. Raja applies SEO and growth best practices across the homepage, tool pages, blog, and programmatic download URLs.",
      href: "/",
      cta: "Visit FastVidl",
    },
  ],
};

/** Flat list for schema.org knowsAbout */
export function getSkillNames(profile = rajaJahangirProfile) {
  return profile.skillGroups.flatMap((g) => g.skills.map((s) => s.name));
}
