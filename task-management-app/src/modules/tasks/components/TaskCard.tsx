import { TaskStatusEnum, type Task } from "../types/tasks";
import { Badge, Card, Flex } from "@chakra-ui/react";

interface TaskProps {
  task: Task;
}

export function TaskCard({ task }: TaskProps) {
  return (
    <Card.Root
      key={task.id}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={4}
    >
      <Card.Header>
        <Card.Title>
          <Flex alignItems="center" justifyContent="space-between">
            {task.title}
            <Badge colorScheme="blue">{TaskStatusEnum[task.status]}</Badge>
          </Flex>
        </Card.Title>
      </Card.Header>
      <Card.Body>{task.description}</Card.Body>
      <Card.Footer>{` Due: ${task.dueDate}`}</Card.Footer>
    </Card.Root>
  );
}
