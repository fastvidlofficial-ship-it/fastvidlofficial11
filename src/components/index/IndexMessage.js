import style from "./IndexMessage.module.css";


import React from "react";

const IndexMessage = () => {
  return (
    <div className={style["index-div"]}>
        <h2>
          <span className={style["head-one"]}>Fast</span>
          <span className={style["head-two"]}>Vidl </span>
          <span className={style["head-three"]}>Video</span>
          <span className={style["head-four"]}> Downloader</span>
        </h2>
        <p>
          Download public videos, reels, stories, and photos from Instagram,
          Facebook, and Pinterest in seconds.
        </p>
    </div>
  );
};

export default IndexMessage;
