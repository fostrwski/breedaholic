import React from "react";
import { useSelector } from "react-redux";

import { selectFilteredBreeds,selectStatus } from "@/common/services/breeds";
import type { Breed } from "@/common/types";

import BreedCard from "./BreedCard";

const Preview: React.FC = () => {
  const filteredBreeds = useSelector(selectFilteredBreeds());
  const breedsStatus = useSelector(selectStatus());

  return (
    <div className="grid gap-6">
      {filteredBreeds.map((breed: Breed) => {
        return (
          <BreedCard
            key={breed.id}
            breed={breed}
            data-cy={`${breed.name
              .toLowerCase()
              .split(" ")
              .join("-")}-preview-card`}
          />
        );
      })}
      {breedsStatus === "loading" && <>Loading...</>}
      {breedsStatus === "idle" && filteredBreeds.length === 0 && (
        <div className="text-center text-lg">
          <span data-cy="breeds-not-found-message">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We couldn't find any breeds
          </span>
        </div>
      )}
    </div>
  );
};

export default Preview;
