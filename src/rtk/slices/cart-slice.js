import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
        },
        deleteFromCart: (state, action) => {

            return state.filter((product) => product.id !== action.payload.id)
        },
        minesFromCart: (state, action) => {
            let findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                if (findProduct.quantity > 1) {
                    findProduct.quantity -= 1;
                } else {
                    return state.filter((product) => product.id !== action.payload.id);
                }
            }
        },

        clearAll: (state, action) => {
            return [];
        },

    }
});
export const { addToCart, deleteFromCart, clearAll, minesFromCart } = cartSlice.actions;
export default cartSlice.reducer;