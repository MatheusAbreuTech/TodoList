import React from "react";
import { Task } from "../Task";

export const Tasks = ({ tasks, handleTaskRemove, handleTaskClick }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskRemove={handleTaskRemove}
          handleTaskClick={handleTaskClick}
        />
      ))}
    </div>
  );
};
