import { Box } from "@chakra-ui/react";
import { TaskList } from "./TaskList";

export function TaskDashboard() {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <h1>Task Management Dashboard</h1>
      <TaskList />
    </Box>
  );
}
