import { SearchIcon } from "@heroicons/react/solid";
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
      <div className="mb-4 text-gray-600 flex items-center">
        <SearchIcon className="h-5 w-5 mr-2" /> Wyniki wyszukiwania dla &quot;
        {searchedTerm}&quot;
      </div>
      {switchSearchBy(breeds, searchBy, searchedTerm)!.map((breed: Breed) => (
        <BreedCard key={breed.id} breed={breed} className="mb-4" />
      ))}
    </>
  );
};

export default SearchedBreeds;
