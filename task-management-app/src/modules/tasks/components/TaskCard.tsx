import { TaskStatusEnum, type Task } from "../types/tasks";
import { Badge, Card, Flex, IconButton, Text } from "@chakra-ui/react";
import { getStatusColor } from "../utils/getStatusColor";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useTaskContext } from "../hooks/useTaskContext";

interface TaskProps {
  task: Task;
  handleTaskEditModelOpen?: () => void;
}

export function TaskCard({ task, handleTaskEditModelOpen }: TaskProps) {
  const { deleteTask } = useTaskContext();
  const handleTaskDelete = (taskId: string) => {
    deleteTask(taskId);
  };

  return (
    <Card.Root key={task.id} display="flex" flexDirection="column" h="250px">
      <Card.Header pb={3}>
        <Card.Title>
          <TaskTitle title={task.title} status={task.status} />
        </Card.Title>
      </Card.Header>
      <Card.Body>{task.description}</Card.Body>
      <Card.Footer
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Badge colorPalette={"red"}>{` Due by ${task.dueDate}`}</Badge>
        <Flex gap={2}>
          <IconButton
            aria-label="Delete task"
            bg="red.500"
            color="white"
            _hover={{ bg: "red.600" }}
            onClick={() => handleTaskDelete(task.id!)}
          >
            <MdDelete />
          </IconButton>

          <IconButton
            aria-label="Edit task"
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            onClick={handleTaskEditModelOpen}
          >
            <MdModeEdit />
          </IconButton>
        </Flex>
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
