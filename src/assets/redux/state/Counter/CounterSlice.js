import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  top1: 0,
  top2: 0,
  top3: 0,
  totalSell: 0,
  avgSell: 0,
  finalTarget: 0,
};

export const sellSlice = createSlice({
  name: "sell",
  initialState,
  reducers: {
    setTop1: (state, action) => {
      state.top1 = action.payload;
      updateCalculations(state);
    },
    setTop2: (state, action) => {
      state.top2 = action.payload;
      updateCalculations(state);
    },
    setTop3: (state, action) => {
      state.top3 = action.payload;
      updateCalculations(state);
    },
    reset: (state) => {
      state.top1 = 0;
      state.top2 = 0;
      state.top3 = 0;
      updateCalculations(state);
    },
  },
});

// Helper function for calculations
const updateCalculations = (state) => {
  state.totalSell = state.top1 + state.top2 + state.top3;
  state.avgSell = state.totalSell / 3;
  state.finalTarget = state.avgSell * 0.75;
};

export const { setTop1, setTop2, setTop3, reset } = sellSlice.actions;
export default sellSlice.reducer; // ✅ Ensure this is exported
