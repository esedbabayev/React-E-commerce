import { configureStore } from "@reduxjs/toolkit";

// Slices
import categorySlice from "./slices/categories.slice";
import colorSlice from "./slices/colors.slice";

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    colors: colorSlice.reducer,
  },
});

export default store;
