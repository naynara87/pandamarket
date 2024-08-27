import React, { ReactNode } from "react";
import { AuthProvider } from "./contexts/AuthProvider";
import ToasterProvider from "./contexts/ToasterProvider";

// Define the props type for the Providers component
interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ToasterProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToasterProvider>
  );
}

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return <Providers>{children}</Providers>;
}

export default App;
