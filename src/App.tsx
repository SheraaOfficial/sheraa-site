
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/errors/ErrorBoundary';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ExperienceThemeProvider } from '@/contexts/ExperienceThemeContext';
import { HomepageThemeProvider } from '@/contexts/ThemeContext';

// Create QueryClient outside component to avoid recreating
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider 
            defaultTheme="light" 
            storageKey="sheraa-ui-theme"
            attribute="class"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            <LanguageProvider>
              <ExperienceThemeProvider>
                <HomepageThemeProvider>
                  <BrowserRouter>
                    <div className="min-h-screen bg-background text-foreground">
                      <Toaster />
                      <AppRoutes />
                    </div>
                  </BrowserRouter>
                </HomepageThemeProvider>
              </ExperienceThemeProvider>
            </LanguageProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
