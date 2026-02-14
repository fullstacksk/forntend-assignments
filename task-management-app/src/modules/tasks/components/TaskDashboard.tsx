/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { filterTasksByStatus, getTaskSummary } from "../utils/taskUtils";
import type { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../store/slices/taskSlice";
import { fakeTasks } from "../../../data";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { TaskStatusFilter } from "./TaskStatusFilter";
import type { TaskStatus } from "../types/tasks";

export function TaskDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TaskStatus>();

  const dispatch = useDispatch<AppDispatch>();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = filterTasksByStatus(tasks, filterStatus);
  const taskSummary = getTaskSummary(filteredTasks);

  useEffect(() => {
    dispatch(setTasks(fakeTasks.slice(0, 3)));
  }, []);

  const handleOnOpenChange = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <Box w="1200px" p={4}>
      <Flex mb={4} justifyContent="space-between" borderRadius="md" gap={2}>
        <TaskStatusFilter
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <TaskSummary taskSummary={taskSummary} />
        <Button
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.700" }}
          size="xl"
          onClick={handleOnOpenChange}
        >
          + Add Task
        </Button>
      </Flex>
      <TaskList tasks={filteredTasks} />
      <AddEditTaskFormModal
        open={isModalOpen}
        onOpenChange={handleOnOpenChange}
        isEditing={false}
      />
    </Box>
  );
}
