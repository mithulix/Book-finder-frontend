/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../../Types/globalTypes";

interface ICart {
  books: IBooks[];
  total: number;
}

const initialState: ICart = {
  books: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );
      if (existingBook) {
        existingBook.quantity = existingBook.quantity! + 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IBooks>) => {
      const existingBook = state.books.find(
        (b) => b._id === action.payload._id
      );

      if (existingBook && existingBook.quantity! > 1) {
        existingBook.quantity! -= 1;
      } else {
        state.books = state.books.filter((b) => b._id !== action.payload._id);
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IBooks>) => {
      state.books = state.books.filter((b) => b._id !== action.payload._id);
      state.total -= action.payload.price * action.payload.quantity!;
    },
    clearCart: (state) => {
      state.books = [];
    },
  }
});

export default cartSlice.reducer;
export const { addToCart, removeOne, removeFromCart, clearCart } = cartSlice.actions;
