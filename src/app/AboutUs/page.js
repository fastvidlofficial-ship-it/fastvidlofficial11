"use client"
import "./AboutUs.css";

const AboutUs = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Download videos in seconds with our optimized technology"
    },
    {
      icon: "🛡️",
      title: "100% Secure",
      description: "Your privacy and security are our top priorities"
    },
    {
      icon: "🌍",
      title: "Multi-Platform",
      description: "Support for YouTube, Facebook, Instagram, X and more"
    },
    {
      icon: "⭐",
      title: "High Quality",
      description: "Download videos in their original quality and format"
    }
  ];

  const stats = [
    { number: "1M+", label: "Happy Users" },
    { number: "50M+", label: "Videos Downloaded" },
    { number: "15+", label: "Platforms Supported" },
    { number: "99.9%", label: "Uptime" }
  ];

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
            Empowering millions to save and enjoy their favorite content offline
          </p>
        </div>


      </div>

      {/* Features Grid */}
      <div className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">FastVidl?</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Your Complete Instagram Downloader
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                FastVidl offers a seamless way to download and save Instagram content — all in one place. Our tool supports downloading Instagram Videos, Photos, Stories, Reels, IGTV, and carousels in original quality with no watermark.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Why You Need FastVidl
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Instagram doesn’t provide a built-in option to download content for offline viewing. That’s where FastVidl comes in — a simple, powerful Instagram downloader that preserves the full quality of videos and photos without compression or watermarks.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                What Makes FastVidl Different
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                FastVidl is your trusted Instagram downloader — fast, free, and incredibly easy to use. No app installation needed, no login required. Just paste your Instagram link and download videos, photos, or Reels in seconds.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Key Features
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                All-in-One Instagram Downloader: Save Reels, Stories, IGTV, photos, and videos — all from one convenient tool.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Original Quality Preserved: Download content in Full HD, 1080p, or 4K resolution — exactly as it appears on Instagram.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Multiple Format Options: Choose your preferred video quality and file size before downloading.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Lightning-Fast Performance: Optimized servers deliver high-speed downloads for all types of Instagram content.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Universal Compatibility: Works seamlessly on mobile, tablet, and desktop — FastVidl is fully browser-based.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Cross-Device Support: Compatible with PC, iPhone, Android, Windows, Linux, and macOS.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                No Watermarks: Download Instagram Reels and videos cleanly, with no added logos or marks.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Complete Privacy: No sign-up required — all downloads are secure and private.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Download Anything from Instagram
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Instagram Video Downloader
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Save Instagram videos, Reels, IGTV, Stories, and photos in their original quality. Download carousel posts and profile pictures easily in one click.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Instagram Reel Downloader
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Experience fast, secure, and watermark-free downloads of Instagram Reels. Save your favorite Reels in HD quality directly to your device — all online and completely free.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Instagram Story Downloader
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Download Instagram Stories and Highlights anonymously. Save content from any public account without logging in or installing any app.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Simple, Secure, and Always Free
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                There’s nothing to install and no account required. FastVidl works on any device and major browser, giving you instant, high-quality results every time you download from Instagram.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                How It Works
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Copy the link of the Instagram post, Reel, Story, or video you want to download.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Paste it into FastVidl’s Instagram downloader box.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Click “Download” and choose your preferred quality.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Save to your device instantly.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Privacy & Security You Can Trust
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Your privacy is our top priority. FastVidl processes all Instagram downloads securely, without collecting personal data or storing content. All files are fetched directly from Instagram’s servers for maximum safety and confidentiality.
              </p>

              <p className="text-base sm:text-lg leading-relaxed mb-6">
                If you find FastVidl helpful, share it with friends and family — your support helps us keep this Instagram downloader free for everyone.
              </p>

              <p className="text-base sm:text-lg leading-relaxed mb-6">
                FastVidl — Download Instagram Reels, Stories, Videos, and Photos instantly. Fast, free, and secure.
              </p>
            </div>
          </div>

        </div>
      </div>


    </div>

  );
};

export default AboutUs;