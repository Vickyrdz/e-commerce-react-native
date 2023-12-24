import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/ShopSlice'; 

export const store = configureStore({
  reducer: {
    shop: shopReducer
  },
})
