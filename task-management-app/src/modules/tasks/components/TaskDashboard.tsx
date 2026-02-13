import { Box } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { getTaskSummary } from "../utils/taskUtils";
import { fakeTasks } from "../../../data";

export function TaskDashboard() {
  const taskSummary = getTaskSummary(fakeTasks);
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <TaskSummary taskSummary={taskSummary} />
      <TaskList tasks={fakeTasks} />
    </Box>
  );
}
