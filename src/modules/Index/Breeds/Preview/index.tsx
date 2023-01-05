import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  selectAreBreedsFiltered,
  selectFilteredBreeds,
  selectStatus,
} from "common/redux/breeds";
import type { Breed } from "common/types";
import ClearAllButton from "modules/Index/Heading/Filter/Filters/ClearAllButton";
import React from "react";
import { useSelector } from "react-redux";

import BreedCard from "./BreedCard";

const Preview: React.FC = () => {
  const filteredBreeds = useSelector(selectFilteredBreeds());
  const breedsStatus = useSelector(selectStatus());
  const isBreedsFiltered = useSelector(selectAreBreedsFiltered());

  return (
    <>
      {isBreedsFiltered ? (
        <div className="mb-4 flex items-center justify-between gap-4">
          <p>
            Found <b>{filteredBreeds.length}</b> matching results
          </p>
          <ClearAllButton customClasses="hidden md:flex" />
        </div>
      ) : (
        ""
      )}
      <div
        className={`xs:grid-cols-1 grid gap-6 ${
          breedsStatus === "idle" && filteredBreeds.length === 0
            ? "md:grid-cols-1"
            : "md:grid-cols-3"
        }`}
      >
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
        {breedsStatus === "idle" && filteredBreeds.length === 0 && (
          <div
            className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-2 text-center text-lg font-semibold text-gray-500 md:mt-12"
            data-cy="breeds-not-found-message"
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <XCircleIcon className="h-24 w-24" /> We couldn't find the dog breed{" "}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            you're looking for
          </div>
        )}
      </div>
    </>
  );
};

export default Preview;
