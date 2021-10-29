import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import BreedCard from "components/molecules/BreedCard";
import useFetch from "hooks/useFetch";
import { update } from "redux/breeds";
import type { AppDispatch, RootState } from "redux/store";

const Breeds = () => {
  const { data, error, loading } = useFetch(
    "https://api.thedogapi.com/v1/breeds"
  );

  const dispatch = useDispatch<AppDispatch>();
  const { breeds } = useSelector((state: RootState) => state.breeds);

  useEffect(() => {
    dispatch(update(data));
  }, [data]);

  if (error) return <h1>Error: {error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {breeds.map((breed: any) => {
        return <BreedCard key={breed.id} breed={breed} className="mb-4" />;
      })}
    </>
  );
};

export default Breeds;
