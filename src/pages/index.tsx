import Layout from "components/templates/Layout";
import Breeds from "modules/IndexPage/Breeds";
import Heading from "modules/IndexPage/Heading";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <div className="p-4">
        <Heading />

        <div className="mt-8">
          <Breeds />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
