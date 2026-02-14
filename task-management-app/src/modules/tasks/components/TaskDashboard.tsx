import { useMemo, useState } from "react";
import { Box, Button, Flex, Tabs } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import {
  filterTasksByStatus,
  getTaskSummary,
  sortTasksByDueDate,
} from "../utils/taskUtils";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { TaskStatusFilter } from "./TaskStatusFilter";
import type { TaskStatus } from "../types/tasks";
import { RiSortAsc, RiSortDesc, RiTaskLine } from "react-icons/ri";
import { NoTaskFound } from "./NoTaskFound";
import { GoTasklist } from "react-icons/go";

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
        <Flex
          mb={4}
          borderRadius="md"
          gap={2}
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            base: "stretch",
            md: "center",
          }}
          justify={{
            base: "center",
            md: "center",
          }}
        >
          <Flex gap={2} flexGrow={1}>
            <TaskStatusFilter
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
            <Button
              bg="blue.600"
              color="white"
              _hover={{ bg: "blue.700" }}
              size="xl"
              onClick={handleSortOrderChange}
            >
              Due Date {isSortedAsc ? <RiSortAsc /> : <RiSortDesc />}
            </Button>
          </Flex>
          <TaskSummary taskSummary={taskSummary} />
          <Button
            position={{ base: "fixed", lg: "static" }}
            bottom={{ base: "24px", lg: "auto" }}
            right={{ base: "24px", lg: "auto" }}
            zIndex={1000}
            shadow={{ base: "lg", lg: "none" }}
            borderRadius={{ base: "full", lg: "md" }}
            px={{ base: 6, lg: 4 }}
            bg="blue.600"
            color="white"
            _hover={{ bg: "blue.700" }}
            size={{ base: "lg", lg: "xl" }}
            onClick={handleOnOpenChange}
          >
            + Add Task
          </Button>
        </Flex>
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
