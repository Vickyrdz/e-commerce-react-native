import { current, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
       user: 'vickyRdz',
       items: [],
       total: 0,
       updateAt: ""
    } 
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const foundItem = state.value.items.find(item => item.id === action.payload.id);
            if (foundItem) foundItem.quantity++; 
            else state.value.items.push({...action.payload, quantity: 1});
            state.value.total = state.value.items.reduce((acc, item)=> acc + (item.price * item.quantity), 0);
            state.value.updateAt = new Date().toLocaleString(); 
            console.log({ post: current(state), foundItem });
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload; 
            const updatedItems = state.value.items.filter(item => item.id !== itemIdToRemove);
            state.value.items = updatedItems;
            state.value.total = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            state.value.updateAt = new Date().toLocaleString();
        }
       
 
    } 
});

export const { addItem, removeItem} = cartSlice.actions; 

export default cartSlice.reducer;  