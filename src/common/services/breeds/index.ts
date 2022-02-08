import type { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { AppState } from "@/common/store";
import type { Breed } from "@/common/types";

import { GET_BREEDS_URL } from "../api";

interface Filters {
  name?: string;
  category?: Array<string>;
  temperament?: Array<string>;
}

interface BreedsState {
  data: Array<Breed>;
  filteredBreeds: Array<Breed>;
  filters: Filters;
  status: string;
}

const initialState: BreedsState = {
  data: [],
  filteredBreeds: [],
  filters: {
    name: "",
    category: [""],
    temperament: [""],
  },
  status: "idle",
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const res = await fetch(GET_BREEDS_URL);
  const breeds = await res.json();

  return breeds;
});

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    filterBreeds: (state: any, action: PayloadAction<Filters>) => {
      state.filters = { ...state.filters, ...action.payload };

      if (state.filters.name === "") {
        state.filteredBreeds = state.data;
      } else {
        state.filteredBreeds = state.data.filter((breed: Breed) => {
          return breed.name
            .toLowerCase()
            .includes(state.filters.name.toLowerCase());
        });
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action: AnyAction) => {
        state.status = "idle";
        state.data = state.data.concat(action.payload);
        state.filteredBreeds = state.filteredBreeds.concat(action.payload);
      })
      .addCase(HYDRATE, (state, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.breeds,
        };
      });
  },
});

export const { filterBreeds } = breedsSlice.actions;

export const selectBreeds = () => (state: AppState) => state.breeds;

export default breedsSlice.reducer;
function breed(breed: any, Breed: any): any {
  throw new Error("Function not implemented.");
}
