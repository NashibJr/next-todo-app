import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const { id, newTodo } = action.payload;
      const todoToBeEdited = state.todos.todos.find((todo) => todo.id === id);
      if (todoToBeEdited) {
        todoToBeEdited.todo = newTodo;
      } else {
        return state.todos;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice;
