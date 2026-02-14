import { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import {
  filterTasksByStatus,
  getTaskSummary,
  sortTasksByDueDate,
} from "../utils/taskUtils";
import type { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../store/slices/taskSlice";
import { fakeTasks } from "../../../data";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { TaskStatusFilter } from "./TaskStatusFilter";
import type { TaskStatus } from "../types/tasks";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";

export function TaskDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TaskStatus>();
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = filterTasksByStatus(tasks, filterStatus);
  const filteredAndSortedTasks = sortTasksByDueDate(filteredTasks, isSortedAsc);
  const taskSummary = getTaskSummary(filteredAndSortedTasks);

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    dispatch(setTasks(fakeTasks.slice(0, 5)));
  }, []);

  const handleOnOpenChange = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSortOrderChange = () => {
    setIsSortedAsc((prev) => !prev);
  };

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
        <TaskList tasks={filteredAndSortedTasks} />
        <AddEditTaskFormModal
          open={isModalOpen}
          onOpenChange={handleOnOpenChange}
          isEditing={false}
        />
      </Box>
    </Flex>
  );
}
