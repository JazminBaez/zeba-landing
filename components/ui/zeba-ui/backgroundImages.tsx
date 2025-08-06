import React from "react";
import { backgroundImages, imagePositions } from "../../../constants/images";

interface BackgroundImagesProps {
  currentBackground: string;
}

export const BackgroundImages = ({ currentBackground }: BackgroundImagesProps) => {


  return (
    <div className="absolute inset-0">
      {Object.entries(backgroundImages).map(([category, imageUrl]) => {
        const position = imagePositions[category as keyof typeof imagePositions];
        const isActive = currentBackground === category;
        
        return (
          <div
            key={category}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imageUrl}
              alt={category}
             
              className={`w-full h-full object-cover ${position}`}
            />
            
          </div>
        );
      })}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};
