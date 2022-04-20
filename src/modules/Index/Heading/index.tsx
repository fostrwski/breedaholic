import { AdjustmentsIcon } from "@heroicons/react/outline";
import Button from "common/components/Button";
import Input from "common/components/Input";
import { filterBreeds, selectFilters } from "common/services/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterBreeds({ name: event.target.value }));
  };

  return (
    <div className="text-center">
      <h1 className="mb-6 text-xl font-semibold">
        Search through <span className="text-green-700">hundreds</span> of
        different dog breeds!
      </h1>

      <div className="flex gap-2">
        <Input
          type="search"
          placeholder="Search breed"
          customClasses="text-lg placeholder:text-lg"
          onChange={handleChange}
          value={breedsFilters.name}
          data-cy="breeds-search-by-name"
        />

        <Button customClasses="p-2">
          <AdjustmentsIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;
