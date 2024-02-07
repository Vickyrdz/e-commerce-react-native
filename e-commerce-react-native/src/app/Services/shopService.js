import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_base } from "../../firebase/db";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_base }),
  tagTypes: ["image", "location"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products.json`,
    }),
    getProducts: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
      query: () => `products${id}.json`,
    }),
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    postOrders: builder.mutation({
      query: (order) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getOrders: builder.query({
      query: () => `orders.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => {
        // console.log({ localId, image });
        const imgUrl = `profileImage/${localId}.json`;
        return {
          url: imgUrl,
          method: "PUT",
          body: { image },
        };
      },
      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => {
        console.log({ localId });
        return `profileImage/${localId}.json`;
      },
      providesTags: ["image"],
    }),
    postProfileLocation: builder.mutation({
      query: ({ localId, locationFormatted }) => {
        const locationUrl = `profileLocation/${localId}.json`;
        return {
          url: locationUrl,
          method: "PUT",
          body: locationFormatted,
        };
      },
      invalidatesTags: ["location"],
    }),
    getProfileLocation: builder.query({
      query: (localId) => `profileLocation/${localId}.json`,
      providesTags: ["location"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  usePostOrdersMutation,
  usePostProfileImageMutation,
  useGetProfileImageQuery,
  usePostProfileLocationMutation,
  useGetProfileLocationQuery,
  useGetOrdersQuery,
} = shopApi;
