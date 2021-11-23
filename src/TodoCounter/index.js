import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      You have complete {completedTodos} of {totalTodos} TODOs
    </h2>
  );
};

export default TodoCounter;
