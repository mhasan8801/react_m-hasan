import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk(
    "product/productListLoading",

    async() => {
        const server = "https://642e1dab2b883abc640747d3.mockapi.io/products";

        const fetchData = await axios({
            method: "get",
            url: server,
            headers: {"Content-Type": "apllication/json"}
        })
        return fetchData.data;
    }

)



const initialState = {
    products: [
        {
            id: "",
            productName: "",
            productCategory: "",
            productFreshness: "",
            productPrice: "",
            image: "",
            additionalDescription: "",

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
    },
    extraReducers:{
        [fetchProductList.fulfilled.type]: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { setProduct, deleteProductRed } = productSlice.actions

export default productSlice.reducer