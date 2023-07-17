/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-store-server-weld.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["books"],
});
