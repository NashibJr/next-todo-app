"use client";

import Header from "@/components/Header";
import Todos from "@/components/Todos";
import Form from "@/components/form";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.todos);
  const todos = state?.todos;
  return (
    <div>
      <Header />
      <Form />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
