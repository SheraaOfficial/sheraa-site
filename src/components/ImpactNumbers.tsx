
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FileDown } from "lucide-react";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import FeatureItem from "./impact/FeatureItem";
import ImpactBackground from "./impact/ImpactBackground";
import { getImpactFeatures } from "./impact/impactData";
import { ParallaxSection } from "./parallax";

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
  
  return (
    <ParallaxSection 
      direction="up" 
      scrollMultiplier={0} // Disable parallax on mobile for better performance
      spring={false}
    >
      <section 
        ref={sectionRef} 
        className="py-6 md:py-24 relative overflow-visible"
        style={{ 
          minHeight: isMobile ? '600px' : 'auto',
          visibility: 'visible',
          display: 'block'
        }}
      >
        {!isMobile && <ImpactBackground springScroll={springScroll} />}
        
        <div className="container mx-auto px-3 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-4 md:mb-16 max-w-3xl mx-auto" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true,
              margin: "-10px"
            }} 
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50
            }}
          >
            <h2 className="text-xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Creating Lasting Change
            </h2>
            <motion.p 
              className="text-gray-600 leading-relaxed text-sm md:text-lg px-2" 
              initial={{
                opacity: 0
              }} 
              whileInView={{
                opacity: 1
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                delay: 0.3,
                duration: 0.8
              }}
            >
              We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-3 relative z-10 max-w-7xl mx-auto" 
            style={{
              x: isMobile ? 0 : shift
            }}
          >
            {features.map((feature, index) => 
              <FeatureItem 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
                subtext={feature.subtext} 
                value={feature.value} 
                index={index} 
              />
            )}
          </motion.div>

          <motion.div 
            className="mt-6 md:mt-16 text-center" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true,
              margin: "-20px"
            }} 
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 70
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                variant="shimmer" 
                size={isMobile ? "default" : "lg"} 
                className="min-w-[180px] sm:min-w-[200px] group"
              >
                <a 
                  href="/lovable-uploads/sheraa-impact-report-2024.pdf" 
                  target="_blank" 
                  download="Sheraa-Impact-Report-2024.pdf"
                >
                  <FileDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Report
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default ImpactNumbers;
