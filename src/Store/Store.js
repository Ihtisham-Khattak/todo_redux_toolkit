import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./Slice";
const todoStore = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default todoStore;
