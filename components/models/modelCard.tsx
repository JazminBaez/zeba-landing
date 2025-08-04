import React, { useState } from "react";
import { Model } from "../../types/supabase";

interface ModelCardProps {
  model: Model;
  onModelClick?: (modelId: string) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, onModelClick }) => {
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
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
        {/* Imagen */}
        <img
          src={model.cover_image_url || "/placeholder.svg"}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay con medidas */}
        {isHovered && model.measurements && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 z-10">
            <div className="text-white text-sm space-y-3 text-center px-4">
              {model.height && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">HEIGHT</span>
                  <span className="text-xs font-light">{model.height}</span>
                </div>
              )}
              {model.measurements.bust && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">BUST</span>
                  <span className="text-xs font-light">{model.measurements.bust}</span>
                </div>
              )}
              {model.measurements.waist && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">WAIST</span>
                  <span className="text-xs font-light">{model.measurements.waist}</span>
                </div>
              )}
              {model.measurements.hips && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">HIPS</span>
                  <span className="text-xs font-light">{model.measurements.hips}</span>
                </div>
              )}
              {model.measurements.shoe && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">SHOE</span>
                  <span className="text-xs font-light">{model.measurements.shoe}</span>
                </div>
              )}
              {model.measurements.eyes && (
                <div className="flex justify-between items-center min-w-[160px]">
                  <span className="font-medium text-xs tracking-wider">EYES</span>
                  <span className="text-xs font-light">{model.measurements.eyes}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Indicador cuando no hay medidas */}
        {isHovered && !model.measurements && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300 z-10">
            <div className="text-white text-center px-4">
              <p className="text-sm font-medium">View Portfolio</p>
              <p className="text-xs opacity-75 mt-1">Click to see more</p>
            </div>
          </div>
        )}
      </div>

      {/* Información del modelo */}
      <div className="mt-4">
        <h3 className="text-lg font-light text-black">{model.name}</h3>
        <p className="text-sm text-gray-600">
          {model.height} • {model.location}
        </p>
        <div className="flex items-center justify-between mt-2">
          {model.category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
              {model.category}
            </span>
          )}
          {model.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black text-white">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};