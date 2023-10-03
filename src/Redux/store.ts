import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { api } from "./api/apiSlice";
import bookReducer from "./features/book/bookSlice";
import cartReducer from "./features/cart/cartSlice";
import filterReducer from "./features/filter/filterSlice";
import userReducer from "./features/user/userSlice";
import wishListReducer from "./features/wishlist/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  wishlist: wishListReducer,
  book: bookReducer,
  filter: filterReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
