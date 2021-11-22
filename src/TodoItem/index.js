import React, { useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoCheck } from "react-icons/go";

import "./TodoItem.css";

const TodoItem = (props) => {
  console.log(props);

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <GoCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FcCancel />
      </span>
    </li>
  );
};

export default TodoItem;
