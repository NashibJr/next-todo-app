import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

const Todo = ({ todo: { todo } }) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex w-3/4 flex-wrap">
        <input type="checkbox" className="rounded-full" />
        <p className="text-sm ml-4">{todo}</p>
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
