import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTodo } = todoSlicer.actions;
export default todoSlicer = todoSlicer.reducer;
