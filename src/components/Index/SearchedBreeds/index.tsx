import BreedCard from "components/common/modules/BreedCard";
import React from "react";
import { Breed, Breeds } from "types";
import { searchByName, searchByTemperament } from "utils/searchBreeds";

interface Props {
  breeds: Breeds;
  searchBy: string;
  searchedTerm: string;
}

const SearchedBreeds: React.FC<Props> = ({
  breeds,
  searchBy,
  searchedTerm,
}) => {
  const switchSearchBy = (
    breeds: Breeds,
    searchBy: string,
    searchedTerm: string
  ) => {
    switch (searchBy) {
      case "name":
        return searchByName(breeds, searchedTerm);
      case "temperament":
        return searchByTemperament(breeds, searchedTerm);
    }
  };

  return (
    <>
      <div className="mb-4 text-gray-600 flex items-center text-xs">
        Search results for &quot;
        {searchedTerm}&quot;
      </div>
      {switchSearchBy(breeds, searchBy, searchedTerm)!.map((breed: Breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </>
  );
};

export default SearchedBreeds;
