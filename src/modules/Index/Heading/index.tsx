import Input from "common/components/Input";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React, { useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());

  const [_, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    startTransition(() => {
      dispatch(filterBreeds({ name: event.target.value }));
    });
  };

  return (
    <div className="relative text-center">
      <div className="flex items-center justify-between">
        <h1 className="w-full px-6 text-xl font-semibold">
          We help you
          <span className="font-bold text-green-700"> find the dog breed </span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          you're looking for!
        </h1>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 md:mt-10">
        <Input
          type="search"
          placeholder="Search breed"
          customClasses="text-lg md:text-xl placeholder:text-lg md:placeholder:text-xl md:max-w-xl md:h-16 shadow-xl shadow-gray-50 "
          onChange={handleChange}
          value={breedsFilters.name}
          data-cy="breeds-search-by-name"
        />

        <Filter />
      </div>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-12 z-[-10] rotate-6 blur-md lg:-top-36"
      >
        <path
          className="fill-green-700 opacity-10"
          d="M45.8,-74.6C58.7,-71.8,68.2,-58.3,68.9,-44.1C69.6,-29.9,61.4,-15,61.4,0C61.4,15,69.6,30,66.2,39.4C62.8,48.8,47.7,52.6,34.7,59.3C21.7,66,10.9,75.6,-1.5,78.3C-13.9,81,-27.9,76.7,-40.2,69.6C-52.5,62.5,-63.2,52.6,-71.1,40.5C-79,28.5,-84.1,14.2,-82.7,0.8C-81.4,-12.7,-73.7,-25.4,-66.9,-39.3C-60.1,-53.2,-54.1,-68.4,-43.1,-72.3C-32.1,-76.2,-16.1,-68.9,0.2,-69.2C16.4,-69.5,32.8,-77.4,45.8,-74.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Heading;
