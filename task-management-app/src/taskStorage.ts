import type { Task } from "./modules/tasks/types/tasks";

export const taskStorage = {
  loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  },
  saveTasks(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
};
