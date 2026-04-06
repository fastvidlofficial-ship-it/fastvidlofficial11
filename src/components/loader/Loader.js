"use client";

import style from "./Loader.module.css";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const Loader = () => {
  const { t } = useLocaleCatalog();
  return (
    <div className={style["loader-container"]}>
      <span className={style["loader-circle"]}></span>
      <p className={style["loader-text"]}>{t("loader.text")}</p>
    </div>
  );
};

export default Loader;