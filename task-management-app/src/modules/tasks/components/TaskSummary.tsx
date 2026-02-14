import { Box, Flex, Text } from "@chakra-ui/react";
import type { TTaskSummary } from "../utils/taskUtils";
import { getStatusColor } from "../utils/getStatusColor";
import { TaskStatusEnum, type TaskStatus } from "../types/tasks";

type TaskSummaryProps = {
  taskSummary: TTaskSummary;
};

export function TaskSummary({ taskSummary }: TaskSummaryProps) {
  return (
    <Flex
      gap={{ base: 2, lg: 3 }}
      px={3}
      py={2}
      borderRadius="md"
      bg="gray.50"
      align="center"
      wrap="wrap"
    >
      {Object.entries(taskSummary).map(([status, count]) => {
        const palette = getStatusColor(status as TaskStatus);

        return (
          <Flex
            key={status}
            align="center"
            gap={2}
            px={{ base: 1.5, lg: 3 }}
            py={1.5}
            borderRadius="full"
            bg={`${palette}.200`}
          >
            <Box w="8px" h="8px" borderRadius="full" bg={`${palette}.500`} />

            <Text fontSize="sm" fontWeight="medium">
              {TaskStatusEnum[status as TaskStatus]}
            </Text>

            <Text
              fontSize="sm"
              fontWeight="bold"
              minW={3}
              color={`${palette}.600`}
            >
              {count}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
