import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
} from "@chakra-ui/react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { taskInputSchema, type Task } from "../types/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "chakra-react-select";
import type { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../../store/slices/taskSlice";
import { useEffect } from "react";
import { taskStatusOptions } from "../utils/constants";

interface AddEditTaskFormModalProps {
  open: boolean;
  onOpenChange: () => void;
  isEditing?: boolean;
  task?: Task | null;
}
export function AddEditTaskFormModal({
  open,
  onOpenChange,
  isEditing,
  task,
}: AddEditTaskFormModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Task>({
    resolver: zodResolver(taskInputSchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (task) {
      reset({
        status: task.status,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
      });
    }
  }, [task, reset]);

  const onSubmit: SubmitHandler<Task> = (data) => {
    if (!isEditing) {
      // Handle creating new task
      const task = { ...data, id: crypto.randomUUID() };
      dispatch(addTask(task));
    } else {
      // Handle editing existing task
      dispatch(updateTask({ ...data, id: task?.id }));
    }
    reset();
    onOpenChange();
  };

  const handleShowPicker = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.showPicker?.();
  };

  //   console.log("🚀 ~ file: AddEditTaskFormModal.tsx:11 ~ isEditing:", isEditing);
  return (
    <Dialog.Root
      size="lg"
      placement="center"
      open={open}
      onOpenChange={onOpenChange}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Content color="black" minW="sm" maxW={"sm"}>
              <Dialog.Header>
                <Dialog.Title>
                  {isEditing ? "Edit Task" : "Add Task"}
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body display="flex" flexDir="column" gap={2}>
                <Field.Root invalid={!!errors.title}>
                  <Field.Label>Title</Field.Label>
                  <Input placeholder="New task title" {...register("title")} />
                  <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.description}>
                  <Field.Label>Description</Field.Label>
                  <Input
                    placeholder="Task description"
                    {...register("description")}
                  />
                  <Field.ErrorText>
                    {errors.description?.message}
                  </Field.ErrorText>
                </Field.Root>
                <Field.Root invalid={!!errors.status}>
                  <Field.Label>Status</Field.Label>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={taskStatusOptions}
                        value={taskStatusOptions.find(
                          (option) => option.value === field.value,
                        )}
                        onChange={(option) => field.onChange(option?.value)}
                        onBlur={field.onBlur}
                        placeholder="Select status"
                      />
                    )}
                  />
                  <Field.ErrorText>{errors.status?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.dueDate}>
                  <Field.Label>Due Date</Field.Label>
                  <Input
                    type="date"
                    {...register("dueDate")}
                    onClick={handleShowPicker}
                  />
                  <Field.ErrorText>{errors.dueDate?.message}</Field.ErrorText>
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    minW={"100px"}
                    variant="outline"
                    border={"1px solid black"}
                    bg="white"
                    _hover={{ bg: "black", color: "white" }}
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  type="submit"
                  variant="solid"
                  bg={"blue.600"}
                  color="white"
                  _hover={{ bg: "blue.700" }}
                  minW={"100px"}
                >
                  {isEditing ? "Update " : "Save"}
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  variant="outline"
                  border={"1px solid black"}
                  bg="white"
                  _hover={{ bg: "black", color: "white" }}
                />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </form>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
