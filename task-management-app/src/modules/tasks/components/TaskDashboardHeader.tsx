import { Button, Flex } from "@chakra-ui/react";
import { TaskStatusFilter } from "./TaskStatusFilter";
import { TaskSummary } from "./TaskSummary";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import type { TaskStatus } from "../types/tasks";
import type { TTaskSummary } from "../utils/taskUtils";
import type { Dispatch, SetStateAction } from "react";

interface TaskDashboardHeaderProps {
  filterStatus: TaskStatus | undefined;
  setFilterStatus: Dispatch<SetStateAction<TaskStatus | undefined>>;
  isSortedAsc: boolean;
  handleSortOrderChange: () => void;
  handleOnOpenChange: () => void;
  taskSummary: TTaskSummary;
}
export function TaskDashboardHeader({
  filterStatus,
  setFilterStatus,
  isSortedAsc,
  handleSortOrderChange,
  handleOnOpenChange,
  taskSummary,
}: TaskDashboardHeaderProps) {
  return (
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
  );
}
