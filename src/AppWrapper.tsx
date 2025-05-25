import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MotionProvider } from "@/components/ui/design-system/MotionProvider";
import { ResponsiveProvider } from "@/components/ui/design-system/ResponsiveProvider";
import { OptimizedMobileLayout } from "@/components/layouts/OptimizedMobileLayout";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import Index from "@/pages/Index";
import SEFHomePage from "@/pages/SEFHomePage";
import EligibilityPage from "@/pages/EligibilityPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";

// Lazy load the new perfume page
const PerfumeMainPage = React.lazy(() => import("@/pages/perfume/PerfumeMainPage"));

const queryClient = new QueryClient();

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PerformanceProvider>
          <ResponsiveProvider>
            <MotionProvider>
              <OptimizedMobileLayout>
                <Router>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/sef-landing" element={<SEFHomePage />} />
                    <Route path="/eligibility" element={<EligibilityPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    
                    {/* Perfume Section Routes */}
                    <Route path="/perfume" element={<PerfumeMainPage />} />
                  </Routes>
                  <Toaster />
                </Router>
              </OptimizedMobileLayout>
            </MotionProvider>
          </ResponsiveProvider>
        </PerformanceProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
