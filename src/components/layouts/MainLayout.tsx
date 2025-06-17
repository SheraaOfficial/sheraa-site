
import React from 'react';
import { SophisticatedNavigationContainer } from '@/components/navigation/SophisticatedNavigationContainer';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className,
  showNavigation = true 
}) => {
  return (
    <div className={cn("min-h-screen bg-white dark:bg-sheraa-dark", className)}>
      <ScrollToTop />
      {showNavigation && <SophisticatedNavigationContainer />}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
