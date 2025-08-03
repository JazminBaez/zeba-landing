import React, { useState } from "react";
import Image from "next/image";
import { Model } from "../../types/models";
import { ModelStatsOverlay } from "./modelStatsOverlay";

interface ModelCardProps {
  model: Model;
  onModelClick?: (modelId: number) => void;
}

export const ModelCard = ({ model, onModelClick }: ModelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onModelClick) {
      onModelClick(model.id);
    }
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={model.image || "/placeholder.svg"}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <ModelStatsOverlay 
          stats={model.stats} 
          isVisible={isHovered} 
        />
      </div>

      {/* Model Name */}
      <div className="mt-4">
        <h3 className="text-lg font-light text-black">{model.name}</h3>
      </div>
    </div>
  );
};
