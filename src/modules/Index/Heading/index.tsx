import Button from "common/components/Button";
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
      <div className="text-center">
        <h1 className="w-full px-6 text-xl font-semibold">
          We help you
          <span className="font-bold text-green-700"> find the dog breed </span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          you're looking for!
        </h1>

        <a
          href="https://github.com/franekostrowski/breedaholic"
          target="blank"
          aria-label="Go to Breedaholic's repository on Github"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-gray-600 hover:text-gray-500"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          GitHub repository
        </a>
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
