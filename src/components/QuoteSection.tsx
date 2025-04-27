
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const QuoteSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.95, 1]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with stronger contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/20 via-white to-sheraa-teal/20" />
      
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto"
        >
          <AspectRatio 
            ratio={16/9} 
            className="glass-card p-8 md:p-16 border-2 border-sheraa-primary/20 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex flex-col justify-center items-center"
            >
              <div className="absolute -top-8 md:-top-12">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-sheraa-primary to-sheraa-teal p-4 rounded-full shadow-lg"
                >
                  <Quote className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </motion.div>
              </div>
              
              <blockquote className="text-xl md:text-4xl lg:text-5xl font-semibold text-sheraa-dark leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  "At Sheraa, we believe in the transformative power of entrepreneurship. Our mission goes beyond building successful businesses – we're cultivating changemakers who will shape the future of Sharjah and the UAE."
                </motion.span>
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-bold text-sheraa-primary mb-2">
                  Sara Al Nuaimi
                </p>
                <p className="text-base md:text-lg text-sheraa-dark/80 font-medium">
                  Chief Executive Officer, Sheraa
                </p>
              </motion.div>
            </motion.div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
