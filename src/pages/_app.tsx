import React from "react";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "redux/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
