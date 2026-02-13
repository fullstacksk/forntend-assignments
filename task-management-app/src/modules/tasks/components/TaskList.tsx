import { fakeTasks } from "../../../data";
import { TaskCard } from "./TaskCard";
export function TaskList() {
  return (
    <div>
      {fakeTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
