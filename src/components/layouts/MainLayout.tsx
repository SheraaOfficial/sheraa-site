
import React from "react";
import { Helmet } from 'react-helmet-async';
import { cn } from "@/lib/utils";
import { SophisticatedNavigation } from "@/components/navigation/SophisticatedNavigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { useLanguage } from '@/contexts/LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  noIndex?: boolean;
  backgroundStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className,
  seoTitle = 'Sheraa - Sharjah Entrepreneurship Center',
  seoDescription = "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses.",
  seoKeywords = 'entrepreneurship, startup, incubator, Sharjah, UAE, innovation',
  noIndex = false,
  backgroundStyle
}) => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        noIndex={noIndex}
      />
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
      
      <div 
        className={cn(
          "min-h-screen flex flex-col bg-background text-foreground",
          language === 'ar' && "font-arabic",
          className
        )}
        style={backgroundStyle}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <SophisticatedNavigation />
        {/* Add proper spacing for fixed navigation */}
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
