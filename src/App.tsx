
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { NotificationProvider } from "@/components/notifications/NotificationProvider";
import AppRoutes from "@/routes/AppRoutes";
import { AppErrorBoundary } from '@/components/layout/AppErrorBoundary';
import { ReactSafetyCheck } from '@/components/utils/ReactSafetyCheck';

console.log('App: Module loading');

// Verify React is available before creating QueryClient
if (!React || !React.useState || !React.useContext || !React.useEffect) {
  console.error('App: React hooks are not available:', {
    React: !!React,
    useState: !!(React && React.useState),
    useContext: !!(React && React.useContext),
    useEffect: !!(React && React.useEffect)
  });
  throw new Error('React hooks are not properly available in App component');
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

const App: React.FC = () => {
  console.log('App: Component rendering');
  
  return (
    <ReactSafetyCheck fallback={<div>Initializing application...</div>}>
      <AppErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
              <NotificationProvider>
                <AppRoutes />
                <Toaster />
                <Sonner />
              </NotificationProvider>
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </AppErrorBoundary>
    </ReactSafetyCheck>
  );
};

export default App;
