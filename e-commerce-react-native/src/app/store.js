import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/ShopSlice'; 
import { shopApi } from './Services/shopService';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../features/Cart/CartSlice'; 


export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware),
});


setupListeners(store.dispatch)


