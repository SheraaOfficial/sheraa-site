
import React from "react";
import { motion, useScroll } from "framer-motion";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const QuoteSection = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Generate sparkle positions
  const sparklePositions = React.useMemo(() => {
    return Array.from({ length: isMobile ? 5 : 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 3 : 6) + 1,
      delay: Math.random() * 2
    }));
  }, [isMobile]);
  
  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Simple gradient backdrop for mobile, more effects for desktop */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: isMobile 
            ? "radial-gradient(circle at 50% 50%, rgba(0,51,102,0.03) 0%, rgba(255,255,255,0) 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(0,51,102,0.08) 0%, rgba(255,255,255,0) 70%)"
        }}
      />
      
      {/* Container for the quote */}
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-xl border-2 border-sheraa-primary/20 shadow-xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            damping: 15,
            stiffness: 70
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              stiffness: 100 
            }}
            className="relative"
          >
            <Quote className="text-sheraa-primary h-14 w-14 mb-6 opacity-70" />
            
            {/* Sparkles - only rendered for non-mobile */}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl font-plus-jakarta font-medium text-sheraa-dark leading-relaxed mb-6"
            >
              "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity with individual expression and creativity. This synergy fuels our mission to cultivate a world-class entrepreneurship ecosystem."
            </motion.p>
            <motion.footer 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-plus-jakarta font-semibold text-lg text-sheraa-primary"
            >
              — H.E. Sheikha Bodour Bint Sultan Al Qasimi, Chairperson
            </motion.footer>
          </blockquote>
        </motion.div>
      </div>
      
      {/* Simplified decorative elements */}
      <div className={`absolute -left-20 top-20 w-40 h-40 rounded-full bg-sheraa-primary/10 blur-3xl opacity-30`} />
      <div className={`absolute -right-20 bottom-20 w-40 h-40 rounded-full bg-sheraa-teal/10 blur-3xl opacity-20`} />
    </section>
  );
};

export default QuoteSection;
