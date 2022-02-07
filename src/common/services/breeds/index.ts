import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@/common/store";
import type { Breed } from "@/common/types";

interface BreedsState {
  data: Array<Breed>;
}

const initialState: BreedsState = {
  data: [],
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  const breeds = await res.json();

  return breeds;
});

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    addBreeds: (state, action: PayloadAction<Array<Breed>>) => {
      console.log(action.payload);
      state.data.push(...action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      state.data = state.data.concat(action.payload);
    });
  },
});

export const { addBreeds } = breedsSlice.actions;

export const selectBreeds = () => (state: AppState) => state.breeds.data;

export default breedsSlice.reducer;
