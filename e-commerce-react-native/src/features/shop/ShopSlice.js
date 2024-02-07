import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        products: [],
        productSelected: {},
        productsFilteredByCategory: [], 
    } 
};

export const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            console.log({ action });
            state.value.products = action.payload;
        },
        setProductsFilteredByCategory: (state, action) => {
            state.value.productsFilteredByCategory = state.value.products.filter(product => product.category == action.payload)
        },
        setProductSelected: (state, action) => {
            state.value.productSelected = state.value.products.find(product => product.id == action.payload )
        }
    } 
});

export const { setAllProducts, setProductsFilteredByCategory, setProductSelected } = ShopSlice.actions; 

export default ShopSlice.reducer;  