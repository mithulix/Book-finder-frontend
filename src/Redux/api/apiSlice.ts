import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-finder-backend-phi.vercel.app/api/v1",
  }),
  tagTypes: ["comments", "addBook"],
  endpoints: () => ({}),
});
