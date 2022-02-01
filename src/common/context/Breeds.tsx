import { BreedsType } from "common/types";
import { createContext } from "react";

interface BreedsContextType {
  breeds: any[] | BreedsType;
}

const breedsContextDefaultValues: BreedsContextType = {
  breeds: [],
};

export const BreedsContext = createContext<BreedsContextType>(
  breedsContextDefaultValues
);
