
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider 
          defaultTheme="light" 
          storageKey="sheraa-ui-theme"
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground">
              <Toaster />
              <AppRoutes />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
