import { useEffect } from "react";
import style from "./Loader.module.css";

const Loader = ({ startDownload, onFinish }) => {
  useEffect(() => {
    // Trigger download on first render
    if (startDownload) {
      const link = document.createElement("a");
      link.href = startDownload;
      link.setAttribute("download", "video.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Hide loader after 2 seconds
      const timer = setTimeout(() => {
        onFinish?.(); // callback to hide loader
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [startDownload, onFinish]);

  return (
    <div className={style["loader-container"]}>
      <span className={style["loader-circle"]}></span>
      <p className={style["loader-text"]}>Downloading...</p>
    </div>
  );
};

export default Loader;