import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const baseUrl = "https://642e1dab2b883abc640747d3.mockapi.io/products";

export const fetchProductList = createAsyncThunk(
    "product/productList",

    async() => {
        const fetchData = await axios({
            method: "get",
            url: baseUrl,
            headers: {"Content-Type": "apllication/json"}
        })
        return fetchData.data;
    }

)

export const postProductList = createAsyncThunk(
    "product/postProductList",

    async({id, productName, productCategory, productFreshness, additionalDescription, productPrice, }) => {
        const postData = await axios.post(baseUrl, {
            id,
            productName,
            productCategory,
            productFreshness,
            productFreshness,
            additionalDescription,
            productPrice
        })
        return postData.data;
    })

    // export const deleteProductList = createAsyncThunk(
    //     "product/deleteProductList",

    //     async(id) => {
    //         const deleteData = await axios.delete(baseUrl + `/${id}`, )
    //     }
    // )
        



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
            state.products = state.products.filter(product => product.id !== payload)
        }
    },
    extraReducers:{
        [fetchProductList.fulfilled.type]: (state, action) => {
            state.products = action.payload;
        },
        [postProductList.fulfilled.type]: (state, action) => {
            state.products = [...state.products, action.payload];
        },

    }
})

export const { setProduct, deleteProductRed } = productSlice.actions

export default productSlice.reducer