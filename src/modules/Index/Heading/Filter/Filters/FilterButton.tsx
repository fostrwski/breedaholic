import Button, { ButtonProps } from "common/components/Button";
import React from "react";

interface FilterButtonProps extends ButtonProps {
  filter: string;
  selectedFilters: Array<string>;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  selectedFilters,
  ...props
}) => {
  return (
    <Button
      {...props}
      customClasses={`text-gray-800 bg-gray-100 ${
        filter === "All" && selectedFilters!.length === 0 ? "bg-gray-200" : ""
      } ${
        filter !== "all" && selectedFilters!.includes(filter)
          ? "bg-gray-200"
          : ""
      }`}
    >
      {filter}
    </Button>
  );
};

export default FilterButton;
