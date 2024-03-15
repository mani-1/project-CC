import { configureStore } from "@reduxjs/toolkit"; 
import cardDetailsReducer from "./slices/cardHolderNameSlice";
// import cardNumberReducer from "./slices/cardNumberSlice";


export const store = configureStore({
    reducer: {
        cardHolderDetails: cardDetailsReducer
    }
});