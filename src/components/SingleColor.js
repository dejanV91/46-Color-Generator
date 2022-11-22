import React from "react";
import rgbToHex from "../shared/rgbToHexa";

export const SingleColor = ({ rgb, weight, index }) => {
  let rgbColor = rgb.join(",");
  let hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
