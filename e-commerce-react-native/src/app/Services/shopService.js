import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url_base} from '../../firebase/db';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: url_base }),
  tagTypes:["image"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
        query: () => `products${id}.json`,
    }),
    getCategories: builder.query({
        query: () => `categories.json`
    }),
    postOrders: builder.mutation({
        query: (order) => ({
          url: 'orders.json',
          method: 'POST',
          body: order
        })
    }),
    postProfileImage: builder.mutation({
      query: ({localId, image}) => {
        const imgUrl = `profileImage/${localId}.json`;
        console.log({ imgUrl });
        return ({
          url: imgUrl,
          method: 'PUT',
          body: { image }
        });
      },
      invalidatesTags:["image"]
  }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
    }),
})


export const { 
  useGetProductsQuery, 
  useGetProductQuery, 
  useGetCategoriesQuery, 
  usePostOrdersMutation, 
  usePostProfileImageMutation,
  useGetProfileImageQuery
} = shopApi 