
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import Profile from "./pages/profile/Profile";
import ProfileSetup from "./pages/ProfileSetup";
import ProfileSetupPage from "./pages/profile/ProfileSetupPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ApplicationsPage from "./pages/applications/ApplicationsPage";
import S3IncubatorPage from "./pages/programs/s3-incubator/S3IncubatorPage";
import S3IncubatorApplicationPage from "./pages/programs/s3-incubator/S3IncubatorApplicationPage";
import StartupDojoPage from "./pages/programs/startup-dojo/StartupDojoPage";
import AccessSharjahPage from "./pages/programs/access-sharjah/AccessSharjahPage";
import SEFPage from "./pages/events/SEFPage";
import StartupsPage from "./pages/startups/StartupsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/s3-incubator" element={<S3IncubatorPage />} />
            <Route path="/programs/s3-incubator/apply" element={<S3IncubatorApplicationPage />} />
            <Route path="/programs/startup-dojo" element={<StartupDojoPage />} />
            <Route path="/programs/access-sharjah" element={<AccessSharjahPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/sef" element={<SEFPage />} />
            <Route path="/startups" element={<StartupsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/profile/setup" element={<ProfileSetupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
