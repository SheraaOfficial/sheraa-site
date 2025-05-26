
import React from "react";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/navigation/MainNavigation";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundStyle?: React.CSSProperties;
  hideNavigation?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className, 
  backgroundStyle,
  hideNavigation = false
}) => {
  return (
    <div 
      className={cn("min-h-screen flex flex-col", className)}
      style={backgroundStyle}
    >
      {!hideNavigation && <MainNavigation />}
      
      <main className={cn("flex-1", !hideNavigation && "pt-16")}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
