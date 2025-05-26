
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/utils/ScrollToTop';

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/board" element={<Board />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/s3-incubator" element={<S3Incubator />} />
          <Route path="/programs/start-young" element={<StartYoung />} />
          <Route path="/programs/startup-dojo" element={<StartupDojo />} />
          <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallenge />} />
          <Route path="/programs/sme-support" element={<SMESupport />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/join" element={<CommunityJoin />} />
          <Route path="/community/partnerships" element={<Partnerships />} />
          <Route path="/community/startups" element={<StartupDirectory />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/advisory" element={<Advisory />} />
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/impact-reports" element={<ImpactReports />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/upcoming" element={<UpcomingEvents />} />
          <Route path="/events/past" element={<PastEvents />} />
          <Route path="/events/sef" element={<SEFLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
