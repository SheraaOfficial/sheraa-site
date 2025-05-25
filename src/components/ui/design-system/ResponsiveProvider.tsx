
import React, { createContext, useContext, ReactNode } from 'react';
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/use-mobile';

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'mobile' | 'tablet' | 'desktop';
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  
  const breakpoint: 'mobile' | 'tablet' | 'desktop' = 
    isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop, breakpoint }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};

// Responsive wrapper component
interface ResponsiveProps {
  children: ReactNode;
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop?: ReactNode;
}

export const Responsive: React.FC<ResponsiveProps> = ({ 
  children, 
  mobile, 
  tablet, 
  desktop 
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  if (isMobile && mobile) return <>{mobile}</>;
  if (isTablet && tablet) return <>{tablet}</>;
  if (isDesktop && desktop) return <>{desktop}</>;
  
  return <>{children}</>;
};
