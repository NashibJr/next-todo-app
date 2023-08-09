import Modal from "./Modal";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div className="m-2 mt-6 md:w-3/4 md:mx-auto lg:w-2/3 p-4 xl:w-1/2">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      <div>
        <Modal />
      </div>
    </div>
  );
};

export default Todos;
