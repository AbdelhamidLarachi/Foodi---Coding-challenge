//------------------------------------------------------------------------------
// <copyright file="checkout.tsx" Author="Abdelhamid Larachi">
//     Copyright (c) Abdelhamid Larachi.  All rights reserved.
// </copyright>
//------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import products from "../../data/products";
import toObject from "../../functions/toObject";



export const cartSlice = createSlice({
  name: "cart",
  initialState: toObject(products),
  reducers: {
    increment: (state: any, action: PayloadAction<string>) => {
      
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      if (state[action.payload].quantity < 100)
        state[action.payload].quantity += 1;
    },
    decrement: (state: any, action: PayloadAction<string>) => {
      if (state[action.payload].quantity > 0)
        state[action.payload].quantity -= 1;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
