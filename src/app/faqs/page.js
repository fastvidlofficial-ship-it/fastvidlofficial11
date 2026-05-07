"use client";

import FAQSchema from "@/components/FAQSchema";
import FaqSection from "@/components/faq/FaqSection";

const faqData = [
  {
    question: "How do I download a video?",
    answer:
      "Simply paste the video URL into the input field, select your preferred quality, and click the download button. The video will be processed and downloaded to your device.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "FastVidl supports Instagram (Reels, Stories, IGTV), Facebook (videos and reels), and Pinterest (videos and pins). Paste a public link from any of these platforms to download.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "There are no strict file size limits, but very large videos (over 2GB) may take longer to process. Download times depend on your internet connection speed and the video quality selected.",
  },
  {
    question: "What video qualities are available?",
    answer:
      "You can download videos in various qualities ranging from 144p to 4K (2160p), depending on what the original video offers. Higher quality videos will have larger file sizes.",
  },
  {
    question: "Is this service free to use?",
    answer:
      "Yes, FastVidl is completely free to use with no hidden charges. You can download unlimited videos without any subscription or registration required.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No installation required! FastVidl works directly in your web browser. Just visit the website, paste your link, and download.",
  },
  {
    question: "Can I download videos on mobile devices?",
    answer:
      "Absolutely! FastVidl is fully responsive and works on smartphones, tablets, and desktop computers. Simply use your mobile browser to access the service.",
  },
  {
    question: "Are the downloaded videos safe and legal?",
    answer:
      "FastVidl is safe to use and doesn't contain malware. However, please ensure you have the right to download content and respect copyright laws. Only download videos you have permission to use.",
  },
];

export default function FAQSPage() {
  return (
    <>
      <FAQSchema faqList={faqData} />
      <div className="container-blog" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
        <FaqSection
          items={faqData}
          headingId="faqs-page-heading"
          subtitle="Find answers to common questions about FastVidl"
        />
      </div>
    </>
  );
}
