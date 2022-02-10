import type { NextPage } from "next";
import React from "react";

import DefaultLayout from "@/common/layouts/Default";
import Breeds from "@/modules/Index/Breeds";
import Heading from "@/modules/Index/Heading";

const Index: NextPage = () => {
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
