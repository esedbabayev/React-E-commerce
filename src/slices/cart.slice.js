import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartItems: (state, action) => {
      const cartItems = action.payload;

      return (state = cartItems);
    },
    addToCard: (state, action) => {
      const cartItem = action.payload;

      const existingCartItem = state.find(
        (item) =>
          item.product.id === cartItem.product.id && item.size === cartItem.size
      );

      if (existingCartItem && existingCartItem.size === cartItem.size) {
        existingCartItem.quantity += cartItem.quantity;
      } else {
        state.push(cartItem);
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = action.payload;

      const existingCartItemIndex = state.findIndex(
        (item) =>
          item.product.id === cartItem.product.id && item.size === cartItem.size
      );

      state.splice(existingCartItemIndex, 1);
    },
    changeProductAmount: (state, action) => {
      const cartItem = action.payload.cartItem;
      const newQuantity = action.payload.newQuantity;

      const existingCartItem = state.find(
        (item) =>
          item.product?.id === cartItem.product?.id &&
          item?.size === cartItem.size
      );

      existingCartItem.quantity = newQuantity;
    },
  },
});

export const { addToCard, removeFromCart, changeProductAmount, setCartItems } =
  cartSlice.actions;

export default cartSlice;
