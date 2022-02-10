import React from "react";

export const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};
