import { supabase } from '../lib/supabase/client';
import { Model, ModelWithDetails } from '../types/supabase';

export class ModelsService {
  // Obtener todos los modelos
  static async getAllModels(): Promise<Model[]> {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching models:', error);
      throw error;
    }

    return data || [];
  }

  // Obtener modelos con filtros
  static async getFilteredModels(filters: {
    category?: string;
    gender?: string;
    featured?: boolean;
    availability?: boolean;
  }): Promise<Model[]> {
    let query = supabase.from('models').select('*');

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

    return data || [];
  }

  // Obtener modelo específico con todos sus detalles
  static async getModelById(id: string): Promise<ModelWithDetails | null> {
    const { data: model, error: modelError } = await supabase
      .from('models')
      .select(`
        *,
        measurements:model_measurements(*),
        images:model_images(*),
        experiences:model_experiences(*)
      `)
      .eq('id', id)
      .single();

    if (modelError) {
      console.error('Error fetching model:', modelError);
      throw modelError;
    }

    return model;
  }

  // Obtener modelos destacados
  static async getFeaturedModels(): Promise<Model[]> {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured models:', error);
      throw error;
    }

    return data || [];
  }

  // Buscar modelos por nombre
  static async searchModels(searchTerm: string): Promise<Model[]> {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .ilike('name', `%${searchTerm}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching models:', error);
      throw error;
    }

    return data || [];
  }
}