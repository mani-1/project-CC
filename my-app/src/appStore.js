import { configureStore } from "@reduxjs/toolkit"; 
import cardDetailsReducer from "./slices/cardHolderNameSlice";



export const store = configureStore({
    reducer: {
        cardHolderDetails: cardDetailsReducer
    }
});