export interface Model {
  id: string;
  name: string;
  age: number | null;
  height: string | null;
  location: string | null;
  category: 'fashion' | 'commercial' | 'editorial' | 'runway' | null;
  gender: 'female' | 'male' | 'non-binary' | null;
  availability: boolean;
  featured: boolean;
  profile_image_url: string | null;
  cover_image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ModelMeasurements {
  id: string;
  model_id: string;
  bust: string | null;
  waist: string | null;
  hips: string | null;
  shoe: string | null;
  eyes: string | null;
  hair: string | null;
  created_at: string;
}

export interface ModelImage {
  id: string;
  model_id: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean;
  order_index: number;
  created_at: string;
}

export interface ModelExperience {
  id: string;
  model_id: string;
  brand_name: string;
  campaign_type: string | null;
  year: number | null;
  description: string | null;
  created_at: string;
}

// Tipo combinado para cuando obtenemos todo junto
export interface ModelWithDetails extends Model {
  measurements?: ModelMeasurements;
  images?: ModelImage[];
  experiences?: ModelExperience[];
}
