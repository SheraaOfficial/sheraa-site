
import React, { memo, useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { WelcomeAnimation } from "@/components/ui/welcome-animation";
import { Toaster } from "@/components/ui/toaster";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundStyle?: React.CSSProperties;
  noFooter?: boolean;
  noNavigation?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  backgroundStyle,
  noFooter = false,
  noNavigation = false
}) => {
  const { isMobile } = useDeviceDetection();
  const devicePerformance = useDevicePerformance();
  const [isAfterFirstRender, setIsAfterFirstRender] = useState(false);
  
  // Optimize welcome animation - only show on higher-end devices and after initial render
  const shouldShowWelcomeAnimation = devicePerformance !== 'low' && isAfterFirstRender;
  
  useEffect(() => {
    // Use requestAnimationFrame to delay setting to after first paint
    const rafId = requestAnimationFrame(() => {
      setIsAfterFirstRender(true);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, []);
  
  return (
    <div 
      className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000"
    >
      <ScrollProgressIndicator />
      
      {!noNavigation && (
        <div className="relative z-[100]">
          <Navigation />
        </div>
      )}
      
      {/* Background with style passed from parent */}
      {backgroundStyle && (
        <div 
          className="fixed inset-0 pointer-events-none z-0" 
          style={backgroundStyle} 
          aria-hidden="true"
        />
      )}
      
      <main 
        className={`flex-grow ${isMobile ? 'pt-14' : 'pt-16'} relative z-10 bg-sheraa-light`}
      >
        <div className="relative">
          {children}
        </div>
      </main>
      
      {!noFooter && <Footer />}
      
      {/* Welcome animation for first-time visitors - only on capable devices and after initial render */}
      {shouldShowWelcomeAnimation && <WelcomeAnimation />}
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

// Memoize the layout component to prevent unnecessary re-renders
export default memo(MainLayout);
