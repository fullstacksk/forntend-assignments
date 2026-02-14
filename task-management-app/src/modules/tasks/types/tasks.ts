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
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(25, "Title must be at most 25 characters"),
  description: z
    .string()
    .trim()
    .max(100, "Description must be at most 100 characters")
    .optional(),
  status: z.enum(
    ["PENDING", "IN_PROGRESS", "COMPLETED"],
    "Invalid status value",
  ),
  dueDate: z.string().refine(
    (date) => {
      const parsedDate = Date.parse(date);
      return !isNaN(parsedDate);
    },
    { error: "Due date must be a valid date" },
  ),
});

export type Task = z.infer<typeof taskInputSchema>;
