import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';

// Pages
import Index from '@/pages/Index';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Careers from '@/pages/careers';
import About from '@/pages/About';
import Leadership from '@/pages/about/Leadership';
import Board from '@/pages/about/Board';
import Programs from '@/pages/Programs';
import S3Incubator from '@/pages/programs/S3Incubator';
import StartYoung from '@/pages/programs/StartYoung';
import StartupDojo from '@/pages/programs/StartupDojo';
import AccessSharjahChallenge from '@/pages/programs/AccessSharjahChallenge';
import SMESupport from '@/pages/programs/SMESupport';
import Community from '@/pages/Community';
import CommunityJoin from '@/pages/community/CommunityJoin';
import Partnerships from '@/pages/community/Partnerships';
import StartupDirectory from '@/pages/community/StartupDirectory';
import Resources from '@/pages/Resources';
import Guides from '@/pages/resources/Guides';
import Advisory from '@/pages/resources/Advisory';
import Articles from '@/pages/resources/Articles';
import ImpactReports from '@/pages/resources/ImpactReports';
import Events from '@/pages/Events';
import UpcomingEvents from '@/pages/events/UpcomingEvents';
import PastEvents from '@/pages/events/PastEvents';
import SEFLandingPage from '@/pages/events/sef-landing';

// New Pages
import Auth from '@/pages/Auth';
import Eligibility from '@/pages/Eligibility';
import BookConsultation from '@/pages/BookConsultation';
import ProgramsRouter from '@/pages/programs';
import CommunityRouter from '@/pages/community';
import ResourcesPage from '@/pages/Resources';
import EventsPage from '@/pages/Events';
import ContactPage from '@/pages/Contact';
import AuthPage from '@/pages/auth';
import EligibilityCheckerPage from '@/pages/Eligibility';
import BookConsultationPage from '@/pages/BookConsultation';
import Homepage from '@/pages/Index';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-sheraa-dark text-gray-900 dark:text-white">
          <Toaster />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs/*" element={<ProgramsRouter />} />
            <Route path="/community/*" element={<CommunityRouter />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth/*" element={<AuthPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/eligibility" element={<EligibilityCheckerPage />} />
            <Route path="/book-consultation" element={<BookConsultationPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
