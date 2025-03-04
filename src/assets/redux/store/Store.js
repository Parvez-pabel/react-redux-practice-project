import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../state/todo/TodoSlice"
// ✅ Ensure correct path

const store = configureStore({
  reducer: {
    // sell: sellSlice,
    todo: todoReducer,
  },
});

export default store;
