import Button from "common/components/Button";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
        <Button
          key={size}
          customClasses={`text-gray-800 bg-gray-100 ${
            size === "All" && selectedSizes!.length === 0 ? "bg-gray-200" : ""
          } ${
            size !== "All" && selectedSizes!.includes(size) ? "bg-gray-200" : ""
          }`}
          onClick={() => toggleSize(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};

export default Size;
