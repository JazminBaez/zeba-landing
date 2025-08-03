import React from "react";

interface MenuItemProps {
  category: string;
  onHover: (category: string) => void;
  onClick: (category: string) => void;  // NUEVO PROP
  isLoaded: boolean;
  children: React.ReactNode;
}

export const MenuItem = ({ 
  category, 
  onHover, 
  onClick,  // NUEVO PROP
  isLoaded, 
  children 
}: MenuItemProps) => (
  <div
    className="font-primary text-white text-4xl md:text-6xl lg:text-7xl font-light cursor-pointer hover:opacity-80 hover:translate-x-2 transition-all duration-150 drop-shadow-lg relative text-center md:text-left"
    onMouseEnter={() => onHover(category)}
    onClick={() => onClick(category)}  // NUEVO EVENT HANDLER
  >
    {children}
    {!isLoaded && (
      <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
    )}
  </div>
);