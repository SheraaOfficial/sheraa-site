import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navbarHeight } from "./lib/constants";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { SectionLoading } from "@/components/layout/SectionLoading";

// Existing lazy imports
const Index = lazy(() => import("./pages/Index"));
const NewIndex = lazy(() => import("./pages/NewIndex"));
const AboutPages = lazy(() => import("./pages/about"));
const ProgramsPages = lazy(() => import("./pages/programs"));
const CommunityPages = lazy(() => import("./pages/community"));
const ResourcesPages = lazy(() => import("./pages/resources"));
const EventsPages = lazy(() => import("./pages/events"));
const PerfumePages = lazy(() => import("./pages/perfume"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CareersPage = lazy(() => import("./pages/Careers"));
const EligibilityPage = lazy(() => import("./pages/Eligibility"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPassword"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const ProfileSetupPage = lazy(() => import("./pages/ProfileSetup"));
const FeedPage = lazy(() => import("./pages/Feed"));
const ImpactReport = lazy(() => import("./pages/ImpactReport"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const NotFound = lazy(() => import("./pages/NotFound"));

// New lazy imports for missing pages
const BlogPage = lazy(() => import("./pages/blog"));
const PodcastPage = lazy(() => import("./pages/podcast"));
const ReportsPage = lazy(() => import("./pages/reports"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PerformanceProvider>
        <ThemeProvider>
          <TooltipProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-background font-sans antialiased w-full">
                <ErrorBoundary FallbackComponent={({ error, resetErrorBoundary }) => (
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                      <p className="text-gray-600 mb-4">{error.message}</p>
                      <button 
                        onClick={resetErrorBoundary}
                        className="px-4 py-2 bg-[#165A5A] text-white rounded hover:bg-[#165A5A]/90"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                )}>
                  <main>
                    <Routes>
                      <Route path="/" element={<Suspense fallback={<SectionLoading />}><Index /></Suspense>} />
                      <Route path="/new" element={<Suspense fallback={<SectionLoading />}><NewIndex /></Suspense>} />
                      <Route path="/about/*" element={<Suspense fallback={<SectionLoading />}><AboutPages /></Suspense>} />
                      <Route path="/programs/*" element={<Suspense fallback={<SectionLoading />}><ProgramsPages /></Suspense>} />
                      <Route path="/community/*" element={<Suspense fallback={<SectionLoading />}><CommunityPages /></Suspense>} />
                      <Route path="/resources/*" element={<Suspense fallback={<SectionLoading />}><ResourcesPages /></Suspense>} />
                      <Route path="/events/*" element={<Suspense fallback={<SectionLoading />}><EventsPages /></Suspense>} />
                      <Route path="/perfume/*" element={<Suspense fallback={<SectionLoading />}><PerfumePages /></Suspense>} />
                      <Route path="/contact" element={<Suspense fallback={<SectionLoading />}><ContactPage /></Suspense>} />
                      <Route path="/careers" element={<Suspense fallback={<SectionLoading />}><CareersPage /></Suspense>} />
                      <Route path="/eligibility" element={<Suspense fallback={<SectionLoading />}><EligibilityPage /></Suspense>} />
                      <Route path="/login" element={<Suspense fallback={<SectionLoading />}><LoginPage /></Suspense>} />
                      <Route path="/signup" element={<Suspense fallback={<SectionLoading />}><SignupPage /></Suspense>} />
                      <Route path="/forgot-password" element={<Suspense fallback={<SectionLoading />}><ForgotPasswordPage /></Suspense>} />
                      <Route path="/profile" element={<Suspense fallback={<SectionLoading />}><ProfilePage /></Suspense>} />
                      <Route path="/profile/setup" element={<Suspense fallback={<SectionLoading />}><ProfileSetupPage /></Suspense>} />
                      <Route path="/feed" element={<Suspense fallback={<SectionLoading />}><FeedPage /></Suspense>} />
                      <Route path="/impact-report" element={<Suspense fallback={<SectionLoading />}><ImpactReport /></Suspense>} />
                      <Route path="/privacy-policy" element={<Suspense fallback={<SectionLoading />}><PrivacyPolicy /></Suspense>} />
                      <Route path="/terms-of-use" element={<Suspense fallback={<SectionLoading />}><TermsOfUse /></Suspense>} />
                      
                      {/* New routes */}
                      <Route path="/blog" element={<Suspense fallback={<SectionLoading />}><BlogPage /></Suspense>} />
                      <Route path="/podcast" element={<Suspense fallback={<SectionLoading />}><PodcastPage /></Suspense>} />
                      <Route path="/reports" element={<Suspense fallback={<SectionLoading />}><ReportsPage /></Suspense>} />
                      
                      <Route path="*" element={<Suspense fallback={<SectionLoading />}><NotFound /></Suspense>} />
                    </Routes>
                  </main>
                </ErrorBoundary>
              </div>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </PerformanceProvider>
    </QueryClientProvider>
  );
}

export default App;
