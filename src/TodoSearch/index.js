import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    let searchedTodo = event.target.value;
    setSearchValue(searchedTodo);
  };

  console.log(searchValue, "asd");

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Search a Todo..."
      value={searchValue}
    />
  );
};

export default TodoSearch;
