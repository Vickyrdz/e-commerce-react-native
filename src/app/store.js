import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/ShopSlice'; 
import { shopApi } from './Services/shopService';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../features/Cart/CartSlice'; 
import { authApi } from './Services/auth';
import authReducer from '../features/Auth/AuthSlice'


export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});


setupListeners(store.dispatch)


