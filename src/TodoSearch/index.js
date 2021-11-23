import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
