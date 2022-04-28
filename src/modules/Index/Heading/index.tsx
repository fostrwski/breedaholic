import Input from "common/components/Input";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterBreeds({ name: event.target.value }));
  };

  return (
    <div className="text-center">
      <h1 className="mb-6 text-xl font-semibold">
        Find <span className="font-bold text-green-700">the dog breed</span>{" "}
        you're looking for!
      </h1>
      <div className="flex items-center gap-2">
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
