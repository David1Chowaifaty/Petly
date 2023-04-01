import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartItemType {
  id: string;
  amount: number;
  name: string;
  quantity: string;
  images: string[];
  price: string;
  description: string;
  newAmount: number | 0;
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
        let amount = state.items[i].amount + action.payload.amount;
        state.items[i] = { ...state.items[i], amount };
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      let newCart = state.items.filter(({ id }) => id !== action.payload.id);
      state.items = [...newCart];
    },
    afterRefresh(state, action) {
      state.items = [...action.payload];
    },
    updateAmount(state, action) {
      let i = action.payload.index;
      let amount = action.payload.newAmount;
      state.items[i] = {
        ...state.items[i],
        newAmount: amount,
      };
      //state.items = [...oldItems];
    },
  },
});

export const { addToCart, removeFromCart, afterRefresh, updateAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
