import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style["loader-container"]}>
      <span className={style["loader-circle"]}></span>
      <p className={style["loader-text"]}>Downloading...</p>
    </div>
  );
};

export default Loader;