import { createContext, useState } from "react";

interface SearchContextType {
  searchedTerm: string;
  setSearchedTerm: any;
}

const searchContextDefaultValues: SearchContextType = {
  searchedTerm: "",
  setSearchedTerm: null,
};

export const SearchContext = createContext<SearchContextType>(
  searchContextDefaultValues
);

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const value = { searchedTerm, setSearchedTerm };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
