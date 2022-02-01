import "common/styles/globals.css";

import { BreedsContext } from "common/context/Breeds";
import { FilterBreedsProvider } from "common/context/FilterBreeds";
import { BreedsType } from "common/types";
import type { AppProps } from "next/app";
import React, { useState } from "react";

interface MyAppProps extends AppProps {
  fetchedBreeds: BreedsType;
}

const MyApp: React.FC<MyAppProps> & {
  getInitialProps: () => object;
} = ({ Component, pageProps, fetchedBreeds }) => {
  const [breeds] = useState<BreedsType>(fetchedBreeds);

  const breedsContextValue = {
    breeds,
  };

  return (
    <BreedsContext.Provider value={breedsContextValue}>
      <FilterBreedsProvider>
        <Component {...pageProps} />
      </FilterBreedsProvider>
    </BreedsContext.Provider>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  const breeds = await res.json();
  return { fetchedBreeds: breeds };
};

export default MyApp;
