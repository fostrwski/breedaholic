import React from "react";
import { useDispatch } from "react-redux";

import Button from "@/common/components/Button";
import { filterBreeds } from "@/common/services/breeds";

const Category: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 text-sm">
      {["All", "Toy", "Herding"].map((category) => (
        <Button
          key={category}
          customClasses={`text-gray-800 bg-gray-100 rounded-xl`}
          onClick={() => dispatch(filterBreeds({ categories: [category] }))}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
