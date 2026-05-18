export default function ResponsibleUseBanner() {
  return (
    <div className="responsible-use-banner" role="note" aria-label="Responsible use notice">
      <span className="banner-icon" aria-hidden="true">
        ⚠️
      </span>
      <div className="banner-text">
        <strong>Responsible Use Notice: </strong>
        FastVidl is designed for downloading publicly available content for{" "}
        <strong>personal use only</strong> — such as backing up your own uploads, saving content for offline
        viewing, or keeping a personal reference copy. Downloading does not transfer copyright ownership.
        Always respect the original creator&apos;s rights and the platform&apos;s Terms of Service.{" "}
        <a href="/disclaimer" className="banner-link">
          Read our full Disclaimer →
        </a>
      </div>
    </div>
  );
}
