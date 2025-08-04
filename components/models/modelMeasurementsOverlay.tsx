
import React from "react";
import { ModelMeasurements } from "../../types/supabase";

interface ModelMeasurementsOverlayProps {
  measurements: ModelMeasurements | null;
  isVisible: boolean;
}

export const ModelMeasurementsOverlay = ({ 
  measurements, 
  isVisible 
}: ModelMeasurementsOverlayProps) => {
  if (!isVisible || !measurements) return null;

  const measurementItems = [
    { label: "BUST", value: measurements.bust },
    { label: "WAIST", value: measurements.waist },
    { label: "HIPS", value: measurements.hips },
    { label: "SHOE", value: measurements.shoe },
    { label: "EYES", value: measurements.eyes },
  ].filter(item => item.value); // Solo mostrar medidas que existen

  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
      <div className="text-white text-sm space-y-3 text-center px-4">
        {measurementItems.map((item, index) => (
          console.log("Rendering measurement item:", item.label, item.value),
          <div key={index} className="flex justify-between items-center min-w-[160px]">
            <span className="font-medium text-xs tracking-wider">{item.label}</span>
            <span className="text-xs font-light">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
