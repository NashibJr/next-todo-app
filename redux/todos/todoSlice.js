import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), todo: "Task 1", status: "pending" },
    { id: nanoid(), todo: "Task 2", status: "pending" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice;
