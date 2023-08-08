import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todos/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
