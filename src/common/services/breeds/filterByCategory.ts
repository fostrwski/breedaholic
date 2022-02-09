import { Breed } from "@/common/types";

const filterByCategories = (
  breeds: Array<Breed>,
  categories: Array<string>
): Array<Breed> => {
  const filteredBreeds = breeds.filter((breed: Breed) => {
    if (categories.length === 0) return true;
    return categories.includes(breed.breed_group);
  });

  return filteredBreeds;
};

export default filterByCategories;
