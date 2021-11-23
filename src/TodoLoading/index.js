import React from "react";

const TodoLoading = () => {
  const LoadingTodoEffect = () => {
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
  return new Array(4)
    .fill()
    .map((item, index) => <LoadingTodoEffect key={index} />);
};

export default TodoLoading;
