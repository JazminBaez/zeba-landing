import React from "react";
import { ModelStats } from "../../types/models";

interface ModelStatsOverlayProps {
  stats: ModelStats;
  isVisible: boolean;
}

export const ModelStatsOverlay = ({ stats, isVisible }: ModelStatsOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
      <div className="text-white text-sm space-y-2 text-center">
        <div className="flex justify-between">
          <span className="font-medium">HEIGHT</span>
          <span>{stats.height}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">BUST</span>
          <span>{stats.bust}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">WAIST</span>
          <span>{stats.waist}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">HIPS</span>
          <span>{stats.hips}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">SHOE</span>
          <span>{stats.shoe}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">EYES</span>
          <span>{stats.eyes}</span>
        </div>
      </div>
    </div>
  );
};