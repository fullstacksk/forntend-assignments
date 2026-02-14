import { Select } from "chakra-react-select";
import { taskStatusOptions } from "../utils/constants";
import { Card } from "@chakra-ui/react";
import type { TaskStatus } from "../types/tasks";

interface TaskStatusFilterProps {
  filterStatus: TaskStatus | undefined;
  setFilterStatus: (status: TaskStatus | undefined) => void;
}

export function TaskStatusFilter({
  filterStatus,
  setFilterStatus,
}: TaskStatusFilterProps) {
  return (
    <Card.Root asChild m={0} p={0} maxH={12}>
      <Card.Body>
        <Select
          isClearable
          options={taskStatusOptions}
          value={taskStatusOptions.find(
            (option) => option.value === filterStatus,
          )}
          onChange={(option) => setFilterStatus(option?.value as TaskStatus)}
          placeholder="Filter by status"
          chakraStyles={{
            control: (provided) => ({
              ...provided,
              minH: "48px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              color: "grey.500",
              backgroundColor: "transparent",
              _hover: {
                color: "black",
                backgroundColor: "yellow.500",
              },
            }),
          }}
        />
      </Card.Body>
    </Card.Root>
  );
}
