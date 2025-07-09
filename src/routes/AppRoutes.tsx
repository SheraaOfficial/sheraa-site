import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ScrollToTop from "@/components/utils/ScrollToTop";
import { SimpleHomepage } from "@/components/homepage/SimpleHomepage";
import ThemePreviewPage from "@/pages/themes/ThemePreviewPage";
import NotFound from "@/pages/NotFound";
import { ErrorFallback } from "@/components/layout/ErrorFallback";

// Route imports
import { AboutRoutes } from "./AboutRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { ProgramsRoutes } from "./ProgramsRoutes";
import { CommunityRoutes } from "./CommunityRoutes";
import { EventsRoutes } from "./EventsRoutes";
import { V3Routes } from "./V3Routes";
import { CoreRoutes } from "./CoreRoutes";
import Home2 from "@/pages/Home2";

const AppRoutes: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ScrollToTop />
      <Routes>
        {/* Homepage - Emergency simple fallback */}
        <Route path="/" element={<SimpleHomepage />} />
        
        {/* Test Homepage - Stable alternative */}
        <Route path="/home2" element={<Home2 />} />
        
        {/* Theme showcase route */}
        <Route path="/themes/preview" element={<ThemePreviewPage />} />
        
        {/* Route groups */}
        <AboutRoutes />
        <AuthRoutes />
        <ProgramsRoutes />
        <CommunityRoutes />
        <EventsRoutes />
        <V3Routes />
        <CoreRoutes />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
