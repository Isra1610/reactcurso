import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmpty()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(props.children)}

      <ul>{props.children}</ul>
    </section>
  );
};

export default TodoList;
