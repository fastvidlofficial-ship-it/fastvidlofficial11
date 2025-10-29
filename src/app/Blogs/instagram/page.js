export const metadata = {
    metadataBase: new URL('https://fastvidl.com'),
    title: 'Instagram Reel Downloader - FastVidl',
    description:
        'Free Instagram reel downloader. Save reels, IGTV, stories and photos in HD without watermark. Fast, secure, and free.',
    alternates: { canonical: 'https://fastvidl.com/Blogs/instagram' },
    openGraph: {
        title: 'Instagram Reel Downloader - FastVidl',
        description:
            'Free Instagram reel downloader. Save reels, IGTV, stories and photos in HD without watermark. Fast, secure, and free.',
        url: 'https://fastvidl.com/Blogs/instagram',
        images: ['/assets/insta.svg', '/assets/weblogo.png'],
    },
    robots: { index: true, follow: true },
};

import { InstagramBlogPage } from "../page";

export default function InstagramBP() {
    return <InstagramBlogPage />;
}