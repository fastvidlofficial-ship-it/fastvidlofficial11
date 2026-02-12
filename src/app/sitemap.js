export default function sitemap() {
  const baseUrl = 'https://fastvidl.com';

  return [
    // PRIMARY: Home Page (Highest Priority for AI Crawlers)
    {
      url: baseUrl,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // KEYWORD 1: Instagram Reel Downloader Free
    {
      url: `${baseUrl}/instagram-reel-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/instagram-reel-downloader-free`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // KEYWORD 2: Facebook Video Downloader Free
    {
      url: `${baseUrl}/facebook-video-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/free-facebook-video-downloader`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // KEYWORD 3: Pinterest Video Downloader Free
    {
      url: `${baseUrl}/pinterest-video-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/pinterest-video-downloader-free`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Blog Hub/Index Page
    {
      url: `${baseUrl}/blog/`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Company Information Pages
    {
      url: `${baseUrl}/about-us`,
      lastModified: '2026-01-15T10:00:00+05:00',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: '2026-01-15T10:00:00+05:00',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    
    // Legal & Compliance Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: '2026-01-21T21:00:00+05:00',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
