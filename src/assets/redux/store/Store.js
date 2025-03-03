import { configureStore } from "@reduxjs/toolkit";
import  sellSlice  from "../state/Counter/CounterSlice";
// ✅ Ensure correct path

const store = configureStore({
  reducer: {
    sell: sellSlice, // ✅ Matches default export
  },
});

export default store;
