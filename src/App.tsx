import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/utils/ScrollToTop';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
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
import Contact from '@/pages/Contact';
import AuthPage from '@/pages/auth';
import Leadership from '@/pages/about/Leadership';
import Board from '@/pages/about/Board';
import Careers from '@/pages/careers';
import EligibilityCheckerPage from '@/pages/Eligibility';
import BookConsultationPage from '@/pages/BookConsultation';
import NotFound from '@/pages/NotFound';

// New Program Pages
import DealDockPage from '@/pages/programs/DealDockPage';
import StartupDojoPage from '@/pages/programs/StartupDojoPage';
import StartupDojoPlus from '@/pages/programs/StartupDojoPlus';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-white dark:bg-sheraa-dark text-gray-900 dark:text-white">
            <ScrollToTop />
            <Toaster />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/board" element={<Board />} />
              <Route path="/careers" element={<Careers />} />
              
              {/* Programs Routes */}
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/s3-incubator" element={<S3Incubator />} />
              <Route path="/programs/start-young" element={<StartYoung />} />
              <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
              <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlus />} />
              <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallenge />} />
              <Route path="/programs/sme-support" element={<SMESupport />} />
              <Route path="/programs/deal-dock" element={<DealDockPage />} />
              
              {/* Community Routes */}
              <Route path="/community" element={<Community />} />
              <Route path="/community/join" element={<CommunityJoin />} />
              <Route path="/community/partnerships" element={<Partnerships />} />
              <Route path="/community/startups" element={<StartupDirectory />} />
              
              {/* Resources Routes */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/advisory" element={<Advisory />} />
              <Route path="/resources/articles" element={<Articles />} />
              <Route path="/resources/impact-reports" element={<ImpactReports />} />
              
              {/* Events Routes */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/upcoming" element={<UpcomingEvents />} />
              <Route path="/events/past" element={<PastEvents />} />
              <Route path="/events/sef" element={<SEFLandingPage />} />
              
              {/* Other Routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route path="/eligibility" element={<EligibilityCheckerPage />} />
              <Route path="/book-consultation" element={<BookConsultationPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
