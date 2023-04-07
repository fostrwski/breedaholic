import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterButton from "./FilterButton";

const Size: React.FC = () => {
  const dispatch = useDispatch();

  const sizes = ["All", "Small", "Medium", "Large"];

  const breedsFilters = useSelector(selectFilters());

  const selectedSizes = breedsFilters.sizes!;

  const toggleSize = (size: string) => {
    if (selectedSizes!.includes(size)) {
      const newSizes = selectedSizes.filter(
        (selectedSize) => selectedSize !== size
      );
      dispatch(filterBreeds({ sizes: newSizes }));
    } else if (size === "All") {
      dispatch(filterBreeds({ sizes: [] }));
    } else {
      dispatch(filterBreeds({ sizes: [...selectedSizes, size] }));
    }
  };

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {sizes.map((size: string) => (
        <FilterButton
          key={size}
          filter={size}
          selectedFilters={selectedSizes}
          onClick={() => toggleSize(size)}
        >
          {size}
        </FilterButton>
      ))}
    </div>
  );
};

export default Size;
