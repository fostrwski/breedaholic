import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Breed } from "@/common/types";

interface CardProps {
  breed: Breed;
  customClasses?: string;
}

const BreedCard: React.FC<CardProps> = ({ breed, customClasses, ...props }) => {
  return (
    <Link href={`/breed/${breed.id}`}>
      <a {...props} className="relative min-h-[280px]">
        <Image
          src={breed.image!.url}
          alt={breed.name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl brightness-[48%]"
        />
        <div className="absolute bottom-4 px-6 text-white">
          <div className="mb-2 text-xl font-semibold">{breed.name}</div>
          <div className="text-lg">{breed.temperament}</div>
        </div>
      </a>
    </Link>
  );
};

export default BreedCard;
