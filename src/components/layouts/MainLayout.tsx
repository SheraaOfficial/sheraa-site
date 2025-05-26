
import React from "react";
import Footer from "@/components/Footer";
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
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
