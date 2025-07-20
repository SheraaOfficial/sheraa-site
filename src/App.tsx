
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Simple homepage component to avoid routing issues
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sheraa: Creating the Next Wave of Entrepreneurs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sharjah's official hub for aspiring founders and established ventures.
          </p>
          <div className="space-y-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Launch Your Startup
            </button>
            <button className="ml-4 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider 
        defaultTheme="light" 
        storageKey="sheraa-ui-theme"
        attribute="class"
        enableSystem={false}
        disableTransitionOnChange={false}
      >
        <BrowserRouter>
          <div className="min-h-screen">
            <Toaster />
            <HomePage />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
