import React from "react";
import { useSelector } from "react-redux";

import { selectBreeds } from "@/common/services/breeds";
import type { Breed } from "@/common/types";

import BreedCard from "./BreedCard";

const Preview: React.FC = () => {
  const breeds = useSelector(selectBreeds());

  return (
    <div className="grid gap-6">
      {breeds.data.map((breed: Breed) => {
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
      {breeds.status === "loading" && <>Loading...</>}
      {breeds.status === "idle" && breeds.data.length === 0 && (
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
