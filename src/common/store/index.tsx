import type { StateFromReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "common/services/breeds";
import { createWrapper } from "next-redux-wrapper";

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
