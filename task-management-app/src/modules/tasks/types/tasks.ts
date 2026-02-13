export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export const TaskStatusEnum: Record<TaskStatus, string> = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate: string;
}
