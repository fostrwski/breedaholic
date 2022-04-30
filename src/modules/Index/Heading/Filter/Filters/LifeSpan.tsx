import React, { useState } from "react";

const Category: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="flex items-center gap-2 text-sm lg:gap-4">
      <input
        type="range"
        className="w-full appearance-none rounded-lg bg-gray-100 text-green-700 focus:cursor-pointer focus-visible:bg-gray-200 focus-visible:outline-none"
        step="1"
        min="0"
        max="12"
        value={value}
        onChange={handleChange}
      />

      <p>
        <b>{value}</b>
      </p>
    </div>
  );
};

export default Category;
