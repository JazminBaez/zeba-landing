import { supabase } from '../lib/supabase/client';
import { Model } from '../types/supabase';

export class ModelsService {
  // Obtener todos los modelos CON sus medidas
  static async getAllModels(): Promise<Model[]> {
    const { data, error } = await supabase
      .from('models')
      .select(`
        *,
        measurements:model_measurements(*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching models:', error);
      throw error;
    }

    // Transformar para que measurements sea un objeto en lugar de array
    return (data || []).map(model => ({
      ...model,
      measurements: model.measurements?.[0] || null
    }));
  }

  // Obtener modelos filtrados CON medidas
  static async getFilteredModels(filters: {
    category?: string;
    gender?: string;
    featured?: boolean;
    availability?: boolean;
  }): Promise<Model[]> {
    let query = supabase
      .from('models')
      .select(`
        *,
        measurements:model_measurements(*)
      `);

    if (filters.category && filters.category !== 'all') {
      query = query.eq('category', filters.category);
    }

    if (filters.gender) {
      query = query.eq('gender', filters.gender);
    }

    if (filters.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters.availability !== undefined) {
      query = query.eq('availability', filters.availability);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching filtered models:', error);
      throw error;
    }

    // Transformar measurements
    return (data || []).map(model => ({
      ...model,
      measurements: model.measurements?.[0] || null
    }));
  }
}
