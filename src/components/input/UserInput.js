
import style from "./UserInput.module.css";
import InputSection from "../input/InputSection";
import ResultSection from "../result/ResultSection";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import Error from "../error/Error";

const UserInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);
  const [urlResult, setUrlResult] = useState({
    type: null,
    urls: null,
    quality: null,
    thumbnail: null,
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

      const { media } = apiResponse;
      console.log("API Response:", apiResponse);
      console.log("Media:", media);
      
      if (!media || !Array.isArray(media) || media.length === 0) {
        throw new Error("No media found in response");
      }

      const firstMedia = media[0];
      console.log("First Media:", firstMedia);
      console.log("Thumbnail URL:", firstMedia.thumbnail);
      
      setUrlResult({
        thumbnail: firstMedia.thumbnail || firstMedia.thumb || null,
        urls: firstMedia.url || firstMedia.urls || null,
        quality: firstMedia.quality || "HD",
        type: firstMedia.type || "Video"
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
