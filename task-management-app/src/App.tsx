import { TaskDashboard } from "./modules/tasks/components/TaskDashboard";
import { ChakraUIProvider } from "./providers/ChakraUIProvider";
import { ReduxProvider } from "./providers/ReduxProvider";

function App() {
  return (
    <ChakraUIProvider>
      <ReduxProvider>
        <TaskDashboard />
      </ReduxProvider>
    </ChakraUIProvider>
  );
}

export default App;
