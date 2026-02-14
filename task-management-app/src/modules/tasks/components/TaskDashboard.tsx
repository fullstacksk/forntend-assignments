import { useMemo, useState } from "react";
import { Box, Flex, Tabs } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import {
  filterTasksByStatus,
  getTaskSummary,
  sortTasksByDueDate,
} from "../utils/taskUtils";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import type { TaskStatus } from "../types/tasks";
import { RiTaskLine } from "react-icons/ri";
import { NoTaskFound } from "./NoTaskFound";
import { GoTasklist } from "react-icons/go";
import { TaskDashboardHeader } from "./TaskDashboardHeader";

export function TaskDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TaskStatus>();
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = useMemo(
    () => filterTasksByStatus(tasks, filterStatus),
    [tasks, filterStatus],
  );
  const filteredAndSortedTasks = useMemo(
    () => sortTasksByDueDate(filteredTasks, isSortedAsc),
    [filteredTasks, isSortedAsc],
  );

  const taskSummary = useMemo(
    () => getTaskSummary(filteredTasks),
    [filteredTasks],
  );

  const handleOnOpenChange = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSortOrderChange = () => {
    setIsSortedAsc((prev) => !prev);
  };

  if (tasks.length === 0) {
    return <NoTaskFound />;
  }
  return (
    <Flex justifyContent="center" bg="blue.100" minHeight="100vh">
      <Box p={4} maxWidth="6xl" w="full">
        <TaskDashboardHeader
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          isSortedAsc={isSortedAsc}
          handleSortOrderChange={handleSortOrderChange}
          handleOnOpenChange={handleOnOpenChange}
          taskSummary={taskSummary}
        />
        <Tabs.Root
          defaultValue="all-tasks"
          variant="line"
          colorPalette={"blue"}
        >
          <Tabs.List borderColor="blue.300">
            <Tabs.Trigger value="all-tasks">
              <GoTasklist />
              All Tasks
            </Tabs.Trigger>
            <Tabs.Trigger value="completed-tasks">
              <RiTaskLine />
              Completed Tasks
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all-tasks">
            <TaskList tasks={filteredAndSortedTasks} />
          </Tabs.Content>
          <Tabs.Content value="completed-tasks">
            <TaskList tasks={filteredAndSortedTasks} showCompleted />
          </Tabs.Content>
        </Tabs.Root>
        <AddEditTaskFormModal
          open={isModalOpen}
          onOpenChange={handleOnOpenChange}
          isEditing={false}
        />
      </Box>
    </Flex>
  );
}
