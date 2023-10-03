/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["addBook"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["addBook"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
    addComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/books/comment/${id}`,
      providesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["addBook"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddCommentMutation,
  useGetCommentQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
