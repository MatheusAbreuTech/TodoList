import React, { useState } from "react";

import "./style.css";

export const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="addTask-container">
      <input
        className="addTask-input"
        type="text"
        value={inputData}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="addTask-button"
        onClick={handleAddTaskClick}>
        Adicionar
      </button>
    </div>
  );
};
