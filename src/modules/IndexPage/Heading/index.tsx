import React from "react";

import Input from "components/atoms/Input";

const Heading = () => {
  return (
    <div className="text-center">
      <h1 className="mb-6 text-2xl font-semibold">
        Search <span className="text-green-700">hundreds</span> of different dog
        breeds!
      </h1>
      <h2 className="text-gray-600 mb-6 font-semibold">
        Breedaholic is a web application that lets you search for the dog breed
        you&apos;re looking for!
      </h2>
      <Input
        type="text"
        id="search"
        name="search"
        placeholder="Search for breed..."
      />
    </div>
  );
};

export default Heading;
