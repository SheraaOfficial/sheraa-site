import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ScrollToTop from "@/components/utils/ScrollToTop";
import Index from "@/pages/Index";
import ThemePreviewPage from "@/pages/themes/ThemePreviewPage";
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
import S3IncubatorApplicationPage from "@/pages/programs/s3-incubator/S3IncubatorApplicationPage";
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
import CommunityStartupsPage from "@/pages/community/startups/index";
import StartupDirectory from "@/pages/community/StartupDirectory";

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

// Dashboard page
import DashboardPage from "@/pages/dashboard/DashboardPage";

// Blog & Media pages
import BlogPage from "@/pages/blog/index";
import PodcastPage from "@/pages/podcast/index";
import ReportsPage from "@/pages/reports/index";

// Profile & Auth related pages
import ProfilePage from "@/pages/profile/ProfilePage";
import ProfileSetupPage from "@/pages/profile/ProfileSetupPage";

// Other core pages
import Contact from "@/pages/contact/index";
import CareersPage from "@/pages/careers/index";
import EligibilityPage from "@/pages/eligibility/EligibilityCheckerPage";
import ImpactReportPage from "@/pages/impact-report/index";
import StartupsMainPage from "@/pages/startups/StartupsPage";
import CommunityFeedPage from "@/pages/feed/index";
import PrivacyPolicyPage from "@/pages/privacy-policy/index";
import TermsOfUsePage from "@/pages/terms-of-use/index";

// Perfume pages
import PerfumePage from "@/pages/perfume/index";
import PerfumeAboutPage from "@/pages/perfume/about/index";
import PerfumeBuyPage from "@/pages/perfume/buy/index";
import PerfumeGalleryPage from "@/pages/perfume/gallery/index";
import PerfumePricingPage from "@/pages/perfume/pricing/index";

// Program Application Pages
import DealDockApplyPage from "@/pages/programs/deal-dock/DealDockApplyPage";
import DealDockInvestorApplyPage from "@/pages/programs/deal-dock/DealDockInvestorApplyPage";
import StartupDojoApplyPage from "@/pages/programs/startup-dojo/StartupDojoApplyPage";
import AccessSharjahChallengeApplyPage from "@/pages/programs/access-sharjah/AccessSharjahChallengeApplyPage";

// V3 Adult Entrepreneur Persona Pages
import AdultEntrepreneurIndex from "@/pages/v3/AdultEntrepreneurIndex";
import AdultEntrepreneurOp2 from "@/pages/v3/AdultEntrepreneurOp2";
import ProgramMatchPage from "@/pages/v3/ProgramMatchPage";

// V3 Young Entrepreneur Persona Pages
import YoungEntrepreneurIndex from "@/pages/v3/young/YoungEntrepreneurIndex";
import YoungEntrepreneurOp2 from "@/pages/v3/young/YoungEntrepreneurOp2";
import YoungGamifiedDashboard from "@/pages/v3/young/YoungGamifiedDashboard";
import IdeaValidatorPage from "@/pages/v3/young/IdeaValidatorPage";
import FoundersPage from "@/pages/v3/young/FoundersPage";
import ChallengesPage from "@/pages/v3/young/ChallengesPage";
import HubFinderPage from "@/pages/v3/young/HubFinderPage";
import PeerMatchingPage from "@/pages/v3/young/PeerMatchingPage";

// V3 General Entrepreneur Persona Pages
import GeneralEntrepreneurIndex from "@/pages/v3/general/GeneralEntrepreneurIndex";
import GeneralEntrepreneurOp2 from "@/pages/v3/general/GeneralEntrepreneurOp2";

// V3 Ecosystem Hub
import EcosystemHub from "@/pages/v3/EcosystemHub";
import AdvancedEcosystemDashboard from "@/pages/v3/AdvancedEcosystemDashboard";

// V5 Launch Dashboard
import LaunchDashboard from "@/pages/v5/LaunchDashboard";

