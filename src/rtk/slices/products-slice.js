import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;

})

export const handleDelete = createAsyncThunk("productSlice/handleDelete",
    async (id) => {
        await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "Delete",
        });
        return id;
    }
)

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState: { items: [], status: null, error: null },
    reducers: {
        Add: () => { }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "succeded"
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(handleDelete.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
    }
})

export const { Add } = productsSlice.actions;

export default productsSlice.reducer;