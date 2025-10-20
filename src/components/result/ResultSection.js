import { useState } from "react";
import Loader from "../loader/Loader";
import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const type = props.result.type.slice(0, 60) + " ....";
  const thumbnail = props.result.thumbnail;
  const urls = props.result.urls;
  const quality = props.result.quality;

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
          <div className={style["thumb-div"]}>
            <img src={thumbnail} alt="thumb" />
          </div>
          <h3>{type}</h3>
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