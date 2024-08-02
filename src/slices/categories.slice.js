import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    selectedCategories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      const categories = action.payload;
      state.categories = categories;
    },
    selectCategories: (state, action) => {
      const category = action.payload;
      const isSelected = state.selectedCategories.includes(category);

      if (!isSelected) {
        state.selectedCategories.push(category);
      } else {
        state.selectedCategories = state.selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        );
      }
    },
    clearCategories: (state, action) => {
      const selectedCategories = action.payload;
      const clearedCategories = state.selectedCategories;

      if (clearedCategories.length)
        clearedCategories.splice(0, clearedCategories.length);
    },
  },
});

export const { setCategories, selectCategories, clearCategories } = categorySlice.actions;

export default categorySlice;
