
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
};

export default MainLayout;
