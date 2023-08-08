"use client";

import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const state = useSelector((state) => state.todos);
  const todos = state?.todos;
  return (
    <div className="m-2 mt-6 md:w-3/4 md:mx-auto lg:w-2/3 p-4 xl:w-1/2">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default Todos;
