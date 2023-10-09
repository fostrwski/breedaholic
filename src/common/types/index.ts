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
  reference_image_id: string;
  bred_for: string;
  breed_group: string;
}

export type { Breed };
