import React from "react";

import Button from "@/common/components/Button";
import { useFilterBreeds } from "@/common/context/FilterBreeds";

const Category: React.FC = () => {
  const { filterByCategory } = useFilterBreeds();
  const categories = ["All", "Toy", "Hound", "Herding"];

  return (
    <div className="flex gap-2 text-sm">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => filterByCategory(category)}
          customClasses="text-gray-800 bg-gray-100 rounded-xl"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
