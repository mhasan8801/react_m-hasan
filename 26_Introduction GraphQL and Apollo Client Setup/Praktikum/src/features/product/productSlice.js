import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCategory: "Doe",
            productFreshness: "Doe",
            productPrice: "Doe",
            image: "Doe",
            additionalDescription: "Doe",

        }
    ]
};

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.products = [...state.products, payload]
        },
        deleteProductRed: (state, { payload }) => {
            console.log(payload)
            state.products = state.products.filter(product => product.id !== payload)
        }
    }
})

export const { setProduct, deleteProductRed } = productSlice.actions

export default productSlice.reducer