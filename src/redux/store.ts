import { configureStore } from "@reduxjs/toolkit";

import breedsReducer from "./breeds";

export default configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});
