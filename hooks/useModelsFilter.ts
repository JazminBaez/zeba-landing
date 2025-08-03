import { useState, useMemo } from "react";
import { Model, FilterType } from "../types/models";
import { MODELS_DATA, FEMALE_MODELS, MALE_MODELS } from "../constants/models";

export const useModelsFilter = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredModels = useMemo(() => {
    return MODELS_DATA.filter((model) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "She/Her") return FEMALE_MODELS.includes(model.name);
      if (activeFilter === "He/Him") return MALE_MODELS.includes(model.name);
      return true;
    });
  }, [activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredModels,
    totalModels: MODELS_DATA.length
  };
};
