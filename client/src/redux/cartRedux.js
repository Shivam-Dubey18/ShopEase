import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.quantity -= 1;
        state.total -= state.products[index].price * state.products[index].quantity;
        state.products.splice(index, 1);
      }
    },
    increaseProductQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseProductQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      } else if (product && product.quantity === 1) {
        // If quantity is 1, removing the product from the cart
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.quantity -= 1;
        state.total -= product.price;
        state.products.splice(index, 1);
      }
    },
  },
});

export const { addProduct, removeProduct, increaseProductQuantity, decreaseProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
