import { createSlice } from "@reduxjs/toolkit";

interface BreedsState {
  value: any[];
}

const initialState: BreedsState = {
  value: [],
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
