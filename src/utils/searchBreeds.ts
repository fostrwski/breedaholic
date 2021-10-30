import { Breed, Breeds } from "types";

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

export { searchByName, searchByTemperament };
