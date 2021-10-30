interface Breed {
  id: number;
  name: string;
  temperament: string;
  life_span: string;
  origin?: string;
  weight: object;
  height: object;
  image?: {
    id: string;
    url: string;
    height: number;
    width: number;
  };
  bred_for: string;
  breed_group: string;
}

type Breeds = Array<Breed>;

export type { Breed, Breeds };
