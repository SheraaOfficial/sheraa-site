
import * as React from "react";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

console.log('App.tsx loaded');

const App = () => {
  console.log('App component rendering');
  
  // Add React validation
  if (!React) {
    console.error('React not available in App');
    return <div>Error: React not loaded</div>;
  }
  
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
