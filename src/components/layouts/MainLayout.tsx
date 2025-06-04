
import React from 'react';
import { UnifiedNavigation } from '@/components/navigation/UnifiedNavigation';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet-async';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className = '',
  seoTitle,
  seoDescription,
  seoKeywords,
  backgroundStyle
}) => {
  return (
    <>
      {/* SEO Head Management */}
      <Helmet>
        {seoTitle && <title>{seoTitle}</title>}
        {seoDescription && <meta name="description" content={seoDescription} />}
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Helmet>

      <div className={`flex flex-col min-h-screen ${className}`} style={backgroundStyle}>
        <UnifiedNavigation />
        
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default MainLayout;
