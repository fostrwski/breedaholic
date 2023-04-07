import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Category: React.FC = () => {
  const dispatch = useDispatch();

  const breedsFilters = useSelector(selectFilters());
  const selectedLifeSpan = breedsFilters.lifeSpan;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterBreeds({ lifeSpan: parseInt(e.currentTarget.value) }));
  };

  return (
    <div className="flex-col justify-start gap-2 text-left text-sm lg:gap-4">
      <input
        type="range"
        className="w-full appearance-none rounded-lg bg-gray-100 text-green-700 focus:cursor-pointer focus-visible:bg-gray-200 focus-visible:outline-none"
        step="1"
        min="6"
        max="14"
        value={selectedLifeSpan}
        onChange={handleChange}
      />

      <p className="mt-4 lg:text-lg">
        <b>
          {selectedLifeSpan} {selectedLifeSpan === 1 ? "year" : "years"}
        </b>{" "}
        or more
      </p>
    </div>
  );
};

export default Category;
