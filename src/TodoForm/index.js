import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue("");
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a new TODO</label>
      <textarea
        placeholder="to cut onions for lunch..."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
