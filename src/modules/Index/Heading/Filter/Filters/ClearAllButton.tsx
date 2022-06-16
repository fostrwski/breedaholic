import { TrashIcon } from "@heroicons/react/outline";
import Button from "common/components/Button";
import { filterBreeds, initialState } from "common/redux/breeds";
import React from "react";
import { useDispatch } from "react-redux";

interface ClearAllButtonProps {
  customClasses?: string;
}

const ClearAllButton: React.FC<ClearAllButtonProps> = ({ customClasses }) => {
  const dispatch = useDispatch();
  const defaultFilters = initialState.filters;

  const handleClick = () => {
    dispatch(filterBreeds(defaultFilters));
  };

  return (
    <Button
      title="Clear all filters including name"
      customClasses={`text-red-600 bg-transparent rounded-lg focus-visible:text-red-800 px-0 py-0 focus-visible:brightness-100 justify-center flex items-center gap-2 ${customClasses}`}
      onClick={handleClick}
    >
      <TrashIcon className="h-6 w-6" />
      Clear all
    </Button>
  );
};

export default ClearAllButton;
