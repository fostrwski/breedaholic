import { XCircleIcon } from "@heroicons/react/solid";
import { selectFilters } from "common/redux/breeds";
import React from "react";
import { useSelector } from "react-redux";

const Name: React.FC = () => {
  const breedsFilters = useSelector(selectFilters());
  const searchedName = breedsFilters.name!;

  return (
    <div className={searchedName.length === 0 ? "hidden" : ""}>
    <div
      className="flex items-center gap-4 text-left"
    >
      <p className="text-xl font-semibold">Name</p>
      <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
        {searchedName}
        <XCircleIcon className="h-5 w-5" />
      </span>
    </div>

      <hr className="my-4 rounded-full" />
      </div>
  );
};

export default Name;
