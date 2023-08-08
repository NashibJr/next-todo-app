"use client";

import React from "react";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

const Todo = ({ todo: { todo, status } }) => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  React.useEffect(() => {
    if (status === "completed") {
      setIsChecked(true);
    }
  }, [isChecked]);
  return (
    <div className="flex justify-between mb-2">
      <div className="flex w-3/4 flex-wrap">
        <input
          type="checkbox"
          checked={isChecked}
          value={isCompleted}
          name="todo"
          className="rounded-full"
          onChange={(event) => {
            setIsCompleted(event.target.value);
            setIsChecked((prevState) => !prevState);
          }}
        />
        <p className="text-sm ml-4 font-semibold">{todo}</p>
      </div>
      <div className="flex">
        <span className="w-8 cursor-pointer flex justify-center items-center mr-1">
          <AiTwotoneEdit />
        </span>
        <span className="w-8 cursor-pointer flex justify-center items-center">
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default Todo;
