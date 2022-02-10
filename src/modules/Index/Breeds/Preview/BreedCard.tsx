import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Breed } from "@/common/types";

interface CardProps {
  breed: Breed;
}

const BreedCard: React.FC<CardProps> = ({ breed, ...props }) => {
  return (
    <Link href={`/breed/${breed.id}`}>
      <a className="hover:opacity-10] relative" {...props}>
        <Image
          src={breed.image!.url}
          alt={breed.name}
          width={breed.image!.width}
          height={breed.image!.height}
          layout="responsive"
          className="rounded-xl brightness-[48%] filter"
        />
        <div className="absolute bottom-4 w-full px-6 text-white">
          <div className="mb-2 text-xl font-semibold">{breed.name}</div>
          <div className="text-lg">{breed.temperament}</div>
        </div>
      </a>
    </Link>
  );
};

export default BreedCard;
