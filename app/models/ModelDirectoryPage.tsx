
"use client";

import React, { useState } from "react";
import { useModelsFromDB } from "../../hooks/useModelsFromDB";
import { ModelsHeader } from "../../components/models/modelsHeader";
import { ModelsFilter } from "../../components/models/modelsFilter";
import { ModelsGrid } from "../../components/models/modelsGrid";
import { LoadingSpinner } from "../../components/ui/loaderSpinner";
import { FilterType } from "../../types/models";

export default function ModelDirectoryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  
  const getDBFilters = () => {
    const filters: any = {};
    
    if (activeFilter === "She/Her") {
      filters.gender = "female";
    } else if (activeFilter === "He/Him") {
      filters.gender = "male";
    }
    
    return filters;
  };

  const { models, loading, error } = useModelsFromDB(getDBFilters());

  const handleModelClick = (modelId: string) => {
    console.log(`Clicked model with ID: ${modelId}`);
    // TODO: Implementar navegación a página de detalle
    // router.push(`/models/${modelId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <ModelsHeader />
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <ModelsHeader />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading models: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ModelsHeader />
      <ModelsFilter 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ModelsGrid 
        models={models}
        onModelClick={handleModelClick}
      />
    </div>
  );
}
