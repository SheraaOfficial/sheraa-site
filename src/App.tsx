
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

// Enhanced React availability check
const verifyReactEnvironment = () => {
  const checks = {
    React: !!React,
    useState: !!(React && React.useState),
    useContext: !!(React && React.useContext),
    useEffect: !!(React && React.useEffect),
    createElement: !!(React && React.createElement),
    Fragment: !!(React && React.Fragment)
  };
  
  console.log('App: React environment check:', checks);
  
  const failedChecks = Object.entries(checks)
    .filter(([, available]) => !available)
    .map(([feature]) => feature);
    
  if (failedChecks.length > 0) {
    console.error('App: React environment verification failed:', failedChecks);
    throw new Error(`React features not available: ${failedChecks.join(', ')}`);
  }
  
  return true;
};

// Verify React before creating QueryClient
try {
  verifyReactEnvironment();
  console.log('App: React environment verification passed');
} catch (error) {
  console.error('App: React environment verification failed:', error);
  throw error;
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
  
  // Final safety check before rendering
  try {
    verifyReactEnvironment();
  } catch (error) {
    console.error('App: Pre-render React check failed:', error);
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div>
          <h1 style={{ color: '#dc2626', marginBottom: '16px' }}>React Environment Error</h1>
          <p style={{ color: '#666', marginBottom: '16px' }}>React hooks are not properly available.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              background: '#3b82f6', 
              color: 'white', 
              padding: '8px 16px', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
  
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
