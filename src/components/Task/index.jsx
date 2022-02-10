import React from "react";

import "./style.css";

export const Task = ({ task, handleTaskRemove, handleTaskClick }) => {
  const completed = task.completed ? "completed" : "";
  return (
    <div key={task.id} className={`task-container ${completed}`}>
      <h4
        className={`task-title ${completed}`}
        onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </h4>
      <button className="task-button" onClick={() => handleTaskRemove(task.id)}>
        x
      </button>
    </div>
  );
};
