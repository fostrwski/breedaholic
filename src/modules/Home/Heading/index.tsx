import Input from "common/components/Input";
import { useFilterBreeds } from "common/context/FilterBreeds";
import React from "react";

const Heading: React.FC = () => {
  const { filterByName } = useFilterBreeds();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByName(e.target.value);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-6">
        Search through <span className="text-green-700">hundreds</span> of
        different dog breeds!
      </h1>

      <Input
        id="search"
        type="search"
        placeholder="Search breed"
        customClasses="text-lg placeholder:text-lg"
        onChange={handleChange}
      />
    </div>
  );
};

export default Heading;
