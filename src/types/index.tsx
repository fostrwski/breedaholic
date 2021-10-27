interface Breed {
  id: number;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight: object;
  country_code: string;
  height: object;
  image: {
    url: string;
    height: number;
    width: number;
  };
  bred_for: string;
}

type Breeds = Array<Breed>;

export type { Breed, Breeds };
