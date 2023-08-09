import Todo from "./Todo";

const Todos = ({ todos, showModal }) => {
  return (
    <div className="m-2 mt-6 md:w-3/4 md:mx-auto lg:w-2/3 p-4 xl:w-1/2">
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} showModal={showModal} />
        ))}
    </div>
  );
};

export default Todos;
