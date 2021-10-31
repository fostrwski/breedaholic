import DefaultLayout from "components/common/layouts/Default";
import Breeds from "components/Index/Breeds";
import Heading from "components/Index/Heading";
import React from "react";

const Index: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="p-4">
        <Heading />

        <div className="mt-8">
          <Breeds />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
