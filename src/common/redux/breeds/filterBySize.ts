import type { Breed } from "common/types";

const filterBySize = (breeds: Array<Breed>, sizes: Array<string>) => {
  const filteredBreeds = breeds.filter((breed: Breed) => {
    if (sizes.length === 0) return true;

    const minWeight = Math.round(
      parseFloat(breed.weight.imperial.split(" ")[0])
    );

    const determineSize = () => {
      if (minWeight > 2 && minWeight < 22) {
        return "Small";
      }
      if (minWeight >= 22 && minWeight < 57) {
        return "Medium";
      }
      if (minWeight >= 57 && minWeight < 99) {
        return "Large";
      }
      if (minWeight >= 99) {
        return "X-Large";
      }
    };

    const size = determineSize();

    if (size === undefined) return true;

    return sizes.includes(size);
  });

  return filteredBreeds;
};

export default filterBySize;
