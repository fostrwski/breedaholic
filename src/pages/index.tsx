import SEO from "common/components/SEO";
import DefaultLayout from "common/layouts/Default";
import Breeds from "modules/Index/Breeds";
import Heading from "modules/Index/Heading";
import type { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Breedaholic is a web application that helps you find the dog breed you're looking for!"
      />

      <DefaultLayout>
        <section>
          <Heading />
        </section>
        <section className="mt-6 md:mt-8">
          <Breeds />
        </section>
      </DefaultLayout>
    </>
  );
};

export default Index;
