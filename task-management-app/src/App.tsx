import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "./App.css";
import { TaskDashboard } from "./modules/tasks/components/TaskDashboard";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <TaskDashboard />
    </ChakraProvider>
  );
}

export default App;
