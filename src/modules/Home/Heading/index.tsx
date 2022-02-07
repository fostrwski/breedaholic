import React from "react";

import Input from "@/common/components/Input";

const Heading: React.FC = () => {
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
      />
    </div>
  );
};

export default Heading;
