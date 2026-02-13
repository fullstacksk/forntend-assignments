import { Badge, Flex } from "@chakra-ui/react";
import type { TTaskSummary } from "../utils/taskUtils";
import { getStatusColor } from "../utils/getStatusColor";
import { TaskStatusEnum, type TaskStatus } from "../types/tasks";

type TaskSummaryProps = {
  taskSummary: TTaskSummary;
};
export function TaskSummary({ taskSummary }: TaskSummaryProps) {
  return (
    <Flex mb={4} gap={4} justifyContent="start">
      {Object.entries(taskSummary).map(([status, count]) => (
        <Badge
          key={status}
          colorPalette={getStatusColor(status as TaskStatus)}
          variant="solid"
          textTransform="capitalize"
          p={4}
          fontSize={"md"}
        >
          {TaskStatusEnum[status as TaskStatus]} ({count})
        </Badge>
      ))}
    </Flex>
  );
}
