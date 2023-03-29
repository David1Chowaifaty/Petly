import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartItemType {
  id: string;
  amount: number;
  name: string;
  quantity: string;
  images: string[];
  price: string;
  description: string;
}
type CounterState = {
  items: CartItemType[];
};

const initialState = {
  items: [],
} as CounterState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const foundItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem?.id === action.payload.id) {
        const i = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        let amount = state.items[i].amount + 1;
        state.items[i] = { ...state.items[i], amount: amount };
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const i = state.items.findIndex((item) => item.id === action.payload.id);
      let amount = state.items[i].amount - 1;
      if (amount > 0) {
        state.items[i] = { ...state.items[i], amount: amount };
      } else {
        const filterdCart = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.items = filterdCart;
      }
    },
    afterRefresh(state, action) {
      state.items = [...action.payload];
    },
  },
});

export const { addToCart, removeFromCart, afterRefresh } = cartSlice.actions;
export default cartSlice.reducer;
