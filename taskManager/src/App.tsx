console.log("ADD TASK COMPONENT LOADED");

import { useState } from "react";
import AddTask from "./components/AddTask";
import type { Task } from "./types/tasks";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />

      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
    </div>
  );
}