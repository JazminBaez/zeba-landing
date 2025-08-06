import { useState, useEffect } from "react";
import { backgroundImages } from "../constants/images";

export const useImagePreloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      Object.entries(backgroundImages).forEach(([key, src]) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded((prev) => [...prev, key]);
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  return imagesLoaded;
};