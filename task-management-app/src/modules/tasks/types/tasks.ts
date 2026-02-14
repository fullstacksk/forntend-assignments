import * as z from "zod";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

// Maps TaskStatus values to display labels
export const TaskStatusEnum = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
} as const;

export const taskInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(
    ["PENDING", "IN_PROGRESS", "COMPLETED"],
    "Invalid status value",
  ),
  dueDate: z.string().refine(
    (date) => {
      const parsedDate = Date.parse(date);
      return !isNaN(parsedDate);
    },
    { message: "Due date must be a valid date" },
  ),
});

export type Task = z.infer<typeof taskInputSchema>;
