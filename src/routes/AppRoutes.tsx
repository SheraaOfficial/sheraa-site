import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ScrollToTop from "@/components/utils/ScrollToTop";
import { ThemeAwareHomepage } from "@/components/homepage/ThemeAwareHomepage";
import { SafeThemeAwareHomepage } from "@/components/homepage/SafeThemeAwareHomepage";
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

const AppRoutes: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={
          <ErrorBoundary FallbackComponent={({ error, resetErrorBoundary }) => (
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center p-8">
                <h2 className="text-xl font-bold mb-3">Loading Error</h2>
                <p className="text-muted-foreground mb-4 text-sm">
                  Error: {error.message}
                </p>
                <SafeThemeAwareHomepage />
              </div>
            </div>
          )}>
            <ThemeAwareHomepage />
          </ErrorBoundary>
        } />
        
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
