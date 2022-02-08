import { Breed } from "@/common/types";

const filterByCategories = (
  breeds: Array<Breed>,
  categories: Array<string>
): Array<Breed> => {
  const filteredBreeds = breeds.filter((breed: Breed) => {
    if (categories.includes("All")) return true;
    return categories.includes(breed.breed_group);
  });

  return filteredBreeds;
};

export default filterByCategories;
