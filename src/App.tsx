
import { StrictMode } from "react";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

console.log('App.tsx loaded');

const App = () => {
  console.log('App component rendering');
  
  return (
    <StrictMode>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </StrictMode>
  );
};

export default App;
