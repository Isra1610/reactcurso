import React, { useContext } from "react";
import TodoCounter from "../TodoCounter/index.js";
import TodoSearch from "../TodoSearch/index.js";
import TodoList from "../TodoList/index.js";
import TodoItem from "../TodoItem/index.js";
import CreateTodoButton from "../CreateTodoButton/index.js";
import { TodoContext } from "../TodoContext/index.js";
import Modal from "../Modal/index.js";
import TodoForm from "../TodoForm/index.js";

import "./App.css";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
  } = useContext(TodoContext);

  const LoadingTodo = () => {
    return (
      <li className="TodoItem-loading">
        <div className="LoaderBalls">
          <span className="LoaderBalls__item"></span>
          <span className="LoaderBalls__item"></span>
          <span className="LoaderBalls__item"></span>
        </div>
      </li>
    );
  };

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Oops, we got a problem...</p>}
        {loading &&
          new Array(4).fill().map((item, index) => <LoadingTodo key={index} />)}
        {!loading && !searchedTodos.length && <p>Create your first TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodos(todo.text)}
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <p>
            <TodoForm />
          </p>
        </Modal>
      )}
      <CreateTodoButton />
    </>
  );
};

export default AppUI;
