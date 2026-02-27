
import style from "./UserInput.module.css";
import InputSection from "../input/InputSection";
import ResultSection from "../result/ResultSection";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import Error from "../error/Error";

const UserInput = (props) => {
  const firstDefined = (...values) =>
    values.find((value) => value !== undefined && value !== null && value !== "");

  const normalizeCount = (value) => {
    if (value === undefined || value === null || value === "") return null;
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const parsed = Number.parseInt(value.replace(/,/g, ""), 10);
      return Number.isNaN(parsed) ? null : parsed;
    }
    return null;
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);
  const [urlResult, setUrlResult] = useState({
    type: null,
    urls: null,
    quality: null,
    thumbnail: null,
    description: null,
    postedAt: null,
    likeCount: null,
    commentCount: null,
    authorUsername: null,
  });

  const userInputHandler = async (apiResponse, type) => {
    if (type === "error") {
      setErrorMessage(apiResponse);
      setServerOk(false);
      setLoader(false);
      return;
    }

    try {
      setLoader(true);
      setServerOk(true);
      setErrorMessage("");

      const mediaList = Array.isArray(apiResponse?.media)
        ? apiResponse.media
        : Array.isArray(apiResponse?.data)
        ? apiResponse.data
        : [];

      const firstMedia = mediaList[0] || apiResponse || {};
      const mediaObject =
        firstMedia && typeof firstMedia === "object" ? firstMedia : {};

      const videoUrl =
        mediaObject.url ||
        mediaObject.urls ||
        mediaObject.video_url ||
        apiResponse?.url ||
        apiResponse?.video_url ||
        apiResponse?.download_url ||
        (typeof firstMedia === "string" ? firstMedia : null);

      if (!videoUrl) {
        throw new Error("No downloadable media URL found in response");
      }

      const thumbnail =
        mediaObject.thumbnail ||
        mediaObject.thumb ||
        mediaObject.thumbnail_url ||
        mediaObject.cover ||
        mediaObject.image ||
        mediaObject.display_url ||
        apiResponse?.thumbnail ||
        apiResponse?.thumbnail_url ||
        apiResponse?.thumb ||
        apiResponse?.cover ||
        null;

      const description =
        firstDefined(
          mediaObject.description,
          mediaObject.caption,
          mediaObject.text,
          mediaObject.edge_media_to_caption?.edges?.[0]?.node?.text,
          apiResponse?.description,
          apiResponse?.caption,
          apiResponse?.text,
          apiResponse?.title
        ) || null;

      const postedAt =
        firstDefined(
          mediaObject.taken_at,
          mediaObject.created_at,
          mediaObject.timestamp,
          mediaObject.published_at,
          apiResponse?.taken_at,
          apiResponse?.created_at,
          apiResponse?.timestamp,
          apiResponse?.published_at
        ) || null;

      const likeCount = normalizeCount(
        firstDefined(
          mediaObject.like_count,
          mediaObject.likes,
          mediaObject.likeCount,
          mediaObject.statistics?.like_count,
          mediaObject.statistics?.likes,
          mediaObject.edge_media_preview_like?.count,
          apiResponse?.like_count,
          apiResponse?.likes,
          apiResponse?.statistics?.like_count,
          apiResponse?.statistics?.likes
        )
      );

      const commentCount = normalizeCount(
        firstDefined(
          mediaObject.comment_count,
          mediaObject.comments,
          mediaObject.commentCount,
          mediaObject.statistics?.comment_count,
          mediaObject.statistics?.comments,
          mediaObject.edge_media_to_comment?.count,
          apiResponse?.comment_count,
          apiResponse?.comments,
          apiResponse?.statistics?.comment_count,
          apiResponse?.statistics?.comments
        )
      );

      const authorUsername =
        firstDefined(
          mediaObject.username,
          mediaObject.user?.username,
          mediaObject.owner?.username,
          apiResponse?.username,
          apiResponse?.user?.username,
          apiResponse?.owner?.username
        ) || null;

      setUrlResult({
        thumbnail,
        description,
        urls: videoUrl,
        quality: mediaObject.quality || "HD",
        type: mediaObject.type || "Video",
        postedAt,
        likeCount,
        commentCount,
        authorUsername,
      });
    } catch (error) {
      console.error("Error processing video:", error);
      setErrorMessage(error.message || "Failed to process video");
      setServerOk(false);
    } finally {
      setLoader(false);
    }





  };

  useEffect(() => {
    console.log("Updated urlResult:", urlResult);
  }, [urlResult]);


  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {urlResult.urls && isServerOk && (
        <ResultSection result={urlResult} />
      )}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
