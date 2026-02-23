import { useState } from "react";
import Loader from "../loader/Loader";
import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadHint, setDownloadHint] = useState("");
  const [imageError, setImageError] = useState(false);

  // Extract values (now stored as direct values, not arrays)
  const type = props.result.type 
    ? (props.result.type.length > 60 ? props.result.type.slice(0, 60) + " ...." : props.result.type)
    : "Video";
  const thumbnail = props.result.thumbnail;
  const urls = props.result.urls;
  const quality = props.result.quality || "HD";

  const handleDownload = () => {
    setIsDownloading(true);
    // Use API proxy to force attachment headers.
    const proxyUrl = `/api/download?url=${encodeURIComponent(urls)}`;
    const ua = navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      // iOS Safari ignores download attribute for many file types.
      // Opening the file lets user tap Share > Save Video.
      window.location.href = proxyUrl;
      setDownloadHint("On iPhone/iPad: tap Share and choose Save Video to add it to Photos.");
    } else {
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
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSection;