import { TaskStatusEnum, type Task } from "../types/tasks";
import { Badge, Card, Flex, Text } from "@chakra-ui/react";
import { getStatusColor } from "../utils/getStatusColor";

interface TaskProps {
  task: Task;
}

export function TaskCard({ task }: TaskProps) {
  return (
    <Card.Root key={task.id} display="flex" flexDirection="column" h="250px">
      <Card.Header pb={3}>
        <Card.Title>
          <TaskTitle title={task.title} status={task.status} />
        </Card.Title>
      </Card.Header>
      <Card.Body>{task.description}</Card.Body>
      <Card.Footer>
        <Badge colorPalette={"red"}>{` Due by ${task.dueDate}`}</Badge>
      </Card.Footer>
    </Card.Root>
  );
}

type TaskTitleProps = Pick<Task, "title" | "status">;

function TaskTitle({ title, status }: TaskTitleProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between" gap={2}>
      <Text fontWeight="bold" fontSize="lg" maxLines={1}>
        {title}
      </Text>
      <Badge colorPalette={getStatusColor(status)}>
        {TaskStatusEnum[status]}
      </Badge>
    </Flex>
  );
}
