"use client";
import "./AboutUs.css";
import "../Disclaimer/Disclaimer.css";
import Link from "next/link";
import Image from "next/image";
import { useLocaleCatalog } from "@/contexts/LocaleContext";
import { usePageDocumentTitle } from "@/components/usePageDocumentTitle";

const drivesUs = [
  {
    title: "Privacy first",
    description:
      "No tracking, no data storage—HTTPS secure.",
  },
  {
    title: "Creator respect",
    description:
      "Public content for personal use only. We follow platform APIs and DMCA guidelines. Check Privacy Policy and Terms.",
  },
  {
    title: "Reliability",
    description:
      "Frequent updates to beat platform changes; tested on Android, iPhone, desktops.",
  },
  {
    title: "Your input",
    description: "Feedback shapes us. Email fastvidlofficial@gmail.com",
  },
];

const team = [
  {
    name: "Tabish Irfan",
    role: "CEO & Founder Auroxa Tech",
    image: "/assets/tabish.jpeg",
    linkedin: "https://www.linkedin.com/in/tabish-irfan-5b930a226",
  },
  {
    name: "Hammas Ali",
    role: "CTO & Co-founder Auroxa Tech",
    image: "/images/hammass.jpeg",
    linkedin: "https://www.linkedin.com/in/hammas-ali-mirza/",
  },
  {
    name: "Raja Jahangir",
    role: "SEO & Growth Specialist",
    image: "/images/jahangir1.jpeg",
    linkedin: "https://www.linkedin.com/in/raja-jahangir",
  },
  {
    name: "Abdal Khalid",
    role: "Social Media Expert",
    image: "/images/abdal1.jpeg",
    linkedin: "https://www.linkedin.com/in/abdal-khalid",
  },
];

const faqs = [
  {
    question: "Is FastVidl really free?",
    answer:
      "Yes! 100% free with no hidden charges, no premium tiers, and no subscription plans.",
  },
  {
    question: "Do I need to install anything?",
    answer: "No. FastVidl is completely web-based and works directly in your browser.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Absolutely. We use secure HTTPS connections and never store your data or content.",
  },
  {
    question: "Does FastVidl work on mobile devices?",
    answer:
      "Yes! FastVidl works perfectly on iPhone, Android, tablets, and all mobile browsers.",
  },
  {
    question: "Can I download private content?",
    answer:
      "No. FastVidl only works with publicly available content that's accessible to everyone.",
  },
  {
    question: "Will the content creator know I downloaded their content?",
    answer: "No. All downloads are completely anonymous and private.",
  },
  {
    question: "Are there any download limits?",
    answer:
      "No daily limits, no file size restrictions. Download as much as you need.",
  },
];

const supportedPlatforms = {
  instagram: [
    "Reels",
    "Videos",
    "Photos",
    "Stories",
    "IGTV",
    "Highlights",
    "Carousel Posts",
  ],
  facebook: ["Reels", "Videos", "Watch Videos", "Public Posts"],
  pinterest: ["Images", "Videos", "Pins", "Boards Content"],
};

export default function AboutUs() {
  const { locale, catalog } = useLocaleCatalog();
  const sp = catalog.staticPages;
  const a = locale === "ar" && sp?.about ? sp.about : null;
  usePageDocumentTitle("about");

  const drives = a?.drivesUs ?? drivesUs;
  const faqList = a?.faqs ?? faqs;
  const rolesAr = a?.teamRoles;

  return (
    <div className="about-page">
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">{a?.pageTitle ?? "About Us"}</h1>
          <p className="page-subtitle">
            {a?.pageSubtitle ??
              "Fast. Free. Secure. Download Instagram, Facebook, and Pinterest content instantly."}
          </p>
        </div>
      </div>

      <div className="about-main">
        <div className="global-container">
          <div className="about-content global-container__content">
            <div className="cardsGrid">
              <div className="card3d">
                {a ? (
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: a.intro }}
                  />
                ) : (
                  <p className="text-base sm:text-lg leading-relaxed mb-6">
                    Welcome to <strong>fastvidl.com</strong> – We&apos;re a small
                    team of developers and social media fans who got tired of
                    clunky downloaders full of ads and restrictions. In 2026, we
                    launched fastvidl.com as a straightforward, free way to save
                    public content from Instagram, Facebook, and Pinterest for
                    personal use—like keeping a reel that inspires you or an
                    image for your project board. We understand how frustrating
                    it is to lose access to inspiring posts, educational content,
                    or memorable moments. That&apos;s why we created a simple
                    solution that works seamlessly across all your favorite
                    social platforms.
                  </p>
                )}
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.storyTitle ?? "Our Story"}
                </h2>
                {a ? (
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: a.storyBody }}
                  />
                ) : (
                  <p className="text-base sm:text-lg leading-relaxed mb-6">
                    It started when one of us needed to archive family videos from
                    Facebook but hated the hassle. We built something simple that
                    works on any device, no apps needed. Today, thousands use it
                    daily because we keep it fast, private, and always free.
                    We&apos;re based in <strong>Rawalpindi, Pakistan</strong>,
                    but our users span the globe.
                  </p>
                )}
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.drivesTitle ?? "What Drives Us"}
                </h2>
                <ul className="drives-list">
                  {drives.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong className="text-lg">● {item.title}:</strong>{" "}
                      <span className="text-base">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.freeTitle ?? "Always Free, No Limits"}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  {a?.freeBody ??
                    "100% free forever—no tiers, no caps, no watermarks. Preserve original quality."}
                </p>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.specialTitle ?? "What Makes FastVidl Special?"}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  {a?.specialIntro ?? "One tool for three platforms for downloads:"}
                </p>
                <ul className="platforms-list mb-4">
                  <li>
                    <strong>Instagram:</strong>{" "}
                    {a?.platforms?.instagram ??
                      supportedPlatforms.instagram.join(", ")}
                  </li>
                  <li>
                    <strong>Facebook:</strong>{" "}
                    {a?.platforms?.facebook ??
                      supportedPlatforms.facebook.join(", ")}
                  </li>
                  <li>
                    <strong>Pinterest:</strong>{" "}
                    {a?.platforms?.pinterest ??
                      supportedPlatforms.pinterest.join(", ")}
                  </li>
                </ul>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.trustTitle ?? "Why Trust FastVidl?"}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  {a?.trustBody ??
                    "We've handled thousands of downloads without a hitch, preserving original quality (up to 4K) across reels, stories, photos, and pins. No watermarks, no upsells—just the content you want, securely fetched straight from the source."}
                </p>
              </div>

              <div className="card3d team-section">
                <h2 className="team-heading">
                  {a?.teamHeading ?? "Meet the Team"}
                </h2>
                <p className="team-subheading">
                  {a?.teamSubheading ??
                    "We're not a big corp — just a passionate crew building tools we actually use."}
                </p>

                <div className="team-grid">
                  {team.map((member, index) => (
                    <div key={index} className="team-card">
                      <div className="team-card-img-wrapper">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="team-card-img"
                        />
                      </div>
                      <h3 className="team-card-name">{member.name}</h3>
                      <p className="team-card-role">
                        {rolesAr?.[index] ?? member.role}
                      </p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-card-linkedin"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          {a?.linkedinLabel ?? "LinkedIn"}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.faqSectionTitle ?? "Frequently Asked Questions"}
                </h2>
                <div className="faqs-container">
                  {faqList.map((faq, index) => (
                    <div key={index} className="faq-item mb-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.contactCardTitle ?? "Contact Us"}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  {a?.contactCardIntro ??
                    "We're here to help and love hearing from our users!"}
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">
                  {a?.getInTouch ?? "Get In Touch"}
                </h3>
                <ul className="contact-list mb-4">
                  {(a?.contactLines ?? [
                    {
                      label: "General Inquiries:",
                      valueHtml:
                        '<a href="mailto:fastvidlofficial@gmail.com" class="email-link">fastvidlofficial@gmail.com</a>',
                    },
                    {
                      label: "Technical Support:",
                      text: "Help with download issues or technical problems",
                    },
                    {
                      label: "Feature Requests:",
                      text: "Suggest new features or improvements",
                    },
                    {
                      label: "Partnership Opportunities:",
                      text: "Business and collaboration inquiries",
                    },
                    {
                      label: "Press & Media:",
                      text: "Media inquiries and press releases",
                    },
                    {
                      label: "Contact Form:",
                      valueHtml:
                        '<a href="/ContactUs" class="contact-link">FastVidl Contact Page</a>',
                    },
                    {
                      label: "Response Time:",
                      text: "We typically respond within 24-48 hours",
                    },
                  ]).map((line, i) => (
                    <li key={i} className="mb-2">
                      <strong>{line.label}</strong>{" "}
                      {line.valueHtml ? (
                        <span
                          dangerouslySetInnerHTML={{ __html: line.valueHtml }}
                        />
                      ) : (
                        line.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                  {a?.thankTitle ?? "Thank You"}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  {a?.thankBody ??
                    "Thank you for choosing FastVidl as your trusted content downloader. We're honored to serve thousands of users worldwide and remain committed to providing the best, fastest, and most secure downloading experience."}
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  {a?.tagline1 ??
                    "FastVidl – Download Instagram, Facebook, and Pinterest content instantly."}
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  {a?.tagline2 ?? "Fast. Free. Secure."}
                </p>
                <p style={{ color: "#333", fontSize: "15px", marginTop: "2rem" }}>
                  {a?.footerContactPrompt ?? "For any info, feel free to"}{" "}
                  <Link
                    href="/ContactUs"
                    rel="nofollow"
                    className="terms-link"
                    style={{
                      color: "#1877f2",
                      textDecoration: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {a?.footerContactLink ?? "Contact Us"}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
