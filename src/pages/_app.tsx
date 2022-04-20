import "common/styles/globals.css";

import { fetchBreeds } from "common/services/breeds";
import type { AppStore } from "common/store";
import { wrapper } from "common/store";
import type { AppProps } from "next/app";
import App from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store: AppStore) => async (context) => {
    if (store.getState().breeds.data.length === 0) {
      await store.dispatch(fetchBreeds());
    }

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
