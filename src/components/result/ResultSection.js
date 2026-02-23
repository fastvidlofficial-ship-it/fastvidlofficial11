import { useState } from "react";
import Loader from "../loader/Loader";
import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadHint, setDownloadHint] = useState("");
  const [iosProxyUrl, setIosProxyUrl] = useState("");
  const [isSharingIOS, setIsSharingIOS] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Extract values (now stored as direct values, not arrays)
  const type = props.result.type 
    ? (props.result.type.length > 60 ? props.result.type.slice(0, 60) + " ...." : props.result.type)
    : "Video";
  const thumbnail = props.result.thumbnail;
  const urls = props.result.urls;
  const quality = props.result.quality || "HD";

  const shareToIOSPhotos = async () => {
    if (!iosProxyUrl || isSharingIOS) return;
    try {
      setIsSharingIOS(true);
      const response = await fetch(iosProxyUrl);
      if (!response.ok) throw new Error("Unable to prepare file");
      const blob = await response.blob();
      const file = new File([blob], "fastvidl-video.mp4", {
        type: blob.type || "video/mp4",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "FastVidl Video",
          files: [file],
        });
      } else {
        window.open(iosProxyUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      window.open(iosProxyUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSharingIOS(false);
    }
  };

  const handleDownload = () => {
    // Use API proxy to force attachment headers.
    const proxyUrl = `/api/download?url=${encodeURIComponent(urls)}`;
    const ua = navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      // iOS Safari cannot auto-save directly to Photos from web.
      setIosProxyUrl(proxyUrl);
      setDownloadHint("On iPhone/iPad: tap Open Share Sheet, then choose Save Video to add it to Photos.");
      setIsDownloading(false);
    } else {
      setIosProxyUrl("");
      setIsDownloading(true);
      const link = document.createElement("a");
      link.href = proxyUrl;
      link.setAttribute("download", "fastvidl-video.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (isAndroid) {
        setDownloadHint("Saved to Downloads. If not visible in Gallery yet, wait a few seconds for media scan.");
      } else {
        setDownloadHint("");
      }
    }

    setTimeout(() => setIsDownloading(false), 1800);
  };

  return (
    <div className={style["result-div"]}>
      {isDownloading ? (
        <Loader />
      ) : (
        <>
          {thumbnail && (
            <div className={style["thumb-div"]}>
              {!imageError ? (
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className={style["thumbnail-image"]}
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                />
              ) : (
                <div className={style["thumbnail-placeholder"]}>
                  <span className={style["placeholder-icon"]}>📹</span>
                  <span className={style["placeholder-text"]}>Thumbnail</span>
                </div>
              )}
            </div>
          )}
          {type && <h3>{type}</h3>}
          <div className={style["download-section"]}>
            <table>
              <thead>
                <tr>
                  {/* <th>Quality</th> */}
                  {/* <th>Download</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{quality}</td> */}
                  <td>
                    <button
                      onClick={handleDownload}
                      className={style["download-btn"]}
                    >
                      Download in HD Quality
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {downloadHint ? <p className={style["download-hint"]}>{downloadHint}</p> : null}
            {iosProxyUrl ? (
              <div className={style["ios-actions"]}>
                <button
                  type="button"
                  className={style["ios-share-btn"]}
                  onClick={shareToIOSPhotos}
                  disabled={isSharingIOS}
                >
                  {isSharingIOS ? "Preparing..." : "Open Share Sheet"}
                </button>
                <a
                  href={iosProxyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style["ios-open-link"]}
                >
                  Open Video
                </a>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSection;