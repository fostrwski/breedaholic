import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { AppState } from "@/common/store";
import type { Breed } from "@/common/types";

interface BreedsState {
  data: Array<Breed>;
  status: string;
}

const initialState: BreedsState = {
  data: [],
  status: "idle",
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  const breeds = await res.json();

  return breeds;
});

const reducers = {
  addBreeds: (state: any, action: PayloadAction<Array<Breed>>) => {
    state.data = state.data.concat(action.payload);
  },
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers,
  extraReducers(builder) {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = state.data.concat(action.payload);
      })
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.breeds,
        };
      });
  },
});

export const { addBreeds } = breedsSlice.actions;

export const selectBreeds = () => (state: AppState) => state.breeds;

export default breedsSlice.reducer;
