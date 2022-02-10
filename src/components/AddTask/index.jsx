import React, { useState } from "react";

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
    <div>
      <input type="text" onChange={handleInputChange} />
      <button type="button" onClick={handleAddTaskClick}>
        Adicionar
      </button>
    </div>
  );
};
