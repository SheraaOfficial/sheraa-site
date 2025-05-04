
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { WelcomeAnimation } from "@/components/ui/welcome-animation";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  backgroundStyle
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000">
      <ScrollProgressIndicator />
      <div className="relative z-[100]">
        <Navigation />
      </div>
      
      {/* Background with style passed from parent */}
      <div className="fixed inset-0 pointer-events-none z-0" style={backgroundStyle} />
      
      <main className="flex-grow pt-16 relative z-10 bg-[sheraa-background-soft] bg-sheraa-light">
        {children}
      </main>
      
      <Footer />
      
      {/* Welcome animation for first-time visitors */}
      <WelcomeAnimation />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default MainLayout;
