import DefaultLayout from "common/layouts/Default";
import Breeds from "modules/Index/Breeds";
import Heading from "modules/Index/Heading";
import type { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <section>
        <Heading />
      </section>
      <section className="mt-6">
        <Breeds />
      </section>
    </DefaultLayout>
  );
};

export default Index;
