import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    sizes: ["xs", "s", "m", "l", "xl"],
    selectedSizes: [],
  },
  reducers: {
    // setSizes: (state, action) => {
    //   const sizes = action.payload;
    //   state.sizes = sizes;
    // },
    selectSizes: (state, action) => {
      const size = action.payload;

      const isSelected = state.selectedSizes.includes(size);

      if (!isSelected) {
        state.selectedSizes.push(size);
      } else {
        state.selectedSizes = state.selectedSizes.filter(
          (sizeItem) => sizeItem !== size
        );
      }
    },
  },
});

export const { setSizes, selectSizes } = sizeSlice.actions;

export default sizeSlice;
