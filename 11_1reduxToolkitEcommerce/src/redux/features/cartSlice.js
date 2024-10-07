import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [] 
};

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const {id} = action.payload;
            const productExists = state.cart.some(product => product.id === id);
            if (!productExists) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart : (state, action) => {
            const {id} = action.payload;
            state.cart = state.cart.filter((product) => product.id != id )
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer