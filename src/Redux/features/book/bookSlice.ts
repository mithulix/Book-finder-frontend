import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../Types/globalTypes";

interface IBook {
  book: IBooks | null;
  status: boolean;
  priceRange: number;
}

const initialState: IBook = {
  book: null,
  status: false,
  priceRange: 150,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    editing: (state, action: PayloadAction<IBooks>) => {
      state.book = action.payload;
    },
    cancelEditing: (state) => {
      state.book = null;
    },
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export default bookSlice.reducer;
export const { editing, cancelEditing, toggleState, setPriceRange } =
  bookSlice.actions;
