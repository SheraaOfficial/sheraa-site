
import React from "react";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

console.log('App.tsx - React imported:', !!React);

const App: React.FC = () => {
  console.log('App component rendering');
  
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
