
import React, { useEffect } from "react";
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
import {
  ParallaxSection,
  ParallaxBackground,
  ParallaxOrbs,
  ParallaxStars,
  ParallaxOverlay
} from "@/components/ParallaxProvider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { motion, useScroll } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Add smooth scroll behavior on navigation clicks
  useEffect(() => {
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
  }, []);

  // Get scroll progress for conditional effects
  const { scrollYProgress } = useScroll();
  
  // Use smaller multipliers on mobile for better performance
  const mobileMultiplier = 0.05;
  
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000">
      <ScrollProgressIndicator />
      <Navigation />
      <MarqueeUpdates />
      
      {/* Conditionally render heavy parallax effects for desktop only */}
      {!isMobile && <ParallaxStars />}
      {!isMobile && <ParallaxOrbs />}
      <ParallaxOverlay opacity={isMobile ? 0.02 : 0.05} />
      
      <ParallaxBackground>
        <main className="flex-grow pt-12 relative z-10">
          <ParallaxSection 
            direction="up" 
            scrollMultiplier={isMobile ? mobileMultiplier : 0.15} 
            spring={!isMobile} 
            className="z-10"
          >
            <Hero />
          </ParallaxSection>
          
          <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
            <ParallaxSection 
              direction="up" 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.25} 
              spring={!isMobile}
            >
              <ImpactNumbers />
            </ParallaxSection>
            
            <ParallaxSection 
              direction="down" 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.2} 
              spring={!isMobile} 
              stiffness={40} 
              damping={20}
            >
              <QuoteSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="relative z-20"
            >
              <ParallaxSection 
                direction="up" 
                scrollMultiplier={isMobile ? mobileMultiplier : 0.1} 
                spring={!isMobile}
              >
                <ProgramsOverview />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection 
              direction="up" 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.15} 
              spring={!isMobile} 
              stiffness={60}
            >
              <EligibilityChecker />
            </ParallaxSection>
            
            <ParallaxSection 
              direction="down" 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.25} 
              spring={!isMobile}
            >
              <SEFSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <ParallaxSection 
                direction={isMobile ? "up" : "left"} 
                scrollMultiplier={isMobile ? mobileMultiplier : 0.15} 
                spring={!isMobile}
              >
                <StartupsShowcase />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection 
              direction={isMobile ? "up" : "right"} 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.2} 
              spring={!isMobile} 
              stiffness={30} 
              damping={25}
            >
              <PodcastSection />
            </ParallaxSection>
            
            <ParallaxSection 
              direction="up" 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.18} 
              spring={!isMobile} 
              damping={30}
            >
              <CommunitySection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <ParallaxSection 
                direction="down" 
                scrollMultiplier={isMobile ? mobileMultiplier : 0.12} 
                spring={!isMobile}
              >
                <StartupTestimonials />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection 
              direction={isMobile ? "up" : "right"} 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.22} 
              spring={!isMobile}
            >
              <WhySharjah />
            </ParallaxSection>
            
            <ParallaxSection 
              direction={isMobile ? "up" : "left"} 
              scrollMultiplier={isMobile ? mobileMultiplier : 0.2} 
              spring={!isMobile} 
              stiffness={50} 
              damping={20}
            >
              <PartnersSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <ContactSection />
            </motion.div>
          </div>
        </main>
      </ParallaxBackground>
      
      <Footer />
    </div>
  );
};

export default Index;
