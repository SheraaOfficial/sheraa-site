
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import EnhancedMainNavigation from '@/components/navigation/EnhancedMainNavigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = '',
  seoTitle = 'Sheraa - Sharjah Entrepreneurship Center',
  seoDescription = "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses.",
  seoKeywords = 'entrepreneurship, startup, incubator, Sharjah, UAE, innovation'
}) => {
  const { language } = useLanguage();

  return (
    <div className={cn(
      "min-h-screen flex flex-col",
      language === 'ar' && "font-arabic",
      className
    )} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      
      <EnhancedMainNavigation />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
