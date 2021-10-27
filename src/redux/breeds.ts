import { createSlice } from "@reduxjs/toolkit";

interface BreedsState {
  breeds: any[];
}

const initialState: BreedsState = {
  breeds: [],
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    update: (state, action) => {
      state.breeds = action.payload;
    },
  },
});

export const { update } = breedsSlice.actions;

export default breedsSlice.reducer;
