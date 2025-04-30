
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import EligibilityCheckerButton from "./eligibility/EligibilityCheckerButton";

const EligibilityChecker = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-sheraa-light rounded-2xl p-6 md:p-12 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          whileHover={!isMobile ? { scale: 1.01 } : undefined}
        >
          {/* Single optimized background gradient for all devices */}
          <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 to-sheraa-light opacity-60" />

          <motion.div variants={itemVariants} className="relative z-10">
            <div className="inline-block bg-sheraa-primary/15 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6 backdrop-blur-sm">
              Program Assessment
            </div>
          </motion.div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <motion.div className="flex-1" variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-sheraa-dark mb-4">
                Not sure which program fits you?
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Take our quick assessment to find the perfect program for your entrepreneurial journey
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <EligibilityCheckerButton size="lg" />
            </motion.div>
          </div>

          {/* Minimal decorative dots - work well on mobile */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div 
              key={index}
              className="absolute w-2 h-2 rounded-full bg-sheraa-primary/30"
              style={{
                top: `${20 + index * 25}%`,
                left: `${5 + index * 5}%`,
                opacity: 0.2 + index * 0.1
              }}
            />
          ))}
          
          {Array.from({ length: 3 }).map((_, index) => (
            <div 
              key={index}
              className="absolute w-2 h-2 rounded-full bg-sheraa-teal/40"
              style={{
                bottom: `${15 + index * 20}%`,
                right: `${10 + index * 3}%`,
                opacity: 0.2 + index * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
