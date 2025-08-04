import React from "react";
import { Model } from "../../types/supabase";
import { ModelCard } from "./modelCard";

interface ModelsGridProps {
  models: Model[];
  onModelClick?: (modelId: string) => void;
}

export const ModelsGrid = ({ models, onModelClick }: ModelsGridProps) => {
  if (models.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center py-12">
          <p className="text-gray-600">No models found</p>
        </div>
      </div>
    );
  }

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
