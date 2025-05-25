
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MotionProvider } from "@/components/ui/design-system/MotionProvider";
import { ResponsiveProvider } from "@/components/ui/design-system/ResponsiveProvider";
import { AccessibilityProvider } from "@/components/ui/design-system/AccessibilityProvider";
import { OptimizedMobileLayout } from "@/components/layouts/OptimizedMobileLayout";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import Index from "@/pages/Index";
import SEFLandingPage from "@/pages/events/sef-landing";
import EligibilityCheckerPage from "@/pages/eligibility/EligibilityCheckerPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";

// Lazy load the perfume page for better performance
const PerfumeMainPage = React.lazy(() => import("@/pages/perfume/PerfumeMainPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PerformanceProvider>
          <AccessibilityProvider>
            <ResponsiveProvider>
              <MotionProvider>
                <OptimizedMobileLayout>
                  <Router>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/sef-landing" element={<SEFLandingPage />} />
                      <Route path="/eligibility" element={<EligibilityCheckerPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      
                      {/* Perfume Section Routes */}
                      <Route 
                        path="/perfume" 
                        element={
                          <React.Suspense fallback={
                            <div className="min-h-screen flex items-center justify-center">
                              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sheraa-primary"></div>
                            </div>
                          }>
                            <PerfumeMainPage />
                          </React.Suspense>
                        } 
                      />
                    </Routes>
                    <Toaster />
                  </Router>
                </OptimizedMobileLayout>
              </MotionProvider>
            </ResponsiveProvider>
          </AccessibilityProvider>
        </PerformanceProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
