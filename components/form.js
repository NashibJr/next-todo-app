import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col p-3 m-3 sm:w-3/4 sm:mx-auto md:w-1/2 xl:w-1/3 form-content rounded-sm">
      <input
        type="text"
        name="todo"
        placeholder="Type task here..."
        className="border border-b-slate-200 rounded-sm p-2 outline-none text-sm"
      />
      <button
        type="button"
        name="button"
        className="text-white bg-blue-800 mt-2 p-1 rounded-sm w-1/4 mx-auto hover:opacity-80"
      >
        ADD
      </button>
    </form>
  );
};

export default Form;
