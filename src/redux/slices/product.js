import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://dummyapi.online/api/products");
  const finaldata = await response.json();
  return finaldata;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    isError: null,
    products: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("Error: ", action.payload);
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
