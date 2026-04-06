"use client";

import style from "./IndexMessage.module.css";
import React from "react";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const IndexMessage = () => {
  const { t } = useLocaleCatalog();
  return (
    <div className={style["index-div"]}>
      <h2>
        <span className={style["head-one"]}>{t("home.heroInstagram")} </span>
        <span className={style["head-two"]}>{t("home.heroReel")} </span>
        <span className={style["head-three"]}>{t("home.heroDownloader")}</span>
        <span className={style["head-four"]}> {t("home.heroFree")}</span>
      </h2>
    </div>
  );
};

export default IndexMessage;
