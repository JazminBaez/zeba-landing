import React from "react";
import { backgroundImages, imagePositions } from "../../../constants/images";

interface BackgroundImagesProps {
  currentBackground: string;
}

export const BackgroundImages = ({ currentBackground }: BackgroundImagesProps) => (
  <div className="absolute inset-0">
    {Object.entries(backgroundImages).map(([category, imageUrl]) => (
      <div
        key={category}
        className={`absolute inset-0 transition-opacity duration-100 ${
          currentBackground === category ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={imageUrl}
          alt={category}
          className={`w-full h-full object-cover ${imagePositions[category as keyof typeof imagePositions]}`}
        />
      </div>
    ))}
    <div className="absolute inset-0 bg-black/30" />
  </div>
);
