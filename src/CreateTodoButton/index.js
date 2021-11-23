import React from "react";

import "./CreateTodoButton.css";

const CreateButton = ({ openModal, setOpenModal }) => {
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};

export default CreateButton;
