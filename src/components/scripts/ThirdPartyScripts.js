import Script from "next/script";
import ShareThisSticky from "./ShareThisSticky";

const ADSENSE_CLIENT = "ca-pub-6813251858740530";
const GTAG_ID = "AW-17669779343";

/**
 * Loads after hydration — avoids React hydration mismatches from
 * raw <script> in <head> conflicting with AdSense / browser behavior.
 */
export default function ThirdPartyScripts() {
  return (
    <>
      <ShareThisSticky />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
