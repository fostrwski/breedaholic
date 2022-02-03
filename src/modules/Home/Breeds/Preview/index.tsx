import React from "react";

import { useFilterBreeds } from "@/common/context/FilterBreeds";
import { BreedType } from "@/common/types";

import Card from "./Card";

const Preview: React.FC = () => {
  const { filteredBreeds } = useFilterBreeds();

  return (
    <div className="grid gap-6">
      {filteredBreeds.map((breed: BreedType) => (
        <Card key={breed.id} breed={breed} />
      ))}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      {filteredBreeds.length === 0 && <div>We couldn't find any breeds :(</div>}
    </div>
  );
};

export default Preview;
