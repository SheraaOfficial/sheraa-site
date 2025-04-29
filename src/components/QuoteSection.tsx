
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Adjust the scroll reveal timing to start earlier and finish later
  // This gives more visibility time for the quote section
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.9, 1, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  
  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Container for the quote */}
      <motion.div 
        className="container relative z-10"
        style={{ opacity, scale, rotateZ: rotate }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-xl border-2 border-sheraa-primary/20 shadow-xl">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              stiffness: 100 
            }}
          >
            <Quote className="text-sheraa-primary h-12 w-12 mb-6 opacity-70" />
          </motion.div>
          
          <blockquote>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-plus-jakarta font-medium text-sheraa-dark leading-relaxed mb-6"
            >
              "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity with individual expression and creativity. This synergy fuels our mission to cultivate a world-class entrepreneurship ecosystem."
            </motion.p>
            <motion.footer 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-plus-jakarta font-semibold text-lg text-sheraa-primary"
            >
              — H.E. Sheikha Bodour Bint Sultan Al Qasimi, Chairperson
            </motion.footer>
          </blockquote>
        </div>
      </motion.div>
      
      {/* Background elements with increased opacity and parallax effect */}
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
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-20, 60]),
          y: useTransform(scrollYProgress, [0, 1], [0, 40]),
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
        style={{
          x: useTransform(scrollYProgress, [0, 1], [20, -60]),
          y: useTransform(scrollYProgress, [0, 1], [0, -40]),
        }}
      />
    </section>
  );
};

export default QuoteSection;
