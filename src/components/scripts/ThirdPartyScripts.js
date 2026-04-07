import Script from "next/script";
import ShareThisSticky from "./ShareThisSticky";
import EzoicRouteRefresh from "./EzoicRouteRefresh";

const GTAG_ID = "AW-17669779343";

export default function ThirdPartyScripts() {
  return (
    <>
      <EzoicRouteRefresh />
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
    </>
  );
}
