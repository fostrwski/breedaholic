import type { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "common/store";
import type { Breed } from "common/types";
import findCommonElements from "common/utils/mergeArrays";
import mergeArraysByCommonElements from "common/utils/mergeArraysByCommonElements";
import { HYDRATE } from "next-redux-wrapper";

import { GET_BREEDS_URL } from "../api";
import filterByCategories from "./filterByCategories";
import filterByName from "./filterByName";
import filterBySize from "./filterBySize";

interface Filters {
  name?: string;
  categories?: Array<string>;
  sizes?: Array<string>;
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
    categories: [],
    sizes: [],
    temperament: [],
  },
  status: "idle",
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const res = await fetch(GET_BREEDS_URL);
  const breeds = await res.json();

  return breeds;
});

const reducers = {
  filterBreeds: (state: any, action: PayloadAction<Filters>) => {
    state.filters = { ...state.filters, ...action.payload };

    const filteredBreedsByName =
      state.filters.name.length === 0
        ? state.data
        : filterByName(state.data, state.filters.name);

    const filteredBreedsByCategories = filterByCategories(
      state.data,
      state.filters.categories
    );

    const filteredBreedsBySizes = filterBySize(state.data, state.filters.sizes);

    const filteredBreedsByNameAndCategories = mergeArraysByCommonElements(
      [filteredBreedsByName, filteredBreedsByCategories],
      "id"
    );

    const filteredBreedsByAll = mergeArraysByCommonElements(
      [filteredBreedsByNameAndCategories, filteredBreedsBySizes],
      "id"
    );

    console.log(
      findCommonElements([
        ...filteredBreedsByName,
        ...filteredBreedsByCategories,
      ])
    );

    state.filteredBreeds = filteredBreedsByAll;
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
      .addCase(fetchBreeds.fulfilled, (state, action: AnyAction) => {
        state.status = "idle";
        state.data = action.payload;
        state.filteredBreeds = action.payload;
      })
      .addCase(HYDRATE, (state, action: AnyAction) => {
        const nextState = {
          ...state,
          ...action.payload.breeds,
        };

        if (state.filters) nextState.filters = state.filters;
        if (state.status) nextState.status = state.status;

        return nextState;
      });
  },
});

export const { filterBreeds } = breedsSlice.actions;

export const selectBreeds = () => (state: AppState) => state.breeds.data;

export const selectFilteredBreeds = () => (state: AppState) =>
  state.breeds.filteredBreeds;

export const selectFilters = () => (state: AppState) => state.breeds.filters;

export const selectStatus = () => (state: AppState) => state.breeds.status;

export default breedsSlice.reducer;
