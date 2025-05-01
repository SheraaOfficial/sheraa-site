
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

// Programs pages imports
import StartupDojo from "./pages/programs/StartupDojo";
import StartupDojoPlus from "./pages/programs/StartupDojoPlus";
import S3Incubator from "./pages/programs/S3Incubator";
import AccessSharjahChallenge from "./pages/programs/AccessSharjahChallenge";
import SMESupport from "./pages/programs/SMESupport";

// SEF Page imports
import SEFRegisterPage from "./pages/events/sef/SEFRegisterPage";
import SEFAgendaPage from "./pages/events/sef/SEFAgendaPage";
import SEFSpeakersPage from "./pages/events/sef/SEFSpeakersPage";
import SEFExperiencePage from "./pages/events/sef/SEFExperiencePage";
import SEFWhoShouldAttendPage from "./pages/events/sef/SEFWhoShouldAttendPage";
import SEFBePartPage from "./pages/events/sef/SEFBePartPage";
import SEFFAQPage from "./pages/events/sef/SEFFAQPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/approach" element={<AboutPage section="approach" />} />
          <Route path="/about/vision" element={<AboutPage section="vision" />} />
          <Route path="/about/impact" element={<ImpactReport />} />
          <Route path="/about/hubs" element={<AboutPage section="hubs" />} />
          <Route path="/about/leadership" element={<AboutPage section="leadership" />} />
          <Route path="/about/board" element={<AboutPage section="board" />} />

          {/* Programs Routes */}
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/start-young" element={<ProgramsPage section="start-young" />} />
          <Route path="/programs/startup-dojo" element={<StartupDojo />} />
          <Route path="/programs/startup-dojo-plus" element={<StartupDojoPlus />} />
          <Route path="/programs/grow-smart" element={<ProgramsPage section="grow-smart" />} />
          <Route path="/programs/s3-incubator" element={<S3Incubator />} />
          <Route path="/programs/build-ventures" element={<ProgramsPage section="build-ventures" />} />
          <Route path="/programs/access-sharjah-challenge" element={<AccessSharjahChallenge />} />
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
          
          {/* SEF Sub-pages */}
          <Route path="/events/sef/agenda" element={<SEFAgendaPage />} />
          <Route path="/events/sef/speakers" element={<SEFSpeakersPage />} />
          <Route path="/events/sef/experience" element={<SEFExperiencePage />} />
          <Route path="/events/sef/who-should-attend" element={<SEFWhoShouldAttendPage />} />
          <Route path="/events/sef/be-part-of-sef" element={<SEFBePartPage />} />
          <Route path="/events/sef/register" element={<SEFRegisterPage />} />
          <Route path="/events/sef/registration" element={<SEFRegisterPage />} />
          <Route path="/events/sef/faq" element={<SEFFAQPage />} />
          
          <Route path="/events/upcoming" element={<EventsPage section="upcoming" />} />
          <Route path="/events/news" element={<EventsPage section="news" />} />

          {/* Community Routes */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/join" element={<CommunityPage section="join" />} />
          <Route path="/community/startups" element={<CommunityPage section="startups" />} />
          <Route path="/community/partnerships" element={<CommunityPage section="partnerships" />} />

          {/* Other Routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
