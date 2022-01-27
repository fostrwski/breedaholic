import DefaultLayout from "common/layouts/Default";
import Breeds from "modules/Home/Breeds";
import Heading from "modules/Home/Heading";
import React from "react";

const Index: React.FC = () => {
  return (
    <DefaultLayout>
      <section>
        <Heading />
      </section>
      <section className="mt-10">
        <Breeds />
      </section>
    </DefaultLayout>
  );
};

export default Index;
