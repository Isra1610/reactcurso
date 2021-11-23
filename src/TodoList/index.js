import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.searchedTodos.length && props.onEmpty()}

      {props.searchedTodos.map(props.render)}

      <ul>{props.children}</ul>
    </section>
  );
};

export default TodoList;