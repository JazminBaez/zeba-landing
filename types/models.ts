export interface ModelStats {
  height: string;
  bust: string;
  waist: string;
  hips: string;
  shoe: string;
  eyes: string;
}

export interface Model {
  id: number;
  name: string;
  image: string;
  stats: ModelStats;
}

export type FilterType = "All" | "She/Her" | "He/Him";