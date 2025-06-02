
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "next-themes";

interface AppProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// This component is kept for potential future use but not currently used
// The main App.tsx handles providers directly to avoid conflicts
const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider 
          defaultTheme="light" 
          storageKey="sheraa-ui-theme"
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                {children}
                <Toaster 
                  position="bottom-right"
                  expand={false}
                  richColors
                  closeButton
                />
              </TooltipProvider>
            </QueryClientProvider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProviders;
