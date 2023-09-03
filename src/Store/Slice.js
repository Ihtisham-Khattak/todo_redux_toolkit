// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];
// const todoSlicer = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: async (state, action) => {
//       await state.push(action.payload);
//       return state;
//     },
//   },

//   deleteTodo: async (state, action) => {
//     await state.filter((todo) => todo.id !== action.payload);
//     return state;
//   },

//   updateTodo: async (state, action) => {
//     const { id, updateTodo } = action.payload;

//     // let todoUpdate = await state.findIndex((todo) => {
//     //   todo.id === id
//     // });
//     if (todoUpdate !== -1) {
//       state[todoUpdate] = { ...state[todoUpdate], ...[updateTodo] };
//     }
//     return state;
//   },
// });

// export const { addTodo } = todoSlicer.actions;
// export const todoSlice = todoSlicer.reducer;
