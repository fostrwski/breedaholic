import "@/common/styles/globals.css";

import type { AppProps } from "next/app";
import App from "next/app";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBreeds } from "@/common/services/breeds";
import type { AppStore } from "@/common/store";
import { wrapper } from "@/common/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  return <Component {...pageProps} />;
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store: AppStore) => async (context) => {
    await store.dispatch(fetchBreeds());

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
