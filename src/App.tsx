
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { PerformanceProvider } from "./contexts/PerformanceContext";

// Page imports
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ImpactReport from "./pages/ImpactReport";
import AboutPage from "./pages/about";
import ProgramsPage from "./pages/programs";
import ResourcesRouter from "./pages/resources/ResourcesRouter";
import EventsPage from "./pages/events";
import CommunityPage from "./pages/community";
import ContactPage from "./pages/contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import EligibilityCheckerPage from "./pages/eligibility/EligibilityCheckerPage";
import CareersPage from "./pages/careers";

// Programs pages imports
import StartupDojo from "./pages/programs/StartupDojo";
import StartupDojoPlus from "./pages/programs/StartupDojoPlus";
import S3Incubator from "./pages/programs/S3Incubator";
import AccessSharjahChallenge from "./pages/programs/AccessSharjahChallenge";
import SMESupport from "./pages/programs/SMESupport";
import DealDock from "./pages/programs/DealDock"; // New program page

// SEF Page imports
import SEFRegisterPage from "./pages/events/sef/SEFRegisterPage";
import SEFAgendaPage from "./pages/events/sef/SEFAgendaPage";
import SEFSpeakersPage from "./pages/events/sef/SEFSpeakersPage";
import SEFExperiencePage from "./pages/events/sef/SEFExperiencePage";
import SEFWhoShouldAttendPage from "./pages/events/sef/SEFWhoShouldAttendPage";
import SEFBePartPage from "./pages/events/sef/SEFBePartPage";
import SEFFAQPage from "./pages/events/sef/SEFFAQPage";
import SEFLandingPage from "./pages/events/sef-landing";

// Community pages
import FounderPortal from "./pages/community/FounderPortal"; // New founder portal page

// Auth & Profile pages
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ProfileSetupPage from "./pages/profile/ProfileSetupPage";
import FeedPage from "./pages/feed/FeedPage";

// AppLoading component for better UX
const AppLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ErrorFallback component 
const ErrorFallbackComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="mb-4">We're sorry, but there was an error loading the application.</p>
      <button 
        className="bg-primary text-white px-4 py-2 rounded" 
        onClick={() => window.location.reload()}
      >
        Refresh the page
      </button>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  // Preconnect to commonly used domains for performance - moved from AppWrapper
  useEffect(() => {
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (href.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
    
    return () => {
      document.querySelectorAll('link[rel="preconnect"]').forEach(el => el.remove());
    };
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <PerformanceProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <React.Suspense fallback={<AppLoading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  
                  {/* Auth Routes */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/profile-setup" element={<ProfileSetupPage />} />
                  <Route path="/feed" element={<FeedPage />} />
                  
                  {/* About Routes - Consolidated into a single page with anchors */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/about/impact" element={<ImpactReport />} />

                  {/* Programs Routes */}
                  <Route path="/programs" element={<ProgramsPage />} />
                  <Route path="/programs/start-young" element={<ProgramsPage section="start-young" />} />
                  <Route path="/programs/startup-dojo" element={<StartupDojo />} />
                  <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlus />} />
                  <Route path="/programs/grow-smart" element={<ProgramsPage section="grow-smart" />} />
                  <Route path="/programs/s3-incubator" element={<S3Incubator />} />
                  <Route path="/programs/build-ventures" element={<ProgramsPage section="build-ventures" />} />
                  <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallenge />} />
                  <Route path="/programs/deal-dock" element={<DealDock />} /> {/* New Deal Dock route */}
                  <Route path="/programs/sme-support" element={<SMESupport />} />
                  
                  {/* Eligibility Checker Page */}
                  <Route path="/eligibility" element={<EligibilityCheckerPage />} />

                  {/* Resources Routes */}
                  <Route path="/resources" element={<ResourcesRouter />} />
                  <Route path="/resources/guides" element={<ResourcesRouter section="guides" />} />
                  <Route path="/resources/advisory" element={<ResourcesRouter section="advisory" />} />
                  <Route path="/resources/articles" element={<ResourcesRouter section="articles" />} />
                  <Route path="/resources/impact-reports" element={<ResourcesRouter section="impact-reports" />} />

                  {/* Events Routes */}
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/events/sef" element={<EventsPage section="sef" />} />
                  <Route path="/events/sef-landing" element={<SEFLandingPage />} />
                  
                  {/* SEF Sub-pages */}
                  <Route path="/events/sef/agenda" element={<SEFAgendaPage />} />
                  <Route path="/events/sef/speakers" element={<SEFSpeakersPage />} />
                  <Route path="/events/sef/experience" element={<SEFExperiencePage />} />
                  <Route path="/events/sef/who-should-attend" element={<SEFWhoShouldAttendPage />} />
                  <Route path="/events/sef/be-part-of-sef" element={<SEFBePartPage />} />
                  <Route path="/events/sef/register" element={<SEFRegisterPage />} />
                  <Route path="/events/sef/registration" element={<SEFRegisterPage />} />
                  <Route path="/events/sef/faq" element={<SEFFAQPage />} />
                  
                  {/* Events Routes */}
                  <Route path="/events/upcoming" element={<EventsPage section="upcoming" />} />
                  <Route path="/events/news" element={<EventsPage section="news" />} />

                  {/* Community Routes */}
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/community/join" element={<CommunityPage section="join" />} />
                  <Route path="/community/startups" element={<CommunityPage section="startups" />} />
                  <Route path="/community/partnerships" element={<CommunityPage section="partnerships" />} />
                  <Route path="/community/founder-portal" element={<FounderPortal />} /> {/* New founder portal route */}

                  {/* Careers Route */}
                  <Route path="/careers" element={<CareersPage />} />

                  {/* Contact Route */}
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfUse />} />
                  
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </React.Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </PerformanceProvider>
    </ErrorBoundary>
  );
};

export default App;
