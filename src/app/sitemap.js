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
    
    // KEYWORD 1: instagram-reel-downloader-free (service page)
    {
      url: `${baseUrl}/instagram-reel-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Blogs/instagram-reel-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // KEYWORD 2: free-facebook-video-downloader (service page)
    {
      url: `${baseUrl}/free-facebook-video-downloader`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Blogs/free-facebook-video-downloader`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // KEYWORD 3: pinterest-video-downloader-free (service page)
    {
      url: `${baseUrl}/pinterest-video-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Blogs/pinterest-video-downloader-free`,
      lastModified: '2026-02-12T12:00:00+05:00',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Blog Hub/Index Page
    {
      url: `${baseUrl}/Blogs`,
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
