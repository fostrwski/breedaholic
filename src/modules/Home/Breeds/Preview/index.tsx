import { BreedsContext } from "common/context/Breeds";
import { SearchContext } from "common/context/Search";
import { searchBreedsByName } from "common/utils/searchBreeds";
import React, { useContext, useEffect } from "react";

import Card from "./Card";

const Preview: React.FC = () => {
  const { breeds, searchedBreeds, setSearchedBreeds } = useContext(
    BreedsContext
  );
  const { searchedTerm } = useContext(SearchContext);

  useEffect(() => {
    setSearchedBreeds(searchBreedsByName(breeds, searchedTerm));
  }, [searchedTerm]);

  return (
    <div className="grid gap-6">
      {searchedBreeds.map((breed) => (
        <Card key={breed.id} breed={breed} />
      ))}
    </div>
  );
};

export default Preview;
