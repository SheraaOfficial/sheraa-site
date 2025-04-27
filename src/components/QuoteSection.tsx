
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Adjust the scroll reveal timing to start earlier and finish later
  // This gives more visibility time for the quote section
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.95, 1]);
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Container for the quote */}
      <motion.div 
        className="container relative z-10"
        style={{ opacity, scale }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-xl border-2 border-sheraa-primary/20 shadow-xl">
          <Quote className="text-sheraa-primary h-12 w-12 mb-6 opacity-70" />
          <blockquote>
            <p className="text-2xl md:text-3xl font-plus-jakarta font-medium text-sheraa-dark leading-relaxed mb-6">
              "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity with individual expression and creativity. This synergy fuels our mission to cultivate a world-class entrepreneurship ecosystem."
            </p>
            <footer className="font-plus-jakarta font-semibold text-lg text-sheraa-primary">
              — H.E. Sheikha Bodour Bint Sultan Al Qasimi, Chairperson
            </footer>
          </blockquote>
        </div>
      </motion.div>
      
      {/* Background elements with increased opacity */}
      <motion.div 
        className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-sheraa-primary/20 blur-3xl" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }} 
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-sheraa-teal/20 blur-3xl" 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }} 
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default QuoteSection;
