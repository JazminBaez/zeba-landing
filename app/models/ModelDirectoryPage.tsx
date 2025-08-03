"use client";

import React, { useState } from "react";
import { useModelsFromDB } from "../../hooks/useModelsFromDB";
import { ModelsHeader } from "../../components/models/modelsHeader";
import { ModelsFilter } from "../../components/models/modelsFilter";
import { ModelsGrid } from "../../components/models/modelsGrid";
import { LoadingSpinner } from "../../components/ui/loaderSpinner";
import { Model } from "../../types/supabase";
import { FilterType } from "../../types/models"; // Importar FilterType

export default function ModelDirectoryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  
  // Convertir filtro a formato de DB
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
    // Navegar a página de detalle
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
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Retry
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
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {models.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No models found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className="group cursor-pointer"
                onClick={() => handleModelClick(model.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={model.cover_image_url || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-light text-black">{model.name}</h3>
                  <p className="text-sm text-gray-600">
                    {model.height} • {model.location}
                  </p>
                  {model.featured && (
                    <span className="inline-block mt-2 px-2 py-1 bg-black text-white text-xs rounded">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
