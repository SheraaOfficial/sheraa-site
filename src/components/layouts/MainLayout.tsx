
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className = "",
  headerClassName = "",
  backgroundStyle = {} 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`} style={backgroundStyle}>
      <div className={headerClassName}>
        <Navigation />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Full-width footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
