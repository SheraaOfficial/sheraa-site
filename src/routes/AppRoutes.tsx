import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import NewIndex from "@/pages/NewIndex";
import NotFound from "@/pages/NotFound";

// About pages
import About from "@/pages/about/index";
import AboutLeadershipPage from "@/pages/about/AboutLeadershipPage";
import AboutBoardPage from "@/pages/about/AboutBoardPage";

// Auth pages
import AuthPage from "@/pages/auth/AuthPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";

// Programs pages
import ProgramsPage from "@/pages/programs/index";
import S3IncubatorPage from "@/pages/programs/S3IncubatorPage";
import StartupDojoPage from "@/pages/programs/StartupDojoPage";
import StartupDojoPlusPage from "@/pages/programs/startup-dojo-plus/index";
import StartYoungPage from "@/pages/programs/start-young/index";
import AccessSharjahChallengePage from "@/pages/programs/AccessSharjahChallengePage";
import DealDockPage from "@/pages/programs/DealDockPage";
import SMESupportPage from "@/pages/programs/SMESupportPage";

// Insights pages (renamed from Resources)
import InsightsRouter from "@/pages/insights/InsightsRouter";

// Community pages
import CommunityPage from "@/pages/community/index";
import MembershipPage from "@/pages/community/membership/index";
import MembershipApplyPage from "@/pages/community/membership/apply";
import MembershipConfirmationPage from "@/pages/community/membership/confirmation";
import MembershipSuccessStoriesPage from "@/pages/community/membership/success-stories";
import PartnershipsPage from "@/pages/community/partnerships/index";
import StartupsPage from "@/pages/community/startups/index";

// Events pages
import EventsPage from "@/pages/events/index";
import UpcomingEventsPage from "@/pages/events/UpcomingEventsPage";
import PastEventsPage from "@/pages/events/PastEventsPage";
import SEFLandingPage from "@/pages/events/sef-landing";
import SEFAgendaPage from "@/pages/events/sef/SEFAgendaPage";
import SEFSpeakersPage from "@/pages/events/sef/SEFSpeakersPage";
import SEFExperiencePage from "@/pages/events/sef/SEFExperiencePage";
import SEFRegisterPage from "@/pages/events/sef/SEFRegisterPage";
import SEFBePartPage from "@/pages/events/sef/SEFBePartPage";
import SEFWhoShouldAttendPage from "@/pages/events/sef/SEFWhoShouldAttendPage";
import SEFFAQPage from "@/pages/events/sef/SEFFAQPage";

// Other pages
import Contact from "@/pages/contact/index";
import CareersPage from "@/pages/careers/index";
import EligibilityPage from "@/pages/eligibility/EligibilityCheckerPage";
import ImpactReport from "@/pages/ImpactReport";
import ProfilePage from "@/pages/profile/ProfilePage";
import ProfileSetupPage from "@/pages/profile/ProfileSetupPage";
import BlogPage from "@/pages/blog/index";
import PodcastPage from "@/pages/podcast/index";
import ReportsPage from "@/pages/reports/index";
import CommunityFeedPage from "@/pages/feed/index";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";

// Perfume pages
import PerfumePage from "@/pages/perfume/index";
import PerfumeAboutPage from "@/pages/perfume/about/index";
import PerfumeBuyPage from "@/pages/perfume/buy/index";
import PerfumeGalleryPage from "@/pages/perfume/gallery/index";
import PerfumePricingPage from "@/pages/perfume/pricing/index";

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Route Error</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={() => window.location.href = '/'} 
        className="px-4 py-2 bg-sheraa-primary text-white rounded hover:bg-sheraa-primary/90"
      >
        Go Home
      </button>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<NewIndex />} />
        
        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/leadership" element={<AboutLeadershipPage />} />
        <Route path="/about/board" element={<AboutBoardPage />} />
        
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Programs Routes */}
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
        <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
        <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlusPage />} />
        <Route path="/programs/start-young" element={<StartYoungPage />} />
        <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallengePage />} />
        <Route path="/programs/deal-dock" element={<DealDockPage />} />
        <Route path="/programs/sme-support" element={<SMESupportPage />} />
        
        {/* Insights Routes (renamed from Resources) */}
        <Route path="/insights/*" element={<InsightsRouter />} />
        
        {/* Legacy Resources redirects */}
        <Route path="/resources" element={<Navigate to="/insights" replace />} />
        <Route path="/resources/*" element={<Navigate to="/insights" replace />} />
        
        {/* Community Routes */}
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/join" element={<MembershipPage />} />
        <Route path="/community/membership" element={<MembershipPage />} />
        <Route path="/community/membership/apply" element={<MembershipApplyPage />} />
        <Route path="/community/membership/confirmation" element={<MembershipConfirmationPage />} />
        <Route path="/community/membership/success-stories" element={<MembershipSuccessStoriesPage />} />
        <Route path="/community/partnerships" element={<PartnershipsPage />} />
        <Route path="/community/startups" element={<StartupsPage />} />
        
        {/* Events Routes */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/upcoming" element={<UpcomingEventsPage />} />
        <Route path="/events/past" element={<PastEventsPage />} />
        <Route path="/events/sef-landing" element={<SEFLandingPage />} />
        <Route path="/events/sef" element={<SEFLandingPage />} />
        <Route path="/events/sef/agenda" element={<SEFAgendaPage />} />
        <Route path="/events/sef/speakers" element={<SEFSpeakersPage />} />
        <Route path="/events/sef/experience" element={<SEFExperiencePage />} />
        <Route path="/events/sef/register" element={<SEFRegisterPage />} />
        <Route path="/events/sef/be-part" element={<SEFBePartPage />} />
        <Route path="/events/sef/who-should-attend" element={<SEFWhoShouldAttendPage />} />
        <Route path="/events/sef/faq" element={<SEFFAQPage />} />
        
        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/impact-report" element={<ImpactReport />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/setup" element={<ProfileSetupPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/feed" element={<CommunityFeedPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
        
        {/* Perfume Routes */}
        <Route path="/perfume" element={<PerfumePage />} />
        <Route path="/perfume/about" element={<PerfumeAboutPage />} />
        <Route path="/perfume/buy" element={<PerfumeBuyPage />} />
        <Route path="/perfume/gallery" element={<PerfumeGalleryPage />} />
        <Route path="/perfume/pricing" element={<PerfumePricingPage />} />
        
        {/* Legacy redirects */}
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="/signup" element={<Navigate to="/auth/signup" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/auth/forgot-password" replace />} />
        <Route path="/profile-setup" element={<Navigate to="/profile/setup" replace />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
