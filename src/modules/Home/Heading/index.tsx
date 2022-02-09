import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "@/common/components/Input";
import { filterBreeds, selectFilters } from "@/common/services/breeds";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterBreeds({ name: event.target.value }));
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-6">
        Search through <span className="text-green-700">hundreds</span> of
        different dog breeds!
      </h1>

      <Input
        type="search"
        placeholder="Search breed"
        customClasses="text-lg placeholder:text-lg"
        onChange={handleChange}
        value={breedsFilters.name}
        data-cy="breeds-search-by-name"
      />
    </div>
  );
};

export default Heading;
