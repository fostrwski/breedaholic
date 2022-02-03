import { createContext, useContext, useEffect, useState } from "react";

import { BreedsType, BreedType } from "@/common/types";

import { BreedsContext } from "./Breeds";

interface FilterBreedsContextType {
  filteredBreeds: BreedsType;
  filterByName: (name: string) => void;
  currentCategories: Array<string>;
  filterByCategories: (categories: Array<string>) => void;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
}

const filterBreedsContextDefaultValues: FilterBreedsContextType = {
  filteredBreeds: [],
  filterByName: () => {},
  currentCategories: [],
  filterByCategories: () => {},
  addCategory: () => {},
  removeCategory: () => {},
};

interface FilterBreedsProviderProps {
  children: React.ReactNode;
}

const FilterBreedsContext = createContext<FilterBreedsContextType>(
  filterBreedsContextDefaultValues
);

const FilterBreedsProvider: React.FC<FilterBreedsProviderProps> = ({
  children,
}) => {
  const { breeds } = useContext(BreedsContext);
  const [filteredBreeds, setFilteredBreeds] = useState<BreedsType>(breeds);
  const [name, setName] = useState<string>("");
  const [categories, setCategories] = useState<Array<string>>(["All"]);

  useEffect(() => {
    let b = breeds.filter((breed: BreedType) => {
      if (categories.includes("All")) {
        return name.length === 0
          ? breed
          : breed.name.toLowerCase().includes(name.toLowerCase());
      }

      const breedCategory = breed.breed_group;
      const isCategoryPresent = categories.includes(breedCategory);

      return name.length === 0
        ? breed && isCategoryPresent
        : breed.name.toLowerCase().includes(name.toLowerCase()) &&
            isCategoryPresent;
    });

    setFilteredBreeds(b);
  }, [name, categories, breeds]);

  function removeCategory(category: string) {
    const newCategories = categories.filter((c: string) => c !== category);
    setCategories([...newCategories]);
  }

  function addCategory(category: string) {
    setCategories([...categories, category]);
  }

  useEffect(() => {
    if (categories.length === 0) {
      setCategories(["All"]);
    }
  }, [categories]);

  const filterBreedsValue = {
    breeds,
    filteredBreeds,
    filterByName: setName,
    currentCategories: categories,
    filterByCategories: setCategories,
    addCategory,
    removeCategory,
  };

  return (
    <FilterBreedsContext.Provider value={filterBreedsValue}>
      {children}
    </FilterBreedsContext.Provider>
  );
};

const useFilterBreeds = () => useContext(FilterBreedsContext);

export { FilterBreedsProvider, useFilterBreeds };
