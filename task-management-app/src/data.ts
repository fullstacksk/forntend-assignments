import type { Task } from "./modules/tasks/types/tasks";

export const fakeTasks: Task[] = [
  {
    id: "task_001",
    title: "Implement login API",
    description:
      "Create JWT-based authentication endpoint using Express and TypeORM",
    status: "PENDING",
    dueDate: "2026-02-18",
  },
  {
    id: "task_002",
    title: "Design dashboard layout",
    description: "Create responsive layout using React and Chakra UI",
    status: "IN_PROGRESS",
    dueDate: "2026-02-16",
  },
  {
    id: "task_003",
    title: "Setup PostgreSQL indexes",
    description: "Optimize queries for tasks and users tables",
    status: "PENDING",
    dueDate: "2026-02-20",
  },
  {
    id: "task_004",
    title: "Integrate task filtering",
    description: "Add status filter and due date sorting in task list view",
    status: "COMPLETED",
    dueDate: "2026-02-12",
  },
  {
    id: "task_005",
    title: "Write unit tests for task service",
    description: "Cover create, update, delete, and list operations",
    status: "IN_PROGRESS",
    dueDate: "2026-02-19",
  },
  {
    id: "task_006",
    title: "Configure GCP API Gateway routes",
    description: "Route /tasks endpoints to Cloud Function",
    status: "PENDING",
    dueDate: "2026-02-22",
  },
  {
    id: "task_007",
    title: "Add task validation middleware",
    description: "Validate title and dueDate before hitting controller",
    status: "COMPLETED",
    dueDate: "2026-02-10",
  },
  {
    id: "task_008",
    title: "Implement optimistic UI updates",
    description: "Use react-query mutation updates for better UX",
    status: "PENDING",
    dueDate: "2026-02-21",
  },
  {
    id: "task_009",
    title: "Create task entity migrations",
    description: "Generate and run TypeORM migrations for tasks table",
    status: "COMPLETED",
    dueDate: "2026-02-09",
  },
  {
    id: "task_010",
    title: "Add Gleap feedback widget to dashboard",
    description: "Enable bug reporting directly from task dashboard",
    status: "IN_PROGRESS",
    dueDate: "2026-02-17",
  },
];
