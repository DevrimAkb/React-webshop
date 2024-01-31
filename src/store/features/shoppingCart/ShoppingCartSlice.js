import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const shoppingCartSlice = createSlice({
    name: 'ShoppingCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, { product: action.payload, quantity: 1 }]
        },
        removeOne: () => {},
        removeItem: () => {},
        clearCart: () => {}
    }
})

export const { addToCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer