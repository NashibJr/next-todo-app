"use client";

import Header from "@/components/Header";
import Todos from "@/components/Todos";
import Form from "@/components/form";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <Header />
      <Form />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
