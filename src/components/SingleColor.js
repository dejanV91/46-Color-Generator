import React from "react";

export const SingleColor = ({ rgb, weight, index }) => {
  let rgbColor = rgb.join(",");

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
    ></article>
  );
};
