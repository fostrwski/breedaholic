import DefaultLayout from "common/layouts/Default";
import Breeds from "modules/Index/Breeds";
import Heading from "modules/Index/Heading";
import type { NextPage } from "next";
import React from "react";
import SEO from "common/components/SEO";

const Index: NextPage = () => {
  return (
    <>
      <SEO title="Strona główna" description="Breedaholic is a web application that helps you find the dog breed you're looking for!" />

      <DefaultLayout>
        <section>
          <Heading />
        </section>
        <section className="mt-6">
          <Breeds />
        </section>
      </DefaultLayout>
    </>
  );
};

export default Index;
