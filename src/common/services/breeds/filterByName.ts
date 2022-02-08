import { Breed } from "@/common/types";

const filterByName = (breeds: Array<Breed>, name: string): Array<Breed> => {
  const filteredBreeds = breeds.filter((breed: Breed) =>
    breed.name.toLowerCase().includes(name.toLowerCase())
  );

  return filteredBreeds;
};

export default filterByName;
