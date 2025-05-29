
import React from "react";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

console.log('App.tsx loaded');
console.log('React in App:', !!React);

const App = () => {
  console.log('App component rendering');
  console.log('React hooks available in App:', !!React.useState);
  
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
