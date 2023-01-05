import React from "react";

const BreedCardSkeleton: React.FC = () => {
  return (
    <div className="relative min-h-[280px] animate-breedCardSkeleton rounded-lg bg-green-900/40">
      <div className="absolute top-4 left-4 h-8 w-24 rounded-full bg-green-50/30 p-2 px-4" />
      <div className="absolute bottom-4 w-full px-6">
        <p className="mb-5 h-6 w-2/3 rounded-full bg-gray-50/30" />
        <p className="mb-3 h-4 w-full rounded-full bg-gray-50/30" />
        <p className="h-4 w-1/3 rounded-full bg-gray-50/30" />
      </div>
    </div>
  );
};

export default BreedCardSkeleton;
