import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Breed } from "@/common/types";

interface CardProps {
  breed: Breed;
}

const BreedCard: React.FC<CardProps> = ({ breed, ...props }) => {
  return (
    <Link href={`/breed/${breed.id}`} passHref>
      <a className="relative hover:opacity-10]" {...props}>
        <Image
          src={breed.image!.url}
          alt={breed.name}
          width={breed.image!.width}
          height={breed.image!.height}
          layout="responsive"
          className="rounded-xl filter brightness-[48%]"
        />
        <div className="absolute bottom-4 px-6 w-full text-white">
          <div className="text-xl mb-2 font-semibold">{breed.name}</div>
          <div className="text-lg">{breed.temperament}</div>
        </div>
      </a>
    </Link>
  );
};

export default BreedCard;
