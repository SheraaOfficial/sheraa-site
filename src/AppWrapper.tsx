
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

// Import pages
import Index from "@/pages/Index";
import NewIndex from "@/pages/NewIndex";
import ProgramsPage from "@/pages/programs/ProgramsPage";
import DealDockPage from "@/pages/programs/DealDockPage";
import S3IncubatorPage from "@/pages/programs/S3IncubatorPage";
import StartupDojoPage from "@/pages/programs/StartupDojoPage";
import AccessSharjahChallengePage from "@/pages/programs/AccessSharjahChallengePage";
import SEFLandingPage from "@/pages/events/sef-landing";
import EligibilityCheckerPage from "@/pages/eligibility/EligibilityCheckerPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import AboutPage from "@/pages/about";
import EventsPage from "@/pages/events";
import ContactPage from "@/pages/contact";
import ResourcesRouter from "@/pages/resources/ResourcesRouter";
import CommunityPage from "@/pages/community";
import JoinPage from "@/pages/community/JoinPage";
import PartnershipsPage from "@/pages/community/PartnershipsPage";
import CareersPage from "@/pages/careers";
import SharjahPerfumeLanding from "@/pages/perfume/SharjahPerfumeLanding";

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
                      {/* Use the new redesigned homepage */}
                      <Route path="/" element={<NewIndex />} />
                      <Route path="/old" element={<Index />} />
                      
                      {/* About Page */}
                      <Route path="/about" element={<AboutPage />} />
                      
                      {/* Programs Routes */}
                      <Route path="/programs" element={<ProgramsPage />} />
                      <Route path="/programs/deal-dock" element={<DealDockPage />} />
                      <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
                      <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
                      <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallengePage />} />
                      
                      {/* Resources Routes */}
                      <Route path="/resources" element={<ResourcesRouter />} />
                      <Route path="/resources/:section" element={<ResourcesRouter />} />
                      
                      {/* Community Routes */}
                      <Route path="/community" element={<CommunityPage />} />
                      <Route path="/community/join" element={<JoinPage />} />
                      <Route path="/community/partnerships" element={<PartnershipsPage />} />
                      
                      {/* Events Routes */}
                      <Route path="/events" element={<EventsPage />} />
                      <Route path="/events/sef-landing" element={<SEFLandingPage />} />
                      
                      {/* Contact Page */}
                      <Route path="/contact" element={<ContactPage />} />
                      
                      {/* Careers Page */}
                      <Route path="/careers" element={<CareersPage />} />
                      
                      {/* Other Routes */}
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
                      <Route path="/perfume/sharjah-premium" element={<SharjahPerfumeLanding />} />
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
