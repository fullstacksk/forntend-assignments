import { ChakraProvider as Provider, defaultSystem } from "@chakra-ui/react";

interface ChakraProviderProps {
  children: React.ReactNode;
}

export function ChakraUIProvider({ children }: ChakraProviderProps) {
  return <Provider value={defaultSystem}>{children}</Provider>;
}
