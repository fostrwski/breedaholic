import type { NextPage } from "next";
import React from "react";

import DefaultLayout from "@/common/layouts/Default";
import Breeds from "@/modules/Home/Breeds";
import Heading from "@/modules/Home/Heading";

const Home: NextPage = () => {
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

export default Home;
