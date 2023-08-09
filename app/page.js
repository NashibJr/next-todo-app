"use client";

import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Todos from "@/components/Todos";
import Form from "@/components/form";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const [modal, setModal] = React.useState(false);
  const showModal = () => setModal(true);
  const hideModel = () => setModal(false);
  return (
    <div>
      <Header />
      <Form />
      <Todos todos={todos} showModal={showModal} />
      <Modal modal={modal} hideModel={hideModel} />
    </div>
  );
};

export default Home;
