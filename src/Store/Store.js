import { configureStore } from "@reduxjs/toolkit";
import { todoSlicer } from "./Slice";
export const todoStore = configureStore({
  reducer: {
    todo: todoSlicer,
  },
});
