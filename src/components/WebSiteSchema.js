/**
 * Renders WebSite and WebApplication JSON-LD schema for rich results and AI.
 * Included in root layout so every page carries a clear site/tool description.
 */
export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "FastVidl",
        description:
          "FastVidl is a high-speed Instagram Reel downloader supporting 4K resolution and watermark-free saves. The site also offers free video downloaders for Pinterest and Facebook. All tools are free to use in the browser with no app install required.",
        url: "https://fastvidl.com",
      },
      {
        "@type": "WebApplication",
        name: "FastVidl",
        description:
          "Free Instagram Reel, Facebook video, and Pinterest video downloader. Save reels and videos in HD without watermark. No login, no app install — browser-based and secure.",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        url: "https://fastvidl.com",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
