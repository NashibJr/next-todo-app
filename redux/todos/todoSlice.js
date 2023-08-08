import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: "idle",
  error: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice;
