
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layouts/MainLayout";
import HomePageSections from "@/components/home/HomePageSections";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProgressBar from "@/components/ProgressBar";

const Index = () => {
  const isMobile = useIsMobile();
  const { scrollY, isScrolling } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  
  // Add smooth scroll behavior on navigation clicks
  useEffect(() => {
    if (isMobile) return; // Skip on mobile for performance
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Add the progress bar */}
      <ProgressBar />
      
      <HomePageSections 
        isScrolling={isScrolling}
        scrollDirection={scrollDirection}
      />
    </MainLayout>
  );
};

export default Index;
