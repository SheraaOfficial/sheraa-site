
import React from "react";
import { motion } from "framer-motion";
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
import LazyComponent from "@/components/utils/LazyComponent";
import { useIsMobile } from "@/hooks/use-mobile";

interface HomePageSectionsProps {
  isScrolling: boolean;
  scrollDirection: string;
}

const HomePageSections: React.FC<HomePageSectionsProps> = ({ isScrolling, scrollDirection }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
      {/* Start with ImpactNumbers as the first section */}
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
  );
};

export default HomePageSections;
