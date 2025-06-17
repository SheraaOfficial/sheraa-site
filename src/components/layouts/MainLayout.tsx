
import React from 'react';
import { SophisticatedNavigationContainer } from '@/components/navigation/SophisticatedNavigationContainer';
import ScrollToTop from '@/components/utils/ScrollToTop';
import SEOHead from '@/components/SEO/SEOHead';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className,
  showNavigation = true,
  seoTitle,
  seoDescription,
  seoKeywords,
  backgroundStyle
}) => {
  return (
    <div 
      className={cn("min-h-screen bg-white dark:bg-sheraa-dark", className)}
      style={backgroundStyle}
    >
      {(seoTitle || seoDescription || seoKeywords) && (
        <SEOHead
          title={seoTitle}
          description={seoDescription}
          keywords={seoKeywords}
        />
      )}
      <ScrollToTop />
      {showNavigation && <SophisticatedNavigationContainer />}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
