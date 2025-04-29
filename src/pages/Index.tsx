
import React from "react";
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
import { ParallaxSection, ParallaxBackground, ParallaxOrbs } from "@/components/ParallaxProvider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
      <ScrollProgressIndicator />
      <Navigation />
      <MarqueeUpdates />
      <ParallaxOrbs />
      
      <ParallaxBackground>
        <main className="flex-grow pt-12 relative z-10">
          <ParallaxSection direction="up" scrollMultiplier={0.1} className="z-10">
            <Hero />
          </ParallaxSection>
          
          <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
            <ParallaxSection direction="up" scrollMultiplier={0.2}>
              <ImpactNumbers />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.15}>
              <QuoteSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <ProgramsOverview />
            </motion.div>
            
            <ParallaxSection direction="up" scrollMultiplier={0.1}>
              <EligibilityChecker />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.2}>
              <SEFSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <StartupsShowcase />
            </motion.div>
            
            <ParallaxSection direction="up" scrollMultiplier={0.15}>
              <PodcastSection />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.1}>
              <CommunitySection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <StartupTestimonials />
            </motion.div>
            
            <ParallaxSection direction="up" scrollMultiplier={0.2}>
              <WhySharjah />
            </ParallaxSection>
            
            <ParallaxSection direction="down" scrollMultiplier={0.15}>
              <PartnersSection />
            </ParallaxSection>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
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
