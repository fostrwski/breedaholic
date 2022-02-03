import Image from "next/image";
import React from "react";

import { BreedType } from "@/common/types";

interface CardProps {
  breed: BreedType;
}

const Card: React.FC<CardProps> = ({ breed }) => {
  return (
    <div className="relative">
      <Image
        src={breed.image!.url}
        alt={breed.name}
        width={breed.image!.width}
        height={breed.image!.height}
        layout="responsive"
        className="rounded-xl filter brightness-[48%]"
      />
      <div className="absolute bottom-4 px-4 w-full text-white">
        <div className="text-xl mb-2 font-semibold">{breed.name}</div>
        <div className="text-lg">{breed.temperament}</div>
      </div>
    </div>
  );
};

export default Card;
