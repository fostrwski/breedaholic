// @ts-nocheck

import useFetch from "common/hooks/useFetch";
import DefaultLayout from "common/layouts/Default";
import { selectBreeds } from "common/redux/breeds";
import FeatureCard from "modules/Breed/FeatureCard";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Breed: NextPage = () => {
  const router = useRouter();
  const { breedId } = router.query;

  const breeds = useSelector(selectBreeds());

  const breed = breeds.find((breed) => breed.id === parseInt(breedId));

  const { data, error, isLoading } = useFetch(`/api/breed/${breed.name}`);

  return (
    <DefaultLayout>
      <div className="gap- grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative">
          <Image
            src={breed.image.url}
            alt={breed.name}
            width={breed.image.width}
            height={breed.image.height}
            layout="responsive"
            className="rounded-xl brightness-50 filter"
          />

          <h1 className="absolute bottom-4 px-6 text-2xl font-semibold text-white md:top-6 md:text-3xl">
            {breed.name}
          </h1>
        </div>
        <section className="flex flex-col gap-4 text-xl">
          <FeatureCard title="Temperament" content={breed.temperament} />
          <FeatureCard title="Bred for" content={breed.bred_for} />
          <FeatureCard title="Origin" content={breed.origin} />
          <FeatureCard title="Average life span" content={breed.life_span} />
          <FeatureCard title="Weight" content={`${breed.weight.metric} kg`} />
          <FeatureCard title="Size" content={`${breed.height.metric} cm`} />
          <FeatureCard
            title="Description"
            content={isLoading ? "Loading" : data?.breedDescription}
          />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Breed;
