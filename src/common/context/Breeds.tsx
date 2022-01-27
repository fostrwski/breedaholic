import { BreedsType } from "common/types";
import { createContext } from "react";

interface BreedsContextType {
  breeds: any[] | BreedsType;
  searchedBreeds: any[] | BreedsType;
  setSearchedBreeds: any;
}

const breedsContextDefaultValues: BreedsContextType = {
  breeds: [],
  searchedBreeds: [],
  setSearchedBreeds: null,
};

export const BreedsContext = createContext<BreedsContextType>(
  breedsContextDefaultValues
);
