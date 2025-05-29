
import React from "react";
import { Routes, Route } from "react-router-dom";
import NewIndex from "@/pages/NewIndex";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NewIndex />} />
      {/* Add other routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
