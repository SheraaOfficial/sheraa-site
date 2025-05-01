
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, backgroundStyle }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000">
      <ScrollProgressIndicator />
      <Navigation />
      <div className="h-16"></div> {/* Spacer for navigation height */}
      
      {/* Background with style passed from parent */}
      <div className="fixed inset-0 pointer-events-none z-0" style={backgroundStyle} />
      
      <main className="flex-grow pt-12 relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
