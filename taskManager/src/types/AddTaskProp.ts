import type { Task } from "./tasks";

export type AddTaskProp = {
  onAddTask: (task: Task) => void;
};