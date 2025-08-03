import React from "react";
import { FilterType } from "../../types/models"; // Importar desde types

interface ModelsFilterProps {
  activeFilter: FilterType; // Usar FilterType, no string
  onFilterChange: (filter: FilterType) => void; // Usar FilterType, no string
}

const FILTER_OPTIONS: FilterType[] = ["All", "She/Her", "He/Him"];

export const ModelsFilter = ({ activeFilter, onFilterChange }: ModelsFilterProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center space-x-8">
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`flex items-center space-x-2 text-lg ${
              activeFilter === filter 
                ? "text-black font-medium" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {activeFilter === filter && (
              <span className="w-2 h-2 bg-black rounded-full"></span>
            )}
            <span>{filter}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
