import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url_base} from '../../firebase/db';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: url_base }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo=${category}`,
    }),
    getProduct: builder.query({
        query: () => `products${id}.json`,
    }),
    getCategories: builder.query({
        query: () => `categories.json`
    })
  }),
})


export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } = shopApi 