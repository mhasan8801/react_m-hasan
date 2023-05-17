import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../product/productSlice";

const reducer = combineReducers ({
   product: productSlice
}) 

export default reducer