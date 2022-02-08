import React from "react";
import { useDispatch } from "react-redux";

import Input from "@/common/components/Input";
import { filterBreeds } from "@/common/services/breeds";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(filterBreeds({ name: event.target.value }));
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-6">
        Search through <span className="text-green-700">hundreds</span> of
        different dog breeds!
      </h1>

      <Input
        id="search-breed"
        type="search"
        placeholder="Search by name..."
        customClasses="text-lg placeholder:text-lg"
        onChange={handleChange}
      />
    </div>
  );
};

export default Heading;
