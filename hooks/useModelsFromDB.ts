import { useState, useEffect, useCallback } from 'react';
import { ModelsService } from '../services/modelsService';
import { Model } from '../types/supabase';

export const useModelsFromDB = (filters?: {
  category?: string;
  gender?: string;
  featured?: boolean;
  availability?: boolean;
}) => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchModels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let data: Model[];
      
      if (filters) {
        data = await ModelsService.getFilteredModels(filters);
      } else {
        data = await ModelsService.getAllModels();
      }

      setModels(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching models');
      console.error('Error in useModelsFromDB:', err);
    } finally {
      setLoading(false);
    }
  }, [filters?.category, filters?.gender, filters?.featured, filters?.availability]);

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  return { models, loading, error, refetch: fetchModels };
};