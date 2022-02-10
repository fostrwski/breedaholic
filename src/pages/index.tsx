import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DefaultLayout from "@/common/layouts/Default";
import { filterBreeds } from "@/common/services/breeds";
import Breeds from "@/modules/Index/Breeds";
import Heading from "@/modules/Index/Heading";

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterBreeds({}));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <section>
        <Heading />
      </section>
      <section className="mt-8">
        <Breeds />
      </section>
    </DefaultLayout>
  );
};

export default Index;
