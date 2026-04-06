import style from "./InputSection.module.css";
import { useRef, useState } from "react";
import urlLightIcon from "../../../public/assets/icons8-url-48-light.png";
import urlDarkIcon from "../../../public/assets/icons8-url-48-dark.png";
import { useTheme } from "../theme/ThemeContext";
import Image from "next/image";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const ClipboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="2" width="13" height="16" rx="2" ry="2" />
    <path d="M5 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1" />
  </svg>
);

const InputSection = (props) => {
  const { t } = useLocaleCatalog();
  const [userInput, setUserInput] = useState("");
  const [isInputValid, setInputValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const { theme } = useTheme();

  const hasText = (userInput || "").trim().length > 0;

  const handlePasteOrClear = async () => {
    if (hasText) {
      setUserInput("");
      setInputValid(true);
      return;
    }

    // Use native paste behavior: focus the input so users can long-press and tap Paste.
    if (inputRef.current) {
      inputRef.current.focus();
      const valueLength = inputRef.current.value.length;
      inputRef.current.setSelectionRange(valueLength, valueLength);
    }
  };

  const userInputHandler = (e) => {
    setInputValid(true);
    setUserInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const pattern = /^(https:\/\/|http:\/\/)/;
    if (!pattern.test(userInput)) {
      props.userUrls(t("input.invalidUrl"), "error");
      setInputValid(false);
      return;
    }

    try {
      setLoading(true);

      const encodedUrl = encodeURIComponent(userInput);
      console.log(encodedUrl);
      const response = await fetch(
        ` https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert?url=${encodedUrl}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "d8296ed6eemsh38f55946548b666p18771ejsnf5eb5162f388",
            "X-RapidAPI-Host": "instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error(t("input.fetchFailed"));
      }

      const data = await response.json();
      console.log("response", data);

      props.userUrls(data, "success");
    } catch (err) {
      props.userUrls(err.message, "error");
      setInputValid(false);
    } finally {
      setLoading(false);
    }
  };

  const urlIcon = theme === "dark" ? urlDarkIcon : urlLightIcon;

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div className={style.inputRow}>
        <Image className={style["url-icon"]} src={urlIcon} alt={t("input.urlIconAlt")} />
        <input
          ref={inputRef}
          className={
            isInputValid
              ? style["input"]
              : style["input"] + " " + style["invalid"]
          }
          type="text"
          name="search"
          placeholder={t("input.placeholder")}
          onChange={userInputHandler}
          value={userInput || ""}
          required
          aria-required="true"
        />
        <button
          type="button"
          className={style.pasteClearBtn}
          onClick={handlePasteOrClear}
          aria-label={hasText ? t("input.clearAria") : t("input.pasteAria")}
        >
          {hasText ? (
            t("input.clear")
          ) : (
            <>
              <ClipboardIcon />
              <span>{t("input.paste")}</span>
            </>
          )}
        </button>
      </div>
      <div className={style.submitWrapper}>
        <button className={style["btn"]} type="submit" disabled={loading}>
          {loading ? t("input.loading") : t("input.download")}
        </button>
      </div>
    </form>
  );
};

export default InputSection;
