/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../Types/globalTypes";

interface IWishlist {
  books: IBooks[];
}

const initialState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (!existingBook) {
        state.books.push({
          ...action.payload,
          readingStatus: false,
          readingComplete: false,
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBooks>) => {
      state.books = state.books.filter((p) => p._id !== action.payload._id);
    },
    changeBookStatus: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (existingBook && existingBook.readingStatus === false) {
        existingBook.readingStatus = true;
      } else {
        existingBook!.readingStatus = false;
      }
    },
    changeFinishedStatus: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (existingBook && existingBook.readingComplete === false) {
        existingBook.readingComplete = true;
      } else {
        existingBook!.readingComplete = false;
      }
    },
    clearWishlist: (state) => {
      state.books = [];
    },
  },
});

export default wishlistSlice.reducer;
export const {
  addToWishlist,
  removeFromWishlist,
  changeBookStatus,
  changeFinishedStatus,
  clearWishlist 
} = wishlistSlice.actions;
