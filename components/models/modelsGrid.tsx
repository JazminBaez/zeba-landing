
import React from "react";
import { Model } from "../../types/models";
import { ModelCard } from "./modelCard";

interface ModelsGridProps {
  models: Model[];
  onModelClick?: (modelId: number) => void;
}

export const ModelsGrid = ({ models, onModelClick }: ModelsGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            onModelClick={onModelClick}
          />
        ))}
      </div>
    </div>
  );
};
