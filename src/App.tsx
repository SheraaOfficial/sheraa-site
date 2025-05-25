
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NewIndex from "./pages/NewIndex";
import ProgramsPage from "./pages/programs/ProgramsPage";
import DealDockPage from "./pages/programs/DealDockPage";
import PerfumeLandingPage from "./pages/perfume/PerfumeLandingPage";
import EligibilityPage from "./pages/EligibilityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new" element={<NewIndex />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/deal-dock" element={<DealDockPage />} />
            <Route path="/perfume" element={<PerfumeLandingPage />} />
            <Route path="/eligibility" element={<EligibilityPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
