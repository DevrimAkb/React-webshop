import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    error: null,
    loading: false
}

export const productsSlice = createSlice({
    name: 'Product-List',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default productsSlice.reducer