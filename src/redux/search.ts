import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchedTerm: string;
}

const initialState: SearchState = {
  searchedTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    update: (state, action) => {
      state.searchedTerm = action.payload;
    },
  },
});

export const { update } = searchSlice.actions;

export default searchSlice.reducer;
