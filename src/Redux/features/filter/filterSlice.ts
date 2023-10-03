import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilter {
  genre: string;
  year: string;
  search: string;
}

const initialState: IFilter = {
  genre: "",
  year: "",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    filterByYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    filterBySearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearFilters: (state) => {
      state.genre = "";
      state.year = "";
      state.search = "";
    },
    clearSearch: (state) => {
      state.search = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  filterByGenre,
  filterByYear,
  filterBySearch,
  clearFilters,
  clearSearch,
} = filterSlice.actions;
