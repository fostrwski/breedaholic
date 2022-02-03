interface BreedType {
  id: number;
  name: string;
  temperament: string;
  life_span: string;
  origin?: string;
  weight: {
    imperial: string;
    metrical: string;
  };
  height: {
    imperial: string;
    metrical: string;
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

type BreedsType = Array<Breed>;

export type { BreedsType, BreedType };
