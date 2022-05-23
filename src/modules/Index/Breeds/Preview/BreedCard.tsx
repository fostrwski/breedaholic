import type { Breed } from "common/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  breed: Breed;
  customClasses?: string;
}

const BreedCard: React.FC<CardProps> = ({ breed, customClasses, ...props }) => {
  return (
    <Link href={`/breed/${breed.id}`}>
      <a
        {...props}
        className="relative min-h-[280px] focus-visible:outline-none focus-visible:brightness-[.75]"
      >
        <Image
          src={breed.image!.url}
          alt={breed.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg brightness-[.6]"
        />
        <div className="absolute bottom-4 px-6 text-white">
          <p className="mb-2 text-xl font-semibold">{breed.name}</p>
          <p className="text-lg">{breed.temperament}</p>
        </div>
      </a>
    </Link>
  );
};

export default BreedCard;
