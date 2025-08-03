
"use client";

import React from "react";
import { useModelsFilter } from "../../hooks/useModelsFilter";
import { ModelsHeader } from "../../components/models/modelsHeader";
import { ModelsFilter } from "../../components/models/modelsFilter";
import { ModelsGrid } from "../../components/models/modelsGrid";

export default function ModelDirectoryPage() {
  const { activeFilter, setActiveFilter, filteredModels } = useModelsFilter();

  const handleModelClick = (modelId: number) => {
    console.log(`Clicked model with ID: ${modelId}`);
    // Aquí puedes agregar navegación a la página de detalle del modelo
    // router.push(`/models/${modelId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <ModelsHeader />
      <ModelsFilter 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ModelsGrid 
        models={filteredModels}
        onModelClick={handleModelClick}
      />
    </div>
  );
}