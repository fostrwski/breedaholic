import { TrashIcon } from "@heroicons/react/outline";
import Button from "common/components/Button";
import { clearFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch } from "react-redux";

const ClearFiltersButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearFilters());
  };

  return (
    <Button
      customClasses="text-red-600 mt-6 float-right md:hidden flex items-center gap-2 px-0 py-0"
      onClick={handleClick}
    >
      <TrashIcon className="h-6 w-6" />
      Clear filters
    </Button>
  );
};

export default ClearFiltersButton;
