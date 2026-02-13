import { Grid, GridItem } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";
import type { Task } from "../types/tasks";

interface TaskListProps {
  tasks: Task[];
}
export function TaskList({ tasks }: TaskListProps) {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mb={4}>
      {tasks.map((task) => (
        <GridItem key={task.id}>
          <TaskCard task={task} />
        </GridItem>
      ))}
    </Grid>
  );
}
