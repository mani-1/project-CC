import  { createSlice } from "@reduxjs/toolkit";


const initialValue = '';
const initialStateValues = {
    cardHolderName: initialValue,
    cardNumber: initialValue,
    cardExpiration: initialValue
}
const nameSlice = createSlice({
    name: 'cardHolderDetails',
    initialState: initialStateValues,
    reducers: {
        changeName (state, action) {
            state.cardHolderName = (action.payload)
            return state
        },
        changeCardNumber (state, action) {
            state.cardNumber = action.payload
            return state
        },
        changeExpiration (state, action) {
            state.cardExpiration = action.payload
            return state
        },
        resetCardData (state) {
            state = initialStateValues
            return state
        }
    }
});

export const { changeName, changeCardNumber, changeExpiration, resetCardData } = nameSlice.actions;
export default nameSlice.reducer;