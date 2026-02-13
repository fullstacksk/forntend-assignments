import type { Task } from "../types/tasks";

export type TTaskSummary = {
  PENDING: number;
  IN_PROGRESS: number;
  COMPLETED: number;
};

export function getTaskSummary(tasks: Task[]): TTaskSummary {
  const statusSummary: TTaskSummary = {
    PENDING: 0,
    IN_PROGRESS: 0,
    COMPLETED: 0,
  };
  for (const task of tasks) {
    if (task.status === "PENDING") statusSummary.PENDING++;
    else if (task.status === "IN_PROGRESS") statusSummary.IN_PROGRESS++;
    else if (task.status === "COMPLETED") statusSummary.COMPLETED++;
  }

  return statusSummary;
}
