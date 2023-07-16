// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { api } from "../../api/apiSlice";

// const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     myProfile: builder.query({ query: () => "/users/my-profile" }),
//     signUp: builder.mutation({
//       query: (data) => ({
//         url: `/users/registration`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: `/users/login`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useMyProfileQuery, useSignUpMutation, useLoginMutation } =
//   userApi;
