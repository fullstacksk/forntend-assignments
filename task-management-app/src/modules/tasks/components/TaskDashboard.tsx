/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { getTaskSummary } from "../utils/taskUtils";
import type { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../store/slices/taskSlice";
import { fakeTasks } from "../../../data";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";

export function TaskDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const taskSummary = getTaskSummary(tasks);
  useEffect(() => {
    dispatch(setTasks(fakeTasks.slice(0, 3)));
  }, []);

  const handleOnOpenChange = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <Flex mb={4} justifyContent="space-between" alignItems="center">
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
      <TaskList tasks={tasks} />
      <AddEditTaskFormModal
        open={isModalOpen}
        onOpenChange={handleOnOpenChange}
        isEditing={false}
      />
    </Box>
  );
}
