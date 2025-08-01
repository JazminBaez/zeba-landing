import React from "react";
import { backgroundImages } from "../../../constants/images";

export const ImagePreloader = () => (
  <div className="hidden">
    {Object.entries(backgroundImages).map(([key, src]) => (
      <img key={`preload-${key}`} src={src} alt="" />
    ))}
  </div>
);