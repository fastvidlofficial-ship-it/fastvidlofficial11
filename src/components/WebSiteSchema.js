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
        "@id": "https://fastvidl.com/#website",
        name: "FastVidl",
        description:
          "FastVidl is a free online downloader for public media from Instagram, Facebook, and Pinterest. The platform supports reels, stories, photos, and videos in a browser-based workflow with no app install required.",
        url: "https://fastvidl.com",
        publisher: { "@id": "https://fastvidl.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://fastvidl.com/#organization",
        name: "FastVidl",
        url: "https://fastvidl.com",
        logo: {
          "@type": "ImageObject",
          url: "https://fastvidl.com/assets/weblogo.png",
        },
      },
      {
        "@type": "WebApplication",
        name: "FastVidl",
        description:
          "Free browser-based downloader for Instagram Reels, Instagram Stories, Instagram Photos, Facebook videos, and Pinterest videos. No login, no app install, no watermark added by FastVidl.",
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
