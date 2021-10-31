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
      {switchSearchBy(breeds, searchBy, searchedTerm)!.map((breed: Breed) => (
        <BreedCard key={breed.id} breed={breed} className="mb-4" />
      ))}
    </>
  );
};

export default SearchedBreeds;
