
import React from "react";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => (
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);

export default App;
