import { createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterApi';

export interface CountObject {
  count: number;
}
const initialState: CountObject = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state, action) => {
        console.log(state, action.payload);
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        console.log(state, action);
      })
      .addCase(fetchCount.rejected, (state, action) => {
        console.log(state,action);
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
