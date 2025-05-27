
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => (
  <BrowserRouter>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </BrowserRouter>
);

export default App;
