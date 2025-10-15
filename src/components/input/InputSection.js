
import style from "./InputSection.module.css";
import { useState } from "react";
import urlLightIcon from "../../../public/assets/icons8-url-48-light.png";
import urlDarkIcon from "../../../public/assets/icons8-url-48-dark.png";
import { useTheme } from "../theme/ThemeContext";
import Image from "next/image";

const InputSection = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isInputValid, setInputValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const userInputHandler = (e) => {
    setInputValid(true);
    setUserInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const pattern = /^(https:\/\/|http:\/\/)/;
    if (!pattern.test(userInput)) {
      props.userUrls("Please enter a valid URL.", "error");
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
        throw new Error("Failed to fetch video");
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
    <form onSubmit={submitHandler}>
      <Image className={style["url-icon"]} src={urlIcon} alt="url icon" />
      <input
        className={
          isInputValid
            ? style["input"]
            : style["input"] + " " + style["invalid"]
        }
        type="text"
        name="search"
        placeholder="Paste Link Here"
        onChange={userInputHandler}
        value={userInput || ""}
        required
        aria-required="true"
      />
      <button className={style["btn"]} type="submit" disabled={loading}>
        {loading ? "Loading..." : "Search "}
      </button>
    </form>
  );
};

export default InputSection;
