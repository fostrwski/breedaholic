import { configureStore } from "@reduxjs/toolkit";

import breedsReducer from "./breeds";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
    search: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
