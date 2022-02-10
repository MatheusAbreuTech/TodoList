import React, { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar javascript",
      completed: true,
    },
  ]);

  const handleTaskAddition = (task) => {
    const newTask = [
      ...tasks,
      {
        id: Math.random(),
        title: task,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
