"use client"
import React, { useState } from 'react';
import './FAQS.css';

const FAQS = () => {
    // alert("test");
  const [activeIndex, setActiveIndex] = useState(null);
  console.log("hi");

  const faqData = [
    {
      question: "How do I download a video?",
      answer: "Simply paste the video URL into the input field, select your preferred quality, and click the download button. The video will be processed and downloaded to your device."
    },
    {
      question: "Which platforms are supported?",
      answer: "Our downloader supports multiple platforms including YouTube, Vimeo, Facebook, Instagram, Twitter, TikTok, and many other popular video sharing websites."
    },
    {
      question: "Is there a file size limit?",
      answer: "There are no strict file size limits, but very large videos (over 2GB) may take longer to process. Download times depend on your internet connection speed and the video quality selected."
    },
    {
      question: "What video qualities are available?",
      answer: "You can download videos in various qualities ranging from 144p to 4K (2160p), depending on what the original video offers. Higher quality videos will have larger file sizes."
    },
    {
      question: "Is this service free to use?",
      answer: "Yes, our video downloader is completely free to use with no hidden charges. You can download unlimited videos without any subscription or registration required."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! Our video downloader works directly in your web browser. Just visit the website, paste your link, and download."
    },
    {
      question: "Can I download videos on mobile devices?",
      answer: "Absolutely! Our downloader is fully responsive and works on smartphones, tablets, and desktop computers. Simply use your mobile browser to access the service."
    },
    {
      question: "Are the downloaded videos safe and legal?",
      answer: "Our tool is safe to use and doesn't contain malware. However, please ensure you have the right to download content and respect copyright laws. Only download videos you have permission to use."
    }
  ];

  const toggleFAQ = (index) => {
     console.log('Clicked');
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <p className="faqs-subtitle">Find answers to common questions about our video downloader</p>
        
        <div className="faqs-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;