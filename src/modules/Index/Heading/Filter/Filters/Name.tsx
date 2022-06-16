import { XCircleIcon } from "@heroicons/react/solid";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Name: React.FC = () => {
  const breedsFilters = useSelector(selectFilters());
  const searchedName = breedsFilters.name!;
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(filterBreeds({name: ""}))
  }

  return (
    <div className={searchedName.length === 0 ? "hidden" : ""}>
      <div className="flex items-center gap-4 text-left">
        <p className="text-xl font-semibold">Name</p>
        <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
          {searchedName}
          <button
            title="Clear name"
            className="bg-transparent hover:text-red-800 focus-visible:text-red-800"
            onClick={handleClick}
          >
            <XCircleIcon className="h-6 w-6" />
          </button>
        </span>
      </div>

      <hr className="my-4 rounded-full" />
    </div>
  );
};

export default Name;
