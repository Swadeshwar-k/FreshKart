import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  fruits: [],
  vegetables: [],
  popular: [],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //  setProducts used in Home.jsx
    setProducts: (state, action) => {
      const allProducts = action.payload;

      state.products = allProducts;
      state.fruits = allProducts.filter((p) => p.type === "fruits");
      state.vegetables = allProducts.filter((p) => p.type === "vegetables");
      state.popular = allProducts.filter((p) => p.popular === 1);
    },

    // cart functions
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cart.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.cart = state.cart.filter((i) => i.id !== id);
    },
     clearCart: (state) => {
    state.cart = [];
  },
  },
 
});


export const { setProducts, addToCart, increaseQty, decreaseQty, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
