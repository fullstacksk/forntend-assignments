import { Grid, GridItem } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";
import type { Task } from "../types/tasks";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { useState } from "react";

interface TaskListProps {
  tasks: Task[];
}
export function TaskList({ tasks }: TaskListProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleOpenChange = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mb={4}>
        {tasks.map((task) => (
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
