import { TaskDashboard } from "./modules/tasks/components/TaskDashboard";
import { TaskProvider } from "./modules/tasks/contexts/TaskContext";
import { ChakraUIProvider } from "./providers/ChakraUIProvider";

function App() {
  return (
    <ChakraUIProvider>
      <TaskProvider>
        <TaskDashboard />
      </TaskProvider>
    </ChakraUIProvider>
  );
}

export default App;
