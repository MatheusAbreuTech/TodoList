import React, { useEffect, useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

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

    localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskRemove={handleTaskRemove}
          handleTaskClick={handleTaskClick}
        />
      </div>
    </>
  );
};
