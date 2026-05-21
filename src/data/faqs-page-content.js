/** FAQs page content — used for UI and FAQPage JSON-LD. */
export const FAQS_PAGE_SECTIONS = [
  {
    id: "how-to-download",
    title: "How to Download",
    items: [
      {
        question: "How do I download a video with FastVidl?",
        answer:
          'Copy a public video URL from Instagram, Facebook, or Pinterest, paste it into the matching FastVidl downloader page, and click download. For Reels, use our <a href="/instagram-reel-downloader-free">Instagram Reel Downloader</a>.',
      },
      {
        question: "How do I download an Instagram Reel without a watermark?",
        answer:
          'Open the Reel, tap Share, copy the link, and paste it into the <a href="/instagram-reel-downloader-free">Instagram Reel Downloader</a>. FastVidl fetches the public MP4 without adding its own watermark.',
      },
      {
        question: "Can I download Instagram Stories?",
        answer:
          'Yes, for public story links. Use the <a href="/instagram-story-downloader">Instagram Story Downloader</a>. If audio is missing after a normal save, see <a href="/blogs/save-instagram-stories-with-music-not-muted">how to save Instagram stories with music</a>.',
      },
      {
        question: "How do I save an Instagram Carousel with multiple photos?",
        answer:
          'Copy the carousel post link and use the <a href="/download/instagram-carousel-downloader">Instagram carousel downloader</a> or read <a href="/blogs/download-instagram-carousel-photos-phone">how to download Instagram carousel photos on your phone</a>.',
      },
      {
        question: "How do I download Facebook videos?",
        answer:
          'Paste a public Facebook video URL into the <a href="/free-facebook-video-downloader">Facebook Video Downloader</a>. For Live replays, see <a href="/blogs/download-facebook-live-videos-after-end">download Facebook Live after it ends</a>.',
      },
      {
        question: "How do I download Pinterest videos or pins?",
        answer:
          'Use the <a href="/pinterest-video-downloader-free">Pinterest Video Downloader</a> for public pins. To save a whole board offline, read <a href="/blogs/save-pinterest-board-offline-viewing-ipad-iphone">save a Pinterest board for offline viewing</a>.',
      },
    ],
  },
  {
    id: "device-support",
    title: "Device Support",
    items: [
      {
        question: "Does FastVidl work on iPhone and Android?",
        answer:
          "Yes. FastVidl runs in Safari, Chrome, and other mobile browsers. No app install is required on iPhone, Android, tablets, or desktop.",
      },
      {
        question: "Do I need to install any software?",
        answer:
          "No. Everything runs in your browser. Visit fastvidl.com, paste your link, and save the file to your device.",
      },
      {
        question: "Can I use FastVidl on a PC or Mac?",
        answer:
          "Yes. Desktop browsers work the same way as mobile. Large files may download to your Downloads folder instead of the Photos app.",
      },
      {
        question: "Does FastVidl work in all countries?",
        answer:
          "FastVidl is web-based and generally accessible worldwide. Some networks or regions may block certain domains; try another connection if a download fails.",
      },
    ],
  },
  {
    id: "quality-format",
    title: "Quality & Format",
    items: [
      {
        question: "What video qualities are available?",
        answer:
          "Quality depends on what the platform exposes for that public link. FastVidl offers the best available stream, often up to HD, when the source allows it.",
      },
      {
        question: "Does FastVidl add a watermark?",
        answer:
          "FastVidl does not add its own watermark. Third-party watermarks from the original creator may still appear if they were embedded in the source file.",
      },
      {
        question: "Why does my downloaded video look blurry?",
        answer:
          'Platforms compress uploads. Read <a href="/blogs/why-downloaded-video-quality-is-bad-fix">why downloaded video quality is bad and how to fix it</a> for practical tips.',
      },
      {
        question: "Why does my downloaded Facebook video have no sound?",
        answer:
          'This is often a codec or split-audio issue. See <a href="/blogs/facebook-video-no-sound-quick-fix">Facebook video no sound quick fix</a>.',
      },
      {
        question: "Is there a file size limit?",
        answer:
          "There is no strict FastVidl cap, but very large files (over ~2GB) may take longer depending on your connection and device storage.",
      },
    ],
  },
  {
    id: "safety-privacy",
    title: "Safety & Privacy",
    items: [
      {
        question: "Is FastVidl free to use?",
        answer:
          "Yes. FastVidl is free with no subscription or registration required for supported public links.",
      },
      {
        question: "Does FastVidl require my Instagram or Facebook login?",
        answer:
          "No. FastVidl does not ask for social media passwords. Only paste public URLs you are allowed to access.",
      },
      {
        question: "Is FastVidl for public content only?",
        answer:
          'Yes. Use FastVidl only for content you have permission to download and for personal, lawful use. See our <a href="/terms-and-conditions">Terms</a> and <a href="/disclaimer">Disclaimer</a>.',
      },
      {
        question: "Are downloaded files safe?",
        answer:
          "FastVidl does not bundle malware with downloads. Always scan files if your workflow requires it, and only download from accounts you trust.",
      },
      {
        question: "Does FastVidl store my links or videos?",
        answer:
          'FastVidl processes public URLs to generate download links. Do not submit private or sensitive URLs you do not want processed. See the <a href="/privacy-policy">Privacy Policy</a> for details.',
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    items: [
      {
        question: "Why is my link not working?",
        answer:
          "Confirm the post is public, copy the link from the platform Share menu (not only the browser bar), and try again. Private or restricted content cannot be fetched.",
      },
      {
        question: "Instagram says action blocked — what should I do?",
        answer:
          'Pause automated activity, wait, and clear cache if needed. Read <a href="/blogs/instagram-action-block-fix">Instagram action block fixes</a> and <a href="/blogs/clear-instagram-cache">clear Instagram cache</a>.',
      },
      {
        question: "Pinterest will not let me save pictures — any fix?",
        answer:
          'Try downloading the public pin with FastVidl or follow <a href="/blogs/pinterest-not-saving-pictures-fix">Pinterest not saving pictures fix</a>.',
      },
      {
        question: "Which platforms does FastVidl support?",
        answer:
          "Instagram (Reels, Stories, photos, carousels), Facebook videos, and Pinterest videos and pins via the dedicated downloader pages linked in the site menu.",
      },
      {
        question: "Where can I read more guides?",
        answer:
          'Browse the <a href="/blogs">FastVidl blog</a> for step-by-step tutorials on Instagram, Facebook, and Pinterest downloads.',
      },
    ],
  },
];

/** Flat list for FAQSchema and FaqSection. */
export function getFaqsPageFlatList() {
  return FAQS_PAGE_SECTIONS.flatMap((section) => section.items);
}
