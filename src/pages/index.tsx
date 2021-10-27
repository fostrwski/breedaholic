import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "components/atoms/Card";
import useFetch from "hooks/useFetch";
import { update } from "redux/breeds";

import Input from "../components/atoms/Input";
import Layout from "../components/templates/Layout";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://api.thedogapi.com/v1/breeds"
  );

  const { breeds } = useSelector((state) => state.breeds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(data));
  }, [data]);

  if (error) return `Error ${error}`;

  if (loading) return "Loading...";

  return (
    <Layout>
      <div className="text-center p-4">
        <div className="absolute z-[-1] opacity-20 mt-20 hidden">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#047857"
              d="M39.1,-50.1C48.9,-38.5,53.6,-24.4,54,-11.1C54.5,2.2,50.7,14.6,45.6,29.2C40.6,43.7,34.3,60.4,23.6,63.9C12.9,67.3,-2.2,57.5,-19.6,51.9C-36.9,46.4,-56.4,45.1,-67.3,34.8C-78.1,24.4,-80.3,4.9,-74.3,-10.4C-68.4,-25.6,-54.3,-36.7,-40.5,-47.7C-26.8,-58.6,-13.4,-69.4,0.7,-70.2C14.7,-71,29.4,-61.8,39.1,-50.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl mb-6 font-semibold">
            Search hundreds of different dog breeds!
          </h1>
          <Input
            type="text"
            id="search"
            name="search"
            placeholder="Search for breed..."
          />
        </div>
      </div>
      <>
        {breeds.map((breed: any) => {
          return <Card key={breed.id} title={breed.name} />;
        })}
      </>
    </Layout>
  );
};

export default Home;
