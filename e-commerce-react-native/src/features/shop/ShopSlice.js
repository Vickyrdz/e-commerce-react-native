import { createSlice } from '@reduxjs/toolkit';
import allProducts from '../../data/products.json';
import allCategories from '../../data/categories.json';

const initialState = {
    value: {
        products: allProducts,
        categories: allCategories,
        productSelected: {},
        productsFilteredByCategory: [], 

    } 
};

export const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setProductsFilteredByCategory: (state, actions)=>{
            state.value.productsFilteredByCategory = state.value.products.filter(product => product.category == actions.payload)
        },
        setProductSelected: (state, action) => {
            state.value.productSelected = state.value.products.find(product => product.id == action.payload )
        }

    } 
});

export const {setProductsFilteredByCategory, setProductSelected} = ShopSlice.actions; 

export default ShopSlice.reducer; 