
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
  
  // Enhance the scroll reveal timing for smoother transitions
  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.8, 1, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [3, 0, 0, 3]);
  const y = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, 50]);
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Add parallax background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]),
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,51,102,0.08) 0%, rgba(255,255,255,0) 70%)",
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]),
        }}
      />
      
      {/* Container for the quote */}
      <motion.div 
        className="container relative z-10"
        style={{ 
          opacity, 
          scale, 
          rotateZ: rotate, 
          y,
          filter: `blur(${blur}px)`
        }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-xl border-2 border-sheraa-primary/20 shadow-xl">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              stiffness: 100 
            }}
          >
            <Quote className="text-sheraa-primary h-14 w-14 mb-6 opacity-70" />
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
        </div>
      </motion.div>
      
      {/* Enhanced background elements with increased opacity and parallax effect */}
      <motion.div 
        className="absolute -left-20 top-20 w-60 h-60 rounded-full bg-sheraa-primary/20 blur-3xl" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }} 
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: useTransform(scrollYProgress, [0, 0.5, 1], [-20, -60, 20]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 80]),
        }}
      />
      
      <motion.div 
        className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-sheraa-teal/20 blur-3xl" 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }} 
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          x: useTransform(scrollYProgress, [0, 0.5, 1], [20, -30, -80]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], [0, -60, -20]),
        }}
      />
      
      <motion.div 
        className="absolute left-1/2 top-1/3 w-40 h-40 rounded-full bg-sheraa-orange/10 blur-3xl" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }} 
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 0]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 0]),
        }}
      />
    </section>
  );
};

export default QuoteSection;
