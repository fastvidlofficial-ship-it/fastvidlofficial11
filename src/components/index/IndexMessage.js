import style from "./IndexMessage.module.css";


import React from "react";

const IndexMessage = () => {
  return (
    <div className={style["index-div"]}>
        <h2>
          <span className={style["head-one"]}>Instagram </span>
          <span className={style["head-two"]}>Reel </span>
          <span className={style["head-three"]}>Downloader</span>
          <span className={style["head-four"]}> Free</span>
        </h2>
      


    </div>
  );
};

export default IndexMessage;
