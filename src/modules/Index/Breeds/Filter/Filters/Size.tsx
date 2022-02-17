import React from "react";

import Button from "@/common/components/Button";

const Size: React.FC = () => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {sizes.map((size: string) => (
        <Button
          key={size}
          customClasses={`text-gray-800 bg-gray-100 !rounded-xl`}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};

export default Size;
