import type { TaskStatus } from "../types/tasks";

export function getStatusColor(status: TaskStatus) {
  switch (status) {
    case "PENDING":
      return "yellow";
    case "IN_PROGRESS":
      return "blue";
    case "COMPLETED":
      return "green";
    default:
      return "gray";
  }
}
