import React, { useEffect } from "react";

import Button from "@/common/components/Button";
import { useFilterBreeds } from "@/common/context/FilterBreeds";

const Category: React.FC = () => {
  const { currentCategories, removeCategory, addCategory } = useFilterBreeds();
  const categories = ["All", "Toy", "Hound", "Herding"];

  const handleClick = (category: string) => {
    if (currentCategories.includes(category)) {
      removeCategory(category);
    } else {
      addCategory(category);
    }
  };

  return (
    <div className="flex gap-2 text-sm">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleClick(category)}
          customClasses={`text-gray-800 bg-gray-100 rounded-xl ${
            currentCategories.includes(category) ? "bg-gray-200" : ""
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
