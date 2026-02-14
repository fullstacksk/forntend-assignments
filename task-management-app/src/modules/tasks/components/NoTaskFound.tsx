import { Button, Flex, Text } from "@chakra-ui/react";
import { AddEditTaskFormModal } from "./AddEditTaskFormModal";
import { useState } from "react";

export function NoTaskFound() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnOpenChange = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="blue.100"
      minHeight="100vh"
      gap={4}
    >
      <Text fontSize="xl" textAlign="center" mt={10}>
        No tasks found. Please add your first task to get started!
      </Text>
      <Button onClick={handleOnOpenChange}>+ Add Task</Button>

      <AddEditTaskFormModal
        open={isModalOpen}
        onOpenChange={handleOnOpenChange}
        isEditing={false}
      />
    </Flex>
  );
}
