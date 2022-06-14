import Input from "common/components/Input";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";

const Line: React.FC = () => {
  return (
    <div className="hidden h-0.5 w-full rounded-full bg-gray-200 md:block md:w-full" />
  );
};

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterBreeds({ name: event.target.value }));
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-between">
        <Line />
        <h1 className="w-full px-6 text-xl font-semibold">
          We help you
          <span className="font-bold text-green-700"> find the dog breed </span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          you're looking for!
        </h1>
        <Line />
      </div>
      <div className="mt-6 flex items-center gap-2">
        <Input
          type="search"
          placeholder="Search breed"
          customClasses="text-lg placeholder:text-lg"
          onChange={handleChange}
          value={breedsFilters.name}
          data-cy="breeds-search-by-name"
        />

        <Filter />
      </div>
    </div>
  );
};

export default Heading;
