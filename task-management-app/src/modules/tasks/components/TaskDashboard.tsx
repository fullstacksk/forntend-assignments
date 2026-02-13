/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { getTaskSummary } from "../utils/taskUtils";
import type { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../store/slices/taskSlice";
import { fakeTasks } from "../../../data";

export function TaskDashboard() {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const taskSummary = getTaskSummary(tasks);
  useEffect(() => {
    dispatch({ type: setTasks.type, payload: fakeTasks });
  }, []);
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <TaskSummary taskSummary={taskSummary} />
      <TaskList tasks={tasks} />
    </Box>
  );
}
