"use client";

import { useState } from "react";
import Loader from "../loader/Loader";
import style from "./ResultSection.module.css";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const ResultSection = (props) => {
  const { t, locale } = useLocaleCatalog();

  const formatCount = (value) => {
    if (value === undefined || value === null || Number.isNaN(Number(value))) {
      return null;
    }
    const num = Number(value);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    return `${num}`;
  };

  const formatRelativeTime = (value) => {
    if (!value) return null;
    let date;
    if (typeof value === "number") {
      date = new Date(value < 1000000000000 ? value * 1000 : value);
    } else if (/^\d+$/.test(String(value))) {
      const numeric = Number(value);
      date = new Date(numeric < 1000000000000 ? numeric * 1000 : numeric);
    } else {
      date = new Date(value);
    }
    if (Number.isNaN(date.getTime())) return null;
    const diffMs = Date.now() - date.getTime();
    if (diffMs < 0) return t("result.justNow");
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    if (diffMs < hour) {
      const mins = Math.max(1, Math.floor(diffMs / minute));
      const unit = mins > 1 ? t("result.minsAgo") : t("result.minAgo");
      return `${mins} ${unit}`;
    }
    if (diffMs < day) {
      const hrs = Math.floor(diffMs / hour);
      const unit = hrs > 1 ? t("result.hrsAgo") : t("result.hrAgo");
      return `${hrs} ${unit}`;
    }
    if (diffMs < 30 * day) {
      const days = Math.floor(diffMs / day);
      const unit = days > 1 ? t("result.daysAgo") : t("result.dayAgo");
      return `${days} ${unit}`;
    }
    return date.toLocaleDateString(locale === "ar" ? "ar" : "en");
  };

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadHint, setDownloadHint] = useState("");
  const [iosProxyUrl, setIosProxyUrl] = useState("");
  const [isSharingIOS, setIsSharingIOS] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Extract values (now stored as direct values, not arrays)
  const type = props.result.type 
    ? (props.result.type.length > 60 ? props.result.type.slice(0, 60) + " ...." : props.result.type)
    : t("result.videoType");
  const thumbnail = props.result.thumbnail;
  const thumbnailSrc =
    typeof thumbnail === "string" && /^https?:\/\//i.test(thumbnail)
      ? `/api/thumbnail?url=${encodeURIComponent(thumbnail)}`
      : thumbnail;
  const urls = props.result.urls;
  const description = props.result.description
    ? props.result.description.length > 700
      ? props.result.description.slice(0, 700) + "..."
      : props.result.description
    : "";
  const postedAt = formatRelativeTime(props.result.postedAt);
  const likeCount = formatCount(props.result.likeCount);
  const commentCount = formatCount(props.result.commentCount);
  const authorUsername = props.result.authorUsername || "";

  const shareToIOSPhotos = async () => {
    if (!iosProxyUrl || isSharingIOS) return;
    try {
      setIsSharingIOS(true);
      const response = await fetch(iosProxyUrl);
      if (!response.ok) throw new Error(t("result.sharePrepError"));
      const blob = await response.blob();
      const file = new File([blob], "fastvidl-video.mp4", {
        type: blob.type || "video/mp4",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: t("result.shareTitle"),
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
      setDownloadHint(t("result.hintIos"));
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
        setDownloadHint(t("result.hintAndroid"));
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
                  src={thumbnailSrc}
                  alt={t("result.thumbAlt")}
                  className={style["thumbnail-image"]}
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                />
              ) : (
                <div className={style["thumbnail-placeholder"]}>
                  <span className={style["placeholder-icon"]}>📹</span>
                  <span className={style["placeholder-text"]}>{t("result.thumbPlaceholder")}</span>
                </div>
              )}
            </div>
          )}
          {(authorUsername || type) && (
            <h3>{authorUsername ? `@${authorUsername}` : type}</h3>
          )}
          {description ? (
            <p className={style["result-description"]}>{description}</p>
          ) : null}
          <div className={style["download-section"]}>
            <button
              onClick={handleDownload}
              className={style["download-btn"]}
            >
              {t("result.downloadHd")}
            </button>
            {downloadHint ? <p className={style["download-hint"]}>{downloadHint}</p> : null}
            {iosProxyUrl ? (
              <div className={style["ios-actions"]}>
                <button
                  type="button"
                  className={style["ios-share-btn"]}
                  onClick={shareToIOSPhotos}
                  disabled={isSharingIOS}
                >
                  {isSharingIOS ? t("result.preparing") : t("result.openShareSheet")}
                </button>
                <a
                  href={iosProxyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style["ios-open-link"]}
                >
                  {t("result.openVideo")}
                </a>
              </div>
            ) : null}
            {(postedAt || likeCount || commentCount) && (
              <div className={style["meta-stats"]}>
                {postedAt ? (
                  <p className={style["meta-item"]}>
                    <span aria-hidden="true">🕒</span> {postedAt}
                  </p>
                ) : null}
                {likeCount ? (
                  <p className={style["meta-item"]}>
                    <span aria-hidden="true">♡</span> {likeCount} {t("result.likes")}
                  </p>
                ) : null}
                {commentCount ? (
                  <p className={style["meta-item"]}>
                    <span aria-hidden="true">💬</span> {commentCount} {t("result.comments")}
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSection;