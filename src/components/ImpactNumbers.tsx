import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import FeatureItem from "./impact/FeatureItem";
import ImpactBackground from "./impact/ImpactBackground";
import { getImpactFeatures } from "./impact/impactData";
const ImpactNumbers = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create a springier motion value for smoother animations
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15
  });

  // Add horizontal movement for more dynamic effect
  const shift = useTransform(springScroll, [0, 0.5, 1], [-20, 0, 20]);

  // Get feature data
  const features = getImpactFeatures(isMobile);
  return <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <ImpactBackground springScroll={springScroll} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 50
      }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Creating Lasting Change
          </h2>
          {!isMobile && <motion.p className="text-gray-600 leading-relaxed text-lg" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }}>
              We measure our success through the achievements of our founders and ecosystem growth.
            </motion.p>}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto" style={{
        x: shift
      }}>
          {features.map((feature, index) => <FeatureItem key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} subtext={feature.subtext} value={feature.value} index={index} />)}
        </motion.div>

        <motion.div className="mt-12 md:mt-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 70
      }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="gradient" className="group flex items-center gap-2" size="lg">
              
            </Button>
            
            <Button asChild variant="shimmer" size="lg" className="min-w-[200px] group">
              <Link to="/lovable-uploads/sheraa-impact-report-2024.pdf" target="_blank" download="Sheraa-Impact-Report-2024.pdf">
                <FileDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Report
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ImpactNumbers;