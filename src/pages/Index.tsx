
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

const Index = () => {
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
  
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden perspective-1000">
      <ScrollProgressIndicator />
      <Navigation />
      <MarqueeUpdates />
      
      {/* Enhanced parallax elements */}
      <ParallaxStars />
      <ParallaxOrbs />
      <ParallaxOverlay opacity={0.05} />
      
      <ParallaxBackground>
        <main className="flex-grow pt-12 relative z-10">
          <ParallaxSection direction="up" scrollMultiplier={0.15} spring={true} className="z-10">
            <Hero />
          </ParallaxSection>
          
          <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
            <ParallaxSection direction="up" scrollMultiplier={0.25} spring={true}>
              <ImpactNumbers />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.2} spring={true} stiffness={40} damping={20}>
              <QuoteSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="relative z-20"
            >
              <ParallaxSection direction="up" scrollMultiplier={0.1} spring={true}>
                <ProgramsOverview />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection direction="up" scrollMultiplier={0.15} spring={true} stiffness={60}>
              <EligibilityChecker />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.25} spring={true}>
              <SEFSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <ParallaxSection direction="left" scrollMultiplier={0.15} spring={true}>
                <StartupsShowcase />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection direction="right" scrollMultiplier={0.2} spring={true} stiffness={30} damping={25}>
              <PodcastSection />
            </ParallaxSection>
            
            <ParallaxSection direction="up" scrollMultiplier={0.18} spring={true} damping={30}>
              <CommunitySection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <ParallaxSection direction="down" scrollMultiplier={0.12} spring={true}>
                <StartupTestimonials />
              </ParallaxSection>
            </motion.div>
            
            <ParallaxSection direction="right" scrollMultiplier={0.22} spring={true}>
              <WhySharjah />
            </ParallaxSection>
            
            <ParallaxSection direction="left" scrollMultiplier={0.2} spring={true} stiffness={50} damping={20}>
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
