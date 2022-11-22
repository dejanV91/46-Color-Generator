import React, { useEffect, useState } from "react";
import rgbToHex from "../shared/rgbToHexa";

export const SingleColor = ({ rgb, weight, index }) => {
  const [clip, setClip] = useState(false);

  let rgbColor = rgb.join(",");
  let hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  const clipBoard = (e) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(hex);
    setClip(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClip(false);
      return clearInterval(timeout);
    }, 2000);
  }, [clip]);

  return (
    <article
      onClick={clipBoard}
      className={`color ${index > 20 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      <p className={clip ? "alert" : "hide"}>copied to clipboard</p>
    </article>
  );
};
