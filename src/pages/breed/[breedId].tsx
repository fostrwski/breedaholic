// @ts-nocheck

import { InformationCircleIcon, LinkIcon } from "@heroicons/react/outline";
import Button from "common/components/Button";
import useFetch from "common/hooks/useFetch";
import DefaultLayout from "common/layouts/Default";
import { selectBreeds } from "common/redux/breeds";
import FeatureCard from "modules/Breed/FeatureCard";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Breed: NextPage = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const router = useRouter();
  const { breedId } = router.query;

  const breeds = useSelector(selectBreeds());

  const breed = breeds.find((breed) => breed.id === parseInt(breedId));

  const { data, error, isLoading } = useFetch(`/api/breed/${breed.name}`);

  const handleClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Image
            src={breed.image.url}
            alt={breed.name}
            width={breed.image.width}
            height={breed.image.height}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-2xl font-semibold md:text-3xl lg:mb-2">
              {breed.name}
            </h1>
            <button>
              <LinkIcon className="h-6 w-6" />
            </button>
          </div>
          <FeatureCard title="Temperament" content={breed.temperament} />
          <FeatureCard title="Bred for" content={breed.bred_for} />
          <FeatureCard
            title="Origin"
            content={isLoading ? "Loading" : data?.breedOrigin}
          />
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
                  {typeof data?.breedDescription !== "undefined" && (
                    <>
                      {data?.breedDescription.split(" ").length <= 28 ? (
                        <p>{data?.breedDescription}</p>
                      ) : (
                        <>
                          <p>
                            {data?.breedDescription
                              .split(" ")
                              .slice(0, 28)
                              .join(" ")}
                            {!seeMore ? "..." : ""}
                            <span
                              className={`mt-4 ${!seeMore ? "hidden" : ""}`}
                            >
                              {data?.breedDescription
                                .split(" ")
                                .slice(28)
                                .join(" ")}
                            </span>{" "}
                            <button
                              className="text-gray-400"
                              onClick={handleClick}
                            >
                              {!seeMore ? "show more" : "show less"}
                            </button>
                          </p>
                        </>
                      )}
                      <p className="mt-4 leading-none">
                        <strong className="text-sm">
                          Note: This data is fetched from wikipedia. It may
                          contain some unverified information.
                        </strong>
                      </p>
                    </>
                  )}

                  {typeof data?.breedDescription === "undefined" && (
                    <p>Unknown</p>
                  )}
                </>
              )
            }
          />
          <a
            className="mt-4 flex items-center gap-2"
            href={data?.breedWikiUrl}
            target="blank"
          >
            <InformationCircleIcon className="h-6 w-6" />
            Click here for more information
          </a>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Breed;
