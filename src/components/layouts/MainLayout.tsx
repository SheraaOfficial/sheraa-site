
import React from 'react';
import { UnifiedNavigation } from '@/components/navigation/UnifiedNavigation';
import { Toaster } from 'sonner';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <UnifiedNavigation />
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Toaster position="top-right" />
    </div>
  );
};

export default MainLayout;
