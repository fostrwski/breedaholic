import React, { useState } from "react";

const Category: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="flex-col justify-start gap-2 text-left text-sm lg:gap-4">
      <input
        type="range"
        className="w-full appearance-none rounded-lg bg-gray-100 text-green-700 focus:cursor-pointer focus-visible:bg-gray-200 focus-visible:outline-none"
        step="1"
        min="1"
        max="14"
        value={value}
        onChange={handleChange}
      />

      <p className="mt-2 text-lg lg:mt-4">
        <b>
          {value} {value === 1 ? "year" : "years"}
        </b>{" "}
        or more
      </p>
    </div>
  );
};

export default Category;
