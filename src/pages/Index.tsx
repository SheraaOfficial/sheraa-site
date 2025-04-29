
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import QuoteSection from "@/components/QuoteSection";
import ProgramsOverview from "@/components/ProgramsOverview";
import CommunitySection from "@/components/CommunitySection";
import SEFSection from "@/components/SEFSection";
import WhySharjah from "@/components/WhySharjah";
import PartnersSection from "@/components/PartnersSection";
import EligibilityChecker from "@/components/EligibilityChecker";
import ContactSection from "@/components/ContactSection";
import StartupsShowcase from "@/components/StartupsShowcase";
import StartupTestimonials from "@/components/StartupTestimonials";
import PodcastSection from "@/components/PodcastSection";
import MarqueeUpdates from "@/components/MarqueeUpdates";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { motion } from "framer-motion";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";

// Lazy load heavy component sections for better mobile performance
const LazyComponent = ({ component: Component, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={ref} style={{ minHeight: 100 }}>
      {isVisible ? <Component {...props} /> : null}
    </div>
  );
};

const Index = () => {
  const isMobile = useIsMobile();
  const { scrollY, isScrolling } = useOptimizedScroll();
  
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

  // Dynamic background based on scroll
  const backgroundStyle = {
    background: `linear-gradient(${
      140 + (scrollY / (document.body.scrollHeight - window.innerHeight)) * 60
    }deg, rgba(0,51,102,${
      isMobile ? 0.03 : 0.05 + (scrollY / document.body.scrollHeight) * 0.1
    }) 0%, rgba(0,128,128,${
      isMobile ? 0.02 : 0.03 + (scrollY / document.body.scrollHeight) * 0.07
    }) 50%, rgba(255,102,0,${
      isMobile ? 0.01 : 0.02 + (scrollY / document.body.scrollHeight) * 0.05
    }) 100%)`,
  };
  
  // Track scroll direction for enhanced parallax
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = React.useRef(0);
  
  useEffect(() => {
    if (scrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (scrollY < lastScrollY.current) {
      setScrollDirection("up");
    }
    lastScrollY.current = scrollY;
  }, [scrollY]);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000">
      <ScrollProgressIndicator />
      <Navigation />
      <MarqueeUpdates />
      
      <div className="fixed inset-0 pointer-events-none z-0" style={backgroundStyle} />
      
      <main className="flex-grow pt-12 relative z-10">
        {/* Hero section is critical, don't lazy load */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>
        
        <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
          {/* Start using the better optimized motion component directly */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <ImpactNumbers />
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <QuoteSection />
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ProgramsOverview />
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <EligibilityChecker />
          </motion.section>
          
          <LazyComponent component={SEFSection} />
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`relative ${isScrolling ? 'will-change-transform' : ''}`}
          >
            <StartupsShowcase />
          </motion.section>
          
          <LazyComponent component={PodcastSection} />
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <CommunitySection />
          </motion.section>
          
          <LazyComponent component={StartupTestimonials} />
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <WhySharjah />
          </motion.section>
          
          <LazyComponent component={PartnersSection} />
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <ContactSection />
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
