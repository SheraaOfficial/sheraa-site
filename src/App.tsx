
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { NotificationProvider } from "@/components/notifications/NotificationProvider";
import AppRoutes from "@/routes/AppRoutes";
import { AppErrorBoundary } from '@/components/layout/AppErrorBoundary';

console.log('App: Module loading');
console.log('React version:', React.version);
console.log('React object:', React);

// Verify React is available
if (!React || !React.useState || !React.useContext || !React.useEffect) {
  console.error('React hooks are not available:', {
    React: !!React,
    useState: !!(React && React.useState),
    useContext: !!(React && React.useContext),
    useEffect: !!(React && React.useEffect)
  });
  throw new Error('React hooks are not properly available');
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
  console.log('React in App component:', React);
  
  // Verify React is still available in component context
  if (!React || !React.useState) {
    console.error('React is null in App component context');
    return <div>Error: React is not properly initialized</div>;
  }
  
  // Add error boundary around the problematic area
  try {
    return (
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
    );
  } catch (error) {
    console.error('Error in App component:', error);
    return <div>Application Error: {String(error)}</div>;
  }
};

export default App;
