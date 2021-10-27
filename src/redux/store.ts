import { configureStore } from "@reduxjs/toolkit";

import breedsReducer from "./breeds";

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
