
import React from 'react';
import ModernNavigation from '@/components/navigation/ModernNavigation';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className, backgroundStyle }) => {
  return (
    <div className="min-h-screen flex flex-col" style={backgroundStyle}>
      <ModernNavigation />
      <main className={`flex-grow pt-20 ${className || ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
