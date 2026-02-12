"use client"
import "./AboutUs.css";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  const drivesUs = [
    {
      title: "Privacy above all",
      description: "No logins, no tracking—just paste a link and download. We don't store your data or files."
    },
    {
      title: "Respect for creators",
      description: "Only public content, personal use only. Check our Privacy Policy and Terms for details."
    },
    {
      title: "Reliability first",
      description: "We update regularly to match platform changes, testing on real devices from Android phones to desktops."
    },
    {
      title: "Your input matters",
      description: "Feedback from users like you shapes fixes and features. Email us at fastvidlofficial@gmail.com"
    }
  ];

  const teamMembers = [
    {
      role: "Developers",
      description: "who code daily to keep speeds blazing."
    },
    {
      role: "Designers",
      description: "ensure it feels intuitive, even on mobile."
    },
    {
      role: "Support folks",
      description: "ready to help within 24 hours."
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
      answer: "No. All downloads are completely anonymous and private."
    },
    {
      question: "Are there any download limits?",
      answer: "No daily limits, no file size restrictions. Download as much as you need."
    }
  ];

  const supportedPlatforms = {
    instagram: ["Reels", "Videos", "Photos", "Stories", "IGTV", "Highlights", "Carousel Posts"],
    facebook: ["Reels", "Videos", "Watch Videos", "Public Posts"],
    pinterest: ["Images", "Videos", "Pins", "Boards Content"]
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-icon">
            <span className="download-icon">⬇️</span>
          </div>
          <h1 className="hero-title">
            About <span className="hero-highlight">FastVidl</span>
          </h1>
          <p className="hero-subtitle">
            Fast. Free. Secure. Download Instagram, Facebook, and Pinterest content instantly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="features-section">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Welcome Section */}
              <section className="content-section">
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Welcome to <strong>fastvidl.com</strong> – We're a small team of developers and social media fans who got tired of clunky downloaders full of ads and restrictions. In 2026, we launched fastvidl.com as a straightforward, free way to save public content from Instagram, Facebook, and Pinterest for personal use—like keeping a reel that inspires you or an image for your project board. We understand how frustrating it is to lose access to inspiring posts, educational content, or memorable moments. That's why we created a simple solution that works seamlessly across all your favorite social platforms.
                </p>
              </section>

              {/* Our Story */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Our Story</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  It started when one of us needed to archive family videos from Facebook but hated the hassle. We built something simple that works on any device, no apps needed. Today, thousands use it daily because we keep it fast, private, and always free. We're based in <strong>Rawalpindi, Pakistan</strong>, but our users span the globe.
                </p>
              </section>

              {/* What Drives Us */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">What Drives Us</h2>
                <ul className="drives-list">
                  {drivesUs.map((item, index) => (
                    <li key={index} className="mb-4">
                      <strong className="text-lg">● {item.title}:</strong>{" "}
                      <span className="text-base">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Always Free */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Always Free</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Quality tools shouldn't cost money. FastVidl has been, and will remain, completely free for everyone, everywhere.
                </p>
              </section>

              {/* What Makes FastVidl Special */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">What Makes FastVidl Special?</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  FastVidl supports public Instagram, Facebook, and Pinterest content, preserving original quality (up to 4K) with no watermarks.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  <strong>FastVidl supports:</strong>
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
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  One tool, three platforms, unlimited possibilities.
                </p>
              </section>

              {/* Why Trust FastVidl */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Why Trust FastVidl?</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  We've handled thousands of downloads without a hitch, preserving original quality (up to 4K) across reels, stories, photos, and pins. No watermarks, no upsells—just the content you want, securely fetched straight from the source.
                </p>
              </section>

              {/* The Team */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">The Team</h2>
                <ul className="team-list">
                  {teamMembers.map((member, index) => (
                    <li key={index} className="mb-3">
                      <strong className="text-lg">● {member.role}</strong> {member.description}
                    </li>
                  ))}
                </ul>
                <p className="text-base sm:text-lg leading-relaxed mb-6 mt-4">
                  We're not a big corp; we're people who use this tool ourselves and want to make saving moments easier.
                </p>

                {/* Team Member Profile */}
                <div className="team-profile-card">
                  <div className="team-profile-image">
                    <Image
                      src="/assets/tabish.jpeg"
                      alt="Tabish Irfan"
                      width={200}
                      height={200}
                      className="profile-photo"
                    />
                  </div>
                  <div className="team-profile-info">
                    <h3 className="text-2xl font-bold mb-2">Tabish Irfan</h3>
                    <p className="text-base mb-4" style={{ color: "#666" }}>
                      Founder & Developer
                    </p>
                    <a
                      href="https://www.linkedin.com/in/tabish-irfan-5b930a226"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ marginRight: "8px", verticalAlign: "middle" }}
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
                <div className="faqs-container">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item mb-4">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Us */}
              <section className="content-section">
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
                    <Link href="/ContactUs" className="contact-link">
                      FastVidl Contact Page
                    </Link>
                  </li>
                  <li className="mb-4">
                    <strong>Response Time:</strong> We typically respond within 24-48 hours
                  </li>
                </ul>
              </section>

              {/* Follow Us */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Follow Us</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Stay updated with the latest features, tips, and announcements.
                </p>
              </section>

              {/* Thank You */}
              <section className="content-section">
                <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Thank You</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Thank you for choosing FastVidl as your trusted content downloader. We're honored to serve thousands of users worldwide and remain committed to providing the best, fastest, and most secure downloading experience.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  FastVidl – Download Instagram, Facebook, and Pinterest content instantly.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                  Fast. Free. Secure.
                </p>
              </section>

              {/* Contact Link */}
              <p style={{ color: "#333", fontSize: "15px", marginTop: "2rem" }}>
                For any info, feel free to{" "}
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
                  Contact Us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;