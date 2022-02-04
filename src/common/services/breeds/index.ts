import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Breed } from "@/common/types";

interface BreedsState {
  value: Array<Breed>;
}

const initialState: BreedsState = {
  value: [],
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Array<Breed>>) => {
      state.value.concat(action.payload);
    },
  },
});

export const { update } = breedsSlice.actions;
export const selectBreeds = (state) => state.breeds.value;
export default breedsSlice.reducer;
