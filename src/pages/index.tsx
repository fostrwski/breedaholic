import React from "react";

import Layout from "components/templates/Layout";
import Breeds from "modules/IndexPage/Breeds";
import Heading from "modules/IndexPage/Heading";

const Home = () => {
  return (
    <Layout>
      <div className="p-4">
        <Heading />

        <div className="mt-6">
          <Breeds />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
