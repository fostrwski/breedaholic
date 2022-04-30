import {
  selectFilteredBreeds,
  selectFilters,
  selectStatus,
} from "common/redux/breeds";
import type { Breed } from "common/types";
import React from "react";
import { useSelector } from "react-redux";

import BreedCard from "./BreedCard";

const Preview: React.FC = () => {
  const filteredBreeds = useSelector(selectFilteredBreeds());
  const breedsStatus = useSelector(selectStatus());
  const breedsFilters = useSelector(selectFilters());

  return (
    <>
      {breedsFilters.name !== "" ||
      breedsFilters.categories!.length !== 0 ||
      breedsFilters.sizes!.length !== 0 ? (
        <p className="mb-4">
          Found <b>{filteredBreeds.length}</b> matching results
        </p>
      ) : (
        ""
      )}
      <div className="xs:grid-cols-1 grid gap-6 md:grid-cols-3">
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
          <p
            className="text-center text-lg font-semibold"
            data-cy="breeds-not-found-message"
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We couldn't find any breeds :(
          </p>
        )}
      </div>
    </>
  );
};

export default Preview;
