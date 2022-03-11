import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InitialState {
  currentValue: number;
}

const initialState: InitialState = {
  currentValue: 1,
};

const productQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.currentValue += 1;
    },
    decrement(state) {
      state.currentValue -= 1;
      if (state.currentValue < 0) {
        state.currentValue = 0;
      }
    },
  },
});

export const selectProductQuantity = (state: RootState) =>
  state.productQuantity;

export const productQuantityActions = productQuantitySlice.actions;

export default productQuantitySlice.reducer;
