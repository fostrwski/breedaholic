import React from "react";

import Input from "@/common/components/Input";
import { useFilterBreeds } from "@/common/context/FilterBreeds";

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
