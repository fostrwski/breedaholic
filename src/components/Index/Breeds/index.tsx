import BreedCard from "components/common/modules/BreedCard";
import SearchedBreeds from "components/Index/SearchedBreeds";
import useFetch from "hooks/useFetch";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "redux/breeds";
import type { AppDispatch, RootState } from "redux/store";

const Breeds: React.FC = () => {
  const { data, error, loading } = useFetch(
    "https://api.thedogapi.com/v1/breeds"
  );

  const dispatch = useDispatch<AppDispatch>();
  const { breeds } = useSelector((state: RootState) => state.breeds);
  const { searchedTerm } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(update(data));
  }, [data]);

  if (error) return <h1>Error: {error}</h1>;

  if (loading)
    return (
      <div
        className="mt-14 animate-spin text-center w-full"
        style={{ fontSize: 46 }}
      >
        🐶
      </div>
    );

  return (
    <>
      {searchedTerm === "" &&
        breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} className="mb-4" />
        ))}
      {searchedTerm !== "" && (
        <SearchedBreeds
          breeds={breeds}
          searchBy="name"
          searchedTerm={searchedTerm}
        />
      )}
    </>
  );
};

export default Breeds;
