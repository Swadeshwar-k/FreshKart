
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import authReducer from "./authSlice";

//  Load persisted state
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
});

// ✅ Save Redux state to localStorage on every change
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});


export default store