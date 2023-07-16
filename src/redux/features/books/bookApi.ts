/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const token = localStorage.getItem("auth") as string;
const myToken = JSON.parse(token);

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => "/books" }),
    myBooks: builder.query({
      query: () => ({
        url: "/books/mybooks",
        headers: {
          authorization: myToken?.accessToken,
        },
      }),
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    AddBook: builder.mutation({
      query: (data) => ({
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

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useMyBooksQuery,
} = bookApi;
