import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CartState,
  AddToCartPayload,
  UpdateQuantityPayload,
  RemoveFromCartPayload,
} from "../types";

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const newItem = action.payload;
      const exists = state.items.some((item) => item.id === newItem.id);

      if (exists) {
        state.items = state.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.items = [...state.items, { ...newItem, quantity: 1 }];
      }

      cartSlice.caseReducers.updateTotals(state);
    },

    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);

      cartSlice.caseReducers.updateTotals(state);
    },

    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, quantity } = action.payload;

      state.items =
        quantity <= 0
          ? state.items.filter((item) => item.id !== id)
          : state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            );

      cartSlice.caseReducers.updateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

    updateTotals: (state) => {
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  updateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
