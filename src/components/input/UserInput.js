
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
    type: [],
    urls: [],
    quality: [],
    thumbnail: [],
  });

  const userInputHandler = async (apiResponse, type) => {
    const { media } = apiResponse;
    console.log(media[0].thumbnail);
    // console.log("thumb",urlResult.thumb)

    setUrlResult({
      thumbnail: [media[0].thumbnail], // keep thumbnail in an array
      urls: [media[0].url], // extract all media URLs
      quality: [media[0].quality], // wrap title in an array
      type: [media[0].type]
    });





  };

  useEffect(() => {
    console.log("Updated urlResult:", urlResult);
  }, [urlResult]);


  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {urlResult.urls.length > 0 && isServerOk && (
        <ResultSection result={urlResult} />
      )}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
