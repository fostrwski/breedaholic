interface Breed {
  id: number;
  name: string;
  temperament: string;
  life_span: string;
  origin?: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  image?: {
    id: string;
    url: string;
    height: number;
    width: number;
  };
  bred_for: string;
  breed_group: string;
}

export type { Breed };
