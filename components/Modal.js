import { editTodo } from "@/redux/todos/todoSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Modal = ({ modal, hideModel, id }) => {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const update = dispatch(editTodo({ id: id, newTodo: todo }));
    if (update) {
      setTodo("Successfully changed");
    }
    setTodo(todo);
  };
  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-auto my-auto w-full">
            <div className="relative my-6 mx-auto max-w-3xl sm:w-2/4 xl:w-2/5 w-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Edit task</h3>
                </div>
                <div className="relative p-3 flex-auto">
                  <input
                    type="text"
                    value={todo}
                    placeholder="Edit task from here..."
                    className="border border-b-slate-200 rounded-sm p-2 outline-none text-sm w-full"
                    onChange={(event) => setTodo(event.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={hideModel}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleSubmit();
                      hideModel();
                    }}
                    disabled={!todo}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
