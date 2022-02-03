import { createContext } from "react";

import { BreedsType } from "@/common/types";

interface BreedsContextType {
  breeds: any[] | BreedsType;
}

const breedsContextDefaultValues: BreedsContextType = {
  breeds: [],
};

export const BreedsContext = createContext<BreedsContextType>(
  breedsContextDefaultValues
);
