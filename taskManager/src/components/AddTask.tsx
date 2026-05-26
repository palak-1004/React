import { useState } from "react";
import type { Task } from "../types/tasks";
import type { AddTaskProp } from "../types/AddTaskProp";

export default function AddTask({ onAddTask }: AddTaskProp) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    onAddTask(newTask);

    setTaskName("");
  };

  return (
    <div>
      <h1>Add your task here.</h1>

      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={handleChange}
      />

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
