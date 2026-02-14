import { Grid, GridItem, Text } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";
import type { Task } from "../types/tasks";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { useState } from "react";

interface TaskListProps {
  tasks: Task[];
  showCompleted?: boolean;
}
export function TaskList({ tasks, showCompleted = false }: TaskListProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.status === "COMPLETED")
    : tasks;

  const handleOpenChange = (task: Task) => {
    setEditingTask(task);
  };

  if (filteredTasks.length === 0) {
    return (
      <Text fontSize="lg" textAlign="center" mt={10}>
        No relevant tasks found.
      </Text>
    );
  }

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        mb={4}
      >
        {filteredTasks.map((task) => (
          <GridItem key={task.id}>
            <TaskCard
              task={task}
              handleTaskEditModelOpen={() => handleOpenChange(task)}
            />
          </GridItem>
        ))}
      </Grid>
      <AddEditTaskFormModal
        open={!!editingTask}
        onOpenChange={() => setEditingTask(null)}
        isEditing
        task={editingTask}
      />
    </>
  );
}
