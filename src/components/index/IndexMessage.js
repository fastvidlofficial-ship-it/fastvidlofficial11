import style from "./IndexMessage.module.css";


import React from "react";

const IndexMessage = () => {
  return (
    <div className={style["index-div"]}>
      <h1>
        <span className={style["head-one"]}>Instagram </span>
        <span className={style["head-two"]}>Reel </span>
        Do<span className={style["head-three"]}>wnload</span>er
      </h1>
      <p>
        Experience fast and secure downloads with our Free Instagram Reel Downloader.
        Save Instagram Reels online in HD quality without watermark, quick and easy.
        The most reliable tool to download Instagram Reels instantly on any device.      </p>


    </div>
  );
};

export default IndexMessage;
