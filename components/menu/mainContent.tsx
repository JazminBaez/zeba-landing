import React from "react";
import { MenuItem } from "./menuItem";
import { ZebaLogo } from "../common/zeba-logo";

interface MainContentProps {
  onCategoryHover: (category: string) => void;
  imagesLoaded: string[];
}

export const MainContent = ({ onCategoryHover, imagesLoaded }: MainContentProps) => (
  <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-120px)] px-8 md:px-12 lg:px-16">
    {/* Menu Items */}
    <div className="flex flex-col space-y-8 md:space-y-12 ml-8 mr-8 md:ml-8 w-full md:w-auto items-center md:items-start">
      <MenuItem 
        category="models" 
        onHover={onCategoryHover} 
        isLoaded={imagesLoaded.includes("models")}
      >
        models
      </MenuItem>
      <MenuItem 
        category="scouting" 
        onHover={onCategoryHover} 
        isLoaded={imagesLoaded.includes("scouting")}
      >
        scouting
      </MenuItem>
      <MenuItem 
        category="about" 
        onHover={onCategoryHover} 
        isLoaded={imagesLoaded.includes("about")}
      >
        about us
      </MenuItem>
    </div>

    {/* Desktop Logo */}
    <div className="hidden md:flex items-center flex-1 ml-8 justify-end pr-20">
      <div className="text-center">
        <div className="w-48 md:w-56 lg:w-64 xl:w-72">
          <ZebaLogo />
        </div>
        <p className="font-primary text-sm lg:text-base text-white/90 font-light tracking-[0.2em] mt-2 font-sans drop-shadow-md">
          MANAGEMENT
        </p>
      </div>
    </div>
  </div>
);