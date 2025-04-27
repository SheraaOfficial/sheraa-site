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
import ResourcesPage from "./pages/resources";
import EventsPage from "./pages/events";
import CommunityPage from "./pages/community";
import ContactPage from "./pages/contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

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
          <Route path="/programs/startup-dojo" element={<ProgramsPage section="startup-dojo" />} />
          <Route path="/programs/startup-dojo-plus" element={<ProgramsPage section="startup-dojo-plus" />} />
          <Route path="/programs/grow-smart" element={<ProgramsPage section="grow-smart" />} />
          <Route path="/programs/s3-incubator" element={<ProgramsPage section="s3-incubator" />} />
          <Route path="/programs/build-ventures" element={<ProgramsPage section="build-ventures" />} />
          <Route path="/programs/access-sharjah-challenge" element={<ProgramsPage section="access-sharjah-challenge" />} />
          <Route path="/programs/sme-support" element={<ProgramsPage section="sme-support" />} />

          {/* Resources Routes */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/guides" element={<ResourcesPage section="guides" />} />
          <Route path="/resources/advisory" element={<ResourcesPage section="advisory" />} />
          <Route path="/resources/articles" element={<ResourcesPage section="articles" />} />
          <Route path="/resources/impact-reports" element={<ResourcesPage section="impact-reports" />} />

          {/* Events Routes */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/sef" element={<EventsPage section="sef" />} />
          <Route path="/events/sef/agenda" element={<EventsPage section="sef-agenda" />} />
          <Route path="/events/sef/registration" element={<EventsPage section="sef-registration" />} />
          <Route path="/events/sef/faq" element={<EventsPage section="sef-faq" />} />
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
