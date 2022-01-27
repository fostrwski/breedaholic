import { BreedsType, BreedType } from "common/types";

const searchByName = (breeds: BreedsType, searchedTerm: string): BreedsType => {
  return breeds.filter((breed: BreedType) =>
    breed.name.toLowerCase().includes(searchedTerm.toLowerCase())
  );
};

const searchByTemperament = (
  breeds: BreedsType,
  searchedTerm: string
): BreedsType => {
  return breeds.filter((breed: BreedType) =>
    breed.temperament.toLowerCase().includes(searchedTerm.toLowerCase())
  );
};

export {
  searchByName as searchBreedsByName,
  searchByTemperament as searchBreedsByTemperament,
};
