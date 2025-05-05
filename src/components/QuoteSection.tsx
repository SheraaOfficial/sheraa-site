
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { Glow } from "@/components/ui/glow-effect";
import { ParallaxSection } from "./parallax";

const QuoteSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Generate sparkle positions - fewer for mobile
  const sparklePositions = React.useMemo(() => {
    return Array.from({ length: isMobile ? 2 : 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 2 : 6) + 1,
      delay: Math.random() * 2
    }));
  }, [isMobile]);
  
  return (
    <ParallaxSection 
      direction="up" 
      scrollMultiplier={0} // Disable parallax on mobile
      spring={false}
    >
      <section 
        ref={containerRef} 
        className="relative py-8 md:py-32 overflow-visible px-3 md:px-0"
        style={{ 
          minHeight: isMobile ? '300px' : 'auto',
          visibility: 'visible',
          display: 'block'
        }}
      >
        {/* Simple gradient backdrop for mobile */}
        <div 
          className="absolute inset-0 z-0 opacity-50"
          style={{ 
            background: "radial-gradient(circle at 50% 50%, rgba(0,51,102,0.05) 0%, rgba(255,255,255,0) 70%)"
          }}
        />
        
        {/* Container for the quote */}
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-4 md:p-12 rounded-xl border border-sheraa-primary/20 shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 15,
              stiffness: 70
            }}
          >
            {/* Add the Glow component under the quote */}
            {!isMobile && <Glow variant="center" className="-z-10" />}
            
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                damping: 12, 
                stiffness: 100 
              }}
              className="relative"
            >
              <Quote className="text-sheraa-primary h-6 w-6 md:h-14 md:w-14 mb-2 md:mb-6 opacity-70" />
              
              {/* Sparkles - reduced for mobile */}
              {!isMobile && sparklePositions.map((sparkle, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full bg-sheraa-primary"
                  style={{
                    top: `${sparkle.y}%`,
                    left: `${sparkle.x}%`,
                    width: `${sparkle.size}px`,
                    height: `${sparkle.size}px`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + sparkle.delay,
                    repeat: Infinity,
                    delay: sparkle.delay * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            <blockquote>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm md:text-3xl font-plus-jakarta font-medium text-sheraa-dark leading-relaxed mb-3 md:mb-6"
              >
                "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity with individual expression and creativity. This synergy fuels our mission to cultivate a world-class entrepreneurship ecosystem."
              </motion.p>
              <motion.footer 
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-plus-jakarta font-semibold text-xs md:text-lg text-sheraa-primary"
              >
                — H.E. Sheikha Bodour Bint Sultan Al Qasimi, Chairperson
              </motion.footer>
            </blockquote>
          </motion.div>
        </div>
        
        {/* Simplified decorative elements - hide on mobile */}
        {!isMobile && (
          <>
            <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-sheraa-primary/10 blur-3xl opacity-30 hidden md:block" />
            <div className="absolute -right-20 bottom-20 w-40 h-40 rounded-full bg-sheraa-teal/10 blur-3xl opacity-20 hidden md:block" />
          </>
        )}
      </section>
    </ParallaxSection>
  );
};

export default QuoteSection;
