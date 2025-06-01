
import React from "react";
import { cn } from "@/lib/utils";
import MainNavigation from "@/components/navigation/MainNavigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";

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
  seoTitle,
  seoDescription,
  seoKeywords,
  noIndex = false,
  backgroundStyle
}) => {
  return (
    <>
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        noIndex={noIndex}
      />
      <div 
        className={cn("min-h-screen bg-background text-foreground", className)}
        style={backgroundStyle}
      >
        <MainNavigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
