import React from "react";

const Category: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <input type="range" className="w-full" step="1" />
    </div>
  );
};

export default Category;
