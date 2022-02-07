import React from "react";

import Button from "@/common/components/Button";

const Category: React.FC = () => {
  return (
    <div className="flex gap-2 text-sm">
      {[].map((category) => (
        <Button
          key={category}
          customClasses={`text-gray-800 bg-gray-100 rounded-xl`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
