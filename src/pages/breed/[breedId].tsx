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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          {" "}
          <Image
            src={breed.image.url}
            alt={breed.name}
            width={breed.image.width}
            height={breed.image.height}
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <section className="flex flex-col gap-4 text-xl">
          <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
            {breed.name}
          </h1>
          <FeatureCard title="Temperament" content={breed.temperament} />
          <FeatureCard title="Bred for" content={breed.bred_for} />
          <FeatureCard title="Origin" content={breed.origin} />
          <FeatureCard title="Average life span" content={breed.life_span} />
          <FeatureCard title="Weight" content={`${breed.weight.metric} kg`} />
          <FeatureCard title="Size" content={`${breed.height.metric} cm`} />
          <FeatureCard
            title="Description"
            content={
              isLoading ? (
                "Loading"
              ) : (
                <>
                  <p>{data?.breedDescription}</p>
                  <p className="mt-4">
                    <strong className="text-xs">
                      Note: This data is fetched from wikipedia. It may contain
                      some unverified information.
                    </strong>
                  </p>
                </>
              )
            }
          />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Breed;
