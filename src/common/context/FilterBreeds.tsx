import { BreedsType, BreedType } from "common/types";
import { createContext, useContext, useEffect, useState } from "react";

import { BreedsContext } from "./Breeds";

interface FilterBreedsContextType {
  filteredBreeds: any[] | BreedsType;
  filterByName: (name: string) => void;
  filterByCategory: (category: string) => void;
}

const filterBreedsContextDefaultValues: FilterBreedsContextType = {
  filteredBreeds: [],
  filterByName: () => {},
  filterByCategory: () => {},
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
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    let b = breeds.filter((breed: BreedType) => {
      return (
        (category === "all"
          ? true
          : breed.breed_group
              ?.toLowerCase()
              ?.includes(category.toLowerCase())) &&
        breed.name.toLowerCase().includes(name.toLowerCase())
      );
    });
    setFilteredBreeds(b);
  }, [name, category]);

  useEffect(() => {}, [category]);

  const filterBreedsValue = {
    breeds,
    filteredBreeds,
    filterByName: setName,
    filterByCategory: setCategory,
  };

  return (
    <FilterBreedsContext.Provider value={filterBreedsValue}>
      {children}
    </FilterBreedsContext.Provider>
  );
};

const useFilterBreeds = () => useContext(FilterBreedsContext);

export { FilterBreedsProvider, useFilterBreeds };
