import { configureStore } from "@reduxjs/toolkit";
import reducer from "../product/reducer";

const store = configureStore ({
    reducer: reducer

})

export default store