import { Breed, Breeds } from "common/types";

const searchByName = (breeds: Breeds, searchedTerm: string): Breeds => {
  return breeds.filter((breed: Breed) =>
    breed.name.toLowerCase().includes(searchedTerm.toLowerCase())
  );
};

const searchByTemperament = (breeds: Breeds, searchedTerm: string): Breeds => {
  return breeds.filter((breed: Breed) =>
    breed.temperament.toLowerCase().includes(searchedTerm.toLowerCase())
  );
};

export {
  searchByName as searchBreedsByName,
  searchByTemperament as searchBreedsByTemperament,
};
