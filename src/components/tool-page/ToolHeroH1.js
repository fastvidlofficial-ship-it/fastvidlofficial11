"use client";

import { useLocaleCatalog } from "@/contexts/LocaleContext";

const gradPink = {
  WebkitTextFillColor: "transparent",
  background: "linear-gradient(to right, #ff512f, #dd2476)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
};

const gradTeal = {
  WebkitTextFillColor: "transparent",
  background: "linear-gradient(to right, #25ff92, #24afff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
};

const plain = { color: "var(--heading-color, #1a202c)" };

export default function ToolHeroH1({ variant, titleClassName }) {
  const { t } = useLocaleCatalog();
  const p = `tools.${variant}`;

  if (variant === "facebook") {
    return (
      <h1 className={titleClassName}>
        <span style={plain}>{t(`${p}.w1`)} </span>
        <span style={plain}>{t(`${p}.w2`)} </span>
        <span style={gradPink}>{t(`${p}.w3`)} </span>
        <span style={gradTeal}>{t(`${p}.w4`)}</span>
      </h1>
    );
  }

  if (variant === "pinterest") {
    return (
      <h1 className={titleClassName}>
        <span style={plain}>{t(`${p}.w1`)} </span>
        <span style={gradPink}>{t(`${p}.w2`)} </span>
        <span style={gradTeal}>{t(`${p}.w3`)}</span>
        <span style={plain}>{t(`${p}.w4`)}</span>
      </h1>
    );
  }

  if (variant === "reel") {
    return (
      <h1 className={titleClassName}>
        <span style={plain}>{t(`${p}.w1`)} </span>
        <span style={gradPink}>{t(`${p}.w2`)} </span>
        <span style={gradTeal}>{t(`${p}.w3`)}</span>
        <span style={plain}>{t(`${p}.w4`)}</span>
      </h1>
    );
  }

  return (
    <h1 className={titleClassName}>
      <span style={plain}>{t(`${p}.w1`)} </span>
      <span style={gradPink}>{t(`${p}.w2`)} </span>
      <span style={gradTeal}>{t(`${p}.w3`)}</span>
    </h1>
  );
}
