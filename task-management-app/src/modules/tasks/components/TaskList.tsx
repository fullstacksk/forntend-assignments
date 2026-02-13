import { Grid, GridItem } from "@chakra-ui/react";
import { fakeTasks } from "../../../data";
import { TaskCard } from "./TaskCard";
export function TaskList() {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mb={4}>
      {fakeTasks.map((task) => (
        <GridItem key={task.id}>
          <TaskCard task={task} />
        </GridItem>
      ))}
    </Grid>
  );
}
