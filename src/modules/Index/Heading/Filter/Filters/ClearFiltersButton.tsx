import { TrashIcon } from "@heroicons/react/outline";
import Button from "common/components/Button";
import { filterBreeds, initialState } from "common/redux/breeds";
import React from "react";
import { useDispatch } from "react-redux";

interface ClearFiltersButtonProps {
  customClasses?: string;
}

const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({
  customClasses,
}) => {
  const dispatch = useDispatch();
  const defaultFilters = initialState.filters;

  const handleClick = () => {
    dispatch(filterBreeds(defaultFilters));
  };

  return (
    <Button
      customClasses={`text-red-600 flex items-center gap-2 px-0 py-0 ${customClasses}`}
      onClick={handleClick}
    >
      <TrashIcon className="h-6 w-6" />
      Clear filters
    </Button>
  );
};

export default ClearFiltersButton;
