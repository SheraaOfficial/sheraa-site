import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from "@/components/utils/ScrollToTop";
import Index from './pages/Index';
import NewIndex from './pages/NewIndex';
import ProgramsPage from './pages/programs/ProgramsPage';
import StartYoungPage from './pages/programs/StartYoungPage';
import EventsPage from './pages/events/EventsPage';

// Main Pages
import AboutPage from '@/pages/about/index';
import ProgramsPage from '@/pages/programs/index';
import ResourcesRouter from '@/pages/resources/ResourcesRouter';
import EventsPage from '@/pages/events/index';
import SEFLandingPage from '@/pages/events/sef-landing';
import CommunityPage from '@/pages/community/index';
import ContactPage from '@/pages/contact/index';

// Auth Pages
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignupPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';

// Program Pages
import StartupDojo from '@/pages/programs/StartupDojo';
import StartupDojoPlus from '@/pages/programs/StartupDojoPlus';
import S3Incubator from '@/pages/programs/S3Incubator';
import AccessSharjahChallenge from '@/pages/programs/AccessSharjahChallenge';
import DealDock from '@/pages/programs/DealDock';
import SMESupport from '@/pages/programs/SMESupport';

// Legal Pages
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';

// SEF Pages
import SEFAgendaPage from '@/pages/events/sef/SEFAgendaPage';
import SEFSpeakersPage from '@/pages/events/sef/SEFSpeakersPage';
import SEFExperiencePage from '@/pages/events/sef/SEFExperiencePage';
import SEFRegisterPage from '@/pages/events/sef/SEFRegisterPage';
import SEFBePartPage from '@/pages/events/sef/SEFBePartPage';
import SEFFAQPage from '@/pages/events/sef/SEFFAQPage';
import SEFWhoShouldAttendPage from '@/pages/events/sef/SEFWhoShouldAttendPage';

// Community Pages
import StartupDirectory from '@/pages/community/StartupDirectory';
import MembershipSection from '@/pages/community/MembershipSection';
import PartnershipsSection from '@/pages/community/PartnershipsSection';
import FounderPortal from '@/pages/community/FounderPortal';

// User Pages
import ProfilePage from '@/pages/profile/ProfilePage';
import ProfileSetupPage from '@/pages/profile/ProfileSetupPage';
import FeedPage from '@/pages/feed/FeedPage';

// Other Pages
import NotFound from '@/pages/NotFound';
import ImpactReport from '@/pages/ImpactReport';
import EligibilityCheckerPage from '@/pages/eligibility/EligibilityCheckerPage';
import CareersPage from '@/pages/careers/CareersPage';

// Perfume Pages
import PerfumePage from '@/pages/perfume/index';
import AboutPerfumePage from '@/pages/perfume/about/index';
import PerfumeGalleryPage from '@/pages/perfume/gallery/index';
import PricingPage from '@/pages/perfume/pricing/index';
import BuyPage from '@/pages/perfume/buy/index';

export const programRoutes = [
  { path: "/programs/startup-dojo", element: <StartupDojo /> },
  { path: "/programs/startup-dojo-plus", element: <StartupDojoPlus /> },
  { path: "/programs/s3-incubator", element: <S3Incubator /> },
  { path: "/programs/access-sharjah-challenge", element: <AccessSharjahChallenge /> },
  { path: "/programs/deal-dock", element: <DealDock /> },
  { path: "/programs/sme-support", element: <SMESupport /> },
];

export const communityRoutes = [
  { path: "/community/startups", element: <StartupDirectory /> },
  { path: "/community/join", element: <MembershipSection /> },
  { path: "/community/partnerships", element: <PartnershipsSection /> },
  { path: "/community/founder-portal", element: <FounderPortal /> },
];

export const sefRoutes = [
  { path: "/events/sef/agenda", element: <SEFAgendaPage /> },
  { path: "/events/sef/speakers", element: <SEFSpeakersPage /> },
  { path: "/events/sef/experience", element: <SEFExperiencePage /> },
  { path: "/events/sef/register", element: <SEFRegisterPage /> },
  { path: "/events/sef/be-part-of-sef", element: <SEFBePartPage /> },
  { path: "/events/sef/faq", element: <SEFFAQPage /> },
  { path: "/events/sef/who-should-attend", element: <SEFWhoShouldAttendPage /> },
];

export const perfumeRoutes = [
  { path: "/perfume", element: <PerfumePage /> },
  { path: "/perfume/about", element: <AboutPerfumePage /> },
  { path: "/perfume/gallery", element: <PerfumeGalleryPage /> },
  { path: "/perfume/pricing", element: <PricingPage /> },
  { path: "/perfume/buy", element: <BuyPage /> },
];

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/new" element={<NewIndex />} />
            
            {/* Programs routes */}
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/start-young" element={<StartYoungPage />} />
            
            {/* Events routes */}
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/sef-landing" element={<SEFLandingPage />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Program Routes */}
            {programRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            
            {/* Community Routes */}
            {communityRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            
            {/* SEF Routes */}
            {sefRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            
            {/* Perfume Routes */}
            {perfumeRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            
            {/* User Routes */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/setup" element={<ProfileSetupPage />} />
            <Route path="/feed" element={<FeedPage />} />
            
            {/* Other Routes */}
            <Route path="/eligibility" element={<EligibilityCheckerPage />} />
            <Route path="/impact" element={<ImpactReport />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
