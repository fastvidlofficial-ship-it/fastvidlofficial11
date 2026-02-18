import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/weblogo.png';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Not Found | FastVidl',
  description: 'The page you are looking for could not be found. Return to FastVidl homepage to download Instagram, Facebook, and Pinterest videos.',
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="FastVidl Logo"
            width={80}
            height={80}
            className={styles.logo}
          />
          <h1 className={styles.logoText}>FastVidl</h1>
        </div>

        <div className={styles.errorContent}>
          <h2 className={styles.errorCode}>404</h2>
          <h3 className={styles.errorTitle}>Page Not Found</h3>
          <p className={styles.errorMessage}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className={styles.errorSubMessage}>
            Don't worry, you can still download videos from Instagram, Facebook, and Pinterest.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Go to Homepage
            </Link>
            <Link href="/Blogs" className={styles.secondaryButton}>
              Visit Blog
            </Link>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>Quick Links:</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/instagram-reel-downloader-free">
                  Instagram Reel Downloader
                </Link>
              </li>
              <li>
                <Link href="/free-facebook-video-downloader">
                  Facebook Reel Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-video-downloader-free">
                  Pinterest Reel Downloader
                </Link>
              </li>
              <li>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
