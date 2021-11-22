import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      You have complete {completedTodos} of {totalTodos} TODOs
    </h2>
  );
};

export default TodoCounter;
