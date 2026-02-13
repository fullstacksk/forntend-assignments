import "./App.css";
import { TaskDashboard } from "./modules/tasks/components/TaskDashboard";
import { ChakraUIProvider } from "./providers/ChakraUiProvider";
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