// V3 Stakeholder Persona Pages
import StakeholdersIndex from "@/pages/v3/stakeholders/StakeholdersIndex";
import StakeholdersOp2 from "@/pages/v3/stakeholders/StakeholdersOp2";

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
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-sheraa-primary text-white rounded hover:bg-sheraa-primary/90"
                >
                  Reload Page
                </button>
              </div>
            </div>
          )}>
            <Index />
          </ErrorBoundary>
        } />
        
        {/* Theme showcase route */}
        <Route path="/themes/preview" element={<ThemePreviewPage />} />
        
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
        
        {/* S3 Incubator Routes */}
        <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
        <Route path="/programs/s3-incubator/apply" element={<S3IncubatorApplicationPage />} />
        
        {/* Startup Dojo Routes */}
        <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
        <Route path="/programs/startup-dojo/apply" element={<StartupDojoApplyPage />} />
        
        {/* Other Program Routes */}
        <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlusPage />} />
        <Route path="/programs/start-young" element={<StartYoungPage />} />
        
        {/* Access Sharjah Challenge Routes */}
        <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallengePage />} />
        <Route path="/programs/access-sharjah-challenge/apply" element={<AccessSharjahChallengeApplyPage />} />
        
        {/* Deal Dock Routes */}
        <Route path="/programs/deal-dock" element={<DealDockPage />} />
        <Route path="/programs/deal-dock/apply" element={<DealDockApplyPage />} />
        <Route path="/programs/deal-dock/investor-apply" element={<DealDockInvestorApplyPage />} />
        
        <Route path="/programs/sme-support" element={<SMESupportPage />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Insights Routes (renamed from Resources) */}
        <Route path="/insights/*" element={<InsightsRouter />} />
        
        {/* Legacy Resources redirects */}
        <Route path="/resources" element={<Navigate to="/insights" replace />} />
        <Route path="/resources/*" element={<Navigate to="/insights" replace />} />
        <Route path="/resources/impact-reports" element={<Navigate to="/insights/impact-reports" replace />} />
        
        {/* Community Routes */}
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/join" element={<MembershipPage />} />
        <Route path="/community/membership" element={<MembershipPage />} />
        <Route path="/community/membership/apply" element={<MembershipApplyPage />} />
        <Route path="/community/membership/confirmation" element={<MembershipConfirmationPage />} />
        <Route path="/community/membership/success-stories" element={<MembershipSuccessStoriesPage />} />
        <Route path="/community/partnerships" element={<PartnershipsPage />} />
        <Route path="/community/startups" element={<StartupDirectory />} />
        <Route path="/startups" element={<StartupsMainPage />} />
        
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
        
        {/* Profile Routes */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/setup" element={<ProfileSetupPage />} />
        
        {/* Content & Media Routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/feed" element={<CommunityFeedPage />} />
        
        {/* Impact Report Route - Added this key route */}
        <Route path="/impact-report" element={<ImpactReportPage />} />
        
        {/* Core Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        
        {/* Perfume Routes - Ensuring all are accessible */}
        <Route path="/perfume" element={<PerfumePage />} />
        <Route path="/perfume/about" element={<PerfumeAboutPage />} />
        <Route path="/perfume/buy" element={<PerfumeBuyPage />} />
        <Route path="/perfume/gallery" element={<PerfumeGalleryPage />} />
        <Route path="/perfume/pricing" element={<PerfumePricingPage />} />
        
        {/* V3 Ecosystem Hub - Intelligent Persona Routing */}
        <Route path="/v3" element={<EcosystemHub />} />
        <Route path="/v3/advanced-dashboard" element={<AdvancedEcosystemDashboard />} />
        <Route path="/v5/launch-dashboard" element={<LaunchDashboard />} />
        
        {/* V3 Adult Entrepreneur Persona Routes */}
        <Route path="/v3/entrepreneurs" element={<AdultEntrepreneurIndex />} />
        <Route path="/v3/entrepreneurs/op2" element={<AdultEntrepreneurOp2 />} />
        <Route path="/v3/program-match" element={<ProgramMatchPage />} />
        
        {/* V3 Young Entrepreneur Persona Routes */}
        <Route path="/v3/young" element={<YoungEntrepreneurIndex />} />
        <Route path="/v3/young/op2" element={<YoungEntrepreneurOp2 />} />
        <Route path="/v3/young/dashboard" element={
          <React.Suspense fallback={<div className="p-8 text-center">Loading Gamified Dashboard...</div>}>
            <YoungGamifiedDashboard />
          </React.Suspense>
        } />
        <Route path="/v3/young/idea-validator" element={<IdeaValidatorPage />} />
        <Route path="/v3/young/founders" element={<FoundersPage />} />
        <Route path="/v3/young/challenges" element={<ChallengesPage />} />
        <Route path="/v3/young/hubs" element={<HubFinderPage />} />
        <Route path="/v3/young/peer-matching" element={<PeerMatchingPage />} />

        {/* V3 General Entrepreneur Persona Routes */}
        <Route path="/v3/general" element={<GeneralEntrepreneurIndex />} />
        <Route path="/v3/general/op2" element={<GeneralEntrepreneurOp2 />} />

        {/* V3 Stakeholder Persona Routes */}
        <Route path="/v3/stakeholders" element={<StakeholdersIndex />} />
        <Route path="/v3/stakeholders/op2" element={<StakeholdersOp2 />} />

        {/* Legacy redirects for backwards compatibility */}
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="/signup" element={<Navigate to="/auth/signup" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/auth/forgot-password" replace />} />
        <Route path="/profile-setup" element={<Navigate to="/profile/setup" replace />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
