import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import shoppingCartSlice from "./features/shoppingCart/ShoppingCartSlice";


export const store = configureStore({
    reducer: {
        productList: productsSlice,
        shoppingCart: shoppingCartSlice
    }
})