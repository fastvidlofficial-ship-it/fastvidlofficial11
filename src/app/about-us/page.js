"use client"
import "./AboutUs.css";
import "../disclaimer/Disclaimer.css";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  const drivesUs = [
    {
      title: "Privacy first",
      description:
        "We do not require an account to download. The site uses HTTPS, and we do not store the videos you save on our servers. Like most free sites, we use limited cookies and third-party tools (for example ads and basic analytics) to run and improve the service—see our Privacy Policy for details.",
    },
    {
      title: "Creator respect",
      description:
        "FastVidl is meant for public links and responsible personal use (for example backing up your own uploads or offline viewing you are allowed to do). Respect each platform’s Terms of Service and copyright. See Privacy Policy, Terms, and our DMCA page.",
    },
    {
      title: "Reliability",
      description: "Frequent updates to beat platform changes; tested on Android, iPhone, desktops."
    },
    {
      title: "Your input",
      description: "Feedback shapes us. Email fastvidlofficial@gmail.com"
    }
  ];

  const team = [
    {
      name: "Tabish Irfan",
      role: "CEO & Founder Auroxa Tech",
      image: "/assets/tabish.jpeg",
      linkedin: "https://www.linkedin.com/in/tabish-irfan-5b930a226"
    },
    {
      name: "Hammas Ali",
      role: "CTO & Co-founder Auroxa Tech",
      image: "/images/hammass.jpeg",
      linkedin: "https://www.linkedin.com/in/hammas-ali-mirza/"
    },
    {
      name: "Raja Jahangir",
      role: "SEO & Growth Specialist",
      image: "/images/jahangir1.jpeg",
      linkedin: "https://www.linkedin.com/in/raja-jahangir"
    },
    {
      name: "Abdal Khalid",
      role: "Social Media Expert",
      image: "/images/abdal1.jpeg",
      linkedin: "https://www.linkedin.com/in/abdal-khalid"
    }
  ];

  const faqs = [
    {
      question: "Is FastVidl really free?",
      answer: "Yes! 100% free with no hidden charges, no premium tiers, and no subscription plans."
    },
    {
      question: "Do I need to install anything?",
      answer: "No. FastVidl is completely web-based and works directly in your browser."
    },
    {
      question: "Is it safe to use?",
      answer: "Absolutely. We use secure HTTPS connections and never store your data or content."
    },
    {
      question: "Does FastVidl work on mobile devices?",
      answer: "Yes! FastVidl works perfectly on iPhone, Android, tablets, and all mobile browsers."
    },
    {
      question: "Can I download private content?",
      answer: "No. FastVidl only works with publicly available content that's accessible to everyone."
    },
    {
      question: "Will the content creator know I downloaded their content?",
      answer:
        "FastVidl does not notify creators and you do not log in to us—but platforms, networks, and advertisers may collect their own technical data under their policies. We do not claim that any online activity is untraceable.",
    },
    {
      question: "Are there any download limits?",
      answer:
        "We do not impose a daily cap for normal personal use. Please use the tool reasonably: mass scraping, automation that strains the service, or uses that violate platform rules or law are not acceptable.",
    }
  ];

  const supportedPlatforms = {
    instagram: ["Reels", "Videos", "Photos", "Stories", "IGTV", "Highlights", "Carousel Posts"],
    facebook: ["Reels", "Videos", "Watch Videos", "Public Posts"],
    pinterest: ["Images", "Videos", "Pins", "Boards Content"]
  };

  return (
    <div className="about-page">
      {/* Banner – same as Privacy & Terms */}
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Free browser tools to save public media you are allowed to access—for personal backups, offline viewing, and inspiration—across Instagram, Facebook, and Pinterest.
          </p>
        </div>
      </div>

      {/* Main Content – grey area + 3D cards */}
      <div className="about-main">
        <div className="global-container">
          <div className="about-content global-container__content">
            <div className="cardsGrid">
              <div className="card3d">
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Welcome to <strong>fastvidl.com</strong> — we are a small team at{" "}
                  <strong>Auroxa Tech</strong> (Rawalpindi, Pakistan) building simple browser tools for creators and everyday users. We launched FastVidl in <strong>August 2025</strong> to help people keep <strong>public</strong> Instagram, Facebook, and Pinterest media they may lawfully access—especially personal backups, reference, and offline viewing—without installing sketchy apps. We are transparent about limits: you are responsible for how you use downloads; when in doubt, get permission from the rights holder.
                </p>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Our Story</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  It started when one of us needed to archive family videos from Facebook but hated the hassle. We built something simple that works on any device—no extra apps required. We keep the product fast and free where we can, and we iterate as platforms change. Our users span the globe; the team and operations stay grounded in <strong>Rawalpindi, Pakistan</strong>.
                </p>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">What Drives Us</h2>
                <ul className="drives-list">
                  {drivesUs.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong className="text-lg">● {item.title}:</strong>{" "}
                      <span className="text-base">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Free for personal use</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  FastVidl stays free to use for typical personal workflows. We do not add our own watermark on supported downloads; quality depends on what the platform serves. Please use the service fairly and in line with our Terms.
                </p>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">What Makes FastVidl Special?</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  One tool for three platforms for downloads:
                </p>
                <ul className="platforms-list mb-4">
                  <li>
                    <strong>Instagram:</strong> {supportedPlatforms.instagram.join(", ")}
                  </li>
                  <li>
                    <strong>Facebook:</strong> {supportedPlatforms.facebook.join(", ")}
                  </li>
                  <li>
                    <strong>Pinterest:</strong> {supportedPlatforms.pinterest.join(", ")}
                  </li>
                </ul>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Why Trust FastVidl?</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Many people rely on FastVidl for quick saves when quality and speed matter. We fetch public media over HTTPS and focus on a predictable workflow. If something breaks because a platform changed its rules or URLs, we ship fixes as fast as we can—see <Link href="/contact-us" className="terms-link">Contact</Link> if you need help.
                </p>
              </div>

              <div className="card3d team-section">
                <h2 className="team-heading">Meet the Team</h2>
                <p className="team-subheading">
                  We're not a big corp — just a passionate crew building tools we actually use.
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
                      <p className="team-card-role">{member.role}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-card-linkedin"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
                <div className="faqs-container">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item mb-4">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Contact Us</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  We're here to help and love hearing from our users!
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Get In Touch</h3>
                <ul className="contact-list mb-4">
                  <li className="mb-2">
                    <strong>General Inquiries:</strong>{" "}
                    <a href="mailto:fastvidlofficial@gmail.com" className="email-link">
                      fastvidlofficial@gmail.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>Technical Support:</strong> Help with download issues or technical problems
                  </li>
                  <li className="mb-2">
                    <strong>Feature Requests:</strong> Suggest new features or improvements
                  </li>
                  <li className="mb-2">
                    <strong>Partnership Opportunities:</strong> Business and collaboration inquiries
                  </li>
                  <li className="mb-2">
                    <strong>Press & Media:</strong> Media inquiries and press releases
                  </li>
                  <li className="mb-2">
                    <strong>Contact Form:</strong>{" "}
                    <Link href="/contact-us" className="contact-link">
                      FastVidl Contact Page
                    </Link>
                  </li>
                  <li className="mb-4">
                    <strong>Response Time:</strong> We typically respond within 24-48 hours
                  </li>
                </ul>
              </div>

             

              <div className="card3d">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Thank You</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Thank you for using FastVidl. We are grateful for everyone who shares feedback, reports issues, and keeps us honest about privacy and copyright. Rights holders can reach us through the{" "}
                  <Link href="/dmca-takedown" className="terms-link">
                    DMCA / copyright notice
                  </Link>{" "}
                  page.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  FastVidl — public media, responsible personal use, one simple workflow.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  Fast. Free. Secure.
                </p>
                <p style={{ color: "#333", fontSize: "15px", marginTop: "2rem" }}>
                  For any info, feel free to{" "}
                  <Link
                    href="/contact-us"
                    rel="nofollow"
                    className="terms-link"
                    style={{
                      color: "#1877f2",
                      textDecoration: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Contact Us
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
};

export default AboutUs;