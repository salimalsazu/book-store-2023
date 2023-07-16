/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => "/books" }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    AddBook: builder.mutation({
      query: ( data ) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),

      // invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      // providesTags: ["reviews"],
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useAddBookMutation } =
  bookApi;
