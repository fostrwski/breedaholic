import type { StateFromReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import breedsReducer from "@/common/services/breeds";

const reducer = {
  breeds: breedsReducer,
};

export type AppState = StateFromReducersMapObject<typeof reducer>;

export const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
