import { useState } from "react";
import Loader from "../loader/Loader";
import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
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
    setDownloadUrl(urls);
      // Call our Next.js API proxy instead of direct Instagram URL
const proxyUrl = `/api/download?url=${encodeURIComponent(urls)}`;
  const link = document.createElement("a");
  link.href = proxyUrl;
  link.setAttribute("download", "video.mp4");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className={style["result-div"]}>
      {isDownloading ? (
        <Loader
          startDownload={downloadUrl}
          onFinish={() => setIsDownloading(false)}
        />
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
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSection;