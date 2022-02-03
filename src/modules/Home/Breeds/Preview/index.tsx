import React from "react";

import { useFilterBreeds } from "@/common/context/FilterBreeds";
import { BreedType } from "@/common/types";

import BreedCard from "./BreedCard";

const Preview: React.FC = () => {
  const { filteredBreeds } = useFilterBreeds();

  return (
    <div className="grid gap-6">
      {filteredBreeds.map((breed: BreedType) => {
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
      {filteredBreeds.length === 0 && (
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
