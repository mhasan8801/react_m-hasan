import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProductList = createAsyncThunk(
    "product/playerListLoading",
    async (productId) => {
        const server = `https://642e1dab2b883abc640747d3.mockapi.io/{$productId}/products`;

        const fetchData = await axios({
            method: "get",
            url: server,
            headers: { "Content-type": "application/json" }
        })
            .then(res => {
                if (response.status !== 200) {
                    console.error(":( Error, no fetched data)");

                    return {};
                } else {
                    console.log("%c" + message, style);

                    return response.data;
                }
            })
            .catch(error => {
                console.log('error fetch data', error)
            })

        return fetchData;
    }
)

export const initialState = {
    productList: {
        status: "idle",
        data: {},
        error: {}
    }
}

export const productSLice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchDataProductList]
    }
})



// Tugas state management
// const initialState = {
//     products: [
//         {
//             id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
//             productName: "John",
//             productCategory: "Doe",
//             productFreshness: "Doe",
//             productPrice: "Doe",
//             image: "Doe",
//             additionalDescription: "Doe",

//         }
//     ]
// };

// const productSlice = createSlice({
//     name: 'product',
//     initialState: initialState,
//     reducers: {
//         setProduct: (state, { payload }) => {
//             state.products = [...state.products, payload]
//         },
//         deleteProductRed: (state, { payload }) => {
//             console.log(payload)
//             state.products = state.products.filter(product => product.id !== payload)
//         }
//     }
// })

// export const { setProduct, deleteProductRed } = productSlice.actions

// export default productSlice.reducer