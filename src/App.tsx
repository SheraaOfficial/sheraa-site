
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { ErrorFallback } from "@/components/layout/ErrorFallback";
import { SafeSuspense } from "@/components/layout/SafeSuspense";
import { SectionLoading } from "@/components/layout/SectionLoading";
import Index from "./pages/Index";

// Lazy load pages
const About = lazy(() => import("./pages/about/index"));
const AboutLeadership = lazy(() => import("./pages/about/AboutLeadershipPage"));
const Programs = lazy(() => import("./pages/programs/index"));
const StartYoung = lazy(() => import("./pages/programs/start-young/index"));
const Community = lazy(() => import("./pages/community/index"));
const CommunityMembership = lazy(() => import("./pages/community/membership/index"));
const CommunityStartups = lazy(() => import("./pages/community/startups/index"));
const CommunityPartnerships = lazy(() => import("./pages/community/partnerships/index"));
const MembershipApplication = lazy(() => import("./pages/community/membership/apply"));
const MembershipConfirmation = lazy(() => import("./pages/community/membership/confirmation"));
const SuccessStories = lazy(() => import("./pages/community/membership/success-stories"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const EligibilityPage = lazy(() => import("./pages/EligibilityPage"));
const SEFLanding = lazy(() => import("./pages/events/sef-landing"));
const PerfumeMainPage = lazy(() => import("./pages/perfume/PerfumeMainPage"));
const PerfumeLandingPage = lazy(() => import("./pages/perfume/PerfumeLandingPage"));
const SharjahPerfumeLanding = lazy(() => import("./pages/perfume/SharjahPerfumeLanding"));
const AboutPerfume = lazy(() => import("./pages/perfume/about/index"));
const PerfumeGallery = lazy(() => import("./pages/perfume/gallery/index"));
const PricingPage = lazy(() => import("./pages/perfume/pricing/index"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/about"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <About />
                  </SafeSuspense>
                }
              />
              <Route
                path="/about/leadership"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <AboutLeadership />
                  </SafeSuspense>
                }
              />
              <Route
                path="/programs"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <Programs />
                  </SafeSuspense>
                }
              />
              <Route
                path="/programs/start-young"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <StartYoung />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <Community />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/membership"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <CommunityMembership />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/membership/apply"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <MembershipApplication />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/membership/confirmation"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <MembershipConfirmation />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/membership/success-stories"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <SuccessStories />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/startups"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <CommunityStartups />
                  </SafeSuspense>
                }
              />
              <Route
                path="/community/partnerships"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <CommunityPartnerships />
                  </SafeSuspense>
                }
              />
              <Route
                path="/auth"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <Auth />
                  </SafeSuspense>
                }
              />
              <Route
                path="/profile"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <Profile />
                  </SafeSuspense>
                }
              />
              <Route
                path="/eligibility"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <EligibilityPage />
                  </SafeSuspense>
                }
              />
              <Route
                path="/events/sef"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <SEFLanding />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <PerfumeMainPage />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume/collection"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <PerfumeLandingPage />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume/buy"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <SharjahPerfumeLanding />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume/about"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <AboutPerfume />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume/gallery"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <PerfumeGallery />
                  </SafeSuspense>
                }
              />
              <Route
                path="/perfume/pricing"
                element={
                  <SafeSuspense fallback={<SectionLoading />}>
                    <PricingPage />
                  </SafeSuspense>
                }
              />
            </Routes>
          </ErrorBoundary>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
